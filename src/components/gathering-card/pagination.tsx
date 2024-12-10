'use client';

import * as React from 'react';

import CaretLeftIcon from '~/src/assets/icons/caret-left.svg';
import CaretRightIcon from '~/src/assets/icons/caret-right.svg';
import MoreHorizontal from '~/src/components/gathering-card/more-horizontal';
import { cn } from '~/src/utils/class-name';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  size?: 'large' | 'small';
} & React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'small',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      'inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors',
      isActive ? 'cursor-default' : 'cursor-pointer',
      'hover:bg-accent hover:text-accent-foreground',
      isActive
        ? 'bg-background text-neutral-800'
        : 'hover:bg-accent hover:text-accent-foreground text-neutral-400',
      size === 'large' ? 'h-12 w-12' : 'h-[34px] w-[34px]',
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  isFirstPage,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { isFirstPage?: boolean }) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn('cursor-default hover:bg-transparent', className)}
    {...props}
  >
    <CaretLeftIcon
      className={cn(
        isFirstPage
          ? 'cursor-default text-neutral-400'
          : 'cursor-pointer text-neutral-800',
      )}
    />
  </PaginationLink>
);

const PaginationNext = ({
  className,
  isLastPage,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { isLastPage?: boolean }) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn('cursor-default hover:bg-transparent', className)}
    {...props}
  >
    <CaretRightIcon
      className={cn(
        isLastPage
          ? 'cursor-default text-neutral-400'
          : 'cursor-pointer text-neutral-800',
      )}
    />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  size = 'small',
  ...props
}: React.ComponentProps<'span'> & { size?: 'large' | 'small' }) => (
  <span
    aria-hidden
    className={cn(
      'flex items-center justify-center',
      size === 'large' ? 'h-12 w-12' : 'h-[34px] w-[34px]',
      className,
    )}
    {...props}
  >
    <MoreHorizontal className={size === 'large' ? 'h-6 w-6' : 'h-4 w-4'} />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: 'large' | 'small';
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'small',
  className,
}: PaginationProps) => {
  const range = size === 'large' ? 2 : 1;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // 현재 페이지를 기준으로 앞뒤로 페이지 번호를 생성
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1,
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - range && page <= currentPage + range),
  );

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size={size}
            onClick={() =>
              !isFirstPage && onPageChange(Math.max(1, currentPage - 1))
            }
            isFirstPage={isFirstPage}
          />
        </PaginationItem>

        {pageNumbers.map((page, index) => (
          <React.Fragment key={page}>
            {index > 0 && pageNumbers[index - 1] !== page - 1 && (
              <PaginationItem>
                <PaginationEllipsis size={size} />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                size={size}
                isActive={currentPage === page}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}

        <PaginationItem>
          <PaginationNext
            size={size}
            onClick={() =>
              !isLastPage && onPageChange(Math.min(totalPages, currentPage + 1))
            }
            isLastPage={isLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

export default Pagination;
