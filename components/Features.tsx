import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/alarm.tsx";
import IconDesktop from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-desktop.tsx";
import IconAlert from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/alert-circle.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Features() {
  const featureItems = [
    {
      icon: IconAlarm,
      description: "Control your students with daily, semester, yearly, and location based pass limits.",
      link: "https://blog.hallpass.gg/proper-restrictions",
    },
    {
      icon: IconDesktop,
      description: "Complete integration with existing Student Information Systems like Infinite Campus or Google IAM.",
      link: "https://blog.hallpass.gg/seamless-integration"
    },
    {
      icon: IconAlert,
      description: "Built in Verkada Vape Detection and custom blacklists preventing two or more students from leaving at the same time.",
      link: "https://blog.hallpass.gg/increased-security",
    },
  ];

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-blue-600 inline-block p-3 rounded-xl text-white">
              <item.icon class="w-10 h-10" aria-hidden="true" />
            </div>
            <p class="text-xl">
              {item.description}
            </p>

            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-600 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight
                      class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}
