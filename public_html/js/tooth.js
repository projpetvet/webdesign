/* 
 * @Author: Jethro A. Acosta
 * June 21, 2017
 */

var ToothPlugin = function()
{
    var BASE_WIDTH = 600;
    var BASE_HEIGHT = 425;
    
    var tooth_data_upper = [];
    tooth_data_upper[11] = '{"top" : "1%","margin" : "40%","width" : 57, "height": 74, "radius" : "50% 50% 50% 50% / 30% 30% 70% 70%", "rotate" : "0deg"}';
    tooth_data_upper[12] = '{"top" : "6%","margin" : "32%","width" : 49, "height": 67, "radius" : "50% 50% 50% 50% / 30% 30% 70% 70%", "rotate" : "-31deg"}';
    tooth_data_upper[13] = '{"top" : "13%","margin" : "25%","width" : 50, "height": 70, "radius" : "50% 50% 50% 50% / 13% 30% 57% 86%", "rotate" : "-60deg"}';
    tooth_data_upper[14] = '{"top" : "23%","margin" : "19%","width" : 55, "height": 79, "radius" : "50% 50% 50% 50% / 72% 40% 55% 46%", "rotate" : "-79deg"}';
    tooth_data_upper[15] = '{"top" : "36%","margin" : "13%","width" : 61, "height": 78, "radius" : "50% 50% 50% 50% / 54% 40% 55% 46%", "rotate" : "-80deg"}';
    tooth_data_upper[16] = '{"top" : "49%","margin" : "11%","width" : 58, "height": 87, "radius" : "50% 50% 50% 50% / 41% 46% 64% 46%", "rotate" : "-74deg"}';
    tooth_data_upper[17] = '{"top" : "62%","margin" : "9%","width" : 58, "height": 93, "radius" : "50% 50% 50% 50% / 22% 18% 76% 46%", "rotate" : "-76deg"}';
    tooth_data_upper[18] = '{"top" : "79%","margin" : "4%","width" : 85, "height": 93, "radius" : "50% 50% 50% 50% / 40% 35% 78% 46%", "rotate" : "-93deg"}';
    tooth_data_upper[21] = '{"top" : "1%","margin" : "40%","width" : 57, "height": 74, "radius" : "50% 50% 50% 50% / 30% 30% 70% 70%", "rotate" : "0deg"}';
    tooth_data_upper[22] = '{"top" : "6%","margin" : "32%","width" : 49, "height": 67, "radius" : "50% 50% 50% 50% / 30% 30% 70% 70%", "rotate" : "27deg"}';
    tooth_data_upper[23] = '{"top" : "13%","margin" : "25%","width" : 52, "height": 70, "radius" : "50% 50% 50% 50% / 30% 13% 86% 57%", "rotate" : "45deg"}';
    tooth_data_upper[24] = '{"top" : "23%","margin" : "20%","width" : 55, "height": 79, "radius" : "50% 50% 50% 50% / 72% 40% 55% 46%", "rotate" : "59deg"}';
    tooth_data_upper[25] = '{"top" : "36%","margin" : "14%","width" : 61, "height": 78, "radius" : "50% 50% 50% 50% / 54% 40% 55% 46%", "rotate" : "59deg"}';
    tooth_data_upper[26] = '{"top" : "49%","margin" : "11%","width" : 58, "height": 87, "radius" : "50% 50% 50% 50% / 41% 46% 64% 46%", "rotate" : "66deg"}';
    tooth_data_upper[27] = '{"top" : "62%","margin" : "9%","width" : 58, "height": 93, "radius" : "50% 50% 50% 50% / 22% 18% 76% 46%", "rotate" : "68deg"}';
    tooth_data_upper[28] = '{"top" : "79%","margin" : "4%","width" : 85, "height": 93, "radius" : "50% 50% 50% 50% / 64% 32% 78% 46%", "rotate" : "66deg"}';

    var tooth_data_lower = [];
    tooth_data_lower[31] = '{"bottom" : "1%","margin" : "40%","width" : 57, "height": 74, "radius" : "50% 50% 50% 50% / 70% 70% 30% 30%", "rotate" : "0deg"}';
    tooth_data_lower[32] = '{"bottom" : "6%","margin" : "32%","width" : 49, "height": 67, "radius" : "50% 50% 50% 50% / 70% 70% 30% 30%", "rotate" : "-31deg"}';
    tooth_data_lower[33] = '{"bottom" : "13%","margin" : "25%","width" : 50, "height": 70, "radius" : "50% 50% 50% 50% / 57% 86% 13% 30%", "rotate" : "-60deg"}';
    tooth_data_lower[34] = '{"bottom" : "23%","margin" : "19%","width" : 55, "height": 79, "radius" : "50% 50% 50% 50% / 55% 46% 72% 40%", "rotate" : "-79deg"}';
    tooth_data_lower[35] = '{"bottom" : "36%","margin" : "14%","width" : 61, "height": 78, "radius" : "50% 50% 50% 50% / 55% 46% 54% 40%", "rotate" : "-80deg"}';
    tooth_data_lower[36] = '{"bottom" : "49%","margin" : "11%","width" : 58, "height": 87, "radius" : "50% 50% 50% 50% / 64% 46% 41% 46%", "rotate" : "-74deg"}';
    tooth_data_lower[37] = '{"bottom" : "62%","margin" : "8%","width" : 58, "height": 93, "radius" : "50% 50% 50% 50% / 76% 46% 22% 18%", "rotate" : "-76deg"}';
    tooth_data_lower[38] = '{"bottom" : "79%","margin" : "4%","width" : 85, "height": 93, "radius" : "50% 50% 50% 50% / 78% 46% 40% 35%", "rotate" : "-93deg"}';
    tooth_data_lower[41] = '{"bottom" : "1%","margin" : "40%","width" : 57, "height": 74, "radius" : "50% 50% 50% 50% / 70% 70% 30% 30%", "rotate" : "0deg"}';
    tooth_data_lower[42] = '{"bottom" : "6%","margin" : "32%","width" : 49, "height": 67, "radius" : "50% 50% 50% 50% / 70% 70% 30% 30%", "rotate" : "27deg"}';
    tooth_data_lower[43] = '{"bottom" : "13%","margin" : "25%","width" : 52, "height": 70, "radius" : "50% 50% 50% 50% / 86% 57% 30% 13%", "rotate" : "45deg"}';
    tooth_data_lower[44] = '{"bottom" : "23%","margin" : "20%","width" : 55, "height": 79, "radius" : "50% 50% 50% 50% / 55% 46% 72% 40%", "rotate" : "59deg"}';
    tooth_data_lower[45] = '{"bottom" : "36%","margin" : "14%","width" : 61, "height": 78, "radius" : "50% 50% 50% 50% / 55% 46% 54% 40%", "rotate" : "59deg"}';
    tooth_data_lower[46] = '{"bottom" : "49%","margin" : "11%","width" : 58, "height": 87, "radius" : "50% 50% 50% 50% / 64% 46% 41% 46%", "rotate" : "66deg"}';
    tooth_data_lower[47] = '{"bottom" : "62%","margin" : "8%","width" : 58, "height": 93, "radius" : "50% 50% 50% 50% / 76% 46% 22% 18%", "rotate" : "68deg"}';
    tooth_data_lower[48] = '{"bottom" : "79%","margin" : "4%","width" : 85, "height": 93, "radius" : "50% 50% 50% 50% / 78% 46% 64% 32%", "rotate" : "66deg"}';
    
    var DIMEN_RATIO_HEIGHT = function(ACTUAL_WIDTH)
    {
        var ACTUAL_HEIGHT = (ACTUAL_WIDTH * BASE_HEIGHT) / BASE_WIDTH;
        return ACTUAL_HEIGHT;
    };
    
    var DIMEN_MULTIPLIER = function(ACTUAL_WIDTH)
    {
        return ACTUAL_WIDTH / BASE_WIDTH;
    };
    
    return{
        toothData : tooth_data_upper,
        init : function(container){
            var ACTUAL_WIDTH = $(container).width();
            var ACTUAL_HEIGHT = DIMEN_RATIO_HEIGHT(ACTUAL_WIDTH);
            $(container).children('.upper').height(ACTUAL_HEIGHT+"px");
            $(container).children('.lower').height(ACTUAL_HEIGHT+"px");
            $(container).height((ACTUAL_HEIGHT * 2 + 20)+"px");
            var MUL = DIMEN_MULTIPLIER(ACTUAL_WIDTH);
           
            //upper
            for(ctr = 11; ctr <= 28; ctr++)
            {
                if(tooth_data_upper[ctr] != null)
                {
                    var new_span = $("<span></span>");
                    new_span.attr('data-number',ctr);
                    new_span.html("<number>"+ctr+"</number>");
                    var elem_prop = JSON.parse(tooth_data_upper[ctr]);
                    
                    if(ctr <= 18)
                    {
                        var css_list = {
                            "width" : MUL * elem_prop.width + "px",
                            "height" : MUL * elem_prop.height + "px",
                            "border-radius" : elem_prop.radius,
                            "transform" : "rotate("+elem_prop.rotate+")",
                            "left" : elem_prop.margin,
                            "top" : elem_prop.top
                        };
                    }
                    else
                    {
                        var css_list = {
                            "width" : MUL * elem_prop.width + "px",
                            "height" : MUL * elem_prop.height + "px",
                            "border-radius" : elem_prop.radius,
                            "transform" : "rotate("+elem_prop.rotate+")" ,
                            "right" : elem_prop.margin,
                            "top" : elem_prop.top
                        };
                    }
                    new_span.css(css_list);
                    new_span.addClass("tooth");
                    $(container).children('.upper').append(new_span);
                }
            }
            
            //lower
            for(ctr = 31; ctr <= 48; ctr++)
            {
                if(tooth_data_lower[ctr] != null)
                {
                    var new_span = $("<span></span>");
                    new_span.attr('data-number',ctr);
                    new_span.html("<number>"+ctr+"</number>");
                    var elem_prop = JSON.parse(tooth_data_lower[ctr]);
                    console.log(elem_prop);
                    if(ctr <= 38)
                    {
                        var css_list = {
                            "width" : MUL * elem_prop.width + "px",
                            "height" : MUL * elem_prop.height + "px",
                            "border-radius" : elem_prop.radius,
                            "transform" : "rotate("+elem_prop.rotate+")",
                            "right" : elem_prop.margin,
                            "bottom" : elem_prop.bottom
                        };
                    }
                    else
                    {
                        var css_list = {
                            "width" : MUL * elem_prop.width + "px",
                            "height" : MUL * elem_prop.height + "px",
                            "border-radius" : elem_prop.radius,
                            "transform" : "rotate("+elem_prop.rotate+")" ,
                            "left" : elem_prop.margin,
                            "bottom" : elem_prop.bottom
                        };
                    }
                    new_span.css(css_list);
                    new_span.addClass("tooth");
                    console.log(new_span);
                    $(container).children('.lower').append(new_span);
                }
            }
            
            $(container).on("click",".tooth", function(){
                $(this).toggleClass("selected"); 
            });
        }
    };
};

var tooth = new ToothPlugin();
