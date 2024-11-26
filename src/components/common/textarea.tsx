'use client';

interface TextareaProps {
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  placeholder,
  name,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="rounded-lg bg-secondary-50 p-2">
      <textarea
        className={`h-[120px] w-full resize-none bg-transparent scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-200 focus:outline-none`}
        placeholder={placeholder}
        required
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
