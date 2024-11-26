import { cn } from '~/src/utils/class-name';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-header border-b-2 border-secondary-900 bg-primary-600 font-semibold text-primary-50">
      <section
        className={cn(
          'mx-auto flex h-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-0',
        )}
      >
        {/* 여기에 코드 작성하시면 됩니다~ */}
      </section>
    </header>
  );
}
