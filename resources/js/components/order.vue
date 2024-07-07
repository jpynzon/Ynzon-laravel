<template>
    <div id="order">
        <div class="container">
            <div class="product-area py-5 text-center">
                <h3 class="area-title fw-bold mb-5">Explore our most popular apps for creating anything you can imagine.
                </h3>

                <div class="cards d-flex flex-wrap justify-content-center">

                    <div class="card m-3 d-flex flex-wrap align-items-center justify-content-center">
                        <div class="left p-3">
                            <div class="icon d-flex flex-wrap align-items-center mb-3">
                                <img src="../../assets/images/PE.png" class="" height="60px">
                                <h6 class="title fw-bold me-lg-auto text-start">Photo<br>Editor</h6>
                                <button class="btn btn-primary rounded-5">BUY NOW</button>
                            </div>
                            <div class="text-group">
                                <h6 class="title fw-bold text-start">Combine, retouch, and remix your pics.</h6>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../../assets/images/pic1.jfif" class="w-100">
                        </div>
                    </div>

                    <div class="card m-3 d-flex flex-wrap align-items-center justify-content-center">
                        <div class="left p-3">
                            <div class="icon d-flex flex-wrap align-items-center mb-3">
                                <img src="../../assets/images/VE.png" class="" height="60px">
                                <h6 class="title fw-bold me-lg-auto text-start">Video<br>Editor</h6>
                                <button class="btn btn-primary rounded-5">BUY NOW</button>
                            </div>
                            <div class="text-group">
                                <h6 class="title fw-bold text-start">Edit, trim, enhance, and craft your videos.</h6>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../../assets/images/pic3.jfif" class="w-100">
                        </div>
                    </div>

                    <div class="card m-3 d-flex flex-wrap align-items-center justify-content-center">
                        <div class="left p-3">
                            <div class="icon d-flex flex-wrap align-items-center mb-3">
                                <img src="../../assets/images/CI.png" height="60px">
                                <h6 class="title fw-bold me-lg-auto text-start">Creative<br>Illustrator</h6>
                                <button class="btn btn-primary rounded-5">BUY NOW</button>
                            </div>
                            <div class="text-group">
                                <h6 class="title fw-bold text-start">Create logos, designs, graphics, and more.</h6>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../../assets/images/pic2.jfif" class="w-100">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order',
};
</script>

<style scoped>
.card {
    width: 25%;
    min-width: 200px;
}

.icon img {
    margin-right: 3px;
}
</style>
