import { ComponentChildren } from "preact";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Resources",
      children: [
        { name: "Blog", href: "https://blog.hallpass.gg" },
        { name: "Developers", href: "/docs" }
      ],
    },
    {
      title: "Legal",
      children: [
        { name: "Terms", href: "/tos" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "License", href: "/license" }
      ]
    },
    {
      title: "Support",
      children: [
        { name: "Email", href: "mailto:support@hallpass.gg" },
        { name: "Bugs", href: "/bugs" },
        { name: "Ideas", href: "/ideas" },
        { name: "Uptime", href: "/uptime" }
      ]
    },
    {
      title: "Social",
      children: [
        { name: "Email", href: "mailto:support@hallpass.gg" },
        { name: "GitHub", href: "https://github.com/muscara-software-solutions" },
        { name: "Twitter", href: "https://twitter.com/muscarasoftware" },
        { name: "LinkedIn", href: "https://linkedin.com/company/muscara-software-solutions" }
      ]
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Hallpass
          </div>
        </div>
        <div class="text-gray-500">
          Copyright © <script>document.write(new Date().getFullYear())</script> <a href="https://muscarasoftware.com"> Muscara Software Solutions, LLC.</a><br /> All right reserved.
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
      </div>
    </div>
  );
}
