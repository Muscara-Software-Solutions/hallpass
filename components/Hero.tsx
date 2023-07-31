export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('https://cdna.artstation.com/p/assets/images/images/026/970/116/medium/denis-shumoi-mebg6-1.jpg?1590232037');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold text-blue-300">Hallpass</h1>
        <p class="text-xl max-w-lg text-blue-100">The future of hallway management, built by educators, for educators.</p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a href="https://calendly.com/hallpassdotgg/demo" class="block mt-4 text-blue-600 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold">
          Free Demo{""}
        </a>
      </div>
    </div>
  );
}
