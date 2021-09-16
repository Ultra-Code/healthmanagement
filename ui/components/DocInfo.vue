<script lang="ts" setup>
    import {useLoginStore} from "../store/loginstore"

    const loginstore = useLoginStore()

</script>

<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Welcome {{loginstore.data.email}}
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="bc9273ce-29bb-4565-959b-714607d4d027" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <!--<rect fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
            width="52" height="24"></rect>-->
          </svg>
          <span class="relative">We Are At Your Service</span>
        </span>
      Meet The Available Doctors
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        We will alway strive to provide you with the best health care service
      </p>
    </div>
    <div class="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div class="relative w-full h-48">
          <img
          src="https://image.freepik.com/free-photo/doctor-protective-mask-child-does-inhalation-african-woman_1157-47182.jpg"/>
        </div>
        <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div class="text-lg font-semibold">Child Care</div>
            <p class="text-sm text-gray-900">
              Bring you child for the best check up and health service
            </p>
            <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">$12</div>
          </div>
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Basic
          </a>
        </div>
      </div>
      <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div class="relative w-full h-48">
          <img
          src="https://img.freepik.com/free-photo/patient-couch-doctor-makes-ultrasound-diagnosis-man-white-uniform_1157-46168.jpg?size=338&ext=jpg" />
        </div>
        <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div class="text-lg font-semibold">Ultra Scan & Xray</div>
            <p class="text-sm text-gray-900">
              For ultra scans with the state of the art equipments
            </p>
            <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">$38</div>
          </div>
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Advanced
          </a>
        </div>
      </div>
      <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div class="relative w-full h-48">
          <img src="https://image.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42084.jpg" class="object-cover w-full h-full rounded-t" alt="Plan" />
        </div>
        <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div class="text-lg font-semibold">Dental Care</div>
            <p class="text-sm text-gray-900">
              No one like to visit the dentist but you would ours
            </p>
            <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">$78</div>
          </div>
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Pro
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
