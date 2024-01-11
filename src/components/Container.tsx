type TContainerProps = {
  id: string;
  children: React.ReactNode;
};

export const Container = ({ id, children }: TContainerProps) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      {children}
    </section>
  );
};
