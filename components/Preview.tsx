export default function Preview() {
  return (
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-indigo-600">Hallpass</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Streamline your hallway management</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Ditch the paper and clipboard, start using a more comprehensive approach to managing your facilities hallway safety.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/screenshot.png" alt="" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Hallpass is specifically designed to integrate into your instituitions daily workflow, ensuring a smooth and efficient implementation. With its user-friendly interface and intuitive features, Hallpass eliminates any learning curves.
              </p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 flex-none text-yellow-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 10l0 3l2 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path></svg>
                  <span><strong class="font-semibold text-gray-900">Student Information Systems. </strong> Import your students with ease using our suite of SIS tools.</span>
                </li>
                <li class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 10l0 3l2 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path></svg>
                  <span><strong class="font-semibold text-gray-900">Customized Features.</strong> Only enable the features best fit for your schools workflow.</span>
                </li>
                <li class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 10l0 3l2 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path></svg>
                  <span><strong class="font-semibold text-gray-900">Specialized Identification.</strong> Identify your students the way you prefer, either Digitally or Physically</span>
                </li>
              </ul>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p class="mt-6">Hallpass is a cloud hosted service, allowing you to focus on whats most important while we handle the rest.</p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Free Demo</h2>
              <p class="mt-8">We offer <span class="text-green-600">FREE</span> demos so you can see if Hallpass is a good fit for you. <a class="text-blue-600" href="https://calendly.com/hallpassdotgg/demo">Click here</a> to schedule yours today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}