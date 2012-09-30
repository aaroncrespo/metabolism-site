
//draws metabolism inside matabolism
function drawMetabolism(metabolism){
    metabolism.setStart();
    //Reactions start

    var Fermentation = metabolism.path('M565.167,487.715V390h-65.161L500,461.5c0,4.319,0,14.333,3.5,18.5  c4.334,6.166,11.181,7.715,13,7.715H565.167');
    Fermentation.attr({id: 'Fermentation',fill: '#FFBF00'}).data('name', 'Fermentation');

    var Acetoacetate_and_Ketone_Body_Synthesis = metabolism.path('M565.167,487.715V390h80.312l0,0h9.536  c-1.652,0-7.35,4.119-7.35,7.939v70.894c0,3.671,0.834,10.458-2.478,13.954c-2.68,2.392-5.666,4.928-9.562,4.928H565.167');
    Acetoacetate_and_Ketone_Body_Synthesis.attr({id: 'Acetoacetate_and_Ketone_Body_Synthesis',fill: '#00EAFF'}).data('name', 'Acetoacetate and Ketone Body Synthesis');

    var Urea_Cycle = metabolism.path('M510,660V530h189.125l0,0h22.458c-3.896,0-7.053,5.263-7.053,10.347v101.245  c0,4.883-1.485,9.563-4.132,13.019c-2.646,3.45-6.232,5.392-9.976,5.392L510,660');
    Urea_Cycle.attr({id: 'Urea_Cycle',fill: '#19E624'}).data('name', 'Urea Cycle');

    var Pyruvate_Decarboxylation = metabolism.rect(500.005, 310, 79.995, 80);
    Pyruvate_Decarboxylation.attr({id: 'Pyruvate_Decarboxylation',x: '500.005',y: '310',fill: '#FF00BF'}).data('name', 'Pyruvate Decarboxylation');

    var Branched_Chain_Amino_Acid_Catabolism = metabolism.path('M370,660H174.303  c-3.993,0-7.821-2.107-10.644-5.858c-2.823-3.751-4.409-8.838-4.409-14.142v-90h203.224c1.998,0,3.911-1.054,5.323-2.929  s2.205-4.419,2.205-7.071L370,660');
    Branched_Chain_Amino_Acid_Catabolism.attr({id: 'Branched_Chain_Amino_Acid_Catabolism',fill: '#FF00BF'}).data('name', 'Branched Chain Amino Acid Catabolism');

    var Asparatate_Amino_Acid_Group_Synthesis = metabolism.path('M580,100h201.374  c3.956,0,7.75,2.107,10.548,5.858s4.369,8.838,4.369,14.142v110c0,5.523,3.338,10,7.458,10H780v30H580V100');
    Asparatate_Amino_Acid_Group_Synthesis.attr({id: 'Asparatate_Amino_Acid_Group_Synthesis',fill: '#FF00BF'}).data('name', 'Asparatate Amino Acid Group Synthesis');

    var Pentose_Interconversion = metabolism.path('M400,112.286v81.429c0,8.995,8.688,16.286,19.714,16.286  H190.131v-97.714L400,112.286L400,112.286z');
    Pentose_Interconversion.attr({id: 'Pentose_Interconversion',fill: '#FF00BF'}).data('name', 'Pentose Interconversion');

    var Inositol_Metabolism = metabolism.path('M147.233,210H17.983v100H130v-80  C130,218.954,137.715,210,147.233,210');
    Inositol_Metabolism.attr({id: 'Inositol_Metabolism',fill: '#FF00BF'}).data('name', 'Inositol Metabolism');

    var Pyrimidine_Biosynthesis = metabolism.path('M400,11.25v101.036H171.097l0,0h-27.18  c4.716,0,8.536-4.09,8.536-8.041V25.557c0-3.795,1.797-7.433,4.999-10.117c3.203-2.682,7.544-4.19,12.073-4.19H400');
    Pyrimidine_Biosynthesis.attr({id: 'Pyrimidine_Biosynthesis',fill: '#19E624'}).data('name', 'Pyrimidine Biosynthesis');

    var Sucrose_Metabolism = metabolism.rect(17.742, 310, 112.017, 80);
    Sucrose_Metabolism.attr({id: 'Sucrose_Metabolism',x: '17.742',y: '310',fill: '#FFBF00'}).data('name', 'Sucrose Metabolism');

    var Citric_Acid_Cycle = metabolism.rect(580, 270, 200, 120);
    Citric_Acid_Cycle.attr({id: 'Citric_Acid_Cycle',x: '580',y: '270',fill: '#6600FF','enable-background': 'new    '}).data('name', 'Citric Acid Cycle');

    var Fatty_Acid_Metabolism = metabolism.path('M370,540c0-5.523,4.477-10,10-10h130  v130H370V540');
    Fatty_Acid_Metabolism.attr({id: 'Fatty_Acid_Metabolism',fill: '#6600FF','enable-background': 'new    '}).data('name', 'Fatty Acid Metabolism');

    var Purine_Biosynthesis = metabolism.path('M400,11.25h231.375  c4.547,0,8.905,1.324,12.12,3.681c3.214,2.357,5.02,5.553,5.02,8.887v69.119c0,3.471,3.835,7.063,8.567,7.063h-27.284l0,0H400V11.25  ');
    Purine_Biosynthesis.attr({id: 'Purine_Biosynthesis',fill: '#6600FF','enable-background': 'new    '}).data('name', 'Purine Biosynthesis');

    var Glucuronate_Metabolism = metabolism.path('M190,112.286H35.658  c-4.815,0-9.434,1.716-12.839,4.77c-3.405,3.055-5.319,7.196-5.319,11.516V210H190V112.286');
    Glucuronate_Metabolism.attr({id: 'Glucuronate_Metabolism',fill: '#6600FF','enable-background': 'new    '}).data('name', 'Glucuronate Metabolism');

    var Amino_Sugars_Metabolism = metabolism.path('M369.935,410c-4.353,0-8.521,2.107-11.603,5.858  s-4.807,8.838-4.807,14.142v40c0,11.046-7.353,20-16.411,20H181.221c4.353,0,8.526-2.107,11.603-5.858  c3.078-3.751,4.806-8.838,4.806-14.142v-60H369.935');
    Amino_Sugars_Metabolism.attr({id: 'Amino_Sugars_Metabolism',fill: '#FFBF00'}).data('name', 'Amino Sugars Metabolism');

    var Glutamate_Amino_Acid_Group_Synthesis = metabolism.path('M833.479,390H665.623  c3.708,0,7.262,2.107,9.884,5.857c2.625,3.752,4.099,8.839,4.099,14.143v100c0,11.046-6.264,20-13.979,20H804.28  c0,0,7.688,0.667,12.676-4.836c2.718-3.333,2.646-3.333,2.438-15.164V400c-0.008-5.523,2.122-10,13.193-10');
    Glutamate_Amino_Acid_Group_Synthesis.attr({id: 'Glutamate_Amino_Acid_Group_Synthesis',fill: '#FFBF00'}).data('name', 'Glutamate Amino Acid Group Synthesis');

    var Small_Amino_Acid_Synthesis = metabolism.path('M330,490c-3.773,0-7.393,2.107-10.062,5.858  c-2.668,3.751-4.161,8.838-4.161,14.142v20c0,11.046,6.359,20,14.229,20H159.25v-40c0-11.046,6.37-20,14.229-20H330');
    Small_Amino_Acid_Synthesis.attr({id: 'Small_Amino_Acid_Synthesis',fill: '#FF0000'}).data('name', 'Small Amino Acid Synthesis');

    var Porphyrins_and_Corronoids_Metabolism = metabolism.path('M780,390h57.046c1.513,0,2.964-1.055,4.033-2.93  c1.07-1.875,1.671-4.418,1.671-7.07V250c0-5.523-2.553-10-5.704-10H780V390');
    Porphyrins_and_Corronoids_Metabolism.attr({id: 'Porphyrins_and_Corronoids_Metabolism',fill: '#FF0000'}).data('name', 'Porphyrins and Corronoids Metabolism');

    var Aromatic_Amino_Acid_Synthesis = metabolism.path('M450,160h130v150H470V180  C470,168.954,461.046,160,450,160');
    Aromatic_Amino_Acid_Synthesis.attr({id: 'Aromatic_Amino_Acid_Synthesis',fill: '#00EAFF'}).data('name', 'Aromatic Amino Acid Synthesis');

    var Pentose_Phosphate_Pathway_HMP_Shunt = metabolism.path('M450.332,210H263.488v100H470V190  C470,201.046,461.194,210,450.332,210');
    Pentose_Phosphate_Pathway_HMP_Shunt.attr({id: 'Pentose_Phosphate_Pathway_HMP_Shunt',fill: '#FFBF00'}).data('name', 'Pentose Phosphate Pathway/HMP Shunt');

    var Lactose_and_Galactose_Metabolism = metabolism.path('M184.059,210h79.429v100H198.5v-80  C198.5,218.954,192.035,210,184.059,210');
    Lactose_and_Galactose_Metabolism.attr({id: 'Lactose_and_Galactose_Metabolism',fill: '#19E624'}).data('name', 'Lactose and Galactose Metabolism');

    var Starch_and_Glycogen_Metabolism = metabolism.path('M17.5,390v70c0,11.046,7.749,20,17.308,20h77.885  c4.59,0,8.992-2.107,12.238-5.858C128.177,470.391,130,465.304,130,460v-70H17.5');
    Starch_and_Glycogen_Metabolism.attr({id: 'Starch_and_Glycogen_Metabolism',fill: '#00EAFF'}).data('name', 'Starch and Glycogen Metabolism');

    var Histidine_Metabolism = metabolism.path('M400.047,180v-80H580v60H420.042  c-5.302,0-10.388,2.107-14.138,5.858S400.047,174.696,400.047,180');
    Histidine_Metabolism.attr({id: 'Histidine_Metabolism',fill: '#FF0000'}).data('name', 'Histidine Metabolism');

    var Glycolysis_and_Gluconeogenesis = metabolism.path('M198.5,310v100h283.227  c4.854,0,9.494,2.107,12.932,5.858c3.425,3.751,5.35,8.838,5.35,14.142V310H198.5');
    Glycolysis_and_Gluconeogenesis.attr({id: 'Glycolysis_and_Gluconeogenesis',fill: '#FF0000'}).data('name', 'Glycolysis and Gluconeogenesis');

    var Reactions = metabolism.setFinish();

    metabolism.setStart();
    //Lines start
    var path_ba = metabolism.path('M670,240c5.304,0,10.391-2.107,14.142-5.858   S690,225.304,690,220c0-11.046,8.334-20.159,20-20');
    var path_bb = metabolism.path('M420,355.166V460c0,11.046,5.704,20,16.75,20   c-11.046,0-16.75,8.954-16.75,20v103.417');
    var path_bc = metabolism.path('M360,510h110c-11.046,0-20,8.954-20,20   c0,5.304-2.107,10.391-5.858,14.142S435.304,550,430,550c-27.614,0-50,22.386-50,50s22.386,50,50,50c22.091,0,40-17.909,40-40   s-17.909-40-40-40c-16.569,0-30,13.431-30,30s13.431,30,30,30c11.046,0,20-8.954,20-20');
    var path_bd = metabolism.path('M639.25,330v90.75   c0,11.046,9.704,19.25,20.75,19.25h80c11.046,0,20,8.954,20,20s-8.954,20-20,20h-60c-5.304,0-10.391,2.107-14.142,5.858   S660,494.696,660,500v93');
    var path_be = metabolism.path('M726.194,310.866   C728.707,316.932,730,323.434,730,330c0,27.614-22.386,50-50,50s-50-22.386-50-50s22.386-50,50-50   C700.223,280,718.455,292.182,726.194,310.866z');
    var path_bf = metabolism.path('M726.194,310.866   C728.707,316.932,730,323.434,730,330c0,27.614-22.386,50-50,50s-50-22.386-50-50s22.386-50,50-50   C700.223,280,718.455,292.182,726.194,310.866z');
    var path_bg = metabolism.path('M630,330c0,11.046-8.954,20-20,20H80');
    var path_bh = metabolism.path('M150,344.003V280c0-11.046-8.954-20-20-20H79.25');
    var path_bi = metabolism.path('M270,341.584V260c0-11.046,8.954-20,20-20h130.75');
    var path_bj = metabolism.path('M429.427,340.751V148.5   c0-10.583,9.527-19.25,20.573-19.25h30');
    var path_bk = metabolism.path('M429.427,161.875V70c0-11.046,9.527-20,20.573-20   h30c7.869,0,15.279-3.705,20-10c5.409-5.409,12.427-8.918,20-10h90');
    var path_bl = metabolism.path('M70,250v-60c0-11.046,8.954-20,20-20h50.75');
    var path_bm = metabolism.path('M150,160v-10c0-5.304-1.694-10.391-4.709-14.142   S138.187,130,133.924,130H61.577c-8.879,0-16.077,8.954-16.077,20c0,5.304,1.694,10.391,4.709,14.142S57.312,170,61.576,170h40.192   ');
    var path_bn = metabolism.path('M150,180v100c0-5.304,2.107-10.391,5.858-14.142   S164.696,260,170,260h55');
    var path_bo = metabolism.path('M130,130h170c5.304,0,10.391,2.107,14.142,5.858   S320,144.696,320,150v90');
    var path_bp = metabolism.path('M159.25,170H300c5.304,0,10.391,2.107,14.142,5.858   S320,184.696,320,190');
    var path_bq = metabolism.path('M330,340v-30c0-11.046,8.954-20,20-20h60   c5.304,0,10.391-2.107,14.142-5.858s5.285-8.838,5.285-14.142');
    var path_br = metabolism.path('M330,360v70c0,11.046-8.954,20-20,20h-30');
    var path_bs = metabolism.path('M150,360v50c0,11.046-8.954,20-20,20H80');
    var path_bt = metabolism.path('M480,50c7.869,0,15.279,3.705,20,10   c5.409,5.409,12.427,8.918,20,10h90');
    var path_bu = metabolism.path('M429.427,290c0-11.046,9.527-20,20.573-20h100');
    var path_bv = metabolism.path('M630,315V180c0-11.046,8.954-20,20-20');
    var path_bw = metabolism.path('M630,180v-40c0-11.046,8.954-20,20-20h-30   c-5.304,0-10.391,2.107-14.142,5.858S600,134.696,600,140v30c0,11.046-8.954,20-20,20h-35');
    var path_bx = metabolism.path('M550,270c5.304,0,10.391-2.107,14.142-5.858   S570,255.304,570,250v-40c0-11.046-8.954-20-20-20');
    var path_by = metabolism.path('M630,160c0-11.046,8.954-20,20-20h60');
    var path_bz = metabolism.path('M737,302.001c5.304,0,13.391,0.106,17.142,3.857   S760,314.696,760,320v180');
    var path_aa = metabolism.path('M720,420.75h20c5.304,0,11.793,3.054,15.544,6.805   S760,437.446,760,442.75');
    var path_ab = metabolism.path('M646.194,580   c2.513,6.066,3.806,12.568,3.806,19.134c0,27.614-22.386,50-50,50s-50-22.386-50-50s22.386-50,50-50   C620.223,549.134,638.455,561.316,646.194,580z');
    var path_ac = metabolism.path('M599,549c5.304,0,11.391,3.107,15.142,6.858   S620,564.696,620,570v10');
    var path_ad = metabolism.path('M275.75,76.048');
    var path_ae = metabolism.path('M590,356.834V490c0,11.046-8.954,20-20,20H470');
    var path_af = metabolism.path('M360,510c11.046,0,20-8.954,20-20v-40   c0-5.304,2.107-10.391,5.858-14.142S394.696,430,400,430h80c11.046,0,20-8.954,20-20v-50v70c0,11.046,8.954,20,20,20');
    var path_ag = metabolism.path('M360,510h110c-11.046,0-20,8.954-20,20   c0,5.304-2.107,10.391-5.858,14.142S435.304,550,430,550c-27.614,0-50,22.386-50,50s22.386,50,50,50c22.091,0,40-17.909,40-40   s-17.909-40-40-40c-16.569,0-30,13.431-30,30s13.431,30,30,30c8.425,0,16.141-5.482,18.902-13.446   c2.979-8.601-1.291-16.55-10.902-16.545');
    var path_ah = metabolism.path('M279.25,510L279.25,510H360   c11.046,0,20-8.954,20-20v-40c0-5.304,2.107-10.391,5.858-14.142S394.696,430,400,430h80c11.046,0,20-8.954,20-20v-50v70   c0,11.046,8.954,20,20,20');
    var path_ai = metabolism.path('M340,510c-5.304,0-10.391,2.003-14.142,5.568   c-3.751,3.562-5.858,8.396-5.858,13.438v55.88c0,10.499-8.954,19.016-20,19.016h-20.75');
    var path_aj = metabolism.path('M225,390h-46.869   c-5.525,0-10.823-2.107-14.729-5.857c-3.908-3.752-6.102-8.838-6.102-14.143v-14.834');
    var path_ak = metabolism.path('M208.5,76l147.125-0.203');
    var path_al = metabolism.path('M797.333,302.001H729.25');
    var path_am = metabolism.path('M710,240h-70');
    var path_an = metabolism.path('M749.551,508.417h-28.229');
    var path_ao = metabolism.path('M286.5,66.798V40.381');
    var path_ap = metabolism.path('M199.25,67.298V40.881');
    var path_aq = metabolism.path('M330.002,282.667v26.417');
    var path_ar = metabolism.path('M335.938,76');
    var path_as = metabolism.path('M430,232.542l-29.232-0.083   c-12.466,0-22.57-14.027-22.57-31.333v-93.998c0-8.309-2.378-16.278-6.611-22.154c-4.232-5.876-9.975-9.178-15.96-9.178');
    var path_at = metabolism.path('M596.987,354.466c5.304,0,11.499,2.615,15.25,6.367   c3.751,3.75,4.263,7.028,4.263,12.332V450');
    var path_au = metabolism.path('M499.713,342.667c0-11.046,9.527-20,20.573-20   h110.251');

    var Lines = metabolism.setFinish();

    metabolism.setStart();
    //Dots start
    var Glucuronate = metabolism.circle(150, 170, 9);
    Glucuronate.attr({id: 'Glucuronate'}).data('name', 'Glucuronate');
    var Lactose_Galactose = metabolism.circle(234, 260, 9);
    Lactose_Galactose.attr({id: 'Lactose_Galactose'}).data('name', 'Lactose, Galactose');
    var Inositol = metabolism.circle(70, 260, 9);
    Inositol.attr({id: 'Inositol'}).data('name', 'Inositol');
    var Sucrose = metabolism.circle(70, 350, 9);
    Sucrose.attr({id: 'Sucrose'}).data('name', 'Sucrose');
    var Amylose_Glycogen = metabolism.circle(70, 430, 9);
    Amylose_Glycogen.attr({id: 'Amylose_Glycogen'}).data('name', 'Amylose, Glycogen');
    var Glucose = metabolism.circle(234, 390, 9);
    Glucose.attr({id: 'Glucose'}).data('name', 'Glucose');
    var Glucose1Phosphate = metabolism.circle(150, 351, 9);
    Glucose1Phosphate.attr({id: 'Glucose-1-Phosphate'}).data('name', 'Glucose - 1 - Phosphate');
    var Glucose6Phosphate = metabolism.circle(270, 350, 9);
    Glucose6Phosphate.attr({id: 'Glucose-6-Phosphate'}).data('name', 'Glucose - 6 - Phosphate');
    var Fructose = metabolism.circle(330, 273, 9);
    Fructose.attr({id: 'Fructose'}).data('name', 'Fructose');
    var Ribulose5Phosphate = metabolism.circle(430, 240, 9);
    Ribulose5Phosphate.attr({id: 'Ribulose-5-Phosphate'}).data('name', 'Ribulose - 5 - Phosphate');
    var Fructose6Phosphate = metabolism.circle(330, 350, 9);
    Fructose6Phosphate.attr({id: 'Fructose-6-Phosphate'}).data('name', 'Fructose - 6 - Phosphate');
    var GAD3P = metabolism.circle(424, 348, 9);
    GAD3P.attr({id: 'GAD-3P'}).data('name', 'GAD - 3 - P');
    var Pyruvate = metabolism.circle(500, 351, 9);
    Pyruvate.attr({id: 'Pyruvate'}).data('name', 'Pyruvate');
    var Tryptophan = metabolism.circle(535, 190, 9);
    Tryptophan.attr({id: 'Tryptophan'}).data('name', 'Tryptophan');
    var Histidine = metabolism.circle(489, 130, 9);
    Histidine.attr({id: 'Histidine'}).data('name', 'Histidine');
    var ATP_to_Adenosine = metabolism.circle(619, 30, 9);
    ATP_to_Adenosine.attr({id: 'ATP_to_Adenosine'}).data('name', 'ATP to Adenosine');
    var GTP_to_Guanosine = metabolism.circle(619, 70, 9);
    GTP_to_Guanosine.attr({id: 'GTP_to_Guanosine'}).data('name', 'GTP to Guanosine');
    var Serine = metabolism.circle(660, 120, 9);
    Serine.attr({id: 'Serine'}).data('name', 'Serine');
    var Cysteine = metabolism.circle(660, 160, 9);
    Cysteine.attr({id: 'Cysteine'}).data('name', 'Cysteine');
    var Methionine = metabolism.circle(719, 140, 9);
    Methionine.attr({id: 'Methionine'}).data('name', 'Methionine');
    var Asparagine = metabolism.circle(719, 198, 9);
    Asparagine.attr({id: 'Asparagine'}).data('name', 'Asparagine');
    var Lysine = metabolism.circle(719, 240, 9);
    Lysine.attr({id: 'Lysine'}).data('name', 'Lysine');
    var Aspartate2 = metabolism.circle(630, 240, 9);
    Aspartate2.attr({id: 'Aspartate2'}).data('name', 'Aspartate');
    var Hemoglobin_VitaminB12_Cytochromes = metabolism.circle(806, 302, 9);
    Hemoglobin_VitaminB12_Cytochromes.attr({id: 'Hemoglobin_VitaminB12_Cytochromes'}).data('name', 'Hemoglobin, Vitamin B12, Cytochromes');
    var Succinate = metabolism.circle(720, 302, 9);
    Succinate.attr({id: 'Succinate'}).data('name', 'Succinate');
    var Fumarate = metabolism.circle(665, 282, 9);
    Fumarate.attr({id: 'Fumarate'}).data('name', 'Fumarate');
    var Oxaloacetate = metabolism.circle(633, 323, 9);
    Oxaloacetate.attr({id: 'Oxaloacetate'}).data('name', 'Oxaloacetate');
    var Alphaketoglutarate = metabolism.circle(710, 370, 9);
    Alphaketoglutarate.attr({id: 'Alpha-ketoglutarate'}).data('name', '\u03B1 - ketoglutarate');
    var Glutamine = metabolism.circle(710, 420, 9);
    Glutamine.attr({id: 'Glutamine'}).data('name', 'Glutamine');
    var Glutamate = metabolism.circle(760, 508, 9);
    Glutamate.attr({id: 'Glutamate'}).data('name', 'Glutamate');
    var Proline = metabolism.circle(710, 508, 9);
    Proline.attr({id: 'Proline'}).data('name', 'Proline');
    var Lactate_Ethanol = metabolism.circle(527, 450, 9);
    Lactate_Ethanol.attr({id: 'Lactate_Ethanol'}).data('name', 'Lactate, Ethanol');
    var AcetylCoA = metabolism.circle(590, 348, 9);
    AcetylCoA.attr({id: 'Acetyl-CoA'}).data('name', 'Acetyl-CoA');
    var Glucosamine = metabolism.circle(270, 450, 9);
    Glucosamine.attr({id: 'Glucosamine'}).data('name', 'Glucosamine');
    var Fats = metabolism.circle(446, 480, 9);
    Fats.attr({id: 'Fats'}).data('name', 'Fats');
    var Glycine_Serine_Alanine = metabolism.circle(270, 510, 9);
    Glycine_Serine_Alanine.attr({id: 'Glycine_Serine_Alanine'}).data('name', 'Glycine, Serine, Alanine');
    var Valine_Leucine_Isoleucine = metabolism.circle(270, 603, 9);
    Valine_Leucine_Isoleucine.attr({id: 'Valine_Leucine_Isoleucine'}).data('name', 'Valine, Leucine, Isoleucine');
    var FattyAcid = metabolism.circle(428, 602, 9);
    FattyAcid.attr({id: 'FattyAcid'}).data('name', 'Fatty Acid');
    var Urea = metabolism.circle(620, 588, 9);
    Urea.attr({id: 'Urea'}).data('name', 'Urea');
    var Aspartate = metabolism.circle(655, 601, 9);
    Aspartate.attr({id: 'Aspartate'}).data('name', 'Aspartate');
    var Uridine = metabolism.circle(286, 76, 9);
    Uridine.attr({id: 'Uridine'}).data('name', 'Uridine');
    var Cytidine = metabolism.circle(199, 75, 9);
    Cytidine.attr({id: 'Cytidine'}).data('name', 'Cytidine');
    var Uracil_etc = metabolism.circle(286, 31, 9);
    Uracil_etc.attr({id: 'Uracil_etc.'}).data('name', 'Uracil, etc');
    var Cytosine_etc = metabolism.circle(199, 31, 9);
    Cytosine_etc.attr({id: 'Cytosine_etc.'}).data('name', 'Cytosine, etc');
    var AMP = metabolism.circle(535, 30, 9);
    AMP.attr({id: 'AMP'}).data('name', 'AMP');
    var GMP = metabolism.circle(535, 70, 9);
    GMP.attr({id: 'GMP'}).data('name', 'GMP');
    var VitaminC = metabolism.circle(70, 130, 9);
    VitaminC.attr({id: 'VitaminC'}).data('name', 'Vitamin C');
    var Arginine = metabolism.circle(558, 624, 9);
    Arginine.attr({id: 'Arginine'}).data('name', 'Arginine');
    var Tyrosine = metabolism.circle(534, 269, 9);
    Tyrosine.attr({id: 'Tyrosine'}).data('name', 'Tyrosine');
    var Threonine = metabolism.circle(630, 190, 9);
    Threonine.attr({id: 'Threonine'}).data('name', 'Threonine');
    var Aspartate3 = metabolism.circle(345, 75, 9);
    Aspartate3.attr({id: 'Aspartate3'}).data('name', 'Aspartate');
    var Acetoacetate = metabolism.circle(616, 450, 9);
    Acetoacetate.attr({id: 'Acetoacetate'}).data('name', 'Acetoacetate');
    var Dots = metabolism.setFinish();

    Dots.attr({'id': 'Dots','name': 'Dots',fill: '#62B24F',stroke: '#000000','stroke-width': '3','stroke-miterlimit': '10','stroke-opacity': '1', cursor: 'pointer'});
    Lines.attr({'id': 'Lines','name': 'Lines',stroke: '#000000','stroke-width': '4','stroke-miterlimit': '10','stroke-opacity': '1'});
    Reactions.attr({'stroke-width': '0','stroke-opacity': '1',opacity: '0.7', cursor: 'pointer'});


    // Reactions.forEach(function (el) {
    //     //be smarter on what we make modals, test data etc
    //     // el.node.setAttribute('data-toggle','modal');
    //     // el.node.setAttribute('href','#reaction');
    //     el.node.setAttribute('id', el.data('name'));
    //     //el.node.setAttribute('name',el.data('name'));

    //     //setup tooltips
    //     el.node.setAttribute('title',el.data('name'));
    //     // el.node.setAttribute('rel','tooltip');

    //     // $(el).on('show', function (ev) {
    //     //     console.log(el);
    //     // });

    //     // el.mouseover(function () {
    //     //     el.animate({'stroke-width': '3','stroke-opacity': '100', 'stroke-color': '#FFFFFF'}, 100);
    //     //     metabolism.safari();

    //     // });
    //     // el.mouseout(function () {
    //     //     el.animate({'stroke-width': '0','stroke-opacity': '0'}, 100);
    //     //     metabolism.safari();
    //     // });
    // });

    // Dots.forEach(function (el){
    //     el.node.setAttribute('title',el.data('name'));
    //     el.node.setAttribute('id', el.data('name'));

    //     el.node.setAttribute('rel','tooltip');
    // });


    //all paths
    // metabolism.forEach(function(el){

    // });

    // //all dots
    // Dots.forEach(function(el){

    // });
    // //all lines
    // Lines.forEach(function(el){

    // });
    //reactions should be grouped with their dots. so you can zoom into the whole reaction + dots.

    //redo illustrator to intersect dots with lines
    //reaction
    //name
    //description
    //path (translate to origin for zoom views)
    //h-m products (dots group path to path) and translate to 0
    //h-m reactants (dots)
    //h-m diseases?



    //protein
    //name
    //description
    //path

    //dieases
    //name
    //description
    //path
    //h-o reaction?


    //change branched chain met to catabolism
    //


}