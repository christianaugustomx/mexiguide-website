/* MexiGuide interactive phone mockup (EN / ES / PT). Mount: <div class="mgp" data-lang="en"></div> */
(function () {
  'use strict';

  var T = {
    en: {
      evening: 'GOOD EVENING', where: 'Where to explore today', emergency: 'Emergency', map: 'Map', closest: 'Closest to you',
      all: 'All', beaches: 'Beaches', colonial: 'Colonial', ruins: 'Ruins', cities: 'Cities', guide: 'Guide', seeAll: 'See all destinations',
      none: 'No destinations in this category yet', planT: 'Plan your trip', planP: "Pick the cities you'll visit and MexiGuide builds your checklist around them.", pick: 'Pick cities',
      yourExp: 'Your exploration', expSub: 'City guides, safety maps & travel goals', places: 'Places', food: 'Food', exps: 'Experiences', done: 'done', expGuides: 'Explore city guides',
      myTrip: 'My trip', day: 'Day', moreCity: '1 more city and a new badge appears', stamps: 'of 2 stamps collected', aiT: 'AI Travel Tips', aiS: 'Local tips for where you are right now.',
      aiTip: 'Tip: skip the tourist-menu spots near the Zócalo. Walk 3 blocks and eat where office workers queue at lunch.',
      share: 'Share', doneIn: function (n, c) { return n + ' done in ' + c + ' ' + (c === 1 ? 'city' : 'cities'); }, across: 'Goals done across your cities',
      myCities: 'My cities', removeAll: 'Remove all', cityHint: 'Your cities share one ring. Tap one to make it current for Food Explorer.', current: 'Current',
      thingsTo: 'Things to do', showing: "Showing this city's list. To switch, tap another city in My cities.", foodExp: 'Food Explorer', foodHint: 'Try these local dishes. Tap one to check it off.',
      placesExp: 'Places · Experiences', pro: 'PRO', proToast: 'Unlock all dishes with MexiGuide Pro', noCities: 'No cities yet. Tap Pick cities on Explore.',
      tools: 'Tools', toolsSub: 'Trusted services, vetted for Mexico', nat: 'National Emergency', natSub: 'Police, fire & ambulance', callToast: 'On your phone this dials 911',
      emNums: 'Emergency Numbers', currency: 'Currency Converter', currSub: 'Convert, tip and IVA', amount: 'Amount', tip: 'Tip', iva: 'IVA 16% included', rateNote: 'Demo rate, live rate in the app',
      tours: 'Tours & experiences', gygSub: 'Free cancellation on many tours', gygP: 'Book tours, day trips & activities across Mexico', t1: 'Ruins & Pyramids', t2: 'Food Tours', t3: 'Cenotes', browse: 'Browse Tours',
      commission: 'MexiGuide earns a small commission at no extra cost to you.', insurance: 'Travel insurance', swSub: 'From $45 / 4 weeks', swP: 'Medical cover for nomads and travelers', swCta: 'Get covered',
      sendMoney: 'Send & spend money', wiseSub: 'Real exchange rate, low fees', wiseP: 'Pay in pesos without hidden bank markups', wiseCta: 'Open Wise',
      lvlWord: 'Level', of: 'of', lvl: ['', 'Safe', 'Mostly Safe', 'Use Caution', 'High Caution', 'High Risk'],
      tipL: ['', 'Calm area, normal precautions', 'Generally safe, watch your belongings', 'Pickpockets very active in tourist areas', 'Avoid walking alone after dark', 'Not recommended for tourists'],
      search: 'Search cities, tools…', scan: 'Scan', scanToast: 'Scan a dish, sign or menu with your camera', locToast: 'Centered on your location', cityLbl: 'Mexico City', mx: 'Ciudad de México', low: 'Safer', high: 'Riskier',
      profile: 'Profile', traveler: 'Traveler', travSub: 'Free plan · 2 cities', proT: 'Unlock MexiGuide Pro', proP: 'All local dishes, offline safety maps and unlimited cities.', proCta: 'See Pro', proToast2: 'Opens the Pro plans in the app',
      streak: 'Streak', streakSub: '5 days exploring', language: 'Language', notif: 'Safety alerts', offline: 'Offline mode', days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      tabs: ['Explore', 'My trip', 'Map', 'Tools', 'Profile'], me: 'You',
      dests: { cdmx: ['Cuauhtémoc (Alcaldía)', 'Cities'], teo: ['Teotihuacán', 'Estado de México'], tep: ['Tepoztlán, Morelos', 'Morelos'], tul: ['Tulum', 'Quintana Roo'], oax: ['Oaxaca de Juárez', 'Oaxaca'], sma: ['San Miguel de Allende', 'Guanajuato'], pva: ['Puerto Vallarta', 'Jalisco'] },
      lists: {
        cdmx: { name: 'Ciudad de México', food: ['Tlacoyos from a street comal', 'Tacos de canasta (basket tacos)', 'Pozole on the weekend', 'Esquites or grilled corn from a street cart', 'Quesadillas at Mercado de San Juan', 'Tamales and atole from a street stand', 'Churros at El Moro', 'Try mole in Coyoacán', 'Eat carnitas at El Hidalguense', 'Try tacos al pastor'], places: ['Explore the Zócalo', 'Visit Frida Kahlo Museum', 'Walk Chapultepec Park'], exps: ['Float the canals of Xochimilco', 'Watch a lucha libre match', 'Climb the Pyramid of the Sun'] },
        aca: { name: 'Acapulco', food: ['Ceviche at the bay', 'Pozole verde on Thursday', 'Aguachile on the beach', 'Fresh coconut water', 'Fish tacos at La Quebrada', 'Tostadas de camarón'], places: ['Watch the La Quebrada cliff divers', 'Visit Fort San Diego', 'Relax at Playa Condesa'], exps: ['Take a Bay sunset cruise', 'Dance at a Costera nightclub'] }
      }
    },
    es: {
      evening: 'BUENAS NOCHES', where: 'Dónde explorar hoy', emergency: 'Emergencia', map: 'Mapa', closest: 'Más cerca de ti',
      all: 'Todo', beaches: 'Playas', colonial: 'Colonial', ruins: 'Ruinas', cities: 'Ciudades', guide: 'Guía', seeAll: 'Ver todos los destinos',
      none: 'Aún no hay destinos en esta categoría', planT: 'Planea tu viaje', planP: 'Elige las ciudades que visitarás y MexiGuide arma tu lista alrededor de ellas.', pick: 'Elegir ciudades',
      yourExp: 'Tu exploración', expSub: 'Guías de ciudad, mapas de seguridad y metas de viaje', places: 'Lugares', food: 'Comida', exps: 'Experiencias', done: 'listo', expGuides: 'Explorar guías de ciudad',
      myTrip: 'Mi viaje', day: 'Día', moreCity: '1 ciudad más y aparece una nueva insignia', stamps: 'de 2 sellos reunidos', aiT: 'Consejos con IA', aiS: 'Tips locales de donde estás ahora mismo.',
      aiTip: 'Tip: evita los restaurantes turísticos cerca del Zócalo. Camina 3 cuadras y come donde hace fila la gente de oficina.',
      share: 'Compartir', doneIn: function (n, c) { return n + ' hechos en ' + c + ' ' + (c === 1 ? 'ciudad' : 'ciudades'); }, across: 'Metas cumplidas en tus ciudades',
      myCities: 'Mis ciudades', removeAll: 'Quitar todo', cityHint: 'Tus ciudades comparten un anillo. Toca una para hacerla la actual en Food Explorer.', current: 'Actual',
      thingsTo: 'Qué hacer', showing: 'Mostrando la lista de esta ciudad. Para cambiar, toca otra ciudad en Mis ciudades.', foodExp: 'Explorador de comida', foodHint: 'Prueba estos platillos locales. Toca uno para marcarlo.',
      placesExp: 'Lugares · Experiencias', pro: 'PRO', proToast: 'Desbloquea todos los platillos con MexiGuide Pro', noCities: 'Aún no hay ciudades. Toca Elegir ciudades en Explorar.',
      tools: 'Herramientas', toolsSub: 'Servicios confiables, revisados para México', nat: 'Emergencias nacional', natSub: 'Policía, bomberos y ambulancia', callToast: 'En tu teléfono esto marca al 911',
      emNums: 'Números de emergencia', currency: 'Conversor de moneda', currSub: 'Convierte, propina e IVA', amount: 'Monto', tip: 'Propina', iva: 'IVA 16% incluido', rateNote: 'Tipo de cambio demo, en vivo en la app',
      tours: 'Tours y experiencias', gygSub: 'Cancelación gratis en muchos tours', gygP: 'Reserva tours, excursiones y actividades en todo México', t1: 'Ruinas y pirámides', t2: 'Tours de comida', t3: 'Cenotes', browse: 'Ver tours',
      commission: 'MexiGuide gana una pequeña comisión sin costo extra para ti.', insurance: 'Seguro de viaje', swSub: 'Desde $45 / 4 semanas', swP: 'Cobertura médica para nómadas y viajeros', swCta: 'Asegúrate',
      sendMoney: 'Envía y gasta dinero', wiseSub: 'Tipo de cambio real, comisiones bajas', wiseP: 'Paga en pesos sin recargos ocultos del banco', wiseCta: 'Abrir Wise',
      lvlWord: 'Nivel', of: 'de', lvl: ['', 'Seguro', 'Bastante seguro', 'Precaución', 'Alta precaución', 'Alto riesgo'],
      tipL: ['', 'Zona tranquila, precauciones normales', 'Generalmente seguro, cuida tus cosas', 'Carteristas muy activos en zonas turísticas', 'Evita caminar solo de noche', 'No recomendado para turistas'],
      search: 'Buscar ciudades, herramientas…', scan: 'Escanear', scanToast: 'Escanea un platillo, letrero o menú con tu cámara', locToast: 'Centrado en tu ubicación', cityLbl: 'Ciudad de México', mx: 'Ciudad de México', low: 'Más seguro', high: 'Más riesgo',
      profile: 'Perfil', traveler: 'Viajero', travSub: 'Plan gratis · 2 ciudades', proT: 'Desbloquea MexiGuide Pro', proP: 'Todos los platillos, mapas de seguridad sin conexión y ciudades ilimitadas.', proCta: 'Ver Pro', proToast2: 'Abre los planes Pro en la app',
      streak: 'Racha', streakSub: '5 días explorando', language: 'Idioma', notif: 'Alertas de seguridad', offline: 'Modo sin conexión', days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      tabs: ['Explorar', 'Mi viaje', 'Mapa', 'Herramientas', 'Perfil'], me: 'Tú',
      dests: { cdmx: ['Cuauhtémoc (Alcaldía)', 'Ciudades'], teo: ['Teotihuacán', 'Estado de México'], tep: ['Tepoztlán, Morelos', 'Morelos'], tul: ['Tulum', 'Quintana Roo'], oax: ['Oaxaca de Juárez', 'Oaxaca'], sma: ['San Miguel de Allende', 'Guanajuato'], pva: ['Puerto Vallarta', 'Jalisco'] },
      lists: {
        cdmx: { name: 'Ciudad de México', food: ['Tlacoyos de comal callejero', 'Tacos de canasta', 'Pozole de fin de semana', 'Esquites o elote asado de carrito', 'Quesadillas en el Mercado de San Juan', 'Tamales y atole de puesto callejero', 'Churros en El Moro', 'Probar mole en Coyoacán', 'Comer carnitas en El Hidalguense', 'Probar tacos al pastor'], places: ['Explorar el Zócalo', 'Visitar el Museo Frida Kahlo', 'Caminar por el Bosque de Chapultepec'], exps: ['Pasear en trajinera por Xochimilco', 'Ver una función de lucha libre', 'Subir la Pirámide del Sol'] },
        aca: { name: 'Acapulco', food: ['Ceviche en la bahía', 'Pozole verde en jueves', 'Aguachile en la playa', 'Agua de coco fresca', 'Tacos de pescado en La Quebrada', 'Tostadas de camarón'], places: ['Ver a los clavadistas de La Quebrada', 'Visitar el Fuerte de San Diego', 'Relajarte en Playa Condesa'], exps: ['Paseo en bahía al atardecer', 'Bailar en un antro de la Costera'] }
      }
    },
    pt: {
      evening: 'BOA NOITE', where: 'Onde explorar hoje', emergency: 'Emergência', map: 'Mapa', closest: 'Mais perto de você',
      all: 'Tudo', beaches: 'Praias', colonial: 'Colonial', ruins: 'Ruínas', cities: 'Cidades', guide: 'Guia', seeAll: 'Ver todos os destinos',
      none: 'Ainda não há destinos nesta categoria', planT: 'Planeje sua viagem', planP: 'Escolha as cidades que vai visitar e o MexiGuide monta seu checklist em torno delas.', pick: 'Escolher cidades',
      yourExp: 'Sua exploração', expSub: 'Guias de cidade, mapas de segurança e metas de viagem', places: 'Lugares', food: 'Comida', exps: 'Experiências', done: 'feito', expGuides: 'Explorar guias de cidade',
      myTrip: 'Minha viagem', day: 'Dia', moreCity: 'Mais 1 cidade e uma nova insígnia aparece', stamps: 'de 2 selos coletados', aiT: 'Dicas com IA', aiS: 'Dicas locais de onde você está agora.',
      aiTip: 'Dica: fuja dos restaurantes turísticos perto do Zócalo. Ande 3 quarteirões e coma onde o pessoal do escritório faz fila.',
      share: 'Compartilhar', doneIn: function (n, c) { return n + ' feitos em ' + c + ' ' + (c === 1 ? 'cidade' : 'cidades'); }, across: 'Metas concluídas nas suas cidades',
      myCities: 'Minhas cidades', removeAll: 'Remover tudo', cityHint: 'Suas cidades dividem um anel. Toque em uma para torná-la a atual no Food Explorer.', current: 'Atual',
      thingsTo: 'O que fazer', showing: 'Mostrando a lista desta cidade. Para trocar, toque em outra cidade em Minhas cidades.', foodExp: 'Explorador de comida', foodHint: 'Experimente estes pratos locais. Toque em um para marcar.',
      placesExp: 'Lugares · Experiências', pro: 'PRO', proToast: 'Desbloqueie todos os pratos com o MexiGuide Pro', noCities: 'Ainda sem cidades. Toque em Escolher cidades em Explorar.',
      tools: 'Ferramentas', toolsSub: 'Serviços confiáveis, avaliados para o México', nat: 'Emergência nacional', natSub: 'Polícia, bombeiros e ambulância', callToast: 'No seu celular isto liga para o 911',
      emNums: 'Números de emergência', currency: 'Conversor de moeda', currSub: 'Converta, gorjeta e IVA', amount: 'Valor', tip: 'Gorjeta', iva: 'IVA 16% incluso', rateNote: 'Câmbio demo, ao vivo no app',
      tours: 'Passeios e experiências', gygSub: 'Cancelamento grátis em muitos passeios', gygP: 'Reserve passeios, excursões e atividades por todo o México', t1: 'Ruínas e pirâmides', t2: 'Tours gastronômicos', t3: 'Cenotes', browse: 'Ver passeios',
      commission: 'O MexiGuide ganha uma pequena comissão sem custo extra para você.', insurance: 'Seguro viagem', swSub: 'A partir de $45 / 4 semanas', swP: 'Cobertura médica para nômades e viajantes', swCta: 'Contratar',
      sendMoney: 'Envie e gaste dinheiro', wiseSub: 'Câmbio real, taxas baixas', wiseP: 'Pague em pesos sem taxas escondidas do banco', wiseCta: 'Abrir Wise',
      lvlWord: 'Nível', of: 'de', lvl: ['', 'Seguro', 'Bem seguro', 'Use cautela', 'Alta cautela', 'Alto risco'],
      tipL: ['', 'Área tranquila, cuidados normais', 'Geralmente seguro, cuide dos seus pertences', 'Batedores de carteira muito ativos em áreas turísticas', 'Evite andar sozinho à noite', 'Não recomendado para turistas'],
      search: 'Buscar cidades, ferramentas…', scan: 'Escanear', scanToast: 'Escaneie um prato, placa ou cardápio com a câmera', locToast: 'Centralizado na sua localização', cityLbl: 'Cidade do México', mx: 'Cidade do México', low: 'Mais seguro', high: 'Mais risco',
      profile: 'Perfil', traveler: 'Viajante', travSub: 'Plano grátis · 2 cidades', proT: 'Desbloqueie o MexiGuide Pro', proP: 'Todos os pratos, mapas de segurança offline e cidades ilimitadas.', proCta: 'Ver Pro', proToast2: 'Abre os planos Pro no app',
      streak: 'Sequência', streakSub: '5 dias explorando', language: 'Idioma', notif: 'Alertas de segurança', offline: 'Modo offline', days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      tabs: ['Explorar', 'Minha viagem', 'Mapa', 'Ferramentas', 'Perfil'], me: 'Você',
      dests: { cdmx: ['Cuauhtémoc (Alcaldía)', 'Cidades'], teo: ['Teotihuacán', 'Estado de México'], tep: ['Tepoztlán, Morelos', 'Morelos'], tul: ['Tulum', 'Quintana Roo'], oax: ['Oaxaca de Juárez', 'Oaxaca'], sma: ['San Miguel de Allende', 'Guanajuato'], pva: ['Puerto Vallarta', 'Jalisco'] },
      lists: {
        cdmx: { name: 'Cidade do México', food: ['Tlacoyos de comal de rua', 'Tacos de canasta', 'Pozole no fim de semana', 'Esquites ou milho grelhado de carrinho', 'Quesadillas no Mercado de San Juan', 'Tamales e atole de barraca de rua', 'Churros no El Moro', 'Provar mole em Coyoacán', 'Comer carnitas no El Hidalguense', 'Provar tacos al pastor'], places: ['Explorar o Zócalo', 'Visitar o Museu Frida Kahlo', 'Caminhar no Bosque de Chapultepec'], exps: ['Passear de trajinera em Xochimilco', 'Assistir a uma luta livre', 'Subir a Pirâmide do Sol'] },
        aca: { name: 'Acapulco', food: ['Ceviche na baía', 'Pozole verde na quinta', 'Aguachile na praia', 'Água de coco fresca', 'Tacos de peixe na La Quebrada', 'Tostadas de camarão'], places: ['Ver os saltadores da La Quebrada', 'Visitar o Forte de San Diego', 'Relaxar na Playa Condesa'], exps: ['Passeio de barco ao pôr do sol', 'Dançar numa balada da Costera'] }
      }
    }
  };

  var LC = ['', '#4A9E80', '#8DB360', '#B5B520', '#E8883A', '#D9534F'];
  var ZONES = [
    { n: 'Ecatepec', l: 5, p: '170,170 240,165 285,195 275,260 235,310 185,300 175,240', t: [228, 235] },
    { n: 'Tlalnepantla', l: 4, p: '25,225 95,210 135,225 125,285 80,300 30,270', t: [58, 262] },
    { n: 'Gustavo A. Madero', l: 4, p: '135,215 175,175 185,300 150,305 125,285', t: [150, 262] },
    { n: 'Miguel Hidalgo', l: 2, p: '75,300 125,285 150,305 140,345 95,350 70,330', t: [100, 328] },
    { n: 'Cuauhtémoc (Alcaldía)', l: 3, p: '140,345 150,305 185,300 195,345 170,380 140,375', t: [166, 345], cuau: 1 },
    { n: 'Venustiano Carranza', l: 4, p: '185,300 235,310 250,350 200,365 195,345', t: [218, 336] },
    { n: 'Iztacalco', l: 4, p: '195,345 200,365 250,350 255,390 205,395 170,380', t: [218, 376] },
    { n: 'Benito Juárez', l: 2, p: '95,350 140,345 140,375 170,380 165,420 100,425 85,385', t: [122, 395] },
    { n: 'Álvaro Obregón', l: 1, p: '40,340 95,350 85,385 100,425 55,445 35,400', t: [62, 395] },
    { n: 'Coyoacán', l: 2, p: '100,425 165,420 175,470 125,490 95,465', t: [130, 456] },
    { n: 'Iztapalapa', l: 5, p: '205,395 255,390 295,430 295,520 235,545 180,500 175,470 165,420 170,380', t: [224, 460] },
    { n: 'Tlalpan', l: 1, p: '55,445 100,425 95,465 125,490 175,470 180,500 150,560 90,570 50,520', t: [100, 520] },
    { n: 'Xochimilco', l: 2, p: '180,500 235,545 210,600 150,560', t: [190, 560] }
  ];
  var DEST_ORDER = [['cdmx', 'cities', 3], ['teo', 'ruins', 2], ['tep', 'colonial', 2], ['tul', 'beaches', 2], ['oax', 'colonial', 2], ['sma', 'colonial', 1], ['pva', 'beaches', 2]];
  var GRAD = { cdmx: 'linear-gradient(135deg,#6f7f6a,#a58a62 60%,#c4975a)', teo: 'linear-gradient(135deg,#5E9A83,#B88A4A)', tep: 'linear-gradient(135deg,#5E9A83,#C78B48)', tul: 'linear-gradient(135deg,#3FA2A8,#E3B87A)', oax: 'linear-gradient(135deg,#6E9A6A,#D08A44)', sma: 'linear-gradient(135deg,#8C7A9A,#D99A5B)', pva: 'linear-gradient(135deg,#3C8FB0,#E7A867)' };
  var DOTS = ['#2A62A8', '#E8913A', '#2A9D8F', '#C4793A', '#2A9D8F', '#2A62A8', '#E8913A', '#2A9D8F', '#C4793A', '#2A62A8', '#E8913A', '#2A9D8F'];

  var I = {
    explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor"/></svg>',
    trip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="7" width="12" height="13" rx="2"/><path d="M9 7V4h6v3M9.5 11v5M12 11v5M14.5 11v5"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2 2 0 0 1-3-3z"/><path d="M14 7l3-3"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.4-2-.6-1 0-2.2 1.3-2.2H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1" fill="currentColor"/><circle cx="15" cy="7.5" r="1" fill="currentColor"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/></svg>',
    asterisk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><circle cx="12" cy="12" r="3"/></svg>',
    cur: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 9h13l-3-3M19 15H6l3 3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-8z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/><circle cx="12" cy="15" r="1.2" fill="currentColor"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .700-.2 1z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.4"/></svg>',
    loc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
    img: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 16l5-5 4 4 3-3 5 5"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 3l1.8 5.2L17 10l-5.200 1.800L10 17l-1.800-5.200L3 10l5.200-1.800zM18 14l.9 2.600L21.500 17.500l-2.600.9L18 21l-.9-2.600L14.500 17.500l2.600-.9z"/></svg>'
  };

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function init(root) {
    var lang = T[root.getAttribute('data-lang')] ? root.getAttribute('data-lang') : 'en';
    var S = {
      tab: 'explore', filter: 'all', planOpen: true, aiOpen: false,
      cities: ['aca', 'cdmx'], cur: 'cdmx', zone: 4, em: false, cv: false, amt: 100, tipPct: 15,
      notif: true, offline: false, mapQ: '',
      checks: { cdmx: { food: [0], places: [0, 1, 2], exps: [0] }, aca: { food: [0], places: [0, 1, 2], exps: [0, 1] } }
    };
    var t = function () { return T[lang]; };
    var scrolls = {};

    root.innerHTML = '';
    var screen = el('div', 'mg-screen');
    root.appendChild(el('div', 'mg-island'));
    root.appendChild(el('div', 'mg-status', '<span>9:41</span><i>▂▄▆ ●●●</i>'));
    root.appendChild(screen);
    var nav = el('div', 'mg-nav'); root.appendChild(nav);
    var toast = el('div', 'mg-toast'); root.appendChild(toast);
    var tt;
    function say(m) { toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 2000); }

    function count(c) {
      var L = T.en.lists[c], k = S.checks[c];
      return { f: [k.food.length, L.food.length], p: [k.places.length, L.places.length], e: [k.exps.length, L.exps.length] };
    }
    function totals() {
      var a = { f: [0, 0], p: [0, 0], e: [0, 0] };
      S.cities.forEach(function (c) { var n = count(c); ['f', 'p', 'e'].forEach(function (k) { a[k][0] += n[k][0]; a[k][1] += n[k][1]; }); });
      var d = a.f[0] + a.p[0] + a.e[0], tot = a.f[1] + a.p[1] + a.e[1];
      return { a: a, done: d, tot: tot, pct: tot ? Math.round(d / tot * 100) : 0 };
    }
    function ring(a, size) {
      var cfg = [['e', 34, '#2A62A8'], ['f', 41, '#E8913A'], ['p', 27, '#2A9D8F']];
      var out = '<svg viewBox="0 0 90 90">';
      cfg.forEach(function (c) {
        var r = c[1] === 41 ? 40 : c[1] === 34 ? 32 : 24, circ = 2 * Math.PI * r, p = a[c[0]][1] ? a[c[0]][0] / a[c[0]][1] : 0;
        out += '<circle cx="45" cy="45" r="' + r + '" stroke="' + c[2] + '" stroke-opacity=".14" stroke-width="7"/>' +
          '<circle cx="45" cy="45" r="' + r + '" stroke="' + c[2] + '" stroke-width="7" stroke-dasharray="' + (p * circ).toFixed(1) + ' ' + circ.toFixed(1) + '"/>';
      });
      return out + '</svg>';
    }

    /* ---------- screens ---------- */
    function header(eye, title, sub) {
      var dots = '';
      var cols = ['#2A62A8', '#E8913A', '#2A9D8F'];
      for (var i = 0; i < 12; i++) {
        var a = i / 12 * 2 * Math.PI;
        dots += '<i class="d" style="background:' + cols[i % 3] + ';transform:translate(' + (Math.cos(a) * 24).toFixed(1) + 'px,' + (Math.sin(a) * 24).toFixed(1) + 'px) rotate(' + (i * 30 + 15) + 'deg)"></i>';
      }
      return '<div class="mg-top"><div>' + (eye ? '<div class="mg-eyebrow">' + eye + '</div>' : '') + '<div class="mg-h1">' + title + (sub ? '<small>' + sub + '</small>' : '') + '</div></div>' +
        '<button class="mg-theme" data-a="palette" aria-label="Theme">' + dots + '<span class="core">' + I.palette + '</span></button></div>';
    }

    function explore() {
      var x = t(), tot = totals();
      var list = DEST_ORDER.filter(function (d) { return S.filter === 'all' || d[1] === S.filter; });
      var cards = '';
      if (!list.length) cards = '<div class="mg-empty">' + x.none + '</div>';
      else {
        var f = list[0], fd = x.dests[f[0]];
        cards += '<a class="mg-hero mg-fade" href="' + root.getAttribute('data-dest') + '" style="background:' + GRAD[f[0]] + '"><span class="bar"></span><span class="mg-lvl" style="color:' + (f[2] >= 3 ? '#7a7510' : '#2f7d5f') + '"><i></i>' + x.lvl[f[2]] + ' · Lv ' + f[2] + '</span><h3>' + fd[0] + '</h3><div class="row"><span>' + fd[1] + '</span><b>' + x.guide + ' →</b></div></a>';
        var rest = list.slice(1, 3);
        if (rest.length) {
          cards += '<div class="mg-two mg-fade">' + rest.map(function (d) {
            var dd = x.dests[d[0]];
            return '<a class="mg-mini" href="' + root.getAttribute('data-dest') + '"><div class="img" style="background:' + GRAD[d[0]] + '"></div><div class="t"><h4>' + dd[0] + '</h4><p><i style="background:' + LC[d[2] + 1 > 5 ? 5 : (d[2] === 1 ? 1 : 2)] + '"></i>' + dd[1] + '</p></div></a>';
          }).join('') + '</div>';
        }
      }
      var chips = [['all', x.all], ['beaches', x.beaches], ['colonial', x.colonial], ['ruins', x.ruins], ['cities', x.cities]].map(function (c) {
        return '<button class="mg-chip' + (S.filter === c[0] ? ' on' : '') + '" data-a="filter" data-v="' + c[0] + '">' + c[1] + '</button>';
      }).join('');
      var plan = S.planOpen ? '<div class="mg-card mg-plan mg-fade"><div class="ic">' + I.pin + '</div><div><h4>' + x.planT + '</h4><p>' + x.planP + '</p><button class="go" data-a="goto" data-v="trip">' + x.pick + ' →</button></div><button class="mg-x" data-a="closeplan">✕</button></div>' : '';
      var a = tot.a, stamps = S.cities.length;
      return header(x.evening, x.where) +
        '<div class="mg-btn2"><button class="mg-pill" data-a="goto" data-v="tools">' + I.asterisk + x.emergency + '</button><button class="mg-pill" data-a="goto" data-v="map">' + I.map + x.map + '</button></div>' +
        '<div class="mg-near">' + I.arrow + x.closest + '</div><div class="mg-chips">' + chips + '</div>' + cards +
        '<a class="mg-link" href="' + root.getAttribute('data-dest') + '">' + x.seeAll + ' →</a>' + plan +
        '<div class="mg-card"><div class="mg-label">' + x.yourExp + '</div><div style="font-size:10px;color:var(--mute);margin-top:3px">' + x.expSub + '</div>' +
        '<div class="mg-ringrow"><div class="mg-ring">' + ring(a) + '<div class="pct">' + tot.pct + '%<small>' + x.done + '</small></div></div><div class="mg-legend">' +
        '<div><b><i style="background:#2A9D8F"></i>' + x.places + '</b><span>' + a.p[0] + ' / ' + a.p[1] + '</span></div><div><b><i style="background:#E8913A"></i>' + x.food + '</b><span>' + a.f[0] + ' / ' + a.f[1] + '</span></div><div><b><i style="background:#2A62A8"></i>' + x.exps + '</b><span>' + a.e[0] + ' / ' + a.e[1] + '</span></div></div></div>' +
        '<a class="mg-wide" href="' + root.getAttribute('data-dest') + '">' + I.explore + x.expGuides + ' ›</a></div>' +
        '<div class="mg-card"><div class="mg-label">' + x.myTrip + '</div><span class="mg-daychip">' + x.day + ' 2</span><div class="mg-stamps"><span class="mg-stamp">GUA</span><span class="mg-stamp">CUA</span></div>' +
        '<div class="mg-badgebox"><div><b>' + x.moreCity + '</b><span>' + stamps + ' ' + x.stamps + '</span></div><span class="mg-lock">' + I.lock + '</span></div><div class="mg-bar"><i style="width:' + Math.min(100, stamps * 50) + '%"></i></div></div>' +
        '<button class="mg-card mg-row-ai" data-a="ai" style="width:100%"><span class="ic">' + I.spark + '</span><span><b>' + x.aiT + '</b><span>' + x.aiS + '</span></span><span class="mg-chev">' + I.chev + '</span></button>' +
        (S.aiOpen ? '<div class="mg-aibox">' + x.aiTip + '</div>' : '');
    }

    function todoItems(cat, c, free) {
      var L = t().lists[c][cat], k = S.checks[c][cat];
      return L.map(function (name, i) {
        var done = k.indexOf(i) > -1, locked = cat === 'food' && i > 0 && !done && !(S.proUnlocked);
        return '<button class="mg-todo' + (done ? ' done' : '') + (locked ? ' locked' : '') + '" data-a="' + (locked ? 'pro' : 'todo') + '" data-c="' + cat + '" data-i="' + i + '"><span class="ck">' + (locked ? I.lock : I.check) + '</span><span class="tx">' + name + '</span>' + (locked ? '<span class="mg-pro">' + t().pro + '</span>' : '') + '</button>';
      }).join('');
    }

    function trip() {
      var x = t(), tot = totals(), a = tot.a;
      var cl = S.cities.map(function (c, i) {
        var n = count(c), d = n.f[0] + n.p[0] + n.e[0], tt2 = n.f[1] + n.p[1] + n.e[1];
        return '<div class="mg-city' + (S.cur === c ? ' cur' : '') + '" data-a="city" data-v="' + c + '" role="button"><span class="dot" style="background:' + (c === 'aca' ? '#F07400' : '#B8B510') + '"></span><span class="nm">' + x.lists[c].name + '</span>' + (S.cur === c ? '<span class="cur-tag">' + x.current + '</span>' : '') + '<span class="cnt">' + d + ' / ' + tt2 + '</span><button class="rm" data-a="rm" data-v="' + c + '">✕</button></div>';
      }).join('');
      var c = S.cur, L = x.lists[c], kb = S.checks[c];
      var todo = '';
      if (S.cities.length) {
        todo = '<div class="mg-eyebrow mg-todo-lbl" style="color:var(--mute)">' + x.thingsTo.toUpperCase() + '</div><div class="mg-todo-city">' + L.name + '</div><div class="mg-hint" style="margin-top:0">' + x.showing + '</div>' +
          '<div class="mg-card"><div class="mg-sec-hd"><span>🌮 ' + x.foodExp + '</span><em>' + kb.food.length + ' / ' + L.food.length + '</em></div><div class="mg-tip">' + x.foodHint + '</div>' + todoItems('food', c) + '</div>' +
          '<div class="mg-card"><div class="mg-sec-hd"><span>' + x.placesExp + '</span><em>' + (kb.places.length + kb.exps.length) + ' / ' + (L.places.length + L.exps.length) + '</em></div>' +
          '<div class="mg-sub-hd">📍 ' + x.places + '<span>' + kb.places.length + ' / ' + L.places.length + '</span></div>' + todoItems('places', c) +
          '<div class="mg-sub-hd">🎭 ' + x.exps + '<span>' + kb.exps.length + ' / ' + L.exps.length + '</span></div>' + todoItems('exps', c) + '</div>';
      }
      return header('', x.myTrip) +
        '<button class="mg-share" data-a="share">' + I.img + x.share + '</button>' +
        '<div class="mg-card mg-center"><div class="mg-ring">' + ring(a) + '<div class="pct">' + tot.pct + '%<small>' + x.done + '</small></div></div>' +
        '<div class="sub">' + x.doneIn(tot.done, S.cities.length) + '</div><div class="cap">' + x.across + '</div>' +
        '<div class="mg-leg2"><div><i style="background:#E8913A"></i>' + x.food + '<span>' + a.f[0] + ' / ' + a.f[1] + '</span></div><div><i style="background:#2A62A8"></i>' + x.exps + '<span>' + a.e[0] + ' / ' + a.e[1] + '</span></div><div><i style="background:#2A9D8F"></i>' + x.places + '<span>' + a.p[0] + ' / ' + a.p[1] + '</span></div></div></div>' +
        '<div class="mg-card"><div class="mg-cityhd"><span class="mg-label">' + x.myCities + '</span><button data-a="rmall">' + x.removeAll + '</button></div>' +
        (S.cities.length ? '<div class="mg-hint">' + x.cityHint + '</div>' + cl : '<div class="mg-hint">' + x.noCities + '</div><button class="mg-wide" data-a="reset">' + x.pick + '</button>') + '</div>' + todo;
    }

    function tools() {
      var x = t(), rate = 17.8, mxn = (S.amt || 0) * rate, tip = mxn * S.tipPct / 100, ivaAmt = mxn - mxn / 1.16;
      var fmt = function (n) { return n.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 }); };
      var em = '<div class="mg-tool' + (S.em ? ' open' : '') + '"><button data-a="em"><span class="ic" style="background:#FBE9E7;color:#C0392B">' + I.shield + '</span><span><b>' + x.emergency + '</b><span class="s">' + x.emNums + '</span></span><span class="chev">' + I.chev + '</span></button>' +
        (S.em ? '<div class="body"><div class="mg-num"><b>911</b><span>' + x.natSub + '</span></div><div class="mg-num"><b>078</b><span>' + ({ en: 'Tourist assistance', es: 'Asistencia al turista', pt: 'Assistência ao turista' })[lang] + '</span></div><div class="mg-num"><b>089</b><span>' + ({ en: 'Anonymous tip line', es: 'Denuncia anónima', pt: 'Denúncia anônima' })[lang] + '</span></div></div>' : '') + '</div>';
      var cv = '<div class="mg-tool' + (S.cv ? ' open' : '') + '"><button data-a="cv"><span class="ic" style="background:#E3EAF6;color:#2A62A8">' + I.cur + '</span><span><b>' + x.currency + '</b><span class="s">' + x.currSub + '</span></span><span class="chev">' + I.chev + '</span></button>' +
        (S.cv ? '<div class="body"><div class="mg-conv"><div class="f"><em>USD</em><input type="number" inputmode="decimal" min="0" value="' + S.amt + '" data-a="amt" aria-label="' + x.amount + '"/></div><div class="f"><em>MXN</em><span class="out">$' + fmt(mxn) + '</span></div>' +
          '<div class="mg-tips">' + [10, 15, 20].map(function (p) { return '<button data-a="tip" data-v="' + p + '" class="' + (S.tipPct === p ? 'on' : '') + '">' + x.tip + ' ' + p + '%</button>'; }).join('') + '</div>' +
          '<small>' + x.tip + ': <b>$' + fmt(tip) + ' MXN</b> · ' + x.iva + ': <b>$' + fmt(ivaAmt) + '</b><br/>' + x.rateNote + ' (1 USD ≈ ' + rate + ' MXN)</small></div></div>' : '') + '</div>';
      function partner(img, name, sub, p, tags, cta, href, bg) {
        return '<div class="mg-partner"><div class="hd"><span class="lg" style="background:' + bg + '"><img src="' + img + '" alt=""/></span><div><b>' + name + '</b><span class="s">' + sub + '</span></div></div><p>' + p + '</p>' + (tags ? '<div class="mg-tags">' + tags + '</div>' : '') + '<a class="mg-cta" href="' + href + '" target="_blank" rel="noopener sponsored">' + cta + ' →</a></div>';
      }
      return header('', x.tools, x.toolsSub) +
        '<button class="mg-911" data-a="call"><span class="n">911</span><span class="t"><b>' + x.nat + '</b><span>' + x.natSub + '</span></span><span class="ph">' + I.phone + '</span></button>' + em + cv +
        '<div class="mg-cat">🏛 ' + x.tours + '</div>' +
        partner('/images/getyourguide-logo.svg', 'GetYourGuide', x.gygSub, x.gygP, '<i>' + x.t1 + '</i><i>' + x.t2 + '</i><i>' + x.t3 + '</i>', x.browse, '/go/getyourguide.html', '#FDEFE6') +
        '<div class="mg-fine" style="margin-bottom:6px">' + x.commission + '</div>' +
        '<div class="mg-cat">🛡 ' + x.insurance + '</div>' + partner('/images/safetywing-logo-small.png', 'SafetyWing', x.swSub, x.swP, '', x.swCta, '/go/safetywing.html', '#E3F4F3') +
        '<div class="mg-cat">💸 ' + x.sendMoney + '</div>' + partner('/images/wise-logo.svg', 'Wise', x.wiseSub, x.wiseP, '', x.wiseCta, '/go/wise.html', '#EAF6E3');
    }

    function mapView() {
      var x = t(), z = ZONES[S.zone], col = LC[z.l], q = S.mapQ.trim().toLowerCase();
      var polys = ZONES.map(function (zz, i) {
        var dim = q && zz.n.toLowerCase().indexOf(q) < 0;
        return '<polygon class="mg-zone' + (i === S.zone ? ' sel' : '') + '" data-a="zone" data-v="' + i + '" points="' + zz.p + '" fill="' + LC[zz.l] + '" fill-opacity="' + (dim ? .12 : .42) + '" stroke="' + LC[zz.l] + '" stroke-width="1.4" stroke-linejoin="round"/>';
      }).join('');
      var lbls = ZONES.map(function (zz) { return '<text class="mg-zlbl" x="' + zz.t[0] + '" y="' + zz.t[1] + '" text-anchor="middle">' + zz.n.split(' (')[0].replace('Gustavo A. Madero', 'G. A. Madero') + '</text>'; }).join('');
      var streets = '<g stroke="#fff" stroke-width="2.2" stroke-opacity=".8" fill="none"><path d="M0 330 Q150 310 300 350"/><path d="M160 150 L170 640"/><path d="M0 460 L300 420"/><path d="M80 180 Q150 300 250 640"/></g>';
      var c = 2 * Math.PI * 16;
      return '<div class="mg-map"><svg class="m" viewBox="0 0 300 640" preserveAspectRatio="xMidYMid slice"><rect width="300" height="640" fill="#EAE7D9"/><path d="M0 560 Q80 520 150 600 L150 640 L0 640z" fill="#d9e6d2"/>' + streets + polys + lbls + '<text class="mg-city-lbl" x="150" y="395" text-anchor="middle" style="display:none">' + x.cityLbl + '</text></svg>' +
        '<span class="mg-me" style="left:' + (S.zone === 4 ? 148 : 1000) + 'px;top:363px"></span></div>' +
        '<div class="mg-info mg-fade" key="' + S.zone + '"><div class="hd"><div class="mg-lring"><svg viewBox="0 0 38 38"><circle cx="19" cy="19" r="16" stroke="' + col + '" stroke-opacity=".2"/><circle cx="19" cy="19" r="16" stroke="' + col + '" stroke-dasharray="' + (z.l / 5 * c).toFixed(1) + ' ' + c.toFixed(1) + '"/></svg><b>' + z.l + '</b></div>' +
        '<div style="flex:1;min-width:0"><h3>' + z.n + '</h3><div class="st">' + x.mx + '</div><div class="lv" style="color:' + col + '">' + x.lvlWord + ' ' + z.l + ' ' + x.of + ' 5 · ' + x.lvl[z.l] + '</div></div><span style="color:var(--mute);width:16px">ⓘ</span></div>' +
        '<div class="tp" style="background:' + col + '22;border-color:' + col + '"><i style="background:' + col + '"></i>' + x.tipL[z.l] + I.chev + '</div></div>' +
        '<label class="mg-search">' + I.search + '<input data-a="mq" placeholder="' + x.search + '" value="' + S.mapQ.replace(/"/g, '') + '"/></label>' +
        '<div class="mg-legend-map">' + x.low + ' ' + [1, 2, 3, 4, 5].map(function (n) { return '<i style="background:' + LC[n] + '"></i>'; }).join('') + ' ' + x.high + '</div>' +
        '<button class="mg-scan" data-a="scan">' + I.camera + x.scan + '</button><button class="mg-loc" data-a="loc" aria-label="Locate">' + I.loc + '</button>';
    }

    function profile() {
      var x = t();
      var days = x.days.map(function (d, i) { return '<i class="' + (i < 5 ? 'on' : '') + '">' + d + '</i>'; }).join('');
      var segs = ['en', 'es', 'pt'].map(function (l) { return '<button data-a="lang" data-v="' + l + '" class="' + (lang === l ? 'on' : '') + '">' + l.toUpperCase() + '</button>'; }).join('');
      return header('', x.profile) +
        '<div class="mg-avatar"><span class="av">M</span><div><b>' + x.traveler + '</b><span>' + x.travSub + '</span></div></div>' +
        '<div class="mg-procard"><b>' + x.proT + '</b><p>' + x.proP + '</p><button data-a="protoast">' + x.proCta + '</button></div>' +
        '<div class="mg-card"><div class="mg-label">' + x.streak + '</div><div style="font-size:11px;font-weight:700;color:var(--ink);margin-top:4px">🔥 ' + x.streakSub + '</div><div class="mg-streak">' + days + '</div></div>' +
        '<div class="mg-card" style="padding:4px 12px"><div class="mg-set"><span>' + x.language + '</span><div class="mg-seg">' + segs + '</div></div>' +
        '<button class="mg-set" data-a="notif"><span>' + x.notif + '</span><span class="mg-sw' + (S.notif ? ' on' : '') + '"></span></button>' +
        '<button class="mg-set" data-a="offline"><span>' + x.offline + '</span><span class="mg-sw' + (S.offline ? ' on' : '') + '"></span></button></div>';
    }

    function renderNav() {
      var x = t(), tb = ['explore', 'trip', 'map', 'tools', 'profile'];
      function it(i) { return '<button class="it' + (S.tab === tb[i] ? ' on' : '') + '" data-a="goto" data-v="' + tb[i] + '">' + I[tb[i]] + '<span>' + x.tabs[i] + '</span></button>'; }
      nav.innerHTML = it(0) + it(1) + '<button class="mid' + (S.tab === 'map' ? ' on' : '') + '" data-a="goto" data-v="map"><span class="fab">' + I.map + '</span><span>' + x.tabs[2] + '</span></button>' + it(3) + it(4);
    }

    function render(keepScroll) {
      var sc = screen.querySelector('.mg-scroll');
      if (sc) scrolls[S.renderedTab] = sc.scrollTop;
      var html = S.tab === 'explore' ? explore() : S.tab === 'trip' ? trip() : S.tab === 'tools' ? tools() : S.tab === 'map' ? mapView() : profile();
      var mapTab = S.tab === 'map';
      var focused = document.activeElement && document.activeElement.getAttribute && document.activeElement.getAttribute('data-a');
      var selStart = focused && document.activeElement.selectionStart;
      screen.innerHTML = '<div class="mg-scroll' + (mapTab ? ' nopad' : '') + '">' + html + '</div>';
      var ns = screen.querySelector('.mg-scroll');
      ns.style.scrollBehavior = 'auto';
      ns.scrollTop = (keepScroll || S.renderedTab === S.tab) ? (scrolls[S.tab] || 0) : 0;
      ns.style.scrollBehavior = '';
      S.renderedTab = S.tab;
      if (focused === 'amt' || focused === 'mq') {
        var inp = screen.querySelector('[data-a="' + focused + '"]');
        if (inp) { inp.focus(); try { inp.setSelectionRange(selStart, selStart); } catch (e) { } }
      }
      renderNav();
    }

    function go(tab) { if (S.tab !== tab) { S.tab = tab; render(); } else { var s = screen.querySelector('.mg-scroll'); if (s) s.scrollTop = 0; } }

    root.addEventListener('click', function (e) {
      var n = e.target.closest('[data-a]');
      if (!n || !root.contains(n)) return;
      var a = n.getAttribute('data-a'), v = n.getAttribute('data-v'), x = t();
      if (a === 'amt' || a === 'mq') return;
      if (a === 'goto') return go(v);
      if (a === 'filter') { S.filter = v; return render(true); }
      if (a === 'closeplan') { S.planOpen = false; return render(true); }
      if (a === 'ai') { S.aiOpen = !S.aiOpen; return render(true); }
      if (a === 'palette') return say({ en: 'Pick a color theme in the app', es: 'Elige un tema de color en la app', pt: 'Escolha um tema de cor no app' }[lang]);
      if (a === 'share') return say({ en: 'Shares a progress card to Instagram or WhatsApp', es: 'Comparte tu progreso en Instagram o WhatsApp', pt: 'Compartilha seu progresso no Instagram ou WhatsApp' }[lang]);
      if (a === 'city') { if (e.target.closest('[data-a="rm"]')) return; S.cur = v; return render(true); }
      if (a === 'rm') { e.stopPropagation(); S.cities = S.cities.filter(function (c) { return c !== v; }); if (S.cur === v) S.cur = S.cities[0] || ''; return render(true); }
      if (a === 'rmall') { S.cities = []; S.cur = ''; return render(true); }
      if (a === 'reset') { S.cities = ['aca', 'cdmx']; S.cur = 'cdmx'; return render(true); }
      if (a === 'todo') {
        var c = n.getAttribute('data-c'), i = +n.getAttribute('data-i'), arr = S.checks[S.cur][c], p = arr.indexOf(i);
        if (p > -1) arr.splice(p, 1); else arr.push(i);
        return render(true);
      }
      if (a === 'pro') return say(x.proToast);
      if (a === 'call') return say(x.callToast);
      if (a === 'em') { S.em = !S.em; return render(true); }
      if (a === 'cv') { S.cv = !S.cv; return render(true); }
      if (a === 'tip') { S.tipPct = +v; return render(true); }
      if (a === 'zone') { S.zone = +v; return render(true); }
      if (a === 'scan') return say(x.scanToast);
      if (a === 'loc') { S.zone = 4; render(true); return say(x.locToast); }
      if (a === 'lang') { lang = v; return render(true); }
      if (a === 'notif') { S.notif = !S.notif; return render(true); }
      if (a === 'offline') { S.offline = !S.offline; return render(true); }
      if (a === 'protoast') return say(x.proToast2);
    });
    root.addEventListener('input', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a');
      if (a === 'amt') { S.amt = parseFloat(e.target.value) || 0; render(true); }
      if (a === 'mq') {
        S.mapQ = e.target.value;
        var q = S.mapQ.trim().toLowerCase();
        if (q) for (var i = 0; i < ZONES.length; i++) if (ZONES[i].n.toLowerCase().indexOf(q) > -1) { S.zone = i; break; }
        render(true);
      }
    });
    render();
  }

  function boot() {
    var nodes = document.querySelectorAll('.mgp');
    for (var i = 0; i < nodes.length; i++) init(nodes[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
