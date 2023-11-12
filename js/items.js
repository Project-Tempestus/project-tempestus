window.onload = function() {
    hide_body();
    hide_items_for_all();
  };


function get_tables(){
    var FILTER_TABLES = [
        document.getElementById("boots"),
        document.getElementById("pants"),
        document.getElementById("leg_armor"),
        document.getElementById("shirt"),
        document.getElementById("gloves"),
        document.getElementById("chest"),
        document.getElementById("shoulders"),
        document.getElementById("helmet"),
        document.getElementById("backpack"),
        document.getElementById("cloak"),
        document.getElementById("sheathed_weapon"),
        document.getElementById("shoulderbag"),
        document.getElementById("waist"),
        document.getElementById("necklace"),
        document.getElementById("headgear"),
        document.getElementById("additional_headgear"),
        document.getElementById("mask"),
        document.getElementById("firearm"),
        document.getElementById("pistol"),
        ];
    return FILTER_TABLES;
}


function hide_body() {
    var checkBox = document.getElementById("config_1");

    var body_tables = [
        document.getElementById("face"),
        document.getElementById("tatoo"),
        document.getElementById("augmentics"),
        document.getElementById("facial_hair"),
        document.getElementById("hairstyle")
    ]

    var displaySetting = "none";
    if (checkBox.checked == true){
        displaySetting = "";    
    }

    for (let i = 0; i < body_tables.length; i++) {
        body_tables[i].style.display = displaySetting;    
    }
}

function hide_items_for_all(){
    var checkBox = document.getElementById("config_0");
    
    var displaySetting = "none";
    if (checkBox.checked == true) {
        displaySetting = "";
    }

    FILTER_TABLES = get_tables();
    for (let i = 0; i < FILTER_TABLES.length; i++) {
        var table = FILTER_TABLES[i];
        for (var j = 0, row; row = table.rows[j]; j++) {
            col_1 = row.cells[2];
            col_2 = row.cells[3];
            if (col_1.innerText == "['']" ){
                if (col_2.innerText == "['']") {
                    // console.log("Row to hide");
                    // console.log(i,j);
                    row.style.display = displaySetting;
                }
            }

        }
    }

}

