import { cn } from '~/src/utils/class-name';

export default function FloatingBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-10 flex min-h-floatingBar items-center border-t-2 border-secondary-900 bg-white py-5">
      <section
        className={cn(
          'mx-auto flex h-full w-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-[6.25rem]',
        )}
      >
        {/* 여기에 코드 작성하시면 됩니다~ */}
      </section>
    </footer>
  );
}
