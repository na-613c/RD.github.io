//  выбор класса
let classButtonInMain = [
    '.to-class-selection',
    '.mage-button',
    '.prist-button',
    '.lock-button',
    '.dru-button',
    '.rog-button',
    '.hunt-button',
    '.sham-button',
    '.war-button',
    '.pal-button',
    '.dk-button'
];

let idButtonInMain = [
    '#main',
    '#mage',
    '#prist',
    '#lock',
    '#dru',
    '#rog',
    '#hunt',
    '#sham',
    '#war',
    '#pal',
    '#dk'
]

for (let i = 0; i <= 11; i++) {
    $(document).ready(function () {
        $(classButtonInMain[i]).click(function () {
            $('#main').hide();
            $('#mage').hide();
            $('#prist').hide();
            $('#lock').hide();
            $('#dru').hide();
            $('#rog').hide();
            $('#hunt').hide();
            $('#sham').hide();
            $('#war').hide();
            $('#pal').hide();
            $('#dk').hide();

            $(idButtonInMain[i]).show();
            if (i > 0) {
                $(idButtonInMain[i - 1]).hide();
            }
        })
    });
}

// аркан
$(document).ready(function () {
    $('.amage').click(function () {
        $('#mage').hide();
        $('#amage').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-mage').click(function () {
        $('#mage').show();
        $('#amage').hide();
    })
});

// фаер
$(document).ready(function () {
    $('.fmage').click(function () {
        $('#mage').hide();
        $('#fmage').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-mage').click(function () {
        $('#mage').show();
        $('#fmage').hide();
    })
});

// шп
$(document).ready(function () {
    $('.shp').click(function () {
        $('#prist').hide();
        $('#shp').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-prist').click(function () {
        $('#prist').show();
        $('#shp').hide();
    })
});

// дц
$(document).ready(function () {
    $('.dc').click(function () {
        $('#prist').hide();
        $('#dc').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-prist').click(function () {
        $('#prist').show();
        $('#dc').hide();
    })
});
// хприст
$(document).ready(function () {
    $('.hprist').click(function () {
        $('#prist').hide();
        $('#hprist').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-prist').click(function () {
        $('#prist').show();
        $('#hprist').hide();
    })
});
// дестр
$(document).ready(function () {
    $('.dlock').click(function () {
        $('#lock').hide();
        $('#dlock').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-lock').click(function () {
        $('#lock').show();
        $('#dlock').hide();
    })
});
// афлик
$(document).ready(function () {
    $('.alock').click(function () {
        $('#lock').hide();
        $('#alock').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-lock').click(function () {
        $('#lock').show();
        $('#alock').hide();
    })
});
// демон
$(document).ready(function () {
    $('.dmlock').click(function () {
        $('#lock').hide();
        $('#dmlock').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-lock').click(function () {
        $('#lock').show();
        $('#dmlock').hide();
    })
});
// мишка
$(document).ready(function () {
    $('.misha').click(function () {
        $('#dru').hide();
        $('#misha').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dru').click(function () {
        $('#dru').show();
        $('#misha').hide();
    })
});
// koT
$(document).ready(function () {
    $('.cat').click(function () {
        $('#dru').hide();
        $('#cat').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dru').click(function () {
        $('#dru').show();
        $('#cat').hide();
    })
});
// СОВА
$(document).ready(function () {
    $('.balance').click(function () {
        $('#dru').hide();
        $('#balance').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dru').click(function () {
        $('#dru').show();
        $('#balance').hide();
    })
});
// дерево
$(document).ready(function () {
    $('.rdru').click(function () {
        $('#dru').hide();
        $('#rdru').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dru').click(function () {
        $('#dru').show();
        $('#rdru').hide();
    })
});
// бой
$(document).ready(function () {
    $('.crog').click(function () {
        $('#rog').hide();
        $('#crog').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-rog').click(function () {
        $('#rog').show();
        $('#crog').hide();
    })
});
// мм
$(document).ready(function () {
    $('.mm').click(function () {
        $('#hunt').hide();
        $('#mm').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-hunt').click(function () {
        $('#hunt').show();
        $('#mm').hide();
    })
});
// энх
$(document).ready(function () {
    $('.enh').click(function () {
        $('#sham').hide();
        $('#enh').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-sham').click(function () {
        $('#sham').show();
        $('#enh').hide();
    })
});
// элем
$(document).ready(function () {
    $('.el').click(function () {
        $('#sham').hide();
        $('#el').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-sham').click(function () {
        $('#sham').show();
        $('#el').hide();
    })
});
// ршам
$(document).ready(function () {
    $('.rsham').click(function () {
        $('#sham').hide();
        $('#rsham').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-sham').click(function () {
        $('#sham').show();
        $('#rsham').hide();
    })
});
// фура
$(document).ready(function () {
    $('.fwar').click(function () {
        $('#war').hide();
        $('#fwar').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-war').click(function () {
        $('#war').show();
        $('#fwar').hide();
    })
});
// прот
$(document).ready(function () {
    $('.pwar').click(function () {
        $('#war').hide();
        $('#pwar').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-war').click(function () {
        $('#war').show();
        $('#pwar').hide();
    })
});
// хпал
$(document).ready(function () {
    $('.hpal').click(function () {
        $('#pal').hide();
        $('#hpal').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-pal').click(function () {
        $('#pal').show();
        $('#hpal').hide();
    })
});
// ппал
$(document).ready(function () {
    $('.ppal').click(function () {
        $('#pal').hide();
        $('#ppal').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-pal').click(function () {
        $('#pal').show();
        $('#ppal').hide();
    })
});
// РПАЛ
$(document).ready(function () {
    $('.rpal').click(function () {
        $('#pal').hide();
        $('#rpal').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-pal').click(function () {
        $('#pal').show();
        $('#rpal').hide();
    })
});
// бдк
$(document).ready(function () {
    $('.bdk').click(function () {
        $('#dk').hide();
        $('#bdk').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dk').click(function () {
        $('#dk').show();
        $('#bdk').hide();
    })
});
// фдк
$(document).ready(function () {
    $('.fdk').click(function () {
        $('#dk').hide();
        $('#fdk').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dk').click(function () {
        $('#dk').show();
        $('#fdk').hide();
    })
});
// адк
$(document).ready(function () {
    $('.udk').click(function () {
        $('#dk').hide();
        $('#udk').show();
    })
});
$(document).ready(function () {
    $('.to-class-selection-dk').click(function () {
        $('#dk').show();
        $('#udk').hide();
    })
});

/* ************************************************************* функция записи в HTML ************************************************** */
function writeInHTML(idElement, Head, Neck, Shoulders, Back, Chest, Bracers, Hands, Belt, Legs, Feet, RingI, RingII, WeaponI, WeaponII, WeaponIII, Weapon4, Wand, AccessoryI, AccessoryII, AccessoryIII, Accessory4, Accessory5) {

    let AccessoryString;
    if (Accessory5 == '') {
        if (Accessory4 == '') {
            if (AccessoryIII == '') {
                AccessoryString = `<a href="${AccessoryI}"></a> и <a href="${AccessoryII}"></a><br>`;
            } else {
                AccessoryString = `<a href="${AccessoryI}"></a> и <a href="${AccessoryII}"></a>  и <a href="${AccessoryIII}"></a><br>`;
            }
        } else {
            AccessoryString = `<a href="${AccessoryI}"></a> и <a href="${AccessoryII}"></a>  и <a href="${AccessoryIII}"></a>  и <a href="${Accessory4}"></a><br>`;
        }
    } else {
        AccessoryString = `<a href="${AccessoryI}"></a> и <a href="${AccessoryII}"></a>  и <a href="${AccessoryIII}"></a>  и <a href="${Accessory4}"></a> и <a href="${Accessory5}"></a><br>`;
    }




    let WeaponString;
    if (Weapon4 == '') {
        if (WeaponIII == '') {
            if (WeaponII == '') {
                WeaponString = `<a href="${WeaponI}"></a><br>`;
            } else {
                WeaponString = `<a href="${WeaponI}"></a> и <a href="${WeaponII}"></a><br>`;
            }
        } else WeaponString = `<a href="${WeaponI}"></a> и <a href="${WeaponII}"></a> и <a href="${WeaponIII}"></a><br>`;
    } else WeaponString = `<a href="${WeaponI}"></a> и <a href="${WeaponII}"></a> и <a href="${WeaponIII}"></a> и <a href="${Weapon4}"></a><br>`;


    let WandString;
    if (Wand == '') {
        WandString = ``;
    } else {
        WandString = `Оружие дельнего боя <br><a href="${Wand}"></a><br>`;
    }


    let htmlContent = `
    <div class="row">
    <div class="col-sm-6">
      Голова <br>
      <a href="${Head}"></a> <br>
      Шея <br>
      <a href="${Neck}"></a><br>
      Плечи <br>
      <a href="${Shoulders}"></a> <br>
      Спина <br>
      <a href="${Back}"></a><br>
      Грудь <br>
      <a href="${Chest}"></a><br>
      Наручи <br>
      <a href="${Bracers}"></a><br>
      Оружие <br>
      ${WeaponString}
    </div>
    <div class="col-sm-6 ">
      Кисти рук <br>
      <a href="${Hands}"></a><br>
      Пояс <br>
      <a href="${Belt}"></a><br>
      Ноги <br>
      <a href="${Legs}"></a><br>
      Ступни <br>
      <a href="${Feet}"></a><br>
      Кольцо I и II <br>
      <a href="${RingI}"></a> и <a href="${RingII}"></a><br>
      Аксессуары <br>
      ${AccessoryString}
      ${WandString}

    </div>
  </div>`;




    $(document).ready(function () {
        $(idElement).html(htmlContent);
    });
}

writeInHTML('#amageContent',
    "https://wowroad.info/?item=51281",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51284",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=51283",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51280",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=50694",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50664",
    "https://wowroad.info/?item=50732",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=50348",
    "https://wowroad.info/?item=54588",
    '', '', ''
);

writeInHTML('#fmageContent',
    "https://wowroad.info/?item=51281",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51284",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=50629",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51280",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=51282",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50664",
    "https://wowroad.info/?item=50732",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54588",
    "https://wowroad.info/?item=50365",
    '', '', ''
);

writeInHTML('#shpContent',
    "https://wowroad.info/?item=51255",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51257",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=51259",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51256",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=50694",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50714",
    "https://wowroad.info/?item=50734",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54588",
    "https://wowroad.info/?item=50365",
    '', '', ''
);

writeInHTML('#dcContent',
    "https://wowroad.info/?item=51261",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51264",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=51259",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51260",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=51262",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50664",
    "https://wowroad.info/?item=54585",
    "https://wowroad.info/?item=50734",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54589",
    "https://wowroad.info/?item=50366",
    "https://wowroad.info/?item=47432",
    '', ''
);

writeInHTML('#hpristContent',
    "https://wowroad.info/?item=51261",
    "https://wowroad.info/?item=50609",
    "https://wowroad.info/?item=51264",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=50717",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51260",
    "https://wowroad.info/?item=50702",
    "https://wowroad.info/?item=51262",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50636",
    "https://wowroad.info/?item=54585",
    "https://wowroad.info/?item=50731",
    '', '', '',
    "https://wowroad.info/?item=50631",
    "https://wowroad.info/?item=54589",
    "https://wowroad.info/?item=50366",
    "https://wowroad.info/?item=47432",
    '', ''
);

writeInHTML('#dlockContent',
    "https://wowroad.info/?item=51231",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51234",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=50629",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51230",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=51232",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50664",
    "https://wowroad.info/?item=50732",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54588",
    "https://wowroad.info/?item=50365",
    "https://wowroad.info/?item=47188",
    '', ''
);

writeInHTML('#dmlockContent',
    "https://wowroad.info/?item=51231",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51234",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=51233",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51230",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=50694",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50714",
    "https://wowroad.info/?item=50732",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54588",
    "https://wowroad.info/?item=50365",
    '', '', ''
);
writeInHTML('#alockContent',
    "https://wowroad.info/?item=51231",
    "https://wowroad.info/?item=50724",
    "https://wowroad.info/?item=51234",
    "https://wowroad.info/?item=54583",
    "https://wowroad.info/?item=51233",
    "https://wowroad.info/?item=54582",
    "https://wowroad.info/?item=51230",
    "https://wowroad.info/?item=50613",
    "https://wowroad.info/?item=50694",
    "https://wowroad.info/?item=50699",
    "https://wowroad.info/?item=50398",
    "https://wowroad.info/?item=50664",
    "https://wowroad.info/?item=50732",
    "https://wowroad.info/?item=50719",
    '', '',
    "https://wowroad.info/?item=50684",
    "https://wowroad.info/?item=54588",
    "https://wowroad.info/?item=50365",
    '', '', ''
);
writeInHTML('#bearContent',
    "https://wowroad.info/?item=51296",
    "https://wowroad.info/?item=50627",
    "https://wowroad.info/?item=51299",
    "https://wowroad.info/?item=50718",
    "https://wowroad.info/?item=50656",
    "https://wowroad.info/?item=54580",
    "https://wowroad.info/?item=51295",
    "https://wowroad.info/?item=50707",
    "https://wowroad.info/?item=51297",
    "https://wowroad.info/?item=50607",
    "https://wowroad.info/?item=50404",
    "https://wowroad.info/?item=50622",
    "https://wowroad.info/?item=50735",
    "", '', '', "",
    "https://wowroad.info/?item=50364",
    "https://wowroad.info/?item=54591",
    "https://wowroad.info/?item=50356",
    "https://wowroad.info/?item=50344",
    "https://wowroad.info/?item=47088",
    'https://wowroad.info/?item=47088'
);

writeInHTML('#catContent',
    "https://wowroad.info/?item=51296",
    "https://wowroad.info/?item=50633",
    "https://wowroad.info/?item=51299",
    "https://wowroad.info/?item=50653",
    "https://wowroad.info/?item=51298",
    "https://wowroad.info/?item=54580",
    "https://wowroad.info/?item=50675",
    "https://wowroad.info/?item=50707",
    "https://wowroad.info/?item=51297",
    "https://wowroad.info/?item=50607",
    "https://wowroad.info/?item=54576",
    "https://wowroad.info/?item=50604",
    "https://wowroad.info/?item=50735",
    "", "", '', '',
    "https://wowroad.info/?item=54590",
    "https://wowroad.info/?item=50363",
    "", "", ''

);

writeInHTML('#owlContent',
    'https://wowroad.info/?item=51290',
    'https://wowroad.info/?item=50724',
    'https://wowroad.info/?item=51292',
    'https://wowroad.info/?item=54583',
    'https://wowroad.info/?item=51294',
    'https://wowroad.info/?item=54584',
    'https://wowroad.info/?item=51291',
    'https://wowroad.info/?item=50613',
    'https://wowroad.info/?item=51293',
    'https://wowroad.info/?item=50699',
    'https://wowroad.info/?item=50398',
    'https://wowroad.info/?item=50664',
    'https://wowroad.info/?item=50734',
    'https://wowroad.info/?item=50719',
    '', '',
    'https://wowroad.info/?item=54588',
    'https://wowroad.info/?item=50365',
    'https://wowroad.info/?item=47188',
    '', ''
);

writeInHTML('#rdruContent',
    'https://wowroad.info/?item=51302',
    'https://wowroad.info/?item=50609',
    'https://wowroad.info/?item=51304',
    'https://wowroad.info/?item=54583',
    'https://wowroad.info/?item=50717',
    'https://wowroad.info/?item=54582',
    'https://wowroad.info/?item=51301',
    'https://wowroad.info/?item=50705',
    'https://wowroad.info/?item=51303',
    'https://wowroad.info/?item=50699',
    'https://wowroad.info/?item=50636',
    'https://wowroad.info/?item=54585',
    'https://wowroad.info/?item=50685',
    'https://wowroad.info/?item=46017',
    'https://wowroad.info/?item=50635',
    '', '',
    'https://wowroad.info/?item=54589',
    'https://wowroad.info/?item=50366',
    'https://wowroad.info/?item=47432',
    '', ''
);

writeInHTML('#crogContent',
    "https://wowroad.info/?item=51252",
    'https://wowroad.info/?item=50633',
    'https://wowroad.info/?item=51254',
    'https://wowroad.info/?item=47545',
    'https://wowroad.info/?item=51250',
    'https://wowroad.info/?item=54580',
    'https://wowroad.info/?item=50675',
    'https://wowroad.info/?item=50707',
    'https://wowroad.info/?item=51253',
    'https://wowroad.info/?item=50607',
    'https://wowroad.info/?item=54576',
    'https://wowroad.info/?item=50618',
    'https://wowroad.info/?item=50737',
    'https://wowroad.info/?item=50654',
    '', '',
    'https://wowroad.info/?item=50733',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50363',
    '', '', ''
);

writeInHTML('#mmContent',
    'https://wowroad.info/?item=51286',
    'https://wowroad.info/?item=50633',
    'https://wowroad.info/?item=51288',
    'https://wowroad.info/?item=47545',
    'https://wowroad.info/?item=51289',
    'https://wowroad.info/?item=50655',
    'https://wowroad.info/?item=51285',
    'https://wowroad.info/?item=50688',
    'https://wowroad.info/?item=50645',
    'https://wowroad.info/?item=54577',
    'https://wowroad.info/?item=50402',
    'https://wowroad.info/?item=50618',
    'https://wowroad.info/?item=50735',
    '', '', '',
    'https://wowroad.info/?item=50733',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50363',
    '', '', ''
);

writeInHTML('#enhContent',
    'https://wowroad.info/?item=51242',
    'https://wowroad.info/?item=51890',
    'https://wowroad.info/?item=51199',
    'https://wowroad.info/?item=50653',
    'https://wowroad.info/?item=51244',
    'https://wowroad.info/?item=54580',
    'https://wowroad.info/?item=50619',
    'https://wowroad.info/?item=51853',
    'https://wowroad.info/?item=51241',
    'https://wowroad.info/?item=50711',
    'https://wowroad.info/?item=54576',
    'https://wowroad.info/?item=50604',
    'https://wowroad.info/?item=50737',
    '', '', '', '',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50355',
    'https://wowroad.info/?item=47188',
    '', ''
);

writeInHTML('#elContent',
    'https://wowroad.info/?item=51247',
    'https://wowroad.info/?item=50724',
    'https://wowroad.info/?item=51235',
    'https://wowroad.info/?item=54583',
    'https://wowroad.info/?item=51239',
    'https://wowroad.info/?item=54582',
    'https://wowroad.info/?item=51238',
    'https://wowroad.info/?item=54587',
    'https://wowroad.info/?item=50694',
    'https://wowroad.info/?item=50699',
    'https://wowroad.info/?item=50398',
    'https://wowroad.info/?item=50664',
    'https://wowroad.info/?item=50734',
    'https://wowroad.info/?item=50616',
    '', '', '',
    'https://wowroad.info/?item=54588',
    'https://wowroad.info/?item=50365',
    'https://wowroad.info/?item=47188',
    '', ''
);

writeInHTML('#rshamContent',
    'https://wowroad.info/?item=51247',
    'https://wowroad.info/?item=50724',
    'https://wowroad.info/?item=51245',
    'https://wowroad.info/?item=54583',
    'https://wowroad.info/?item=51249',
    'https://wowroad.info/?item=54584',
    'https://wowroad.info/?item=50703',
    'https://wowroad.info/?item=54587',
    'https://wowroad.info/?item=51246',
    'https://wowroad.info/?item=50699',
    'https://wowroad.info/?item=50664',
    'https://wowroad.info/?item=54585',
    'https://wowroad.info/?item=50734',
    'https://wowroad.info/?item=46017',
    'https://wowroad.info/?item=50616',
    '', '',
    'https://wowroad.info/?item=54589',
    'https://wowroad.info/?item=50366',
    'https://wowroad.info/?item=47041',
    '', ''
);

writeInHTML('#fwarContent',
    'https://wowroad.info/?item=51227',
    'https://wowroad.info/?item=54581',
    'https://wowroad.info/?item=51229',
    'https://wowroad.info/?item=50653',
    'https://wowroad.info/?item=51225',
    'https://wowroad.info/?item=54580',
    'https://wowroad.info/?item=50675',
    'https://wowroad.info/?item=50620',
    'https://wowroad.info/?item=51228',
    'https://wowroad.info/?item=54578',
    'https://wowroad.info/?item=50618',
    'https://wowroad.info/?item=52572',
    'https://wowroad.info/?item=49623',
    'https://wowroad.info/?item=50730',
    '', '',
    'https://wowroad.info/?item=50733',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50363',
    '', '', ''
);

writeInHTML('#pwarContent',
    'https://wowroad.info/?item=50640',
    'https://wowroad.info/?item=50627',
    'https://wowroad.info/?item=51224',
    'https://wowroad.info/?item=50718',
    'https://wowroad.info/?item=51220',
    'https://wowroad.info/?item=50611',
    'https://wowroad.info/?item=51222',
    'https://wowroad.info/?item=50691',
    'https://wowroad.info/?item=51223',
    'https://wowroad.info/?item=54579',
    'https://wowroad.info/?item=50404',
    'https://wowroad.info/?item=50622',
    'https://wowroad.info/?item=50738',
    'https://wowroad.info/?item=50729',
    '', '',
    'https://wowroad.info/?item=51834',
    'https://wowroad.info/?item=50364',
    'https://wowroad.info/?item=54591',
    'https://wowroad.info/?item=50356',
    'https://wowroad.info/?item=50344',
    'https://wowroad.info/?item=47088'
);

writeInHTML('#hpalContent',
    'https://wowroad.info/?item=51272',
    'https://wowroad.info/?item=50724',
    'https://wowroad.info/?item=51273',
    'https://wowroad.info/?item=54583',
    'https://wowroad.info/?item=50680',
    'https://wowroad.info/?item=54582',
    'https://wowroad.info/?item=50650',
    'https://wowroad.info/?item=54587',
    'https://wowroad.info/?item=49891',
    'https://wowroad.info/?item=54586',
    'https://wowroad.info/?item=50664',
    'https://wowroad.info/?item=54585',
    'https://wowroad.info/?item=50734',
    'https://wowroad.info/?item=50732',
    'https://wowroad.info/?item=46017',
    'https://wowroad.info/?item=50616',
    '',
    'https://wowroad.info/?item=54589',
    'https://wowroad.info/?item=47432',
    'https://wowroad.info/?item=48724',
    'https://wowroad.info/?item=46051',
    ''
);

writeInHTML('#ppalContent',
    'https://wowroad.info/?item=50640',
    'https://wowroad.info/?item=50627',
    'https://wowroad.info/?item=51269',
    'https://wowroad.info/?item=50718',
    'https://wowroad.info/?item=51265',
    'https://wowroad.info/?item=50611',
    'https://wowroad.info/?item=51267',
    'https://wowroad.info/?item=50691',
    'https://wowroad.info/?item=51268',
    'https://wowroad.info/?item=54579',
    'https://wowroad.info/?item=50622',
    'https://wowroad.info/?item=50642',
    'https://wowroad.info/?item=50738',
    'https://wowroad.info/?item=50729',
    '', '', '',
    'https://wowroad.info/?item=50364',
    'https://wowroad.info/?item=54591',
    'https://wowroad.info/?item=50356',
    'https://wowroad.info/?item=50344',
    'https://wowroad.info/?item=47088'
);

writeInHTML('#rpalContent',
    'https://wowroad.info/?item=51277',
    'https://wowroad.info/?item=54581',
    'https://wowroad.info/?item=51279',
    'https://wowroad.info/?item=50653',
    'https://wowroad.info/?item=51275',
    'https://wowroad.info/?item=54580',
    'https://wowroad.info/?item=50690',
    'https://wowroad.info/?item=50707',
    'https://wowroad.info/?item=51278',
    'https://wowroad.info/?item=54578',
    'https://wowroad.info/?item=50402',
    'https://wowroad.info/?item=54576',
    'https://wowroad.info/?item=49623',
    '', '', '', '',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50706',
    'https://wowroad.info/?item=47131',
    '', ''
);

writeInHTML('#bdkContent',
    'https://wowroad.info/?item=50640',
    'https://wowroad.info/?item=50627',
    'https://wowroad.info/?item=51309',
    'https://wowroad.info/?item=50718',
    'https://wowroad.info/?item=51305',
    'https://wowroad.info/?item=50611',
    'https://wowroad.info/?item=51307',
    'https://wowroad.info/?item=50691',
    'https://wowroad.info/?item=51308',
    'https://wowroad.info/?item=54579',
    'https://wowroad.info/?item=50404',
    'https://wowroad.info/?item=50622',
    'https://wowroad.info/?item=50730',
    '', '', '', '',
    'https://wowroad.info/?item=50364',
    'https://wowroad.info/?item=54591',
    'https://wowroad.info/?item=50356',
    'https://wowroad.info/?item=50344',
    'https://wowroad.info/?item=47088'
);

writeInHTML('#fdkContent',
    'https://wowroad.info/?item=51312',
    'https://wowroad.info/?item=54581',
    'https://wowroad.info/?item=51314',
    'https://wowroad.info/?item=50467',
    'https://wowroad.info/?item=51310',
    'https://wowroad.info/?item=50670',
    'https://wowroad.info/?item=50675',
    'https://wowroad.info/?item=50620',
    'https://wowroad.info/?item=51313',
    'https://wowroad.info/?item=54578',
    'https://wowroad.info/?item=52572',
    'https://wowroad.info/?item=50693',
    'https://wowroad.info/?item=50737',
    'https://wowroad.info/?item=50672',
    '', '', '',
    'https://wowroad.info/?item=50363',
    'https://wowroad.info/?item=54590',
    '', '', ''
);

writeInHTML('#udkContent',
    'https://wowroad.info/?item=51312',
    'https://wowroad.info/?item=54581',
    'https://wowroad.info/?item=51314',
    'https://wowroad.info/?item=50677',
    'https://wowroad.info/?item=51310',
    'https://wowroad.info/?item=50659',
    'https://wowroad.info/?item=50690',
    'https://wowroad.info/?item=50620',
    'https://wowroad.info/?item=51313',
    'https://wowroad.info/?item=54578',
    'https://wowroad.info/?item=52572',
    'https://wowroad.info/?item=50657',
    'https://wowroad.info/?item=49623',
    '', '', '', '',
    'https://wowroad.info/?item=54590',
    'https://wowroad.info/?item=50363',
    'https://wowroad.info/?item=47131',
    '', ''
);