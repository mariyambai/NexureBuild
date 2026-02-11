export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0A0A0A] border-t border-[#F5F2EE]/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#F5F2EE]/40 text-sm">
            © {currentYear} NexureBuild. Built with care.
          </div>
          <div className="text-2xl font-light text-[#F5F2EE]/60 tracking-tight">
            NexureBuild
          </div>
        </div>
      </div>
    </footer>
  );
}
