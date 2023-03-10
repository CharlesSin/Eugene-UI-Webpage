const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET Background Image Animation page. */
router.get("/bg_color_animation", function (req, res, next) {
  res.render("bg_color_animation");
});

/* GET Background Image on Hover page. */
router.get("/bg_image_onhover", function (req, res, next) {
  res.render("bg_image_onhover");
});

/* GET Background Image on Hover page. */
router.get("/bg_video", function (req, res, next) {
  res.render("bg_video");
});

/* GET Card Slider page. */
router.get("/cardslider", function (req, res, next) {
  res.render("cardslider");
});

/* GET CLock Example page. */
router.get("/clock", function (req, res, next) {
  res.render("clock_example");
});

/* GET Calculator page. */
router.get("/calculator", function (req, res, next) {
  res.render("calculator");
});

/* GET Day & Night Mode page. */
router.get("/B&W_Mode", function (req, res, next) {
  res.render("day&nightmode");
});

/* GET Date Picker page. */
router.get("/datepicker", function (req, res, next) {
  res.render("datepickerExample");
});

/* GET Dropdown Menu page. */
router.get("/dropdown_menu_1", function (req, res, next) {
  res.render("dropdownmenu1");
});

/* GET Dropdown Menu page. */
router.get("/dropdown_menu_2", function (req, res, next) {
  res.render("dropdownmenu2");
});

/* GET Dropdown Menu page. */
router.get("/dropdown_menu_3", function (req, res, next) {
  res.render("dropdownmenu3");
});

/* GET Form & Alert page. */
router.get("/form_alert", function (req, res, next) {
  res.render("form&alert");
});

/* GET Form & Javascript page. */
router.get("/form_script", function (req, res, next) {
  res.render("form&javascript");
});

/* GET Hover Effect page. */
router.get("/hovereffect", function (req, res, next) {
  res.render("hovereffect");
});

/* GET Image Gallery page. */
router.get("/img_gallery", function (req, res, next) {
  res.render("image-gallery");
});

/* GET list page. */
router.get("/list", function (req, res, next) {
  res.render("list");
});

/* GET Login page. */
router.get("/login_page", function (req, res, next) {
  res.render("loginpage");
});

/* GET Login Form. */
router.get("/login_form", function (req, res, next) {
  res.render("login_form");
});

/* GET Login Form. */
router.get("/loding", function (req, res, next) {
  res.render("lodinganimation");
});
/* GET Login Form. */
router.get("/load_image", function (req, res, next) {
  res.render("loadImage");
});

/* GET Multi Step Form. */
router.get("/multi_SF", function (req, res, next) {
  res.render("multi_step_form");
});

/* GET Menu Hover Form. */
router.get("/menuhover", function (req, res, next) {
  res.render("menuhover");
});

/* GET Menu Hover Form. */
router.get("/musicbeats", function (req, res, next) {
  res.render("musicbeats");
});

/* GET navbar & dropdown menu page. */
router.get("/navbar", function (req, res, next) {
  res.render("navbar&dropdownmenu");
});

/* GET navbar view page. */
router.get("/navbar_view", function (req, res, next) {
  res.render("navbarview");
});

/* GET Personal Blog page. */
router.get("/personal_blog", function (req, res, next) {
  res.render("personal_blog");
});

/* GET Pricing Table page. */
router.get("/pricingtable", function (req, res, next) {
  res.render("pricingtable");
});

/* GET Simple Portfolio Blog page. */
router.get("/portfolio", function (req, res, next) {
  res.render("simpleportfolioblog");
});

/* GET Simple Portfolio Blog page. */
router.get("/phone_UI", function (req, res, next) {
  res.render("phoneUI");
});

/* GET Simple Portfolio Blog page. */
router.get("/socialmediaicon", function (req, res, next) {
  res.render("socialmediaicon");
});

/* GET Scroll Animation page. */
router.get("/scrollanimation", function (req, res, next) {
  res.render("scrollanimation");
});

/* GET Search Button page. */
router.get("/searchbtn", function (req, res, next) {
  res.render("search_btn");
});

/* GET Sign Up page. */
router.get("/sign_up", function (req, res, next) {
  res.render("signup");
});

/* GET Split Screen page. */
router.get("/splitscreen", function (req, res, next) {
  res.render("splitscreen");
});

/* GET Side Nav page. */
router.get("/side_nav", function (req, res, next) {
  res.render("sidenav");
});

/* GET Sunrise page. */
router.get("/sunrise", function (req, res, next) {
  res.render("sunrise");
});

/* GET Table page. */
router.get("/table", function (req, res, next) {
  res.render("tableview");
});

/* GET Text Animation page. */
router.get("/text_animation_1", function (req, res, next) {
  res.render("textanimation1");
});

/* GET Text Animation page. */
router.get("/text_animation_2", function (req, res, next) {
  res.render("textanimation2");
});

/* GET Shiny Text Animation page. */
router.get("/text_animation_3", function (req, res, next) {
  res.render("textanimation3");
});

/* GET Text Rotate Animation page. */
router.get("/text_animation_4", function (req, res, next) {
  res.render("textanimation4");
});

/* GET Team_Section page. */
router.get("/team_section", function (req, res, next) {
  res.render("team_Section");
});

/* GET Timer JS Animation page. */
router.get("/timer", function (req, res, next) {
  res.render("timerjs");
});

/* GET Shiny Text Animation page. */
router.get("/validate_form", function (req, res, next) {
  res.render("validateform");
});

/* GET Vertical Menu page. */
router.get("/vertical_menu", function (req, res, next) {
  res.render("vertical_menu");
});

/* GET Water Ripple page. */
router.get("/waterripple", function (req, res, next) {
  res.render("waterripple");
});

/* GET Youtube Player page. */
router.get("/youtube_example", function (req, res, next) {
  res.render("youtubeplayer");
});

module.exports = router;
