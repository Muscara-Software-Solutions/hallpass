export default function Quote() {
  return(
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-2xl font-semibold leading-7 text-indigo-600">Don't take it from us, hear what our supporters have to say</h2>
      </div>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="mt-10">
          <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
            <p>“In the past, we had issues with students using unlimited passes, spending too much time out of class, or abusing that privilege. Hallpass has allowed us to more consistently keep tabs on students, has reduced the number of students in the halls, and given students accountability in their own restroom breaks. It has been a great help to our safety and supervision.”</p>
          </blockquote>
          <figcaption class="mt-10">
            <img class="mx-auto h-10 w-10 rounded-full" src="https://www.jessamine.kyschools.us/docs/building/2/wjhs_thornton.jpg?id=39815&width=150" alt="" />
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Brady Thornton</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">Principal at West Jessamine High School</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

  )
}