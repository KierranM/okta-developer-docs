<template>
  <header class="page-header">
    <SmartLink :item="{ link: '/' }" classes="header--logo">
      <img src="/img/icons/okta-developer.svg" alt="Okta Developer Logo" />
    </SmartLink>
    <div :class="{ 'menu--slideout': true, opened: menuOpened }">
      <div class="search--slideout opened">
        <SearchBar />
      </div>
      
      <HeaderMenu />
    </div>
    <div class="flex align-items-center">
      <SmartLink :item="{ link: '/signup/' }" classes="sign-up--button">
        Sign Up
      </SmartLink>
      <div class="mobile--toggles">
        <div 
          :class="{
            'mobile--toggle': true,
            'is-opened': menuOpened,
          }" 
          @click="toggleMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  components: {
    SearchBar: () => import("../components/SearchBar.vue"),
    SmartLink: () => import("../components/SmartLink.vue"),
    HeaderMenu: () => import("../components/HeaderMenu.vue"),
  },
  data() {
    return {
      isSearchPage: false,
      searchOpened: false,
      menuOpened: false,
    };
  },
  watch: {
    $route: "closeMenu",
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.isSearchPage = window.location.pathname === "/search/";
  },
  methods: {
    toggleSearch: function() {
      this.searchOpened = !this.searchOpened;
      this.menuOpened = false;
    },
    toggleMenu: function(value) {
      this.menuOpened = typeof value === "boolean" ? value : !this.menuOpened;
      this.searchOpened = false;
    },
    closeMenu: function() {
      this.toggleMenu(false);
    },
    handleResize: function() {
      if (window.innerWidth >= 768) {
        this.searchOpened = false;
        this.menuOpened = false;
      }
    },
  },
};
</script>
