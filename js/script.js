$(document).ready(function () {

  var cdata;
  var currency;

  // uncomment when xml.php will work
  //  $.ajax({
  //     type: "GET",
  //     url: "/calc2/parse_link/xml.php",
  //     success: function (data) {
  //       currency = +data;
  //     }
  // });

  const CANADA_STATES = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];

  function isCanadaByDom() {
    const state = $('.state.active-state').data('countyid');
    return !!state && isCanadaByState(state);
  }

  function isCanadaByState(state) {
    return CANADA_STATES.includes(state)
  }

  function showCanadaFieldsOnClick() {
    $('#canada-label').click(() => {
      $('.canada-only').show();
      $('#delivery-label').text("Доставка по Канаде")
    })
  }

  function hideCanadaFieldsOnClick() {
    $('#usa-label').click(() => {
      $('.canada-only').hide();
      $('#delivery-label').text("Доставка по Америке")
    })
  }

  function calcAll() {
    dostavka_podshet(
      $("input[type=radio][name=s_strana]:checked").val(),
      $("input[type=radio][name=s_kuzov]:checked").val()
    );
    rastamojka_podschet(
      $("input[type=radio][name=s_aukcion]:checked").val(),
      $("input[name=stoimost_avto]").val(),
      $("input[name=god_vupyska]").val(),
      $("input[name=obem_dvigately]").val(),
      $("input[type=radio][name=s_dvigatel]:checked").val()
    );
    totalSum();
  };

  showCanadaFieldsOnClick();
  hideCanadaFieldsOnClick();


  $(".s_label_label").click(function () {
    $(".s_label_label").removeClass('active');
    $(this).addClass('active');
    var src_image_dvigatel = $(this).data('image');
    $('.calc_right img').attr('src', src_image_dvigatel);
  });
  $(".s_aukcion_label").click(function () {
    $(".s_aukcion_label").removeClass('active');
    $(this).addClass('active');
  });
  $(".s_aukcion_kuzov").click(function () {
    $(".s_aukcion_kuzov").removeClass('active');
    $(this).addClass('active');
    var src_image_kuzov = $(this).data('image');
    $('.s_4_left_img img').attr('src', src_image_kuzov);
  });
  $(".s_aukcion_strana").click(function () {
    $(".s_aukcion_strana").removeClass('active');
    $(this).addClass('active');
  });

  $(".s_4_country_n").click(function () {
    $(".s_4_country_n").removeClass('active');
    $(this).addClass('active');
    var currentmap = $(this).data('currentmap');
    if (currentmap == '.usa-map-main') {

      $('.usa-map-main').css('display', 'block');
      $('.canada-map-main').css('display', 'none');
    } else {
      $('.canada-map-main').css('display', 'block');
      $('.usa-map-main').css('display', 'none');
    }

  });





  $('#usa_map_mobile_select, #canada-select').change(function () {
    global_state_id = $(this).val();
    var val_map = "[data-countyid='" + $(this).val() + "']";
    $(".state").removeClass('active-state');
    $(val_map).addClass('active-state');

  });

  $('.state').click(function () {
    $(".state").removeClass('active-state');
    $(this).addClass('active-state');
    var code_country = $(this).data('countyid');
    $('#usa_map_mobile_select option, #canada-select option').each(function () {
      if ($(this).val() == code_country) {
        var name_country = $(this).text();
        $('.jq-selectbox__dropdown ul li').each(function () {
          if ($(this).text() == name_country) {
            $(this).click();
            calcAll();
          }
        });
      }
    });
  });



  /*скрипт расчета высоты */
  $.fn.equivalent = function () {
    var $blocks = $(this),
      //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
      maxH = $blocks.eq(0).height();
    //делаем сравнение высоты каждого блока с максимальной
    $blocks.each(function () {
      maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
    });
    //устанавливаем найденное максимальное значение высоты для каждого блока jQuery выборки
    $blocks.height(maxH);
  }
  //применяем нашу функцию в элементам jQuery выборки 
  $('.s_h4').equivalent();


  $("#usa_map_mobile_select").styler();

  $.ajax({
    type: "GET",
    url: "https://autogroupbk.github.io/bkauto/price.json",
    dataType: 'json',
    cache: false,
    success: function (data) {
      cdata = data;
      currency = cdata['constant']['currency'];
      /*$('#oblagajemaya_cost span').text(cdata['constant']['oblagayemaya_dostavka']);*/
      $('#otpravka_post span').text(cdata['constant']['otpravka_post']);
      $('#vygruzka span').text(cdata['constant']['vygruzka']);
    }
  });




  /* Калькулятор растаможки */

  $('input[type=radio][name=s_aukcion], input[type=radio][name=s_dvigatel], input[name=god_vupyska], input[name=stoimost_avto], input[name=obem_dvigately]').on('change keyup', function () {
    rastamojka_podschet(
      $('input[type=radio][name=s_aukcion]:checked').val(),
      $("input[name=stoimost_avto]").val(),
      $("input[name=god_vupyska]").val(),
      $("input[name=obem_dvigately]").val(),
      $("input[type=radio][name=s_dvigatel]:checked").val()
    );
    totalSum();
  });

  function rastamojka_podschet(aukcion, lot, year_vypusk, objem, dvigatel) {
    if (lot != '' && +lot != NaN) {
      $('#cost_lot span').text((+lot).toFixed(2));
      $('[name="stoimost_avto"]').removeClass('no-price');
      $('#stoimost_lot_bootom span').text((+lot).toFixed(2));

      if (+lot < 3000) {
        $('#diller span').text(cdata['constant']['diller_1']);
      } else if (+lot > 3000 && +lot < 6000) {
        $('#diller span').text(cdata['constant']['diller_2']);
      } else if (+lot > 5999) {
        $('#diller span').text(cdata['constant']['diller_3']);
      }

    } else {
      $('#cost_lot span').text('0.00');
      $('#stoimost_lot_bootom span').text('0.00');
      $('[name="stoimost_avto"]').addClass('no-price');
      $('#diller span').text('0.00');
    }

    if (lot != '' && aukcion != undefined) {
      let suffix = '';

      if (aukcion === 'copart') {
        suffix = isCanadaByDom() ? '_canada' : '_usa';
      }

      var current_aukcion = cdata[`${aukcion}${suffix}`];
      var current_range_array = $.grep(current_aukcion, function (e) {
        var range = e.range_price;
        range = range.split(' - ');
        return (+lot >= +range[0] && +lot <= +range[1]);
      });
      if (current_range_array.length != 0 && +lot != 0) {
        var procent = 0;
        if (current_range_array[0].hasOwnProperty('procent')) {
          procent = current_range_array[0]['procent'];
        }
        var sbor_aukciona = ((+current_range_array[0]['fee']) + (+current_range_array[0]['Gate']) + (+current_range_array[0]['Internet_fee']) + (+procent) * (+lot) / 100).toFixed(2);
        $('#sbor_aukciona span').text(sbor_aukciona);
        $('#sbor_aukciona_bottom span').text(sbor_aukciona);
      } else {
        $('#sbor_aukciona span').text('0.00');
        $('#sbor_aukciona_bottom span').text('0.00');
      }

    } else {
      $('#sbor_aukciona span').text('0.00');
      $('#sbor_aukciona_bottom span').text('0.00');
    }

    if (+year_vypusk != undefined && +year_vypusk != 0 && +objem != 0 && +objem != undefined) {
      var year = (new Date()).getFullYear();
      if (dvigatel != 'Electric') {
        if (dvigatel != 'Diesel') {
          if (+objem < 3) {
            var akciz_by_dvigatel = cdata['constant']['akciz_do_3'];
          } else {
            var akciz_by_dvigatel = cdata['constant']['akciz_ot_3'];
          }

        } else {

          if (+objem < 3.5) {
            var akciz_by_dvigatel = cdata['constant']['akciz_diesel_do_3_5'];
          } else {
            var akciz_by_dvigatel = cdata['constant']['akciz_diesel_ot_3_5'];
          }
        }
        var raznica_god = (+year) - (+year_vypusk) - 1;
        if (raznica_god == 0) {
          raznica_god = 1;
        }
        if (raznica_god == -1) {
          raznica_god = 1;
        }

        var aciz = (currency * akciz_by_dvigatel * (+objem) * raznica_god).toFixed(2);

      } else {
        var aciz = 0.00;
      }
      $('#akciz span').text(aciz);


    } else {
      $('#akciz span').text('0.00');
    }

    const oblagayemaya_dostavka = isCanadaByDom() ?
      cdata["constant"]["oblagayemaya_dostavka_canada"] :
      cdata["constant"]["oblagayemaya_dostavka"]

    if (dvigatel != 'Electric') {
      var poshlina = (oblagayemaya_dostavka + (+sbor_aukciona) + (+lot)) * cdata['constant']['poshlina'];

    } else {
      var poshlina = 0.00;
    }

    if (!isNaN(poshlina)) {
      poshlina = poshlina.toFixed(2);

      $('#poshlina span').text(poshlina);
    } else {
      $('#poshlina span').text('0.00');
    }
    if (dvigatel != 'Electric') {
      var nds = ((+aciz) + (+sbor_aukciona) + (+poshlina) + (+lot) + (+cdata['constant']['oblagayemaya_dostavka'])) * cdata['constant']['nds'];
    } else {
      var nds = 0.00;
    }
    if (!isNaN(nds)) {
      nds = nds.toFixed(2);
      $('#nds span').text(nds);
    } else {
      $('#nds span').text('0.00');
    }

    const parsedLot = Number.parseInt(lot);
    const hst = !Number.isNaN(parsedLot) && isCanadaByDom() ?
      Math.ceil(parsedLot * cdata.constant.hst) :
      0;

    $('#hst span').text(hst);

    var itogo_rastamojka = (+aciz) + (+poshlina) + (+nds);
    if (!isNaN(itogo_rastamojka)) {

      itogo_rastamojka = itogo_rastamojka.toFixed(2);

      $('#itogo_rastamojka span').text(itogo_rastamojka);
      $('#tamojennyi_platej span').text(itogo_rastamojka);
      $("#itog_r span").text(itogo_rastamojka);
    } else {
      $('#itogo_rastamojka span').text('0.00');
      $('#tamojennyi_platej span').text('0.00');
      $("#itog_r span").text('0.00');
    }
  }

  /* Калькулятор доставки */


  $('input[type=radio][name=s_kuzov], .s_4_country_n, #usa_map_mobile_select, input[type=radio][name=s_strana]').on('change', function () {
    calcAll();
  });


  function dostavka_podshet(port_dostavka, auto_class) {

    const state_id = isCanadaByDom() ?
      $('#canada-select').val() :
      $("[name=usa_map_mobile_select]").val();

    var info_state = current_state_info(state_id);


    if (info_state[0] != undefined) {
      var price_usa = (+info_state[0]['Price_port']).toFixed(2);
      $('#dostavka_po_usa span').text(price_usa);
    } else {
      $('#dostavka_po_usa span').text('0.00');
    }

    if (info_state[0] != undefined && port_dostavka != undefined) {
      var prices_ports = isCanadaByDom() ?
        cdata["canada_to_other_country"] :
        cdata["usa_to_other_country"];

      var prices_port = $.grep(prices_ports, function (e) {
        return (e.code == info_state[0]['Port']);
      });
      $('.port').text('В порт ' + prices_port[0]['name']);
      var current_port_price = (+prices_port[0][port_dostavka] + (+cdata['constant'][auto_class])).toFixed(2);
      $('#dostavka_v_port_naznacheniya span').text(current_port_price);
    } else {
      $('#dostavka_v_port_naznacheniya span').text('0.00');
    }

    const dillerCanada = isCanadaByDom() ?
      cdata.constant.diller_canada :
      0;

    var itogo_dostavka = dillerCanada + (+price_usa) + (+current_port_price) + (+cdata['constant']['otpravka_post']) + (+cdata['constant'][auto_class]);
    if (!isNaN(itogo_dostavka)) {
      itogo_dostavka = itogo_dostavka.toFixed(2);
      $('#itogo_dostavka span').text(itogo_dostavka);
      $("#itog_d span").text(itogo_dostavka);
    } else {
      $('#itogo_dostavka span').text('0.00');
      $("#itog_d span").text('0.00');
    }

    var brok = (+cdata['constant']['vygruzka'])

  }

  /* получение инфы о выбранном штате */

  function current_state_info(state_id) {
    var states_info = isCanadaByState(state_id) ? cdata.states_canada : cdata.states_usa;
    var current_state = $.grep(states_info, function (e) {
      return e.Code_state === state_id;
    });
    return current_state;
  }



  /* Подсчет в футере */

  /* Сброс данных при изменении */


  /* страховка */
  $('#s_6_check').change(function () {
    totalSum();
  });
  /* пересчет главной суммы */
  function totalSum() {
    var total;
    var strahovka;
    var lot;
    var sbor;
    var brok;
    var brok = (+cdata['constant']['vygruzka']);
    var lot = +$("#cost_lot span").text();
    var sbor = +$("#sbor_aukciona span").text();
    var rastomojka = +$("#tamojennyi_platej span").text();
    var dostavka = +$("#itog_d span").text();
    var uslugi_dillera = +$("#diller span").text();

    const hst = Number.parseInt($('#hst span').text());

    total = rastomojka + dostavka + brok + lot + sbor + uslugi_dillera + hst;
    if ($('#s_6_check').is(":checked") && total != 0) {
      if (lot * 0.025 > 200) {
        strahovka = lot * 0.025;
        $('#strah_vznos span').text(strahovka.toFixed(2));
        total = total + strahovka;
      } else {
        strahovka = 200;
        $('#strah_vznos span').text(strahovka.toFixed(2));
        total = total + strahovka;
      }
    } else {
      $('#strah_vznos span').text('0.00');
    }

    $('#total span').text(total.toFixed(2));

  }

  function clickState(pdata) {
    /* данные доставки */
    const state = pdata['state'];
    if (!state) {
      return;
    }

    const isCanada = isCanadaByState(state);

    if (isCanada) {
      $('#canada-label').click()
    } else {
      $('#usa-label').click();
    }

    const county = "[data-countyid=" + pdata["state"] + "]";
    $(county).click();
  }

  /* Запрос на парсинг ссылки */

  $("#scan").on("click", function (e) {
    e.preventDefault();
    $("#preloader_calc").addClass("active");
    var form = $(this).closest("form");
    global_link = $("[name=link_for_parse]").val();
    var formData = $(form).serialize();
    $.ajax({
      type: "POST",
      url: "/calc2/parse_link/parse.php",
      data: formData, //this was the problem

      success: function (data) {
        pdata = JSON.parse(data);
        pdata["engine"] = pdata["engine"].substr(0, 3);
        console.log(pdata);

        /* сброс калькулятора */
        $('input[name="s_aukcion"]').prop("checked", false);
        /* данные доставки */

        clickState(pdata);

        /* данные растаможки */
        var dvig = '[value="' + pdata["fuel_type"] + '"]';
        if (pdata["fuel_type"] == "Gasoline" || pdata["fuel_type"] == "GAS") {
          $('[value="Flexible Fuel"]').siblings("label").click();
        } else {
          $(dvig).siblings("label").click();
        }
        $('[name="obem_dvigately"]').val(pdata["engine"]);
        console.log(pdata["price"]);
        if (pdata["price"] == "" || pdata["price"] == null) {
          $('[name="stoimost_avto"]').addClass("no-price");
        } else {
          $('[name="stoimost_avto"]').removeClass("no-price");
        }
        $('[name="stoimost_avto"]').val(pdata["price"]);
        $('[name="god_vupyska"]').val(pdata["year"]);
        if (pdata["domain"] == "www.copart.com" || pdata["domain"] == "http://www.copart.com") {
          $('[value="copart"]').siblings("label").click();
        } else if (pdata["domain"] == "www.iaai.com") {
          $('[value="iaai"]').siblings("label").click();
        }

        //$("#title-auto").text(pdata["title"]);
        $("#title-auto").text(pdata["name"]);
        const vin = pdata["vin"] ? `VIN: ${pdata["vin"]}` : '';
        $("#vin").text(vin);

        $(".calc_right img").attr("src", pdata["images"][0]);

        $("#preloader_calc").removeClass("active");
        data_to_googletable();
      },

      error: function () {
        alert("Error");
      },
    });
  });



  /* Сборка данных и отправка */



  function validate_form() {
    var result = true;
    $(".message-error").remove();
    $('.validate_field').each(function () {
      if ($(this).val() == '') {
        $(this).after('<p class="message-error">Обязательное поле</p>');
        result = false;
      } else if ($(this).attr('name') == 'email') {
        var test_email = validateEmail($(this));
        if (test_email == false) {
          $(this).after('<p class="message-error">Невалидный E-mail</p>');
          result = false;
        }
      }
    });
    return result;
  }

  function validateEmail(input) {
    var email_validate = input.val();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var result = reg.test(email_validate);

    return result;
  }


  $('#send').on('click', function (e) {
    e.preventDefault();
    var validate = validate_form();
    if (validate == false) {
      return;
    }
    $('#preloader_calc').addClass('active');
    var form = $(this).closest("form");
    var formData = $(form).serializeArray();
    var dvigatel_send = $('.s_wrapper_for_dvigatel label.active').text();
    var aukcion_send = $('[name=s_aukcion]:checked').val();
    var god_vupyska_send = $('[name=god_vupyska]').val();
    var stoimost_avto_send = $('[name=stoimost_avto]').val();
    var obem_dvigately_send = $('[name=obem_dvigately]').val();
    var cost_lot_send = $('#cost_lot span').text();
    var sbor_aukciona_send = $('#sbor_aukciona span').text();
    var akciz_send = $('#akciz span').text();
    var poshlina_send = $('#poshlina span').text();
    var nds_send = $('#nds span').text();
    var itogo_rastamojka_send = $('#itogo_rastamojka span').text();
    var countyid_send = $('.state.active-state').data('countyid');
    var s_strana_send = $('[name=s_strana]:checked').val();
    var dostavka_po_usa_send = $('#dostavka_po_usa span').text();
    var dostavka_v_port_naznacheniya_send = $('#dostavka_v_port_naznacheniya span').text();
    var otpravka_post_send = $('#otpravka_post span').text();
    var itogo_dostavka_send = $('#itogo_dostavka span').text();
    var strah_vznos_send = $('#strah_vznos span').text();
    var itog_r_send = $('#itog_r span').text();
    var itog_d_send = $('#itog_d span').text();
    var total_send = $('#total span').text();
    var s_kuzov_send = $('[name=s_kuzov]:checked').val();
    var vygruzka_send = $('#vygruzka span').text();
    var tamojennyi_platej = $('#tamojennyi_platej').text();
    var diller = $('#diller span').text();

    /* новые данные */
    var title_auto = $('#title-auto').text();

    var vin = $("#vin").text().replace('VIN:', '').trim();

    var image_src = $('.calc_right img').attr('src');

    formData.push({
      name: "diller",
      value: diller
    }, {
      name: "tamojennyi_platej",
      value: tamojennyi_platej
    }, {
      name: "title_auto",
      value: title_auto
    }, {
      name: "vin",
      value: vin
    }, {
      name: "image_src",
      value: image_src
    }, {
      name: "dvigatel_send",
      value: dvigatel_send
    }, {
      name: "s_kuzov_send",
      value: s_kuzov_send
    }, {
      name: "vygruzka_send",
      value: vygruzka_send
    }, {
      name: "aukcion_send",
      value: aukcion_send
    }, {
      name: "god_vupyska_send",
      value: god_vupyska_send
    }, {
      name: "stoimost_avto_send",
      value: stoimost_avto_send
    }, {
      name: "obem_dvigately_send",
      value: obem_dvigately_send
    }, {
      name: "cost_lot_send",
      value: cost_lot_send
    }, {
      name: "sbor_aukciona_send",
      value: sbor_aukciona_send
    }, {
      name: "akciz_send",
      value: akciz_send
    }, {
      name: "poshlina_send",
      value: poshlina_send
    }, {
      name: "nds_send",
      value: nds_send
    }, {
      name: "itogo_rastamojka_send",
      value: itogo_rastamojka_send
    }, {
      name: "countyid_send",
      value: countyid_send
    }, {
      name: "s_strana_send",
      value: s_strana_send
    }, {
      name: "dostavka_po_usa_send",
      value: dostavka_po_usa_send
    }, {
      name: "dostavka_v_port_naznacheniya_send",
      value: dostavka_v_port_naznacheniya_send
    }, {
      name: "otpravka_post_send",
      value: otpravka_post_send
    }, {
      name: "itogo_dostavka_send",
      value: itogo_dostavka_send
    }, {
      name: "strah_vznos_send",
      value: strah_vznos_send
    }, {
      name: "itog_r_send",
      value: itog_r_send
    }, {
      name: "itog_d_send",
      value: itog_d_send
    }, {
      name: "total_send",
      value: total_send

    });

    console.log(formData);

    var inst = $('[data-remodal-id=modal]').remodal();
    $.ajax({
      type: 'POST',
      url: '/calc2/pdf/htmltopdf.php',
      data: formData, //this was the problem

      success: function (data) {
        $('#preloader_calc').removeClass('active');
        inst.open();
      },

      error: function () {
        alert('Error');
      }
    });
  });
});
