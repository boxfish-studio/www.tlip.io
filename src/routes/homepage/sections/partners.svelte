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
            <div class="mx-auto max-w-4xl">
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={40}
                    loop={true}
                    autoplay={true}
                    class="mySwiper"
                    modules={[Autoplay]}
                >
                {#each GOVERNMENT_PARTNERS.logos as logo}
                <SwiperSlide>
                    <div class="w-36 h-36 border border-grey-100 rounded p-4">
                        <img src={logo} alt={logo} class="w-full h-full object-contain" />
                    </div>
                </SwiperSlide>
                {/each}
                </Swiper>
            </div>
    </div>
    <h4 class="container font-bold mt-9 mb-4 text-center">{COMMERCIAL_PARTNERS.title}</h4>
        <div class="swiper-block w-full px-6 lg:px-0">
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={40}
                loop={true}
                autoplay={true}
                class="mySwiper"
                modules={[Autoplay]}
            >
                {#each COMMERCIAL_PARTNERS.logos as logo}
                    <SwiperSlide>
                        <div class="w-36 h-36 border border-grey-100 rounded p-4">
                            <img src={logo} alt={logo} class="w-full h-full object-contain" />
                        </div>
                    </SwiperSlide>
                {/each}
            </Swiper>
        </div>
</div>
