interface NavProps {
  title: string
  route: string
}

export default function NavButton({ title, route }: NavProps) {
  return (
    <a className="p-2 px-3 bg-blue-400 rounded shadow-sm text-white font-semibold leading-none text-xl my-auto" href={route}>
      {title}
    </a>
  );
}
