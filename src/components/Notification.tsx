import React from 'react';

// 1. Оновлюємо інтерфейс Props
interface Props {
  error: string;
  onClose: () => void; // Функція, яка нічого не приймає і не повертає
}

export const Notification: React.FC<Props> = ({ error, onClose }) => {
  // Клас 'hidden' будемо додавати, якщо помилки немає.
  // Це дозволить CSS-анімаціям плавно ховати блок.
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${!error ? 'hidden' : ''}`}
    >
      {/* 2. Додаємо обробник onClick */}
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={onClose} // Викликаємо функцію, отриману з App
      />
      {error}
    </div>
  );
};
