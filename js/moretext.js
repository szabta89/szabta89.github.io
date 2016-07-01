/*
 * copied from http://viralpatel.net/blogs/dynamically-shortened-text-show-more-link-jquery/
 * 
 * requires jQuery http://code.jquery.com/jquery-latest.js
 */

$(document).ready(function() {
    // var showChar = 500;
    // var ellipsestext = "";
    // var moretext = "[...]";
    // var lesstext = "<<<";
    // $('blockquote').each(function() {
    //     var quote = $(this);
    //     var content = $(this).text().replace(/\s+/g, ' ');
    //     if(content.length > showChar) {
    //         var c = content.substr(0, showChar);
    //         $(this).children().addClass("morecontent");
    //         $(this).children().last().append('<a href="" class="lesslink"> ' + lesstext + '</a>\n');
    //         var html = 
    //             '<p>' + c + ellipsestext + '\n' +
    //               '<a href="" class="morelink"> ' + moretext + '</a>\n' +
    //             '</p>\n' +  
    //             $(this).html();
    //     }
    //     $(this).html(html);
    // });
    // $(".morelink").click(function(){
    //     $(this).parent().toggle();
    //     $(this).parent().parent().find(".morecontent").toggle();
    //     updateExpandLabel();
    //     return false;
    // });
    // $(".lesslink").click(function(){
    //     var quote = $(this).parentsUntil("blockquote").last().parent();
    //     quote.children().first().toggle();
    //     quote.find(".morecontent").toggle();
    //     updateExpandLabel();
    //     return false;
    // });

    // function nextIsExpand() {
    //     var doExpand = false;
    //     $('blockquote').find(".morecontent").filter(":hidden").each(function() { doExpand = true; });
    //     return doExpand;
    // }

    // function updateExpandLabel() {
    //     if (nextIsExpand())
    //         $("#ExpandAll").text("Show full abstracts");
    //     else
    //         $("#ExpandAll").text("Abbreviate abstracts");
    // }

    // updateExpandLabel();

    // $("#ExpandAll").click(function() {
    //     var doExpand = nextIsExpand();
    //     $('blockquote').each(function() {
    //         if($(this).is(":hidden"))
    //             $(this).toggle();
    //         if (doExpand) {
    //             $(this).children().first().hide();
    //             $(this).find(".morecontent").show();
    //         }
    //         else {
    //             $(this).children().first().show();
    //             $(this).find(".morecontent").hide();
    //         }
    //     });
    //     updateExpandLabel();
    // });


    var hideText = "Hide abstracts";
    var showText = "Show abstracts";    

    function toggleShowHideLabel() {
        var button = $(".ShowHideAll");
        if (button.first().text() == hideText)
            button.text(showText);
        else
            button.text(hideText);
    }

    $(".ShowHideAll").text(showText);
    $('blockquote').hide();

    $(".ShowHideAll").click(function() {
        $('blockquote').toggle();
        toggleShowHideLabel();
    });
});
