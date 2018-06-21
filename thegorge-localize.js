var loc_languages = {
    "en_US": "English",
    "zh_TW": "繁",
    "zh_HA": "简"
}

var loc_selected_language = "en_US";

function GorgeRecipebookLocalize() {

    // Add language buttons
    var btn_language_div = document.createElement("div");
    $(btn_language_div).attr('class', 'btn_language_div');
    for (var language in loc_languages) {
        let button = document.createElement("div");
        $(button).attr('class', "button language_btn");
        $(button).attr('for', language);
        $(button).text(loc_languages[language]);
        $(btn_language_div).append(button);
    }
    $('.recipelist').append(btn_language_div);

    // Look for a cookie
    var language = loc_get_cookie();
    if (language != null && loc_languages[language] != null) loc_set_language(language);

    // Setup button listener
    $('.language_btn').on('click', e => {
        // Unselect others
        $('.language_btn').removeClass('selected');

        $(e.target).addClass('selected');

        loc_set_language($(e.target).attr("for"));
    });
}

function loc_set_language(language_key) {
    loc_selected_language = language_key;

    // Update cravings
    var craving_elems = $('.btn_cat_div label.button');
    for (var i = 0; i < craving_elems.length; i++) {
        $(craving_elems[i]).text(loc_string($(craving_elems[i]).attr('for')));
    }

    // Update stations
    var station_elems = $('.btn_station_div label.button');
    for (var i = 0; i < station_elems.length; i++) {
        $(station_elems[i]).text(loc_string($(station_elems[i]).attr('for')));
    }

    // Set a cookie
    loc_set_cookie("language", loc_selected_language, 6);
}

function loc_set_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loc_get_cookie(cname) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function loc_string(key) {
    return loc_strings[loc_selected_language][key] || "Invalid String";
}

var loc_strings = {
    "en_US": {
        "TheGorgeRecipeFilter": "The Gorge Recipe Filter",
        "pot": "Cookpot",
        "oven": "Oven",
        "grill": "Grill",
        "all": "All",
        "snack": "Snack",
        "bread": "Bread",
        "veggie": "Veggie",
        "soup": "Soup",
        "fish": "Fish",
        "meat": "Meat",
        "cheese": "Cheese",
        "pasta": "Pasta",
        "sweet": "Dessert",
        "DishDisplayMode": "Dish Display Mode",
        "OpaqueAndTranslucent": "Opaque and Translucent",
        "AvailableDishOnly": "Available dish only"
    },
    "zh_TW": {
        "TheGorgeRecipeFilter": "Gorge 食譜篩選器",
        "pot": "烹煮鍋(Cookpot)",
        "oven": "窯烤爐(Oven)",
        "grill": "燒烤盤(Grill)",
        "all": "全部(All)",
        "snack": "點心(Snack)",
        "bread": "麵包(Bread)",
        "veggie": "蔬菜(Veggie)",
        "soup": "湯(Soup)",
        "fish": "魚(Fish)",
        "meat": "肉(Meat)",
        "cheese": "起司(Cheese)",
        "pasta": "義大利麵(Pasta)",
        "sweet": "甜品(Dessert)",
        "DishDisplayMode": "料理顯示模式",
        "OpaqueAndTranslucent": "不透明/半透明顯示",
        "AvailableDishOnly": "僅顯示有效料理"
    },
    "zh_HA": {
        "TheGorgeRecipeFilter": "Gorge 食谱筛选器",
        "pot": "烹煮鍋(Cookpot)",
        "oven": "窑烤炉(Oven)",
        "grill": "烧烤盘(Grill)",
        "all": "全部(All)",
        "snack": "点心(Snack)",
        "bread": "面包(Bread)",
        "veggie": "蔬菜(Veggie)",
        "soup": "汤(Soup)",
        "fish": "魚(Fish)",
        "meat": "肉(Meat)",
        "cheese": "起司(Cheese)",
        "pasta": "意大利面(Pasta)",
        "sweet": "甜品(Dessert)",
        "DishDisplayMode": "料理显示模式",
        "OpaqueAndTranslucent": "不透明/半透明显示",
        "AvailableDishOnly": "仅显示有效料理"
    }
}
