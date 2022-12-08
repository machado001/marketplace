export default function Footer() {
  return (
    <div className="sticky bottom 0">
      <div
        id="footer"
        className="bg-slate-300 w-full absolute flex justify-center h-20 p-8 "
      >
        <p>
          &copy; GGH - Gabriel, Gustavo & Heitor. {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
