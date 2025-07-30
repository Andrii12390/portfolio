interface Props {
  sectionId: string;
  children: React.ReactNode;
}

export const SectionLayout = ({ sectionId, children }: Props) => {
  return (
    <section id={sectionId}>
      <div className="container mx-auto flex min-h-[calc(100svh-var(--header-height))] px-4 py-8">
        {children}
      </div>
    </section>
  );
};
