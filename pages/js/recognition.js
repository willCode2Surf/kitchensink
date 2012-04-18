ks.tests.recognition = (function()
{
	var recognition = 
	{
		ctx: null,
		recognizer: null,
		currentPoint: null,
		previousPoint: null
	};
			
	recognition.init = function()
	{
		var t0 = {'name': '0', 'points': new Array({x: 127, y: 141},{x: 124, y: 140},{x: 120, y: 139},{x: 118, y: 139},{x: 116, y: 139},{x: 111, y: 140},{x: 109, y: 141},{x: 104, y: 144},{x: 100, y: 147},{x: 96, y: 152},{x: 93, y: 157},{x: 90, y: 163},{x: 87, y: 169},{x: 85, y: 175},{x: 83, y: 181},{x: 82, y: 190},{x: 82, y: 195},{x: 83, y: 200},{x: 84, y: 205},{x: 88, y: 213},{x: 91, y: 216},{x: 96, y: 219},{x: 103, y: 222},{x: 108, y: 224},{x: 111, y: 224},{x: 120, y: 224},{x: 133, y: 223},{x: 142, y: 222},{x: 152, y: 218},{x: 160, y: 214},{x: 167, y: 210},{x: 173, y: 204},{x: 178, y: 198},{x: 179, y: 196},{x: 182, y: 188},{x: 182, y: 177},{x: 178, y: 167},{x: 170, y: 150},{x: 163, y: 138},{x: 152, y: 130},{x: 143, y: 129},{x: 140, y: 131},{x: 129, y: 136},{x: 126, y: 139})};
		var t1 = {'name': '1', 'points': new Array({x: -125.03325130002096, y: 4.547473508864641e-12},{x: -121.04981447658832, y: -4.752393659420704},{x: -117.06637765315568, y: -9.504787318845047},{x: -113.08294082972304, y: -14.257180978271208},{x: -109.09950400629037, y: -19.00957463769555},{x: -105.1160671828577, y: -23.761968297119893},{x: -101.13263035942506, y: -28.514361956546054},{x: -97.14919353599237, y: -33.266755615970396},{x: -93.21651986614529, y: -52.89297046610136},{x: -89.29420391408419, y: -75.55404094303049},{x: -85.3336034530058, y: -86.99758647762792},{x: -81.35016662957315, y: -91.74998013705226},{x: -77.36672980614048, y: -96.5023737964766},{x: -73.38329298270781, y: -101.25476745590277},{x: -69.39985615927517, y: -106.00716111532711},{x: -65.41641933584253, y: -110.75955477475236},{x: -61.43298251240989, y: -115.51194843417761},{x: -57.44954568897728, y: -120.26434209360286},{x: -53.46610886554464, y: -125.0167357530272},{x: -49.482672042112, y: -129.76912941245246},{x: -45.52783001859078, y: -114.3537847183461},{x: -41.57208915964068, y: -99.57238318201144},{x: -37.58865233620807, y: -104.32477684143669},{x: -33.62956626405557, y: -91.90273381828047},{x: -29.675817205425176, y: -75.71652763829388},{x: -25.694632630304113, y: -78.88042427042092},{x: -21.712794220198305, y: -82.50546673816098},{x: -17.75904516156794, y: -66.31926055817439},{x: -13.803602282829843, y: -50.59594864552673},{x: -9.8391157021141, y: -37.34413756224967},{x: -5.874629121398414, y: -24.092326478974428},{x: -1.9101425406826706, y: -10.840515395699185},{x: 2.0543440400330155, y: 2.4112956875778764},{x: 5.9969735040560295, y: 20.900949807191864},{x: 9.939992091347222, y: 37.14360100315571},{x: 13.92342891477989, y: 32.39120734373137},{x: 17.90686573821256, y: 27.638813684306115},{x: 21.89030256164517, y: 22.886420024880863},{x: 25.868558729773326, y: 20.825091114472343},{x: 29.803879971654055, y: 41.06608878933821},{x: 33.76413596971821, y: 48.35485562722624},{x: 37.74757279315082, y: 43.6024619678019},{x: 41.677377438522285, y: 58.895085979753276},{x: 45.60806165000969, y: 73.85897230151568},{x: 49.5914984734423, y: 69.10657864209043},{x: 53.57493529687497, y: 64.35418498266517},{x: 57.47073377467285, y: 82.11239594291965},{x: 61.38678423439836, y: 94.66872461481944},{x: 65.37022105783103, y: 89.9163309553951},{x: 69.29240013543921, y: 100.8984754842495},{x: 73.18206999535448, y: 120.23087058754754},{x: 77.16550681878715, y: 115.4784769281232},{x: 81.14894364221982, y: 110.72608326869886},{x: 85.13238046565243, y: 105.9736896092727},{x: 89.11581728908499, y: 101.22129594984835},{x: 93.09925411251771, y: 96.4689022904231},{x: 97.08269093595038, y: 91.71650863099785},{x: 101.066127759383, y: 86.9641149715726},{x: 105.04956458281572, y: 82.21172131214826},{x: 109.03300140624839, y: 77.4593276527221},{x: 113.01643822968111, y: 72.70693399329775},{x: 116.99987505311373, y: 67.9545403338725},{x: 120.9833118765464, y: 63.20214667444725},{x: 124.96674869997901, y: 58.449753015022})};
		var t2 = {'name': '1', 'points': new Array({x: -125.48142255953155, y: 5.4569682106375694e-12},{x: -121.46993428161312, y: -8.929073183613582},{x: -117.45844600369458, y: -17.85814636723262},{x: -113.48834798306171, y: -0.941408081953341},{x: -109.55062240936405, y: 36.19004291937745},{x: -105.60941563482413, y: 71.14768620478208},{x: -101.59792735690564, y: 62.21861302116304},{x: -97.5864390789871, y: 53.289539837544},{x: -93.57495080106861, y: 44.36046665392496},{x: -89.56346252315012, y: 35.43139347030592},{x: -85.55197424523163, y: 26.50232028668688},{x: -81.5404859673132, y: 17.573247103067843},{x: -77.52899768939466, y: 8.644173919448804},{x: -73.57139867995448, y: 33.36581867350651},{x: -69.59873836600019, y: 48.68255361364754},{x: -65.58725008808165, y: 39.7534804300285},{x: -61.57576181016316, y: 30.824407246409464},{x: -57.56427353224461, y: 21.895334062790425},{x: -53.55278525432618, y: 12.966260879171386},{x: -49.54129697640764, y: 4.037187695552348},{x: -45.52980869848909, y: -4.891885488066691},{x: -41.5183204205706, y: -13.82095867168573},{x: -37.5889293457941, y: -2.052120579452094},{x: -33.72620713146273, y: 26.524916885569837},{x: -29.71471885354424, y: 17.5958437019508},{x: -25.703230575625696, y: 8.66677051833176},{x: -21.691742297707208, y: -0.26230266528546053},{x: -17.68025401978872, y: -9.1913758489045},{x: -13.668765741870232, y: -18.12044903252354},{x: -9.657277463951687, y: -27.049522216142577},{x: -5.6457891860331415, y: -35.978595399761616},{x: -1.6343009081146533, y: -44.907668583380655},{x: 2.377187369803835, y: -53.83674176700151},{x: 6.388675647722323, y: -62.76581495062055},{x: 10.400163925640868, y: -71.69488813423959},{x: 14.411652203559413, y: -80.62396131785863},{x: 18.423140481477844, y: -89.55303450147767},{x: 22.43462875939639, y: -98.48210768509671},{x: 26.446117037314878, y: -107.41118086871575},{x: 30.457605315233423, y: -116.34025405233479},{x: 34.44228930073973, y: -114.21322631071416},{x: 38.339959640741824, y: -76.19524380051007},{x: 42.35144791866037, y: -85.12431698412911},{x: 46.35043596604385, y: -88.89735738542731},{x: 50.23380224416877, y: -44.979306732304394},{x: 54.21508598666469, y: -41.44976370261247},{x: 58.03385381546968, y: 15.915437239442326},{x: 61.89678158086656, y: 44.440652260396746},{x: 65.76946104914498, y: 92.7667449694618},{x: 69.72402038632993, y: 107.31943749108177},{x: 73.65000195396499, y: 133.65974594766521},{x: 77.66149023188348, y: 124.73067276404618},{x: 81.67297850980196, y: 115.80159958042714},{x: 84.40369466128396, y: 52.03321654858155},{x: 88.41518293920251, y: 43.10414336496251},{x: 92.426671217121, y: 34.17507018134347},{x: 96.43815949503954, y: 25.245996997724433},{x: 100.44964777295809, y: 16.316923814105394},{x: 104.46113605087652, y: 7.387850630484536},{x: 108.47262432879506, y: -1.541222553134503},{x: 112.48411260671355, y: -10.470295736753542},{x: 116.49560088463198, y: -19.39936892037258},{x: 120.50708916255059, y: -28.32844210399162},{x: 124.51857744046839, y: -37.25751528760884})};
		var t3 = {'name': '2', 'points': new Array({x: -40.80771885140598, y: -2.842170943040401e-14},{x: -37.015095440942446, y: 11.462724997989255},{x: -33.222472030478855, y: 22.92544999597851},{x: -31.602884374154712, y: 34.81243731692285},{x: -31.36605584864276, y: 46.92648475339172},{x: -30.59947793308504, y: 58.98254931414243},{x: -29.580275688630707, y: 70.99201049592887},{x: -29.8116269885806, y: 83.09746738123738},{x: -30.212764656807963, y: 95.1851867191782},{x: -34.52493636807537, y: 104.5797012511133},{x: -45.51921720221179, y: 107.84716342555816},{x: -56.69808746262953, y: 109.01007116632218},{x: -67.89626669578445, y: 106.52518601059694},{x: -79.02159483180316, y: 104.8003894303364},{x: -88.49969530819317, y: 100.3452424411305},{x: -96.43319674296643, y: 92.94270906002521},{x: -102.40415288799187, y: 83.18398472864311},{x: -107.32348355622455, y: 72.45979746636385},{x: -111.11610696668811, y: 60.9970724683746},{x: -114.90873037715173, y: 49.534347470385285},{x: -118.70135378761532, y: 38.07162247239597},{x: -122.49397719807885, y: 26.608897474406774},{x: -123.69297123995872, y: 14.697353406604094},{x: -123.91668516839135, y: 3.1493159992794233},{x: -118.96649439954845, y: -6.286393064153344},{x: -112.6982791843904, y: -16.371314159541328},{x: -106.92052612344904, y: -26.490129095490943},{x: -98.29561895339032, y: -33.59692846364803},{x: -87.26139101268853, y: -37.53683249759678},{x: -76.22716307198681, y: -41.47673653154544},{x: -65.81338323758689, y: -46.619409352713205},{x: -54.779155296885165, y: -50.5593133866619},{x: -43.41781056032187, y: -51.94254638811043},{x: -32.17464324553265, y: -50.08468321392661},{x: -20.876134107994687, y: -49.501957565736745},{x: -9.880515243091338, y: -45.67548687520511},{x: 1.1506106796551876, y: -42.62394513668451},{x: 11.529634517307102, y: -37.47343733852344},{x: 22.204577226430388, y: -32.687571679934365},{x: 32.68874436048429, y: -27.36813396260891},{x: 43.10533250779747, y: -22.47805989186631},{x: 51.502762878735155, y: -15.217865064581673},{x: 59.62669402747707, y: -7.306439025612718},{x: 67.94571604100372, y: 0.2040281437373892},{x: 77.78101698059044, y: 6.137623497150827},{x: 86.64833069121318, y: 13.404371764670458},{x: 96.27619311729666, y: 18.898626521456777},{x: 105.92014612309663, y: 25.53441383734429},{x: 116.77892941940536, y: 26.957145792293943},{x: 121.68293570289256, y: 18.706512972600876},{x: 121.69539597951416, y: 6.959312168297458},{x: 124.5998131284685, y: -4.574939329321836},{x: 125.1141338701209, y: -16.573229809965085},{x: 126.08331483160862, y: -28.642130657211},{x: 125.36288892139407, y: -40.61705020145135},{x: 124.64160424875081, y: -52.565199338199875},{x: 123.01395233478485, y: -64.55906993186792},{x: 120.41700764952793, y: -76.2846915744247},{x: 116.62438423906434, y: -87.74741657241398},{x: 112.8317608286008, y: -99.21014157040324},{x: 109.00717939760312, y: -110.6576503415896},{x: 102.91217750386596, y: -120.98936458688995},{x: 96.75283049084987, y: -131.23120450229612},{x: 90.78187434582458, y: -140.98992883367782})};
		var t4 = {'name': '2', 'points': new Array({x: -61.758600043770485, y: 0},{x: -59.75725076511395, y: 14.39223690858313},{x: -58.41582287124086, y: 28.899919191830463},{x: -57.87931937346306, y: 43.61760528462287},{x: -57.51702828200635, y: 58.08389854054235},{x: -58.47033284944675, y: 72.7200880017254},{x: -60.92303362837416, y: 86.98523855369837},{x: -67.04598863884141, y: 96.18563775684112},{x: -75.76212823784925, y: 102.24715249499758},{x: -84.9265887812135, y: 106.96920038027957},{x: -94.32779954502135, y: 104.81384926095842},{x: -102.89557925007355, y: 98.05497864732473},{x: -109.33119958058867, y: 87.24109446827043},{x: -114.78017428184774, y: 75.0291190274391},{x: -118.09656519172344, y: 61.316220396751135},{x: -120.52699657385384, y: 47.05789893050314},{x: -123.69042719369074, y: 33.3781231651746},{x: -125.95651188235931, y: 19.029139434939054},{x: -124.55739784015464, y: 4.63945149223224},{x: -119.71224167940775, y: -8.04206773747967},{x: -113.1614782837658, y: -19.067190035724366},{x: -105.83415584453834, y: -28.52668133805406},{x: -98.51861830533969, y: -38.249970246239286},{x: -90.22987394388747, y: -46.02334053557257},{x: -81.65605190860654, y: -53.0412703417814},{x: -72.60437879759158, y: -58.93370526697001},{x: -63.01852954005474, y: -62.44004598575654},{x: -53.40574805233413, y: -65.82262701816401},{x: -43.65418132197314, y: -67.82454080750807},{x: -33.8039375062545, y: -66.95151915897131},{x: -24.133691073251327, y: -64.08455899348837},{x: -15.4863603078646, y: -58.00603747119365},{x: -6.255624582006931, y: -52.85453450838696},{x: 1.7667148211041876, y: -44.34067658267992},{x: 10.166341647236493, y: -36.586258869823325},{x: 18.074776768820243, y: -27.781039158376075},{x: 25.559814772089624, y: -18.18450232505495},{x: 33.307765301463746, y: -9.064455154281006},{x: 40.594608966071064, y: 0.8656068483962258},{x: 47.30521117467549, y: 11.678405868351149},{x: 54.32161114637245, y: 22.053555374136693},{x: 61.60320379980561, y: 31.97058997425387},{x: 68.88442674177077, y: 41.846935800469},{x: 76.38180682983034, y: 51.38954826044488},{x: 84.29477436041276, y: 60.17437985855776},{x: 91.92235344999335, y: 69.35912256810661},{x: 100.70781562318115, y: 74.0719581000381},{x: 108.72251238906733, y: 70.35205437525042},{x: 113.82888380235386, y: 58.13636473393473},{x: 116.35904216318494, y: 43.994526705290525},{x: 118.82029040820913, y: 29.725960920279135},{x: 120.51902529110657, y: 15.23993603607164},{x: 122.07262680112729, y: 0.6912335229055202},{x: 124.04348811764072, y: -13.74237202975337},{x: 122.84909313871702, y: -28.24383391385186},{x: 121.06927273715962, y: -42.71037240556598},{x: 117.95254731979122, y: -56.62414046880008},{x: 113.4020761521441, y: -69.68841985877697},{x: 108.71117748455202, y: -82.61420587230504},{x: 103.77666039328523, y: -95.37262814452626},{x: 98.83644535970234, y: -107.95361167230561},{x: 95.55692184133187, y: -121.68977492094658},{x: 91.51693970696675, y: -134.71585044114244},{x: 85.16538744834469, y: -143.0307996197204})};
		var t5 = {'name': '2', 'points': new Array({x: -130.42334210005822, y: 0},{x: -129.8597098417904, y: -9.448680901083947},{x: -126.92784229959798, y: -19.335727391657656},{x: -123.9959747574056, y: -29.222773882231365},{x: -120.34229203840974, y: -38.52966457969552},{x: -115.89296905834064, y: -47.21599694742065},{x: -111.6421142754244, y: -56.10074763114858},{x: -106.85086775593021, y: -64.4181870956474},{x: -102.2576472148007, y: -72.94894432589035},{x: -97.70563621840421, y: -81.51819911741259},{x: -92.70561468256204, y: -89.59131187729238},{x: -88.31202289795985, y: -98.33600546471445},{x: -83.66254014050512, y: -106.81024543286779},{x: -77.8916882304942, y: -113.67987862268333},{x: -71.53377273487555, y: -119.13120804335307},{x: -64.26281577648513, y: -117.17174825336014},{x: -58.50661979103853, y: -110.2879166443513},{x: -53.08143136230271, y: -102.7797583716009},{x: -47.150335609155434, y: -96.07593774358801},{x: -41.852262490293015, y: -88.390427774501},{x: -36.558594565966104, y: -80.69808373282473},{x: -31.569794335666302, y: -72.61290086202177},{x: -26.66425714715922, y: -64.4313111849118},{x: -22.268711733065743, y: -55.687499421537154},{x: -18.024618227398605, y: -46.79714956919025},{x: -14.212079818795758, y: -37.530188323069694},{x: -10.724153712146347, y: -28.027765763441664},{x: -7.836339351540289, y: -18.115004206988658},{x: -4.948524990934288, y: -8.202242650535652},{x: -2.0607106303282308, y: 1.710518905917354},{x: 0.7982270294766636, y: 11.638606543065634},{x: 3.2680014549721363, y: 21.773239490695175},{x: 5.919141533945833, y: 31.8116140513402},{x: 8.80695589455189, y: 41.724375607793206},{x: 11.694770255157891, y: 51.637137164246155},{x: 14.582584615763949, y: 61.54989872069916},{x: 17.774687922069404, y: 71.25821270520402},{x: 21.018297175147495, y: 80.9319205500268},{x: 24.153556118115375, y: 90.65946252798301},{x: 26.651606719808058, y: 100.26891639424451},{x: 31.8639394553324, y: 107.87105224417922},{x: 37.50778661337557, y: 114.6676882473568},{x: 43.683966932416524, y: 120.70067438075984},{x: 50.04904244253788, y: 126.5108282949144},{x: 56.983993030470515, y: 130.86879195664693},{x: 62.59629496531517, y: 126.52583647269432},{x: 65.52816250750755, y: 116.63878998212061},{x: 67.95857032403666, y: 106.53535715216555},{x: 69.45758085223895, y: 96.03001437926486},{x: 71.76736256088759, y: 85.82320274967009},{x: 74.30200006517777, y: 75.72910635168381},{x: 77.23386760737014, y: 65.8420598611101},{x: 80.16573514956252, y: 55.955013370536335},{x: 83.09760269175496, y: 46.067966879962626},{x: 86.02947023394734, y: 36.180920389388916},{x: 88.96133777613977, y: 26.293873898815207},{x: 91.8932053183321, y: 16.406827408241497},{x: 95.16153903939158, y: 6.743682423820815},{x: 98.71655156271174, y: -2.728692077146036},{x: 102.27156408603196, y: -12.20106657811283},{x: 105.89878022941406, y: -21.61831589272117},{x: 109.91577089528226, y: -30.67865149062584},{x: 114.43667283064985, y: -39.27597618400114},{x: 119.57665789994178, y: -46.75738106692256})};
		var t6 = {'name': '3', 'points': new Array({x: -137.37766990687157, y: -5.684341886080802e-14},{x: -136.47779846193242, y: -11.382480199889187},{x: -133.12663420463852, y: -22.817853487567845},{x: -129.45881954434913, y: -34.020141107503605},{x: -125.42251175942474, y: -44.95118174590485},{x: -119.85055187371964, y: -54.492781763103494},{x: -113.41265181590174, y: -63.15912366925852},{x: -106.53933350028092, y: -71.12298051814778},{x: -98.89231005432376, y: -77.79768416000977},{x: -90.70940567504434, y: -82.46541785478513},{x: -82.07402074857325, y: -80.62035424130642},{x: -75.10667927365822, y: -73.18328636925469},{x: -70.29788843023874, y: -62.92582456764302},{x: -67.46419904899707, y: -51.372251480992816},{x: -63.84402174071667, y: -40.08730321784816},{x: -61.744981494947524, y: -28.30150504027273},{x: -58.66303642641219, y: -17.07087483030108},{x: -56.69470658352009, y: -5.084362403923194},{x: -55.15963672505421, y: 6.761014167333769},{x: -54.56050022263406, y: 18.774856701173746},{x: -55.87866292292037, y: 30.64191280043741},{x: -57.61097965391792, y: 42.6451582531123},{x: -58.39074066494322, y: 54.62835216390454},{x: -57.776710965368494, y: 56.688960987038854},{x: -54.42554670807459, y: 45.25358769936025},{x: -51.07438245078069, y: 33.818214411681595},{x: -47.72321819348679, y: 22.382841124002994},{x: -44.23780263906258, y: 11.046289921946027},{x: -39.37162206148096, y: 0.6692209681891654},{x: -33.67975484518357, y: -8.834749127118243},{x: -27.517756423740366, y: -17.82338025717445},{x: -20.285931095473615, y: -25.301577030967678},{x: -13.054105767206806, y: -32.77977380476085},{x: -5.321764428630161, y: -38.894960974184585},{x: 3.165989047836206, y: -43.28883393781942},{x: 11.745727211214898, y: -46.75442939286316},{x: 20.779341110087216, y: -48.0229576906863},{x: 29.56489772235483, y: -51.24283569639306},{x: 38.407756780947864, y: -54.07985087489237},{x: 47.46176421577201, y: -55.37531016034299},{x: 56.23058707902459, y: -58.05393839423152},{x: 65.25939599991403, y: -56.60867633723328},{x: 74.26668056342743, y: -54.90252148025857},{x: 82.98377586823699, y: -51.657761381651056},{x: 91.38177012118979, y: -46.95338929083263},{x: 98.92254783637901, y: -40.05981306474652},{x: 103.91370154039691, y: -29.87631100324586},{x: 109.84209802086303, y: -20.962984503345126},{x: 112.62233009312843, y: -9.30341171632108},{x: 112.42851730165518, y: 2.9180836728427266},{x: 111.93039042888978, y: 15.189153236153459},{x: 110.40340223886062, y: 27.220812272351793},{x: 107.46892226750987, y: 38.8391920899644},{x: 105.25398884473452, y: 50.767407023131},{x: 103.05604070116743, y: 62.70132053247602},{x: 100.72071717433624, y: 74.58777964298162},{x: 97.96446067946295, y: 86.29053093723843},{x: 94.61329642216907, y: 97.72590422491709},{x: 91.83151850893296, y: 109.36101136687608},{x: 90.11970384219251, y: 121.37144869613445},{x: 87.4053811137714, y: 133.05219331092297},{x: 84.5117087829783, y: 144.6638355698576},{x: 81.16054452568437, y: 156.09920885753627},{x: 77.8093802683905, y: 167.53458214521487})};
		var t7 = {'name': '3', 'points': new Array({x: -136.45115105405623, y: 0},{x: -136.12089486336984, y: -11.973326635832507},{x: -133.37221711043975, y: -23.58600108717303},{x: -130.34526460957233, y: -35.12653401392532},{x: -126.06398231641677, y: -45.572262385761235},{x: -121.26404697385769, y: -55.44287574739869},{x: -115.70774135866301, y: -64.29536934480984},{x: -109.7438910326118, y: -72.47210015251156},{x: -103.5626601474022, y: -80.21823196074479},{x: -97.5487665708975, y: -88.29583443029674},{x: -90.3501219764781, y: -92.76723449544556},{x: -82.55246653943394, y: -93.13253193319912},{x: -75.10621333047197, y: -89.27231710085093},{x: -67.92420365793149, y: -84.196830096984},{x: -62.37362403754781, y: -75.45360293863874},{x: -57.84028319962766, y: -65.28859115950132},{x: -55.04749621581928, y: -53.76274400173364},{x: -52.10611476310871, y: -42.24888876856613},{x: -49.30040721563316, y: -30.58396093993491},{x: -47.40228573607416, y: -18.469813746373518},{x: -45.149592225393775, y: -6.497222496777795},{x: -43.326673398952124, y: 5.659144208700184},{x: -42.31509598360341, y: 18.04423116411118},{x: -41.03831138423021, y: 30.367432282353832},{x: -40.57718896423535, y: 42.80350673450937},{x: -40.11462723965096, y: 55.276622265314586},{x: -40.600598178907944, y: 67.44182085281489},{x: -38.31229169154798, y: 64.18614750067667},{x: -35.28533919068056, y: 52.64561457392443},{x: -31.86920590741775, y: 41.42348586648171},{x: -27.250300268994806, y: 31.31752516230847},{x: -22.150833749185665, y: 21.787601600858295},{x: -17.17775211344454, y: 12.096638627928996},{x: -11.443272723117502, y: 3.5321487001767764},{x: -5.202422080939755, y: -4.1076927282614975},{x: 1.0974877542092258, y: -11.61732255780663},{x: 7.655208104326675, y: -18.55854097370701},{x: 14.400570106642988, y: -24.998497172049667},{x: 21.654391050697825, y: -29.768346522893296},{x: 29.21066014228097, y: -33.34109854234265},{x: 36.91078041557523, y: -35.997582877693844},{x: 44.72544828742406, y: -37.65038946536839},{x: 52.59024277205435, y: -38.50716551056968},{x: 60.47552832514066, y: -38.643752988876884},{x: 68.34763608648592, y: -38.38188275285921},{x: 76.10812124676323, y: -36.32097345945192},{x: 83.76702485615272, y: -33.34835076000974},{x: 91.07728239756801, y: -28.83736320402835},{x: 96.94040063788992, y: -20.4861395230148},{x: 100.93198583503704, y: -9.985470227921383},{x: 104.67977194181066, y: 1.0058654636749793},{x: 107.59558294390916, y: 12.46691446713237},{x: 109.24346520157991, y: 24.687261606579455},{x: 110.6450348986354, y: 36.970050238660065},{x: 111.71118643838287, y: 49.3525202533026},{x: 112.74705406834534, y: 61.7258872232357},{x: 112.39080413442582, y: 74.21106181498277},{x: 112.62899838000351, y: 86.68469812498074},{x: 113.17807146077257, y: 99.15230021391312},{x: 113.54884894594375, y: 111.62477620028989},{x: 113.30213349259873, y: 124.11615783689717},{x: 111.65890108237721, y: 136.10971436297655},{x: 108.63194858150973, y: 147.65024728972872},{x: 104.14276822116756, y: 156.86746806680088})};

		this.ctx = wink.byId('test_recognition_1').getContext('2d');
		
		this.recognizer = new wink.ux.GestureRecognizer(
		{
			node: wink.byId('test_recognition_1'),
			templates: [t0, t1, t2, t3, t4, t5, t6, t7],
			gestureStartCallback: 
			{
				method: 'start',
				context: this
			},
			gestureCallback: 
			{
				method: 'move',
				context: this
			},
			gestureEndCallback: 
			{
				method: 'end',
				context: this
			}
		});

		wink.subscribe('/gesturerecognizer/events/result', {method: 'displayResult', context: this});

		this.clearShape();
	};
	
	recognition.start = function(event)
	{
		var x = event.x - (wink.getLeftPosition(wink.byId('test_recognition_1'))-window.innerWidth);
		var y = event.y - wink.getTopPosition(wink.byId('test_recognition_1'));
		
		this.currentPoint = {x: x , y: y};
	
		this.clearShape();
	};
	
	recognition.move = function(event)
	{
		var x = event.x - (wink.getLeftPosition(wink.byId('test_recognition_1'))-window.innerWidth);
		var y = event.y - wink.getTopPosition(wink.byId('test_recognition_1'));

		this.previousPoint = this.currentPoint;
		this.currentPoint = {x: x, y: y};
		
		this.drawShape();
	};

	recognition.end = function(event)
	{
		var x = event.x - (wink.getLeftPosition(wink.byId('test_recognition_1'))-window.innerWidth);
		var y = event.y - wink.getTopPosition(wink.byId('test_recognition_1'));
	};

	recognition.drawShape = function()
	{
		this.ctx.beginPath();
		this.ctx.moveTo(this.previousPoint.x, this.previousPoint.y);
		this.ctx.lineTo(this.currentPoint.x, this.currentPoint.y);
		this.ctx.closePath();
		this.ctx.stroke();
	};
	
	recognition.clearShape = function()
	{	
		this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
		this.ctx.fillRect(0, 0, 200, 200);
		
		this.ctx.strokeStyle = '#333';
		this.ctx.lineWidth = 2;
	};

	recognition.displayResult = function(params)
	{
		for ( var i = 0; i < 3; i++ )
		{
			if ( params.result > i )
			{
				wink.byId('test_recognition_like_' + i).src = './pages/images/like2.png';
			} else
			{
				wink.byId('test_recognition_like_' + i).src = './pages/images/like1.png';
			}
		}
		
		if ( params.result == 0 )
		{
			wink.byId('test_recognition_like_0').src = './pages/images/like1.png';
		}
	};
	
	recognition.init();
			
	return recognition;
})();