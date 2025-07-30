type TitleAlign = 'start' | 'center' | 'end';

interface Props {
  title: string;
  titleAlign?: TitleAlign;
  isEnd?: boolean;
}

export const SectionDivider = ({ title, titleAlign = 'center', isEnd = false }: Props) => {
  if (isEnd) {
    return (
      <div className="flex items-center justify-end gap-3">
        <span className="text-primary/75 text-xl font-bold">&lt;</span>
        <h2 className="text-muted-foreground text-xl font-bold sm:text-2xl">{title}</h2>
        <span className="text-primary/75 text-xl">/&gt;</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {['center', 'end'].includes(titleAlign) && <div className="bg-primary h-px flex-1" />}
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl font-bold">&lt;</span>

        <h2 className="text-primary-foreground text-xl font-bold sm:text-2xl">{title}</h2>
        <span className="text-primary text-xl font-bold">/&gt;</span>
      </div>
      {['center', 'start'].includes(titleAlign) && <div className="bg-primary h-px flex-1" />}
    </div>
  );
};
