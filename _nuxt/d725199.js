(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{381:function(t,e,l){"use strict";l.r(e);var c=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("footer",{staticClass:"m_footer"},[c("div",{staticClass:"container"},[c("div",{staticClass:"footer_text"},[c("div",[c("div",{staticClass:"f_title"},[t._v("©2023 "),c("span",[t._v("Sahna.uz")])]),t._v(" "),c("div",{staticClass:"f_desk"},[t._v("Barcha huquqlar himoyalangan")])]),t._v(" "),c("div",{staticClass:"f_center"},[t._v("\n          MAZZA QILING!\n        ")]),t._v(" "),c("div",[c("img",{attrs:{src:l(384),alt:""}})])])])])])}],n=l(78),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c,!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(381).default})},382:function(t,e,l){"use strict";l.r(e);l(2),l(1);var c={data:function(){return{is_active:!1,menu:[]}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menu=e.data}))}},n=l(78),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"main_sidebar ",class:{active:t.is_active}},[c("div",{staticClass:"sidebars"},[c("div",[c("button",{staticClass:"exit_btn",on:{click:function(e){t.is_active=!1}}},[c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none"}},[c("path",{attrs:{d:"M1.00059 12.6672C0.802841 12.6671 0.609825 12.6085 0.445415 12.4986C0.281006 12.3887 0.152921 12.2326 0.0772513 12.0499C0.0015813 11.8672 -0.0184451 11.6661 0.0201224 11.4722C0.05869 11.2782 0.15375 11.1001 0.29356 10.9602L10.9596 0.293213C11.1471 0.105572 11.4018 9.38308e-05 11.6671 6.26009e-08C11.9324 -9.37056e-05 12.1865 0.105156 12.3741 0.292664C12.5618 0.480172 12.6675 0.734547 12.6676 0.999817C12.6677 1.26509 12.5621 1.51957 12.3746 1.70721L1.7086 12.3742C1.61564 12.4672 1.50538 12.5409 1.38389 12.5912C1.2624 12.6415 1.13207 12.6673 1.00059 12.6672Z",fill:"white"}}),t._v(" "),c("path",{attrs:{d:"M11.6655 12.6672C11.4003 12.6671 11.146 12.5618 10.9585 12.3742L0.292481 1.70721C0.199636 1.6143 0.126394 1.504 0.0761719 1.38263C0.0259499 1.26126 -4.63672e-05 1.13117 6.20821e-08 0.999817C4.64914e-05 0.868468 0.0258642 0.738459 0.0761719 0.617127C0.12648 0.495794 0.200059 0.385508 0.292969 0.292664C0.385879 0.199819 0.496308 0.126211 0.617676 0.0759888C0.739044 0.0257668 0.86914 -4.63668e-05 1.00049 6.25216e-08C1.13184 4.64918e-05 1.26197 0.0259252 1.3833 0.076233C1.50463 0.126541 1.61468 0.200303 1.70752 0.293213L12.3735 10.9602C12.5134 11.1001 12.6089 11.2784 12.6475 11.4724C12.686 11.6665 12.6661 11.8676 12.5903 12.0503C12.5145 12.233 12.3862 12.3892 12.2217 12.499C12.0571 12.6088 11.8634 12.6673 11.6655 12.6672Z",fill:"white"}})])])]),t._v(" "),c("div",{staticClass:"side_menus"},[c("NuxtLink",{attrs:{to:t.localePath("/")},nativeOn:{click:function(e){t.is_active=!1}}},[c("div",[t._v("\n            "+t._s(t.$t("home"))+"\n          ")])]),t._v(" "),c("NuxtLink",{attrs:{to:t.localePath("/comic")},nativeOn:{click:function(e){t.is_active=!1}}},[c("div",[t._v("\n            "+t._s(t.$t("comics"))+"\n          ")])]),t._v(" "),c("NuxtLink",{attrs:{to:t.localePath("/menu")},nativeOn:{click:function(e){t.is_active=!1}}},[c("div",[t._v("\n            "+t._s(t.$t("menu"))+"\n          ")])]),t._v(" "),c("NuxtLink",{attrs:{to:t.localePath("/bar")},nativeOn:{click:function(e){t.is_active=!1}}},[c("div",[t._v("\n            "+t._s(t.$t("bar"))+"\n          ")])]),t._v(" "),c("NuxtLink",{attrs:{to:t.localePath("/gallery")},nativeOn:{click:function(e){t.is_active=!1}}},[c("div",[t._v("\n            "+t._s(t.$t("galery"))+"\n          ")])])],1),t._v(" "),c("div",{staticClass:"lang_menu"},[c("div",{staticClass:"list_lang"},[c("NuxtLink",{attrs:{to:t.switchLocalePath("uz")}},[t._v("O'z /")]),t._v(" "),c("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Ru /")]),t._v(" "),c("NuxtLink",{attrs:{to:t.switchLocalePath("en")}},[t._v("Eng")])],1)])])]),t._v(" "),c("div",{staticClass:"container"},[c("div",{staticClass:"main_nav"},[c("div",{staticClass:"humburger"},[c("button",{on:{click:function(e){t.is_active=!0}}},[c("svg",{attrs:{width:"30",height:"20",viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M23.2192 11.6828H6.77485C6.43159 11.6828 6.10223 11.5521 5.85951 11.3194C5.61678 11.0867 5.48047 10.7712 5.48047 10.4421C5.48047 10.113 5.61678 9.79725 5.85951 9.56456C6.10223 9.33186 6.43159 9.20117 6.77485 9.20117H23.2192C23.5625 9.20117 23.8918 9.33186 24.1345 9.56456C24.3773 9.79725 24.5136 10.113 24.5136 10.4421C24.5136 10.7712 24.3773 11.0867 24.1345 11.3194C23.8918 11.5521 23.5625 11.6828 23.2192 11.6828Z",fill:"white"}}),t._v(" "),c("path",{attrs:{d:"M28.7059 20.0002H1.29438C0.951121 20.0002 0.621999 19.8695 0.379276 19.6368C0.136554 19.4041 0 19.0886 0 18.7595C0 18.4304 0.136554 18.1146 0.379276 17.8819C0.621999 17.6492 0.951121 17.5186 1.29438 17.5186H28.7059C29.0491 17.5186 29.3782 17.6492 29.621 17.8819C29.8637 18.1146 30 18.4304 30 18.7595C30 19.0886 29.8637 19.4041 29.621 19.6368C29.3782 19.8695 29.0491 20.0002 28.7059 20.0002Z",fill:"white"}}),t._v(" "),c("path",{attrs:{d:"M28.7059 2.48163H1.29438C0.951121 2.48163 0.621999 2.35094 0.379276 2.11825C0.136554 1.88555 0 1.57002 0 1.24093C0 0.911843 0.136554 0.596083 0.379276 0.363384C0.621999 0.130685 0.951121 0 1.29438 0H28.7059C29.0491 0 29.3782 0.130685 29.621 0.363384C29.8637 0.596083 30 0.911843 30 1.24093C30 1.57002 29.8637 1.88555 29.621 2.11825C29.3782 2.35094 29.0491 2.48163 28.7059 2.48163Z",fill:"white"}})])])]),t._v(" "),c("div",{staticClass:"logo_img"},[c("NuxtLink",{attrs:{to:"/"}},[c("img",{attrs:{src:l(383),alt:""}})])],1),t._v(" "),c("div",{staticClass:"messenger"},[c("div",{staticClass:"telegram"},[c("a",{attrs:{href:"#"}},[c("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7538 11.4987 19.3838 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6113 5.8725 15.0625 6.86375 14.675Z",fill:"#fff"}})])])]),t._v(" "),c("div",[c("a",{attrs:{href:"#"}},[c("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("g",{attrs:{"clip-path":"url(#clip0_1_182)"}},[c("path",{attrs:{d:"M15 18.0762C16.6989 18.0762 18.0762 16.6989 18.0762 15C18.0762 13.3011 16.6989 11.9238 15 11.9238C13.3011 11.9238 11.9238 13.3011 11.9238 15C11.9238 16.6989 13.3011 18.0762 15 18.0762Z",fill:"white"}}),t._v(" "),c("path",{attrs:{d:"M15 0.351562C6.9099 0.351562 0.351562 6.9099 0.351562 15C0.351562 23.0901 6.9099 29.6484 15 29.6484C23.0901 29.6484 29.6484 23.0901 29.6484 15C29.6484 6.9099 23.0901 0.351562 15 0.351562ZM24.0503 18.723C23.98 20.1157 23.5886 21.489 22.5737 22.4931C21.549 23.5068 20.1691 23.8845 18.7631 23.9541H11.237C9.83074 23.8845 8.45109 23.5071 7.42635 22.4931C6.41139 21.489 6.0201 20.1157 5.94979 18.723V11.277C6.0201 9.8843 6.41145 8.51098 7.42635 7.5068C8.45109 6.49312 9.83092 6.11543 11.237 6.04588H18.763C20.1693 6.11543 21.5489 6.49295 22.5737 7.5068C23.5886 8.51098 23.9799 9.8843 24.0502 11.277L24.0503 18.723Z",fill:"white"}}),t._v(" "),c("path",{attrs:{d:"M18.6677 7.74229C16.8345 7.69202 13.1654 7.69202 11.3322 7.74229C10.3783 7.76849 9.29679 8.00597 8.6171 8.73194C7.91081 9.48657 7.64392 10.3983 7.61685 11.4182C7.56927 13.2084 7.61685 18.5814 7.61685 18.5814C7.64785 19.6013 7.91081 20.5131 8.6171 21.2677C9.29679 21.9939 10.3783 22.2312 11.3322 22.2574C13.1654 22.3076 16.8345 22.3076 18.6677 22.2574C19.6217 22.2312 20.7031 21.9937 21.3828 21.2677C22.0891 20.5131 22.356 19.6014 22.3831 18.5814V11.4182C22.356 10.3983 22.0891 9.48657 21.3828 8.73194C20.7029 8.00573 19.6214 7.76849 18.6677 7.74229ZM14.9997 19.7679C14.0567 19.7679 13.1348 19.4883 12.3507 18.9643C11.5666 18.4404 10.9555 17.6957 10.5946 16.8245C10.2337 15.9532 10.1393 14.9945 10.3233 14.0696C10.5072 13.1447 10.9614 12.2951 11.6282 11.6283C12.295 10.9615 13.1446 10.5074 14.0695 10.3234C14.9944 10.1394 15.9531 10.2338 16.8244 10.5947C17.6956 10.9556 18.4403 11.5667 18.9642 12.3508C19.4881 13.1349 19.7678 14.0568 19.7678 14.9998C19.7678 16.2644 19.2654 17.4772 18.3713 18.3714C17.4771 19.2656 16.2643 19.7679 14.9997 19.7679ZM19.7881 11.216C19.5995 11.2159 19.4151 11.16 19.2583 11.0551C19.1015 10.9503 18.9793 10.8014 18.9072 10.6271C18.8351 10.4529 18.8162 10.2611 18.853 10.0762C18.8899 9.8912 18.9807 9.72131 19.1141 9.58796C19.2474 9.45462 19.4174 9.36382 19.6023 9.32705C19.7873 9.29027 19.979 9.30917 20.1533 9.38135C20.3275 9.45354 20.4764 9.57576 20.5812 9.73258C20.686 9.88939 20.7419 10.0738 20.7419 10.2624C20.7419 10.3876 20.7172 10.5116 20.6693 10.6273C20.6214 10.7431 20.5511 10.8482 20.4625 10.9367C20.3739 11.0253 20.2688 11.0955 20.1531 11.1434C20.0373 11.1914 19.9133 11.216 19.7881 11.216Z",fill:"white"}})]),t._v(" "),c("defs",[c("clipPath",{attrs:{id:"clip0_1_182"}},[c("rect",{attrs:{width:"30",height:"30",fill:"white"}})])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,l){t.exports=l.p+"img/logo.54cdf06.svg"},384:function(t,e,l){t.exports=l.p+"img/image_footer.3b332d1.png"},392:function(t,e,l){"use strict";l.r(e);var c=l(382),n=l(381),C=l(385),r=l.n(C),v=(l(247),l(248),{components:{Footer:n.default,Navbar:c.default,VueSlickCarousel:r.a},data:function(){return{settings:{autoplay:!0,autoplaySpeed:2e3,dots:!0,focusOnSelect:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1326,settings:{slidesToShow:2,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},comic_data:{},banner:[]}},mounted:function(){var t=this;this.$axios.get("pk/".concat(this.$route.params.id,"/"),{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.comic_data=e.data})),this.$axios.get("banners",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.banner=e.data}))}}),o=l(78),component=Object(o.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"comics"},[l("div",{staticClass:"home"},[l("div",{staticClass:"header"},[l("Navbar"),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"carusel_crad container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"comics_image"},[l("img",{attrs:{src:t.comic_data.images,alt:""}})])]),t._v(" "),l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"comics_about"},[l("div",{staticClass:"comics_firs_name"},[t._v("\n                "+t._s(t.comic_data.first_name)+"\n              ")]),t._v(" "),l("div",{staticClass:"comics_last_name"},[t._v("\n                "+t._s(t.comic_data.last_name)+"\n              ")])]),t._v(" "),l("div",{staticClass:"comics_description"},[l("div",{staticClass:"comics_title"},[t._v("\n                Bio:\n              ")]),t._v(" "),l("div",{staticClass:"comics_desc"},[t._v("\n                "+t._s(t.comic_data.bio)+"\n              ")])]),t._v(" "),l("div",{staticClass:"comics_messenger"},[l("div",{staticClass:"comics_messenger_title"},[t._v("\n                "+t._s(t.$t("s_media"))+"\n              ")]),t._v(" "),l("div",{staticClass:"messenger"},[l("div",{staticClass:"telegram"},[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7538 11.4987 19.3838 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6113 5.8725 15.0625 6.86375 14.675Z",fill:"#fff"}})])])]),t._v(" "),l("div",[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("g",{attrs:{"clip-path":"url(#clip0_1_182)"}},[l("path",{attrs:{d:"M15 18.0762C16.6989 18.0762 18.0762 16.6989 18.0762 15C18.0762 13.3011 16.6989 11.9238 15 11.9238C13.3011 11.9238 11.9238 13.3011 11.9238 15C11.9238 16.6989 13.3011 18.0762 15 18.0762Z",fill:"white"}}),t._v(" "),l("path",{attrs:{d:"M15 0.351562C6.9099 0.351562 0.351562 6.9099 0.351562 15C0.351562 23.0901 6.9099 29.6484 15 29.6484C23.0901 29.6484 29.6484 23.0901 29.6484 15C29.6484 6.9099 23.0901 0.351562 15 0.351562ZM24.0503 18.723C23.98 20.1157 23.5886 21.489 22.5737 22.4931C21.549 23.5068 20.1691 23.8845 18.7631 23.9541H11.237C9.83074 23.8845 8.45109 23.5071 7.42635 22.4931C6.41139 21.489 6.0201 20.1157 5.94979 18.723V11.277C6.0201 9.8843 6.41145 8.51098 7.42635 7.5068C8.45109 6.49312 9.83092 6.11543 11.237 6.04588H18.763C20.1693 6.11543 21.5489 6.49295 22.5737 7.5068C23.5886 8.51098 23.9799 9.8843 24.0502 11.277L24.0503 18.723Z",fill:"white"}}),t._v(" "),l("path",{attrs:{d:"M18.6677 7.74229C16.8345 7.69202 13.1654 7.69202 11.3322 7.74229C10.3783 7.76849 9.29679 8.00597 8.6171 8.73194C7.91081 9.48657 7.64392 10.3983 7.61685 11.4182C7.56927 13.2084 7.61685 18.5814 7.61685 18.5814C7.64785 19.6013 7.91081 20.5131 8.6171 21.2677C9.29679 21.9939 10.3783 22.2312 11.3322 22.2574C13.1654 22.3076 16.8345 22.3076 18.6677 22.2574C19.6217 22.2312 20.7031 21.9937 21.3828 21.2677C22.0891 20.5131 22.356 19.6014 22.3831 18.5814V11.4182C22.356 10.3983 22.0891 9.48657 21.3828 8.73194C20.7029 8.00573 19.6214 7.76849 18.6677 7.74229ZM14.9997 19.7679C14.0567 19.7679 13.1348 19.4883 12.3507 18.9643C11.5666 18.4404 10.9555 17.6957 10.5946 16.8245C10.2337 15.9532 10.1393 14.9945 10.3233 14.0696C10.5072 13.1447 10.9614 12.2951 11.6282 11.6283C12.295 10.9615 13.1446 10.5074 14.0695 10.3234C14.9944 10.1394 15.9531 10.2338 16.8244 10.5947C17.6956 10.9556 18.4403 11.5667 18.9642 12.3508C19.4881 13.1349 19.7678 14.0568 19.7678 14.9998C19.7678 16.2644 19.2654 17.4772 18.3713 18.3714C17.4771 19.2656 16.2643 19.7679 14.9997 19.7679ZM19.7881 11.216C19.5995 11.2159 19.4151 11.16 19.2583 11.0551C19.1015 10.9503 18.9793 10.8014 18.9072 10.6271C18.8351 10.4529 18.8162 10.2611 18.853 10.0762C18.8899 9.8912 18.9807 9.72131 19.1141 9.58796C19.2474 9.45462 19.4174 9.36382 19.6023 9.32705C19.7873 9.29027 19.979 9.30917 20.1533 9.38135C20.3275 9.45354 20.4764 9.57576 20.5812 9.73258C20.686 9.88939 20.7419 10.0738 20.7419 10.2624C20.7419 10.3876 20.7172 10.5116 20.6693 10.6273C20.6214 10.7431 20.5511 10.8482 20.4625 10.9367C20.3739 11.0253 20.2688 11.0955 20.1531 11.1434C20.0373 11.1914 19.9133 11.216 19.7881 11.216Z",fill:"white"}})]),t._v(" "),l("defs",[l("clipPath",{attrs:{id:"clip0_1_182"}},[l("rect",{attrs:{width:"30",height:"30",fill:"white"}})])])])])])])])])]),t._v(" "),l("div",{staticClass:"events"},[l("div",{staticClass:"events_title"},[t._v(t._s(t.$t("events")))])]),t._v(" "),t.banner.length>0?l("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.banner,(function(e,c){return l("div",{key:c+"A",staticClass:"carusel_crad_f",class:{actives:2==e}},[l("div",{staticClass:"header_card event_card"},[l("div",{staticClass:"carusel_crad_img"},[l("img",{attrs:{src:e.images,alt:""}})]),t._v(" "),l("div",{staticClass:"carusel_crad_name"},[t._v("\n                "+t._s(e.name)+"\n\n              ")]),t._v(" "),l("div",{staticClass:"carusel_crad_about"},[l("div",{staticClass:"carusel_crad_title"},[t._v("\n                  "+t._s(e.type)+"\n                ")]),t._v(" "),l("div",{staticClass:"carusel_crad_desc"},[t._v("\n                  "+t._s(e.description)+"\n                ")])]),t._v(" "),l("div",{staticClass:"carusel_crad_main_price"},[l("div",{staticClass:"carusel_crad_price"},[l("div",[t._v(t._s(t.$t("price"))+":")]),t._v(" "),l("div",[t._v(t._s(e.price))])]),t._v(" "),l("div",{staticClass:"carusel_crad_price"},[l("div",[t._v(t._s(t.$t("date_time"))+":")]),t._v(" "),l("div",[t._v(t._s(e.date_time))])])]),t._v(" "),l("div",{staticClass:"carusel_crad_btn"},[l("a",{attrs:{href:e.url}},[l("div",{staticClass:"carusel_crad_btn_child"},[t._v("\n                    "+t._s(t.$t("title"))+"\n                  ")])])])])])})),0):t._e()],1)],1)]),t._v(" "),l("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav_section"},[e("div",{staticClass:"dark_header"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:l(382).default,Footer:l(381).default})}}]);