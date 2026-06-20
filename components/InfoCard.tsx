type InfoCardProps = {
  children: React.ReactNode;
};

export default function InfoCard({ children }: InfoCardProps) {
  return (
    <div
      className="
        bg-white
        text-black
        rounded-3xl
        min-h-[120px]
        px-6
        py-4
        flex
        items-center
        justify-center
        text-center
      "
    >
      {children}
    </div>
  );
}