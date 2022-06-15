<script lang="ts">
    import { GOVERNMENT_PARTNERS, COMMERCIAL_PARTNERS } from "./partners";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay } from "swiper";
    // Import Swiper styles
    import "swiper/css";
</script>

<div class="flex flex-col justify-center items-center pt-20">
    <div class="container">
        <h4 class="font-bold mb-10 text-center">{GOVERNMENT_PARTNERS.title}</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full justify-items-center">
            {#each GOVERNMENT_PARTNERS.logos as logo}
                <div class="w-36 h-36 border border-grey-100 rounded p-4">
                    <img src={logo} alt={logo} class="w-full h-full object-contain" />
                </div>
            {/each}
        </div>
    </div>
    <h4 class="container font-bold mt-9 mb-4 text-center">{COMMERCIAL_PARTNERS.title}</h4>
    <Swiper
        breakpoints={{
            580: {
                slidesPerView: 2
            },
            750: {
                slidesPerView: 4
            },
            960: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1600: {
                slidesPerView: 8
            }
        }}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        class="mySwiper"
        modules={[Autoplay]}
    >
        {#each COMMERCIAL_PARTNERS.logos as logo}
            <SwiperSlide>
                <div class="w-36 h-36 border border-grey-100 rounded p-4 mx-auto">
                    <img src={logo} alt={logo} class="w-full h-full object-contain" />
                </div>
            </SwiperSlide>
        {/each}
    </Swiper>
</div>
