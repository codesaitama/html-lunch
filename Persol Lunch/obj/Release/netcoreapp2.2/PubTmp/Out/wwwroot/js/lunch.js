function getMainMeals() {
    const url = `${LunchAPIUrl}api/FoodItem/GetFoodItemsByType/{typeId}`;
    newAjaxRequest(url, 'GET').done(function (data) {

        // console.log('Data: ', data);

        var options = "<option value='0' selected disabled>Select Main Meal</option>";
        $(data).each(function (i, iCounter) {
            options += "<option value='" + iCounter.id + "'>" + iCounter.description + "</option>";
        });
        $('#mainMealsSelect').html(options);

    });
}

function getStews() {
    const url = `${LunchAPIUrl}api/FoodItem/GetFoodItemsByType/{typeId}`;
    newAjaxRequest(url, 'GET').done(function (data) {

        // console.log('Data: ', data);

        var options = "<option value='0' selected disabled>Select Stew</option>";
        $(data).each(function (i, iCounter) {
            options += "<option value='" + iCounter.id + "'>" + iCounter.description + "</option>";
        });
        $('#stewsSelect').html(options);

    });
}

function getSoups() {
    const url = `${LunchAPIUrl}api/FoodItem/GetFoodItemsByType/{typeId}`;
    newAjaxRequest(url, 'GET').done(function (data) {

        // console.log('Data: ', data);

        var options = "<option value='0' selected disabled>Select Soup</option>";
        $(data).each(function (i, iCounter) {
            options += "<option value='" + iCounter.id + "'>" + iCounter.description + "</option>";
        });
        $('#soupsSelect').html(options);

    });
}

function getMeatsnFishes() {
    const url = `${LunchAPIUrl}api/FoodItem/GetFoodItemsByType/{typeId}`;
    newAjaxRequest(url, 'GET').done(function (data) {

        // console.log('Data: ', data);

        var options = "<option value='0' selected disabled>Select Meat or Fish</option>";
        $(data).each(function (i, iCounter) {
            options += "<option value='" + iCounter.id + "'>" + iCounter.description + "</option>";
        });
        $('#meatsFishSelect').html(options);

    });
}

function getCondiments() {
    const url = `${LunchAPIUrl}api/FoodItem/GetFoodItemsByType/{typeId}`;
    newAjaxRequest(url, 'GET').done(function (data) {

        // console.log('Data: ', data);

        var options = "<option value='0' selected disabled>Select Condiments</option>";
        $(data).each(function (i, iCounter) {
            options += "<option value='" + iCounter.id + "'>" + iCounter.description + "</option>";
        });
        $('#condimentsSelect').html(options);

    });
}