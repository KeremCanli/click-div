$(document).ready (function ()
                   {
                    var Count=0;
                    function CreateDiv ()
                    {
                      var Time=Math.floor (Math.random ()*10001);
                      var Interval=setInterval (function ()
                                                {
                                                  $("body").append ('<div style="width: 100px; height: 100px; background-color: rgb('+Math.floor (Math.random ()*255)+', '+Math.floor (Math.random ()*255)+', '+Math.floor (Math.random ()*255)+'); top: '+(Math.floor (Math.random ()*($(window).height ()-145))+46)+'px; left: '+Math.floor (Math.random ()*($(window).width ()-99))+'px; position: absolute;"></div>');
                                                  clearInterval (Interval);
                                                  CreateDiv ();
                                                }, Time);
                    }
                    CreateDiv ();
                    $("body").on ("click", "div", function ()
                                                  {
                                                    $(this).fadeOut (500, function ()
                                                                          {
                                                                            $(this).remove ();
                                                                          });
                                                    Count++;
                                                    $("#counter").html ("Tıklanılan Div Sayısı: "+Count);
                                                  });
                   });