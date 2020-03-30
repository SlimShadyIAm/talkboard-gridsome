<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <!-- <a class="navbar-item">
					Home
				</a>

				<a class="navbar-item">
					Documentation
                </a>-->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style>
.navbar-burger {
    color: #fff;
}

.navbar-burger:hover {
    color: rgb(204, 200, 200);
}
</style>
