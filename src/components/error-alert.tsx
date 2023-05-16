import { Alert } from '@material-tailwind/react';

interface ErrorAlertProps {
  message: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function ErrorAlert({ message, isOpen, setIsOpen }: ErrorAlertProps) {
  return (
    <>
      <Alert
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="bg-wr-pink"
      >
        {message}
      </Alert>
    </>
  );
}
