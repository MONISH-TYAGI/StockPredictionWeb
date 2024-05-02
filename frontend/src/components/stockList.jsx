const stockOptions = [
    {
      "symbol": "A",
      "name": "Agilent Technologies Inc"
    },
    {
      "symbol": "AA",
      "name": "Alcoa Corp"
    },
    {
      "symbol": "AAA",
      "name": "AXS First Priority CLO Bond ETF"
    },
    {
      "symbol": "AAAU",
      "name": "Goldman Sachs Physical Gold ETF"
    },
    {
      "symbol": "AACG",
      "name": "ATA Creativity Global"
    },
    {
      "symbol": "AACI",
      "name": "Armada Acquisition Corp I"
    },
    {
      "symbol": "AACIU",
      "name": "Armada Acquisition Corp I - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "AACIW",
      "name": "Armada Acquisition Corp I - Warrants (13/08/2026)"
    },
    {
      "symbol": "AACT",
      "name": "Ares Acquisition Corporation II - Class A"
    },
    {
      "symbol": "AACT-U",
      "name": "Ares Acquisition Corporation II - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "AACT-WS",
      "name": "Ares Acquisition Corporation II - Warrants (01/01/9999)"
    },
    {
      "symbol": "AADI",
      "name": "Aadi Bioscience Inc"
    },
    {
      "symbol": "AADR",
      "name": "ADVISORSHARES DORSEY WRIGHT ADR ETF "
    },
    {
      "symbol": "AAGR",
      "name": "African Agriculture Holdings Inc"
    },
    {
      "symbol": "AAGRW",
      "name": "African Agriculture Holdings Inc - Warrants (06/12/2028)"
    },
    {
      "symbol": "AAL",
      "name": "American Airlines Group Inc"
    },
    {
      "symbol": "AAMC",
      "name": "Altisource Asset Management Corp"
    },
    {
      "symbol": "AAME",
      "name": "Atlantic American Corp"
    },
    {
      "symbol": "AAN",
      "name": "Aarons Company Inc (The)"
    },
    {
      "symbol": "AAOI",
      "name": "Applied Optoelectronics Inc"
    },
    {
      "symbol": "AAON",
      "name": "AAON Inc"
    },
    {
      "symbol": "AAP",
      "name": "Advance Auto Parts Inc"
    },
    {
      "symbol": "AAPB",
      "name": "GRANITESHARES 1.75X LONG AAPL DAILY ETF "
    },
    {
      "symbol": "AAPD",
      "name": "DIREXION DAILY AAPL BEAR 1X SHARES "
    },
    {
      "symbol": "AAPL",
      "name": "Apple Inc"
    },
    {
      "symbol": "AAPR",
      "name": "Innovator Equity Defined Protection ETF - 2 Yr to April 2026"
    },
    {
      "symbol": "AAPU",
      "name": "DIREXION DAILY AAPL BULL 1.5X SHARES "
    },
    {
      "symbol": "AAPX",
      "name": "T-Rex 2X Long Apple Daily Target ETF"
    },
    {
      "symbol": "AAPY",
      "name": "Kurv Yield Premium Strategy Apple (AAPL) ETF"
    },
    {
      "symbol": "AAT",
      "name": "American Assets Trust Inc"
    },
    {
      "symbol": "AAXJ",
      "name": "ISHARES MSCI ALL COUNTRY ASIA EX JAPAN ETF "
    },
    {
      "symbol": "AB",
      "name": "AllianceBernstein Holding Lp"
    },
    {
      "symbol": "ABAT",
      "name": "Advanced Battery Technologies Inc"
    },
    {
      "symbol": "ABBV",
      "name": "Abbvie Inc"
    },
    {
      "symbol": "ABCB",
      "name": "Ameris Bancorp"
    },
    {
      "symbol": "ABCL",
      "name": "AbCellera Biologics Inc"
    },
    {
      "symbol": "ABCS",
      "name": "Alpha Blue Capital US Small-Mid Cap Dynamic ETF"
    },
    {
      "symbol": "ABEO",
      "name": "Abeona Therapeutics Inc"
    },
    {
      "symbol": "ABEQ",
      "name": "Absolute Select Value ETF"
    },
    {
      "symbol": "ABEV",
      "name": "Ambev S.A."
    },
    {
      "symbol": "ABG",
      "name": "Asbury Automotive Group Inc"
    },
    {
      "symbol": "ABIO",
      "name": "ARCA biopharma Inc"
    },
    {
      "symbol": "ABL",
      "name": "Abacus Life Inc - Class A"
    },
    {
      "symbol": "ABLLL",
      "name": "Abacus Life Inc"
    },
    {
      "symbol": "ABLLW",
      "name": "Abacus Life Inc - Warrants (30/06/2028)"
    },
    {
      "symbol": "ABLV",
      "name": "Able View Global Inc - Class B"
    },
    {
      "symbol": "ABLVW",
      "name": "Able View Global Inc - Warrants (17/08/2028)"
    },
    {
      "symbol": "ABM",
      "name": "ABM Industries Inc"
    },
    {
      "symbol": "ABNB",
      "name": "Airbnb Inc - Class A"
    },
    {
      "symbol": "ABOS",
      "name": "Acumen Pharmaceuticals Inc"
    },
    {
      "symbol": "ABR",
      "name": "Arbor Realty Trust Inc"
    },
    {
      "symbol": "ABR-P-D",
      "name": "Arbor Realty Trust Inc"
    },
    {
      "symbol": "ABR-P-E",
      "name": "Arbor Realty Trust Inc"
    },
    {
      "symbol": "ABR-P-F",
      "name": "Arbor Realty Trust Inc"
    },
    {
      "symbol": "ABSI",
      "name": "Absci Corp"
    },
    {
      "symbol": "ABST",
      "name": "Absolute Software Corporation"
    },
    {
      "symbol": "ABT",
      "name": "Abbott Laboratories"
    },
    {
      "symbol": "ABTS",
      "name": "Abits Group Inc"
    },
    {
      "symbol": "ABUS",
      "name": "Arbutus Biopharma Corp"
    },
    {
      "symbol": "ABVC",
      "name": "ABVC BioPharma Inc"
    },
    {
      "symbol": "ABVX",
      "name": "Abivax"
    },
    {
      "symbol": "AC",
      "name": "Associated Capital Group Inc - Class A"
    },
    {
      "symbol": "ACA",
      "name": "Arcosa Inc"
    },
    {
      "symbol": "ACAB",
      "name": "Atlantic Coastal Acquisition Corp II - Class A"
    },
    {
      "symbol": "ACABU",
      "name": "Atlantic Coastal Acquisition Corp II - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ACABW",
      "name": "Atlantic Coastal Acquisition Corp II - Warrants (13/01/2027)"
    },
    {
      "symbol": "ACAC",
      "name": "Acri Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "ACACU",
      "name": "Acri Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ACACW",
      "name": "Acri Capital Acquisition Corp - Warrants (01/02/2029)"
    },
    {
      "symbol": "ACAD",
      "name": "Acadia Pharmaceuticals Inc"
    },
    {
      "symbol": "ACB",
      "name": "Aurora Cannabis Inc"
    },
    {
      "symbol": "ACBA",
      "name": "Ace Global Business Acquisition Ltd"
    },
    {
      "symbol": "ACBAU",
      "name": "Ace Global Business Acquisition Ltd - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "ACBAW",
      "name": "Ace Global Business Acquisition Ltd - Warrants (26/03/2026)"
    },
    {
      "symbol": "ACCD",
      "name": "Accolade Inc"
    },
    {
      "symbol": "ACCO",
      "name": "Acco Brands Corporation"
    },
    {
      "symbol": "ACDC",
      "name": "ProFrac Holding Corp Class A"
    },
    {
      "symbol": "ACEL",
      "name": "Accel Entertainment Inc - Class A1"
    },
    {
      "symbol": "ACES",
      "name": "ALPS CLEAN ENERGY ETF "
    },
    {
      "symbol": "ACET",
      "name": "Adicet Bio Inc"
    },
    {
      "symbol": "ACGL",
      "name": "Arch Capital Group Ltd"
    },
    {
      "symbol": "ACGLN",
      "name": "Arch Capital Group Ltd"
    },
    {
      "symbol": "ACGLO",
      "name": "Arch Capital Group Ltd"
    },
    {
      "symbol": "ACHC",
      "name": "Acadia Healthcare Company Inc"
    },
    {
      "symbol": "ACHL",
      "name": "Achilles Therapeutics Plc"
    },
    {
      "symbol": "ACHR",
      "name": "Archer Aviation Inc - Class A"
    },
    {
      "symbol": "ACHR-WS",
      "name": "Archer Aviation Inc Wt"
    },
    {
      "symbol": "ACHV",
      "name": "Achieve Life Sciences Inc"
    },
    {
      "symbol": "ACI",
      "name": "Albertsons Companies Inc - Class A"
    },
    {
      "symbol": "ACIC",
      "name": "American Coastal Insurance Corp"
    },
    {
      "symbol": "ACIO",
      "name": "Aptus Collared Investment Opportunity ETF"
    },
    {
      "symbol": "ACIU",
      "name": "AC Immune SA"
    },
    {
      "symbol": "ACIW",
      "name": "ACI Worldwide Inc"
    },
    {
      "symbol": "ACLS",
      "name": "Axcelis Technologies Inc"
    },
    {
      "symbol": "ACLX",
      "name": "Arcellx Inc"
    },
    {
      "symbol": "ACM",
      "name": "AECOM"
    },
    {
      "symbol": "ACMR",
      "name": "ACM Research Inc - Class A"
    },
    {
      "symbol": "ACN",
      "name": "Accenture plc - Class A"
    },
    {
      "symbol": "ACNB",
      "name": "ACNB Corp"
    },
    {
      "symbol": "ACNT",
      "name": "Ascent Industries Company"
    },
    {
      "symbol": "ACON",
      "name": "Aclarion Inc"
    },
    {
      "symbol": "ACONW",
      "name": "Aclarion Inc - Warrants (01/12/2026)"
    },
    {
      "symbol": "ACORQ",
      "name": "Acorda Therapeutics Inc"
    },
    {
      "symbol": "ACP",
      "name": "abrdn Income Credit Strategies Fund"
    },
    {
      "symbol": "ACP-P-A",
      "name": "abrdn Income Credit Strategies Fund"
    },
    {
      "symbol": "ACR",
      "name": "ACRES Commercial Realty Corp"
    },
    {
      "symbol": "ACR-P-C",
      "name": "ACRES Commercial Realty Corp"
    },
    {
      "symbol": "ACR-P-D",
      "name": "ACRES Commercial Realty Corp"
    },
    {
      "symbol": "ACRE",
      "name": "Ares Commercial Real Estate Corp"
    },
    {
      "symbol": "ACRS",
      "name": "Aclaris Therapeutics Inc"
    },
    {
      "symbol": "ACRV",
      "name": "Acrivon Therapeutics Inc"
    },
    {
      "symbol": "ACSI",
      "name": "AMERICAN CUSTOMER SATISFACTION ETF "
    },
    {
      "symbol": "ACST",
      "name": "Acasti Pharma Inc - Class A"
    },
    {
      "symbol": "ACT",
      "name": "Enact Holdings Inc"
    },
    {
      "symbol": "ACTG",
      "name": "Acacia Research Corp"
    },
    {
      "symbol": "ACTV",
      "name": "LeaderShares Activist Leaders ETF"
    },
    {
      "symbol": "ACU",
      "name": "Acme United Corp"
    },
    {
      "symbol": "ACV",
      "name": "Virtus Diversified Income & Convertible Fund"
    },
    {
      "symbol": "ACVA",
      "name": "ACV Auctions Inc - Class A"
    },
    {
      "symbol": "ACVF",
      "name": "AMERICAN CONSERVATIVE VALUES ETF "
    },
    {
      "symbol": "ACWI",
      "name": "ISHARES MSCI ACWI ETF "
    },
    {
      "symbol": "ACWV",
      "name": "ISHARES MSCI GLOBAL MIN VOL FACTOR ETF "
    },
    {
      "symbol": "ACWX",
      "name": "ISHARES MSCI ACWI EX U.S. ETF "
    },
    {
      "symbol": "ACXP",
      "name": "Acurx Pharmaceuticals Inc"
    },
    {
      "symbol": "ADAG",
      "name": "Adagene Inc"
    },
    {
      "symbol": "ADAL",
      "name": "Anthemis Digital Acquisitions I Corp - Class A"
    },
    {
      "symbol": "ADALU",
      "name": "Anthemis Digital Acquisitions I Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ADALW",
      "name": "Anthemis Digital Acquisitions I Corp - Warrants (18/10/2026)"
    },
    {
      "symbol": "ADAP",
      "name": "Adaptimmune Therapeutics Plc"
    },
    {
      "symbol": "ADBE",
      "name": "Adobe Inc"
    },
    {
      "symbol": "ADC",
      "name": "Agree Realty Corp"
    },
    {
      "symbol": "ADC-P-A",
      "name": "Agree Realty Corp"
    },
    {
      "symbol": "ADCT",
      "name": "Adc Therapeutics SA"
    },
    {
      "symbol": "ADD",
      "name": "Color Star Technology Co Ltd - Class A"
    },
    {
      "symbol": "ADEA",
      "name": "Adeia Inc"
    },
    {
      "symbol": "ADFI",
      "name": "ANFIELD DYNAMIC FIXED INCOME ETF "
    },
    {
      "symbol": "ADI",
      "name": "Analog Devices Inc"
    },
    {
      "symbol": "ADIL",
      "name": "Adial Pharmaceuticals Inc"
    },
    {
      "symbol": "ADIV",
      "name": "SMARTETFS ASIA PACIFIC DIVIDEND BUILDER ETF "
    },
    {
      "symbol": "ADM",
      "name": "Archer Daniels Midland Company"
    },
    {
      "symbol": "ADMA",
      "name": "Adma Biologics Inc"
    },
    {
      "symbol": "ADME",
      "name": "Aptus Drawdown Managed Equity ETF"
    },
    {
      "symbol": "ADN",
      "name": "Advent Technologies Holdings Inc - Class A"
    },
    {
      "symbol": "ADNT",
      "name": "Adient plc"
    },
    {
      "symbol": "ADNWW",
      "name": "Advent Technologies Holdings Inc - Warrants (03/02/2026)"
    },
    {
      "symbol": "ADOCR",
      "name": "Australian Oilseeds Holdings Ltd"
    },
    {
      "symbol": "ADP",
      "name": "Automatic Data Processing Inc"
    },
    {
      "symbol": "ADPT",
      "name": "Adaptive Biotechnologies Corp"
    },
    {
      "symbol": "ADPV",
      "name": "ADAPTIV SELECT ETF "
    },
    {
      "symbol": "ADRT",
      "name": "Ault Disruptive Technologies Corp"
    },
    {
      "symbol": "ADRT-U",
      "name": "Ault Disruptive Technologies Corp - Units (1 Ord Share & 3/4 War)"
    },
    {
      "symbol": "ADSE",
      "name": "Ads-Tec Energy Plc"
    },
    {
      "symbol": "ADSEW",
      "name": "Ads-Tec Energy Plc - Warrants (22/12/2026)"
    },
    {
      "symbol": "ADSK",
      "name": "Autodesk Inc"
    },
    {
      "symbol": "ADT",
      "name": "ADT Inc"
    },
    {
      "symbol": "ADTH",
      "name": "AdTheorent Holding Company Inc"
    },
    {
      "symbol": "ADTHW",
      "name": "AdTheorent Holding Company Inc - Warrants (22/12/2026)"
    },
    {
      "symbol": "ADTN",
      "name": "ADTRAN Holdings Inc"
    },
    {
      "symbol": "ADTX",
      "name": "Aditxt Inc"
    },
    {
      "symbol": "ADUS",
      "name": "Addus HomeCare Corporation"
    },
    {
      "symbol": "ADV",
      "name": "Advantage Solutions Inc - Class A"
    },
    {
      "symbol": "ADVE",
      "name": "MATTHEWS ASIA DIVIDEND ACTIVE ETF "
    },
    {
      "symbol": "ADVM",
      "name": "Adverum Biotechnologies Inc"
    },
    {
      "symbol": "ADX",
      "name": "Adams Diversified Equity Fund"
    },
    {
      "symbol": "ADXN",
      "name": "Addex Therapeutics Ltd"
    },
    {
      "symbol": "AE",
      "name": "Adams Resources & Energy Inc"
    },
    {
      "symbol": "AEAE",
      "name": "AltEnergy Acquisition Corp - Class A"
    },
    {
      "symbol": "AEAEU",
      "name": "AltEnergy Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "AEAEW",
      "name": "AltEnergy Acquisition Corp - Warrants (29/10/2026)"
    },
    {
      "symbol": "AEE",
      "name": "Ameren Corp"
    },
    {
      "symbol": "AEF",
      "name": "abrdn Emerging Markets Equity Income Fund Inc"
    },
    {
      "symbol": "AEFC",
      "name": "Aegon Funding Company LLC"
    },
    {
      "symbol": "AEG",
      "name": "Aegon Ltd"
    },
    {
      "symbol": "AEHA",
      "name": "Aesther Healthcare Acquisition Corp - Class A"
    },
    {
      "symbol": "AEHL",
      "name": "Antelope Enterprise Holdings Ltd - Class A"
    },
    {
      "symbol": "AEHR",
      "name": "Aehr Test Systems"
    },
    {
      "symbol": "AEI",
      "name": "Alset Inc"
    },
    {
      "symbol": "AEIS",
      "name": "Advanced Energy Industries Inc"
    },
    {
      "symbol": "AEL",
      "name": "American Equity Investment Life Holding Company"
    },
    {
      "symbol": "AEL-P-A",
      "name": "American Equity Investment Life Holding Company"
    },
    {
      "symbol": "AEL-P-B",
      "name": "American Equity Investment Life Holding Company"
    },
    {
      "symbol": "AEM",
      "name": "Agnico Eagle Mines Ltd"
    },
    {
      "symbol": "AEMB",
      "name": "AMERICAN CENTURY EMERGING MARKETS BOND ETF "
    },
    {
      "symbol": "AEMD",
      "name": "Aethlon Medical Inc"
    },
    {
      "symbol": "AENT",
      "name": "Alliance Entertainment Holding Corporation - Class A"
    },
    {
      "symbol": "AENTW",
      "name": "Alliance Entertainment Holding Corporation - Warrants (11/02/2026)"
    },
    {
      "symbol": "AEO",
      "name": "American Eagle Outfitters Inc"
    },
    {
      "symbol": "AEON",
      "name": "AEON Biopharma Inc - Class A"
    },
    {
      "symbol": "AEP",
      "name": "American Electric Power Company Inc"
    },
    {
      "symbol": "AEPPZ",
      "name": "American Electric Power Company Inc"
    },
    {
      "symbol": "AER",
      "name": "Aercap Holdings N.V."
    },
    {
      "symbol": "AERT",
      "name": "Advanced Environmental Recycling Technologies Inc"
    },
    {
      "symbol": "AERTW",
      "name": "Aeries Technology Inc - Warrants (20/10/2026)"
    },
    {
      "symbol": "AES",
      "name": "AES Corp"
    },
    {
      "symbol": "AESI",
      "name": "Atlas Energy Solutions Inc"
    },
    {
      "symbol": "AESR",
      "name": "Anfield U.S. Equity Sector Rotation ETF"
    },
    {
      "symbol": "AETH",
      "name": "Bitwise Ethereum Strategy ETF"
    },
    {
      "symbol": "AEVA",
      "name": "Aeva Technologies Inc"
    },
    {
      "symbol": "AEVA-WS",
      "name": "Aeva Technologies Inc - Warrants (29/10/2024)"
    },
    {
      "symbol": "AEYE",
      "name": "AudioEye Inc"
    },
    {
      "symbol": "AEZS",
      "name": "Aeterna Zentaris Inc"
    },
    {
      "symbol": "AFAR",
      "name": "Aura FAT Projects Acquisition Corp - Class A"
    },
    {
      "symbol": "AFARU",
      "name": "Aura FAT Projects Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "AFARW",
      "name": "Aura FAT Projects Acquisition Corp - Warrants(31/03/2027)"
    },
    {
      "symbol": "AFB",
      "name": "AllianceBernstein National Municipal Income Fund Inc"
    },
    {
      "symbol": "AFBI",
      "name": "Affinity Bancshares Inc"
    },
    {
      "symbol": "AFCG",
      "name": "AFC Gamma Inc"
    },
    {
      "symbol": "AFG",
      "name": "American Financial Group Inc"
    },
    {
      "symbol": "AFGB",
      "name": "American Financial Group Inc"
    },
    {
      "symbol": "AFGC",
      "name": "American Financial Group Inc"
    },
    {
      "symbol": "AFGD",
      "name": "American Financial Group Inc"
    },
    {
      "symbol": "AFGE",
      "name": "American Financial Group Inc"
    },
    {
      "symbol": "AFIB",
      "name": "Acutus Medical Inc"
    },
    {
      "symbol": "AFIF",
      "name": "Anfield Universal Fixed Income ETF"
    },
    {
      "symbol": "AFJK",
      "name": "Aimei Health Technology Co Ltd"
    },
    {
      "symbol": "AFJKR",
      "name": "Aimei Health Technology Co Ltd"
    },
    {
      "symbol": "AFJKU",
      "name": "Aimei Health Technology Co Ltd - Units (1 1 Rights)"
    },
    {
      "symbol": "AFK",
      "name": "VANECK AFRICA INDEX ETF "
    },
    {
      "symbol": "AFL",
      "name": "Aflac Inc"
    },
    {
      "symbol": "AFLG",
      "name": "FIRST TRUST ACTIVE FACTOR LARGE CAP ETF "
    },
    {
      "symbol": "AFMC",
      "name": "FIRST TRUST ACTIVE FACTOR MID CAP ETF "
    },
    {
      "symbol": "AFMD",
      "name": "Affimed N.V."
    },
    {
      "symbol": "AFRI",
      "name": "Forafric Global PLC"
    },
    {
      "symbol": "AFRIW",
      "name": "Forafric Global PLC - Warrants (09/06/2027)"
    },
    {
      "symbol": "AFRM",
      "name": "Affirm Holdings Inc - Class A"
    },
    {
      "symbol": "AFSM",
      "name": "FIRST TRUST ACTIVE FACTOR SMALL CAP ETF "
    },
    {
      "symbol": "AFT",
      "name": "Apollo Senior Floating Rate Fund Inc"
    },
    {
      "symbol": "AFTY",
      "name": "Pacer CSOP FTSE China A50 ETF"
    },
    {
      "symbol": "AFYA",
      "name": "Afya Ltd - Class A"
    },
    {
      "symbol": "AG",
      "name": "First Majestic Silver Corporation"
    },
    {
      "symbol": "AGAE",
      "name": "Allied Gaming & Entertainment Inc"
    },
    {
      "symbol": "AGBA",
      "name": "AGBA Group Holding Ltd"
    },
    {
      "symbol": "AGBAW",
      "name": "AGBA Group Holding Ltd - Warrants (14/11/2027)"
    },
    {
      "symbol": "AGCO",
      "name": "AGCO Corp"
    },
    {
      "symbol": "AGD",
      "name": "abrdn Global Dynamic Dividend Fund"
    },
    {
      "symbol": "AGEN",
      "name": "Agenus Inc"
    },
    {
      "symbol": "AGFS",
      "name": "AgroFresh Solutions Inc"
    },
    {
      "symbol": "AGFY",
      "name": "Agrify Corp"
    },
    {
      "symbol": "AGG",
      "name": "iShares Core U.S. Aggregate Bond ETF"
    },
    {
      "symbol": "AGGH",
      "name": "Simplify Aggregate Bond ETF"
    },
    {
      "symbol": "AGGY",
      "name": "WISDOMTREE YIELD ENHANCED U.S. AGGREGATE BOND FUND "
    },
    {
      "symbol": "AGI",
      "name": "Alamos Gold Inc - Class A"
    },
    {
      "symbol": "AGIH",
      "name": "ISHARES INFLATION HEDGED U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "AGIO",
      "name": "Agios Pharmaceuticals Inc"
    },
    {
      "symbol": "AGL",
      "name": "Agilon Health Inc"
    },
    {
      "symbol": "AGM",
      "name": "Federal Agricultural Mortgage Corp - Class C"
    },
    {
      "symbol": "AGM-A",
      "name": "Federal Agricultural Mortgage Corp - Class A"
    },
    {
      "symbol": "AGM-P-C",
      "name": "Federal Agricultural Mortgage Corp"
    },
    {
      "symbol": "AGM-P-D",
      "name": "Federal Agricultural Mortgage Corp"
    },
    {
      "symbol": "AGM-P-E",
      "name": "Federal Agricultural Mortgage Corp"
    },
    {
      "symbol": "AGM-P-F",
      "name": "Federal Agricultural Mortgage Corp"
    },
    {
      "symbol": "AGM-P-G",
      "name": "Federal Agricultural Mortgage Corp"
    },
    {
      "symbol": "AGMH",
      "name": "AGM Group Holdings Inc - Class A"
    },
    {
      "symbol": "AGNC",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNCL",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNCM",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNCN",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNCO",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNCP",
      "name": "AGNC Investment Corp"
    },
    {
      "symbol": "AGNG",
      "name": "GLOBAL X AGING POPULATION ETF "
    },
    {
      "symbol": "AGO",
      "name": "Assured Guaranty Ltd"
    },
    {
      "symbol": "AGOV",
      "name": "ETC Gavekal Asia Pacific Government Bond ETF"
    },
    {
      "symbol": "AGOX",
      "name": "Adaptive Alpha Opportunities ETF"
    },
    {
      "symbol": "AGQ",
      "name": "ProShares Ultra Silver 2x Shares"
    },
    {
      "symbol": "AGR",
      "name": "Avangrid Inc"
    },
    {
      "symbol": "AGRH",
      "name": "ISHARES INTEREST RATE HEDGED U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "AGRI",
      "name": "AgriFORCE Growing Systems Ltd"
    },
    {
      "symbol": "AGRIW",
      "name": "AgriFORCE Growing Systems Ltd - Warrants (14/06/2026)"
    },
    {
      "symbol": "AGRO",
      "name": "Adecoagro S.A."
    },
    {
      "symbol": "AGRX",
      "name": "Agile Therapeutics Inc"
    },
    {
      "symbol": "AGS",
      "name": "PlayAGS Inc"
    },
    {
      "symbol": "AGTC",
      "name": "Applied Genetic Technologies Corp"
    },
    {
      "symbol": "AGTI",
      "name": "Agiliti Inc"
    },
    {
      "symbol": "AGX",
      "name": "Argan Inc"
    },
    {
      "symbol": "AGYS",
      "name": "Agilysys Inc"
    },
    {
      "symbol": "AGZ",
      "name": "iShares Agency Bond ETF"
    },
    {
      "symbol": "AGZD",
      "name": "WISDOMTREE INTEREST RATE HEDGED U.S. AGGREGATE BOND FUND "
    },
    {
      "symbol": "AHCO",
      "name": "AdaptHealth Corp"
    },
    {
      "symbol": "AHG",
      "name": "Akso Health Group"
    },
    {
      "symbol": "AHH",
      "name": "Armada Hoffler Properties Inc"
    },
    {
      "symbol": "AHH-P-A",
      "name": "Armada Hoffler Properties Inc"
    },
    {
      "symbol": "AHI",
      "name": "Advanced Health Intelligence Ltd"
    },
    {
      "symbol": "AHL-P-C",
      "name": "Aspen Insurance Holdings Limited 595 FixedtoFloating Rate Perpetual NonCumulative Preference Shares"
    },
    {
      "symbol": "AHL-P-D",
      "name": "Aspen Insurance Holdings Limited 5625 Perpetual NonCumulative Preference Shares"
    },
    {
      "symbol": "AHL-P-E",
      "name": "Aspen Insurance Hldgs"
    },
    {
      "symbol": "AHLT",
      "name": "American Beacon AHL Trend ETF"
    },
    {
      "symbol": "AHOY",
      "name": "NEWDAY OCEAN HEALTH ETF "
    },
    {
      "symbol": "AHR",
      "name": "American Healthcare REIT Inc"
    },
    {
      "symbol": "AHRNU",
      "name": "Ahren Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "AHT",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHT-P-D",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHT-P-F",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHT-P-G",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHT-P-H",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHT-P-I",
      "name": "Ashford Hospitality Trust Inc"
    },
    {
      "symbol": "AHYB",
      "name": "AMERICAN CENTURY SELECT HIGH YIELD ETF "
    },
    {
      "symbol": "AI",
      "name": "C3.ai Inc - Class A"
    },
    {
      "symbol": "AIA",
      "name": "iShares Asia 50 ETF"
    },
    {
      "symbol": "AIB",
      "name": "AIB Acquisition Corp - Class A"
    },
    {
      "symbol": "AIBBR",
      "name": "AIB Acquisition Corp"
    },
    {
      "symbol": "AIBBU",
      "name": "AIB Acquisition Corp - Units (1 Ord Share Class A & 1 Right)"
    },
    {
      "symbol": "AIEQ",
      "name": "AI Powered Equity ETF"
    },
    {
      "symbol": "AIF",
      "name": "Apollo Tactical Income Fund Inc"
    },
    {
      "symbol": "AIG",
      "name": "American International Group Inc"
    },
    {
      "symbol": "AIH",
      "name": "Aesthetic Medical International Holdings Group Ltd"
    },
    {
      "symbol": "AIHS",
      "name": "Senmiao Technology Ltd"
    },
    {
      "symbol": "AILE",
      "name": "iLearningEngines Holdings Inc - Class A"
    },
    {
      "symbol": "AILEW",
      "name": "iLearningEngines Holdings Inc - Warrants (16/04/2029)"
    },
    {
      "symbol": "AIM",
      "name": "AIM ImmunoTech Inc"
    },
    {
      "symbol": "AIMAU",
      "name": "Aimfinity Investment Corp I - Units (1 Ord Class A 1 Class 1 War & 1/2 Class 2 War)"
    },
    {
      "symbol": "AIMAW",
      "name": "Aimfinity Investment Corp I - Warrants - Class 1 (21/04/2027)"
    },
    {
      "symbol": "AIMBU",
      "name": "Aimfinity Investment Corp I - Units (1 Ord Cl A & 1/2 Wt Cl 2)"
    },
    {
      "symbol": "AIMD",
      "name": "Ainos Inc"
    },
    {
      "symbol": "AIMDW",
      "name": "Ainos Inc - Warrants (29/07/2027)"
    },
    {
      "symbol": "AIN",
      "name": "Albany International Corp - Class A"
    },
    {
      "symbol": "AINC",
      "name": "Ashford Inc"
    },
    {
      "symbol": "AIO",
      "name": "Virtus Artificial Intelligence & Technology Opportunities Fund"
    },
    {
      "symbol": "AIP",
      "name": "Arteris Inc"
    },
    {
      "symbol": "AIQ",
      "name": "Global X Artificial Intelligence & Technology ETF"
    },
    {
      "symbol": "AIR",
      "name": "AAR Corp"
    },
    {
      "symbol": "AIRC",
      "name": "Apartment Income REIT Corp - Class A"
    },
    {
      "symbol": "AIRE",
      "name": "reAlpha Tech Corp"
    },
    {
      "symbol": "AIRG",
      "name": "Airgain Inc"
    },
    {
      "symbol": "AIRI",
      "name": "Air Industries Group"
    },
    {
      "symbol": "AIRJ",
      "name": "Montana Technologies Corp Cl A"
    },
    {
      "symbol": "AIRJW",
      "name": "Montana Technologies Corp Wt Exp"
    },
    {
      "symbol": "AIRL",
      "name": "Themes Airlines ETF"
    },
    {
      "symbol": "AIRR",
      "name": "FIRST TRUST RBA AMERICAN INDUSTRIAL RENAISSANCE ETF "
    },
    {
      "symbol": "AIRS",
      "name": "Airsculpt Technologies Inc"
    },
    {
      "symbol": "AIRT",
      "name": "Air T Inc"
    },
    {
      "symbol": "AIRTP",
      "name": "Air T Inc"
    },
    {
      "symbol": "AISP",
      "name": "Airship AI Holdings Inc - Class A"
    },
    {
      "symbol": "AISPW",
      "name": "Airship AI Holdings Inc - Warrants (18/03/2026)"
    },
    {
      "symbol": "AIT",
      "name": "Applied Industrial Technologies Inc"
    },
    {
      "symbol": "AITR",
      "name": "AI Transportation Acquisition Corp"
    },
    {
      "symbol": "AITRR",
      "name": "AI Transportation Acquisition Corp"
    },
    {
      "symbol": "AITRU",
      "name": "AI Transportation Acquisition Corp - Units (1 1 Rights)"
    },
    {
      "symbol": "AIU",
      "name": "Meta Data Ltd"
    },
    {
      "symbol": "AIV",
      "name": "Apartment Investment & Management Co. - Class A"
    },
    {
      "symbol": "AIVI",
      "name": "WisdomTree International AI Enhanced Value Fund"
    },
    {
      "symbol": "AIVL",
      "name": "WisdomTree U.S. AI Enhanced Value Fund"
    },
    {
      "symbol": "AIXI",
      "name": "Xiao-I Corp"
    },
    {
      "symbol": "AIZ",
      "name": "Assurant Inc"
    },
    {
      "symbol": "AIZN",
      "name": "Assurant Inc"
    },
    {
      "symbol": "AJAN",
      "name": "Innovator Equity Defined Protection ETF - 2 Yr to January 2026"
    },
    {
      "symbol": "AJG",
      "name": "Arthur J. Gallagher & Company"
    },
    {
      "symbol": "AJX",
      "name": "Great Ajax Corp"
    },
    {
      "symbol": "AJXA",
      "name": "Great Ajax Corp"
    },
    {
      "symbol": "AKA",
      "name": "a.k.a. Brands Holding Corp"
    },
    {
      "symbol": "AKAM",
      "name": "Akamai Technologies Inc"
    },
    {
      "symbol": "AKAN",
      "name": "Akanda Corp"
    },
    {
      "symbol": "AKBA",
      "name": "Akebia Therapeutics Inc"
    },
    {
      "symbol": "AKLI",
      "name": "Akili Inc"
    },
    {
      "symbol": "AKO-A",
      "name": "Embotelladora Andina S.A."
    },
    {
      "symbol": "AKO-B",
      "name": "Embotelladora Andina S.A."
    },
    {
      "symbol": "AKR",
      "name": "Acadia Realty Trust"
    },
    {
      "symbol": "AKRO",
      "name": "Akero Therapeutics Inc"
    },
    {
      "symbol": "AKTS",
      "name": "Akoustis Technologies Inc"
    },
    {
      "symbol": "AKTX",
      "name": "Akari Therapeutics Plc"
    },
    {
      "symbol": "AKUS",
      "name": "Akouos Inc"
    },
    {
      "symbol": "AKYA",
      "name": "Akoya Biosciences Inc"
    },
    {
      "symbol": "AL",
      "name": "Air Lease Corp - Class A"
    },
    {
      "symbol": "AL-P-A",
      "name": "Air Lease Corp"
    },
    {
      "symbol": "ALAB",
      "name": "Astera Labs Inc"
    },
    {
      "symbol": "ALAI",
      "name": "Alger AI Enablers & Adopters ETF"
    },
    {
      "symbol": "ALAR",
      "name": "Alarum Technologies Ltd"
    },
    {
      "symbol": "ALB",
      "name": "Albemarle Corp"
    },
    {
      "symbol": "ALBT",
      "name": "Avalon GloboCare Corp"
    },
    {
      "symbol": "ALC",
      "name": "Alcon Inc"
    },
    {
      "symbol": "ALCC",
      "name": "AltC Acquisition Corp - Class A"
    },
    {
      "symbol": "ALCE",
      "name": "Alternus Clean Energy Inc - Class A"
    },
    {
      "symbol": "ALCO",
      "name": "Alico Inc"
    },
    {
      "symbol": "ALCY",
      "name": "Alchemy Investments Acquisition Corp 1 - Class A"
    },
    {
      "symbol": "ALCYU",
      "name": "Alchemy Investments Acquisition Corp 1 - Unit (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ALCYW",
      "name": "Alchemy Investments Acquisition Corp 1 - Warrants (30/11/2027)"
    },
    {
      "symbol": "ALDX",
      "name": "Aldeyra Therapeutics Inc"
    },
    {
      "symbol": "ALE",
      "name": "Allete Inc"
    },
    {
      "symbol": "ALEC",
      "name": "Alector Inc"
    },
    {
      "symbol": "ALEX",
      "name": "Alexander & Baldwin Inc"
    },
    {
      "symbol": "ALG",
      "name": "Alamo Group Inc"
    },
    {
      "symbol": "ALGM",
      "name": "Allegro Microsystems Inc"
    },
    {
      "symbol": "ALGN",
      "name": "Align Technology Inc"
    },
    {
      "symbol": "ALGS",
      "name": "Aligos Therapeutics Inc"
    },
    {
      "symbol": "ALGT",
      "name": "Allegiant Travel"
    },
    {
      "symbol": "ALHC",
      "name": "Alignment Healthcare Inc"
    },
    {
      "symbol": "ALIM",
      "name": "Alimera Sciences Inc"
    },
    {
      "symbol": "ALIT",
      "name": "Alight Inc - Class A"
    },
    {
      "symbol": "ALK",
      "name": "Alaska Air Group Inc"
    },
    {
      "symbol": "ALKS",
      "name": "Alkermes plc"
    },
    {
      "symbol": "ALKSV",
      "name": "Alkermes plc"
    },
    {
      "symbol": "ALKT",
      "name": "Alkami Technology Inc"
    },
    {
      "symbol": "ALL",
      "name": "Allstate Corp (The)"
    },
    {
      "symbol": "ALL-P-B",
      "name": "Allstate Corp (The)"
    },
    {
      "symbol": "ALL-P-H",
      "name": "Allstate Corp (The)"
    },
    {
      "symbol": "ALL-P-I",
      "name": "Allstate Corp (The)"
    },
    {
      "symbol": "ALL-P-J",
      "name": "Allstate Corp (The)"
    },
    {
      "symbol": "ALLE",
      "name": "Allegion plc"
    },
    {
      "symbol": "ALLG",
      "name": "Allego NV"
    },
    {
      "symbol": "ALLG-WS",
      "name": "Allego N.V. Warrants each exercisable for one Ordinary Share at an exercise price of 11.50 per share"
    },
    {
      "symbol": "ALLK",
      "name": "Allakos Inc"
    },
    {
      "symbol": "ALLO",
      "name": "Allogene Therapeutics Inc"
    },
    {
      "symbol": "ALLR",
      "name": "Allarity Therapeutics Inc"
    },
    {
      "symbol": "ALLT",
      "name": "Allot Ltd"
    },
    {
      "symbol": "ALLY",
      "name": "Ally Financial Inc"
    },
    {
      "symbol": "ALNT",
      "name": "Allient Inc"
    },
    {
      "symbol": "ALNY",
      "name": "Alnylam Pharmaceuticals Inc"
    },
    {
      "symbol": "ALOR",
      "name": "ALSP Orchid Acquisition Corp I - Class A"
    },
    {
      "symbol": "ALORU",
      "name": "ALSP Orchid Acquisition Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ALORW",
      "name": "ALSP Orchid Acquisition Corp I - Warrants (30/11/2028)"
    },
    {
      "symbol": "ALOT",
      "name": "AstroNova Inc"
    },
    {
      "symbol": "ALPN",
      "name": "Alpine Immune Sciences Inc"
    },
    {
      "symbol": "ALPP",
      "name": "Alpine 4 Holdings Inc - Class A"
    },
    {
      "symbol": "ALPS",
      "name": "Alpine Summit Energy Partners Inc"
    },
    {
      "symbol": "ALRM",
      "name": "Alarm.com Holdings Inc"
    },
    {
      "symbol": "ALRN",
      "name": "Aileron Therapeutics Inc"
    },
    {
      "symbol": "ALRS",
      "name": "Alerus Financial Corp"
    },
    {
      "symbol": "ALSA",
      "name": "Alpha Star Acquisition Corp"
    },
    {
      "symbol": "ALSAR",
      "name": "Alpha Star Acquisition Corp"
    },
    {
      "symbol": "ALSAU",
      "name": "Alpha Star Acquisition Corp - Units (1 1 Right 1 War)"
    },
    {
      "symbol": "ALSAW",
      "name": "Alpha Star Acquisition Corp - Warrants (13/12/2026)"
    },
    {
      "symbol": "ALSN",
      "name": "Allison Transmission Holdings Inc"
    },
    {
      "symbol": "ALT",
      "name": "Altimmune Inc"
    },
    {
      "symbol": "ALTG",
      "name": "Alta Equipment Group Inc - Class A"
    },
    {
      "symbol": "ALTG-P-A",
      "name": "Alta Equipment Group Inc"
    },
    {
      "symbol": "ALTI",
      "name": "AlTi Global Inc - Class A"
    },
    {
      "symbol": "ALTIW",
      "name": "AlTi Global Inc - Warrants(03/01/2028)"
    },
    {
      "symbol": "ALTL",
      "name": "Pacer Lunt Large Cap Alternator ETF"
    },
    {
      "symbol": "ALTM",
      "name": "Arcadium Lithium PLC"
    },
    {
      "symbol": "ALTO",
      "name": "Alto Ingredients Inc"
    },
    {
      "symbol": "ALTR",
      "name": "Altair Engineering Inc - Class A"
    },
    {
      "symbol": "ALTY",
      "name": "GLOBAL X ALTERNATIVE INCOME ETF "
    },
    {
      "symbol": "ALUM",
      "name": "USCF Aluminum Strategy Fund"
    },
    {
      "symbol": "ALUR",
      "name": "Allurion Technologies Inc"
    },
    {
      "symbol": "ALUR-WS",
      "name": "Allurion Technologies Inc - Warrants (31/07/2029)"
    },
    {
      "symbol": "ALV",
      "name": "Autoliv Inc"
    },
    {
      "symbol": "ALVO",
      "name": "Alvotech"
    },
    {
      "symbol": "ALVOW",
      "name": "Alvotech - Warrants(15/06/2027)"
    },
    {
      "symbol": "ALVR",
      "name": "AlloVir Inc"
    },
    {
      "symbol": "ALX",
      "name": "Alexander`s Inc"
    },
    {
      "symbol": "ALXO",
      "name": "Alx Oncology Holdings Inc"
    },
    {
      "symbol": "ALYAF",
      "name": "Alithya Group Inc - Class A - Class A (Sub Voting)"
    },
    {
      "symbol": "ALZN",
      "name": "Alzamend Neuro Inc"
    },
    {
      "symbol": "AM",
      "name": "Antero Midstream Corp"
    },
    {
      "symbol": "AMAL",
      "name": "Amalgamated Financial Corp"
    },
    {
      "symbol": "AMAO",
      "name": "American Acquisition Opportunity Inc - Class A"
    },
    {
      "symbol": "AMAOW",
      "name": "American Acquisition Opportunity Inc - Warrants (17/03/2026)"
    },
    {
      "symbol": "AMAT",
      "name": "Applied Materials Inc"
    },
    {
      "symbol": "AMAX",
      "name": "RH Hedged Multi-Asset Income ETF"
    },
    {
      "symbol": "AMBA",
      "name": "Ambarella Inc"
    },
    {
      "symbol": "AMBC",
      "name": "AMBAC Financial Group Inc"
    },
    {
      "symbol": "AMBI",
      "name": "Ambipar Emergency Response - Class A"
    },
    {
      "symbol": "AMBI-WS",
      "name": "Ambipar Emergency Response - Warrants (01/01/9999)"
    },
    {
      "symbol": "AMBO",
      "name": "Ambow Education Holding Ltd"
    },
    {
      "symbol": "AMBP",
      "name": "Ardagh Metal Packaging S.A."
    },
    {
      "symbol": "AMBP-WS",
      "name": "Ardagh Metal Packaging S.A. Warrants each exercisable for one Share at an exercise price of 11.50 per share"
    },
    {
      "symbol": "AMC",
      "name": "AMC Entertainment Holdings Inc - Class A"
    },
    {
      "symbol": "AMCR",
      "name": "Amcor Plc"
    },
    {
      "symbol": "AMCX",
      "name": "AMC Networks Inc - Class A"
    },
    {
      "symbol": "AMD",
      "name": "Advanced Micro Devices Inc"
    },
    {
      "symbol": "AMDL",
      "name": "GraniteShares 2x Long AMD Daily ETF"
    },
    {
      "symbol": "AMDS",
      "name": "GraniteShares 1x Short AMD Daily ETF"
    },
    {
      "symbol": "AMDY",
      "name": "Yieldmax AMD Option Income Strategy ETF"
    },
    {
      "symbol": "AME",
      "name": "Ametek Inc"
    },
    {
      "symbol": "AMED",
      "name": "Amedisys Inc"
    },
    {
      "symbol": "AMEH"
    },
    {
      "symbol": "AMG",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "AMGN",
      "name": "AMGEN Inc"
    },
    {
      "symbol": "AMH",
      "name": "American Homes 4 Rent - Class A"
    },
    {
      "symbol": "AMH-P-G",
      "name": "American Homes 4 Rent"
    },
    {
      "symbol": "AMH-P-H",
      "name": "American Homes 4 Rent"
    },
    {
      "symbol": "AMID",
      "name": "Argent Mid Cap ETF"
    },
    {
      "symbol": "AMIX",
      "name": "Autonomix Medical Inc"
    },
    {
      "symbol": "AMJ",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "AMJB",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "AMK",
      "name": "Assetmark Financial Holdings Inc"
    },
    {
      "symbol": "AMKR",
      "name": "AMKOR Technology Inc"
    },
    {
      "symbol": "AMLI",
      "name": "American Lithium Corp"
    },
    {
      "symbol": "AMLP",
      "name": "ALERIAN MLP ETF "
    },
    {
      "symbol": "AMLX",
      "name": "Amylyx Pharmaceuticals Inc"
    },
    {
      "symbol": "AMN",
      "name": "AMN Healthcare Services Inc"
    },
    {
      "symbol": "AMNA",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "AMND",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "AMOM",
      "name": "QRAFT AI Enhanced U.S. Large Cap Momentum ETF"
    },
    {
      "symbol": "AMP",
      "name": "Ameriprise Financial Inc"
    },
    {
      "symbol": "AMPD",
      "name": "CNIC ICE U.S. Carbon Neutral Power Futures Index ETF"
    },
    {
      "symbol": "AMPG",
      "name": "Amplitech Group Inc"
    },
    {
      "symbol": "AMPGW",
      "name": "Amplitech Group Inc - Warrants (01/01/2026)"
    },
    {
      "symbol": "AMPH",
      "name": "Amphastar Pharmaceuticals Inc"
    },
    {
      "symbol": "AMPL",
      "name": "Amplitude Inc - Class A"
    },
    {
      "symbol": "AMPS",
      "name": "Altus Power Inc - Class A"
    },
    {
      "symbol": "AMPX",
      "name": "Amprius Technologies Inc"
    },
    {
      "symbol": "AMPX-WS",
      "name": "Amprius Technologies Inc - Warrants Cl 1 (01/01/9999)"
    },
    {
      "symbol": "AMPY",
      "name": "Amplify Energy Corp"
    },
    {
      "symbol": "AMR",
      "name": "Alpha Metallurgical Resources Inc"
    },
    {
      "symbol": "AMRC",
      "name": "Ameresco Inc - Class A"
    },
    {
      "symbol": "AMRK",
      "name": "A-Mark Precious Metals Inc"
    },
    {
      "symbol": "AMRN",
      "name": "Amarin Corp"
    },
    {
      "symbol": "AMRS"
    },
    {
      "symbol": "AMRX",
      "name": "Amneal Pharmaceuticals Inc - Class A"
    },
    {
      "symbol": "AMS",
      "name": "American Shared Hospital Services"
    },
    {
      "symbol": "AMSC",
      "name": "American Superconductor Corp"
    },
    {
      "symbol": "AMSF",
      "name": "Amerisafe Inc"
    },
    {
      "symbol": "AMST",
      "name": "Amesite Inc"
    },
    {
      "symbol": "AMSWA",
      "name": "American Software Inc - Class A"
    },
    {
      "symbol": "AMT",
      "name": "American Tower Corp"
    },
    {
      "symbol": "AMTB",
      "name": "Amerant Bancorp Inc - Class A"
    },
    {
      "symbol": "AMTD",
      "name": "AMTD IDEA Group"
    },
    {
      "symbol": "AMTR",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "AMTX",
      "name": "Aemetis Inc"
    },
    {
      "symbol": "AMUB",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "AMV",
      "name": "Nxu Inc - Class A"
    },
    {
      "symbol": "AMWD",
      "name": "American Woodmark Corp"
    },
    {
      "symbol": "AMWL",
      "name": "American Well Corporation - Class A"
    },
    {
      "symbol": "AMX",
      "name": "America Movil S.A.B.DE C.V."
    },
    {
      "symbol": "AMZA",
      "name": "INFRACAP MLP ETF "
    },
    {
      "symbol": "AMZD",
      "name": "DIREXION DAILY AMZN BEAR 1X SHARES "
    },
    {
      "symbol": "AMZN",
      "name": "Amazon.com Inc"
    },
    {
      "symbol": "AMZP",
      "name": "Kurv Yield Premium Strategy Amazon (AMZN) ETF"
    },
    {
      "symbol": "AMZU",
      "name": "DIREXION DAILY AMZN BULL 1.5X SHARES "
    },
    {
      "symbol": "AMZY",
      "name": "YIELDMAX AMZN OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "AMZZ",
      "name": "GraniteShares 2x Long AMZN Daily ETF"
    },
    {
      "symbol": "AN",
      "name": "Autonation Inc"
    },
    {
      "symbol": "ANAB",
      "name": "AnaptysBio Inc"
    },
    {
      "symbol": "ANDE",
      "name": "Andersons Inc"
    },
    {
      "symbol": "ANEB",
      "name": "Anebulo Pharmaceuticals Inc"
    },
    {
      "symbol": "ANET",
      "name": "Arista Networks Inc"
    },
    {
      "symbol": "ANEW",
      "name": "PROSHARES MSCI TRANSFORMATIONAL CHANGES ETF "
    },
    {
      "symbol": "ANF",
      "name": "Abercrombie & Fitch Co. - Class A"
    },
    {
      "symbol": "ANGH",
      "name": "Anghami Inc"
    },
    {
      "symbol": "ANGHW",
      "name": "Anghami Inc - Warrants (28/01/2027)"
    },
    {
      "symbol": "ANGI",
      "name": "Angi Inc - Class A"
    },
    {
      "symbol": "ANGL",
      "name": "VanEck Fallen Angel High Yield Bond ETF"
    },
    {
      "symbol": "ANGO",
      "name": "Angiodynamic Inc"
    },
    {
      "symbol": "ANIK",
      "name": "Anika Therapeutics Inc"
    },
    {
      "symbol": "ANIP",
      "name": "ANI Pharmaceuticals Inc"
    },
    {
      "symbol": "ANIX",
      "name": "Anixa Biosciences Inc"
    },
    {
      "symbol": "ANL",
      "name": "Adlai Nortye Ltd"
    },
    {
      "symbol": "ANNX",
      "name": "Annexon Inc"
    },
    {
      "symbol": "ANPC",
      "name": "AnPac Bio-Medical Science Co Ltd"
    },
    {
      "symbol": "ANRO",
      "name": "Alto Neuroscience Inc"
    },
    {
      "symbol": "ANSC",
      "name": "Agriculture & Natural Solutions Acquisition Corp - Class A"
    },
    {
      "symbol": "ANSCU",
      "name": "Agriculture & Natural Solutions Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ANSCW",
      "name": "Agriculture & Natural Solutions Acquisition Corp - Warrants (03/10/2028)"
    },
    {
      "symbol": "ANSS",
      "name": "Ansys Inc"
    },
    {
      "symbol": "ANTE",
      "name": "AirNet Technology Inc"
    },
    {
      "symbol": "ANTX",
      "name": "AN2 Therapeutics Inc"
    },
    {
      "symbol": "ANVS",
      "name": "Annovis Bio Inc"
    },
    {
      "symbol": "ANY",
      "name": "Sphere 3D Corp"
    },
    {
      "symbol": "AOA",
      "name": "iShares Core Aggressive Allocation ETF"
    },
    {
      "symbol": "AOD",
      "name": "abrdn Total Dynamic Dividend Fund"
    },
    {
      "symbol": "AOGO",
      "name": "Arogo Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "AOGOW",
      "name": "Arogo Capital Acquisition Corp - Warrants (23/12/2026)"
    },
    {
      "symbol": "AOHY",
      "name": "Angel Oak High Yield Opportunities ETF"
    },
    {
      "symbol": "AOK",
      "name": "ISHARES CORE CONSERVATIVE ALLOCATION ETF "
    },
    {
      "symbol": "AOM",
      "name": "ISHARES CORE MODERATE ALLOCATION ETF "
    },
    {
      "symbol": "AOMR",
      "name": "Angel Oak Mortgage REIT Inc"
    },
    {
      "symbol": "AON",
      "name": "Aon plc. - Class A"
    },
    {
      "symbol": "AONC",
      "name": "American Oncology Network Inc - Class A"
    },
    {
      "symbol": "AONCW",
      "name": "American Oncology Network Inc - Warrants (21/09/2028)"
    },
    {
      "symbol": "AOR",
      "name": "ISHARES CORE GROWTH ALLOCATION ETF "
    },
    {
      "symbol": "AORT",
      "name": "Artivion Inc"
    },
    {
      "symbol": "AOS",
      "name": "A.O. Smith Corp"
    },
    {
      "symbol": "AOSL",
      "name": "Alpha & Omega Semiconductor Ltd"
    },
    {
      "symbol": "AOTG",
      "name": "AOT Growth and Innovation ETF"
    },
    {
      "symbol": "AOUT",
      "name": "American Outdoor Brands Inc"
    },
    {
      "symbol": "AP",
      "name": "Ampco-Pittsburgh Corp"
    },
    {
      "symbol": "AP-WS",
      "name": "Ampco-Pittsburgh Corp - Warrants (01/08/2025)"
    },
    {
      "symbol": "APA",
      "name": "APA Corporation"
    },
    {
      "symbol": "APAM",
      "name": "Artisan Partners Asset Management Inc - Class A"
    },
    {
      "symbol": "APCA",
      "name": "AP Acquisition Corp - Class A"
    },
    {
      "symbol": "APCA-U",
      "name": "AP Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "APCA-WS",
      "name": "AP Acquisition Corp - Warrants (07/12/2026)"
    },
    {
      "symbol": "APCB",
      "name": "ACTIVEPASSIVE CORE BOND ETF "
    },
    {
      "symbol": "APCX",
      "name": "AppTech Payments Corp"
    },
    {
      "symbol": "APCXW",
      "name": "AppTech Payments Corp - Warrants (17/12/2026)"
    },
    {
      "symbol": "APD",
      "name": "Air Products & Chemicals Inc"
    },
    {
      "symbol": "APDN",
      "name": "Applied Dna Sciences Inc"
    },
    {
      "symbol": "APEI",
      "name": "American Public Education Inc"
    },
    {
      "symbol": "APG",
      "name": "APi Group Corporation"
    },
    {
      "symbol": "APGB",
      "name": "Apollo Strategic Growth Capital II - Class A"
    },
    {
      "symbol": "APGB-U",
      "name": "Apollo Strategic Growth Capital II - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "APGB-WS",
      "name": "Apollo Strategic Growth Capital II - Warrants (12/02/2028)"
    },
    {
      "symbol": "APGE",
      "name": "Apogee Therapeutics Inc"
    },
    {
      "symbol": "APH",
      "name": "Amphenol Corp - Class A"
    },
    {
      "symbol": "API",
      "name": "Agora Inc"
    },
    {
      "symbol": "APIE",
      "name": "ACTIVEPASSIVE INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "APLD",
      "name": "Applied Digital Corporation"
    },
    {
      "symbol": "APLE",
      "name": "Apple Hospitality REIT Inc"
    },
    {
      "symbol": "APLM",
      "name": "Apollomics Inc - Class A"
    },
    {
      "symbol": "APLMW",
      "name": "Apollomics Inc - Warrants (01/04/2028)"
    },
    {
      "symbol": "APLS",
      "name": "Apellis Pharmaceuticals Inc"
    },
    {
      "symbol": "APLT",
      "name": "Applied Therapeutics Inc"
    },
    {
      "symbol": "APLY",
      "name": "YIELDMAX AAPL OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "APM",
      "name": "Aptorum Group Ltd - Class A"
    },
    {
      "symbol": "APMIU",
      "name": "AxonPrime Infrastructure Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "APMU",
      "name": "ACTIVEPASSIVE INTERMEDIATE MUNICIPAL BOND ETF "
    },
    {
      "symbol": "APO",
      "name": "Apollo Global Management Inc - Class A (New)"
    },
    {
      "symbol": "APO-P-A",
      "name": "Apollo Global Management Inc"
    },
    {
      "symbol": "APOG",
      "name": "Apogee Enterprises Inc"
    },
    {
      "symbol": "APOS",
      "name": "Apollo Global Management Inc"
    },
    {
      "symbol": "APP",
      "name": "Applovin Corp - Class A"
    },
    {
      "symbol": "APPF",
      "name": "Appfolio Inc - Class A"
    },
    {
      "symbol": "APPN",
      "name": "Appian Corp - Class A"
    },
    {
      "symbol": "APPS",
      "name": "Digital Turbine Inc"
    },
    {
      "symbol": "APRD",
      "name": "Innovator Premium Income 10 Barrier ETF - April"
    },
    {
      "symbol": "APRE",
      "name": "Aprea Therapeutics Inc"
    },
    {
      "symbol": "APRH",
      "name": "Innovator Premium Income 20 Barrier ETF - April"
    },
    {
      "symbol": "APRJ",
      "name": "Innovator Premium Income 30 Barrier ETF - April"
    },
    {
      "symbol": "APRN",
      "name": "Blue Apron Holdings Inc - Class A"
    },
    {
      "symbol": "APRP",
      "name": "PGIM US Large-Cap Buffer 12 ETF - April"
    },
    {
      "symbol": "APRQ",
      "name": "Innovator Premium Income 40 Barrier ETF - April"
    },
    {
      "symbol": "APRT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 APR ETF "
    },
    {
      "symbol": "APRW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 APR ETF "
    },
    {
      "symbol": "APRZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (APRIL) ETF "
    },
    {
      "symbol": "APT",
      "name": "Alpha Pro Tech Ltd"
    },
    {
      "symbol": "APTO",
      "name": "Aptose Biosciences Inc"
    },
    {
      "symbol": "APTV",
      "name": "Aptiv PLC"
    },
    {
      "symbol": "APUE",
      "name": "ACTIVEPASSIVE U.S. EQUITY ETF "
    },
    {
      "symbol": "APVO",
      "name": "Aptevo Therapeutics Inc"
    },
    {
      "symbol": "APWC",
      "name": "Asia Pacific Wire & Cable"
    },
    {
      "symbol": "APXI",
      "name": "APx Acquisition Corp I - Class A"
    },
    {
      "symbol": "APXIU",
      "name": "APx Acquisition Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "APXIW",
      "name": "APx Acquisition Corp I - Warrants (30/11/2026)"
    },
    {
      "symbol": "APYX",
      "name": "Apyx Medical Corp"
    },
    {
      "symbol": "AQB",
      "name": "AquaBounty Technologies Inc"
    },
    {
      "symbol": "AQMS",
      "name": "Aqua Metals Inc"
    },
    {
      "symbol": "AQN",
      "name": "Algonquin Power & Utilities Corp"
    },
    {
      "symbol": "AQNA",
      "name": "Algonquin Power & Utilities Corp"
    },
    {
      "symbol": "AQNB",
      "name": "Algonquin Power & Utilities Corp"
    },
    {
      "symbol": "AQNU",
      "name": "Algonquin Power & Utilities Corp"
    },
    {
      "symbol": "AQST",
      "name": "Aquestive Therapeutics Inc"
    },
    {
      "symbol": "AQU",
      "name": "Aquaron Acquisition Corp"
    },
    {
      "symbol": "AQUNR",
      "name": "Aquaron Acquisition Corp"
    },
    {
      "symbol": "AQUNU",
      "name": "Aquaron Acquisition Corp - Units (1 &1 Rights)"
    },
    {
      "symbol": "AQWA",
      "name": "GLOBAL X CLEAN WATER ETF "
    },
    {
      "symbol": "AR",
      "name": "Antero Resources Corp"
    },
    {
      "symbol": "ARAY",
      "name": "Accuray Inc"
    },
    {
      "symbol": "ARB",
      "name": "AltShares Merger Arbitrage ETF"
    },
    {
      "symbol": "ARBB",
      "name": "ARB IOT Group Ltd"
    },
    {
      "symbol": "ARBE",
      "name": "Arbe Robotics Ltd"
    },
    {
      "symbol": "ARBEW",
      "name": "Arbe Robotics Ltd - Warrants (07/10/2026)"
    },
    {
      "symbol": "ARBGU",
      "name": "Aequi Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "ARBK",
      "name": "Argo Blockchain Plc"
    },
    {
      "symbol": "ARBKL",
      "name": "Argo Blockchain Plc"
    },
    {
      "symbol": "ARC",
      "name": "ARC Document Solutions Inc"
    },
    {
      "symbol": "ARCB",
      "name": "ArcBest Corp"
    },
    {
      "symbol": "ARCC",
      "name": "Ares Capital Corp"
    },
    {
      "symbol": "ARCH",
      "name": "Arch Resources Inc - Class A"
    },
    {
      "symbol": "ARCK",
      "name": "Arbor Rapha Capital Bioholdings Corp I - Class A"
    },
    {
      "symbol": "ARCKU",
      "name": "Arbor Rapha Capital Bioholdings Corp I - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "ARCKW",
      "name": "Arbor Rapha Capital Bioholdings Corp I - Warrants (31/10/2028)"
    },
    {
      "symbol": "ARCM",
      "name": "ARROW RESERVE CAPITAL MANAGEMENT ETF "
    },
    {
      "symbol": "ARCO",
      "name": "Arcos Dorados Holdings Inc - Class A"
    },
    {
      "symbol": "ARCT",
      "name": "Arcturus Therapeutics Holdings Inc"
    },
    {
      "symbol": "ARDC",
      "name": "Ares Dynamic Credit Allocation Fund Inc"
    },
    {
      "symbol": "ARDX",
      "name": "Ardelyx Inc"
    },
    {
      "symbol": "ARE",
      "name": "Alexandria Real Estate Equities Inc"
    },
    {
      "symbol": "AREB",
      "name": "American Rebel Holdings Inc"
    },
    {
      "symbol": "AREBW",
      "name": "American Rebel Holdings Inc - Warrants (21/01/2027)"
    },
    {
      "symbol": "AREC",
      "name": "American Resources Corporation - Class A"
    },
    {
      "symbol": "AREN",
      "name": "Arena Group Holdings Inc (The)"
    },
    {
      "symbol": "ARES",
      "name": "Ares Management Corp - Class A"
    },
    {
      "symbol": "ARGD",
      "name": "Argo Group US Inc"
    },
    {
      "symbol": "ARGO",
      "name": "Argo Group International Holdings Ltd"
    },
    {
      "symbol": "ARGO-P-A",
      "name": "Argo Group International Holdings Ltd"
    },
    {
      "symbol": "ARGT",
      "name": "GLOBAL X MSCI ARGENTINA ETF "
    },
    {
      "symbol": "ARGU",
      "name": "Argus Capital Corp - Class A"
    },
    {
      "symbol": "ARGUU",
      "name": "Argus Capital Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "ARGUW",
      "name": "Argus Capital Corp - Warrants (31/08/2028)"
    },
    {
      "symbol": "ARGX",
      "name": "Argen X SE"
    },
    {
      "symbol": "ARHS",
      "name": "Arhaus Inc Class A"
    },
    {
      "symbol": "ARI",
      "name": "Apollo Commercial Real Estate Finance Inc"
    },
    {
      "symbol": "ARIS",
      "name": "Aris Water Solutions Inc - Class A"
    },
    {
      "symbol": "ARKA",
      "name": "ARK 21Shares Active Bitcoin Futures Strategy ETF"
    },
    {
      "symbol": "ARKB",
      "name": "ARK 21Shares Bitcoin ETF"
    },
    {
      "symbol": "ARKC",
      "name": "ARK 21Shares Active On-Chain Bitcoin Strategy ETF"
    },
    {
      "symbol": "ARKD",
      "name": "ARK 21Shares Blockchain and Digital Economy Innovation ETF"
    },
    {
      "symbol": "ARKF",
      "name": "ARK FINTECH INNOVATION ETF "
    },
    {
      "symbol": "ARKG",
      "name": "ARK GENOMIC REVOLUTION ETF "
    },
    {
      "symbol": "ARKK",
      "name": "ARK INNOVATION ETF "
    },
    {
      "symbol": "ARKO",
      "name": "ARKO Corp - Class A"
    },
    {
      "symbol": "ARKQ",
      "name": "ARK AUTONOMOUS TECHNOLOGY & ROBOTICS ETF "
    },
    {
      "symbol": "ARKR",
      "name": "Ark Restaurants Corp"
    },
    {
      "symbol": "ARKW",
      "name": "ARK NEXT GENERATION INTERNET ETF "
    },
    {
      "symbol": "ARKX",
      "name": "ARK SPACE EXPLORATION & INNOVATION ETF "
    },
    {
      "symbol": "ARKY",
      "name": "ARK 21Shares Active Bitcoin Ethereum Strategy ETF"
    },
    {
      "symbol": "ARKZ",
      "name": "ARK 21Shares Active Ethereum Futures Strategy ETF"
    },
    {
      "symbol": "ARL",
      "name": "American Realty Investors Inc"
    },
    {
      "symbol": "ARLO",
      "name": "Arlo Technologies Inc"
    },
    {
      "symbol": "ARLP",
      "name": "Alliance Resource Partners LP"
    },
    {
      "symbol": "ARLU",
      "name": "AllianzIM U.S. Equity Buffer15 Uncapped Apr ETF"
    },
    {
      "symbol": "ARM",
      "name": "Arm Holdings plc."
    },
    {
      "symbol": "ARMK",
      "name": "Aramark"
    },
    {
      "symbol": "ARMK-W",
      "name": "Aramark WhenIssued"
    },
    {
      "symbol": "ARMN",
      "name": "Aris Mining Corp"
    },
    {
      "symbol": "ARMP",
      "name": "Armata Pharmaceuticals Inc"
    },
    {
      "symbol": "AROC",
      "name": "Archrock Inc"
    },
    {
      "symbol": "AROW",
      "name": "Arrow Financial Corp"
    },
    {
      "symbol": "ARP",
      "name": "PMV ADAPTIVE RISK PARITY ETF "
    },
    {
      "symbol": "ARQ",
      "name": "Arq Inc"
    },
    {
      "symbol": "ARQQ",
      "name": "Arqit Quantum Inc"
    },
    {
      "symbol": "ARQQW",
      "name": "Arqit Quantum Inc - Warrants (02/11/2026)"
    },
    {
      "symbol": "ARQT",
      "name": "Arcutis Biotherapeutics Inc"
    },
    {
      "symbol": "ARR",
      "name": "ARMOUR Residential REIT Inc"
    },
    {
      "symbol": "ARR-P-C",
      "name": "ARMOUR Residential REIT Inc"
    },
    {
      "symbol": "ARRY",
      "name": "Array Technologies Inc"
    },
    {
      "symbol": "ARTE",
      "name": "Artemis Strategic Investment Corp - Class A"
    },
    {
      "symbol": "ARTEU",
      "name": "Artemis Strategic Investment Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "ARTL",
      "name": "Artelo Biosciences Inc"
    },
    {
      "symbol": "ARTLW",
      "name": "Artelo Biosciences Inc - Warrants (18/06/2024)"
    },
    {
      "symbol": "ARTNA",
      "name": "Artesian Resources Corp - Class A"
    },
    {
      "symbol": "ARTW",
      "name": "Art`s-way Manufacturing Co. Inc"
    },
    {
      "symbol": "ARVN",
      "name": "Arvinas Inc"
    },
    {
      "symbol": "ARVR",
      "name": "FIRST TRUST INDXX METAVERSE ETF "
    },
    {
      "symbol": "ARW",
      "name": "Arrow Electronics Inc"
    },
    {
      "symbol": "ARWR",
      "name": "Arrowhead Pharmaceuticals Inc"
    },
    {
      "symbol": "ARYD",
      "name": "Arya Sciences Acquisition Corp IV - Class A"
    },
    {
      "symbol": "AS",
      "name": "Amer Sports Inc"
    },
    {
      "symbol": "ASA",
      "name": "ASA Gold and Precious Metals Ltd"
    },
    {
      "symbol": "ASAI",
      "name": "Sendas Distribuidora S.A."
    },
    {
      "symbol": "ASAN",
      "name": "Asana Inc - Class A"
    },
    {
      "symbol": "ASB",
      "name": "Associated Banc-Corp"
    },
    {
      "symbol": "ASB-P-E",
      "name": "Associated Banc-Corp"
    },
    {
      "symbol": "ASB-P-F",
      "name": "Associated Banc-Corp"
    },
    {
      "symbol": "ASBA",
      "name": "Associated Banc-Corp"
    },
    {
      "symbol": "ASC",
      "name": "Ardmore Shipping Corp"
    },
    {
      "symbol": "ASCB",
      "name": "A SPAC II Acquisition Corp - Class A"
    },
    {
      "symbol": "ASCBR",
      "name": "A SPAC II Acquisition Corp"
    },
    {
      "symbol": "ASCBU",
      "name": "A SPAC II Acquisition Corp - Units (1 Ord Class A 1/2 War & 1 Right)"
    },
    {
      "symbol": "ASCBW",
      "name": "A SPAC II Acquisition Corp - Warrants (15/10/2026)"
    },
    {
      "symbol": "ASEA",
      "name": "GLOBAL X FTSE SOUTHEAST ASIA ETF "
    },
    {
      "symbol": "ASET",
      "name": "FLEXSHARES REAL ASSETS ALLOCATION INDEX FUND "
    },
    {
      "symbol": "ASG",
      "name": "Liberty All-Star Growth Fund Inc"
    },
    {
      "symbol": "ASGI",
      "name": "abrdn Global Infrastructure Income Fund"
    },
    {
      "symbol": "ASGN",
      "name": "ASGN Inc"
    },
    {
      "symbol": "ASH",
      "name": "Ashland Inc"
    },
    {
      "symbol": "ASHR",
      "name": "Xtrackers Harvest CSI 300 China A-Shares ETF"
    },
    {
      "symbol": "ASHS",
      "name": "XTRACKERS HARVEST CSI 500 CHINA A-SHARES SMALL CAP ETF "
    },
    {
      "symbol": "ASIA",
      "name": "MATTHEWS PACIFIC TIGER ACTIVE ETF "
    },
    {
      "symbol": "ASIX",
      "name": "AdvanSix Inc"
    },
    {
      "symbol": "ASLE",
      "name": "AerSale Corp"
    },
    {
      "symbol": "ASLN",
      "name": "ASLAN Pharmaceuticals Ltd"
    },
    {
      "symbol": "ASM",
      "name": "Avino Silver & Gold Mines Ltd"
    },
    {
      "symbol": "ASMB",
      "name": "Assembly Biosciences Inc"
    },
    {
      "symbol": "ASML",
      "name": "ASML Holding NV"
    },
    {
      "symbol": "ASND",
      "name": "Ascendis Pharma A/S"
    },
    {
      "symbol": "ASNS",
      "name": "Actelis Networks Inc"
    },
    {
      "symbol": "ASO",
      "name": "Academy Sports and Outdoors Inc"
    },
    {
      "symbol": "ASPA",
      "name": "Abri SPAC I Inc"
    },
    {
      "symbol": "ASPI",
      "name": "ASP Isotopes Inc"
    },
    {
      "symbol": "ASPN",
      "name": "Aspen Aerogels Inc"
    },
    {
      "symbol": "ASPS",
      "name": "Altisource Portfolio Solutions S.A."
    },
    {
      "symbol": "ASPY",
      "name": "ASYMmetric Smart S&P 500 ETF"
    },
    {
      "symbol": "ASR",
      "name": "Grupo Aeroportuario Del Sureste S.A."
    },
    {
      "symbol": "ASRT",
      "name": "Assertio Holdings Inc"
    },
    {
      "symbol": "ASRV",
      "name": "Ameriserv Financial Inc"
    },
    {
      "symbol": "ASST",
      "name": "Asset Entities Inc - Class B"
    },
    {
      "symbol": "ASTC",
      "name": "Astrotech Corp"
    },
    {
      "symbol": "ASTE",
      "name": "Astec Industries Inc"
    },
    {
      "symbol": "ASTH",
      "name": "Apollo Medical Holdings Inc"
    },
    {
      "symbol": "ASTI",
      "name": "Ascent Solar Technologies Inc"
    },
    {
      "symbol": "ASTL",
      "name": "Algoma Steel Group Inc"
    },
    {
      "symbol": "ASTLW",
      "name": "Algoma Steel Group Inc - Warrants (19/10/2026)"
    },
    {
      "symbol": "ASTR",
      "name": "Astra Space Inc - Class A"
    },
    {
      "symbol": "ASTS",
      "name": "AST SpaceMobile Inc - Class A"
    },
    {
      "symbol": "ASTSW",
      "name": "AST SpaceMobile Inc - Warrants (06/04/2026)"
    },
    {
      "symbol": "ASUR",
      "name": "Asure Software Inc"
    },
    {
      "symbol": "ASX",
      "name": "ASE Technology Holding Co.Ltd"
    },
    {
      "symbol": "ASXC",
      "name": "Asensus Surgical Inc"
    },
    {
      "symbol": "ASYS",
      "name": "Amtech Systems Inc"
    },
    {
      "symbol": "ATAI",
      "name": "ATAI Life Sciences N.V."
    },
    {
      "symbol": "ATAT",
      "name": "Atour Lifestyle Holdings Ltd"
    },
    {
      "symbol": "ATCH",
      "name": "AtlasClear Holdings Inc"
    },
    {
      "symbol": "ATCO-P-D",
      "name": "Atlas Corp"
    },
    {
      "symbol": "ATCO-P-H",
      "name": "Atlas Corp"
    },
    {
      "symbol": "ATCOL",
      "name": "Atlas Corp"
    },
    {
      "symbol": "ATEC",
      "name": "Alphatec Holdings Inc"
    },
    {
      "symbol": "ATEK",
      "name": "Athena Technology Acquisition Corp II - Class A"
    },
    {
      "symbol": "ATEK-U",
      "name": "Athena Technology Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "ATEK-WS",
      "name": "Athena Technology Acquisition Corp II - Warrants (01/01/9999)"
    },
    {
      "symbol": "ATEN",
      "name": "A10 Networks Inc"
    },
    {
      "symbol": "ATER",
      "name": "Aterian Inc"
    },
    {
      "symbol": "ATEST-A",
      "name": "ATEST.A"
    },
    {
      "symbol": "ATEST-B",
      "name": "ATEST.B"
    },
    {
      "symbol": "ATEST-C",
      "name": "ATESTC"
    },
    {
      "symbol": "ATEST-G",
      "name": "ATESTG"
    },
    {
      "symbol": "ATEST-H",
      "name": "ATEST.H"
    },
    {
      "symbol": "ATEST-L",
      "name": "ATEST.L"
    },
    {
      "symbol": "ATEX",
      "name": "Anterix Inc"
    },
    {
      "symbol": "ATFV",
      "name": "ALGER 35 ETF "
    },
    {
      "symbol": "ATGE",
      "name": "Adtalem Global Education Inc"
    },
    {
      "symbol": "ATGL",
      "name": "Alpha Technology Group Ltd"
    },
    {
      "symbol": "ATH-P-A",
      "name": "Athene Holding Ltd"
    },
    {
      "symbol": "ATH-P-C",
      "name": "Athene Holding Ltd"
    },
    {
      "symbol": "ATH-P-D",
      "name": "Athene Holding Ltd"
    },
    {
      "symbol": "ATH-P-E",
      "name": "Athene Holding Ltd"
    },
    {
      "symbol": "ATHA",
      "name": "Athira Pharma Inc"
    },
    {
      "symbol": "ATHE",
      "name": "Alterity Therapeutics Ltd"
    },
    {
      "symbol": "ATHM",
      "name": "Autohome Inc"
    },
    {
      "symbol": "ATHS",
      "name": "Athene Holding Ltd"
    },
    {
      "symbol": "ATI",
      "name": "ATI Inc"
    },
    {
      "symbol": "ATIF",
      "name": "ATIF Holdings Ltd"
    },
    {
      "symbol": "ATIP",
      "name": "ATI Physical Therapy Inc - Class A"
    },
    {
      "symbol": "ATKR",
      "name": "Atkore Inc"
    },
    {
      "symbol": "ATLC",
      "name": "Atlanticus Holdings Corp"
    },
    {
      "symbol": "ATLCL",
      "name": "Atlanticus Holdings Corp"
    },
    {
      "symbol": "ATLCP",
      "name": "Atlanticus Holdings Corp"
    },
    {
      "symbol": "ATLCZ",
      "name": "Atlanticus Holdings Corp"
    },
    {
      "symbol": "ATLO",
      "name": "Ames National Corp"
    },
    {
      "symbol": "ATMC",
      "name": "AlphaTime Acquisition Corp"
    },
    {
      "symbol": "ATMCR",
      "name": "AlphaTime Acquisition Corp"
    },
    {
      "symbol": "ATMCU",
      "name": "AlphaTime Acquisition Corp - Units (1 Ord & 1 War & 1 Right)"
    },
    {
      "symbol": "ATMCW",
      "name": "AlphaTime Acquisition Corp - Warrants (01/03/2028)"
    },
    {
      "symbol": "ATMP",
      "name": "Barclays ETN Select MLP ETN"
    },
    {
      "symbol": "ATMU",
      "name": "Atmus Filtration Technologies Inc"
    },
    {
      "symbol": "ATMV",
      "name": "AlphaVest Acquisition Corp"
    },
    {
      "symbol": "ATMVR",
      "name": "AlphaVest Acquisition Corp"
    },
    {
      "symbol": "ATMVU",
      "name": "AlphaVest Acquisition Corp - Units (1 Ord & 1 Right)"
    },
    {
      "symbol": "ATNF",
      "name": "180 Life Sciences Corp"
    },
    {
      "symbol": "ATNFW",
      "name": "180 Life Sciences Corp - Warrants (07/11/2025)"
    },
    {
      "symbol": "ATNI",
      "name": "ATN International Inc"
    },
    {
      "symbol": "ATNM",
      "name": "Actinium Pharmaceuticals Inc"
    },
    {
      "symbol": "ATO",
      "name": "Atmos Energy Corp"
    },
    {
      "symbol": "ATOM",
      "name": "Atomera Inc"
    },
    {
      "symbol": "ATOS",
      "name": "Atossa Therapeutics Inc"
    },
    {
      "symbol": "ATPC",
      "name": "Agape ATP Corp"
    },
    {
      "symbol": "ATR",
      "name": "Aptargroup Inc"
    },
    {
      "symbol": "ATRA",
      "name": "Atara Biotherapeutics Inc"
    },
    {
      "symbol": "ATRC",
      "name": "Atricure Inc"
    },
    {
      "symbol": "ATRI",
      "name": "Atrion Corp"
    },
    {
      "symbol": "ATRO",
      "name": "Astronics Corp"
    },
    {
      "symbol": "ATS",
      "name": "ATS Corporation."
    },
    {
      "symbol": "ATSG",
      "name": "Air Transport Services Group Inc"
    },
    {
      "symbol": "ATUS",
      "name": "Altice USA Inc - Class A"
    },
    {
      "symbol": "ATXG",
      "name": "Addentax Group Corp"
    },
    {
      "symbol": "ATXI",
      "name": "Avenue Therapeutics Inc"
    },
    {
      "symbol": "ATXS",
      "name": "Astria Therapeutics Inc"
    },
    {
      "symbol": "AU",
      "name": "AngloGold Ashanti Plc."
    },
    {
      "symbol": "AUB",
      "name": "Atlantic Union Bankshares Corp"
    },
    {
      "symbol": "AUB-P-A",
      "name": "Atlantic Union Bankshares Corp"
    },
    {
      "symbol": "AUBN",
      "name": "Auburn National Bancorp Inc"
    },
    {
      "symbol": "AUDC",
      "name": "Audiocodes"
    },
    {
      "symbol": "AUGT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 AUG ETF "
    },
    {
      "symbol": "AUGW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 AUG ETF "
    },
    {
      "symbol": "AUGX",
      "name": "Augmedix Inc"
    },
    {
      "symbol": "AUGZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (AUGUST) ETF "
    },
    {
      "symbol": "AUID",
      "name": "authID Inc"
    },
    {
      "symbol": "AULT",
      "name": "Ault Alliance Inc"
    },
    {
      "symbol": "AULT-P-D",
      "name": "Ault Alliance Inc"
    },
    {
      "symbol": "AUMI",
      "name": "Themes Gold Miners ETF"
    },
    {
      "symbol": "AUMN",
      "name": "Golden Minerals Company"
    },
    {
      "symbol": "AUNA",
      "name": "Auna S.A. - Cls A"
    },
    {
      "symbol": "AUPH",
      "name": "Aurinia Pharmaceuticals Inc"
    },
    {
      "symbol": "AUR",
      "name": "Aurora Innovation Inc - Class A"
    },
    {
      "symbol": "AURA",
      "name": "Aura Biosciences Inc"
    },
    {
      "symbol": "AURC",
      "name": "Aurora Acquisition Corp - Class A"
    },
    {
      "symbol": "AUROW",
      "name": "Aurora Innovation Inc - Warrants (03/11/2026)"
    },
    {
      "symbol": "AUSF",
      "name": "GLOBAL X ADAPTIVE U.S. FACTOR ETF "
    },
    {
      "symbol": "AUST",
      "name": "Austin Gold Corp"
    },
    {
      "symbol": "AUTL",
      "name": "Autolus Therapeutics plc"
    },
    {
      "symbol": "AUUD",
      "name": "Auddia Inc"
    },
    {
      "symbol": "AUUDW",
      "name": "Auddia Inc - Warrants - Series A (17/10/2025)"
    },
    {
      "symbol": "AUVI",
      "name": "Applied UV Inc"
    },
    {
      "symbol": "AUVIP",
      "name": "Applied UV Inc"
    },
    {
      "symbol": "AVA",
      "name": "Avista Corp"
    },
    {
      "symbol": "AVACU",
      "name": "Avalon Acquisition Inc - Units (1 Ord Share Class A & 3/4 War)"
    },
    {
      "symbol": "AVAH",
      "name": "Aveanna Healthcare Holdings Inc"
    },
    {
      "symbol": "AVAL",
      "name": "Grupo Aval Acciones y Valores S.A."
    },
    {
      "symbol": "AVAV",
      "name": "AeroVironment Inc"
    },
    {
      "symbol": "AVB",
      "name": "Avalonbay Communities Inc"
    },
    {
      "symbol": "AVBP",
      "name": "ArriVent BioPharma Inc"
    },
    {
      "symbol": "AVD",
      "name": "American Vanguard Corp"
    },
    {
      "symbol": "AVDE",
      "name": "AVANTIS INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "AVDL",
      "name": "Avadel Pharmaceuticals plc"
    },
    {
      "symbol": "AVDS",
      "name": "AVANTIS INTERNATIONAL SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "AVDV",
      "name": "AVANTIS INTERNATIONAL SMALL CAP VALUE ETF "
    },
    {
      "symbol": "AVDX",
      "name": "AvidXchange Holdings Inc"
    },
    {
      "symbol": "AVEM",
      "name": "AVANTIS EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "AVES",
      "name": "AVANTIS EMERGING MARKETS VALUE ETF "
    },
    {
      "symbol": "AVGE",
      "name": "AVANTIS ALL EQUITY MARKETS ETF "
    },
    {
      "symbol": "AVGO",
      "name": "Broadcom Inc"
    },
    {
      "symbol": "AVGR",
      "name": "Avinger Inc"
    },
    {
      "symbol": "AVGV",
      "name": "AVANTIS ALL EQUITY MARKETS VALUE ETF "
    },
    {
      "symbol": "AVHI",
      "name": "Achari Ventures Holdings Corp I"
    },
    {
      "symbol": "AVHIU",
      "name": "Achari Ventures Holdings Corp I - Units (1 Ord Share & 1 War)"
    },
    {
      "symbol": "AVHIW",
      "name": "Achari Ventures Holdings Corp I - Warrants (01/01/2026)"
    },
    {
      "symbol": "AVIE",
      "name": "AVANTIS INFLATION FOCUSED EQUITY ETF "
    },
    {
      "symbol": "AVIG",
      "name": "AVANTIS CORE FIXED INCOME ETF "
    },
    {
      "symbol": "AVIR",
      "name": "Atea Pharmaceuticals Inc"
    },
    {
      "symbol": "AVIV",
      "name": "AVANTIS INTERNATIONAL LARGE CAP VALUE ETF "
    },
    {
      "symbol": "AVK",
      "name": "Advent Convertible and Income Fund"
    },
    {
      "symbol": "AVLC",
      "name": "AVANTIS U.S. LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "AVLV",
      "name": "AVANTIS U.S. LARGE CAP VALUE ETF "
    },
    {
      "symbol": "AVMA",
      "name": "AVANTIS MODERATE ALLOCATION ETF "
    },
    {
      "symbol": "AVMC",
      "name": "AVANTIS U.S. MID CAP EQUITY ETF "
    },
    {
      "symbol": "AVMU",
      "name": "AVANTIS CORE MUNICIPAL FIXED INCOME ETF "
    },
    {
      "symbol": "AVNM",
      "name": "AVANTIS ALL INTERNATIONAL MARKETS EQUITY ETF "
    },
    {
      "symbol": "AVNS",
      "name": "Avanos Medical Inc"
    },
    {
      "symbol": "AVNT",
      "name": "Avient Corp"
    },
    {
      "symbol": "AVNV",
      "name": "AVANTIS ALL INTERNATIONAL MARKETS VALUE ETF "
    },
    {
      "symbol": "AVNW",
      "name": "Aviat Networks Inc"
    },
    {
      "symbol": "AVO",
      "name": "Mission Produce Inc"
    },
    {
      "symbol": "AVPT",
      "name": "AvePoint Inc - Class A"
    },
    {
      "symbol": "AVPTW",
      "name": "AvePoint Inc - Warrants (18/09/2026)"
    },
    {
      "symbol": "AVRE",
      "name": "AVANTIS REAL ESTATE ETF "
    },
    {
      "symbol": "AVRO",
      "name": "AvroBio Inc"
    },
    {
      "symbol": "AVSC",
      "name": "AVANTIS U.S. SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "AVSD",
      "name": "AVANTIS RESPONSIBLE INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "AVSE",
      "name": "AVANTIS RESPONSIBLE EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "AVSF",
      "name": "AVANTIS SHORT-TERM FIXED INCOME ETF "
    },
    {
      "symbol": "AVSU",
      "name": "AVANTIS RESPONSIBLE U.S. EQUITY ETF "
    },
    {
      "symbol": "AVT",
      "name": "Avnet Inc"
    },
    {
      "symbol": "AVTE",
      "name": "Aerovate Therapeutics Inc"
    },
    {
      "symbol": "AVTR",
      "name": "Avantor Inc"
    },
    {
      "symbol": "AVTX",
      "name": "Avalo Therapeutics Inc"
    },
    {
      "symbol": "AVUS",
      "name": "AVANTIS U.S. EQUITY ETF "
    },
    {
      "symbol": "AVUV",
      "name": "AVANTIS U.S. SMALL CAP VALUE ETF "
    },
    {
      "symbol": "AVXC",
      "name": "Avantis Emerging Markets ex-China Equity ETF"
    },
    {
      "symbol": "AVXL",
      "name": "Anavex Life Sciences Corporation"
    },
    {
      "symbol": "AVY",
      "name": "Avery Dennison Corp"
    },
    {
      "symbol": "AWAY",
      "name": "Amplify Travel Tech ETF"
    },
    {
      "symbol": "AWEG",
      "name": "ALGER WEATHERBIE ENDURING GROWTH ETF "
    },
    {
      "symbol": "AWF",
      "name": "AllianceBernstein Global High Income Fund Inc"
    },
    {
      "symbol": "AWH",
      "name": "Aspira Women`s Health Inc"
    },
    {
      "symbol": "AWI",
      "name": "Armstrong World Industries Inc"
    },
    {
      "symbol": "AWIN",
      "name": "AERWINS Technologies Inc - Class A"
    },
    {
      "symbol": "AWINW",
      "name": "AERWINS Technologies Inc - Warrants(03/02/2028)"
    },
    {
      "symbol": "AWK",
      "name": "American Water Works Co. Inc"
    },
    {
      "symbol": "AWP",
      "name": "abrdn Global Premier Properties Fund"
    },
    {
      "symbol": "AWR",
      "name": "American States Water Company"
    },
    {
      "symbol": "AWRE",
      "name": "Aware Inc"
    },
    {
      "symbol": "AWX",
      "name": "Avalon Holdings Corp - Class A"
    },
    {
      "symbol": "AX",
      "name": "Axos Financial Inc"
    },
    {
      "symbol": "AXAC-R",
      "name": "AXIOS Sustainable Growth Acquisition Corporation Rights to receive onetenth 110 of one Class A ordinary share"
    },
    {
      "symbol": "AXDX",
      "name": "Accelerate Diagnostics Inc"
    },
    {
      "symbol": "AXGN",
      "name": "Axogen Inc"
    },
    {
      "symbol": "AXL",
      "name": "American Axle & Manufacturing Holdings Inc"
    },
    {
      "symbol": "AXNX",
      "name": "Axonics Inc"
    },
    {
      "symbol": "AXON",
      "name": "Axon Enterprise Inc"
    },
    {
      "symbol": "AXP",
      "name": "American Express Company"
    },
    {
      "symbol": "AXR",
      "name": "AMREP Corp"
    },
    {
      "symbol": "AXS",
      "name": "Axis Capital Holdings Ltd"
    },
    {
      "symbol": "AXS-P-E",
      "name": "Axis Capital Holdings Ltd"
    },
    {
      "symbol": "AXSM",
      "name": "Axsome Therapeutics Inc"
    },
    {
      "symbol": "AXTA",
      "name": "Axalta Coating Systems Ltd"
    },
    {
      "symbol": "AXTI",
      "name": "AXT Inc"
    },
    {
      "symbol": "AY",
      "name": "Atlantica Sustainable Infrastructure Plc"
    },
    {
      "symbol": "AYI",
      "name": "Acuity Brands Inc"
    },
    {
      "symbol": "AYRO",
      "name": "AYRO Inc"
    },
    {
      "symbol": "AYTU",
      "name": "Aytu BioPharma Inc"
    },
    {
      "symbol": "AZ",
      "name": "A2Z Smart Technologies Corp"
    },
    {
      "symbol": "AZEK",
      "name": "AZEK Company Inc - Class A"
    },
    {
      "symbol": "AZN",
      "name": "Astrazeneca plc"
    },
    {
      "symbol": "AZO",
      "name": "Autozone Inc"
    },
    {
      "symbol": "AZPN",
      "name": "Aspen Technology Inc"
    },
    {
      "symbol": "AZTA",
      "name": "Azenta Inc"
    },
    {
      "symbol": "AZTD",
      "name": "AZTLAN GLOBAL STOCK SELECTION DM SMID ETF "
    },
    {
      "symbol": "AZTR",
      "name": "Azitra Inc"
    },
    {
      "symbol": "AZUL",
      "name": "Azul S.A."
    },
    {
      "symbol": "AZZ",
      "name": "AZZ Inc"
    },
    {
      "symbol": "B",
      "name": "Barnes Group Inc"
    },
    {
      "symbol": "BA",
      "name": "Boeing Company"
    },
    {
      "symbol": "BAB",
      "name": "INVESCO TAXABLE MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BABA",
      "name": "Alibaba Group Holding Ltd"
    },
    {
      "symbol": "BABX",
      "name": "GRANITESHARES 1.75X LONG BABA DAILY ETF "
    },
    {
      "symbol": "BAC",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-B",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-E",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-K",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-L",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-M",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-N",
      "name": "Bank Of America Corp. PRF PERPETUAL USD Ser LL DpSh11000th"
    },
    {
      "symbol": "BAC-P-O",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-P",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-Q",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BAC-P-S",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BACA",
      "name": "Berenson Acquisition Corp I - Class A"
    },
    {
      "symbol": "BACK",
      "name": "IMAC Holdings Inc"
    },
    {
      "symbol": "BAD",
      "name": "B.A.D. ETF"
    },
    {
      "symbol": "BAER",
      "name": "Bridger Aerospace Group Holdings Inc - Class A"
    },
    {
      "symbol": "BAERW",
      "name": "Bridger Aerospace Group Holdings Inc - Warrants (24/01/2028)"
    },
    {
      "symbol": "BAFN",
      "name": "BayFirst Financial Corp"
    },
    {
      "symbol": "BAH",
      "name": "Booz Allen Hamilton Holding Corp - Class A"
    },
    {
      "symbol": "BAK",
      "name": "Braskem S.A."
    },
    {
      "symbol": "BALI",
      "name": "BlackRock Advantage Large Cap Income ETF"
    },
    {
      "symbol": "BALL",
      "name": "Ball Corp"
    },
    {
      "symbol": "BALT",
      "name": "Innovator Defined Wealth Shield ETF"
    },
    {
      "symbol": "BALY",
      "name": "Ballys Corporation"
    },
    {
      "symbol": "BAM",
      "name": "Brookfield Asset Management Ltd - Class A"
    },
    {
      "symbol": "BAMA",
      "name": "Brookstone Active ETF"
    },
    {
      "symbol": "BAMB",
      "name": "Brookstone Intermediate Bond ETF"
    },
    {
      "symbol": "BAMD",
      "name": "Brookstone Dividend Stock ETF"
    },
    {
      "symbol": "BAMG",
      "name": "Brookstone Growth Stock ETF"
    },
    {
      "symbol": "BAMO",
      "name": "Brookstone Opportunities ETF"
    },
    {
      "symbol": "BAMU",
      "name": "Brookstone Ultra-Short Bond ETF"
    },
    {
      "symbol": "BAMV",
      "name": "Brookstone Value Stock ETF"
    },
    {
      "symbol": "BAMY",
      "name": "Brookstone Yield ETF"
    },
    {
      "symbol": "BANC",
      "name": "Banc of California Inc"
    },
    {
      "symbol": "BANC-P-F",
      "name": "Banc of California Inc"
    },
    {
      "symbol": "BAND",
      "name": "Bandwidth Inc - Class A"
    },
    {
      "symbol": "BANF",
      "name": "Bancfirst Corp"
    },
    {
      "symbol": "BANFP",
      "name": "BancFirst Corporation 72 Cumulative Trust Preferred Securities"
    },
    {
      "symbol": "BANL",
      "name": "CBL International Ltd"
    },
    {
      "symbol": "BANR",
      "name": "Banner Corp"
    },
    {
      "symbol": "BANX",
      "name": "ArrowMark Financial Corp"
    },
    {
      "symbol": "BAOS",
      "name": "Baosheng Media Group Holdings Ltd"
    },
    {
      "symbol": "BAP",
      "name": "Credicorp Ltd"
    },
    {
      "symbol": "BAPR",
      "name": "Innovator U.S. Equity Buffer ETF - April"
    },
    {
      "symbol": "BAR",
      "name": "GraniteShares Gold Shares"
    },
    {
      "symbol": "BARK",
      "name": "BARK Inc - Class A"
    },
    {
      "symbol": "BARK-WS",
      "name": "Original BARK Co The Wt Exp 05012026"
    },
    {
      "symbol": "BASE",
      "name": "Couchbase Inc"
    },
    {
      "symbol": "BATL",
      "name": "Battalion Oil Corp (New)"
    },
    {
      "symbol": "BATRA",
      "name": "Atlanta Braves Holdings Inc - Class A"
    },
    {
      "symbol": "BATRK",
      "name": "Atlanta Braves Holdings Inc - Class C"
    },
    {
      "symbol": "BATT",
      "name": "AMPLIFY LITHIUM & BATTERY TECHNOLOGY ETF "
    },
    {
      "symbol": "BAUG",
      "name": "Innovator U.S. Equity Buffer ETF - August"
    },
    {
      "symbol": "BAX",
      "name": "Baxter International Inc"
    },
    {
      "symbol": "BAYA",
      "name": "Bayview Acquisition Corp"
    },
    {
      "symbol": "BAYAR",
      "name": "Bayview Acquisition Corp"
    },
    {
      "symbol": "BAYAU",
      "name": "Bayview Acquisition Corp - Units (1 Ord & 1 Right)"
    },
    {
      "symbol": "BB",
      "name": "BlackBerry Ltd"
    },
    {
      "symbol": "BBAG",
      "name": "JPMorgan BetaBuilders U.S. Aggregate Bond ETF"
    },
    {
      "symbol": "BBAI",
      "name": "BigBear.ai Inc"
    },
    {
      "symbol": "BBAI-WS",
      "name": "BigBear.ai Inc Redeemable Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "BBAR",
      "name": "BBVA Argentina"
    },
    {
      "symbol": "BBAX",
      "name": "JPMORGAN BETABUILDERS DEVELOPED ASIA PACIFIC EX-JAPAN ETF "
    },
    {
      "symbol": "BBBI",
      "name": "BondBloxx BBB Rated 5-10 Year Corporate Bond ETF"
    },
    {
      "symbol": "BBBL",
      "name": "BondBloxx BBB Rated 10+ Year Corporate Bond ETF"
    },
    {
      "symbol": "BBBS",
      "name": "BondBloxx BBB Rated 1-5 Year Corporate Bond ETF"
    },
    {
      "symbol": "BBC",
      "name": "Virtus LifeSci Biotech Clinical Trials ETF"
    },
    {
      "symbol": "BBCA",
      "name": "JPMORGAN BETABUILDERS CANADA ETF "
    },
    {
      "symbol": "BBCB",
      "name": "JPMorgan BetaBuilders USD Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "BBCP",
      "name": "Concrete Pumping Holdings Inc - Class A"
    },
    {
      "symbol": "BBD",
      "name": "Banco Bradesco S.A."
    },
    {
      "symbol": "BBDC",
      "name": "Barings BDC Inc"
    },
    {
      "symbol": "BBDO",
      "name": "Banco Bradesco S.A."
    },
    {
      "symbol": "BBEM",
      "name": "JPMORGAN BETABUILDERS EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "BBEU",
      "name": "JPMORGAN BETABUILDERS EUROPE ETF "
    },
    {
      "symbol": "BBGI",
      "name": "Beasley Broadcast Group Inc - Class A"
    },
    {
      "symbol": "BBH",
      "name": "VANECK BIOTECH ETF "
    },
    {
      "symbol": "BBHY",
      "name": "JPMorgan BetaBuilders USD High Yield Corporate Bond ETF"
    },
    {
      "symbol": "BBIB",
      "name": "JPMorgan BetaBuilders U.S. Treasury Bond 3-10 Year ETF"
    },
    {
      "symbol": "BBIN",
      "name": "JPMORGAN BETABUILDERS INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "BBIO",
      "name": "BridgeBio Pharma Inc"
    },
    {
      "symbol": "BBIP",
      "name": "JPMorgan BetaBuilders U.S. TIPS 0-5 Year ETF"
    },
    {
      "symbol": "BBJP",
      "name": "JPMORGAN BETABUILDERS JAPAN ETF "
    },
    {
      "symbol": "BBLB",
      "name": "JPMorgan BetaBuilders U.S. Treasury Bond 20+ Year ETF"
    },
    {
      "symbol": "BBLG",
      "name": "Bone Biologics Corp"
    },
    {
      "symbol": "BBLGW",
      "name": "Bone Biologics Corp - Warrants (13/10/2026)"
    },
    {
      "symbol": "BBLN",
      "name": "Babylon Holdings Ltd - Class A"
    },
    {
      "symbol": "BBLU",
      "name": "EA BRIDGEWAY BLUE CHIP ETF "
    },
    {
      "symbol": "BBMC",
      "name": "JPMORGAN BETABUILDERS U.S. MID CAP EQUITY ETF "
    },
    {
      "symbol": "BBN",
      "name": "BlackRock Taxable Municipal Bond Trust"
    },
    {
      "symbol": "BBP",
      "name": "VIRTUS LIFESCI BIOTECH PRODUCTS ETF "
    },
    {
      "symbol": "BBRE",
      "name": "JPMorgan BetaBuilders MSCI U.S. REIT ETF"
    },
    {
      "symbol": "BBSA",
      "name": "JPMorgan BetaBuilders 1-5 Year U.S. Aggregate Bond ETF"
    },
    {
      "symbol": "BBSB",
      "name": "JPMorgan BetaBuilders U.S. Treasury Bond 1-3 Year ETF"
    },
    {
      "symbol": "BBSC",
      "name": "JPMORGAN BETABUILDERS U.S. SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "BBSI",
      "name": "Barrett Business Services Inc"
    },
    {
      "symbol": "BBU",
      "name": "Brookfield Business Partners L.P."
    },
    {
      "symbol": "BBUC",
      "name": "Brookfield Business Corp - Class A - Class A (Sub Voting)"
    },
    {
      "symbol": "BBUS",
      "name": "JPMORGAN BETABUILDERS U.S. EQUITY ETF "
    },
    {
      "symbol": "BBVA",
      "name": "Banco Bilbao Vizcaya Argentaria."
    },
    {
      "symbol": "BBW",
      "name": "Build A Bear Workshop Inc"
    },
    {
      "symbol": "BBWI",
      "name": "Bath & Body Works Inc"
    },
    {
      "symbol": "BBY",
      "name": "Best Buy Co. Inc"
    },
    {
      "symbol": "BC",
      "name": "Brunswick Corp"
    },
    {
      "symbol": "BC/PA",
      "name": "Brunswick Corp"
    },
    {
      "symbol": "BC/PB",
      "name": "Brunswick Corp"
    },
    {
      "symbol": "BC/PC",
      "name": "Brunswick Corp"
    },
    {
      "symbol": "BCAB",
      "name": "BioAtla Inc"
    },
    {
      "symbol": "BCAL",
      "name": "Southern Calif Bancorp"
    },
    {
      "symbol": "BCAN",
      "name": "BYND Cannasoft Enterprises Inc"
    },
    {
      "symbol": "BCAT",
      "name": "BlackRock Capital Allocation Term Trust"
    },
    {
      "symbol": "BCBP",
      "name": "BCB Bancorp Inc (NJ)"
    },
    {
      "symbol": "BCC",
      "name": "Boise Cascade Company"
    },
    {
      "symbol": "BCD",
      "name": "ABRDN BLOOMBERG ALL COMMODITY LONGER DATED STRATEGY K-1 FREE ETF "
    },
    {
      "symbol": "BCDA",
      "name": "BioCardia Inc"
    },
    {
      "symbol": "BCDAW",
      "name": "BioCardia Inc - Warrants (26/07/2022)"
    },
    {
      "symbol": "BCDF",
      "name": "HORIZON KINETICS BLOCKCHAIN DEVELOPMENT ETF "
    },
    {
      "symbol": "BCE",
      "name": "BCE Inc"
    },
    {
      "symbol": "BCG",
      "name": "Binah Capital Group Inc"
    },
    {
      "symbol": "BCGWW",
      "name": "Binah Capital Group Inc - Warrants (13/03/2029)"
    },
    {
      "symbol": "BCH",
      "name": "Banco de Chile"
    },
    {
      "symbol": "BCHP",
      "name": "Principal Focused Blue Chip ETF"
    },
    {
      "symbol": "BCI",
      "name": "abrdn Bloomberg All Commodity Strategy K-1 Free ETF"
    },
    {
      "symbol": "BCIL",
      "name": "Bancreek International Large Cap ETF"
    },
    {
      "symbol": "BCIM",
      "name": "ABRDN BLOOMBERG INDUSTRIAL METALS STRATEGY K-1 FREE ETF "
    },
    {
      "symbol": "BCLI",
      "name": "Brainstorm Cell Therapeutics Inc"
    },
    {
      "symbol": "BCM",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "BCML",
      "name": "BayCom Corp"
    },
    {
      "symbol": "BCO",
      "name": "Brink`s Company"
    },
    {
      "symbol": "BCOV",
      "name": "Brightcove Inc"
    },
    {
      "symbol": "BCOW",
      "name": "1895 Bancorp of Wisconsin Inc"
    },
    {
      "symbol": "BCPC",
      "name": "Balchem Corp"
    },
    {
      "symbol": "BCRX",
      "name": "Biocryst Pharmaceuticals Inc"
    },
    {
      "symbol": "BCS",
      "name": "Barclays plc"
    },
    {
      "symbol": "BCSA",
      "name": "Blockchain Coinvestors Acquisition Corp I - Class A"
    },
    {
      "symbol": "BCSAU",
      "name": "Blockchain Coinvestors Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "BCSAW",
      "name": "Blockchain Coinvestors Acquisition Corp I - Warrants (01/09/2026)"
    },
    {
      "symbol": "BCSF",
      "name": "Bain Capital Specialty Finance Inc"
    },
    {
      "symbol": "BCTX",
      "name": "BriaCell Therapeutics Corp - New"
    },
    {
      "symbol": "BCTXW",
      "name": "BriaCell Therapeutics Corp - Warrants (24/02/2025)"
    },
    {
      "symbol": "BCUS",
      "name": "Trust Bancreek U.S. Large Cap ETF"
    },
    {
      "symbol": "BCV",
      "name": "Bancroft Fund Ltd"
    },
    {
      "symbol": "BCV-P-A",
      "name": "Bancroft Fund Ltd"
    },
    {
      "symbol": "BCX",
      "name": "BlackRock Resources & Commodities Strategy Trust"
    },
    {
      "symbol": "BCYC",
      "name": "Bicycle Therapeutics Plc"
    },
    {
      "symbol": "BDC",
      "name": "Belden Inc"
    },
    {
      "symbol": "BDCX",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "BDCZ",
      "name": "BDCZ"
    },
    {
      "symbol": "BDEC",
      "name": "Innovator U.S. Equity Buffer ETF - December"
    },
    {
      "symbol": "BDGS",
      "name": "Bridges Capital Tactical ETF"
    },
    {
      "symbol": "BDJ",
      "name": "BlackRock Enhanced Equity Dividend Trust"
    },
    {
      "symbol": "BDL",
      "name": "Flanigan`s Enterprises Inc"
    },
    {
      "symbol": "BDN",
      "name": "Brandywine Realty Trust"
    },
    {
      "symbol": "BDRX",
      "name": "Biodexa Pharmaceuticals Plc"
    },
    {
      "symbol": "BDRY",
      "name": "Breakwave Dry Bulk Shipping ETF"
    },
    {
      "symbol": "BDSX",
      "name": "Biodesix Inc"
    },
    {
      "symbol": "BDTX",
      "name": "Black Diamond Therapeutics Inc"
    },
    {
      "symbol": "BDVG",
      "name": "IMGP BERKSHIRE DIVIDEND GROWTH ETF "
    },
    {
      "symbol": "BDX",
      "name": "Becton Dickinson & Company"
    },
    {
      "symbol": "BE",
      "name": "Bloom Energy Corp - Class A"
    },
    {
      "symbol": "BEAM",
      "name": "Beam Therapeutics Inc"
    },
    {
      "symbol": "BEAT",
      "name": "HeartBeam Inc"
    },
    {
      "symbol": "BEATW",
      "name": "HeartBeam Inc - Warrants (31/10/2026)"
    },
    {
      "symbol": "BECN",
      "name": "Beacon Roofing Supply Inc - Class A"
    },
    {
      "symbol": "BECO",
      "name": "BlackRock Future Climate and Sustainable Economy ETF"
    },
    {
      "symbol": "BEDU",
      "name": "Bright Scholar Education Holdings Ltd"
    },
    {
      "symbol": "BEDZ",
      "name": "ADVISORSHARES HOTEL ETF "
    },
    {
      "symbol": "BEEM",
      "name": "Beam Global"
    },
    {
      "symbol": "BEEP",
      "name": "Mobile Infrastructure Corp"
    },
    {
      "symbol": "BEEZ",
      "name": "Honeytree U.S. Equity ETF"
    },
    {
      "symbol": "BEKE",
      "name": "KE Holdings Inc"
    },
    {
      "symbol": "BELFA",
      "name": "Bel Fuse Inc - Class A"
    },
    {
      "symbol": "BELFB",
      "name": "Bel Fuse Inc - Class B"
    },
    {
      "symbol": "BEMB",
      "name": "ISHARES J.P. MORGAN BROAD USD EMERGING MARKETS BOND ETF "
    },
    {
      "symbol": "BEN",
      "name": "Franklin Resources Inc"
    },
    {
      "symbol": "BENF",
      "name": "Beneficient - Class A"
    },
    {
      "symbol": "BENFW",
      "name": "Beneficient - Warrants (07/06/2028)"
    },
    {
      "symbol": "BEP",
      "name": "Brookfield Renewable Partners LP"
    },
    {
      "symbol": "BEP-P-A",
      "name": "Brookfield Renewable Partners LP 525 Class A Preferred Limited Partnership Units Series 17"
    },
    {
      "symbol": "BEPC",
      "name": "Brookfield Renewable Corporation - Class A - Class A (Sub Voting)"
    },
    {
      "symbol": "BEPH",
      "name": "Brookfield BRP Holdings (Canada) Inc"
    },
    {
      "symbol": "BEPI",
      "name": "Brookfield BRP Holdings (Canada) Inc"
    },
    {
      "symbol": "BEPJ",
      "name": "Brookfield BRP Holdings (Canada) Inc"
    },
    {
      "symbol": "BERY",
      "name": "Berry Global Group Inc"
    },
    {
      "symbol": "BERZ",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "BEST",
      "name": "BEST Inc"
    },
    {
      "symbol": "BETE",
      "name": "ProShares Bitcoin & Ether Equal Weight Strategy ETF"
    },
    {
      "symbol": "BETH",
      "name": "ProShares Bitcoin & Ether Market Cap Weight Strategy ETF"
    },
    {
      "symbol": "BETR",
      "name": "Better Home & Finance Holding Company"
    },
    {
      "symbol": "BETRW",
      "name": "Better Home & Finance Holding Co. - Warrants (23/08/2028)"
    },
    {
      "symbol": "BETZ",
      "name": "ROUNDHILL SPORTS BETTING & IGAMING ETF "
    },
    {
      "symbol": "BF-A",
      "name": "Brown-Forman Corp - Class A"
    },
    {
      "symbol": "BF-B",
      "name": "Brown-Forman Corp - Class B"
    },
    {
      "symbol": "BFAC",
      "name": "Battery Future Acquisition Corp - Class A"
    },
    {
      "symbol": "BFAC-U",
      "name": "Battery Future Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "BFAC-WS",
      "name": "Battery Future Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "BFAM",
      "name": "Bright Horizons Family Solutions Inc"
    },
    {
      "symbol": "BFC",
      "name": "Bank First Corp"
    },
    {
      "symbol": "BFEB",
      "name": "Innovator U.S. Equity Buffer ETF - February"
    },
    {
      "symbol": "BFH",
      "name": "Bread Financial Holdings Inc"
    },
    {
      "symbol": "BFI",
      "name": "BurgerFi International Inc"
    },
    {
      "symbol": "BFIIW",
      "name": "BurgerFi International Inc - Warrants (16/12/2025)"
    },
    {
      "symbol": "BFIN",
      "name": "Bankfinancial Corp"
    },
    {
      "symbol": "BFIX",
      "name": "BUILD BOND INNOVATION ETF "
    },
    {
      "symbol": "BFK",
      "name": "BlackRock Municipal Income Trust"
    },
    {
      "symbol": "BFLY",
      "name": "Butterfly Network Inc - Class A"
    },
    {
      "symbol": "BFLY-WS",
      "name": "Butterfly Network Inc Wt Exp 05272025"
    },
    {
      "symbol": "BFOR",
      "name": "BARRON'S 400 ETF "
    },
    {
      "symbol": "BFRG",
      "name": "Bullfrog AI Holdings Inc"
    },
    {
      "symbol": "BFRGW",
      "name": "Bullfrog AI Holdings Inc - Warrants(18/01/2028)"
    },
    {
      "symbol": "BFRI",
      "name": "Biofrontera Inc"
    },
    {
      "symbol": "BFRIW",
      "name": "Biofrontera Inc - Warrants (27/10/2026)"
    },
    {
      "symbol": "BFS",
      "name": "Saul Centers Inc"
    },
    {
      "symbol": "BFS-P-D",
      "name": "Saul Centers Inc"
    },
    {
      "symbol": "BFS-P-E",
      "name": "Saul Centers Inc"
    },
    {
      "symbol": "BFST",
      "name": "Business First Bancshares Inc"
    },
    {
      "symbol": "BFTR",
      "name": "BlackRock Future Innovators ETF"
    },
    {
      "symbol": "BFX",
      "name": "BFX HOSPITALITY GROUP INC"
    },
    {
      "symbol": "BFZ",
      "name": "BlackRock California Municipal Income Trust"
    },
    {
      "symbol": "BG",
      "name": "Bunge Global SA"
    },
    {
      "symbol": "BGB",
      "name": "Blackstone Strategic Credit 2027 Term Fund"
    },
    {
      "symbol": "BGC",
      "name": "BGC Group Inc - Class A"
    },
    {
      "symbol": "BGFV",
      "name": "Big 5 Sporting Goods Corp"
    },
    {
      "symbol": "BGH",
      "name": "Barings Global Short Duration High Yield Fund"
    },
    {
      "symbol": "BGI",
      "name": "Birks Group Inc - Class A"
    },
    {
      "symbol": "BGIG",
      "name": "BAHL & GAYNOR INCOME GROWTH ETF "
    },
    {
      "symbol": "BGLC",
      "name": "BioNexus Gene Lab Corp"
    },
    {
      "symbol": "BGLD",
      "name": "FT VEST GOLD STRATEGY QUARTERLY BUFFER ETF "
    },
    {
      "symbol": "BGNE",
      "name": "BeiGene Ltd"
    },
    {
      "symbol": "BGR",
      "name": "Blackrock Energy & Resources Trust"
    },
    {
      "symbol": "BGRN",
      "name": "ISHARES USD GREEN BOND ETF "
    },
    {
      "symbol": "BGRY",
      "name": "Berkshire Grey Inc - Class A"
    },
    {
      "symbol": "BGRYW",
      "name": "Berkshire Grey Inc - Warrants (21/07/2026)"
    },
    {
      "symbol": "BGS",
      "name": "B&G Foods Inc"
    },
    {
      "symbol": "BGSF",
      "name": "BGSF Inc"
    },
    {
      "symbol": "BGT",
      "name": "BlackRock Floating Rate Income Trust"
    },
    {
      "symbol": "BGX",
      "name": "Blackstone Long-Short Credit Income Fund"
    },
    {
      "symbol": "BGXX",
      "name": "Bright Green Corp"
    },
    {
      "symbol": "BGY",
      "name": "BlackRock Enhanced International Dividend Trust"
    },
    {
      "symbol": "BH",
      "name": "Biglari Holdings Inc - Class B"
    },
    {
      "symbol": "BH-A",
      "name": "Biglari Holdings Inc - Class A"
    },
    {
      "symbol": "BHAC",
      "name": "Crixus BH3 Acquisition Co - Class A"
    },
    {
      "symbol": "BHACU",
      "name": "Crixus BH3 Acquisition Co - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "BHACW",
      "name": "Crixus BH3 Acquisition Co - Warrants (04/10/2026)"
    },
    {
      "symbol": "BHAT",
      "name": "Blue Hat Interactive Entertainment Technology"
    },
    {
      "symbol": "BHB",
      "name": "Bar Harbor Bankshares Inc"
    },
    {
      "symbol": "BHC",
      "name": "Bausch Health Companies Inc"
    },
    {
      "symbol": "BHE",
      "name": "Benchmark Electronics Inc"
    },
    {
      "symbol": "BHF",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHFAL",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHFAM",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHFAN",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHFAO",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHFAP",
      "name": "Brighthouse Financial Inc"
    },
    {
      "symbol": "BHIL",
      "name": "Benson Hill Inc"
    },
    {
      "symbol": "BHIL-WS",
      "name": "Benson Hill Inc Wt"
    },
    {
      "symbol": "BHK",
      "name": "BlackRock Core Bond Trust"
    },
    {
      "symbol": "BHLB",
      "name": "Berkshire Hills Bancorp Inc"
    },
    {
      "symbol": "BHM",
      "name": "Bluerock Homes Trust Inc - Class A"
    },
    {
      "symbol": "BHP",
      "name": "BHP Group Ltd"
    },
    {
      "symbol": "BHR",
      "name": "Braemar Hotels & Resorts Inc"
    },
    {
      "symbol": "BHR-P-B",
      "name": "Braemar Hotels & Resorts Inc"
    },
    {
      "symbol": "BHR-P-D",
      "name": "Braemar Hotels & Resorts Inc"
    },
    {
      "symbol": "BHRB",
      "name": "Burke & Herbert Financial Services Corp"
    },
    {
      "symbol": "BHV",
      "name": "BlackRock Virginia Municipal Bond Trust."
    },
    {
      "symbol": "BHVN",
      "name": "Biohaven Ltd"
    },
    {
      "symbol": "BHYB",
      "name": "Xtrackers USD High Yield BB-B ex Financials ETF"
    },
    {
      "symbol": "BIAF",
      "name": "BioAffinity Technologies Inc"
    },
    {
      "symbol": "BIAFW",
      "name": "BioAffinity Technologies Inc - Warrants(23/06/2027)"
    },
    {
      "symbol": "BIB",
      "name": "ProShares Ultra Nasdaq Biotechnology 2X Shares"
    },
    {
      "symbol": "BIBL",
      "name": "INSPIRE 100 ETF "
    },
    {
      "symbol": "BIDU",
      "name": "Baidu Inc"
    },
    {
      "symbol": "BIG",
      "name": "Big Lots Inc"
    },
    {
      "symbol": "BIGC",
      "name": "BigCommerce Holdings Inc Series 1"
    },
    {
      "symbol": "BIGZ",
      "name": "BlackRock Innovation and Growth Term Trust"
    },
    {
      "symbol": "BIIB",
      "name": "Biogen Inc"
    },
    {
      "symbol": "BIL",
      "name": "SPDR Bloomberg 1-3 Month T-Bill ETF"
    },
    {
      "symbol": "BILD",
      "name": "Macquarie ETF Trust Global Listed Infrastructure"
    },
    {
      "symbol": "BILI",
      "name": "Bilibili Inc"
    },
    {
      "symbol": "BILL",
      "name": "BILL Holdings Inc"
    },
    {
      "symbol": "BILS",
      "name": "SPDR Bloomberg 3-12 Month T-Bill ETF"
    },
    {
      "symbol": "BILZ",
      "name": "PIMCO Ultra Short Government Active Exchange-Traded Fund"
    },
    {
      "symbol": "BIMI",
      "name": "BIMI International Medical Inc"
    },
    {
      "symbol": "BINC",
      "name": "BlackRock Flexible Income ETF"
    },
    {
      "symbol": "BINV",
      "name": "Brandes International ETF"
    },
    {
      "symbol": "BIO",
      "name": "Bio-Rad Laboratories Inc - Class A"
    },
    {
      "symbol": "BIO-B",
      "name": "Bio-Rad Laboratories Inc - Class B"
    },
    {
      "symbol": "BIOL",
      "name": "Biolase Inc"
    },
    {
      "symbol": "BIOR",
      "name": "Biora Therapeutics Inc"
    },
    {
      "symbol": "BIOSU",
      "name": "BioPlus Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "BIOX",
      "name": "Bioceres Crop Solutions Corp"
    },
    {
      "symbol": "BIP",
      "name": "Brookfield Infrastructure Partners L.P"
    },
    {
      "symbol": "BIP-P-A",
      "name": "Brookfield Infrastructure Partners L.P"
    },
    {
      "symbol": "BIP-P-B",
      "name": "Brookfield Infrastructure Partners L.P"
    },
    {
      "symbol": "BIPC",
      "name": "Brookfield Infrastructure Corp - Class A (Subordinate Share)"
    },
    {
      "symbol": "BIPH",
      "name": "Brookfield Infrastructure Finance ULC"
    },
    {
      "symbol": "BIPI",
      "name": "BIP Bermuda Holdings I Ltd"
    },
    {
      "symbol": "BIRD",
      "name": "Allbirds Inc Class A"
    },
    {
      "symbol": "BIRK",
      "name": "Birkenstock Holding Plc"
    },
    {
      "symbol": "BIS",
      "name": "ProShares UltraShort Nasdaq Biotechnology -2x Shares"
    },
    {
      "symbol": "BIT",
      "name": "BlackRock Multi-Sector Income Trust"
    },
    {
      "symbol": "BITB",
      "name": "Bitwise Bitcoin ETF"
    },
    {
      "symbol": "BITC",
      "name": "Bitwise Bitcoin Strategy Optimum Roll ETF"
    },
    {
      "symbol": "BITE",
      "name": "Bite Acquisition Corp"
    },
    {
      "symbol": "BITE-U",
      "name": "Bite Acquisition Corp - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "BITE-WS",
      "name": "Bite Acquisition Corp - Warrants (12/02/2031)"
    },
    {
      "symbol": "BITF",
      "name": "Bitfarms Ltd"
    },
    {
      "symbol": "BITI",
      "name": "PROSHARES SHORT BITCOIN STRATEGY ETF "
    },
    {
      "symbol": "BITO",
      "name": "PROSHARES BITCOIN STRATEGY ETF "
    },
    {
      "symbol": "BITQ",
      "name": "Bitwise Crypto Industry Innovators ETF"
    },
    {
      "symbol": "BITS",
      "name": "GLOBAL X BLOCKCHAIN & BITCOIN STRATEGY ETF "
    },
    {
      "symbol": "BITU",
      "name": "ProShares Ultra Bitcoin ETF"
    },
    {
      "symbol": "BITX",
      "name": "2X BITCOIN STRATEGY ETF "
    },
    {
      "symbol": "BIV",
      "name": "VANGUARD INTERMEDIATE-TERM BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "BIVI",
      "name": "BioVie Inc"
    },
    {
      "symbol": "BIZD",
      "name": "VanEck BDC Income ETF"
    },
    {
      "symbol": "BJ",
      "name": "BJ`s Wholesale Club Holdings Inc"
    },
    {
      "symbol": "BJAN",
      "name": "Innovator U.S. Equity Buffer ETF - January"
    },
    {
      "symbol": "BJDX",
      "name": "Bluejay Diagnostics Inc"
    },
    {
      "symbol": "BJK",
      "name": "VANECK GAMING ETF "
    },
    {
      "symbol": "BJRI",
      "name": "BJ`s Restaurant Inc"
    },
    {
      "symbol": "BJUL",
      "name": "Innovator U.S. Equity Buffer ETF - July"
    },
    {
      "symbol": "BJUN",
      "name": "Innovator U.S. Equity Buffer ETF - June"
    },
    {
      "symbol": "BK",
      "name": "Bank Of New York Mellon Corp"
    },
    {
      "symbol": "BKAG",
      "name": "BNY MELLON CORE BOND ETF "
    },
    {
      "symbol": "BKCH",
      "name": "GLOBAL X BLOCKCHAIN ETF "
    },
    {
      "symbol": "BKCI",
      "name": "BNY MELLON CONCENTRATED INTERNATIONAL ETF "
    },
    {
      "symbol": "BKD",
      "name": "Brookdale Senior Living Inc"
    },
    {
      "symbol": "BKDT",
      "name": "Brookdale Senior Living Inc"
    },
    {
      "symbol": "BKE",
      "name": "Buckle Inc"
    },
    {
      "symbol": "BKEM",
      "name": "BNY MELLON EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "BKF",
      "name": "ISHARES MSCI BIC ETF "
    },
    {
      "symbol": "BKGI",
      "name": "BNY MELLON GLOBAL INFRASTRUCTURE INCOME ETF "
    },
    {
      "symbol": "BKH",
      "name": "Black Hills Corporation"
    },
    {
      "symbol": "BKHAU",
      "name": "Black Hawk Acquisition Corp - Units (1 Ord Share Cls A & 1/5 Rts )"
    },
    {
      "symbol": "BKHY",
      "name": "BNY MELLON HIGH YIELD BETA ETF "
    },
    {
      "symbol": "BKIE",
      "name": "BNY MELLON INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "BKIV",
      "name": "BNY Mellon Innovators ETF"
    },
    {
      "symbol": "BKKT",
      "name": "Bakkt Holdings Inc - Class A"
    },
    {
      "symbol": "BKKT-WS",
      "name": "Bakkt Holdings Inc Warrant"
    },
    {
      "symbol": "BKLC",
      "name": "BNY MELLON US LARGE CAP CORE EQUITY ETF "
    },
    {
      "symbol": "BKLN",
      "name": "INVESCO SENIOR LOAN ETF "
    },
    {
      "symbol": "BKMC",
      "name": "BNY MELLON US MID CAP CORE EQUITY ETF "
    },
    {
      "symbol": "BKN",
      "name": "BlackRock Investment Quality Municipal Trust"
    },
    {
      "symbol": "BKNG",
      "name": "Booking Holdings Inc"
    },
    {
      "symbol": "BKR",
      "name": "Baker Hughes Co - Class A"
    },
    {
      "symbol": "BKSB",
      "name": "BNY Mellon Short Duration Corporate Bond ETF"
    },
    {
      "symbol": "BKSE",
      "name": "BNY MELLON US SMALL CAP CORE EQUITY ETF "
    },
    {
      "symbol": "BKSY",
      "name": "BlackSky Technology Inc - Class A"
    },
    {
      "symbol": "BKSY-WS",
      "name": "BlackSky Technology Inc Wt Exp 10302024"
    },
    {
      "symbol": "BKT",
      "name": "BlackRock Income Trust Inc"
    },
    {
      "symbol": "BKTI",
      "name": "BK Technologies Corp"
    },
    {
      "symbol": "BKU",
      "name": "BankUnited Inc"
    },
    {
      "symbol": "BKUI",
      "name": "BNY MELLON ULTRA SHORT INCOME ETF "
    },
    {
      "symbol": "BKWO",
      "name": "BNY Mellon Womens Opportunities ETF"
    },
    {
      "symbol": "BKYI",
      "name": "Bio-Key International Inc"
    },
    {
      "symbol": "BL",
      "name": "BlackLine Inc"
    },
    {
      "symbol": "BLAC",
      "name": "Bellevue Life Sciences Acquisition Corp"
    },
    {
      "symbol": "BLACR",
      "name": "Bellevue Life Sciences Acquisition Corp"
    },
    {
      "symbol": "BLACU",
      "name": "Bellevue Life Sciences Acquisition Corp - Units (1 Ord 1 War & 1 Right )"
    },
    {
      "symbol": "BLACW",
      "name": "Bellevue Life Sciences Acquisition Corp - Warrants (09/02/2028)"
    },
    {
      "symbol": "BLBD",
      "name": "Blue Bird Corp"
    },
    {
      "symbol": "BLBX",
      "name": "Blackboxstocks Inc"
    },
    {
      "symbol": "BLCN",
      "name": "Siren Nasdaq NexGen Economy ETF"
    },
    {
      "symbol": "BLCO",
      "name": "Bausch + Lomb Corp"
    },
    {
      "symbol": "BLCR",
      "name": "BlackRock Large Cap Core ETF"
    },
    {
      "symbol": "BLCV",
      "name": "BlackRock Large Cap Value ETF"
    },
    {
      "symbol": "BLD",
      "name": "TopBuild Corp"
    },
    {
      "symbol": "BLDE",
      "name": "Blade Air Mobility Inc - Class A"
    },
    {
      "symbol": "BLDEW",
      "name": "Blade Air Mobility Inc - Warrants (07/05/2026)"
    },
    {
      "symbol": "BLDG",
      "name": "CAMBRIA GLOBAL REAL ESTATE ETF "
    },
    {
      "symbol": "BLDP",
      "name": "Ballard Power Systems Inc"
    },
    {
      "symbol": "BLDR",
      "name": "Builders Firstsource Inc"
    },
    {
      "symbol": "BLE",
      "name": "BlackRock Municipal Income Trust II"
    },
    {
      "symbol": "BLES",
      "name": "INSPIRE GLOBAL HOPE ETF "
    },
    {
      "symbol": "BLEU",
      "name": "bleuacacia Ltd - Class A"
    },
    {
      "symbol": "BLEUR",
      "name": "bleuacacia Ltd"
    },
    {
      "symbol": "BLEUU",
      "name": "bleuacacia Ltd - Units (1 Ord Share Class A &1Right & 1/2 War)"
    },
    {
      "symbol": "BLEUW",
      "name": "bleuacacia Ltd - Warrants (30/10/2026)"
    },
    {
      "symbol": "BLFS",
      "name": "Biolife Solutions Inc"
    },
    {
      "symbol": "BLFY",
      "name": "Blue Foundry Bancorp"
    },
    {
      "symbol": "BLHY",
      "name": "VIRTUS NEWFLEET SHORT DURATION HIGH YIELD BOND ETF "
    },
    {
      "symbol": "BLIN",
      "name": "Bridgeline Digital Inc"
    },
    {
      "symbol": "BLK",
      "name": "Blackrock Inc"
    },
    {
      "symbol": "BLKB",
      "name": "Blackbaud Inc"
    },
    {
      "symbol": "BLKC",
      "name": "INVESCO ALERIAN GALAXY BLOCKCHAIN USERS AND DECENTRALIZED COMMERCE ETF "
    },
    {
      "symbol": "BLLD",
      "name": "JPMORGAN SUSTAINABLE INFRASTRUCTURE ETF "
    },
    {
      "symbol": "BLMN",
      "name": "Bloomin Brands Inc"
    },
    {
      "symbol": "BLND",
      "name": "Blend Labs Inc - Class A"
    },
    {
      "symbol": "BLNK",
      "name": "Blink Charging Company"
    },
    {
      "symbol": "BLOK",
      "name": "AMPLIFY TRANSFORMATIONAL DATA SHARING ETF "
    },
    {
      "symbol": "BLRX",
      "name": "Bioline Rx Ltd"
    },
    {
      "symbol": "BLTE",
      "name": "Belite Bio Inc"
    },
    {
      "symbol": "BLUA",
      "name": "BlueRiver Acquisition Corp - Class A"
    },
    {
      "symbol": "BLUE",
      "name": "Bluebird bio Inc"
    },
    {
      "symbol": "BLV",
      "name": "VANGUARD LONG-TERM BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "BLW",
      "name": "BlackRock Ltd Duration Income Trust"
    },
    {
      "symbol": "BLX",
      "name": "Banco Latinoamericano De Comercio Exterior SA - Class E"
    },
    {
      "symbol": "BLZE",
      "name": "Backblaze Inc - Class A"
    },
    {
      "symbol": "BMA",
      "name": "Banco Macro S.A."
    },
    {
      "symbol": "BMAC",
      "name": "Black Mountain Acquisition Corp - Class A"
    },
    {
      "symbol": "BMAC-U",
      "name": "Black Mountain Acquisition Corp - Units (1 Ord Class A & 0.75 War)"
    },
    {
      "symbol": "BMAC-WS",
      "name": "Black Mountain Acquisition Corp - Warrants (15/10/2027)"
    },
    {
      "symbol": "BMAQU",
      "name": "Blockchain Moon Acquisition Corp - Units (1 Ord 1 War & 1 Rts)"
    },
    {
      "symbol": "BMAR",
      "name": "Innovator U.S. Equity Buffer ETF - March"
    },
    {
      "symbol": "BMAY",
      "name": "Innovator U.S. Equity Buffer ETF - May"
    },
    {
      "symbol": "BMBL",
      "name": "Bumble Inc - Class A"
    },
    {
      "symbol": "BME",
      "name": "BlackRock Health Sciences Trust"
    },
    {
      "symbol": "BMEA",
      "name": "Biomea Fusion Inc"
    },
    {
      "symbol": "BMED",
      "name": "BlackRock Future Health ETF"
    },
    {
      "symbol": "BMEZ",
      "name": "BlackRock Health Sciences Term Trust"
    },
    {
      "symbol": "BMI",
      "name": "Badger Meter Inc"
    },
    {
      "symbol": "BML-P-G",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BML-P-H",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BML-P-J",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BML-P-L",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "BMN",
      "name": "BlackRock 2037 Municipal Target Term Trust"
    },
    {
      "symbol": "BMO",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "BMR",
      "name": "Beamr Imaging Ltd"
    },
    {
      "symbol": "BMRA",
      "name": "Biomerica Inc"
    },
    {
      "symbol": "BMRC",
      "name": "Bank of Marin Bancorp"
    },
    {
      "symbol": "BMRN",
      "name": "Biomarin Pharmaceutical Inc"
    },
    {
      "symbol": "BMTX",
      "name": "BM Technologies Inc - Class A"
    },
    {
      "symbol": "BMVP",
      "name": "Invesco Bloomberg MVP Multi-factor ETF"
    },
    {
      "symbol": "BMY",
      "name": "Bristol-Myers Squibb Company"
    },
    {
      "symbol": "BN",
      "name": "Brookfield Corporation - Class A"
    },
    {
      "symbol": "BN-W",
      "name": "Brookfield Corporation Class A Ltd WhenIssued"
    },
    {
      "symbol": "BNAI",
      "name": "Brand Engagement Network Inc"
    },
    {
      "symbol": "BNAIW",
      "name": "Brand Engagement Network Inc - Warrants (14/03/2029)"
    },
    {
      "symbol": "BND",
      "name": "VANGUARD TOTAL BOND MARKET INDEX FUND ETF SHARES"
    },
    {
      "symbol": "BNDC",
      "name": "FLEXSHARES CORE SELECT BOND FUND "
    },
    {
      "symbol": "BNDD",
      "name": "Quadratic Deflation ETF"
    },
    {
      "symbol": "BNDI",
      "name": "NEOS Enhanced Income Aggregate Bond ETF"
    },
    {
      "symbol": "BNDW",
      "name": "VANGUARD TOTAL WORLD BOND ETF ETF SHARES"
    },
    {
      "symbol": "BNDX",
      "name": "VANGUARD TOTAL INTERNATIONAL BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "BNE",
      "name": "BLUE HORIZON BNE ETF "
    },
    {
      "symbol": "BNED",
      "name": "Barnes & Noble Education Inc"
    },
    {
      "symbol": "BNGE",
      "name": "First Trust S-Network Streaming and Gaming ETF"
    },
    {
      "symbol": "BNGO",
      "name": "Bionano Genomics Inc"
    },
    {
      "symbol": "BNH",
      "name": "Brookfield Finance Inc"
    },
    {
      "symbol": "BNIX",
      "name": "Bannix Acquisition Corp"
    },
    {
      "symbol": "BNIXR",
      "name": "Bannix Acquisition Corp"
    },
    {
      "symbol": "BNIXW",
      "name": "Bannix Acquisition Corp - Warrants (31/07/2026)"
    },
    {
      "symbol": "BNJ",
      "name": "BlackRock New Jersey Municipal Income Trust"
    },
    {
      "symbol": "BNKD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "BNKU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "BNL",
      "name": "Broadstone Net Lease Inc"
    },
    {
      "symbol": "BNO",
      "name": "United States Brent Crude Oil Fund"
    },
    {
      "symbol": "BNOV",
      "name": "Innovator U.S. Equity Buffer ETF - November"
    },
    {
      "symbol": "BNOX",
      "name": "Bionomics Ltd"
    },
    {
      "symbol": "BNR",
      "name": "Burning Rock Biotech Ltd"
    },
    {
      "symbol": "BNRE",
      "name": "Brookfield Reinsurance Ltd (Exchangeable Shares Sub Voting) - Class A"
    },
    {
      "symbol": "BNRE-A",
      "name": "Brookfield Reinsurance Ltd Class A1 Exchangeable NonVoting Shares"
    },
    {
      "symbol": "BNRG",
      "name": "Brenmiller Energy Ltd"
    },
    {
      "symbol": "BNS",
      "name": "Bank Of Nova Scotia"
    },
    {
      "symbol": "BNTC",
      "name": "Benitec Biopharma Inc"
    },
    {
      "symbol": "BNTX",
      "name": "BioNTech SE"
    },
    {
      "symbol": "BNY",
      "name": "BlackRock New York Municipal Income Trust"
    },
    {
      "symbol": "BNZI",
      "name": "Banzai International Inc - Class A"
    },
    {
      "symbol": "BNZIW",
      "name": "Banzai International Inc - Warrants (14/12/2028)"
    },
    {
      "symbol": "BOAC",
      "name": "Bluescape Opportunities Acquisition Corp - Class A"
    },
    {
      "symbol": "BOAC-U",
      "name": "Bluescape Opportunities Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "BOAC-WS",
      "name": "Bluescape Opportunities Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "BOAT",
      "name": "SonicShares Global Shipping ETF"
    },
    {
      "symbol": "BOB",
      "name": "Merlyn.AI Best-of-Breed Core Momentum ETF"
    },
    {
      "symbol": "BOC",
      "name": "Boston Omaha Corp - Class A"
    },
    {
      "symbol": "BOCN",
      "name": "Blue Ocean Acquisition Corp - Class A"
    },
    {
      "symbol": "BOCNU",
      "name": "Blue Ocean Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "BOCNW",
      "name": "Blue Ocean Acquisition Corp - Warrants (02/12/2026)"
    },
    {
      "symbol": "BOCT",
      "name": "Innovator U.S. Equity Buffer ETF - October"
    },
    {
      "symbol": "BODI",
      "name": "The Beachbody Company Inc Class A"
    },
    {
      "symbol": "BODY",
      "name": "Beachbody Company Inc (The) - Class A"
    },
    {
      "symbol": "BOE",
      "name": "BlackRock Enhanced Global Dividend Trust"
    },
    {
      "symbol": "BOF",
      "name": "BranchOut Food Inc"
    },
    {
      "symbol": "BOH",
      "name": "Bank of Hawaii Corp"
    },
    {
      "symbol": "BOH-P-A",
      "name": "Bank of Hawaii Corp"
    },
    {
      "symbol": "BOIL",
      "name": "ProShares Ultra Bloomberg Natural Gas 2x Shares"
    },
    {
      "symbol": "BOKF",
      "name": "BOK Financial Corp"
    },
    {
      "symbol": "BOLD",
      "name": "Boundless Bio Inc"
    },
    {
      "symbol": "BOLT",
      "name": "Bolt Biotherapeutics Inc"
    },
    {
      "symbol": "BON",
      "name": "Bon Natural Life Ltd"
    },
    {
      "symbol": "BOND",
      "name": "PIMCO ACTIVE BOND EXCHANGE-TRADED FUND "
    },
    {
      "symbol": "BOOM",
      "name": "DMC Global Inc"
    },
    {
      "symbol": "BOOT",
      "name": "Boot Barn Holdings Inc"
    },
    {
      "symbol": "BORR",
      "name": "Borr Drilling Ltd"
    },
    {
      "symbol": "BOSC",
      "name": "B.O.S. Better Online Solutions"
    },
    {
      "symbol": "BOSS",
      "name": "Global X Founder-Run Companies ETF"
    },
    {
      "symbol": "BOTJ",
      "name": "Bank of James Financial Group Inc"
    },
    {
      "symbol": "BOTT",
      "name": "Themes Robotics & Automation ETF"
    },
    {
      "symbol": "BOTZ",
      "name": "GLOBAL X ROBOTICS & ARTIFICIAL INTELLIGENCE ETF "
    },
    {
      "symbol": "BOUT",
      "name": "Innovator IBD(R) Breakout Opportunities ETF"
    },
    {
      "symbol": "BOWL",
      "name": "Bowlero Corp - Class A"
    },
    {
      "symbol": "BOWN",
      "name": "Bowen Acquisition Corp"
    },
    {
      "symbol": "BOWNR",
      "name": "Bowen Acquisition Corp"
    },
    {
      "symbol": "BOWNU",
      "name": "Bowen Acquisition Corp - Units (1 Ordinary share & 1 Right)"
    },
    {
      "symbol": "BOX",
      "name": "Box Inc - Class A"
    },
    {
      "symbol": "BOXL",
      "name": "Boxlight Corporation - Class A"
    },
    {
      "symbol": "BOXX",
      "name": "ALPHA ARCHITECT 1-3 MONTH BOX ETF "
    },
    {
      "symbol": "BP",
      "name": "BP plc"
    },
    {
      "symbol": "BPAY",
      "name": "BlackRock Future Financial and Technology ETF"
    },
    {
      "symbol": "BPMC",
      "name": "Blueprint Medicines Corp"
    },
    {
      "symbol": "BPOP",
      "name": "Popular Inc"
    },
    {
      "symbol": "BPOPM",
      "name": "Popular Capital Trust II"
    },
    {
      "symbol": "BPRN",
      "name": "Princeton Bancorp Inc"
    },
    {
      "symbol": "BPT",
      "name": "BP Prudhoe Bay Royalty Trust"
    },
    {
      "symbol": "BPTH",
      "name": "Bio-Path Holdings Inc"
    },
    {
      "symbol": "BPYPM",
      "name": "Brookfield Property Preferred LP"
    },
    {
      "symbol": "BPYPN",
      "name": "Brookfield Property Partners L.P."
    },
    {
      "symbol": "BPYPO",
      "name": "Brookfield Property Partners L.P."
    },
    {
      "symbol": "BPYPP",
      "name": "Brookfield Property Partners L.P."
    },
    {
      "symbol": "BQ",
      "name": "Boqii Holding Ltd"
    },
    {
      "symbol": "BR",
      "name": "Broadridge Financial Solutions Inc"
    },
    {
      "symbol": "BRAC",
      "name": "Broad Capital Acquisition Corp"
    },
    {
      "symbol": "BRACR",
      "name": "Broad Capital Acquisition Corp"
    },
    {
      "symbol": "BRACU",
      "name": "Broad Capital Acquisition Corp - Units (1 Ord & 1 Rts)"
    },
    {
      "symbol": "BRAG",
      "name": "Bragg Gaming Group Inc"
    },
    {
      "symbol": "BRAZ",
      "name": "GLOBAL X BRAZIL ACTIVE ETF "
    },
    {
      "symbol": "BRBR",
      "name": "Bellring Brands Inc"
    },
    {
      "symbol": "BRBS",
      "name": "Blue Ridge Bankshares Inc (VA)"
    },
    {
      "symbol": "BRC",
      "name": "Brady Corp - Class A"
    },
    {
      "symbol": "BRCC",
      "name": "BRC Inc - Class A"
    },
    {
      "symbol": "BRDG",
      "name": "Bridge Investment Group Holdings Inc - Class A"
    },
    {
      "symbol": "BREA",
      "name": "Brera Holdings PLC - Class B"
    },
    {
      "symbol": "BREZ",
      "name": "Breeze Holdings Acquisition Corp"
    },
    {
      "symbol": "BREZR",
      "name": "Breeze Holdings Acquisition Corp"
    },
    {
      "symbol": "BREZW",
      "name": "Breeze Holdings Acquisition Corp - Warrants (20/11/2022)"
    },
    {
      "symbol": "BRF",
      "name": "VANECK BRAZIL SMALL-CAP ETF "
    },
    {
      "symbol": "BRFH",
      "name": "Barfresh Food Group Inc"
    },
    {
      "symbol": "BRFS",
      "name": "BRF S.A."
    },
    {
      "symbol": "BRID",
      "name": "Bridgford Foods Corp"
    },
    {
      "symbol": "BRK-A",
      "name": "Berkshire Hathaway Inc - Class A"
    },
    {
      "symbol": "BRK-B",
      "name": "Berkshire Hathaway Inc - Class B"
    },
    {
      "symbol": "BRKH",
      "name": "BurTech Acquisition Corp - Class A"
    },
    {
      "symbol": "BRKHU",
      "name": "BurTech Acquisition Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "BRKHW",
      "name": "BurTech Acquisition Corp - Warrants (18/12/2026)"
    },
    {
      "symbol": "BRKL",
      "name": "Brookline Bancorp Inc"
    },
    {
      "symbol": "BRKR",
      "name": "Bruker Corp"
    },
    {
      "symbol": "BRLI",
      "name": "Brilliant Acquisition Corp"
    },
    {
      "symbol": "BRLIR",
      "name": "Brilliant Acquisition Corp"
    },
    {
      "symbol": "BRLIU",
      "name": "Brilliant Acquisition Corp - Unit (1 Ordinary share 1 War and 1 Rts)"
    },
    {
      "symbol": "BRLIW",
      "name": "Brilliant Acquisition Corp - Warrants (31/03/2025)"
    },
    {
      "symbol": "BRLN",
      "name": "BlackRock Floating Rate Loan ETF"
    },
    {
      "symbol": "BRLS",
      "name": "Borealis Foods Inc - Class A"
    },
    {
      "symbol": "BRLSW",
      "name": "Borealis Foods Inc - Warrants (07/02/2029)"
    },
    {
      "symbol": "BRLT",
      "name": "Brilliant Earth Group Inc Class A"
    },
    {
      "symbol": "BRN",
      "name": "Barnwell Industries Inc"
    },
    {
      "symbol": "BRNS",
      "name": "Barinthus Biotherapeutics Plc."
    },
    {
      "symbol": "BRNY",
      "name": "BURNEY U.S. FACTOR ROTATION ETF "
    },
    {
      "symbol": "BRO",
      "name": "Brown & Brown Inc"
    },
    {
      "symbol": "BROG",
      "name": "Brooge Energy Ltd"
    },
    {
      "symbol": "BROGW",
      "name": "Brooge Energy Ltd - Warrants (22/12/2024)"
    },
    {
      "symbol": "BROS",
      "name": "Dutch Bros Inc - Class A"
    },
    {
      "symbol": "BRP",
      "name": "BRP Group Inc - Class A"
    },
    {
      "symbol": "BRRR",
      "name": "Valkyrie Bitcoin Fund"
    },
    {
      "symbol": "BRSH",
      "name": "Bruush Oral Care Inc"
    },
    {
      "symbol": "BRSHW",
      "name": "Bruush Oral Care Inc - Warrants (03/08/2027)"
    },
    {
      "symbol": "BRSP",
      "name": "BrightSpire Capital Inc - Class A"
    },
    {
      "symbol": "BRT",
      "name": "BRT Apartments Corp"
    },
    {
      "symbol": "BRTR",
      "name": "BlackRock Total Return ETF"
    },
    {
      "symbol": "BRTX",
      "name": "BioRestorative Therapies Inc"
    },
    {
      "symbol": "BRW",
      "name": "Saba Capital Income & Opportunities Fund"
    },
    {
      "symbol": "BRX",
      "name": "Brixmor Property Group Inc"
    },
    {
      "symbol": "BRY",
      "name": "Berry Corp"
    },
    {
      "symbol": "BRZE",
      "name": "Braze Inc - Class A"
    },
    {
      "symbol": "BRZU",
      "name": "DIREXION DAILY MSCI BRAZIL BULL 2X SHARES "
    },
    {
      "symbol": "BSAC",
      "name": "Banco Santander Chile SA"
    },
    {
      "symbol": "BSBK",
      "name": "Bogota Financial Corp"
    },
    {
      "symbol": "BSBR",
      "name": "Banco Santander (Brasil) S.A."
    },
    {
      "symbol": "BSCO",
      "name": "INVESCO BULLETSHARES 2024 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCP",
      "name": "INVESCO BULLETSHARES 2025 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCQ",
      "name": "INVESCO BULLETSHARES 2026 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCR",
      "name": "INVESCO BULLETSHARES 2027 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCS",
      "name": "INVESCO BULLETSHARES 2028 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCT",
      "name": "INVESCO BULLETSHARES 2029 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCU",
      "name": "INVESCO BULLETSHARES 2030 CORPORATE BOND ETF "
    },
    {
      "symbol": "BSCV",
      "name": "Invesco BulletShares 2031 Corporate Bond ETF"
    },
    {
      "symbol": "BSCW",
      "name": "Invesco BulletShares 2032 Corporate Bond ETF"
    },
    {
      "symbol": "BSCX",
      "name": "Invesco BulletShares 2033 Corporate Bond ETF"
    },
    {
      "symbol": "BSEA",
      "name": "ETFMG Breakwave Sea Decarbonization Tech ETF"
    },
    {
      "symbol": "BSEP",
      "name": "Innovator U.S. Equity Buffer ETF - September"
    },
    {
      "symbol": "BSET",
      "name": "Bassett Furniture Industries Inc"
    },
    {
      "symbol": "BSFC",
      "name": "Blue Star Foods Corp"
    },
    {
      "symbol": "BSGM",
      "name": "Biosig Technologies Inc"
    },
    {
      "symbol": "BSIG",
      "name": "BrightSphere Investment Group Inc"
    },
    {
      "symbol": "BSJO",
      "name": "INVESCO BULLETSHARES 2024 HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "BSJP",
      "name": "INVESCO BULLETSHARES 2025 HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "BSJQ",
      "name": "INVESCO BULLETSHARES 2026 HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "BSJR",
      "name": "INVESCO BULLETSHARES 2027 HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "BSJS",
      "name": "INVESCO BULLETSHARES 2028 HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "BSJT",
      "name": "Invesco BulletShares 2029 High Yield Corporate Bond ETF"
    },
    {
      "symbol": "BSJU",
      "name": "Invesco BulletShares 2030 High Yield Corporate Bond ETF"
    },
    {
      "symbol": "BSJV",
      "name": "Invesco BulletShares 2031 High Yield Corporate Bond ETF"
    },
    {
      "symbol": "BSL",
      "name": "Blackstone Senior Floating Rate 2027 Term Fund"
    },
    {
      "symbol": "BSM",
      "name": "Black Stone Minerals L.P."
    },
    {
      "symbol": "BSMC",
      "name": "Brandes U.S. Small-Mid Cap Value ETF"
    },
    {
      "symbol": "BSMO",
      "name": "INVESCO BULLETSHARES 2024 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMP",
      "name": "INVESCO BULLETSHARES 2025 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMQ",
      "name": "INVESCO BULLETSHARES 2026 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMR",
      "name": "INVESCO BULLETSHARES 2027 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMS",
      "name": "INVESCO BULLETSHARES 2028 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMT",
      "name": "INVESCO BULLETSHARES 2029 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMU",
      "name": "INVESCO BULLETSHARES 2030 MUNICIPAL BOND ETF "
    },
    {
      "symbol": "BSMV",
      "name": "Invesco BulletShares 2031 Municipal Bond ETF"
    },
    {
      "symbol": "BSMW",
      "name": "Invesco BulletShares 2032 Municipal Bond ETF"
    },
    {
      "symbol": "BSR",
      "name": "Beacon Selective Risk ETF"
    },
    {
      "symbol": "BSRR",
      "name": "Sierra Bancorp"
    },
    {
      "symbol": "BSSX",
      "name": "Invesco BulletShares 2033 Municipal Bond ETF"
    },
    {
      "symbol": "BST",
      "name": "BlackRock Science and Technology Trust"
    },
    {
      "symbol": "BSTP",
      "name": "Innovator Buffer Step-Up Strategy ETF"
    },
    {
      "symbol": "BSTZ",
      "name": "BlackRock Science and Technology Term Trust"
    },
    {
      "symbol": "BSV",
      "name": "VANGUARD SHORT-TERM BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "BSVN",
      "name": "Bank7 Corp"
    },
    {
      "symbol": "BSVO",
      "name": "EA Bridgeway Omni Small-Cap Value ETF"
    },
    {
      "symbol": "BSX",
      "name": "Boston Scientific Corp"
    },
    {
      "symbol": "BSY",
      "name": "Bentley Systems Inc - Class B"
    },
    {
      "symbol": "BTA",
      "name": "BlackRock Long-Term Municipal Advantage Trust"
    },
    {
      "symbol": "BTAI",
      "name": "BioXcel Therapeutics Inc"
    },
    {
      "symbol": "BTAL",
      "name": "AGF U.S. Market Neutral Anti-Beta Fund"
    },
    {
      "symbol": "BTBD",
      "name": "BT Brands Inc"
    },
    {
      "symbol": "BTBDW",
      "name": "BT Brands Inc - Warrants (12/11/2026)"
    },
    {
      "symbol": "BTBT",
      "name": "Bit Digital Inc"
    },
    {
      "symbol": "BTCM",
      "name": "BIT Mining Ltd"
    },
    {
      "symbol": "BTCO",
      "name": "Invesco Galaxy Bitcoin ETF"
    },
    {
      "symbol": "BTCS",
      "name": "BTCS Inc"
    },
    {
      "symbol": "BTCT",
      "name": "BTC Digital Ltd"
    },
    {
      "symbol": "BTCTW",
      "name": "BTC Digital Ltd - Warrants (31/03/2025)"
    },
    {
      "symbol": "BTCW",
      "name": "WisdomTree Bitcoin Fund"
    },
    {
      "symbol": "BTCY",
      "name": "Biotricity Inc"
    },
    {
      "symbol": "BTDR",
      "name": "Bitdeer Technologies Holding Company"
    },
    {
      "symbol": "BTE",
      "name": "Baytex Energy Corp"
    },
    {
      "symbol": "BTEC",
      "name": "PRINCIPAL HEALTHCARE INNOVATORS ETF "
    },
    {
      "symbol": "BTEK",
      "name": "BlackRock Future Tech ETF"
    },
    {
      "symbol": "BTF",
      "name": "VALKYRIE BITCOIN AND ETHER STRATEGY ETF "
    },
    {
      "symbol": "BTFX",
      "name": "Valkyrie Bitcoin Futures Leveraged Strategy ETF"
    },
    {
      "symbol": "BTG",
      "name": "B2gold Corp"
    },
    {
      "symbol": "BTHM",
      "name": "BlackRock Future U.S. Themes ETF"
    },
    {
      "symbol": "BTI",
      "name": "British American Tobacco Plc"
    },
    {
      "symbol": "BTM",
      "name": "Bitcoin Depot Inc"
    },
    {
      "symbol": "BTMD",
      "name": "biote Corp - Class A"
    },
    {
      "symbol": "BTMDW",
      "name": "biote Corp - Warrants (26/05/2027)"
    },
    {
      "symbol": "BTMWW",
      "name": "Bitcoin Depot Inc Warrant"
    },
    {
      "symbol": "BTO",
      "name": "John Hancock Financial Opportunities Fund"
    },
    {
      "symbol": "BTOG",
      "name": "Bit Origin Ltd"
    },
    {
      "symbol": "BTR",
      "name": "Beacon Tactical Risk ETF"
    },
    {
      "symbol": "BTRN",
      "name": "Global X Bitcoin Trend Strategy ETF"
    },
    {
      "symbol": "BTSG",
      "name": "BrightSpring Health Services Inc"
    },
    {
      "symbol": "BTSGU",
      "name": "BrightSpring Health Services Inc"
    },
    {
      "symbol": "BTT",
      "name": "BlackRock Municipal 2030 Target Term Trust"
    },
    {
      "symbol": "BTTR",
      "name": "Better Choice Company Inc"
    },
    {
      "symbol": "BTU",
      "name": "Peabody Energy Corp New"
    },
    {
      "symbol": "BTZ",
      "name": "BlackRock Credit Allocation Income Trust"
    },
    {
      "symbol": "BUCK",
      "name": "SIMPLIFY STABLE INCOME ETF "
    },
    {
      "symbol": "BUD",
      "name": "Anheuser-Busch InBev SA/NV"
    },
    {
      "symbol": "BUFB",
      "name": "Innovator Laddered Allocation Buffer ETF"
    },
    {
      "symbol": "BUFC",
      "name": "AB Conservative Buffer ETF"
    },
    {
      "symbol": "BUFD",
      "name": "FT VEST FUND OF DEEP BUFFER ETFS "
    },
    {
      "symbol": "BUFF",
      "name": "Innovator Laddered Allocation Power Buffer ETF"
    },
    {
      "symbol": "BUFG",
      "name": "FT VEST BUFFERED ALLOCATION GROWTH ETF "
    },
    {
      "symbol": "BUFQ",
      "name": "FT VEST FUND OF NASDAQ-100 BUFFER ETFS "
    },
    {
      "symbol": "BUFR",
      "name": "FT VEST FUND OF BUFFER ETFS "
    },
    {
      "symbol": "BUFT",
      "name": "FT VEST BUFFERED ALLOCATION DEFENSIVE ETF "
    },
    {
      "symbol": "BUFZ",
      "name": "FT Cboe Vest Laddered Moderate Buffer ETF"
    },
    {
      "symbol": "BUG",
      "name": "GLOBAL X CYBERSECURITY ETF "
    },
    {
      "symbol": "BUI",
      "name": "BlackRock Utility Infrastructure & Power Opportunities Trust"
    },
    {
      "symbol": "BUJA",
      "name": "Bukit Jalil Global Acquisition 1 Ltd"
    },
    {
      "symbol": "BUJAR",
      "name": "Bukit Jalil Global Acquisition 1 Ltd"
    },
    {
      "symbol": "BUJAU",
      "name": "Bukit Jalil Global Acquisition 1 Ltd - Units (1 Ord 1/2 War & 1 Rts)"
    },
    {
      "symbol": "BUJAW",
      "name": "Bukit Jalil Global Acquisition 1 Ltd - Warrants (02/05/2029)"
    },
    {
      "symbol": "BUL",
      "name": "Pacer US Cash Cows Growth ETF"
    },
    {
      "symbol": "BULD",
      "name": "PACER BLUESTAR ENGINEERING THE FUTURE ETF "
    },
    {
      "symbol": "BULZ",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "BUR",
      "name": "Burford Capital Ltd"
    },
    {
      "symbol": "BURL",
      "name": "Burlington Stores Inc"
    },
    {
      "symbol": "BURU",
      "name": "Nuburu Inc - Class A"
    },
    {
      "symbol": "BUSA",
      "name": "Brandes U.S. Value ETF"
    },
    {
      "symbol": "BUSE",
      "name": "First Busey Corp"
    },
    {
      "symbol": "BUXX",
      "name": "Strive Enhanced Income Short Maturity ETF"
    },
    {
      "symbol": "BUYW",
      "name": "MAIN BUYWRITE ETF "
    },
    {
      "symbol": "BUYZ",
      "name": "Franklin Disruptive Commerce ETF"
    },
    {
      "symbol": "BUZZ",
      "name": "VANECK SOCIAL SENTIMENT ETF "
    },
    {
      "symbol": "BV",
      "name": "BrightView Holdings Inc"
    },
    {
      "symbol": "BVFL",
      "name": "BV Financial Inc"
    },
    {
      "symbol": "BVN",
      "name": "Compania de Minas Buenaventura S.A."
    },
    {
      "symbol": "BVS",
      "name": "Bioventus Inc - Class A"
    },
    {
      "symbol": "BW",
      "name": "Babcock & Wilcox Enterprises Inc"
    },
    {
      "symbol": "BW-P-A",
      "name": "Babcock & Wilcox Enterprises Inc"
    },
    {
      "symbol": "BWA",
      "name": "BorgWarner Inc"
    },
    {
      "symbol": "BWA-W",
      "name": "BorgWarner Inc WhenIssued"
    },
    {
      "symbol": "BWAQ",
      "name": "Blue World Acquisition Corp - Class A"
    },
    {
      "symbol": "BWAQR",
      "name": "Blue World Acquisition Corp"
    },
    {
      "symbol": "BWAQU",
      "name": "Blue World Acquisition Corp - Units (1 Ord Class A & 1/2 War & 1 Right)"
    },
    {
      "symbol": "BWAQW",
      "name": "Blue World Acquisition Corp - Warrants (10/01/2029)"
    },
    {
      "symbol": "BWAY",
      "name": "Brainsway Ltd"
    },
    {
      "symbol": "BWB",
      "name": "Bridgewater Bancshares Inc"
    },
    {
      "symbol": "BWBBP",
      "name": "Bridgewater Bancshares Inc"
    },
    {
      "symbol": "BWCAU",
      "name": "Blue Whale Acquisition Corp I - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "BWEB",
      "name": "Bitwise Web3 ETF"
    },
    {
      "symbol": "BWEN",
      "name": "Broadwind Inc"
    },
    {
      "symbol": "BWET",
      "name": "Breakwave Tanker Shipping ETF"
    },
    {
      "symbol": "BWFG",
      "name": "Bankwell Financial Group Inc"
    },
    {
      "symbol": "BWG",
      "name": "BrandywineGLOBAL - Global Income Opportunities Fund Inc"
    },
    {
      "symbol": "BWMN",
      "name": "Bowman Consulting Group Ltd"
    },
    {
      "symbol": "BWMX",
      "name": "Betterware de Mexico S.A.P.I. de C.V"
    },
    {
      "symbol": "BWNB",
      "name": "Babcock & Wilcox Enterprises Inc"
    },
    {
      "symbol": "BWSN",
      "name": "Babcock & Wilcox Enterprises Inc"
    },
    {
      "symbol": "BWTG",
      "name": "Brendan Wood TopGun ETF"
    },
    {
      "symbol": "BWX",
      "name": "SPDR Bloomberg International Treasury Bond ETF"
    },
    {
      "symbol": "BWXT",
      "name": "BWX Technologies Inc"
    },
    {
      "symbol": "BWZ",
      "name": "SPDR(R) BLOOMBERG SHORT TERM INTERNATIONAL TREASURY BOND ETF "
    },
    {
      "symbol": "BX",
      "name": "Blackstone Inc"
    },
    {
      "symbol": "BXC",
      "name": "Bluelinx Hldgs Inc"
    },
    {
      "symbol": "BXMT",
      "name": "Blackstone Mortgage Trust Inc - Class A"
    },
    {
      "symbol": "BXMX",
      "name": "Nuveen S&P 500 Buy-Write Income Fund"
    },
    {
      "symbol": "BXP",
      "name": "Boston Properties Inc"
    },
    {
      "symbol": "BXSL",
      "name": "Blackstone Secured Lending Fund."
    },
    {
      "symbol": "BY",
      "name": "Byline Bancorp Inc"
    },
    {
      "symbol": "BYD",
      "name": "Boyd Gaming Corp"
    },
    {
      "symbol": "BYFC",
      "name": "Broadway Financial Corp"
    },
    {
      "symbol": "BYLD",
      "name": "ISHARES YIELD OPTIMIZED BOND ETF "
    },
    {
      "symbol": "BYM",
      "name": "BlackRock Municipal Income Quality Trust"
    },
    {
      "symbol": "BYND",
      "name": "Beyond Meat Inc"
    },
    {
      "symbol": "BYNO",
      "name": "byNordic Acquisition Corporation - Class A"
    },
    {
      "symbol": "BYNOU",
      "name": "byNordic Acquisition Corporation - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "BYNOW",
      "name": "byNordic Acquisition Corporation - Warrants (01/07/2027)"
    },
    {
      "symbol": "BYON",
      "name": "Beyond Inc"
    },
    {
      "symbol": "BYRE",
      "name": "PRINCIPAL REAL ESTATE ACTIVE OPPORTUNITIES ETF "
    },
    {
      "symbol": "BYRN",
      "name": "Byrna Technologies Inc"
    },
    {
      "symbol": "BYSI",
      "name": "BeyondSpring Inc"
    },
    {
      "symbol": "BYTE",
      "name": "Roundhill IO Digital Infrastructure ETF"
    },
    {
      "symbol": "BYU",
      "name": "Baiyu Holdings Inc"
    },
    {
      "symbol": "BZ",
      "name": "Kanzhun Ltd"
    },
    {
      "symbol": "BZFD",
      "name": "BuzzFeed Inc - Class A"
    },
    {
      "symbol": "BZFDW",
      "name": "BuzzFeed Inc - Warrants (01/12/2026)"
    },
    {
      "symbol": "BZH",
      "name": "Beazer Homes USA Inc"
    },
    {
      "symbol": "BZQ",
      "name": "ProShares UltraShort MSCI Brazil Capped ETF -2x Shares"
    },
    {
      "symbol": "BZUN",
      "name": "Baozun Inc"
    },
    {
      "symbol": "C",
      "name": "Citigroup Inc"
    },
    {
      "symbol": "C-P-K",
      "name": "Citigroup Inc"
    },
    {
      "symbol": "C-P-N",
      "name": "Citigroup Capital VIII 7875 Fixed rate Floating Rate trust Preferred Securities TruPS"
    },
    {
      "symbol": "CA",
      "name": "Xtrackers California Municipal Bonds ETF"
    },
    {
      "symbol": "CAAA",
      "name": "First Trust Commercial Mortgage Opportunities ETF"
    },
    {
      "symbol": "CAAP",
      "name": "Corporacion America Airports S.A."
    },
    {
      "symbol": "CAAS",
      "name": "China Automotive Systems Inc"
    },
    {
      "symbol": "CABA",
      "name": "Cabaletta Bio Inc"
    },
    {
      "symbol": "CABO",
      "name": "Cable One Inc"
    },
    {
      "symbol": "CAC",
      "name": "Camden National Corp"
    },
    {
      "symbol": "CACC",
      "name": "Credit Acceptance Corp"
    },
    {
      "symbol": "CACG",
      "name": "ClearBridge All Cap Growth ESG ETF"
    },
    {
      "symbol": "CACI",
      "name": "Caci International Inc"
    },
    {
      "symbol": "CACO",
      "name": "Caravelle International Group"
    },
    {
      "symbol": "CADE",
      "name": "Cadence Bancorporation - Class A"
    },
    {
      "symbol": "CADE-P-A",
      "name": "Cadence Bank"
    },
    {
      "symbol": "CADL",
      "name": "Candel Therapeutics Inc"
    },
    {
      "symbol": "CAE",
      "name": "Cae Inc"
    },
    {
      "symbol": "CAF",
      "name": "Morgan Stanley China A Share Fund Inc"
    },
    {
      "symbol": "CAFG",
      "name": "Pacer US Small Cap Cash Cows Growth Leaders ETF"
    },
    {
      "symbol": "CAG",
      "name": "Conagra Brands Inc"
    },
    {
      "symbol": "CAH",
      "name": "Cardinal Health Inc"
    },
    {
      "symbol": "CAKE",
      "name": "Cheesecake Factory Inc"
    },
    {
      "symbol": "CAL",
      "name": "Caleres Inc"
    },
    {
      "symbol": "CALB",
      "name": "California Bancorp"
    },
    {
      "symbol": "CALC",
      "name": "CalciMedica Inc"
    },
    {
      "symbol": "CALF",
      "name": "Pacer US Small Cap Cash Cows 100 ETF"
    },
    {
      "symbol": "CALM",
      "name": "Cal-Maine Foods Inc"
    },
    {
      "symbol": "CALT",
      "name": "Calliditas Therapeutics AB"
    },
    {
      "symbol": "CALX",
      "name": "Calix Inc"
    },
    {
      "symbol": "CALY",
      "name": "BlackRock Short-Term California Muni Bond ETF"
    },
    {
      "symbol": "CAML",
      "name": "CONGRESS LARGE CAP GROWTH ETF "
    },
    {
      "symbol": "CAMP",
      "name": "Calamp Corp"
    },
    {
      "symbol": "CAMT",
      "name": "Camtek Ltd"
    },
    {
      "symbol": "CAMX",
      "name": "CAMBIAR AGGRESSIVE VALUE ETF "
    },
    {
      "symbol": "CAN",
      "name": "Canaan Inc"
    },
    {
      "symbol": "CANB",
      "name": "Can B Corp"
    },
    {
      "symbol": "CANC",
      "name": "Tema Oncology ETF"
    },
    {
      "symbol": "CANE",
      "name": "Teucrium Sugar Fund"
    },
    {
      "symbol": "CANF",
      "name": "Can-Fite Biopharma Ltd"
    },
    {
      "symbol": "CANG",
      "name": "Cango Inc"
    },
    {
      "symbol": "CANQ",
      "name": "Calamos Alternative Nasdaq & Bond ETF"
    },
    {
      "symbol": "CAOS",
      "name": "ALPHA ARCHITECT TAIL RISK ETF "
    },
    {
      "symbol": "CAPE",
      "name": "DOUBLELINE SHILLER CAPE U.S. EQUITIES ETF "
    },
    {
      "symbol": "CAPL",
      "name": "CrossAmerica Partners LP"
    },
    {
      "symbol": "CAPR",
      "name": "Capricor Therapeutics Inc"
    },
    {
      "symbol": "CAPT",
      "name": "Captivision Inc"
    },
    {
      "symbol": "CAPTW",
      "name": "Captivision Inc - Warrants (15/11/2028)"
    },
    {
      "symbol": "CAR",
      "name": "Avis Budget Group Inc"
    },
    {
      "symbol": "CARA",
      "name": "Cara Therapeutics Inc"
    },
    {
      "symbol": "CARD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "CARE",
      "name": "Carter Bankshares Inc"
    },
    {
      "symbol": "CARG",
      "name": "CarGurus Inc - Class A"
    },
    {
      "symbol": "CARK",
      "name": "CastleArk Large Growth ETF"
    },
    {
      "symbol": "CARM",
      "name": "Carisma Therapeutics Inc"
    },
    {
      "symbol": "CARR",
      "name": "Carrier Global Corp"
    },
    {
      "symbol": "CARS",
      "name": "Cars.com"
    },
    {
      "symbol": "CART",
      "name": "Maplebear Inc"
    },
    {
      "symbol": "CARU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "CARV",
      "name": "Carver Bancorp Inc"
    },
    {
      "symbol": "CARY",
      "name": "Angel Oak Income ETF"
    },
    {
      "symbol": "CARZ",
      "name": "FIRST TRUST S-NETWORK FUTURE VEHICLES & TECHNOLOGY ETF "
    },
    {
      "symbol": "CASH",
      "name": "Pathward Financial Inc"
    },
    {
      "symbol": "CASI",
      "name": "CASI Pharmaceuticals Inc"
    },
    {
      "symbol": "CASS",
      "name": "Cass Information Systems Inc"
    },
    {
      "symbol": "CASY",
      "name": "Casey`s General Stores Inc"
    },
    {
      "symbol": "CAT",
      "name": "Caterpillar Inc"
    },
    {
      "symbol": "CATC",
      "name": "Cambridge Bancorp"
    },
    {
      "symbol": "CATH",
      "name": "GLOBAL X S&P 500 CATHOLIC VALUES ETF "
    },
    {
      "symbol": "CATO",
      "name": "Cato Corp - Class A"
    },
    {
      "symbol": "CATX",
      "name": "Perspective Therapeutics Inc"
    },
    {
      "symbol": "CATY",
      "name": "Cathay General Bancorp"
    },
    {
      "symbol": "CAUD",
      "name": "Collective Audience Inc"
    },
    {
      "symbol": "CAVA",
      "name": "Cava Group Inc"
    },
    {
      "symbol": "CB",
      "name": "Chubb Ltd"
    },
    {
      "symbol": "CBAN",
      "name": "Colony Bankcorp Inc"
    },
    {
      "symbol": "CBAT",
      "name": "CBAK Energy Technology Inc"
    },
    {
      "symbol": "CBFV",
      "name": "CB Financial Services Inc"
    },
    {
      "symbol": "CBH",
      "name": "Virtus Convertible & Income 2024 Target Term Fund"
    },
    {
      "symbol": "CBL",
      "name": "CBL& Associates Properties Inc - New"
    },
    {
      "symbol": "CBLS",
      "name": "CLOUGH LONG/SHORT EQUITY ETF "
    },
    {
      "symbol": "CBNK",
      "name": "Capital Bancorp Inc"
    },
    {
      "symbol": "CBO",
      "name": "NYSE LISTED TEST STOCK FOR CTS AND CQS"
    },
    {
      "symbol": "CBOE",
      "name": "Cboe Global Markets Inc"
    },
    {
      "symbol": "CBON",
      "name": "VanEck China Bond ETF"
    },
    {
      "symbol": "CBRE",
      "name": "CBRE Group Inc - Class A"
    },
    {
      "symbol": "CBRG",
      "name": "Chain Bridge I - Class A"
    },
    {
      "symbol": "CBRGU",
      "name": "Chain Bridge I - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "CBRL",
      "name": "Cracker Barrel Old Country Store Inc"
    },
    {
      "symbol": "CBSE",
      "name": "CLOUGH SELECT EQUITY ETF "
    },
    {
      "symbol": "CBSH",
      "name": "Commerce Bancshares Inc"
    },
    {
      "symbol": "CBT",
      "name": "Cabot Corp"
    },
    {
      "symbol": "CBU",
      "name": "Community Bank System Inc"
    },
    {
      "symbol": "CBUS",
      "name": "Cibus Global Ltd. Class A"
    },
    {
      "symbol": "CBX",
      "name": "NYSE LISTED TEST"
    },
    {
      "symbol": "CBZ",
      "name": "Cbiz Inc"
    },
    {
      "symbol": "CC",
      "name": "Chemours Company"
    },
    {
      "symbol": "CCAIU",
      "name": "Cascadia Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "CCAP",
      "name": "Crescent Capital BDC Inc"
    },
    {
      "symbol": "CCB",
      "name": "Coastal Financial Corp"
    },
    {
      "symbol": "CCBG",
      "name": "Capital City Bank Group Inc"
    },
    {
      "symbol": "CCCC",
      "name": "C4 Therapeutics Inc"
    },
    {
      "symbol": "CCCS",
      "name": "CCC Intelligent Solutions Holdings Inc"
    },
    {
      "symbol": "CCD",
      "name": "Calamos Dynamic Convertible and Income Fund"
    },
    {
      "symbol": "CCEF",
      "name": "Calamos CEF Income & Arbitrage ETF"
    },
    {
      "symbol": "CCEL",
      "name": "Cryo-Cell International Inc"
    },
    {
      "symbol": "CCEP",
      "name": "Coca-Cola Europacific Partners Plc"
    },
    {
      "symbol": "CCF",
      "name": "Chase Corp"
    },
    {
      "symbol": "CCG",
      "name": "Cheche Group Inc - Class A"
    },
    {
      "symbol": "CCGWW",
      "name": "Cheche Group Inc - Warrants (01/10/2030)"
    },
    {
      "symbol": "CCI",
      "name": "Crown Castle Inc"
    },
    {
      "symbol": "CCIA",
      "name": "Carlyle Credit Income Fund"
    },
    {
      "symbol": "CCIF",
      "name": "Carlyle Credit Income Fund"
    },
    {
      "symbol": "CCJ",
      "name": "Cameco Corp"
    },
    {
      "symbol": "CCK",
      "name": "Crown Holdings Inc"
    },
    {
      "symbol": "CCL",
      "name": "Carnival Corp (Paired Stock)"
    },
    {
      "symbol": "CCLD",
      "name": "CareCloud Inc"
    },
    {
      "symbol": "CCLDO",
      "name": "CareCloud Inc"
    },
    {
      "symbol": "CCLDP",
      "name": "CareCloud Inc"
    },
    {
      "symbol": "CCM",
      "name": "Concord Medical Services"
    },
    {
      "symbol": "CCMG",
      "name": "CCM Global Equity ETF"
    },
    {
      "symbol": "CCNE",
      "name": "CNB Financial Corp (PA)"
    },
    {
      "symbol": "CCNEP",
      "name": "CNB Financial Corp (PA)"
    },
    {
      "symbol": "CCO",
      "name": "Clear Channel Outdoor Holdings Inc"
    },
    {
      "symbol": "CCOI",
      "name": "Cogent Communications Holdings Inc"
    },
    {
      "symbol": "CCOR",
      "name": "Core Alternative ETF"
    },
    {
      "symbol": "CCRD",
      "name": "CoreCard Corporation - Class A"
    },
    {
      "symbol": "CCRN",
      "name": "Cross Country Healthcares Inc"
    },
    {
      "symbol": "CCRV",
      "name": "ISHARES COMMODITY CURVE CARRY STRATEGY ETF "
    },
    {
      "symbol": "CCS",
      "name": "Century Communities Inc"
    },
    {
      "symbol": "CCSB",
      "name": "Carbon Collective Short Duration Green Bond ETF"
    },
    {
      "symbol": "CCSI",
      "name": "Consensus Cloud Solutions Inc"
    },
    {
      "symbol": "CCSO",
      "name": "CARBON COLLECTIVE CLIMATE SOLUTIONS U.S. EQUITY ETF "
    },
    {
      "symbol": "CCTG",
      "name": "CCSC Technology International Holdings Ltd"
    },
    {
      "symbol": "CCTS",
      "name": "Cactus Acquisition Corp 1 Ltd - Class A"
    },
    {
      "symbol": "CCTSU",
      "name": "Cactus Acquisition Corp 1 Ltd - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "CCTSW",
      "name": "Cactus Acquisition Corp 1 Ltd - Warrants(17/08/2028)"
    },
    {
      "symbol": "CCU",
      "name": "Compania Cervecerias Unidas S.A."
    },
    {
      "symbol": "CCV",
      "name": "Churchill Capital Corp V - Class A"
    },
    {
      "symbol": "CCV-U",
      "name": "Churchill Capital Corp V - Units (1 Ord Class A & 1/4 War)"
    },
    {
      "symbol": "CCV-WS",
      "name": "Churchill Capital Corp V - Warrants (29/10/2027)"
    },
    {
      "symbol": "CCZ",
      "name": "Comcast Corp"
    },
    {
      "symbol": "CDAQ",
      "name": "Compass Digital Acquisition Corp - Class A"
    },
    {
      "symbol": "CDAQU",
      "name": "Compass Digital Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "CDAQW",
      "name": "Compass Digital Acquisition Corp - Warrants (29/09/2026)"
    },
    {
      "symbol": "CDC",
      "name": "VictoryShares US EQ Income Enhanced Volatility Wtd ETF"
    },
    {
      "symbol": "CDE",
      "name": "Coeur Mining Inc"
    },
    {
      "symbol": "CDIO",
      "name": "Cardio Diagnostics Holdings Inc"
    },
    {
      "symbol": "CDIOW",
      "name": "Cardio Diagnostics Holdings Inc - Warrants (01/12/2026)"
    },
    {
      "symbol": "CDL",
      "name": "VictoryShares US Large Cap High Div Volatility Wtd ETF"
    },
    {
      "symbol": "CDLR",
      "name": "Cadeler AS"
    },
    {
      "symbol": "CDLR-W",
      "name": "Cadeler AS American Depositary Share each representing four 4 WhenIssued"
    },
    {
      "symbol": "CDLX",
      "name": "Cardlytics Inc"
    },
    {
      "symbol": "CDMO",
      "name": "Avid Bioservices Inc"
    },
    {
      "symbol": "CDNA",
      "name": "Caredx Inc"
    },
    {
      "symbol": "CDNS",
      "name": "Cadence Design Systems Inc"
    },
    {
      "symbol": "CDP",
      "name": "COPT Defense Properties"
    },
    {
      "symbol": "CDR-P-B",
      "name": "Cedar Realty Trust Inc"
    },
    {
      "symbol": "CDR-P-C",
      "name": "Cedar Realty Trust Inc"
    },
    {
      "symbol": "CDRE",
      "name": "Cadre Holdings Inc"
    },
    {
      "symbol": "CDRO",
      "name": "Codere Online Luxembourg S.A"
    },
    {
      "symbol": "CDROW",
      "name": "Codere Online Luxembourg S.A - Warrants (23/11/2026)"
    },
    {
      "symbol": "CDT",
      "name": "Conduit Pharmaceuticals Inc"
    },
    {
      "symbol": "CDTG",
      "name": "CDT Environmental Technology Investment Holdings Ltd"
    },
    {
      "symbol": "CDTTW",
      "name": "Conduit Pharmaceuticals Inc Wt Exp"
    },
    {
      "symbol": "CDTX",
      "name": "Cidara Therapeutics Inc"
    },
    {
      "symbol": "CDW",
      "name": "CDW Corp"
    },
    {
      "symbol": "CDX",
      "name": "SIMPLIFY HIGH YIELD PLUS CREDIT HEDGE ETF "
    },
    {
      "symbol": "CDXC",
      "name": "Chromadex Corp"
    },
    {
      "symbol": "CDXS",
      "name": "Codexis Inc"
    },
    {
      "symbol": "CDZI",
      "name": "Cadiz Inc"
    },
    {
      "symbol": "CDZIP",
      "name": "Cadiz Inc"
    },
    {
      "symbol": "CE",
      "name": "Celanese Corp - Series A"
    },
    {
      "symbol": "CEAD",
      "name": "CEA Industries Inc"
    },
    {
      "symbol": "CEADW",
      "name": "CEA Industries Inc - Warrants (11/02/2027)"
    },
    {
      "symbol": "CECO",
      "name": "Ceco Environmental Corp"
    },
    {
      "symbol": "CEE",
      "name": "Central and Eastern Europe Fund Inc (The)"
    },
    {
      "symbol": "CEF",
      "name": "Sprott Physical Gold and Silver Trust"
    },
    {
      "symbol": "CEFA",
      "name": "GLOBAL X S&P CATHOLIC VALUES DEVELOPED EX-U.S. ETF "
    },
    {
      "symbol": "CEFD",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "CEFS",
      "name": "SABA CLOSED-END FUNDS ETF "
    },
    {
      "symbol": "CEG",
      "name": "Constellation Energy Corporation"
    },
    {
      "symbol": "CEI",
      "name": "Camber Energy Inc"
    },
    {
      "symbol": "CEIX",
      "name": "Consol Energy Inc"
    },
    {
      "symbol": "CELC",
      "name": "Celcuity Inc"
    },
    {
      "symbol": "CELG-R",
      "name": "BristolMyers Squibb Company. Contingent Value Rt 12312030"
    },
    {
      "symbol": "CELH",
      "name": "Celsius Holdings Inc"
    },
    {
      "symbol": "CELU",
      "name": "Celularity Inc - Class A"
    },
    {
      "symbol": "CELUW",
      "name": "Celularity Inc - Warrants (16/07/2026)"
    },
    {
      "symbol": "CELZ",
      "name": "Creative Medical Technology Holdings Inc"
    },
    {
      "symbol": "CEM",
      "name": "ClearBridge MLP and Midstream Fund Inc"
    },
    {
      "symbol": "CEMB",
      "name": "ISHARES J.P. MORGAN EM CORPORATE BOND ETF "
    },
    {
      "symbol": "CEN",
      "name": "Center Coast Brookfield MLP & Energy Infrastructure Fund"
    },
    {
      "symbol": "CENN",
      "name": "Cenntro Electric Group Ltd"
    },
    {
      "symbol": "CENT",
      "name": "Central Garden & Pet Company"
    },
    {
      "symbol": "CENTA",
      "name": "Central Garden & Pet Co. - Class A"
    },
    {
      "symbol": "CENX",
      "name": "Century Aluminum Company"
    },
    {
      "symbol": "CEPU",
      "name": "Central Puerto"
    },
    {
      "symbol": "CEQP-P",
      "name": "Crestwood Equity Partners LP Preferred Units representing limited partner interests"
    },
    {
      "symbol": "CERE",
      "name": "Cerevel Therapeutics Holdings Inc"
    },
    {
      "symbol": "CERO",
      "name": "CERo Therapeutics Holdings Inc"
    },
    {
      "symbol": "CEROW",
      "name": "CERo Therapeutics Holdings Inc - Warrants (13/02/2029)"
    },
    {
      "symbol": "CERS",
      "name": "Cerus Corp"
    },
    {
      "symbol": "CERT",
      "name": "Certara Inc"
    },
    {
      "symbol": "CET",
      "name": "Central Securities Corp"
    },
    {
      "symbol": "CETF",
      "name": "DriveWealth NYSE 100 Index ETF"
    },
    {
      "symbol": "CETU",
      "name": "Cetus Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "CETUR",
      "name": "Cetus Capital Acquisition Corp"
    },
    {
      "symbol": "CETUU",
      "name": "Cetus Capital Acquisition Corp - Units (1 Ord Share Class A 1 War & 1 Right )"
    },
    {
      "symbol": "CETUW",
      "name": "Cetus Capital Acquisition Corp - Warrants (31/01/2028)"
    },
    {
      "symbol": "CETX",
      "name": "Cemtrex Inc"
    },
    {
      "symbol": "CETY",
      "name": "Clean Energy Technologies Inc"
    },
    {
      "symbol": "CEV",
      "name": "Eaton Vance California Municipal Income Trust"
    },
    {
      "symbol": "CEVA",
      "name": "Ceva Inc"
    },
    {
      "symbol": "CEW",
      "name": "WISDOMTREE EMERGING CURRENCY STRATEGY FUND "
    },
    {
      "symbol": "CF",
      "name": "CF Industries Holdings Inc"
    },
    {
      "symbol": "CFA",
      "name": "VICTORYSHARES US 500 VOLATILITY WTD ETF "
    },
    {
      "symbol": "CFB",
      "name": "Crossfirst Bankshares Inc"
    },
    {
      "symbol": "CFBK",
      "name": "CF Bankshares Inc"
    },
    {
      "symbol": "CFCV",
      "name": "CLEARBRIDGE FOCUS VALUE ESG ETF "
    },
    {
      "symbol": "CFFI",
      "name": "C & F Financial Corp"
    },
    {
      "symbol": "CFFN",
      "name": "Capitol Federal Financial"
    },
    {
      "symbol": "CFFS",
      "name": "CF Acquisition Corp VII - Class A"
    },
    {
      "symbol": "CFFSU",
      "name": "CF Acquisition Corp VII - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "CFFSW",
      "name": "CF Acquisition Corp VII - Warrants (31/03/2028)"
    },
    {
      "symbol": "CFG",
      "name": "Citizens Financial Group Inc"
    },
    {
      "symbol": "CFG-P-D",
      "name": "Citizens Financial Group Inc"
    },
    {
      "symbol": "CFG-P-E",
      "name": "Citizens Financial Group Inc"
    },
    {
      "symbol": "CFLT",
      "name": "Confluent Inc Class A"
    },
    {
      "symbol": "CFMS",
      "name": "Conformis Inc"
    },
    {
      "symbol": "CFO",
      "name": "VictoryShares US 500 Enhanced Volatility Wtd ETF"
    },
    {
      "symbol": "CFR",
      "name": "Cullen Frost Bankers Inc"
    },
    {
      "symbol": "CFR-P-B",
      "name": "Cullen Frost Bankers Inc"
    },
    {
      "symbol": "CFSB",
      "name": "CFSB Bancorp Inc"
    },
    {
      "symbol": "CG",
      "name": "Carlyle Group Inc (The)"
    },
    {
      "symbol": "CGA",
      "name": "China Green Agriculture Inc"
    },
    {
      "symbol": "CGABL",
      "name": "Carlyle Finance LLC"
    },
    {
      "symbol": "CGAU",
      "name": "Vitalist Inc"
    },
    {
      "symbol": "CGBD",
      "name": "Carlyle Secured Lending Inc"
    },
    {
      "symbol": "CGBDL",
      "name": "Carlyle Secured Lending Inc"
    },
    {
      "symbol": "CGBL",
      "name": "CAPITAL GROUP CORE BALANCED ETF SHARE CLASS"
    },
    {
      "symbol": "CGC",
      "name": "Canopy Growth Corporation"
    },
    {
      "symbol": "CGCB",
      "name": "CAPITAL GROUP CORE BOND ETF SHARE CLASS"
    },
    {
      "symbol": "CGCP",
      "name": "CAPITAL GROUP CORE PLUS INCOME ETF SHARE CLASS"
    },
    {
      "symbol": "CGDG",
      "name": "Capital Group Dividend Growers ETF"
    },
    {
      "symbol": "CGDV",
      "name": "Capital Group Dividend Value ETF"
    },
    {
      "symbol": "CGEM",
      "name": "Cullinan Oncology Inc"
    },
    {
      "symbol": "CGEN",
      "name": "Compugen Ltd"
    },
    {
      "symbol": "CGGO",
      "name": "Capital Group Global Growth Equity ETF"
    },
    {
      "symbol": "CGGR",
      "name": "Capital Group Growth ETF"
    },
    {
      "symbol": "CGIE",
      "name": "Capital Group International Equity ETF"
    },
    {
      "symbol": "CGMS",
      "name": "CAPITAL GROUP U.S. MULTI-SECTOR INCOME ETF SHARE CLASS"
    },
    {
      "symbol": "CGMU",
      "name": "CAPITAL GROUP MUNICIPAL INCOME ETF SHARE CLASS"
    },
    {
      "symbol": "CGNT",
      "name": "Cognyte Software Ltd"
    },
    {
      "symbol": "CGNX",
      "name": "Cognex Corp"
    },
    {
      "symbol": "CGO",
      "name": "Calamos Global Total Return Fund"
    },
    {
      "symbol": "CGON",
      "name": "Cg Oncology Inc"
    },
    {
      "symbol": "CGRO",
      "name": "CoreValues Alpha Greater China Growth ETF"
    },
    {
      "symbol": "CGSD",
      "name": "CAPITAL GROUP SHORT DURATION INCOME ETF SHARE CLASS"
    },
    {
      "symbol": "CGSM",
      "name": "CAPITAL GROUP SHORT DURATION MUNICIPAL INCOME ETF SHARE CLASS"
    },
    {
      "symbol": "CGTX",
      "name": "Cognition Therapeutics Inc"
    },
    {
      "symbol": "CGUS",
      "name": "Capital Group Core Equity ETF"
    },
    {
      "symbol": "CGV",
      "name": "Conductor Global Equity Value ETF"
    },
    {
      "symbol": "CGW",
      "name": "INVESCO S&P GLOBAL WATER INDEX ETF "
    },
    {
      "symbol": "CGXU",
      "name": "Capital Group International Focus Equity ETF"
    },
    {
      "symbol": "CHAA",
      "name": "Catcha Investment Corp - Class A"
    },
    {
      "symbol": "CHAI",
      "name": "DEFIANCE ISRAEL FIXED INCOME ETF "
    },
    {
      "symbol": "CHAT",
      "name": "Roundhill Generative AI & Technology ETF"
    },
    {
      "symbol": "CHAU",
      "name": "DIREXION DAILY CSI 300 CHINA A SHARE BULL 2X SHARES "
    },
    {
      "symbol": "CHCI",
      "name": "Comstock Holding Co. Inc - Class A"
    },
    {
      "symbol": "CHCO",
      "name": "City Holding Company"
    },
    {
      "symbol": "CHCT",
      "name": "Community Healthcare Trust Inc"
    },
    {
      "symbol": "CHD",
      "name": "Church & Dwight Co. Inc"
    },
    {
      "symbol": "CHDN",
      "name": "Churchill Downs Inc"
    },
    {
      "symbol": "CHE",
      "name": "Chemed Corp"
    },
    {
      "symbol": "CHEF",
      "name": "Chefs` Warehouse Inc"
    },
    {
      "symbol": "CHEK",
      "name": "Check-Cap Ltd"
    },
    {
      "symbol": "CHGG",
      "name": "Chegg Inc"
    },
    {
      "symbol": "CHGX",
      "name": "AXS Change Finance ESG ETF"
    },
    {
      "symbol": "CHH",
      "name": "Choice Hotels International Inc"
    },
    {
      "symbol": "CHI",
      "name": "Calamos Convertible Opportunities and Income Fund"
    },
    {
      "symbol": "CHIQ",
      "name": "GLOBAL X MSCI CHINA CONSUMER DISCRETIONARY ETF "
    },
    {
      "symbol": "CHK",
      "name": "Chesapeake Energy Corp - New"
    },
    {
      "symbol": "CHKEL",
      "name": "Chesapeake Energy Corp - Warrants - Class C (01/03/2026)"
    },
    {
      "symbol": "CHKEW",
      "name": "Chesapeake Energy Corp - Warrants - Class A (01/03/2026)"
    },
    {
      "symbol": "CHKEZ",
      "name": "Chesapeake Energy Corp - Warrants - Class B (01/03/2026)"
    },
    {
      "symbol": "CHKP",
      "name": "Check Point Software Technologies Ltd"
    },
    {
      "symbol": "CHMG",
      "name": "Chemung Financial Corp"
    },
    {
      "symbol": "CHMI",
      "name": "Cherry Hill Mortgage Investment Corporation"
    },
    {
      "symbol": "CHMI-P-A",
      "name": "Cherry Hill Mortgage Investment Corporation"
    },
    {
      "symbol": "CHMI-P-B",
      "name": "Cherry Hill Mortgage Investment Corporation"
    },
    {
      "symbol": "CHN",
      "name": "China Fund Inc"
    },
    {
      "symbol": "CHNR",
      "name": "China Natural Resources Inc"
    },
    {
      "symbol": "CHPS",
      "name": "Xtrackers Semiconductor Select Equity ETF"
    },
    {
      "symbol": "CHPT",
      "name": "ChargePoint Holdings Inc - Class A"
    },
    {
      "symbol": "CHR",
      "name": "Cheer Holding Inc"
    },
    {
      "symbol": "CHRD",
      "name": "Chord Energy Corp - New"
    },
    {
      "symbol": "CHRO",
      "name": "Chromocell Therapeutics Corp"
    },
    {
      "symbol": "CHRS",
      "name": "Coherus Biosciences Inc"
    },
    {
      "symbol": "CHRW",
      "name": "C.H. Robinson Worldwide Inc"
    },
    {
      "symbol": "CHSCL",
      "name": "CHS Inc"
    },
    {
      "symbol": "CHSCM",
      "name": "CHS Inc"
    },
    {
      "symbol": "CHSCN",
      "name": "CHS Inc"
    },
    {
      "symbol": "CHSCO",
      "name": "CHS Inc"
    },
    {
      "symbol": "CHSCP",
      "name": "CHS Inc"
    },
    {
      "symbol": "CHSN",
      "name": "Chanson International Holding - Class A"
    },
    {
      "symbol": "CHT",
      "name": "Chunghwa Telecom"
    },
    {
      "symbol": "CHTR",
      "name": "Charter Communications Inc - Class A"
    },
    {
      "symbol": "CHUY",
      "name": "Chuy`s Holdings Inc"
    },
    {
      "symbol": "CHW",
      "name": "Calamos Global Dynamic Income Fund"
    },
    {
      "symbol": "CHWY",
      "name": "Chewy Inc - Class A"
    },
    {
      "symbol": "CHX",
      "name": "ChampionX Corp"
    },
    {
      "symbol": "CHY",
      "name": "Calamos Convertible and High Income Fund"
    },
    {
      "symbol": "CI",
      "name": "Cigna Group (The)"
    },
    {
      "symbol": "CIA",
      "name": "Citizens Inc - Class A"
    },
    {
      "symbol": "CIB",
      "name": "Bancolombia S.A."
    },
    {
      "symbol": "CIBR",
      "name": "FIRST TRUST NASDAQ CYBERSECURITY ETF "
    },
    {
      "symbol": "CID",
      "name": "VICTORYSHARES INTERNATIONAL HIGH DIV VOLATILITY WTD ETF "
    },
    {
      "symbol": "CIEN",
      "name": "CIENA Corp"
    },
    {
      "symbol": "CIF",
      "name": "MFS Intermediate High Income Fund"
    },
    {
      "symbol": "CIFR",
      "name": "Cipher Mining Inc"
    },
    {
      "symbol": "CIFRW",
      "name": "Cipher Mining Inc - Warrants (26/08/2026)"
    },
    {
      "symbol": "CIG",
      "name": "Cia Energetica DE Minas Gerais - Cemig"
    },
    {
      "symbol": "CIG-C",
      "name": "Cia Energetica DE Minas Gerais - Cemig"
    },
    {
      "symbol": "CIGI",
      "name": "Colliers International Group Inc"
    },
    {
      "symbol": "CIH",
      "name": "China Index Holdings Ltd"
    },
    {
      "symbol": "CII",
      "name": "BlackRock Enhanced Capital and Income Fund Inc"
    },
    {
      "symbol": "CIIGU",
      "name": "CIIG Capital Partners II Inc - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "CIK",
      "name": "Credit Suisse Asset Management Income Fund Inc"
    },
    {
      "symbol": "CIL",
      "name": "VICTORYSHARES INTERNATIONAL VOLATILITY WTD ETF "
    },
    {
      "symbol": "CIM",
      "name": "Chimera Investment Corp"
    },
    {
      "symbol": "CIM-P-A",
      "name": "Chimera Investment Corp"
    },
    {
      "symbol": "CIM-P-B",
      "name": "Chimera Investment Corp"
    },
    {
      "symbol": "CIM-P-C",
      "name": "Chimera Investment Corp"
    },
    {
      "symbol": "CIM-P-D",
      "name": "Chimera Investment Corp"
    },
    {
      "symbol": "CINF",
      "name": "Cincinnati Financial Corp"
    },
    {
      "symbol": "CING",
      "name": "Cingulate Inc"
    },
    {
      "symbol": "CINGW",
      "name": "Cingulate Inc - Warrants (03/12/2026)"
    },
    {
      "symbol": "CINT",
      "name": "CI&T Inc Class A"
    },
    {
      "symbol": "CIO",
      "name": "City Office REIT Inc"
    },
    {
      "symbol": "CIO-P-A",
      "name": "City Office REIT Inc"
    },
    {
      "symbol": "CION",
      "name": "CION Invt Corp"
    },
    {
      "symbol": "CISO",
      "name": "CISO Global Inc"
    },
    {
      "symbol": "CISS",
      "name": "C3is Inc"
    },
    {
      "symbol": "CISSV",
      "name": "C3is Inc"
    },
    {
      "symbol": "CITE",
      "name": "Cartica Acquisition Corp - Class A"
    },
    {
      "symbol": "CITEU",
      "name": "Cartica Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "CITEW",
      "name": "Cartica Acquisition Corp - Warrants (30/04/2028)"
    },
    {
      "symbol": "CIVB",
      "name": "Civista Bancshares Inc"
    },
    {
      "symbol": "CIVI",
      "name": "Civitas Resources Inc New"
    },
    {
      "symbol": "CIX",
      "name": "Compx International Inc - Class A"
    },
    {
      "symbol": "CIZ",
      "name": "VICTORYSHARES DEVELOPED ENHANCED VOLATILITY WTD ETF "
    },
    {
      "symbol": "CJET",
      "name": "Chijet Motor Company Inc"
    },
    {
      "symbol": "CJJD",
      "name": "China Jo-Jo Drugstores Inc"
    },
    {
      "symbol": "CKPT",
      "name": "Checkpoint Therapeutics Inc"
    },
    {
      "symbol": "CKX",
      "name": "CKX Lands Inc"
    },
    {
      "symbol": "CL",
      "name": "Colgate-Palmolive Company"
    },
    {
      "symbol": "CLAR",
      "name": "Clarus Corp"
    },
    {
      "symbol": "CLB",
      "name": "Core Laboratories Inc"
    },
    {
      "symbol": "CLBK",
      "name": "Columbia Financial Inc"
    },
    {
      "symbol": "CLBR",
      "name": "Colombier Acquisition Corp II - Class A"
    },
    {
      "symbol": "CLBR-U",
      "name": "Colombier Acquisition Corp Units each consisting of one share of Class A common stock and onethird of one redeemable warrant"
    },
    {
      "symbol": "CLBR-WS",
      "name": "Colombier Acquisition Corp II - Warrants (31/12/2028)"
    },
    {
      "symbol": "CLBT",
      "name": "Cellebrite DI Ltd"
    },
    {
      "symbol": "CLBTW",
      "name": "Cellebrite DI Ltd - Warrants (30/08/2026)"
    },
    {
      "symbol": "CLCO",
      "name": "Cool Company Ltd"
    },
    {
      "symbol": "CLDI",
      "name": "Calidi Biotherapeutics Inc - Class A"
    },
    {
      "symbol": "CLDI-WS",
      "name": "Calidi Biotherapeutics Inc - Warrants (01/01/9999)"
    },
    {
      "symbol": "CLDL",
      "name": "DIREXION DAILY CLOUD COMPUTING BULL 2X SHARES "
    },
    {
      "symbol": "CLDT",
      "name": "Chatham Lodging Trust"
    },
    {
      "symbol": "CLDT-P-A",
      "name": "Chatham Lodging Trust"
    },
    {
      "symbol": "CLDX",
      "name": "Celldex Therapeutics Inc"
    },
    {
      "symbol": "CLEU",
      "name": "China Liberal Education Holdings Ltd"
    },
    {
      "symbol": "CLF",
      "name": "Cleveland-Cliffs Inc"
    },
    {
      "symbol": "CLFD",
      "name": "Clearfield Inc"
    },
    {
      "symbol": "CLGN",
      "name": "CollPlant Biotechnologies Ltd New"
    },
    {
      "symbol": "CLH",
      "name": "Clean Harbors Inc"
    },
    {
      "symbol": "CLIA",
      "name": "Veridien Climate Action ETF"
    },
    {
      "symbol": "CLINW",
      "name": "Alternus Clean Energy Inc - Warrants (01/01/2022)"
    },
    {
      "symbol": "CLIP",
      "name": "GLOBAL X 1-3 MONTH T-BILL ETF "
    },
    {
      "symbol": "CLIR",
      "name": "ClearSign Technologies Corp"
    },
    {
      "symbol": "CLIX",
      "name": "ProShares Long Online/Short Stores ETF"
    },
    {
      "symbol": "CLLS",
      "name": "Cellectis"
    },
    {
      "symbol": "CLM",
      "name": "Cornerstone Strategic Value Fund"
    },
    {
      "symbol": "CLMB",
      "name": "Climb Global Solutions Inc"
    },
    {
      "symbol": "CLMT",
      "name": "Calumet Specialty Products Partners L.P."
    },
    {
      "symbol": "CLNE",
      "name": "Clean Energy Fuels Corp"
    },
    {
      "symbol": "CLNN",
      "name": "Clene Inc"
    },
    {
      "symbol": "CLNNW",
      "name": "Clene Inc - Warrants (30/12/2025)"
    },
    {
      "symbol": "CLNR",
      "name": "IQ CLEANER TRANSPORT ETF "
    },
    {
      "symbol": "CLOA",
      "name": "BlackRock AAA CLO ETF"
    },
    {
      "symbol": "CLOD",
      "name": "Themes Cloud Computing ETF"
    },
    {
      "symbol": "CLOE",
      "name": "Clover Leaf Capital Corp - Class A"
    },
    {
      "symbol": "CLOER",
      "name": "Clover Leaf Capital Corp"
    },
    {
      "symbol": "CLOEU",
      "name": "Clover Leaf Capital Corp - Units (1 Ord Share Class A & 1 Right)"
    },
    {
      "symbol": "CLOI",
      "name": "VANECK CLO ETF "
    },
    {
      "symbol": "CLOU",
      "name": "GLOBAL X CLOUD COMPUTING ETF "
    },
    {
      "symbol": "CLOV",
      "name": "Clover Health Investments Corp - Class A"
    },
    {
      "symbol": "CLOX",
      "name": "PANAGRAM AAA CLO ETF "
    },
    {
      "symbol": "CLOZ",
      "name": "PANAGRAM BBB-B CLO ETF "
    },
    {
      "symbol": "CLPR",
      "name": "Clipper Realty Inc"
    },
    {
      "symbol": "CLPS",
      "name": "CLPS Inc"
    },
    {
      "symbol": "CLPT",
      "name": "ClearPoint Neuro Inc"
    },
    {
      "symbol": "CLRB",
      "name": "Cellectar Biosciences Inc"
    },
    {
      "symbol": "CLRC",
      "name": "ClimateRock - Class A"
    },
    {
      "symbol": "CLRCR",
      "name": "ClimateRock"
    },
    {
      "symbol": "CLRCU",
      "name": "ClimateRock - Units (1 Ord Class A 1 Rts & 1/2 War)"
    },
    {
      "symbol": "CLRCW",
      "name": "ClimateRock - Warrants(25/04/2027)"
    },
    {
      "symbol": "CLRO",
      "name": "ClearOne Inc"
    },
    {
      "symbol": "CLS",
      "name": "Celestica Inc"
    },
    {
      "symbol": "CLSA",
      "name": "Cabana Target Leading Sector Aggressive ETF"
    },
    {
      "symbol": "CLSC",
      "name": "Cabana Target Leading Sector Conservative ETF"
    },
    {
      "symbol": "CLSD",
      "name": "Clearside Biomedical Inc"
    },
    {
      "symbol": "CLSE",
      "name": "CONVERGENCE LONG/SHORT EQUITY ETF "
    },
    {
      "symbol": "CLSK",
      "name": "Cleanspark Inc"
    },
    {
      "symbol": "CLSM",
      "name": "Cabana Target Leading Sector Moderate ETF"
    },
    {
      "symbol": "CLST",
      "name": "Catalyst Bancorp Inc"
    },
    {
      "symbol": "CLVR",
      "name": "Clever Leaves Holdings Inc"
    },
    {
      "symbol": "CLVRW",
      "name": "Clever Leaves Holdings Inc - Warrants (18/12/2025)"
    },
    {
      "symbol": "CLVS"
    },
    {
      "symbol": "CLVT",
      "name": "Clarivate Plc"
    },
    {
      "symbol": "CLVT-P-A",
      "name": "Clarivate Plc"
    },
    {
      "symbol": "CLW",
      "name": "Clearwater Paper Corp"
    },
    {
      "symbol": "CLWT",
      "name": "Euro Tech Holdings Co. Ltd"
    },
    {
      "symbol": "CLX",
      "name": "Clorox Company"
    },
    {
      "symbol": "CLXT",
      "name": "Calyxt Inc"
    },
    {
      "symbol": "CM",
      "name": "Canadian Imperial Bank Of Commerce"
    },
    {
      "symbol": "CMA",
      "name": "Comerica Inc"
    },
    {
      "symbol": "CMAX",
      "name": "CareMax Inc - Class A"
    },
    {
      "symbol": "CMAXW",
      "name": "CareMax Inc - Warrants (08/06/2026)"
    },
    {
      "symbol": "CMBM",
      "name": "Cambium Networks Corp"
    },
    {
      "symbol": "CMBS",
      "name": "ISHARES CMBS ETF "
    },
    {
      "symbol": "CMC",
      "name": "Commercial Metals Company"
    },
    {
      "symbol": "CMCA",
      "name": "Capitalworks Emerging Markets Acquisition Corp - Class A"
    },
    {
      "symbol": "CMCAU",
      "name": "Capitalworks Emerging Markets Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "CMCAW",
      "name": "Capitalworks Emerging Markets Acquisition Corp - Warrants (19/11/2026)"
    },
    {
      "symbol": "CMCI",
      "name": "VANECK CMCI COMMODITY STRATEGY ETF "
    },
    {
      "symbol": "CMCL",
      "name": "Caledonia Mining Corporation Plc"
    },
    {
      "symbol": "CMCM",
      "name": "Cheetah Mobile Inc"
    },
    {
      "symbol": "CMCO",
      "name": "Columbus Mckinnon Corp"
    },
    {
      "symbol": "CMCSA",
      "name": "Comcast Corp - Class A"
    },
    {
      "symbol": "CMCT",
      "name": "Creative Media & Community Trust"
    },
    {
      "symbol": "CMDT",
      "name": "PIMCO COMMODITY STRATEGY ACTIVE EXCHANGE-TRADED FUND "
    },
    {
      "symbol": "CMDY",
      "name": "ISHARES BLOOMBERG ROLL SELECT COMMODITY STRATEGY ETF "
    },
    {
      "symbol": "CME",
      "name": "CME Group Inc - Class A"
    },
    {
      "symbol": "CMF",
      "name": "iShares California Muni Bond ETF"
    },
    {
      "symbol": "CMG",
      "name": "Chipotle Mexican Grill"
    },
    {
      "symbol": "CMI",
      "name": "Cummins Inc"
    },
    {
      "symbol": "CMLS",
      "name": "Cumulus Media Inc - Class A"
    },
    {
      "symbol": "CMMB",
      "name": "Chemomab Therapeutics Ltd"
    },
    {
      "symbol": "CMND",
      "name": "Clearmind Medicine Inc"
    },
    {
      "symbol": "CMP",
      "name": "Compass Minerals International Inc"
    },
    {
      "symbol": "CMPO",
      "name": "CompoSecure Inc - Class A"
    },
    {
      "symbol": "CMPOW",
      "name": "CompoSecure Inc - Warrants (27/12/2026)"
    },
    {
      "symbol": "CMPR",
      "name": "Cimpress plc"
    },
    {
      "symbol": "CMPS",
      "name": "Compass Pathways Plc"
    },
    {
      "symbol": "CMPX",
      "name": "Compass Therapeutics Inc"
    },
    {
      "symbol": "CMRE",
      "name": "Costamare Inc"
    },
    {
      "symbol": "CMRE-P-B",
      "name": "Costamare Inc"
    },
    {
      "symbol": "CMRE-P-C",
      "name": "Costamare Inc"
    },
    {
      "symbol": "CMRE-P-D",
      "name": "Costamare Inc"
    },
    {
      "symbol": "CMRE-P-E",
      "name": "Costamare Inc"
    },
    {
      "symbol": "CMRX",
      "name": "Chimerix Inc"
    },
    {
      "symbol": "CMS",
      "name": "CMS Energy Corporation"
    },
    {
      "symbol": "CMS-P-B",
      "name": "Consumers Energy Company"
    },
    {
      "symbol": "CMS-P-C",
      "name": "CMS Energy Corporation"
    },
    {
      "symbol": "CMSA",
      "name": "CMS Energy Corporation"
    },
    {
      "symbol": "CMSC",
      "name": "CMS Energy Corporation"
    },
    {
      "symbol": "CMSD",
      "name": "CMS Energy Corporation"
    },
    {
      "symbol": "CMT",
      "name": "Core Molding Technologies"
    },
    {
      "symbol": "CMTG",
      "name": "Claros Mortgage Trust Inc"
    },
    {
      "symbol": "CMTL",
      "name": "Comtech Telecommunications Corp"
    },
    {
      "symbol": "CMU",
      "name": "MFS High Yield Municipal Trust"
    },
    {
      "symbol": "CNA",
      "name": "CNA Financial Corp"
    },
    {
      "symbol": "CNBS",
      "name": "AMPLIFY SEYMOUR CANNABIS ETF "
    },
    {
      "symbol": "CNC",
      "name": "Centene Corp"
    },
    {
      "symbol": "CNCR",
      "name": "Range Cancer Therapeutics ETF"
    },
    {
      "symbol": "CNDA",
      "name": "Concord Acquisition Corp II - Class A"
    },
    {
      "symbol": "CNDA-U",
      "name": "Concord Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "CNDA-WS",
      "name": "Concord Acquisition Corp II - Warrants(01/01/9999)"
    },
    {
      "symbol": "CNDT",
      "name": "Conduent Inc"
    },
    {
      "symbol": "CNEQ",
      "name": "Alger Concentrated Equity ETF"
    },
    {
      "symbol": "CNET",
      "name": "ZW Data Action Technologies Inc"
    },
    {
      "symbol": "CNEY",
      "name": "CN Energy Group Inc - Class A"
    },
    {
      "symbol": "CNF",
      "name": "CNFinance Holdings Ltd"
    },
    {
      "symbol": "CNFR",
      "name": "Conifer Holdings Inc"
    },
    {
      "symbol": "CNFRL",
      "name": "Conifer Holdings Inc"
    },
    {
      "symbol": "CNFRZ",
      "name": "Conifer Holdings Inc"
    },
    {
      "symbol": "CNGL",
      "name": "Canna Global Acquisition Corp - Class A"
    },
    {
      "symbol": "CNGLU",
      "name": "Canna Global Acquisition Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "CNGLW",
      "name": "Canna Global Acquisition Corp - Warrants (30/11/2026)"
    },
    {
      "symbol": "CNHI",
      "name": "CNH Industrial NV"
    },
    {
      "symbol": "CNI",
      "name": "Canadian National Railway Company"
    },
    {
      "symbol": "CNK",
      "name": "Cinemark Holdings Inc"
    },
    {
      "symbol": "CNM",
      "name": "Core & Main Inc Class A"
    },
    {
      "symbol": "CNMD",
      "name": "Conmed Corp"
    },
    {
      "symbol": "CNNE",
      "name": "Cannae Holdings Inc"
    },
    {
      "symbol": "CNO",
      "name": "CNO Financial Group Inc"
    },
    {
      "symbol": "CNO-P-A",
      "name": "CNO Financial Group Inc"
    },
    {
      "symbol": "CNOB",
      "name": "ConnectOne Bancorp Inc"
    },
    {
      "symbol": "CNOBP",
      "name": "ConnectOne Bancorp Inc"
    },
    {
      "symbol": "CNP",
      "name": "Centerpoint Energy Inc"
    },
    {
      "symbol": "CNQ",
      "name": "Canadian Natural Resources Ltd"
    },
    {
      "symbol": "CNRG",
      "name": "SPDR S&P Kensho Clean Power ETF"
    },
    {
      "symbol": "CNS",
      "name": "Cohen & Steers Inc"
    },
    {
      "symbol": "CNSL",
      "name": "Consolidated Communications Holdings Inc"
    },
    {
      "symbol": "CNSP",
      "name": "Cns Pharmaceuticals Inc"
    },
    {
      "symbol": "CNTA",
      "name": "Centessa Pharmaceuticals plc"
    },
    {
      "symbol": "CNTB",
      "name": "Connect Biopharma Holdings Ltd"
    },
    {
      "symbol": "CNTG",
      "name": "Centogene NV"
    },
    {
      "symbol": "CNTX",
      "name": "Context Therapeutics Inc"
    },
    {
      "symbol": "CNTY",
      "name": "Century Casinos Inc"
    },
    {
      "symbol": "CNVS",
      "name": "Cineverse Corp - Class A"
    },
    {
      "symbol": "CNX",
      "name": "CNX Resources Corp"
    },
    {
      "symbol": "CNXC",
      "name": "Concentrix Corp"
    },
    {
      "symbol": "CNXN",
      "name": "PC Connection Inc"
    },
    {
      "symbol": "CNXT",
      "name": "VANECK CHINEXT ETF "
    },
    {
      "symbol": "CNYA",
      "name": "ISHARES MSCI CHINA A ETF "
    },
    {
      "symbol": "COAL",
      "name": "Range Global Coal Index ETF"
    },
    {
      "symbol": "COCH",
      "name": "Envoy Medical Inc - Class A"
    },
    {
      "symbol": "COCHW",
      "name": "Envoy Medical Inc - Warrants (29/09/2028)"
    },
    {
      "symbol": "COCO",
      "name": "Vita Coco Company Inc (The)"
    },
    {
      "symbol": "COCP",
      "name": "Cocrystal Pharma Inc"
    },
    {
      "symbol": "CODA",
      "name": "Coda Octopus Group Inc"
    },
    {
      "symbol": "CODI",
      "name": "Compass Diversified Holdings"
    },
    {
      "symbol": "CODI-P-A",
      "name": "Compass Diversified Holdings 7250 Series A Preferred Shares representing beneficial interest in"
    },
    {
      "symbol": "CODI-P-B",
      "name": "Compass Diversified Holdings"
    },
    {
      "symbol": "CODI-P-C",
      "name": "Compass Diversified Holdings 7.875 PRF PERPETUAL USD 25 Ser C"
    },
    {
      "symbol": "CODX",
      "name": "Co-Diagnostics Inc"
    },
    {
      "symbol": "COE",
      "name": "51 Talk Online Education Group"
    },
    {
      "symbol": "COEP",
      "name": "Coeptis Therapeutics Holdings Inc"
    },
    {
      "symbol": "COEPW",
      "name": "Coeptis Therapeutics Holdings Inc - Warrants (31/10/2025)"
    },
    {
      "symbol": "COF",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COF-P-I",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COF-P-J",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COF-P-K",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COF-P-L",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COF-P-N",
      "name": "Capital One Financial Corp"
    },
    {
      "symbol": "COFS",
      "name": "Choiceone Financial Services Inc"
    },
    {
      "symbol": "COGT",
      "name": "Cogent Biosciences Inc"
    },
    {
      "symbol": "COHN",
      "name": "Cohen & Company Inc"
    },
    {
      "symbol": "COHR",
      "name": "Coherent Corp"
    },
    {
      "symbol": "COHU",
      "name": "Cohu Inc"
    },
    {
      "symbol": "COIN",
      "name": "Coinbase Global Inc - Class A"
    },
    {
      "symbol": "COKE",
      "name": "Coca-Cola Consolidated Inc"
    },
    {
      "symbol": "COLB",
      "name": "Columbia Banking System Inc"
    },
    {
      "symbol": "COLD",
      "name": "Americold Realty Trust Inc"
    },
    {
      "symbol": "COLL",
      "name": "Collegium Pharmaceutical Inc"
    },
    {
      "symbol": "COLM",
      "name": "Columbia Sportswear Company"
    },
    {
      "symbol": "COM",
      "name": "DIREXION AUSPICE BROAD COMMODITY STRATEGY ETF "
    },
    {
      "symbol": "COMB",
      "name": "GraniteShares Bloomberg Commodity Broad Strategy No K-1 ETF"
    },
    {
      "symbol": "COMM",
      "name": "CommScope Holding Company Inc"
    },
    {
      "symbol": "COMP",
      "name": "Compass Inc - Class A"
    },
    {
      "symbol": "COMT",
      "name": "ISHARES GSCI COMMODITY DYNAMIC ROLL STRATEGY ETF "
    },
    {
      "symbol": "CONL",
      "name": "GRANITESHARES 1.5X LONG COIN DAILY ETF "
    },
    {
      "symbol": "CONN",
      "name": "Conns Inc"
    },
    {
      "symbol": "CONX",
      "name": "CONX Corp - Class A"
    },
    {
      "symbol": "CONXU",
      "name": "CONX Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "CONXW",
      "name": "CONX Corp - Warrants (30/10/2027)"
    },
    {
      "symbol": "CONY",
      "name": "YIELDMAX COIN OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "COO",
      "name": "Cooper Companies Inc"
    },
    {
      "symbol": "COOK",
      "name": "Traeger Inc"
    },
    {
      "symbol": "COOL",
      "name": "Corner Growth Acquisition Corp - Class A"
    },
    {
      "symbol": "COOLU",
      "name": "Corner Growth Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "COOLW",
      "name": "Corner Growth Acquisition Corp - Warrants (01/01/2027)"
    },
    {
      "symbol": "COOP",
      "name": "Mr. Cooper Group Inc"
    },
    {
      "symbol": "COOT",
      "name": "Australian Oilseeds Holdings Ltd"
    },
    {
      "symbol": "COOTW",
      "name": "Australian Oilseeds Holdings Ltd - Warrants (22/03/2029)"
    },
    {
      "symbol": "COP",
      "name": "Conoco Phillips"
    },
    {
      "symbol": "COPJ",
      "name": "Sprott Junior Copper Miners ETF"
    },
    {
      "symbol": "COPP",
      "name": "Sprott Copper Miners ETF"
    },
    {
      "symbol": "COPX",
      "name": "GLOBAL X COPPER MINERS ETF "
    },
    {
      "symbol": "COR",
      "name": "Cencora Inc"
    },
    {
      "symbol": "CORN",
      "name": "Teucrium Corn Fund"
    },
    {
      "symbol": "CORP",
      "name": "PIMCO INVESTMENT GRADE CORPORATE BOND INDEX EXCHANGE-TRADED FUND "
    },
    {
      "symbol": "CORT",
      "name": "Corcept Therapeutics Inc"
    },
    {
      "symbol": "CORZ",
      "name": "Core Scientific Inc - New"
    },
    {
      "symbol": "CORZW",
      "name": "Core Scientific Inc - Warrants Tranche 1 (23/01/2027)"
    },
    {
      "symbol": "CORZZ",
      "name": "Core Scientific Inc - Warrants Tranche 2 (23/01/2029)"
    },
    {
      "symbol": "COSM",
      "name": "Cosmos Health Inc"
    },
    {
      "symbol": "COST",
      "name": "Costco Wholesale Corp"
    },
    {
      "symbol": "COTY",
      "name": "Coty Inc - Class A"
    },
    {
      "symbol": "COUR",
      "name": "Coursera Inc"
    },
    {
      "symbol": "COWG",
      "name": "Pacer US Large Cap Cash Cows Growth Leaders ETF"
    },
    {
      "symbol": "COWNL",
      "name": "Cowen Inc"
    },
    {
      "symbol": "COWS",
      "name": "Amplify Cash Flow Dividend Leaders ETF"
    },
    {
      "symbol": "COWZ",
      "name": "Pacer US Cash Cows 100 ETF"
    },
    {
      "symbol": "COYA",
      "name": "Coya Therapeutics Inc"
    },
    {
      "symbol": "CP",
      "name": "Canadian Pacific Kansas City Ltd"
    },
    {
      "symbol": "CPA",
      "name": "Copa Holdings S.A. - Class A"
    },
    {
      "symbol": "CPAA",
      "name": "Conyers Park III Acquisition Corp - Class A"
    },
    {
      "symbol": "CPAAU",
      "name": "Conyers Park III Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "CPAAW",
      "name": "Conyers Park III Acquisition Corp - Warrants (31/07/2028)"
    },
    {
      "symbol": "CPAC",
      "name": "Cementos Pacasmayo S.A.A."
    },
    {
      "symbol": "CPARU",
      "name": "Catalyst Partners Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "CPAY",
      "name": "Fleetcor Technologies Inc"
    },
    {
      "symbol": "CPB",
      "name": "Campbell Soup Company"
    },
    {
      "symbol": "CPBI",
      "name": "Central Plains Bancshares Inc"
    },
    {
      "symbol": "CPER",
      "name": "United States Copper Index Fund"
    },
    {
      "symbol": "CPF",
      "name": "Central Pacific Financial Corp"
    },
    {
      "symbol": "CPG",
      "name": "Crescent Point Energy Corp"
    },
    {
      "symbol": "CPHC",
      "name": "Canterbury Park Holding Corp"
    },
    {
      "symbol": "CPHI",
      "name": "China Pharma Holdings Inc"
    },
    {
      "symbol": "CPII",
      "name": "IONIC INFLATION PROTECTION ETF "
    },
    {
      "symbol": "CPIX",
      "name": "Cumberland Pharmaceuticals Inc"
    },
    {
      "symbol": "CPK",
      "name": "Chesapeake Utilities Corp"
    },
    {
      "symbol": "CPLP",
      "name": "Capital Product Partners L P"
    },
    {
      "symbol": "CPLS",
      "name": "AB Core Plus Bond ETF"
    },
    {
      "symbol": "CPNG",
      "name": "Coupang Inc - Class A"
    },
    {
      "symbol": "CPOP",
      "name": "Pop Culture Group Co Ltd - Class A"
    },
    {
      "symbol": "CPRI",
      "name": "Capri Holdings Ltd"
    },
    {
      "symbol": "CPRT",
      "name": "Copart Inc"
    },
    {
      "symbol": "CPRX",
      "name": "Catalyst Pharmaceuticals Inc"
    },
    {
      "symbol": "CPS",
      "name": "Cooper-Standard Holdings Inc"
    },
    {
      "symbol": "CPSH",
      "name": "CPS Technologies Corporation"
    },
    {
      "symbol": "CPSS",
      "name": "Consumer Portfolio Service Inc"
    },
    {
      "symbol": "CPT",
      "name": "Camden Property Trust"
    },
    {
      "symbol": "CPTK",
      "name": "Crown PropTech Acquisitions - Class A"
    },
    {
      "symbol": "CPTK-U",
      "name": "Crown PropTech Acquisitions - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "CPTN",
      "name": "Cepton Inc"
    },
    {
      "symbol": "CPTNW",
      "name": "Cepton Inc - Warrants (10/02/2027)"
    },
    {
      "symbol": "CPZ",
      "name": "Calamos Long/Short Equity & Dynamic Income Trust"
    },
    {
      "symbol": "CQP",
      "name": "Cheniere Energy Partners LP"
    },
    {
      "symbol": "CQQQ",
      "name": "INVESCO CHINA TECHNOLOGY ETF "
    },
    {
      "symbol": "CR",
      "name": "Crane Company"
    },
    {
      "symbol": "CR-W",
      "name": "Crane Company When Issued"
    },
    {
      "symbol": "CRAI",
      "name": "CRA International Inc"
    },
    {
      "symbol": "CRAK",
      "name": "VANECK OIL REFINERS ETF "
    },
    {
      "symbol": "CRBG",
      "name": "Corebridge Financial Inc"
    },
    {
      "symbol": "CRBN",
      "name": "ISHARES MSCI ACWI LOW CARBON TARGET ETF "
    },
    {
      "symbol": "CRBP",
      "name": "Corbus Pharmaceuticals Holdings Inc"
    },
    {
      "symbol": "CRBU",
      "name": "Caribou Biosciences Inc"
    },
    {
      "symbol": "CRC",
      "name": "California Resources Corporation - New"
    },
    {
      "symbol": "CRCT",
      "name": "Cricut Inc - Class A"
    },
    {
      "symbol": "CRD-A",
      "name": "Crawford & Co. - Class A"
    },
    {
      "symbol": "CRD-B",
      "name": "Crawford & Co. - Class B"
    },
    {
      "symbol": "CRDF",
      "name": "Cardiff Oncology Inc"
    },
    {
      "symbol": "CRDL",
      "name": "Cardiol Therapeutics Inc - Class A"
    },
    {
      "symbol": "CRDO",
      "name": "Credo Technology Group Holding Ltd"
    },
    {
      "symbol": "CRDT",
      "name": "SIMPLIFY OPPORTUNISTIC INCOME ETF "
    },
    {
      "symbol": "CRED",
      "name": "COLUMBIA RESEARCH ENHANCED REAL ESTATE ETF "
    },
    {
      "symbol": "CREG",
      "name": "Smart Powerr Corp"
    },
    {
      "symbol": "CRESW",
      "name": "Cresud - Warrants (08/03/2026)"
    },
    {
      "symbol": "CRESY",
      "name": "Cresud"
    },
    {
      "symbol": "CREV",
      "name": "Carbon Revolution Public Ltd Company"
    },
    {
      "symbol": "CREVW",
      "name": "Carbon Revolution Public Ltd Co. - Warrants (30/10/2028)"
    },
    {
      "symbol": "CREX",
      "name": "Creative Realities Inc"
    },
    {
      "symbol": "CRF",
      "name": "Cornerstone Total Return Fund"
    },
    {
      "symbol": "CRGO",
      "name": "Freightos Ltd"
    },
    {
      "symbol": "CRGOW",
      "name": "Freightos Ltd - Warrants (16/04/2028)"
    },
    {
      "symbol": "CRGX",
      "name": "CARGO Therapeutics Inc"
    },
    {
      "symbol": "CRGY",
      "name": "Crescent Energy Co. - Class A"
    },
    {
      "symbol": "CRH",
      "name": "CRH Plc"
    },
    {
      "symbol": "CRHC-U",
      "name": "Cohn Robbins Holdings Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant"
    },
    {
      "symbol": "CRI",
      "name": "Carters Inc"
    },
    {
      "symbol": "CRIS",
      "name": "Curis Inc"
    },
    {
      "symbol": "CRIT",
      "name": "OPTICA RARE EARTHS & CRITICAL MATERIALS ETF "
    },
    {
      "symbol": "CRK",
      "name": "Comstock Resources Inc"
    },
    {
      "symbol": "CRKN",
      "name": "Crown ElectroKinetics Corp"
    },
    {
      "symbol": "CRL",
      "name": "Charles River Laboratories International Inc"
    },
    {
      "symbol": "CRM",
      "name": "Salesforce Inc"
    },
    {
      "symbol": "CRMD",
      "name": "CorMedix Inc"
    },
    {
      "symbol": "CRML",
      "name": "Critical Metals Corp"
    },
    {
      "symbol": "CRMLW",
      "name": "Critical Metals Corp - Warrants (27/02/2029)"
    },
    {
      "symbol": "CRMT",
      "name": "Americas Car Mart Inc"
    },
    {
      "symbol": "CRNC",
      "name": "Cerence Inc"
    },
    {
      "symbol": "CRNT",
      "name": "Ceragon Networks Ltd"
    },
    {
      "symbol": "CRNX",
      "name": "Crinetics Pharmaceuticals Inc"
    },
    {
      "symbol": "CRON",
      "name": "Cronos Group Inc"
    },
    {
      "symbol": "CROX",
      "name": "Crocs Inc"
    },
    {
      "symbol": "CRPT",
      "name": "FIRST TRUST SKYBRIDGE CRYPTO INDUSTRY AND DIGITAL ECONOMY ETF "
    },
    {
      "symbol": "CRS",
      "name": "Carpenter Technology Corp"
    },
    {
      "symbol": "CRSP",
      "name": "CRISPR Therapeutics AG"
    },
    {
      "symbol": "CRSR",
      "name": "Corsair Gaming Inc"
    },
    {
      "symbol": "CRT",
      "name": "Cross Timbers Royalty Trust"
    },
    {
      "symbol": "CRTO",
      "name": "Criteo S.A"
    },
    {
      "symbol": "CRUS",
      "name": "Cirrus Logic Inc"
    },
    {
      "symbol": "CRVL",
      "name": "Corvel Corp"
    },
    {
      "symbol": "CRVO",
      "name": "CervoMed Inc"
    },
    {
      "symbol": "CRVS",
      "name": "Corvus Pharmaceuticals Inc"
    },
    {
      "symbol": "CRWD",
      "name": "Crowdstrike Holdings Inc - Class A"
    },
    {
      "symbol": "CRWS",
      "name": "Crown Crafts Inc"
    },
    {
      "symbol": "CSA",
      "name": "VICTORYSHARES US SMALL CAP VOLATILITY WTD ETF "
    },
    {
      "symbol": "CSAN",
      "name": "Cosan S.A"
    },
    {
      "symbol": "CSB",
      "name": "VictoryShares US Small Cap High Div Volatility Wtd ETF"
    },
    {
      "symbol": "CSBR",
      "name": "Champions Oncology Inc"
    },
    {
      "symbol": "CSCO",
      "name": "Cisco Systems Inc"
    },
    {
      "symbol": "CSD",
      "name": "Invesco S&P Spin-Off ETF"
    },
    {
      "symbol": "CSF",
      "name": "VictoryShares US Discovery Enhanced Volatility Wtd ETF"
    },
    {
      "symbol": "CSGP",
      "name": "Costar Group Inc"
    },
    {
      "symbol": "CSGS",
      "name": "CSG Systems International Inc"
    },
    {
      "symbol": "CSHI",
      "name": "NEOS Enhanced Income Cash Alternative ETF"
    },
    {
      "symbol": "CSIQ",
      "name": "Canadian Solar Inc"
    },
    {
      "symbol": "CSL",
      "name": "Carlisle Companies Inc"
    },
    {
      "symbol": "CSLM",
      "name": "Consilium Acquisition Corp I Ltd - Class A"
    },
    {
      "symbol": "CSLMR",
      "name": "Consilium Acquisition Corp I Ltd"
    },
    {
      "symbol": "CSLMU",
      "name": "Consilium Acquisition Corp I Ltd - Units (1 Ord Class A 1 Right & 1/2 War)"
    },
    {
      "symbol": "CSLMW",
      "name": "Consilium Acquisition Corp I Ltd - Warrants (12/01/2027)"
    },
    {
      "symbol": "CSLR",
      "name": "Complete Solaria Inc"
    },
    {
      "symbol": "CSLRW",
      "name": "Complete Solaria Inc - Warrants (31/07/2028)"
    },
    {
      "symbol": "CSM",
      "name": "ProShares Large Cap Core Plus"
    },
    {
      "symbol": "CSMD",
      "name": "CONGRESS SMID GROWTH ETF "
    },
    {
      "symbol": "CSML",
      "name": "IQ U.S. Small Cap ETF"
    },
    {
      "symbol": "CSPI",
      "name": "CSP Inc"
    },
    {
      "symbol": "CSQ",
      "name": "Calamos Strategic Total Return Fund"
    },
    {
      "symbol": "CSR",
      "name": "Centerspace"
    },
    {
      "symbol": "CSR-P-C",
      "name": "Centerspace"
    },
    {
      "symbol": "CSSE",
      "name": "Chicken Soup for the Soul Entertainment Inc - Class A"
    },
    {
      "symbol": "CSSEL",
      "name": "Chicken Soup for the Soul Entertainment Inc - Warrants(22/10/2026)"
    },
    {
      "symbol": "CSSEN",
      "name": "Chicken Soup for the Soul Entertainment Inc"
    },
    {
      "symbol": "CSSEP",
      "name": "Chicken Soup for the Soul Entertainment Inc"
    },
    {
      "symbol": "CSTA",
      "name": "Constellation Acquisition Corp I Class A"
    },
    {
      "symbol": "CSTA-U",
      "name": "Constellation Acquisition Corp I Units each consisting of one Class A ordinary share and onethird of one redeemable warrant"
    },
    {
      "symbol": "CSTA-WS",
      "name": "Constellation Acquisition Corp I Redeemable warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50"
    },
    {
      "symbol": "CSTE",
      "name": "Caesarstone Ltd"
    },
    {
      "symbol": "CSTL",
      "name": "Castle Biosciences Inc"
    },
    {
      "symbol": "CSTM",
      "name": "Constellium SE - Class A"
    },
    {
      "symbol": "CSV",
      "name": "Carriage Services Inc"
    },
    {
      "symbol": "CSWC",
      "name": "Capital Southwest Corp"
    },
    {
      "symbol": "CSWCZ",
      "name": "Capital Southwest Corp"
    },
    {
      "symbol": "CSWI",
      "name": "CSW Industrials Inc"
    },
    {
      "symbol": "CSX",
      "name": "CSX Corp"
    },
    {
      "symbol": "CTA",
      "name": "Simplify Managed Futures Strategy ETF"
    },
    {
      "symbol": "CTA-P-A",
      "name": "EIDP Inc"
    },
    {
      "symbol": "CTA-P-B",
      "name": "EIDP Inc"
    },
    {
      "symbol": "CTAS",
      "name": "Cintas Corporation"
    },
    {
      "symbol": "CTBB",
      "name": "Qwest Corporation"
    },
    {
      "symbol": "CTBI",
      "name": "Community Trust Bancorp Inc"
    },
    {
      "symbol": "CTCX",
      "name": "Carmell Therapeutics Corp - Class A"
    },
    {
      "symbol": "CTCXW",
      "name": "Carmell Therapeutics Corporation Warrant"
    },
    {
      "symbol": "CTDD",
      "name": "Qwest Corporation"
    },
    {
      "symbol": "CTEC",
      "name": "GLOBAL X CLEANTECH ETF "
    },
    {
      "symbol": "CTEST"
    },
    {
      "symbol": "CTEX",
      "name": "PROSHARES S&P KENSHO CLEANTECH ETF "
    },
    {
      "symbol": "CTGO",
      "name": "Contango Ore Inc"
    },
    {
      "symbol": "CTHR",
      "name": "Charles & Colvard Ltd"
    },
    {
      "symbol": "CTKB",
      "name": "Cytek BioSciences Inc"
    },
    {
      "symbol": "CTLP",
      "name": "Cantaloupe Inc"
    },
    {
      "symbol": "CTLT",
      "name": "Catalent Inc"
    },
    {
      "symbol": "CTM",
      "name": "Castellum Inc"
    },
    {
      "symbol": "CTMX",
      "name": "CytomX Therapeutics Inc"
    },
    {
      "symbol": "CTNM",
      "name": "Contineum Therapeutics Inc - Class A"
    },
    {
      "symbol": "CTNT",
      "name": "Cheetah Net Supply Chain Service Inc - Class A"
    },
    {
      "symbol": "CTO",
      "name": "CTO Realty Growth Inc - New - New"
    },
    {
      "symbol": "CTO-P-A",
      "name": "CTO Realty Growth Inc"
    },
    {
      "symbol": "CTOS",
      "name": "Custom Truck One Source Inc"
    },
    {
      "symbol": "CTR",
      "name": "ClearBridge MLP and Midstream Total Return Fund Inc"
    },
    {
      "symbol": "CTRA",
      "name": "Coterra Energy Inc"
    },
    {
      "symbol": "CTRE",
      "name": "CareTrust REIT Inc"
    },
    {
      "symbol": "CTRI",
      "name": "Centuri Holdings Inc"
    },
    {
      "symbol": "CTRM",
      "name": "Castor Maritime Inc"
    },
    {
      "symbol": "CTRMV",
      "name": "Castor Maritime Inc"
    },
    {
      "symbol": "CTRN",
      "name": "Citi Trends Inc"
    },
    {
      "symbol": "CTS",
      "name": "CTS Corp"
    },
    {
      "symbol": "CTSH",
      "name": "Cognizant Technology Solutions Corp - Class A"
    },
    {
      "symbol": "CTSO",
      "name": "Cytosorbents Corp"
    },
    {
      "symbol": "CTV",
      "name": "Innovid Corp"
    },
    {
      "symbol": "CTV-WS",
      "name": "Innovid Corp - Warrants (17/02/2028)"
    },
    {
      "symbol": "CTVA",
      "name": "Corteva Inc"
    },
    {
      "symbol": "CTXR",
      "name": "Citius Pharmaceuticals Inc"
    },
    {
      "symbol": "CUBA",
      "name": "Herzfeld Caribbean Basin Fund Inc"
    },
    {
      "symbol": "CUBB",
      "name": "Customers Bancorp Inc"
    },
    {
      "symbol": "CUBE",
      "name": "CubeSmart"
    },
    {
      "symbol": "CUBI",
      "name": "Customers Bancorp Inc"
    },
    {
      "symbol": "CUBI-P-E",
      "name": "Customers Bancorp Inc FixedtoFloating Rate NonCumulative Perpetual Preferred Stock Series E"
    },
    {
      "symbol": "CUBI-P-F",
      "name": "Customers Bancorp Inc"
    },
    {
      "symbol": "CUBS",
      "name": "ASIAN GROWTH CUBS ETF "
    },
    {
      "symbol": "CUBT",
      "name": "Curative Biotechnology Inc"
    },
    {
      "symbol": "CUE",
      "name": "Cue Biopharma Inc"
    },
    {
      "symbol": "CUK",
      "name": "Carnival plc"
    },
    {
      "symbol": "CULL",
      "name": "Cullman Bancorp Inc"
    },
    {
      "symbol": "CULP",
      "name": "Culp Inc"
    },
    {
      "symbol": "CURE",
      "name": "DIREXION DAILY HEALTHCARE BULL 3X SHARES "
    },
    {
      "symbol": "CURI",
      "name": "CuriosityStream Inc - Class A"
    },
    {
      "symbol": "CURIW",
      "name": "CuriosityStream Inc - Warrants (14/10/2025)"
    },
    {
      "symbol": "CURV",
      "name": "Torrid Holdings Inc"
    },
    {
      "symbol": "CUT",
      "name": "INVESCO MSCI GLOBAL TIMBER ETF "
    },
    {
      "symbol": "CUTR",
      "name": "Cutera Inc"
    },
    {
      "symbol": "CUZ",
      "name": "Cousins Properties Inc"
    },
    {
      "symbol": "CVAC",
      "name": "CureVac N.V."
    },
    {
      "symbol": "CVAR",
      "name": "CULTIVAR ETF "
    },
    {
      "symbol": "CVBF",
      "name": "CVB Financial Corp"
    },
    {
      "symbol": "CVCO",
      "name": "Cavco Industries Inc"
    },
    {
      "symbol": "CVE",
      "name": "Cenovus Energy Inc"
    },
    {
      "symbol": "CVE-WS",
      "name": "Cenovus Energy Inc - Warrants (01/01/2026)"
    },
    {
      "symbol": "CVEO",
      "name": "Civeo Corp"
    },
    {
      "symbol": "CVGI",
      "name": "Commercial Vehicle Group Inc"
    },
    {
      "symbol": "CVGW",
      "name": "Calavo Growers Inc"
    },
    {
      "symbol": "CVI",
      "name": "CVR Energy Inc"
    },
    {
      "symbol": "CVIE",
      "name": "CALVERT INTERNATIONAL RESPONSIBLE INDEX ETF "
    },
    {
      "symbol": "CVII",
      "name": "Churchill Capital Corp VII - Class A"
    },
    {
      "symbol": "CVIIU",
      "name": "Churchill Capital Corp VII - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "CVIIW",
      "name": "Churchill Capital Corp VII - Warrants (08/02/2029)"
    },
    {
      "symbol": "CVKD",
      "name": "Cadrenal Therapeutics Inc"
    },
    {
      "symbol": "CVLC",
      "name": "CALVERT US LARGE-CAP CORE RESPONSIBLE INDEX ETF "
    },
    {
      "symbol": "CVLG",
      "name": "Covenant Logistics Group Inc - Class A"
    },
    {
      "symbol": "CVLT",
      "name": "Commvault Systems Inc"
    },
    {
      "symbol": "CVLY",
      "name": "Codorus Valley Bancorp Inc"
    },
    {
      "symbol": "CVM",
      "name": "Cel-Sci Corp"
    },
    {
      "symbol": "CVMC",
      "name": "CALVERT US MID-CAP CORE RESPONSIBLE INDEX ETF "
    },
    {
      "symbol": "CVNA",
      "name": "Carvana Co. - Class A"
    },
    {
      "symbol": "CVR",
      "name": "Chicago Rivet & Machine Company"
    },
    {
      "symbol": "CVRD",
      "name": "Madison Covered Call ETF"
    },
    {
      "symbol": "CVRT",
      "name": "Calamos Convertible Equity Alternative ETF"
    },
    {
      "symbol": "CVRX",
      "name": "CVRx Inc"
    },
    {
      "symbol": "CVS",
      "name": "CVS Health Corp"
    },
    {
      "symbol": "CVSB",
      "name": "CALVERT ULTRA-SHORT INVESTMENT GRADE ETF "
    },
    {
      "symbol": "CVSE",
      "name": "CALVERT US SELECT EQUITY ETF "
    },
    {
      "symbol": "CVU",
      "name": "CPI Aerostructures Inc"
    },
    {
      "symbol": "CVV",
      "name": "CVD Equipment Corp"
    },
    {
      "symbol": "CVX",
      "name": "Chevron Corp"
    },
    {
      "symbol": "CVY",
      "name": "Invesco Zacks Multi-Asset Income ETF"
    },
    {
      "symbol": "CW",
      "name": "Curtiss-Wright Corp"
    },
    {
      "symbol": "CWAN",
      "name": "Clearwater Analytics Holdings Inc Class A"
    },
    {
      "symbol": "CWB",
      "name": "SPDR Bloomberg Convertible Securities ETF"
    },
    {
      "symbol": "CWBC",
      "name": "Community West Bancshares."
    },
    {
      "symbol": "CWCO",
      "name": "Consolidated Water Co. Ltd"
    },
    {
      "symbol": "CWD",
      "name": "CaliberCos Inc - Class A"
    },
    {
      "symbol": "CWEB",
      "name": "DIREXION DAILY CSI CHINA INTERNET INDEX BULL 2X SHARES "
    },
    {
      "symbol": "CWEN",
      "name": "Clearway Energy Inc - Class C"
    },
    {
      "symbol": "CWEN-A",
      "name": "Clearway Energy Inc - Class A"
    },
    {
      "symbol": "CWH",
      "name": "Camping World Holdings Inc - Class A"
    },
    {
      "symbol": "CWI",
      "name": "SPDR(R) MSCI ACWI EX-US ETF "
    },
    {
      "symbol": "CWK",
      "name": "Cushman & Wakefield plc"
    },
    {
      "symbol": "CWS",
      "name": "ADVISORSHARES FOCUSED EQUITY ETF "
    },
    {
      "symbol": "CWST",
      "name": "Casella Waste Systems Inc - Class A"
    },
    {
      "symbol": "CWT",
      "name": "California Water Service Group"
    },
    {
      "symbol": "CX",
      "name": "Cemex S.A.B. De C.V."
    },
    {
      "symbol": "CXAI",
      "name": "CXApp Inc - Class A"
    },
    {
      "symbol": "CXAIW",
      "name": "CXApp Inc - Warrants (14/03/2028)"
    },
    {
      "symbol": "CXDO",
      "name": "Crexendo Inc"
    },
    {
      "symbol": "CXE",
      "name": "MFS High Income Municipal Trust"
    },
    {
      "symbol": "CXH",
      "name": "MFS Investment Grade Municipal Trust"
    },
    {
      "symbol": "CXM",
      "name": "Sprinklr Inc Class A"
    },
    {
      "symbol": "CXSE",
      "name": "WisdomTree China ex-State-Owned Enterprises Fund"
    },
    {
      "symbol": "CXT",
      "name": "Crane NXT Company"
    },
    {
      "symbol": "CXT-W",
      "name": "Crane NXT Co. ExDistribution WhenIssued"
    },
    {
      "symbol": "CXW",
      "name": "CoreCivic Inc"
    },
    {
      "symbol": "CYBN",
      "name": "Cybin Inc"
    },
    {
      "symbol": "CYBR",
      "name": "CyberArk Software Ltd"
    },
    {
      "symbol": "CYCC",
      "name": "Cyclacel Pharmaceuticals Inc"
    },
    {
      "symbol": "CYCCP",
      "name": "Cyclacel Pharmaceuticals Inc"
    },
    {
      "symbol": "CYCN",
      "name": "Cyclerion Therapeutics Inc"
    },
    {
      "symbol": "CYD",
      "name": "China Yuchai International"
    },
    {
      "symbol": "CYH",
      "name": "Community Health Systems Inc"
    },
    {
      "symbol": "CYN",
      "name": "Cyngn Inc"
    },
    {
      "symbol": "CYRX",
      "name": "CryoPort Inc"
    },
    {
      "symbol": "CYTH",
      "name": "Cyclo Therapeutics Inc - Class A"
    },
    {
      "symbol": "CYTHW",
      "name": "Cyclo Therapeutics Inc - Warrants (14/11/2025)"
    },
    {
      "symbol": "CYTK",
      "name": "Cytokinetics Inc"
    },
    {
      "symbol": "CYTO",
      "name": "Altamira Therapeutics Ltd"
    },
    {
      "symbol": "CZA",
      "name": "Invesco Zacks Mid-Cap ETF"
    },
    {
      "symbol": "CZAR",
      "name": "Themes Natural Monopoly ETF"
    },
    {
      "symbol": "CZFS",
      "name": "Citizens Financial Services Inc"
    },
    {
      "symbol": "CZNC",
      "name": "Citizens & Northern Corp"
    },
    {
      "symbol": "CZOO",
      "name": "Cazoo Group Ltd - Class A"
    },
    {
      "symbol": "CZR",
      "name": "Caesars Entertainment Inc"
    },
    {
      "symbol": "CZWI",
      "name": "Citizens Community Bancorp Inc MD"
    },
    {
      "symbol": "D",
      "name": "Dominion Energy Inc"
    },
    {
      "symbol": "DAC",
      "name": "Danaos Corporation"
    },
    {
      "symbol": "DADA",
      "name": "Dada Nexus Ltd"
    },
    {
      "symbol": "DAIO",
      "name": "Data io Corp"
    },
    {
      "symbol": "DAKT",
      "name": "Daktronics Inc"
    },
    {
      "symbol": "DAL",
      "name": "Delta Air Lines Inc"
    },
    {
      "symbol": "DALI",
      "name": "FIRST TRUST DORSEY WRIGHT DALI 1 ETF "
    },
    {
      "symbol": "DALN",
      "name": "DallasNews Corporation - Class A"
    },
    {
      "symbol": "DAN",
      "name": "Dana Inc"
    },
    {
      "symbol": "DAO",
      "name": "Youdao Inc"
    },
    {
      "symbol": "DAPP",
      "name": "VANECK DIGITAL TRANSFORMATION ETF "
    },
    {
      "symbol": "DAPR",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - APRIL "
    },
    {
      "symbol": "DAR",
      "name": "Darling Ingredients Inc"
    },
    {
      "symbol": "DARE",
      "name": "Dare Bioscience Inc"
    },
    {
      "symbol": "DARP",
      "name": "Grizzle Growth ETF"
    },
    {
      "symbol": "DASH",
      "name": "DoorDash Inc - Class A"
    },
    {
      "symbol": "DAT",
      "name": "PROSHARES BIG DATA REFINERS ETF "
    },
    {
      "symbol": "DATS",
      "name": "DatChat Inc"
    },
    {
      "symbol": "DATSW",
      "name": "DatChat Inc - Warrants - Series A (13/08/2024)"
    },
    {
      "symbol": "DAUG",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - AUGUST "
    },
    {
      "symbol": "DAVA",
      "name": "Endava plc"
    },
    {
      "symbol": "DAVE",
      "name": "Dave Inc - Class A"
    },
    {
      "symbol": "DAVEW",
      "name": "Dave Inc - Warrants (05/01/2026)"
    },
    {
      "symbol": "DAWN",
      "name": "Day One Biopharmaceuticals Inc"
    },
    {
      "symbol": "DAX",
      "name": "GLOBAL X DAX GERMANY ETF "
    },
    {
      "symbol": "DAY",
      "name": "Ceridian HCM Holding Inc"
    },
    {
      "symbol": "DB",
      "name": "Deutsche Bank AG"
    },
    {
      "symbol": "DBA",
      "name": "Invesco DB Agriculture Fund"
    },
    {
      "symbol": "DBAW",
      "name": "XTRACKERS MSCI ALL WORLD EX US HEDGED EQUITY ETF "
    },
    {
      "symbol": "DBB",
      "name": "Invesco DB Base Metals Fund"
    },
    {
      "symbol": "DBC",
      "name": "Invesco DB Commodity Index Tracking Fund"
    },
    {
      "symbol": "DBE",
      "name": "Invesco DB Energy Fund"
    },
    {
      "symbol": "DBEF",
      "name": "Xtrackers MSCI EAFE Hedged Equity ETF"
    },
    {
      "symbol": "DBEH",
      "name": "IMGP DBI HEDGE STRATEGY ETF "
    },
    {
      "symbol": "DBEM",
      "name": "Xtrackers MSCI Emerging Markets Hedged Equity ETF"
    },
    {
      "symbol": "DBEU",
      "name": "Xtrackers MSCI Europe Hedged Equity ETF"
    },
    {
      "symbol": "DBEZ",
      "name": "XTRACKERS MSCI EUROZONE HEDGED EQUITY ETF "
    },
    {
      "symbol": "DBGI",
      "name": "Digital Brands Group Inc"
    },
    {
      "symbol": "DBGIW",
      "name": "Digital Brands Group Inc - Warrants (01/05/2026)"
    },
    {
      "symbol": "DBI",
      "name": "Designer Brands Inc - Class A"
    },
    {
      "symbol": "DBJP",
      "name": "Xtrackers MSCI Japan Hedged Equity ETF"
    },
    {
      "symbol": "DBL",
      "name": "DoubleLine Opportunistic Credit Fund"
    },
    {
      "symbol": "DBMF",
      "name": "IMGP DBI MANAGED FUTURES STRATEGY ETF "
    },
    {
      "symbol": "DBND",
      "name": "DOUBLELINE OPPORTUNISTIC BOND ETF "
    },
    {
      "symbol": "DBO",
      "name": "Invesco DB Oil Fund"
    },
    {
      "symbol": "DBP",
      "name": "Invesco DB Precious Metals Fund"
    },
    {
      "symbol": "DBRG",
      "name": "DigitalBridge Group Inc - Class A"
    },
    {
      "symbol": "DBRG-P-H",
      "name": "DigitalBridge Group Inc 7.125 Cum Red Perp Pfd Ser H"
    },
    {
      "symbol": "DBRG-P-I",
      "name": "DigitalBridge Group Inc 7.15 Cum Red Perp Pfd Ser I"
    },
    {
      "symbol": "DBRG-P-J",
      "name": "DigitalBridge Group Inc 7.125 Cum Red Perp Pfd Ser J"
    },
    {
      "symbol": "DBTX",
      "name": "Decibel Therapeutics Inc"
    },
    {
      "symbol": "DBVT",
      "name": "DBV Technologies"
    },
    {
      "symbol": "DBX",
      "name": "Dropbox Inc - Class A"
    },
    {
      "symbol": "DC",
      "name": "Dakota Gold Corp"
    },
    {
      "symbol": "DC-WS",
      "name": "Dakota Gold Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "DCBO",
      "name": "Docebo Inc"
    },
    {
      "symbol": "DCF",
      "name": "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc"
    },
    {
      "symbol": "DCGO",
      "name": "DocGo Inc"
    },
    {
      "symbol": "DCI",
      "name": "Donaldson Co. Inc"
    },
    {
      "symbol": "DCMT",
      "name": "DoubleLine Commodity Strategy ETF"
    },
    {
      "symbol": "DCO",
      "name": "Ducommun Inc"
    },
    {
      "symbol": "DCOM",
      "name": "Dime Community Bancshares Inc"
    },
    {
      "symbol": "DCOMP",
      "name": "Dime Community Bancshares Inc"
    },
    {
      "symbol": "DCOR",
      "name": "DIMENSIONAL US CORE EQUITY 1 ETF "
    },
    {
      "symbol": "DCPH",
      "name": "Deciphera Pharmaceuticals Inc"
    },
    {
      "symbol": "DCRE",
      "name": "DoubleLine Commercial Real Estate ETF"
    },
    {
      "symbol": "DCSX",
      "name": "Direct Communication Solutions Inc"
    },
    {
      "symbol": "DCTH",
      "name": "Delcath Systems Inc"
    },
    {
      "symbol": "DD",
      "name": "DuPont de Nemours Inc"
    },
    {
      "symbol": "DDC",
      "name": "Dominion Diamond Corp"
    },
    {
      "symbol": "DDD",
      "name": "3D Systems Corp"
    },
    {
      "symbol": "DDEC",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - DECEMBER "
    },
    {
      "symbol": "DDF",
      "name": "Delaware Investments Dividend and Income Fund Inc"
    },
    {
      "symbol": "DDI",
      "name": "DoubleDown Interactive Co Ltd"
    },
    {
      "symbol": "DDIV",
      "name": "FIRST TRUST DORSEY WRIGHT MOMENTUM & DIVIDEND ETF "
    },
    {
      "symbol": "DDL",
      "name": "Dingdong (Cayman) Ltd"
    },
    {
      "symbol": "DDLS",
      "name": "WISDOMTREE DYNAMIC CURRENCY HEDGED INTERNATIONAL SMALLCAP EQUITY FUND "
    },
    {
      "symbol": "DDM",
      "name": "ProShares Ultra Dow30 2x Shares"
    },
    {
      "symbol": "DDOG",
      "name": "Datadog Inc - Class A"
    },
    {
      "symbol": "DDS",
      "name": "Dillard`s Inc - Class A"
    },
    {
      "symbol": "DDT",
      "name": "Dillards Capital Trust I"
    },
    {
      "symbol": "DDWM",
      "name": "WisdomTree Dynamic Currency Hedged International Equity Fund"
    },
    {
      "symbol": "DE",
      "name": "Deere & Company"
    },
    {
      "symbol": "DEA",
      "name": "Easterly Government Properties Inc"
    },
    {
      "symbol": "DEC"
    },
    {
      "symbol": "DECA",
      "name": "Denali Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "DECAU",
      "name": "Denali Capital Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "DECAW",
      "name": "Denali Capital Acquisition Corp - Warrants (28/03/2027)"
    },
    {
      "symbol": "DECK",
      "name": "Deckers Outdoor Corp"
    },
    {
      "symbol": "DECT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 DEC ETF "
    },
    {
      "symbol": "DECW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 DEC ETF "
    },
    {
      "symbol": "DECZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (DECEMBER) ETF "
    },
    {
      "symbol": "DEED",
      "name": "FIRST TRUST TCW SECURITIZED PLUS ETF "
    },
    {
      "symbol": "DEEF",
      "name": "XTRACKERS FTSE DEVELOPED EX US MULTIFACTOR ETF "
    },
    {
      "symbol": "DEEP",
      "name": "ROUNDHILL ACQUIRERS DEEP VALUE ETF "
    },
    {
      "symbol": "DEFI",
      "name": "Hashdex Bitcoin Futures ETF"
    },
    {
      "symbol": "DEHP",
      "name": "DIMENSIONAL EMERGING MARKETS HIGH PROFITABILITY ETF "
    },
    {
      "symbol": "DEI",
      "name": "Douglas Emmett Inc"
    },
    {
      "symbol": "DELL",
      "name": "Dell Technologies Inc - Class C"
    },
    {
      "symbol": "DEM",
      "name": "WisdomTree Emerging Markets High Dividend Fund"
    },
    {
      "symbol": "DEMZ",
      "name": "DEMOCRATIC LARGE CAP CORE ETF "
    },
    {
      "symbol": "DENN",
      "name": "Denny`s Corp"
    },
    {
      "symbol": "DEO",
      "name": "Diageo plc"
    },
    {
      "symbol": "DERM",
      "name": "Journey Medical Corp"
    },
    {
      "symbol": "DES",
      "name": "WisdomTree U.S. SmallCap Dividend Fund"
    },
    {
      "symbol": "DESK",
      "name": "VANECK OFFICE AND COMMERCIAL REIT ETF "
    },
    {
      "symbol": "DESP",
      "name": "Despegar.com Corp"
    },
    {
      "symbol": "DEUS",
      "name": "XTRACKERS RUSSELL US MULTIFACTOR ETF "
    },
    {
      "symbol": "DEW",
      "name": "WisdomTree Global High Dividend Fund"
    },
    {
      "symbol": "DEX",
      "name": "Delaware Enhanced Global Dividend & Income Fund"
    },
    {
      "symbol": "DFAC",
      "name": "DIMENSIONAL U.S. CORE EQUITY 2 ETF "
    },
    {
      "symbol": "DFAE",
      "name": "DIMENSIONAL EMERGING CORE EQUITY MARKET ETF "
    },
    {
      "symbol": "DFAI",
      "name": "DIMENSIONAL INTERNATIONAL CORE EQUITY MARKET ETF "
    },
    {
      "symbol": "DFAR",
      "name": "DIMENSIONAL US REAL ESTATE ETF "
    },
    {
      "symbol": "DFAS",
      "name": "DIMENSIONAL U.S. SMALL CAP ETF "
    },
    {
      "symbol": "DFAT",
      "name": "DIMENSIONAL U.S. TARGETED VALUE ETF "
    },
    {
      "symbol": "DFAU",
      "name": "DIMENSIONAL US CORE EQUITY MARKET ETF "
    },
    {
      "symbol": "DFAW",
      "name": "DIMENSIONAL WORLD EQUITY ETF "
    },
    {
      "symbol": "DFAX",
      "name": "DIMENSIONAL WORLD EX U.S. CORE EQUITY 2 ETF "
    },
    {
      "symbol": "DFCA",
      "name": "DIMENSIONAL CALIFORNIA MUNICIPAL BOND ETF "
    },
    {
      "symbol": "DFCF",
      "name": "DIMENSIONAL CORE FIXED INCOME ETF "
    },
    {
      "symbol": "DFE",
      "name": "WisdomTree Europe SmallCap Dividend Fund"
    },
    {
      "symbol": "DFEB",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - FEBRUARY "
    },
    {
      "symbol": "DFEM",
      "name": "DIMENSIONAL EMERGING MARKETS CORE EQUITY 2 ETF "
    },
    {
      "symbol": "DFEN",
      "name": "DIREXION DAILY AEROSPACE & DEFENSE BULL 3X SHARES "
    },
    {
      "symbol": "DFEV",
      "name": "DIMENSIONAL EMERGING MARKETS VALUE ETF "
    },
    {
      "symbol": "DFFN"
    },
    {
      "symbol": "DFGP",
      "name": "DIMENSIONAL GLOBAL CORE PLUS FIXED INCOME ETF "
    },
    {
      "symbol": "DFGR",
      "name": "DIMENSIONAL GLOBAL REAL ESTATE ETF "
    },
    {
      "symbol": "DFGX",
      "name": "DIMENSIONAL GLOBAL EX US CORE FIXED INCOME ETF "
    },
    {
      "symbol": "DFH",
      "name": "Dream Finders Homes Inc - Class A"
    },
    {
      "symbol": "DFHY",
      "name": "DONOGHUE FORLINES TACTICAL HIGH YIELD ETF "
    },
    {
      "symbol": "DFIC",
      "name": "DIMENSIONAL INTERNATIONAL CORE EQUITY 2 ETF "
    },
    {
      "symbol": "DFIN",
      "name": "Donnelley Financial Solutions Inc"
    },
    {
      "symbol": "DFIP",
      "name": "DIMENSIONAL INFLATION-PROTECTED SECURITIES ETF "
    },
    {
      "symbol": "DFIS",
      "name": "DIMENSIONAL INTERNATIONAL SMALL CAP ETF "
    },
    {
      "symbol": "DFIV",
      "name": "DIMENSIONAL INTERNATIONAL VALUE ETF "
    },
    {
      "symbol": "DFJ",
      "name": "WisdomTree Japan SmallCap Dividend Fund"
    },
    {
      "symbol": "DFLI",
      "name": "Dragonfly Energy Holdings Corp"
    },
    {
      "symbol": "DFLIW",
      "name": "Dragonfly Energy Holdings Corp - Warrants (10/07/2027)"
    },
    {
      "symbol": "DFLV",
      "name": "DIMENSIONAL US LARGE CAP VALUE ETF "
    },
    {
      "symbol": "DFND",
      "name": "SIREN DIVCON DIVIDEND DEFENDER ETF "
    },
    {
      "symbol": "DFNL",
      "name": "DAVIS SELECT FINANCIAL ETF "
    },
    {
      "symbol": "DFNM",
      "name": "DIMENSIONAL NATIONAL MUNICIPAL BOND ETF "
    },
    {
      "symbol": "DFNV",
      "name": "DONOGHUE FORLINES INNOVATION ETF "
    },
    {
      "symbol": "DFP",
      "name": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc"
    },
    {
      "symbol": "DFRA",
      "name": "DONOGHUE FORLINES YIELD ENHANCED REAL ASSET ETF "
    },
    {
      "symbol": "DFS",
      "name": "Discover Financial Services"
    },
    {
      "symbol": "DFSB",
      "name": "DIMENSIONAL GLOBAL SUSTAINABILITY FIXED INCOME ETF "
    },
    {
      "symbol": "DFSD",
      "name": "DIMENSIONAL SHORT-DURATION FIXED INCOME ETF "
    },
    {
      "symbol": "DFSE",
      "name": "DIMENSIONAL EMERGING MARKETS SUSTAINABILITY CORE 1 ETF "
    },
    {
      "symbol": "DFSI",
      "name": "DIMENSIONAL INTERNATIONAL SUSTAINABILITY CORE 1 ETF "
    },
    {
      "symbol": "DFSU",
      "name": "DIMENSIONAL US SUSTAINABILITY CORE 1 ETF "
    },
    {
      "symbol": "DFSV",
      "name": "DIMENSIONAL US SMALL CAP VALUE ETF "
    },
    {
      "symbol": "DFUS",
      "name": "DIMENSIONAL U.S. EQUITY ETF "
    },
    {
      "symbol": "DFUV",
      "name": "DIMENSIONAL US MARKETWIDE VALUE ETF "
    },
    {
      "symbol": "DFVE",
      "name": "DoubleLine Fortune 500 Equal Weight ETF"
    },
    {
      "symbol": "DFVX",
      "name": "DIMENSIONAL US LARGE CAP VECTOR ETF "
    },
    {
      "symbol": "DG",
      "name": "Dollar General Corp"
    },
    {
      "symbol": "DGCB",
      "name": "DIMENSIONAL GLOBAL CREDIT ETF "
    },
    {
      "symbol": "DGHI",
      "name": "Digihost Technology Inc"
    },
    {
      "symbol": "DGICA",
      "name": "Donegal Group Inc - Class A"
    },
    {
      "symbol": "DGICB",
      "name": "Donegal Group Inc - Class B"
    },
    {
      "symbol": "DGII",
      "name": "Digi International Inc"
    },
    {
      "symbol": "DGIN",
      "name": "VANECK DIGITAL INDIA ETF "
    },
    {
      "symbol": "DGLY",
      "name": "Digital Ally Inc (New)"
    },
    {
      "symbol": "DGNU",
      "name": "Dragoneer Growth Opportunities Corp III - Class A"
    },
    {
      "symbol": "DGP",
      "name": "Deutsche Bank AG London"
    },
    {
      "symbol": "DGRE",
      "name": "WisdomTree Emerging Markets Quality Dividend Growth Fund"
    },
    {
      "symbol": "DGRO",
      "name": "iShares Core Dividend Growth ETF"
    },
    {
      "symbol": "DGRS",
      "name": "WisdomTree U.S. SmallCap Quality Dividend Growth Fund"
    },
    {
      "symbol": "DGRW",
      "name": "WisdomTree U.S. Quality Dividend Growth Fund"
    },
    {
      "symbol": "DGS",
      "name": "WisdomTree Emerging Markets SmallCap Dividend Fund"
    },
    {
      "symbol": "DGT",
      "name": "SPDR(R) GLOBAL DOW ETF "
    },
    {
      "symbol": "DGX",
      "name": "Quest Diagnostics Inc"
    },
    {
      "symbol": "DGZ",
      "name": "Deutsche Bank AG London"
    },
    {
      "symbol": "DH",
      "name": "Definitive Healthcare Corp - Class A"
    },
    {
      "symbol": "DHAC",
      "name": "Digital Health Acquisition Corp"
    },
    {
      "symbol": "DHACU",
      "name": "Digital Health Acquisition Corp - Unit (1 Ordinary share & 1 Wrt)"
    },
    {
      "symbol": "DHACW",
      "name": "Digital Health Acquisition Corp - Warrants(02/11/2026)"
    },
    {
      "symbol": "DHAI",
      "name": "DIH Holding US Inc - Class A"
    },
    {
      "symbol": "DHAIW",
      "name": "DIH Holding US Inc - Warrants (07/02/2029)"
    },
    {
      "symbol": "DHC",
      "name": "Diversified Healthcare Trust"
    },
    {
      "symbol": "DHCA",
      "name": "DHC Acquisition Corp - Class A"
    },
    {
      "symbol": "DHCNI",
      "name": "Diversified Healthcare Trust"
    },
    {
      "symbol": "DHCNL",
      "name": "Diversified Healthcare Trust"
    },
    {
      "symbol": "DHF",
      "name": "BNY Mellon High Yield Strategies Fund"
    },
    {
      "symbol": "DHI",
      "name": "D.R. Horton Inc"
    },
    {
      "symbol": "DHIL",
      "name": "Diamond Hill Investment Group Inc - Class A"
    },
    {
      "symbol": "DHR",
      "name": "Danaher Corp"
    },
    {
      "symbol": "DHS",
      "name": "WisdomTree U.S. High Dividend Fund"
    },
    {
      "symbol": "DHT",
      "name": "DHT Holdings Inc"
    },
    {
      "symbol": "DHX",
      "name": "DHI Group Inc"
    },
    {
      "symbol": "DHY",
      "name": "Credit Suisse High Yield Bond Fund"
    },
    {
      "symbol": "DIA",
      "name": "SPDR Dow Jones Industrial Average ETF"
    },
    {
      "symbol": "DIAL",
      "name": "COLUMBIA DIVERSIFIED FIXED INCOME ALLOCATION ETF "
    },
    {
      "symbol": "DIAX",
      "name": "Nuveen Dow 30SM Dynamic Overwrite Fund"
    },
    {
      "symbol": "DIBS",
      "name": "1stdibs.com Inc"
    },
    {
      "symbol": "DICE",
      "name": "DICE Therapeutics Inc"
    },
    {
      "symbol": "DIEM",
      "name": "Franklin Emerging Market Core Dividend Tilt Index ETF"
    },
    {
      "symbol": "DIG",
      "name": "ProShares Ultra Energy"
    },
    {
      "symbol": "DIHP",
      "name": "DIMENSIONAL INTERNATIONAL HIGH PROFITABILITY ETF "
    },
    {
      "symbol": "DIM",
      "name": "WisdomTree International MidCap Dividend Fund"
    },
    {
      "symbol": "DIN",
      "name": "Dine Brands Global Inc"
    },
    {
      "symbol": "DINO",
      "name": "HF Sinclair Corp"
    },
    {
      "symbol": "DINT",
      "name": "DAVIS SELECT INTERNATIONAL ETF "
    },
    {
      "symbol": "DIOD",
      "name": "Diodes Inc"
    },
    {
      "symbol": "DIP",
      "name": "BTD CAPITAL FUND "
    },
    {
      "symbol": "DIS",
      "name": "Walt Disney Co (The)"
    },
    {
      "symbol": "DISO",
      "name": "YieldMax DIS Option Income Strategy ETF"
    },
    {
      "symbol": "DIST",
      "name": "Distoken Acquisition Corp"
    },
    {
      "symbol": "DISTR",
      "name": "Distoken Acquisition Corp"
    },
    {
      "symbol": "DISTU",
      "name": "Distoken Acquisition Corp - Units (1 Ord Class A 1 Right & 1 War)"
    },
    {
      "symbol": "DISTW",
      "name": "Distoken Acquisition Corp - Warrants (10/02/2028)"
    },
    {
      "symbol": "DISV",
      "name": "DIMENSIONAL INTERNATIONAL SMALL CAP VALUE ETF "
    },
    {
      "symbol": "DIT",
      "name": "Amcon Distributing Company"
    },
    {
      "symbol": "DIV",
      "name": "GLOBAL X SUPERDIVIDEND U.S. ETF "
    },
    {
      "symbol": "DIVB",
      "name": "iShares Core Dividend ETF"
    },
    {
      "symbol": "DIVD",
      "name": "ALTRIUS GLOBAL DIVIDEND ETF "
    },
    {
      "symbol": "DIVG",
      "name": "Invesco S&P 500 High Dividend Growers ETF"
    },
    {
      "symbol": "DIVI",
      "name": "Franklin International Core Dividend Tilt Index ETF"
    },
    {
      "symbol": "DIVL",
      "name": "Madison Dividend Value ETF"
    },
    {
      "symbol": "DIVO",
      "name": "AMPLIFY CWP ENHANCED DIVIDEND INCOME ETF "
    },
    {
      "symbol": "DIVP",
      "name": "Cullen Enhanced Equity Income ETF"
    },
    {
      "symbol": "DIVS",
      "name": "SMARTETFS DIVIDEND BUILDER ETF "
    },
    {
      "symbol": "DIVY",
      "name": "SOUND EQUITY DIVIDEND INCOME ETF "
    },
    {
      "symbol": "DIVZ",
      "name": "THE OPAL DIVIDEND INCOME ETF "
    },
    {
      "symbol": "DJAN",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - JANUARY "
    },
    {
      "symbol": "DJCB",
      "name": "UBS AG London Branch ETRACS Bloomberg Commodity Index Total Return ETN Ser B 10312039"
    },
    {
      "symbol": "DJCO",
      "name": "Daily Journal Corporation"
    },
    {
      "symbol": "DJD",
      "name": "Invesco Dow Jones Industrial Average Dividend ETF"
    },
    {
      "symbol": "DJIA",
      "name": "GLOBAL X DOW 30 COVERED CALL ETF "
    },
    {
      "symbol": "DJP",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "DJT",
      "name": "Trump Media & Technology Group Corp"
    },
    {
      "symbol": "DJTWW",
      "name": "Trump Media & Technology Group Corp Wt Exp"
    },
    {
      "symbol": "DJUL",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - JULY "
    },
    {
      "symbol": "DJUN",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - JUNE "
    },
    {
      "symbol": "DK",
      "name": "Delek US Holdings Inc"
    },
    {
      "symbol": "DKL",
      "name": "Delek Logistics Partners LP"
    },
    {
      "symbol": "DKNG",
      "name": "DraftKings Inc - Class A"
    },
    {
      "symbol": "DKS",
      "name": "Dicks Sporting Goods Inc"
    },
    {
      "symbol": "DLA",
      "name": "Delta Apparel Inc"
    },
    {
      "symbol": "DLB",
      "name": "Dolby Laboratories Inc - Class A"
    },
    {
      "symbol": "DLCAU",
      "name": "Deep Lake Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "DLHC",
      "name": "DLH Holdings Corp"
    },
    {
      "symbol": "DLN",
      "name": "WisdomTree U.S. LargeCap Dividend Fund"
    },
    {
      "symbol": "DLNG",
      "name": "Dynagas LNG Partners LP"
    },
    {
      "symbol": "DLNG-P-A",
      "name": "Dynagas LNG Partners LP 900 Series A Cumulative Redeemable Preferred Units"
    },
    {
      "symbol": "DLNG-P-B",
      "name": "Dynagas LNG Partners LP Pfd Unit Ser B FixedFltg"
    },
    {
      "symbol": "DLO",
      "name": "DLocal Ltd Class A"
    },
    {
      "symbol": "DLPN",
      "name": "Dolphin Entertainment Inc"
    },
    {
      "symbol": "DLR",
      "name": "Digital Realty Trust Inc"
    },
    {
      "symbol": "DLR-P-J",
      "name": "Digital Realty Trust Inc"
    },
    {
      "symbol": "DLR-P-K",
      "name": "Digital Realty Trust Inc"
    },
    {
      "symbol": "DLR-P-L",
      "name": "Digital Realty Trust Inc"
    },
    {
      "symbol": "DLS",
      "name": "WisdomTree International SmallCap Dividend Fund"
    },
    {
      "symbol": "DLTH",
      "name": "Duluth Holdings Inc - Class B"
    },
    {
      "symbol": "DLTR",
      "name": "Dollar Tree Inc"
    },
    {
      "symbol": "DLX",
      "name": "Deluxe Corp"
    },
    {
      "symbol": "DLY",
      "name": "DoubleLine Yield Opportunities Fund"
    },
    {
      "symbol": "DM",
      "name": "Desktop Metal Inc - Class A"
    },
    {
      "symbol": "DMA",
      "name": "Destra Multi-Alternative Fund"
    },
    {
      "symbol": "DMAC",
      "name": "DiaMedica Therapeutics Inc"
    },
    {
      "symbol": "DMAR",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - MARCH "
    },
    {
      "symbol": "DMAT",
      "name": "GLOBAL X DISRUPTIVE MATERIALS ETF "
    },
    {
      "symbol": "DMAY",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - MAY "
    },
    {
      "symbol": "DMB",
      "name": "BNY Mellon Municipal Bond Infrastructure Fund Inc"
    },
    {
      "symbol": "DMBS",
      "name": "DOUBLELINE MORTGAGE ETF "
    },
    {
      "symbol": "DMCY",
      "name": "DEMOCRACY INTERNATIONAL FUND SHARES"
    },
    {
      "symbol": "DMDV",
      "name": "AAM S&P DEVELOPED MARKETS HIGH DIVIDEND VALUE ETF "
    },
    {
      "symbol": "DMF",
      "name": "BNY Mellon Municipal Income Inc"
    },
    {
      "symbol": "DMLP",
      "name": "Dorchester Minerals LP"
    },
    {
      "symbol": "DMO",
      "name": "Western Asset Mortgage Opportunity Fund Inc"
    },
    {
      "symbol": "DMRC",
      "name": "Digimarc Corporation"
    },
    {
      "symbol": "DMTK",
      "name": "DermTech Inc"
    },
    {
      "symbol": "DMXF",
      "name": "ISHARES ESG ADVANCED MSCI EAFE ETF "
    },
    {
      "symbol": "DMYY",
      "name": "dMY Squared Technology Group Inc - Class A"
    },
    {
      "symbol": "DMYY-U",
      "name": "dMY Squared Technology Group Inc - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "DMYY-WS",
      "name": "dMY Squared Technology Group Inc - Warrants(01/01/9999)"
    },
    {
      "symbol": "DNA",
      "name": "Ginkgo Bioworks Holdings Inc - Class A"
    },
    {
      "symbol": "DNA-WS",
      "name": "Ginkgo Bioworks Holdings Inc - Warrants (23/02/2026)"
    },
    {
      "symbol": "DNAB",
      "name": "Social Capital Suvretta Holdings Corp II - Class A"
    },
    {
      "symbol": "DNAD",
      "name": "Social Capital Suvretta Holdings Corp IV - Class A"
    },
    {
      "symbol": "DNB",
      "name": "Dun & Bradstreet Holdings Inc"
    },
    {
      "symbol": "DNL",
      "name": "WisdomTree Global ex-U.S. Quality Dividend Growth Fund"
    },
    {
      "symbol": "DNLI",
      "name": "Denali Therapeutics Inc"
    },
    {
      "symbol": "DNMR",
      "name": "Danimer Scientific Inc - Class A"
    },
    {
      "symbol": "DNN",
      "name": "Denison Mines Corp"
    },
    {
      "symbol": "DNOV",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - NOVEMBER "
    },
    {
      "symbol": "DNOW",
      "name": "NOW Inc"
    },
    {
      "symbol": "DNP",
      "name": "DNP Select Income Fund Inc"
    },
    {
      "symbol": "DNTH",
      "name": "Dianthus Therapeutics Inc"
    },
    {
      "symbol": "DNUT",
      "name": "Krispy Kreme Inc"
    },
    {
      "symbol": "DO",
      "name": "Diamond Offshore Drilling Inc"
    },
    {
      "symbol": "DOC",
      "name": "Healthpeak OP LLC"
    },
    {
      "symbol": "DOCN",
      "name": "DigitalOcean Holdings Inc"
    },
    {
      "symbol": "DOCS",
      "name": "Doximity Inc - Class A"
    },
    {
      "symbol": "DOCT",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - OCTOBER "
    },
    {
      "symbol": "DOCU",
      "name": "DocuSign Inc"
    },
    {
      "symbol": "DOG",
      "name": "ProShares Short Dow30 -1x Shares"
    },
    {
      "symbol": "DOGG",
      "name": "FT VEST DJIA DOGS 10 TARGET INCOME ETF "
    },
    {
      "symbol": "DOGZ",
      "name": "Dogness (International) Corp - Class A"
    },
    {
      "symbol": "DOL",
      "name": "WisdomTree International LargeCap Dividend Index"
    },
    {
      "symbol": "DOLE",
      "name": "Dole plc"
    },
    {
      "symbol": "DOMA",
      "name": "Doma Holdings Inc - New"
    },
    {
      "symbol": "DOMH",
      "name": "Dominari Holdings Inc"
    },
    {
      "symbol": "DOMO",
      "name": "Domo Inc - Class B"
    },
    {
      "symbol": "DON",
      "name": "WisdomTree U.S. MidCap Dividend Fund"
    },
    {
      "symbol": "DOOO",
      "name": "BRP Inc"
    },
    {
      "symbol": "DOOR",
      "name": "Masonite International Corp"
    },
    {
      "symbol": "DORM",
      "name": "Dorman Products Inc"
    },
    {
      "symbol": "DOUG",
      "name": "Douglas Elliman Inc"
    },
    {
      "symbol": "DOV",
      "name": "Dover Corp"
    },
    {
      "symbol": "DOW",
      "name": "Dow Inc"
    },
    {
      "symbol": "DOX",
      "name": "Amdocs Ltd"
    },
    {
      "symbol": "DOYU",
      "name": "DouYu International Holdings Ltd"
    },
    {
      "symbol": "DPCS",
      "name": "DP Cap Acquisition Corp I - Class A"
    },
    {
      "symbol": "DPCSU",
      "name": "DP Cap Acquisition Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "DPCSW",
      "name": "DP Cap Acquisition Corp I - Warrants (08/11/2026)"
    },
    {
      "symbol": "DPG",
      "name": "Duff & Phelps Utility and Infrastructure Fund Inc"
    },
    {
      "symbol": "DPK",
      "name": "DIREXION DAILY MSCI DEVELOPED MARKETS BEAR 3X SHARES "
    },
    {
      "symbol": "DPRO",
      "name": "Draganfly Inc"
    },
    {
      "symbol": "DPSI",
      "name": "DecisionPoint Systems Inc"
    },
    {
      "symbol": "DPST",
      "name": "DIREXION DAILY REGIONAL BANKS BULL 3X SHARES "
    },
    {
      "symbol": "DPZ",
      "name": "Dominos Pizza Inc"
    },
    {
      "symbol": "DQ",
      "name": "Daqo New Energy Corp"
    },
    {
      "symbol": "DRCT",
      "name": "Direct Digital Holdings Inc Class A"
    },
    {
      "symbol": "DRD",
      "name": "DRDGold Ltd"
    },
    {
      "symbol": "DRH",
      "name": "Diamondrock Hospitality Company"
    },
    {
      "symbol": "DRH-P-A",
      "name": "Diamondrock Hospitality Company"
    },
    {
      "symbol": "DRI",
      "name": "Darden Restaurants Inc"
    },
    {
      "symbol": "DRIO",
      "name": "DarioHealth Corp"
    },
    {
      "symbol": "DRIP",
      "name": "DIREXION DAILY S&P OIL & GAS EXP. & PROD. BEAR 2X SHARES "
    },
    {
      "symbol": "DRIV",
      "name": "Global X Autonomous & Electric Vehicles ETF"
    },
    {
      "symbol": "DRLL",
      "name": "Strive U.S. Energy ETF"
    },
    {
      "symbol": "DRMA",
      "name": "Dermata Therapeutics Inc"
    },
    {
      "symbol": "DRMAW",
      "name": "Dermata Therapeutics Inc - Warrants (13/08/2026)"
    },
    {
      "symbol": "DRN",
      "name": "DIREXION DAILY REAL ESTATE BULL 3X SHARES "
    },
    {
      "symbol": "DRQ",
      "name": "Dril-Quip Inc"
    },
    {
      "symbol": "DRRX",
      "name": "Durect Corp"
    },
    {
      "symbol": "DRS",
      "name": "Leonardo DRS Inc"
    },
    {
      "symbol": "DRSK",
      "name": "Aptus Defined Risk ETF"
    },
    {
      "symbol": "DRTS",
      "name": "Alpha Tau Medical Ltd"
    },
    {
      "symbol": "DRTSW",
      "name": "Alpha Tau Medical Ltd - Warrants (07/03/2027)"
    },
    {
      "symbol": "DRUG",
      "name": "Bright Minds Biosciences Inc"
    },
    {
      "symbol": "DRUP",
      "name": "Graniteshares Nasdaq Select Disruptors ETF"
    },
    {
      "symbol": "DRV",
      "name": "DIREXION DAILY REAL ESTATE BEAR 3X SHARES "
    },
    {
      "symbol": "DRVN",
      "name": "Driven Brands Holdings Inc"
    },
    {
      "symbol": "DSAQ-U",
      "name": "Direct Selling Acquisition Corp Units each consisting of one share of Class A common stock and onehalf of redeemable warrant"
    },
    {
      "symbol": "DSCF",
      "name": "DISCIPLINE FUND ETF "
    },
    {
      "symbol": "DSEP",
      "name": "FT VEST U.S. EQUITY DEEP BUFFER ETF - SEPTEMBER "
    },
    {
      "symbol": "DSGN",
      "name": "Design Therapeutics Inc"
    },
    {
      "symbol": "DSGR",
      "name": "Distribution Solutions Group Inc"
    },
    {
      "symbol": "DSGX",
      "name": "Descartes Systems Group Inc"
    },
    {
      "symbol": "DSI",
      "name": "iShares MSCI KLD 400 Social Index Fund"
    },
    {
      "symbol": "DSKE",
      "name": "Daseke Inc"
    },
    {
      "symbol": "DSL",
      "name": "Doubleline Income Solutions Fund"
    },
    {
      "symbol": "DSM",
      "name": "BNY Mellon Strategic Municipal Bond Fund Inc"
    },
    {
      "symbol": "DSMC",
      "name": "DISTILLATE SMALL/MID CASH FLOW ETF "
    },
    {
      "symbol": "DSP",
      "name": "Viant Technology Inc - Class A"
    },
    {
      "symbol": "DSS",
      "name": "DSS Inc"
    },
    {
      "symbol": "DSTL",
      "name": "DISTILLATE U.S. FUNDAMENTAL STABILITY & VALUE ETF "
    },
    {
      "symbol": "DSTX",
      "name": "DISTILLATE INTERNATIONAL FUNDAMENTAL STABILITY & VALUE ETF "
    },
    {
      "symbol": "DSU",
      "name": "BlackRock Debt Strategies Fund Inc"
    },
    {
      "symbol": "DSWL",
      "name": "Deswell Industries Inc"
    },
    {
      "symbol": "DSX",
      "name": "Diana Shipping Inc"
    },
    {
      "symbol": "DSX-P-B",
      "name": "Diana Shipping Inc Perpetual Preferred Shares Series B Marshall Islands"
    },
    {
      "symbol": "DSX-WS",
      "name": "Diana Shipping Inc - Warrants (14/12/2026)"
    },
    {
      "symbol": "DT",
      "name": "Dynatrace Inc"
    },
    {
      "symbol": "DTB",
      "name": "DTE Energy Company"
    },
    {
      "symbol": "DTC",
      "name": "Solo Brands Inc - Class A"
    },
    {
      "symbol": "DTCK",
      "name": "Davis Commodities Ltd"
    },
    {
      "symbol": "DTCR",
      "name": "Global X Data Center REITs & Digital Infrastructure ETF"
    },
    {
      "symbol": "DTD",
      "name": "WisdomTree U.S. Total Dividend Fund"
    },
    {
      "symbol": "DTE",
      "name": "DTE Energy Company"
    },
    {
      "symbol": "DTEC",
      "name": "ALPS DISRUPTIVE TECHNOLOGIES ETF "
    },
    {
      "symbol": "DTF",
      "name": "DTF Tax-Free Income 2028 Term Fund Inc"
    },
    {
      "symbol": "DTG",
      "name": "DTE Energy Company"
    },
    {
      "symbol": "DTH",
      "name": "WisdomTree International High Dividend Fund"
    },
    {
      "symbol": "DTIL",
      "name": "Precision Biosciences Inc"
    },
    {
      "symbol": "DTM",
      "name": "DT Midstream Inc"
    },
    {
      "symbol": "DTRE",
      "name": "FIRST TRUST ALERIAN DISRUPTIVE TECHNOLOGY REAL ESTATE ETF "
    },
    {
      "symbol": "DTSS",
      "name": "Datasea Inc"
    },
    {
      "symbol": "DTST",
      "name": "Data Storage Corp"
    },
    {
      "symbol": "DTSTW",
      "name": "Data Storage Corp - Warrants (13/05/2026)"
    },
    {
      "symbol": "DTW",
      "name": "DTE Energy Company"
    },
    {
      "symbol": "DUBS",
      "name": "Aptus Large Cap Enhanced Yield ETF"
    },
    {
      "symbol": "DUDE",
      "name": "Merlyn.AI SectorSurfer Momentum ETF"
    },
    {
      "symbol": "DUET",
      "name": "DUET Acquisition Corp - Class A"
    },
    {
      "symbol": "DUETU",
      "name": "DUET Acquisition Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "DUETW",
      "name": "DUET Acquisition Corp - Warrants (18/01/2027)"
    },
    {
      "symbol": "DUG",
      "name": "ProShares UltraShort Energy"
    },
    {
      "symbol": "DUHP",
      "name": "DIMENSIONAL US HIGH PROFITABILITY ETF "
    },
    {
      "symbol": "DUK",
      "name": "Duke Energy Corp"
    },
    {
      "symbol": "DUK-P-A",
      "name": "Duke Energy Corp"
    },
    {
      "symbol": "DUKB",
      "name": "Duke Energy Corp"
    },
    {
      "symbol": "DULL",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "DUO",
      "name": "Fangdd Network Group Ltd"
    },
    {
      "symbol": "DUOL",
      "name": "Duolingo Inc - Class A"
    },
    {
      "symbol": "DUOT",
      "name": "Duos Technologies Group Inc"
    },
    {
      "symbol": "DURA",
      "name": "VANECK DURABLE HIGH DIVIDEND ETF "
    },
    {
      "symbol": "DUSA",
      "name": "DAVIS SELECT U.S. EQUITY ETF "
    },
    {
      "symbol": "DUSB",
      "name": "DIMENSIONAL ULTRASHORT FIXED INCOME ETF "
    },
    {
      "symbol": "DUSL",
      "name": "DIREXION DAILY INDUSTRIALS BULL 3X SHARES "
    },
    {
      "symbol": "DUST",
      "name": "DIREXION DAILY GOLD MINERS INDEX BEAR 2X SHARES "
    },
    {
      "symbol": "DV",
      "name": "DoubleVerify Holdings Inc"
    },
    {
      "symbol": "DVA",
      "name": "DaVita Inc"
    },
    {
      "symbol": "DVAL",
      "name": "BrandywineGLOBAL - Dynamic US Large Cap Value ETF"
    },
    {
      "symbol": "DVAX",
      "name": "Dynavax Technologies Corp"
    },
    {
      "symbol": "DVDN",
      "name": "Kingsbarn Dividend Opportunity ETF"
    },
    {
      "symbol": "DVLU",
      "name": "FIRST TRUST DORSEY WRIGHT MOMENTUM & VALUE ETF "
    },
    {
      "symbol": "DVN",
      "name": "Devon Energy Corp"
    },
    {
      "symbol": "DVND",
      "name": "TOUCHSTONE DIVIDEND SELECT ETF "
    },
    {
      "symbol": "DVOL",
      "name": "FIRST TRUST DORSEY WRIGHT MOMENTUM & LOW VOLATILITY ETF "
    },
    {
      "symbol": "DVY",
      "name": "iShares Select Dividend ETF"
    },
    {
      "symbol": "DVYA",
      "name": "ISHARES ASIA/PACIFIC DIVIDEND ETF "
    },
    {
      "symbol": "DVYE",
      "name": "ISHARES EMERGING MARKETS DIVIDEND ETF "
    },
    {
      "symbol": "DWAS",
      "name": "INVESCO DORSEY WRIGHT SMALLCAP MOMENTUM ETF "
    },
    {
      "symbol": "DWAT",
      "name": "ARROW DWA TACTICAL: MACRO ETF "
    },
    {
      "symbol": "DWAW",
      "name": "AdvisorShares Dorsey Wright FSM All Cap World ETF"
    },
    {
      "symbol": "DWCR",
      "name": "Arrow DWA Tactical: International ETF"
    },
    {
      "symbol": "DWLD",
      "name": "DAVIS SELECT WORLDWIDE ETF "
    },
    {
      "symbol": "DWM",
      "name": "WisdomTree International Equity Fund"
    },
    {
      "symbol": "DWMF",
      "name": "WisdomTree International Multifactor ETF"
    },
    {
      "symbol": "DWSH",
      "name": "AdvisorShares Dorsey Wright Short ETF -1x Shares"
    },
    {
      "symbol": "DWSN",
      "name": "Dawson Geophysical Company"
    },
    {
      "symbol": "DWUS",
      "name": "ADVISORSHARES DORSEY WRIGHT FSM US CORE ETF "
    },
    {
      "symbol": "DWX",
      "name": "SPDR (R) S&P (R) INTERNATIONAL DIVIDEND ETF "
    },
    {
      "symbol": "DX",
      "name": "Dynex Capital Inc"
    },
    {
      "symbol": "DX-P-C",
      "name": "Dynex Capital Inc"
    },
    {
      "symbol": "DXC",
      "name": "DXC Technology Company"
    },
    {
      "symbol": "DXCM",
      "name": "Dexcom Inc"
    },
    {
      "symbol": "DXD",
      "name": "ProShares UltraShort Dow 30-2X Shares"
    },
    {
      "symbol": "DXF",
      "name": "Dunxin Financial Holdings Ltd."
    },
    {
      "symbol": "DXJ",
      "name": "WisdomTree Japan Hedged Equity Fund"
    },
    {
      "symbol": "DXJS",
      "name": "WisdomTree Japan Hedged SmallCap Equity Fund"
    },
    {
      "symbol": "DXLG",
      "name": "Destination XL Group Inc"
    },
    {
      "symbol": "DXPE",
      "name": "DXP Enterprises Inc"
    },
    {
      "symbol": "DXR",
      "name": "Daxor Corp"
    },
    {
      "symbol": "DXYN",
      "name": "Dixie Group Inc"
    },
    {
      "symbol": "DXYZ",
      "name": "Destiny Tech100 Inc"
    },
    {
      "symbol": "DY",
      "name": "Dycom Industries Inc"
    },
    {
      "symbol": "DYAI",
      "name": "Dyadic International Inc DE"
    },
    {
      "symbol": "DYCQ",
      "name": "DT Cloud Acquisition Corp"
    },
    {
      "symbol": "DYCQR",
      "name": "DT Cloud Acquisition Corp"
    },
    {
      "symbol": "DYCQU",
      "name": "DT Cloud Acquisition Corp - Units (1 Ord 1 Right & 1 War)"
    },
    {
      "symbol": "DYFI",
      "name": "IDX Dynamic Fixed Income ETF"
    },
    {
      "symbol": "DYLD",
      "name": "LeaderShares Dynamic Yield ETF"
    },
    {
      "symbol": "DYLG",
      "name": "GLOBAL X DOW 30 COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "DYN",
      "name": "Dyne Therapeutics Inc"
    },
    {
      "symbol": "DYNF",
      "name": "BLACKROCK U.S. EQUITY FACTOR ROTATION ETF "
    },
    {
      "symbol": "DYNI",
      "name": "IDX Dynamic Innovation ETF"
    },
    {
      "symbol": "DYNT",
      "name": "Dynatronics Corp"
    },
    {
      "symbol": "DYTA",
      "name": "SGI DYNAMIC TACTICAL ETF "
    },
    {
      "symbol": "DZSI",
      "name": "DZS Inc"
    },
    {
      "symbol": "DZZ",
      "name": "PowerShares DB Gold Double Short ETN"
    },
    {
      "symbol": "E",
      "name": "Eni Spa"
    },
    {
      "symbol": "EA",
      "name": "Electronic Arts Inc"
    },
    {
      "symbol": "EAD",
      "name": "Allspring Income Opportunities Fund"
    },
    {
      "symbol": "EAF",
      "name": "GrafTech International Ltd"
    },
    {
      "symbol": "EAFG",
      "name": "Pacer Developed Markets Cash Cows Growth Leaders ETF"
    },
    {
      "symbol": "EAGG",
      "name": "iShares ESG Aware U.S. Aggregate Bond ETF"
    },
    {
      "symbol": "EAGL",
      "name": "Eagle Capital Select Equity ETF"
    },
    {
      "symbol": "EAI",
      "name": "Entergy Arkansas LLC"
    },
    {
      "symbol": "EALT",
      "name": "Innovator U.S. Equity 5 to 15 Buffer ETF - Quarterly"
    },
    {
      "symbol": "EAOA",
      "name": "ISHARES ESG AWARE AGGRESSIVE ALLOCATION ETF "
    },
    {
      "symbol": "EAOK",
      "name": "ISHARES ESG AWARE CONSERVATIVE ALLOCATION ETF "
    },
    {
      "symbol": "EAOM",
      "name": "ISHARES ESG AWARE MODERATE ALLOCATION ETF "
    },
    {
      "symbol": "EAOR",
      "name": "ISHARES ESG AWARE GROWTH ALLOCATION ETF "
    },
    {
      "symbol": "EAPR",
      "name": "Innovator Emerging Markets Power Buffer ETF April"
    },
    {
      "symbol": "EARN",
      "name": "Ellington Residential Mortgage REIT"
    },
    {
      "symbol": "EASG",
      "name": "XTRACKERS MSCI EAFE ESG LEADERS EQUITY ETF "
    },
    {
      "symbol": "EAST",
      "name": "Eastside Distilling Inc"
    },
    {
      "symbol": "EAT",
      "name": "Brinker International Inc"
    },
    {
      "symbol": "EATV",
      "name": "VEGTECH PLANT-BASED INNOVATION & CLIMATE ETF "
    },
    {
      "symbol": "EATZ",
      "name": "ADVISORSHARES RESTAURANT ETF "
    },
    {
      "symbol": "EB",
      "name": "Eventbrite Inc - Class A"
    },
    {
      "symbol": "EBAY",
      "name": "EBay Inc"
    },
    {
      "symbol": "EBC",
      "name": "Eastern Bankshares Inc"
    },
    {
      "symbol": "EBF",
      "name": "Ennis Inc"
    },
    {
      "symbol": "EBIZ",
      "name": "GLOBAL X E-COMMERCE ETF "
    },
    {
      "symbol": "EBLU",
      "name": "ECOFIN GLOBAL WATER ESG FUND "
    },
    {
      "symbol": "EBMT",
      "name": "Eagle Bancorp Montana Inc"
    },
    {
      "symbol": "EBND",
      "name": "SPDR(R) BLOOMBERG EMERGING MARKETS LOCAL BOND ETF "
    },
    {
      "symbol": "EBON",
      "name": "Ebang International Holdings Inc - Class A"
    },
    {
      "symbol": "EBR",
      "name": "Centrais Eletricas Brasileiras S.A."
    },
    {
      "symbol": "EBR-B",
      "name": "Centrais Eletricas Brasileiras S.A."
    },
    {
      "symbol": "EBS",
      "name": "Emergent Biosolutions Inc"
    },
    {
      "symbol": "EBTC",
      "name": "Enterprise Bancorp Inc"
    },
    {
      "symbol": "EC",
      "name": "Ecopetrol SA"
    },
    {
      "symbol": "ECAT",
      "name": "BlackRock ESG Capital Allocation Term Trust"
    },
    {
      "symbol": "ECBK",
      "name": "ECB Bancorp Inc"
    },
    {
      "symbol": "ECC",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECC-P-D",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECCC",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECCV",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECCW",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECCX",
      "name": "Eagle Point Credit Company Inc"
    },
    {
      "symbol": "ECDA",
      "name": "ECD Automotive Design Inc"
    },
    {
      "symbol": "ECDAW",
      "name": "ECD Automotive Design Inc - Warrants (18/11/2027)"
    },
    {
      "symbol": "ECF",
      "name": "Ellsworth Growth and Income Fund Ltd"
    },
    {
      "symbol": "ECF-P-A",
      "name": "Ellsworth Growth and Income Fund Ltd"
    },
    {
      "symbol": "ECH",
      "name": "ISHARES MSCI CHILE ETF "
    },
    {
      "symbol": "ECL",
      "name": "Ecolab Inc"
    },
    {
      "symbol": "ECLN",
      "name": "FIRST TRUST EIP CARBON IMPACT ETF "
    },
    {
      "symbol": "ECML",
      "name": "Euclidean Fundamental Value ETF"
    },
    {
      "symbol": "ECNS",
      "name": "ISHARES MSCI CHINA SMALL-CAP ETF "
    },
    {
      "symbol": "ECO",
      "name": "ECHO BAY MINES LTD"
    },
    {
      "symbol": "ECON",
      "name": "Columbia Emerging Markets Consumer ETF"
    },
    {
      "symbol": "ECOR",
      "name": "ElectroCore Inc"
    },
    {
      "symbol": "ECOW",
      "name": "Pacer Emerging Markets Cash Cows 100 ETF"
    },
    {
      "symbol": "ECPG",
      "name": "Encore Capital Group Inc"
    },
    {
      "symbol": "ECVT",
      "name": "Ecovyst Inc"
    },
    {
      "symbol": "ECX",
      "name": "ECARX Holdings Inc - Class A"
    },
    {
      "symbol": "ECXWW",
      "name": "ECARX Holdings Inc - Warrants (20/12/2027)"
    },
    {
      "symbol": "ED",
      "name": "Consolidated Edison Inc"
    },
    {
      "symbol": "EDAP",
      "name": "EDAP TMS S.A."
    },
    {
      "symbol": "EDBL",
      "name": "Edible Garden AG Inc"
    },
    {
      "symbol": "EDBLW",
      "name": "Edible Garden AG Inc - Warrants(18/04/2027)"
    },
    {
      "symbol": "EDC",
      "name": "Direxion Daily Emerging Markets Bull 3X Shares"
    },
    {
      "symbol": "EDD",
      "name": "Morgan Stanley Emerging Markets Domestic Debt Fund Inc"
    },
    {
      "symbol": "EDEN",
      "name": "ISHARES MSCI DENMARK ETF "
    },
    {
      "symbol": "EDF",
      "name": "Virtus Stone Harbor Emerging Markets Income Fund"
    },
    {
      "symbol": "EDI",
      "name": "Virtus Stone Harbor Emerging Markets Total Income Fund"
    },
    {
      "symbol": "EDIT",
      "name": "Editas Medicine Inc"
    },
    {
      "symbol": "EDIV",
      "name": "SPDR(R) S&P(R) EMERGING MARKETS DIVIDEND ETF "
    },
    {
      "symbol": "EDN",
      "name": "Empresa Distribuidora y Comercial Norte S.A."
    },
    {
      "symbol": "EDOC",
      "name": "GLOBAL X TELEMEDICINE & DIGITAL HEALTH ETF "
    },
    {
      "symbol": "EDOG",
      "name": "ALPS EMERGING SECTOR DIVIDEND DOGS ETF "
    },
    {
      "symbol": "EDOW",
      "name": "FIRST TRUST DOW 30 EQUAL WEIGHT ETF "
    },
    {
      "symbol": "EDR",
      "name": "Endeavor Group Holdings Inc - Class A"
    },
    {
      "symbol": "EDRY",
      "name": "EuroDry Ltd"
    },
    {
      "symbol": "EDSA",
      "name": "Edesa Biotech Inc"
    },
    {
      "symbol": "EDTK",
      "name": "Skillful Craftsman Education Technology Ltd"
    },
    {
      "symbol": "EDU",
      "name": "New Oriental Education & Technology Group Inc"
    },
    {
      "symbol": "EDUC",
      "name": "Educational Development Corp"
    },
    {
      "symbol": "EDUT",
      "name": "Global X Education ETF"
    },
    {
      "symbol": "EDV",
      "name": "VANGUARD EXTENDED DURATION TREASURY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "EDZ",
      "name": "DIREXION DAILY MSCI EMERGING MARKETS BEAR 3X SHARES "
    },
    {
      "symbol": "EE",
      "name": "Excelerate Energy Inc - Class A"
    },
    {
      "symbol": "EEA",
      "name": "European Equity Fund Inc"
    },
    {
      "symbol": "EEFT",
      "name": "Euronet Worldwide Inc"
    },
    {
      "symbol": "EEIQ",
      "name": "EpicQuest Education Group International Ltd"
    },
    {
      "symbol": "EELV",
      "name": "INVESCO S&P EMERGING MARKETS LOW VOLATILITY ETF "
    },
    {
      "symbol": "EEM",
      "name": "ISHARES MSCI EMERGING MARKETS ETF "
    },
    {
      "symbol": "EEMA",
      "name": "ISHARES MSCI EMERGING MARKETS ASIA ETF "
    },
    {
      "symbol": "EEMD",
      "name": "AAM S&P EMERGING MARKETS HIGH DIVIDEND VALUE ETF "
    },
    {
      "symbol": "EEMO",
      "name": "INVESCO S&P EMERGING MARKETS MOMENTUM ETF "
    },
    {
      "symbol": "EEMS",
      "name": "ISHARES MSCI EMERGING MARKETS SMALL-CAP ETF "
    },
    {
      "symbol": "EEMV",
      "name": "ISHARES MSCI EMERGING MARKETS MIN VOL FACTOR ETF "
    },
    {
      "symbol": "EEMX",
      "name": "SPDR MSCI EMERGING MARKETS FOSSIL FUEL RESERVES FREE ETF "
    },
    {
      "symbol": "EES",
      "name": "WisdomTree U.S. SmallCap Fund"
    },
    {
      "symbol": "EET",
      "name": "PROSHARES ULTRA MSCI EMERGING MARKETS "
    },
    {
      "symbol": "EETH",
      "name": "ProShares Ether Strategy ETF"
    },
    {
      "symbol": "EEV",
      "name": "ProShares UltraShort MSCI Emerging Markets -2x Shares"
    },
    {
      "symbol": "EEX",
      "name": "Emerald Holding Inc"
    },
    {
      "symbol": "EFA",
      "name": "ISHARES MSCI EAFE ETF "
    },
    {
      "symbol": "EFAD",
      "name": "ProShares MSCI EAFE Dividend Growers ETF"
    },
    {
      "symbol": "EFAS",
      "name": "GLOBAL X MSCI SUPERDIVIDEND EAFE ETF "
    },
    {
      "symbol": "EFAV",
      "name": "ISHARES MSCI EAFE MIN VOL FACTOR ETF "
    },
    {
      "symbol": "EFAX",
      "name": "SPDR MSCI EAFE FOSSIL FUEL RESERVES FREE ETF "
    },
    {
      "symbol": "EFC",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFC-P-A",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFC-P-B",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFC-P-C",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFC-P-D",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFC-P-E",
      "name": "Ellington Financial Inc"
    },
    {
      "symbol": "EFG",
      "name": "ISHARES MSCI EAFE GROWTH ETF "
    },
    {
      "symbol": "EFIV",
      "name": "SPDR S&P 500 ESG ETF"
    },
    {
      "symbol": "EFIX",
      "name": "FIRST TRUST TCW EMERGING MARKETS DEBT ETF "
    },
    {
      "symbol": "EFNL",
      "name": "ISHARES MSCI FINLAND ETF "
    },
    {
      "symbol": "EFO",
      "name": "PROSHARES ULTRA MSCI EAFE "
    },
    {
      "symbol": "EFOI",
      "name": "Energy Focus Inc"
    },
    {
      "symbol": "EFR",
      "name": "Eaton Vance Senior Floating-Rate Trust"
    },
    {
      "symbol": "EFRA",
      "name": "ISHARES ENVIRONMENTAL INFRASTRUCTURE AND INDUSTRIALS ETF "
    },
    {
      "symbol": "EFSC",
      "name": "Enterprise Financial Services Corp"
    },
    {
      "symbol": "EFSCP",
      "name": "Enterprise Financial Services Corp"
    },
    {
      "symbol": "EFSH",
      "name": "1847 Holdings LLC"
    },
    {
      "symbol": "EFT",
      "name": "Eaton Vance Floating-Rate Income Trust"
    },
    {
      "symbol": "EFTR",
      "name": "eFFECTOR Therapeutics Inc"
    },
    {
      "symbol": "EFTRW",
      "name": "eFFECTOR Therapeutics Inc - Warrants (26/08/2026)"
    },
    {
      "symbol": "EFU",
      "name": "ProShares UltraShort MSCI EAFE -2x Shares"
    },
    {
      "symbol": "EFUT",
      "name": "VANECK ETHEREUM STRATEGY ETF "
    },
    {
      "symbol": "EFV",
      "name": "ISHARES MSCI EAFE VALUE ETF "
    },
    {
      "symbol": "EFX",
      "name": "Equifax Inc"
    },
    {
      "symbol": "EFXT",
      "name": "Enerflex Ltd"
    },
    {
      "symbol": "EFZ",
      "name": "ProShares Short MSCI EAFE -1X Shares"
    },
    {
      "symbol": "EG",
      "name": "Everest Group Ltd"
    },
    {
      "symbol": "EGAN",
      "name": "eGain Corp"
    },
    {
      "symbol": "EGBN",
      "name": "Eagle Bancorp Inc (MD)"
    },
    {
      "symbol": "EGF",
      "name": "BlackRock Enhanced Government Fund Inc"
    },
    {
      "symbol": "EGHT",
      "name": "8X8 Inc"
    },
    {
      "symbol": "EGIO",
      "name": "Edgio Inc"
    },
    {
      "symbol": "EGIS",
      "name": "2ndVote Society Defended ETF"
    },
    {
      "symbol": "EGLX",
      "name": "Enthusiast Gaming Holdings Inc"
    },
    {
      "symbol": "EGO",
      "name": "Eldorado Gold Corp"
    },
    {
      "symbol": "EGOX",
      "name": "Next.e.GO N.V."
    },
    {
      "symbol": "EGP",
      "name": "Eastgroup Properties Inc"
    },
    {
      "symbol": "EGRX",
      "name": "Eagle Pharmaceuticals Inc"
    },
    {
      "symbol": "EGUS",
      "name": "ISHARES ESG AWARE MSCI USA GROWTH ETF "
    },
    {
      "symbol": "EGY",
      "name": "VAALCO Energy Inc"
    },
    {
      "symbol": "EH",
      "name": "EHang Holdings Ltd"
    },
    {
      "symbol": "EHAB",
      "name": "Enhabit Inc"
    },
    {
      "symbol": "EHC",
      "name": "Encompass Health Corp"
    },
    {
      "symbol": "EHI",
      "name": "Western Asset Global High Income Fund Inc"
    },
    {
      "symbol": "EHLS",
      "name": "Even Herd Long Short ETF"
    },
    {
      "symbol": "EHTH",
      "name": "eHealth Inc"
    },
    {
      "symbol": "EIC",
      "name": "Eagle Point Income Company Inc"
    },
    {
      "symbol": "EICA",
      "name": "Eagle Point Income Company Inc"
    },
    {
      "symbol": "EICB",
      "name": "Eagle Point Income Company Inc"
    },
    {
      "symbol": "EIDO",
      "name": "ISHARES MSCI INDONESIA ETF "
    },
    {
      "symbol": "EIG",
      "name": "Employers Holdings Inc"
    },
    {
      "symbol": "EIGRQ",
      "name": "Eiger BioPharmaceuticals Inc"
    },
    {
      "symbol": "EIM",
      "name": "Eaton Vance Municipal Bond Fund"
    },
    {
      "symbol": "EINC",
      "name": "VANECK ENERGY INCOME ETF "
    },
    {
      "symbol": "EIPX",
      "name": "FT ENERGY INCOME PARTNERS STRATEGY ETF "
    },
    {
      "symbol": "EIRL",
      "name": "ISHARES MSCI IRELAND ETF "
    },
    {
      "symbol": "EIS",
      "name": "ISHARES MSCI ISRAEL ETF "
    },
    {
      "symbol": "EIX",
      "name": "Edison International"
    },
    {
      "symbol": "EJAN",
      "name": "Innovator Emerging Markets Power Buffer ETF January"
    },
    {
      "symbol": "EJH",
      "name": "E-Home Household Service Holdings Ltd"
    },
    {
      "symbol": "EJUL",
      "name": "Innovator Emerging Markets Power Buffer ETF July"
    },
    {
      "symbol": "EKG",
      "name": "FIRST TRUST NASDAQ LUX DIGITAL HEALTH SOLUTIONS ETF "
    },
    {
      "symbol": "EKSO",
      "name": "Ekso Bionics Holdings Inc"
    },
    {
      "symbol": "EL",
      "name": "Estee Lauder Cos. Inc - Class A"
    },
    {
      "symbol": "ELA",
      "name": "Envela Corp"
    },
    {
      "symbol": "ELAB",
      "name": "Elevai Labs Inc"
    },
    {
      "symbol": "ELAN",
      "name": "Elanco Animal Health Inc"
    },
    {
      "symbol": "ELBM",
      "name": "Electra Battery Materials Corp"
    },
    {
      "symbol": "ELC",
      "name": "Entergy Louisiana LLC"
    },
    {
      "symbol": "ELD",
      "name": "WisdomTree Emerging Market Local Debt Fund"
    },
    {
      "symbol": "ELDN",
      "name": "Eledon Pharmaceuticals Inc"
    },
    {
      "symbol": "ELEV",
      "name": "Elevation Oncology Inc"
    },
    {
      "symbol": "ELF",
      "name": "e.l.f. Beauty Inc"
    },
    {
      "symbol": "ELLO",
      "name": "Ellomay Capital Ltd"
    },
    {
      "symbol": "ELMD",
      "name": "Electromed Inc"
    },
    {
      "symbol": "ELME",
      "name": "Elme Communities"
    },
    {
      "symbol": "ELP",
      "name": "Cia Paranaense De Energia Copel"
    },
    {
      "symbol": "ELPC",
      "name": "Cia Paranaense De Energia Copel ADR (Representing )"
    },
    {
      "symbol": "ELQD",
      "name": "iShares ESG Advanced Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "ELS",
      "name": "Equity Lifestyle Properties Inc"
    },
    {
      "symbol": "ELSE",
      "name": "Electro-Sensors Inc"
    },
    {
      "symbol": "ELTK",
      "name": "Eltek Ltd"
    },
    {
      "symbol": "ELTX",
      "name": "Elicio Therapeutics Inc"
    },
    {
      "symbol": "ELUT",
      "name": "Elutia Inc Cl A Com"
    },
    {
      "symbol": "ELV",
      "name": "Elevance Health Inc"
    },
    {
      "symbol": "ELVA",
      "name": "Electrovaya Inc"
    },
    {
      "symbol": "ELVN",
      "name": "Enliven Therapeutics Inc"
    },
    {
      "symbol": "ELWS",
      "name": "Earlyworks Co Ltd"
    },
    {
      "symbol": "ELYM",
      "name": "Eliem Therapeutics Inc"
    },
    {
      "symbol": "EM",
      "name": "Smart Share Global Ltd"
    },
    {
      "symbol": "EMB",
      "name": "iShares J.P. Morgan USD Emerging Markets Bond ETF"
    },
    {
      "symbol": "EMBC",
      "name": "Embecta Corp"
    },
    {
      "symbol": "EMBD",
      "name": "GLOBAL X EMERGING MARKETS BOND ETF "
    },
    {
      "symbol": "EMBK",
      "name": "Embark Technology Inc - Class A"
    },
    {
      "symbol": "EMBKW",
      "name": "Embark Technology Inc Warrant"
    },
    {
      "symbol": "EMC",
      "name": "GLOBAL X EMERGING MARKETS GREAT CONSUMER ETF "
    },
    {
      "symbol": "EMCA",
      "name": "Emerge EMPWR Sustainable Dividend Equity ETF"
    },
    {
      "symbol": "EMCB",
      "name": "WISDOMTREE EMERGING MARKETS CORPORATE BOND FUND "
    },
    {
      "symbol": "EMCC",
      "name": "GLOBAL X MSCI EMERGING MARKETS COVERED CALL ETF "
    },
    {
      "symbol": "EMCG",
      "name": "Embrace Change Acquisition Corp"
    },
    {
      "symbol": "EMCGR",
      "name": "Embrace Change Acquisition Corp"
    },
    {
      "symbol": "EMCGU",
      "name": "Embrace Change Acquisition Corp - Unit (1 Ordinary share 1 Wrt & 1 Rts)"
    },
    {
      "symbol": "EMCGW",
      "name": "Embrace Change Acquisition Corp - Warrants (17/03/2027)"
    },
    {
      "symbol": "EMCH",
      "name": "Emerge EMPWR Sustainable Emerging Markets Equity ETF"
    },
    {
      "symbol": "EMCR",
      "name": "XTRACKERS EMERGING MARKETS CARBON REDUCTION AND CLIMATE IMPROVERS ETF "
    },
    {
      "symbol": "EMD",
      "name": "Western Asset Emerging Markets Debt Fund Inc"
    },
    {
      "symbol": "EMDM",
      "name": "FIRST TRUST BLOOMBERG EMERGING MARKET DEMOCRACIES ETF "
    },
    {
      "symbol": "EMDV",
      "name": "PROSHARES MSCI EMERGING MARKETS DIVIDEND GROWERS ETF "
    },
    {
      "symbol": "EME",
      "name": "Emcor Group Inc"
    },
    {
      "symbol": "EMF",
      "name": "Templeton Emerging Markets Fund"
    },
    {
      "symbol": "EMFM",
      "name": "GLOBAL X MSCI NEXT EMERGING & FRONTIER ETF "
    },
    {
      "symbol": "EMFQ",
      "name": "AMPLIFY EMERGING MARKETS FINTECH ETF "
    },
    {
      "symbol": "EMGC",
      "name": "Emerge EMPWR Sustainable Select Growth Equity ETF"
    },
    {
      "symbol": "EMGF",
      "name": "ISHARES EMERGING MARKETS EQUITY FACTOR ETF "
    },
    {
      "symbol": "EMHC",
      "name": "SPDR BLOOMBERG EMERGING MARKETS USD BOND ETF "
    },
    {
      "symbol": "EMHY",
      "name": "ISHARES J.P. MORGAN EM HIGH YIELD BOND ETF "
    },
    {
      "symbol": "EMIF",
      "name": "iShares Emerging Markets Infrastructure ETF"
    },
    {
      "symbol": "EMKR",
      "name": "Emcore Corp"
    },
    {
      "symbol": "EML",
      "name": "Eastern Company"
    },
    {
      "symbol": "EMLC",
      "name": "VanEck J.P. Morgan EM Local Currency Bond ETF"
    },
    {
      "symbol": "EMLD",
      "name": "FTAC Emerald Acquisition Corp - Class A"
    },
    {
      "symbol": "EMLDU",
      "name": "FTAC Emerald Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "EMLDW",
      "name": "FTAC Emerald Acquisition Corp - Warrants (19/10/2028)"
    },
    {
      "symbol": "EMLP",
      "name": "FIRST TRUST NORTH AMERICAN ENERGY INFRASTRUCTURE FUND "
    },
    {
      "symbol": "EMM",
      "name": "GLOBAL X EMERGING MARKETS EX-CHINA ETF "
    },
    {
      "symbol": "EMMF",
      "name": "WisdomTree Emerging Markets Multifactor ETF"
    },
    {
      "symbol": "EMN",
      "name": "Eastman Chemical Company"
    },
    {
      "symbol": "EMNT",
      "name": "PIMCO ENHANCED SHORT MATURITY ACTIVE ESG EXCHANGE-TRADED FUND "
    },
    {
      "symbol": "EMO",
      "name": "ClearBridge Energy Midstream Opportunity Fund Inc"
    },
    {
      "symbol": "EMP",
      "name": "Entergy Utility Enterprises Inc"
    },
    {
      "symbol": "EMPW",
      "name": "Emerge EMPWR Unified Sustainable Equity ETF"
    },
    {
      "symbol": "EMQQ",
      "name": "EMQQ THE EMERGING MARKETS INTERNET & ECOMMERCE ETF "
    },
    {
      "symbol": "EMR",
      "name": "Emerson Electric Company"
    },
    {
      "symbol": "EMSF",
      "name": "MATTHEWS EMERGING MARKETS SUSTAINABLE FUTURE ACTIVE ETF "
    },
    {
      "symbol": "EMSG",
      "name": "XTRACKERS MSCI EMERGING MARKETS ESG LEADERS EQUITY ETF "
    },
    {
      "symbol": "EMTL",
      "name": "SPDR DOUBLELINE EMERGING MARKETS FIXED INCOME ETF "
    },
    {
      "symbol": "EMTY",
      "name": "ProShares Decline of the Retail Store ETF -1x Shares"
    },
    {
      "symbol": "EMX",
      "name": "EMX Royalty Corp"
    },
    {
      "symbol": "EMXC",
      "name": "ISHARES MSCI EMERGING MARKETS EX CHINA ETF "
    },
    {
      "symbol": "EMXF",
      "name": "ISHARES ESG ADVANCED MSCI EM ETF "
    },
    {
      "symbol": "EMZA",
      "name": "Emerge EMPWR Sustainable Global Core Equity ETF"
    },
    {
      "symbol": "ENB",
      "name": "Enbridge Inc"
    },
    {
      "symbol": "ENCP",
      "name": "Energem Corp - Class A"
    },
    {
      "symbol": "ENCPW",
      "name": "Energem Corp - Warrants (15/11/2026)"
    },
    {
      "symbol": "ENFN",
      "name": "Enfusion Inc - Class A"
    },
    {
      "symbol": "ENFR",
      "name": "ALERIAN ENERGY INFRASTRUCTURE ETF "
    },
    {
      "symbol": "ENG",
      "name": "Englobal Corporation"
    },
    {
      "symbol": "ENGN",
      "name": "enGene Holdings Inc"
    },
    {
      "symbol": "ENGNW",
      "name": "enGene Holdings Inc - Warrants (31/10/2028)"
    },
    {
      "symbol": "ENIC",
      "name": "Enel Chile S.A."
    },
    {
      "symbol": "ENJ",
      "name": "Entergy New Orleans Inc"
    },
    {
      "symbol": "ENLC",
      "name": "Enlink Midstream LLC"
    },
    {
      "symbol": "ENLT",
      "name": "Enlight Renewable Energy Ltd"
    },
    {
      "symbol": "ENLV",
      "name": "Enlivex Therapeutics Ltd"
    },
    {
      "symbol": "ENO",
      "name": "Entergy New Orleans Inc"
    },
    {
      "symbol": "ENOR",
      "name": "ISHARES MSCI NORWAY ETF "
    },
    {
      "symbol": "ENOV",
      "name": "Enovis Corp"
    },
    {
      "symbol": "ENPH",
      "name": "Enphase Energy Inc"
    },
    {
      "symbol": "ENR",
      "name": "Energizer Holdings Inc"
    },
    {
      "symbol": "ENS",
      "name": "Enersys"
    },
    {
      "symbol": "ENSC",
      "name": "Ensysce Biosciences Inc"
    },
    {
      "symbol": "ENSG",
      "name": "Ensign Group Inc"
    },
    {
      "symbol": "ENSV",
      "name": "Enservco Corp"
    },
    {
      "symbol": "ENTA",
      "name": "Enanta Pharmaceuticals Inc"
    },
    {
      "symbol": "ENTG",
      "name": "Entegris Inc"
    },
    {
      "symbol": "ENTR",
      "name": "ERShares Entrepreneurs ETF"
    },
    {
      "symbol": "ENTX",
      "name": "Entera Bio Ltd"
    },
    {
      "symbol": "ENTXW",
      "name": "Entera Bio Ltd - Warrants (02/07/2023)"
    },
    {
      "symbol": "ENV",
      "name": "Envestnet Inc"
    },
    {
      "symbol": "ENVA",
      "name": "Enova International Inc"
    },
    {
      "symbol": "ENVB",
      "name": "Enveric Biosciences Inc"
    },
    {
      "symbol": "ENVX",
      "name": "Enovix Corporation"
    },
    {
      "symbol": "ENX",
      "name": "Eaton Vance New York Municipal Bond Fund"
    },
    {
      "symbol": "ENZ",
      "name": "Enzo Biochem Inc"
    },
    {
      "symbol": "ENZL",
      "name": "ISHARES MSCI NEW ZEALAND ETF "
    },
    {
      "symbol": "EOCT",
      "name": "Innovator Emerging Markets Power Buffer ETF - October"
    },
    {
      "symbol": "EOCW",
      "name": "Elliott Opportunity II Corp - Class A"
    },
    {
      "symbol": "EOD",
      "name": "Allspring Global Dividend Opportunity Fund"
    },
    {
      "symbol": "EOG",
      "name": "EOG Resources Inc"
    },
    {
      "symbol": "EOI",
      "name": "Eaton Vance Enhanced Equity Income Fund"
    },
    {
      "symbol": "EOLS",
      "name": "Evolus Inc"
    },
    {
      "symbol": "EOS",
      "name": "Eaton Vance Enhanced Equity Income Fund II"
    },
    {
      "symbol": "EOSE",
      "name": "Eos Energy Enterprises Inc - Class A"
    },
    {
      "symbol": "EOSEW",
      "name": "Eos Energy Enterprises Inc - Warrants (06/05/2026)"
    },
    {
      "symbol": "EOT",
      "name": "Eaton Vance National Municipal Opportunities Trust"
    },
    {
      "symbol": "EP",
      "name": "Empire Petroleum Corporation"
    },
    {
      "symbol": "EP-P-C",
      "name": "El Paso Corporation Preferred Stock"
    },
    {
      "symbol": "EPAC",
      "name": "Enerpac Tool Group Corp - Class A"
    },
    {
      "symbol": "EPAM",
      "name": "EPAM Systems Inc"
    },
    {
      "symbol": "EPC",
      "name": "Edgewell Personal Care Company"
    },
    {
      "symbol": "EPD",
      "name": "Enterprise Products Partners L P"
    },
    {
      "symbol": "EPHE",
      "name": "ISHARES MSCI PHILIPPINES ETF "
    },
    {
      "symbol": "EPI",
      "name": "WisdomTree India Earnings Fund"
    },
    {
      "symbol": "EPIX",
      "name": "Essa Pharma Inc"
    },
    {
      "symbol": "EPM",
      "name": "Evolution Petroleum Corporation"
    },
    {
      "symbol": "EPOL",
      "name": "ISHARES MSCI POLAND ETF "
    },
    {
      "symbol": "EPOW",
      "name": "Sunrise New Energy Co. Ltd"
    },
    {
      "symbol": "EPP",
      "name": "ISHARES MSCI PACIFIC EX JAPAN ETF "
    },
    {
      "symbol": "EPR",
      "name": "EPR Properties"
    },
    {
      "symbol": "EPR-P-C",
      "name": "EPR Properties"
    },
    {
      "symbol": "EPR-P-E",
      "name": "EPR Properties"
    },
    {
      "symbol": "EPR-P-G",
      "name": "EPR Properties"
    },
    {
      "symbol": "EPRF",
      "name": "Innovator S&P Investment Grade Preferred ETF"
    },
    {
      "symbol": "EPRT",
      "name": "Essential Properties Realty Trust Inc"
    },
    {
      "symbol": "EPS",
      "name": "WisdomTree U.S. LargeCap Fund"
    },
    {
      "symbol": "EPSN",
      "name": "Epsilon Energy Ltd"
    },
    {
      "symbol": "EPU",
      "name": "ISHARES MSCI PERU AND GLOBAL EXPOSURE ETF "
    },
    {
      "symbol": "EPV",
      "name": "ProShares UltraShort FTSE Europe -2X Shares"
    },
    {
      "symbol": "EQ",
      "name": "Equillium Inc"
    },
    {
      "symbol": "EQAL",
      "name": "INVESCO RUSSELL 1000 EQUAL WEIGHT ETF "
    },
    {
      "symbol": "EQBK",
      "name": "Equity Bancshares Inc - Class A"
    },
    {
      "symbol": "EQC",
      "name": "Equity Commonwealth"
    },
    {
      "symbol": "EQC-P-D",
      "name": "Equity Commonwealth"
    },
    {
      "symbol": "EQH",
      "name": "Equitable Holdings Inc"
    },
    {
      "symbol": "EQH-P-A",
      "name": "Equitable Holdings Inc"
    },
    {
      "symbol": "EQH-P-C",
      "name": "Equitable Holdings Inc"
    },
    {
      "symbol": "EQIX",
      "name": "Equinix Inc"
    },
    {
      "symbol": "EQL",
      "name": "ALPS EQUAL SECTOR WEIGHT ETF "
    },
    {
      "symbol": "EQLS",
      "name": "Simplify Market Neutral Equity Long/Short ETF"
    },
    {
      "symbol": "EQNR",
      "name": "Equinor ASA"
    },
    {
      "symbol": "EQR",
      "name": "Equity Residential Properties Trust"
    },
    {
      "symbol": "EQRR",
      "name": "ProShares Equities for Rising Rates ETF"
    },
    {
      "symbol": "EQS",
      "name": "Equus Total Return Inc"
    },
    {
      "symbol": "EQT",
      "name": "EQT Corp"
    },
    {
      "symbol": "EQTY",
      "name": "KOVITZ CORE EQUITY ETF "
    },
    {
      "symbol": "EQUL",
      "name": "IQ Engender Equality ETF"
    },
    {
      "symbol": "EQWL",
      "name": "Invesco Russell Top 200 Equal Weight ETF"
    },
    {
      "symbol": "EQX",
      "name": "Equinox Gold Corp"
    },
    {
      "symbol": "ERAS",
      "name": "Erasca Inc"
    },
    {
      "symbol": "ERC",
      "name": "Allspring Multi-Sector Income Fund"
    },
    {
      "symbol": "ERET",
      "name": "ISHARES ENVIRONMENTALLY AWARE REAL ESTATE ETF "
    },
    {
      "symbol": "ERF",
      "name": "Enerplus Corporation"
    },
    {
      "symbol": "ERH",
      "name": "Allspring Utilities and High Income Fund"
    },
    {
      "symbol": "ERIC",
      "name": "Telefonaktiebolaget L M Ericsson"
    },
    {
      "symbol": "ERIE",
      "name": "Erie Indemnity Co. - Class A"
    },
    {
      "symbol": "ERII",
      "name": "Energy Recovery Inc"
    },
    {
      "symbol": "ERJ",
      "name": "Embraer S.A."
    },
    {
      "symbol": "ERNA",
      "name": "Eterna Therapeutics Inc"
    },
    {
      "symbol": "ERO",
      "name": "Ero Copper Corp"
    },
    {
      "symbol": "ERTH",
      "name": "Invesco MSCI Sustainable Future ETF"
    },
    {
      "symbol": "ERX",
      "name": "DIREXION DAILY ENERGY BULL 2X SHARES "
    },
    {
      "symbol": "ERY",
      "name": "DIREXION DAILY ENERGY BEAR 2X SHARES "
    },
    {
      "symbol": "ES",
      "name": "Eversource Energy"
    },
    {
      "symbol": "ESAB",
      "name": "ESAB Corp"
    },
    {
      "symbol": "ESBA",
      "name": "Empire State Realty OP LP"
    },
    {
      "symbol": "ESCA",
      "name": "Escalade Inc"
    },
    {
      "symbol": "ESE",
      "name": "Esco Technologies Inc"
    },
    {
      "symbol": "ESEA",
      "name": "Euroseas Ltd"
    },
    {
      "symbol": "ESG",
      "name": "FLEXSHARES STOXX US ESG SELECT INDEX FUND "
    },
    {
      "symbol": "ESGA",
      "name": "AMERICAN CENTURY SUSTAINABLE EQUITY ETF "
    },
    {
      "symbol": "ESGB",
      "name": "IQ MacKay ESG Core Plus Bond ETF"
    },
    {
      "symbol": "ESGD",
      "name": "ISHARES ESG AWARE MSCI EAFE ETF "
    },
    {
      "symbol": "ESGE",
      "name": "ISHARES ESG AWARE MSCI EM ETF "
    },
    {
      "symbol": "ESGG",
      "name": "FLEXSHARES STOXX GLOBAL ESG SELECT INDEX FUND "
    },
    {
      "symbol": "ESGL",
      "name": "ESGL Holdings Ltd"
    },
    {
      "symbol": "ESGLW",
      "name": "ESGL Holdings Ltd - Warrants (02/08/2028)"
    },
    {
      "symbol": "ESGN",
      "name": "COLUMBIA INTERNATIONAL ESG EQUITY INCOME ETF "
    },
    {
      "symbol": "ESGR",
      "name": "Enstar Group Ltd"
    },
    {
      "symbol": "ESGRO",
      "name": "Enstar Group Ltd Depositary Shs Each Repstg 11000 Int Sh Perpetual Non Cumulative Pref Sh"
    },
    {
      "symbol": "ESGRP",
      "name": "Enstar Group Ltd"
    },
    {
      "symbol": "ESGS",
      "name": "COLUMBIA U.S. ESG EQUITY INCOME ETF "
    },
    {
      "symbol": "ESGU",
      "name": "ISHARES ESG AWARE MSCI USA ETF "
    },
    {
      "symbol": "ESGV",
      "name": "VANGUARD ESG U.S. STOCK ETF ETF SHARES"
    },
    {
      "symbol": "ESGY",
      "name": "AMERICAN CENTURY SUSTAINABLE GROWTH ETF "
    },
    {
      "symbol": "ESHA",
      "name": "ESH Acquisition Corp - Class A"
    },
    {
      "symbol": "ESHAR",
      "name": "ESH Acquisition Corp"
    },
    {
      "symbol": "ESI",
      "name": "Element Solutions Inc"
    },
    {
      "symbol": "ESIX",
      "name": "SPDR S&P SMALLCAP 600 ESG ETF "
    },
    {
      "symbol": "ESLA",
      "name": "Estrella Immunopharma Inc"
    },
    {
      "symbol": "ESLAW",
      "name": "Estrella Immunopharma Inc - Warrants (29/09/2028)"
    },
    {
      "symbol": "ESLT",
      "name": "Elbit Systems Ltd"
    },
    {
      "symbol": "ESML",
      "name": "ISHARES ESG AWARE MSCI USA SMALL-CAP ETF "
    },
    {
      "symbol": "ESMV",
      "name": "ISHARES ESG MSCI USA MIN VOL FACTOR ETF "
    },
    {
      "symbol": "ESNT",
      "name": "Essent Group Ltd"
    },
    {
      "symbol": "ESOA",
      "name": "Energy Services of America Corp"
    },
    {
      "symbol": "ESP",
      "name": "Espey Manufacturing & Electronics Corp"
    },
    {
      "symbol": "ESPO",
      "name": "VANECK VIDEO GAMING AND ESPORTS ETF "
    },
    {
      "symbol": "ESPR",
      "name": "Esperion Therapeutics Inc"
    },
    {
      "symbol": "ESQ",
      "name": "Esquire Financial Holdings Inc"
    },
    {
      "symbol": "ESRT",
      "name": "Empire State Realty Trust Inc - Class A"
    },
    {
      "symbol": "ESS",
      "name": "Essex Property Trust Inc"
    },
    {
      "symbol": "ESSA",
      "name": "ESSA Bancorp Inc"
    },
    {
      "symbol": "ESTA",
      "name": "Establishment Labs Holdings Inc"
    },
    {
      "symbol": "ESTC",
      "name": "Elastic N.V"
    },
    {
      "symbol": "ET",
      "name": "Energy Transfer LP"
    },
    {
      "symbol": "ET-P-E",
      "name": "Energy Transfer LP"
    },
    {
      "symbol": "ET-P-I",
      "name": "Energy Transfer LP"
    },
    {
      "symbol": "ETAO",
      "name": "Etao International Co Ltd"
    },
    {
      "symbol": "ETB",
      "name": "Eaton Vance Tax-Managed Buy-Write Income Fund"
    },
    {
      "symbol": "ETD",
      "name": "Ethan Allen Interiors Inc"
    },
    {
      "symbol": "ETEC",
      "name": "ISHARES BREAKTHROUGH ENVIRONMENTAL SOLUTIONS ETF "
    },
    {
      "symbol": "ETG",
      "name": "Eaton Vance Tax-Advantaged Global Dividend Income Fund"
    },
    {
      "symbol": "ETHO",
      "name": "Amplify Etho Climate Leadership U.S. ETF"
    },
    {
      "symbol": "ETI-P",
      "name": "Entergy Texas Inc"
    },
    {
      "symbol": "ETJ",
      "name": "Eaton Vance Risk-Managed Diversified Equity Income Fund"
    },
    {
      "symbol": "ETN",
      "name": "Eaton Corporation plc"
    },
    {
      "symbol": "ETNB",
      "name": "89bio Inc"
    },
    {
      "symbol": "ETO",
      "name": "Eaton Vance Tax-Advantaged Global Dividend Opportunities Fund"
    },
    {
      "symbol": "ETON",
      "name": "Eton Pharmaceuticals Inc"
    },
    {
      "symbol": "ETR",
      "name": "Entergy Corp"
    },
    {
      "symbol": "ETRN",
      "name": "Equitrans Midstream Corporation"
    },
    {
      "symbol": "ETSY",
      "name": "Etsy Inc"
    },
    {
      "symbol": "ETV",
      "name": "Eaton Vance Tax-Managed Buy-Write Opportunities Fund"
    },
    {
      "symbol": "ETW",
      "name": "Eaton Vance Tax-Managed Global Buy-Write Opportunities Fund"
    },
    {
      "symbol": "ETWO",
      "name": "E2open Parent Holdings Inc - Class A"
    },
    {
      "symbol": "ETWO-WS",
      "name": "E2open Parent Holdings Inc - Warrants (04/02/2026)"
    },
    {
      "symbol": "ETX",
      "name": "Eaton Vance Municipal Income 2028 Term Trust"
    },
    {
      "symbol": "ETY",
      "name": "Eaton Vance Tax-Managed Diversified Equity Income Fund"
    },
    {
      "symbol": "EUDA",
      "name": "Euda Health Holdings Ltd"
    },
    {
      "symbol": "EUDAW",
      "name": "Euda Health Holdings Ltd - Warrants (17/11/2027)"
    },
    {
      "symbol": "EUDG",
      "name": "WisdomTree Europe Quality Dividend Growth Fund"
    },
    {
      "symbol": "EUDV",
      "name": "PROSHARES MSCI EUROPE DIVIDEND GROWERS "
    },
    {
      "symbol": "EUFN",
      "name": "ISHARES MSCI EUROPE FINANCIALS ETF "
    },
    {
      "symbol": "EUM",
      "name": "ProShares Short MSCI Emerging Markets -1x Shares"
    },
    {
      "symbol": "EUO",
      "name": "ProShares UltraShort Euro -2X Shares"
    },
    {
      "symbol": "EURL",
      "name": "DIREXION DAILY FTSE EUROPE BULL 3X SHARES "
    },
    {
      "symbol": "EURN",
      "name": "Euronav NV"
    },
    {
      "symbol": "EUSA",
      "name": "ISHARES MSCI USA EQUAL WEIGHTED ETF "
    },
    {
      "symbol": "EUSB",
      "name": "iShares ESG Advanced Total USD Bond Market ETF"
    },
    {
      "symbol": "EUSC",
      "name": "WisdomTree Europe Hedged SmallCap Equity Fund"
    },
    {
      "symbol": "EV",
      "name": "Mast Global Battery Recycling & Production ETF"
    },
    {
      "symbol": "EVA",
      "name": "Enviva Inc"
    },
    {
      "symbol": "EVAV",
      "name": "DIREXION DAILY ELECTRIC AND AUTONOMOUS VEHICLES BULL 2X SHARES "
    },
    {
      "symbol": "EVAX",
      "name": "Evaxion Biotech A/S"
    },
    {
      "symbol": "EVBG",
      "name": "Everbridge Inc"
    },
    {
      "symbol": "EVBN",
      "name": "Evans Bancorp Inc"
    },
    {
      "symbol": "EVC",
      "name": "Entravision Communications Corp - Class A"
    },
    {
      "symbol": "EVCM",
      "name": "EverCommerce Inc"
    },
    {
      "symbol": "EVE",
      "name": "EVe Mobility Acquisition Corp - Class A"
    },
    {
      "symbol": "EVE-U",
      "name": "EVe Mobility Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "EVE-WS",
      "name": "EVe Mobility Acquisition Corp - Warrants (31/12/2028)"
    },
    {
      "symbol": "EVER",
      "name": "EverQuote Inc - Class A"
    },
    {
      "symbol": "EVEX",
      "name": "Eve Holding Inc"
    },
    {
      "symbol": "EVEX-WS",
      "name": "Eve Holding Inc Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "EVF",
      "name": "Eaton Vance Senior Income Trust"
    },
    {
      "symbol": "EVG",
      "name": "Eaton Vance Short Duration Diversified Income Fund"
    },
    {
      "symbol": "EVGN",
      "name": "Evogene Ltd"
    },
    {
      "symbol": "EVGO",
      "name": "EVgo Inc - Class A"
    },
    {
      "symbol": "EVGOW",
      "name": "EVgo Inc - Warrants (28/06/2026)"
    },
    {
      "symbol": "EVGR",
      "name": "Evergreen Corp - Class A"
    },
    {
      "symbol": "EVGRU",
      "name": "Evergreen Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "EVGRW",
      "name": "Evergreen Corp - Warrants(08/02/2027)"
    },
    {
      "symbol": "EVH",
      "name": "Evolent Health Inc - Class A"
    },
    {
      "symbol": "EVHY",
      "name": "EATON VANCE HIGH YIELD ETF "
    },
    {
      "symbol": "EVI",
      "name": "EVI Industries Inc"
    },
    {
      "symbol": "EVIM",
      "name": "EATON VANCE INTERMEDIATE MUNICIPAL INCOME ETF "
    },
    {
      "symbol": "EVIX",
      "name": "VelocityShares 1x Long VSTOXX Futures ETN"
    },
    {
      "symbol": "EVLN",
      "name": "Eaton Vance Floating-Rate ETF"
    },
    {
      "symbol": "EVLV",
      "name": "Evolv Technologies Holdings Inc - Class A"
    },
    {
      "symbol": "EVLVW",
      "name": "Evolv Technologies Holdings Inc - Warrants (16/07/2026)"
    },
    {
      "symbol": "EVM",
      "name": "Eaton Vance California Municipal Bond Fund"
    },
    {
      "symbol": "EVMT",
      "name": "Invesco Electric Vehicle Metals Commodity Strategy No K-1 ETF"
    },
    {
      "symbol": "EVN",
      "name": "Eaton Vance Municipal Income Trust"
    },
    {
      "symbol": "EVNT",
      "name": "ALTSHARES EVENT-DRIVEN ETF "
    },
    {
      "symbol": "EVO",
      "name": "Evotec SE"
    },
    {
      "symbol": "EVOK",
      "name": "Evoke Pharma Inc"
    },
    {
      "symbol": "EVR",
      "name": "Evercore Inc - Class A"
    },
    {
      "symbol": "EVRG",
      "name": "Evergy Inc"
    },
    {
      "symbol": "EVRI",
      "name": "Everi Holdings Inc"
    },
    {
      "symbol": "EVSB",
      "name": "EATON VANCE ULTRA-SHORT INCOME ETF "
    },
    {
      "symbol": "EVSM",
      "name": "Eaton Vance Short Duration Municipal Income ETF"
    },
    {
      "symbol": "EVT",
      "name": "Eaton Vance Tax Advantaged Dividend Income Fund"
    },
    {
      "symbol": "EVTC",
      "name": "Evertec Inc"
    },
    {
      "symbol": "EVTL",
      "name": "Vertical Aerospace Ltd"
    },
    {
      "symbol": "EVTL-WS",
      "name": "Vertical Aerospace Ltd Warrants each whole warrant exercisable for one ordinary share at an exercise price of 11.50 per share"
    },
    {
      "symbol": "EVTR",
      "name": "Eaton Vance Total Return Bond ETF"
    },
    {
      "symbol": "EVTV",
      "name": "Envirotech Vehicles Inc"
    },
    {
      "symbol": "EVUS",
      "name": "ISHARES ESG AWARE MSCI USA VALUE ETF "
    },
    {
      "symbol": "EVV",
      "name": "Eaton Vance Ltd Duration Income Fund"
    },
    {
      "symbol": "EVX",
      "name": "VANECK ENVIRONMENTAL SERVICES ETF "
    },
    {
      "symbol": "EW",
      "name": "Edwards Lifesciences Corp"
    },
    {
      "symbol": "EWA",
      "name": "ISHARES MSCI AUSTRALIA ETF "
    },
    {
      "symbol": "EWBC",
      "name": "East West Bancorp Inc"
    },
    {
      "symbol": "EWC",
      "name": "iShares MSCI Canada ETF"
    },
    {
      "symbol": "EWCZ",
      "name": "European Wax Center Inc - Class A"
    },
    {
      "symbol": "EWD",
      "name": "ISHARES MSCI SWEDEN ETF "
    },
    {
      "symbol": "EWEB",
      "name": "Global X Emerging Markets Internet & E-commerce ETF"
    },
    {
      "symbol": "EWG",
      "name": "ISHARES MSCI GERMANY ETF "
    },
    {
      "symbol": "EWGS",
      "name": "iShares MSCI Germany Small-Cap ETF"
    },
    {
      "symbol": "EWH",
      "name": "ISHARES MSCI HONG KONG ETF "
    },
    {
      "symbol": "EWI",
      "name": "ISHARES MSCI ITALY ETF "
    },
    {
      "symbol": "EWJ",
      "name": "ISHARES MSCI JAPAN ETF "
    },
    {
      "symbol": "EWJV",
      "name": "ISHARES MSCI JAPAN VALUE ETF "
    },
    {
      "symbol": "EWK",
      "name": "ISHARES MSCI BELGIUM ETF "
    },
    {
      "symbol": "EWL",
      "name": "ISHARES MSCI SWITZERLAND ETF "
    },
    {
      "symbol": "EWM",
      "name": "ISHARES MSCI MALAYSIA ETF "
    },
    {
      "symbol": "EWN",
      "name": "ISHARES MSCI NETHERLANDS ETF "
    },
    {
      "symbol": "EWO",
      "name": "ISHARES MSCI AUSTRIA ETF "
    },
    {
      "symbol": "EWP",
      "name": "ISHARES MSCI SPAIN ETF "
    },
    {
      "symbol": "EWQ",
      "name": "ISHARES MSCI FRANCE ETF "
    },
    {
      "symbol": "EWS",
      "name": "ISHARES MSCI SINGAPORE ETF "
    },
    {
      "symbol": "EWT",
      "name": "ISHARES MSCI TAIWAN ETF "
    },
    {
      "symbol": "EWTX",
      "name": "Edgewise Therapeutics Inc"
    },
    {
      "symbol": "EWU",
      "name": "ISHARES MSCI UNITED KINGDOM ETF "
    },
    {
      "symbol": "EWUS",
      "name": "ISHARES MSCI UNITED KINGDOM SMALL-CAP ETF "
    },
    {
      "symbol": "EWV",
      "name": "ProShares UltraShort MSCI Japan -2x Shares"
    },
    {
      "symbol": "EWW",
      "name": "ISHARES MSCI MEXICO ETF "
    },
    {
      "symbol": "EWX",
      "name": "SPDR(R) S&P(R) EMERGING MARKETS SMALL CAP ETF "
    },
    {
      "symbol": "EWY",
      "name": "ISHARES MSCI SOUTH KOREA ETF "
    },
    {
      "symbol": "EWZ",
      "name": "ISHARES MSCI BRAZIL ETF "
    },
    {
      "symbol": "EWZS",
      "name": "ISHARES MSCI BRAZIL SMALL-CAP ETF "
    },
    {
      "symbol": "EXAI",
      "name": "Exscientia Plc"
    },
    {
      "symbol": "EXAS",
      "name": "Exact Sciences Corp"
    },
    {
      "symbol": "EXC",
      "name": "Exelon Corp"
    },
    {
      "symbol": "EXD",
      "name": "Eaton Vance Tax-Managed Buy-Write Strategy Fund"
    },
    {
      "symbol": "EXEL",
      "name": "Exelixis Inc"
    },
    {
      "symbol": "EXFY",
      "name": "Expensify Inc - Class A"
    },
    {
      "symbol": "EXG",
      "name": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund"
    },
    {
      "symbol": "EXI",
      "name": "iShares Global Industrials ETF"
    },
    {
      "symbol": "EXK",
      "name": "Endeavour Silver Corp"
    },
    {
      "symbol": "EXLS",
      "name": "ExlService Holdings Inc"
    },
    {
      "symbol": "EXP",
      "name": "Eagle Materials Inc"
    },
    {
      "symbol": "EXPD",
      "name": "Expeditors International Of Washington Inc"
    },
    {
      "symbol": "EXPE",
      "name": "Expedia Group Inc"
    },
    {
      "symbol": "EXPI",
      "name": "eXp World Holdings Inc"
    },
    {
      "symbol": "EXPO",
      "name": "Exponent Inc"
    },
    {
      "symbol": "EXR",
      "name": "Extra Space Storage Inc"
    },
    {
      "symbol": "EXTO",
      "name": "Almacenes Exito S.A."
    },
    {
      "symbol": "EXTO-W",
      "name": "Almacenes Exito S.A. American Depositary Share each representing eight 8 WhenIssued"
    },
    {
      "symbol": "EXTR",
      "name": "Extreme Networks Inc"
    },
    {
      "symbol": "EYE",
      "name": "National Vision Holdings Inc"
    },
    {
      "symbol": "EYEG",
      "name": "AB Corporate Bond ETF"
    },
    {
      "symbol": "EYEN",
      "name": "Eyenovia Inc"
    },
    {
      "symbol": "EYLD",
      "name": "Cambria Emerging Shareholder Yield ETF"
    },
    {
      "symbol": "EYPT",
      "name": "EyePoint Pharmaceuticals Inc"
    },
    {
      "symbol": "EZA",
      "name": "ISHARES MSCI SOUTH AFRICA ETF "
    },
    {
      "symbol": "EZBC",
      "name": "Franklin Templeton Digital Holdings Trust"
    },
    {
      "symbol": "EZFL",
      "name": "EzFill Holdings Inc"
    },
    {
      "symbol": "EZGO",
      "name": "EZGO Technologies Ltd"
    },
    {
      "symbol": "EZJ",
      "name": "ProShares Ultra MSCI Japan 2x Shares"
    },
    {
      "symbol": "EZM",
      "name": "WisdomTree U.S. MidCap Fund"
    },
    {
      "symbol": "EZPW",
      "name": "EZCorp Inc - Class A"
    },
    {
      "symbol": "EZU",
      "name": "ISHARES MSCI EUROZONE ETF "
    },
    {
      "symbol": "F",
      "name": "Ford Motor Company"
    },
    {
      "symbol": "F-P-B",
      "name": "Ford Motor Company 620 Notes due June 1 2059"
    },
    {
      "symbol": "F-P-C",
      "name": "Ford Motor Company 6% Note"
    },
    {
      "symbol": "F-P-D",
      "name": "Ford Motor Company 6.500 Notes due August 15 2062"
    },
    {
      "symbol": "FA",
      "name": "First Advantage Corp"
    },
    {
      "symbol": "FAAR",
      "name": "FIRST TRUST ALTERNATIVE ABSOLUTE RETURN STRATEGY ETF "
    },
    {
      "symbol": "FAAS",
      "name": "DigiAsia Corp"
    },
    {
      "symbol": "FAASW",
      "name": "DigiAsia Corp - Warrants (02/04/2029)"
    },
    {
      "symbol": "FAB",
      "name": "FIRST TRUST MULTI CAP VALUE ALPHADEX FUND "
    },
    {
      "symbol": "FAD",
      "name": "FIRST TRUST MULTI CAP GROWTH ALPHADEX FUND "
    },
    {
      "symbol": "FAF",
      "name": "First American Financial Corp"
    },
    {
      "symbol": "FAIL",
      "name": "CAMBRIA GLOBAL TAIL RISK ETF "
    },
    {
      "symbol": "FALN",
      "name": "ISHARES FALLEN ANGELS USD BOND ETF "
    },
    {
      "symbol": "FAM",
      "name": "First Trust-abrdn Global Opportunity Income Fund"
    },
    {
      "symbol": "FAMI",
      "name": "Farmmi Inc"
    },
    {
      "symbol": "FAN",
      "name": "FIRST TRUST GLOBAL WIND ENERGY ETF "
    },
    {
      "symbol": "FANG",
      "name": "Diamondback Energy Inc"
    },
    {
      "symbol": "FANH",
      "name": "Fanhua Inc"
    },
    {
      "symbol": "FAPR",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - APRIL "
    },
    {
      "symbol": "FARM",
      "name": "Farmer Bros. Company"
    },
    {
      "symbol": "FARO",
      "name": "Faro Technologies Inc"
    },
    {
      "symbol": "FAS",
      "name": "DIREXION DAILY FINANCIAL BULL 3X SHARES "
    },
    {
      "symbol": "FAST",
      "name": "Fastenal Company"
    },
    {
      "symbol": "FAT",
      "name": "FAT Brands Inc - Class A"
    },
    {
      "symbol": "FATBB",
      "name": "FAT Brands Inc - Class B"
    },
    {
      "symbol": "FATBP",
      "name": "FAT Brands Inc"
    },
    {
      "symbol": "FATBW",
      "name": "FAT Brands Inc - Warrants (16/07/2025)"
    },
    {
      "symbol": "FATE",
      "name": "Fate Therapeutics Inc"
    },
    {
      "symbol": "FATH",
      "name": "Fathom Digital Manufacturing Corporation - Class A"
    },
    {
      "symbol": "FAUG",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - AUGUST "
    },
    {
      "symbol": "FAX",
      "name": "abrdn Asia-Pacific Income Fund Inc"
    },
    {
      "symbol": "FAZ",
      "name": "DIREXION DAILY FINANCIAL BEAR 3X SHARES "
    },
    {
      "symbol": "FBCG",
      "name": "FIDELITY BLUE CHIP GROWTH ETF "
    },
    {
      "symbol": "FBCV",
      "name": "FIDELITY BLUE CHIP VALUE ETF "
    },
    {
      "symbol": "FBGX",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "FBIN",
      "name": "Fortune Brands Innovations Inc"
    },
    {
      "symbol": "FBIO",
      "name": "Fortress Biotech Inc"
    },
    {
      "symbol": "FBIOP",
      "name": "Fortress Biotech Inc"
    },
    {
      "symbol": "FBIZ",
      "name": "First Business Financial Services Inc"
    },
    {
      "symbol": "FBK",
      "name": "FB Financial Corp"
    },
    {
      "symbol": "FBL",
      "name": "GRANITESHARES 1.5X LONG META DAILY ETF "
    },
    {
      "symbol": "FBLG",
      "name": "FibroBiologics Inc"
    },
    {
      "symbol": "FBMS",
      "name": "First Bancshares Inc Miss"
    },
    {
      "symbol": "FBNC",
      "name": "First Bancorp"
    },
    {
      "symbol": "FBND",
      "name": "FIDELITY TOTAL BOND ETF "
    },
    {
      "symbol": "FBOT",
      "name": "Fidelity Disruptive Automation ETF"
    },
    {
      "symbol": "FBP",
      "name": "First Bancorp PR"
    },
    {
      "symbol": "FBRT",
      "name": "Franklin BSP Realty Trust Inc"
    },
    {
      "symbol": "FBRT-P-E",
      "name": "Franklin BSP Realty Trust Inc"
    },
    {
      "symbol": "FBRX",
      "name": "Forte Biosciences Inc"
    },
    {
      "symbol": "FBT",
      "name": "FIRST TRUST NYSE ARCA BIOTECHNOLOGY INDEX FUND "
    },
    {
      "symbol": "FBTC",
      "name": "Fidelity Wise Origin Bitcoin Fund"
    },
    {
      "symbol": "FBUF",
      "name": "Fidelity Dynamic Buffered Equity ETF"
    },
    {
      "symbol": "FBY",
      "name": "YIELDMAX META OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "FBYD",
      "name": "Falcon`s Beyond Global Inc - Class A"
    },
    {
      "symbol": "FBYDW",
      "name": "Falcon`s Beyond Global Inc - Warrants (16/03/2026)"
    },
    {
      "symbol": "FBZ",
      "name": "FIRST TRUST BRAZIL ALPHADEX FUND "
    },
    {
      "symbol": "FC",
      "name": "Franklin Covey Company"
    },
    {
      "symbol": "FCA",
      "name": "FIRST TRUST CHINA ALPHADEX FUND "
    },
    {
      "symbol": "FCAL",
      "name": "FIRST TRUST CALIFORNIA MUNICIPAL HIGH INCOME ETF "
    },
    {
      "symbol": "FCAP",
      "name": "First Capital Inc"
    },
    {
      "symbol": "FCBC",
      "name": "First Community Bankshares Inc"
    },
    {
      "symbol": "FCCO",
      "name": "First Community Corp"
    },
    {
      "symbol": "FCEF",
      "name": "FIRST TRUST INCOME OPPORTUNITIES ETF "
    },
    {
      "symbol": "FCEL",
      "name": "Fuelcell Energy Inc"
    },
    {
      "symbol": "FCF",
      "name": "First Commonwealth Financial Corp"
    },
    {
      "symbol": "FCFS",
      "name": "FirstCash Holdings Inc"
    },
    {
      "symbol": "FCFY",
      "name": "FIRST TRUST S&P 500 DIVERSIFIED FREE CASH FLOW ETF "
    },
    {
      "symbol": "FCG",
      "name": "FIRST TRUST NATURAL GAS ETF "
    },
    {
      "symbol": "FCLD",
      "name": "FIDELITY CLOUD COMPUTING ETF "
    },
    {
      "symbol": "FCN",
      "name": "FTI Consulting Inc"
    },
    {
      "symbol": "FCNCA",
      "name": "First Citizens Bancshares Inc (NC) - Class A"
    },
    {
      "symbol": "FCNCO",
      "name": "First Citizens Bancshares Inc (NC)"
    },
    {
      "symbol": "FCNCP",
      "name": "First Citizens Bancshares Inc (NC)"
    },
    {
      "symbol": "FCO",
      "name": "abrdn Global Income Fund Inc"
    },
    {
      "symbol": "FCOM",
      "name": "FIDELITY MSCI COMMUNICATION SERVICES INDEX ETF "
    },
    {
      "symbol": "FCOR",
      "name": "FIDELITY CORPORATE BOND ETF "
    },
    {
      "symbol": "FCPI",
      "name": "FIDELITY STOCKS FOR INFLATION ETF "
    },
    {
      "symbol": "FCPT",
      "name": "Four Corners Property Trust Inc"
    },
    {
      "symbol": "FCRX",
      "name": "Crescent Capital BDC Inc"
    },
    {
      "symbol": "FCSH",
      "name": "Federated Hermes Short Duration Corporate ETF"
    },
    {
      "symbol": "FCT",
      "name": "First Trust Senior Floting Rate Income Fund II"
    },
    {
      "symbol": "FCTR",
      "name": "FIRST TRUST LUNT U.S. FACTOR ROTATION ETF "
    },
    {
      "symbol": "FCUS",
      "name": "PINNACLE FOCUSED OPPORTUNITIES ETF "
    },
    {
      "symbol": "FCUV",
      "name": "Focus Universal Inc"
    },
    {
      "symbol": "FCVT",
      "name": "FIRST TRUST SSI STRATEGIC CONVERTIBLE SECURITIES ETF "
    },
    {
      "symbol": "FCX",
      "name": "Freeport-McMoRan Inc"
    },
    {
      "symbol": "FDAT",
      "name": "Tactical Advantage ETF"
    },
    {
      "symbol": "FDBC",
      "name": "Fidelity D&D Bancorp Inc"
    },
    {
      "symbol": "FDCE",
      "name": "Foundations Dynamic Core ETF"
    },
    {
      "symbol": "FDCF",
      "name": "FIDELITY DISRUPTIVE COMMUNICATIONS ETF "
    },
    {
      "symbol": "FDD",
      "name": "FIRST TRUST STOXX EUROPEAN SELECT DIVIDEND INDEX FUND "
    },
    {
      "symbol": "FDEC",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - DECEMBER "
    },
    {
      "symbol": "FDEM",
      "name": "FIDELITY EMERGING MARKETS MULTIFACTOR ETF "
    },
    {
      "symbol": "FDEU",
      "name": "First Trust Dynamic Europe Equity Income Fund"
    },
    {
      "symbol": "FDEV",
      "name": "FIDELITY INTERNATIONAL MULTIFACTOR ETF "
    },
    {
      "symbol": "FDFF",
      "name": "FIDELITY DISRUPTIVE FINANCE ETF "
    },
    {
      "symbol": "FDG",
      "name": "AMERICAN CENTURY FOCUSED DYNAMIC GROWTH ETF "
    },
    {
      "symbol": "FDGR",
      "name": "Foundations Dynamic Growth ETF"
    },
    {
      "symbol": "FDHT",
      "name": "FIDELITY DIGITAL HEALTH ETF "
    },
    {
      "symbol": "FDHY",
      "name": "FIDELITY HIGH YIELD FACTOR ETF "
    },
    {
      "symbol": "FDIF",
      "name": "Fidelity Disruptors ETF"
    },
    {
      "symbol": "FDIG",
      "name": "FIDELITY CRYPTO INDUSTRY AND DIGITAL PAYMENTS ETF "
    },
    {
      "symbol": "FDIS",
      "name": "FIDELITY MSCI CONSUMER DISCRETIONARY INDEX ETF "
    },
    {
      "symbol": "FDIV",
      "name": "MarketDesk Focused U.S. Dividend ETF"
    },
    {
      "symbol": "FDL",
      "name": "FIRST TRUST MORNINGSTAR DIVIDEND LEADERS INDEX FUND "
    },
    {
      "symbol": "FDLO",
      "name": "FIDELITY LOW VOLATILITY FACTOR ETF "
    },
    {
      "symbol": "FDLS",
      "name": "INSPIRE FIDELIS MULTI FACTOR ETF "
    },
    {
      "symbol": "FDM",
      "name": "FIRST TRUST DOW JONES SELECT MICROCAP INDEX FUND "
    },
    {
      "symbol": "FDMO",
      "name": "FIDELITY MOMENTUM FACTOR ETF "
    },
    {
      "symbol": "FDMT",
      "name": "4D Molecular Therapeutics Inc"
    },
    {
      "symbol": "FDN",
      "name": "FIRST TRUST DOW JONES INTERNET INDEX FUND "
    },
    {
      "symbol": "FDND",
      "name": "FT Vest Dow Jones Internet & Target Income ETF"
    },
    {
      "symbol": "FDNI",
      "name": "FIRST TRUST DOW JONES INTERNATIONAL INTERNET ETF "
    },
    {
      "symbol": "FDP",
      "name": "Fresh Del Monte Produce Inc"
    },
    {
      "symbol": "FDRR",
      "name": "FIDELITY DIVIDEND ETF FOR RISING RATES "
    },
    {
      "symbol": "FDRV",
      "name": "FIDELITY ELECTRIC VEHICLES AND FUTURE TRANSPORTATION ETF "
    },
    {
      "symbol": "FDS",
      "name": "Factset Research Systems Inc"
    },
    {
      "symbol": "FDT",
      "name": "FIRST TRUST DEVELOPED MARKETS EX-US ALPHADEX FUND "
    },
    {
      "symbol": "FDTB",
      "name": "Foundations Dynamic Income ETF"
    },
    {
      "symbol": "FDTS",
      "name": "FIRST TRUST DEVELOPED MARKETS EX-US SMALL CAP ALPHADEX FUND "
    },
    {
      "symbol": "FDTX",
      "name": "Fidelity Disruptive Technology ETF"
    },
    {
      "symbol": "FDUS",
      "name": "Fidus Investment Corp"
    },
    {
      "symbol": "FDV",
      "name": "Federated Hermes U.S. Strategic Dividend ETF"
    },
    {
      "symbol": "FDVL",
      "name": "Foundations Dynamic Value ETF"
    },
    {
      "symbol": "FDVV",
      "name": "FIDELITY HIGH DIVIDEND ETF "
    },
    {
      "symbol": "FDWM",
      "name": "FIDELITY WOMEN'S LEADERSHIP ETF "
    },
    {
      "symbol": "FDX",
      "name": "Fedex Corp"
    },
    {
      "symbol": "FE",
      "name": "Firstenergy Corp"
    },
    {
      "symbol": "FEAM",
      "name": "5E Advanced Materials Inc"
    },
    {
      "symbol": "FEBO",
      "name": "Fenbo Holdings Ltd"
    },
    {
      "symbol": "FEBP",
      "name": "PGIM US Large-Cap Buffer 12 ETF - February"
    },
    {
      "symbol": "FEBT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 FEB ETF "
    },
    {
      "symbol": "FEBW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 FEB ETF "
    },
    {
      "symbol": "FEBZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (FEBRUARY) ETF "
    },
    {
      "symbol": "FEDL",
      "name": "ETRACS 2x Leveraged IFED Invest with the Fed TR Index ETN"
    },
    {
      "symbol": "FEDM",
      "name": "FLEXSHARES ESG & CLIMATE DEVELOPED MARKETS EX-US CORE INDEX FUND "
    },
    {
      "symbol": "FEDU",
      "name": "Four Seasons Education (Cayman) Inc"
    },
    {
      "symbol": "FEI",
      "name": "First Trust MLP and Energy Income Fund"
    },
    {
      "symbol": "FEIG",
      "name": "FLEXSHARES ESG & CLIMATE INVESTMENT GRADE CORPORATE CORE INDEX FUND "
    },
    {
      "symbol": "FEIM",
      "name": "Frequency Electronics Inc"
    },
    {
      "symbol": "FELE",
      "name": "Franklin Electric Co. Inc"
    },
    {
      "symbol": "FEM",
      "name": "FIRST TRUST EMERGING MARKETS ALPHADEX FUND "
    },
    {
      "symbol": "FEMB",
      "name": "FIRST TRUST EMERGING MARKETS LOCAL CURRENCY BOND ETF "
    },
    {
      "symbol": "FEMS",
      "name": "FIRST TRUST EMERGING MARKETS SMALL CAP ALPHADEX FUND "
    },
    {
      "symbol": "FEMY",
      "name": "Femasys Inc"
    },
    {
      "symbol": "FEN",
      "name": "First Trust Energy Income and Growth Fund"
    },
    {
      "symbol": "FENC",
      "name": "Fennec Pharmaceuticals Inc"
    },
    {
      "symbol": "FENG",
      "name": "Phoenix New Media Ltd"
    },
    {
      "symbol": "FENY",
      "name": "FIDELITY MSCI ENERGY INDEX ETF "
    },
    {
      "symbol": "FEO",
      "name": "First Trust-abrdn Emerging Opportunity Fund"
    },
    {
      "symbol": "FEP",
      "name": "FIRST TRUST EUROPE ALPHADEX FUND "
    },
    {
      "symbol": "FEPI",
      "name": "REX FANG & Innovation Equity Premium Income ETF"
    },
    {
      "symbol": "FERG",
      "name": "Ferguson Plc."
    },
    {
      "symbol": "FET",
      "name": "Forum Energy Technologies Inc"
    },
    {
      "symbol": "FEUS",
      "name": "FLEXSHARES ESG & CLIMATE US LARGE CAP CORE INDEX FUND "
    },
    {
      "symbol": "FEUZ",
      "name": "FIRST TRUST EUROZONE ALPHADEX ETF "
    },
    {
      "symbol": "FEVR",
      "name": "Inspire Faithward Large Cap Momentum ETF"
    },
    {
      "symbol": "FEX",
      "name": "First Trust Large Cap Core AlphaDEX Fund"
    },
    {
      "symbol": "FEXD",
      "name": "Fintech Ecosystem Development Corp - Class A"
    },
    {
      "symbol": "FEXDR",
      "name": "Fintech Ecosystem Development Corp"
    },
    {
      "symbol": "FEXDU",
      "name": "Fintech Ecosystem Development Corp - Units (1 Ord Share Class A 1 Right & 1/2 War)"
    },
    {
      "symbol": "FEXDW",
      "name": "Fintech Ecosystem Development Corp - Warrants (01/04/2026)"
    },
    {
      "symbol": "FEZ",
      "name": "SPDR(R) EURO STOXX 50(R) ETF "
    },
    {
      "symbol": "FF",
      "name": "Futurefuel Corp"
    },
    {
      "symbol": "FFA",
      "name": "First Trust Enhanced Equity Income Fund"
    },
    {
      "symbol": "FFBC",
      "name": "First Financial Bancorp"
    },
    {
      "symbol": "FFC",
      "name": "Flaherty & Crumrine Preferred and Income Securities Fund Inc"
    },
    {
      "symbol": "FFEB",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - FEBRUARY "
    },
    {
      "symbol": "FFIC",
      "name": "Flushing Financial Corp"
    },
    {
      "symbol": "FFIE",
      "name": "Faraday Future Intelligent Electric Inc - Class A"
    },
    {
      "symbol": "FFIEW",
      "name": "Faraday Future Intelligent Electric Inc - Warrants (21/07/2026)"
    },
    {
      "symbol": "FFIN",
      "name": "First Financial Bankshares Inc"
    },
    {
      "symbol": "FFIU",
      "name": "UVA UNCONSTRAINED MEDIUM-TERM FIXED INCOME ETF "
    },
    {
      "symbol": "FFIV",
      "name": "F5 Inc"
    },
    {
      "symbol": "FFLC",
      "name": "Fidelity New Millennium ETF"
    },
    {
      "symbol": "FFLG",
      "name": "Fidelity Growth Opportunities ETF"
    },
    {
      "symbol": "FFLS",
      "name": "The Future Fund Long/Short ETF"
    },
    {
      "symbol": "FFLV",
      "name": "Fidelity Fundamental Large Cap Value ETF"
    },
    {
      "symbol": "FFND",
      "name": "THE FUTURE FUND ACTIVE ETF "
    },
    {
      "symbol": "FFNW",
      "name": "First Financial Northwest Inc"
    },
    {
      "symbol": "FFOG",
      "name": "Franklin Focused Growth ETF"
    },
    {
      "symbol": "FFSM",
      "name": "Fidelity Small-Mid Cap Opportunities ETF"
    },
    {
      "symbol": "FFTY",
      "name": "INNOVATOR IBD(R) 50 ETF "
    },
    {
      "symbol": "FFWM",
      "name": "First Foundation Inc"
    },
    {
      "symbol": "FG",
      "name": "F&G Annuities & Life Inc"
    },
    {
      "symbol": "FG-W",
      "name": "F&G Annuities & Life Inc WhenIssued"
    },
    {
      "symbol": "FGB",
      "name": "First Trust Specialty Finance & Financial Opportunities Fund"
    },
    {
      "symbol": "FGBI",
      "name": "First Guaranty Bancshares Inc"
    },
    {
      "symbol": "FGBIP",
      "name": "First Guaranty Bancshares Inc"
    },
    {
      "symbol": "FGD",
      "name": "FIRST TRUST DOW JONES GLOBAL SELECT DIVIDEND INDEX FUND "
    },
    {
      "symbol": "FGDL",
      "name": "Franklin Responsibly Sourced Gold ETF"
    },
    {
      "symbol": "FGEN",
      "name": "FibroGen Inc"
    },
    {
      "symbol": "FGF",
      "name": "FG Financial Group Inc"
    },
    {
      "symbol": "FGFPP",
      "name": "FG Financial Group Inc"
    },
    {
      "symbol": "FGI",
      "name": "FGI Industries Ltd"
    },
    {
      "symbol": "FGIWW",
      "name": "FGI Industries Ltd - Warrants (21/01/2027)"
    },
    {
      "symbol": "FGM",
      "name": "FIRST TRUST GERMANY ALPHADEX FUND "
    },
    {
      "symbol": "FGN",
      "name": "F&G Annuities & Life Inc"
    },
    {
      "symbol": "FHB",
      "name": "First Hawaiian Inc"
    },
    {
      "symbol": "FHEQ",
      "name": "Fidelity Hedged Equity ETF"
    },
    {
      "symbol": "FHI",
      "name": "Federated Hermes Inc - Class B"
    },
    {
      "symbol": "FHLC",
      "name": "FIDELITY MSCI HEALTH CARE INDEX ETF "
    },
    {
      "symbol": "FHLT",
      "name": "Future Health ESG Corp"
    },
    {
      "symbol": "FHLTU",
      "name": "Future Health ESG Corp - Units (1 Ord Share & 1/2 War)"
    },
    {
      "symbol": "FHLTW",
      "name": "Future Health ESG Corp - Warrants (09/09/2026)"
    },
    {
      "symbol": "FHN",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHN-P-B",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHN-P-C",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHN-P-D",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHN-P-E",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHN-P-F",
      "name": "First Horizon Corporation"
    },
    {
      "symbol": "FHTX",
      "name": "Foghorn Therapeutics Inc"
    },
    {
      "symbol": "FHYS",
      "name": "Federated Hermes Short Duration High Yield ETF"
    },
    {
      "symbol": "FI",
      "name": "Fiserv Inc"
    },
    {
      "symbol": "FIAC",
      "name": "Focus Impact Acquisition Corp - Class A"
    },
    {
      "symbol": "FIACU",
      "name": "Focus Impact Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "FIACW",
      "name": "Focus Impact Acquisition Corp - Warrants(28/10/2026)"
    },
    {
      "symbol": "FIAX",
      "name": "NICHOLAS FIXED INCOME ALTERNATIVE ETF "
    },
    {
      "symbol": "FIBK",
      "name": "First Interstate BancSystem Inc"
    },
    {
      "symbol": "FIBR",
      "name": "ISHARES U.S. FIXED INCOME BALANCED RISK SYSTEMATIC ETF "
    },
    {
      "symbol": "FICO",
      "name": "Fair Isaac Corp"
    },
    {
      "symbol": "FICS",
      "name": "FIRST TRUST INTERNATIONAL DEVELOPED CAPITAL STRENGTH ETF "
    },
    {
      "symbol": "FICV",
      "name": "Frontier Investment Corp - Class A"
    },
    {
      "symbol": "FICVU",
      "name": "Frontier Investment Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "FICVW",
      "name": "Frontier Investment Corp - Warrants (29/06/2026)"
    },
    {
      "symbol": "FID",
      "name": "First Trust S&P International Dividend Aristocrats ETF"
    },
    {
      "symbol": "FIDI",
      "name": "FIDELITY INTERNATIONAL HIGH DIVIDEND ETF "
    },
    {
      "symbol": "FIDU",
      "name": "FIDELITY MSCI INDUSTRIALS INDEX ETF "
    },
    {
      "symbol": "FIF",
      "name": "First Trust Energy Infrastructure Fund"
    },
    {
      "symbol": "FIG",
      "name": "SIMPLIFY MACRO STRATEGY ETF "
    },
    {
      "symbol": "FIGB",
      "name": "FIDELITY INVESTMENT GRADE BOND ETF "
    },
    {
      "symbol": "FIGS",
      "name": "Figs Inc - Class A"
    },
    {
      "symbol": "FIHL",
      "name": "Fidelis Insurance Holdings Ltd"
    },
    {
      "symbol": "FIIG",
      "name": "FIRST TRUST INTERMEDIATE DURATION INVESTMENT GRADE CORPORATE ETF "
    },
    {
      "symbol": "FILL",
      "name": "ISHARES MSCI GLOBAL ENERGY PRODUCERS ETF "
    },
    {
      "symbol": "FINE",
      "name": "Themes European Luxury ETF"
    },
    {
      "symbol": "FINS",
      "name": "Angel Oak Financial Strategies Income Term Trust"
    },
    {
      "symbol": "FINV",
      "name": "FinVolution Group"
    },
    {
      "symbol": "FINW",
      "name": "FinWise Bancorp"
    },
    {
      "symbol": "FINX",
      "name": "GLOBAL X FINTECH ETF "
    },
    {
      "symbol": "FIP",
      "name": "FTAI Infrastructure Inc"
    },
    {
      "symbol": "FIS",
      "name": "Fidelity National Information Services Inc"
    },
    {
      "symbol": "FISI",
      "name": "Financial Institutions Inc"
    },
    {
      "symbol": "FISK",
      "name": "Empire State Realty OP LP"
    },
    {
      "symbol": "FISR",
      "name": "SPDR SSGA Fixed Income Sector Rotation ETF"
    },
    {
      "symbol": "FITB",
      "name": "Fifth Third Bancorp"
    },
    {
      "symbol": "FITBI",
      "name": "Fifth Third Bancorp"
    },
    {
      "symbol": "FITBO",
      "name": "Fifth Third Bancorp"
    },
    {
      "symbol": "FITBP",
      "name": "Fifth Third Bancorp"
    },
    {
      "symbol": "FITE",
      "name": "SPDR S&P Kensho Future Security ETF"
    },
    {
      "symbol": "FIVA",
      "name": "FIDELITY INTERNATIONAL VALUE FACTOR ETF "
    },
    {
      "symbol": "FIVE",
      "name": "Five Below Inc"
    },
    {
      "symbol": "FIVG",
      "name": "DEFIANCE NEXT GEN CONNECTIVITY ETF "
    },
    {
      "symbol": "FIVN",
      "name": "Five9 Inc"
    },
    {
      "symbol": "FIVR",
      "name": "Strategy Shares Nasdaq 5HANDL Index ETF"
    },
    {
      "symbol": "FIW",
      "name": "FIRST TRUST WATER ETF "
    },
    {
      "symbol": "FIX",
      "name": "Comfort Systems USA Inc"
    },
    {
      "symbol": "FIXD",
      "name": "FIRST TRUST TCW OPPORTUNISTIC FIXED INCOME ETF "
    },
    {
      "symbol": "FIXT",
      "name": "PROCURE DISASTER RECOVERY STRATEGY ETF "
    },
    {
      "symbol": "FIZZ",
      "name": "National Beverage Corp"
    },
    {
      "symbol": "FJAN",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - JANUARY "
    },
    {
      "symbol": "FJP",
      "name": "FIRST TRUST JAPAN ALPHADEX FUND "
    },
    {
      "symbol": "FJUL",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - JULY "
    },
    {
      "symbol": "FJUN",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - JUNE "
    },
    {
      "symbol": "FKU",
      "name": "FIRST TRUST UNITED KINGDOM ALPHADEX FUND "
    },
    {
      "symbol": "FKWL",
      "name": "Franklin Wireless Corp"
    },
    {
      "symbol": "FL",
      "name": "Foot Locker Inc"
    },
    {
      "symbol": "FLAC",
      "name": "Frazier Lifesciences Acquisition Corp - Class A"
    },
    {
      "symbol": "FLACW",
      "name": "Frazier Lifesciences Acquisition Corp - Warrants (09/12/2025)"
    },
    {
      "symbol": "FLAG-WS",
      "name": "First Light Acquisition Group Inc Redeemable Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per s"
    },
    {
      "symbol": "FLAO",
      "name": "AllianzIM U.S. Equity 6 Month Floor5 Apr/Oct ETF"
    },
    {
      "symbol": "FLAU",
      "name": "FRANKLIN FTSE AUSTRALIA ETF "
    },
    {
      "symbol": "FLAX",
      "name": "Franklin FTSE Asia ex Japan ETF"
    },
    {
      "symbol": "FLBL",
      "name": "Franklin Senior Loan ETF"
    },
    {
      "symbol": "FLBR",
      "name": "Franklin FTSE Brazil ETF"
    },
    {
      "symbol": "FLC",
      "name": "Flaherty & Crumrine Total Return Fund Inc"
    },
    {
      "symbol": "FLCA",
      "name": "Franklin FTSE Canada ETF"
    },
    {
      "symbol": "FLCB",
      "name": "Franklin U.S. Core Bond ETF"
    },
    {
      "symbol": "FLCH",
      "name": "FRANKLIN FTSE CHINA ETF "
    },
    {
      "symbol": "FLCO",
      "name": "Franklin Investment Grade Corporate ETF"
    },
    {
      "symbol": "FLDB",
      "name": "Fidelity Low Duration Bond ETF"
    },
    {
      "symbol": "FLDR",
      "name": "FIDELITY LOW DURATION BOND FACTOR ETF "
    },
    {
      "symbol": "FLDZ",
      "name": "RIVERNORTH PATRIOT ETF "
    },
    {
      "symbol": "FLEE",
      "name": "Franklin FTSE Europe ETF"
    },
    {
      "symbol": "FLEU",
      "name": "Franklin FTSE Eurozone ETF"
    },
    {
      "symbol": "FLEX",
      "name": "Flex Ltd"
    },
    {
      "symbol": "FLFR",
      "name": "FRANKLIN FTSE FRANCE ETF "
    },
    {
      "symbol": "FLFV",
      "name": "Feutune Light Acquisition Corp - Class A"
    },
    {
      "symbol": "FLFVR",
      "name": "Feutune Light Acquisition Corp"
    },
    {
      "symbol": "FLFVU",
      "name": "Feutune Light Acquisition Corp - Units (1 Ord Class A 1 War & 1 Right)"
    },
    {
      "symbol": "FLFVW",
      "name": "Feutune Light Acquisition Corp - Warrants (01/06/2029)"
    },
    {
      "symbol": "FLGB",
      "name": "Franklin FTSE United Kingdom ETF"
    },
    {
      "symbol": "FLGC",
      "name": "Flora Growth Corp"
    },
    {
      "symbol": "FLGR",
      "name": "Franklin FTSE Germany ETF"
    },
    {
      "symbol": "FLGT",
      "name": "Fulgent Genetics Inc"
    },
    {
      "symbol": "FLGV",
      "name": "Franklin U.S. Treasury Bond ETF"
    },
    {
      "symbol": "FLHK",
      "name": "Franklin FTSE Hong Kong ETF"
    },
    {
      "symbol": "FLHY",
      "name": "Franklin High Yield Corporate ETF"
    },
    {
      "symbol": "FLIA",
      "name": "Franklin International Aggregate Bond ETF"
    },
    {
      "symbol": "FLIC",
      "name": "First Of Long Island Corp"
    },
    {
      "symbol": "FLIN",
      "name": "Franklin FTSE India ETF"
    },
    {
      "symbol": "FLIY",
      "name": "FRANKLIN FTSE ITALY ETF "
    },
    {
      "symbol": "FLJ",
      "name": "FLJ Group Limited"
    },
    {
      "symbol": "FLJH",
      "name": "Franklin FTSE Japan Hedged ETF"
    },
    {
      "symbol": "FLJJ",
      "name": "AllianzIM U.S. Equity 6 Month Floor5 Jan/Jul ETF"
    },
    {
      "symbol": "FLJP",
      "name": "Franklin FTSE Japan ETF"
    },
    {
      "symbol": "FLKR",
      "name": "Franklin FTSE South Korea ETF"
    },
    {
      "symbol": "FLL",
      "name": "Full House Resorts Inc"
    },
    {
      "symbol": "FLLA",
      "name": "FRANKLIN FTSE LATIN AMERICA ETF "
    },
    {
      "symbol": "FLLV",
      "name": "Franklin U.S. Low Volatility ETF"
    },
    {
      "symbol": "FLMB",
      "name": "Franklin Municipal Green Bond ETF"
    },
    {
      "symbol": "FLMI",
      "name": "Franklin Dynamic Municipal Bond ETF"
    },
    {
      "symbol": "FLMX",
      "name": "Franklin FTSE Mexico ETF"
    },
    {
      "symbol": "FLN",
      "name": "First Trust Latin America AlphaDEX Fund"
    },
    {
      "symbol": "FLNC",
      "name": "Fluence Energy Inc - Class A"
    },
    {
      "symbol": "FLNG",
      "name": "Flex Lng Ltd"
    },
    {
      "symbol": "FLNT",
      "name": "Fluent Inc"
    },
    {
      "symbol": "FLO",
      "name": "Flowers Foods Inc"
    },
    {
      "symbol": "FLOT",
      "name": "ISHARES FLOATING RATE BOND ETF "
    },
    {
      "symbol": "FLOW",
      "name": "GLOBAL X U.S. CASH FLOW KINGS 100 ETF "
    },
    {
      "symbol": "FLQL",
      "name": "Franklin U.S. Large Cap Multifactor Index ETF"
    },
    {
      "symbol": "FLQM",
      "name": "Franklin U.S. Mid Cap Multifactor Index ETF"
    },
    {
      "symbol": "FLQS",
      "name": "Franklin U.S. Small Cap Multifactor Index ETF"
    },
    {
      "symbol": "FLR",
      "name": "Fluor Corporation"
    },
    {
      "symbol": "FLRG",
      "name": "FIDELITY U.S. MULTIFACTOR ETF "
    },
    {
      "symbol": "FLRN",
      "name": "SPDR Bloomberg Investment Grade Floating Rate ETF"
    },
    {
      "symbol": "FLRT",
      "name": "Pacer Pacific Asset Floating Rate High Income ETF"
    },
    {
      "symbol": "FLS",
      "name": "Flowserve Corp"
    },
    {
      "symbol": "FLSA",
      "name": "Franklin FTSE Saudi Arabia ETF"
    },
    {
      "symbol": "FLSP",
      "name": "Franklin Systematic Style Premia ETF"
    },
    {
      "symbol": "FLSW",
      "name": "Franklin FTSE Switzerland ETF"
    },
    {
      "symbol": "FLTB",
      "name": "FIDELITY LIMITED TERM BOND ETF "
    },
    {
      "symbol": "FLTR",
      "name": "VanEck IG Floating Rate ETF"
    },
    {
      "symbol": "FLTW",
      "name": "FRANKLIN FTSE TAIWAN ETF "
    },
    {
      "symbol": "FLUD",
      "name": "FRANKLIN ULTRA SHORT BOND ETF "
    },
    {
      "symbol": "FLUX",
      "name": "Flux Power Holdings Inc"
    },
    {
      "symbol": "FLV",
      "name": "AMERICAN CENTURY FOCUSED LARGE CAP VALUE ETF "
    },
    {
      "symbol": "FLWS",
      "name": "1-800 Flowers.com Inc - Class A"
    },
    {
      "symbol": "FLXS",
      "name": "Flexsteel Industries Inc"
    },
    {
      "symbol": "FLYD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FLYU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FLYW",
      "name": "Flywire Corp"
    },
    {
      "symbol": "FLYX",
      "name": "flyExclusive Inc - Class A"
    },
    {
      "symbol": "FLZA",
      "name": "FRANKLIN FTSE SOUTH AFRICA ETF "
    },
    {
      "symbol": "FM",
      "name": "ISHARES FRONTIER AND SELECT EM ETF "
    },
    {
      "symbol": "FMAG",
      "name": "FIDELITY MAGELLAN ETF "
    },
    {
      "symbol": "FMAO",
      "name": "Farmers & Merchants Bancorp Inc"
    },
    {
      "symbol": "FMAR",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - MARCH "
    },
    {
      "symbol": "FMAT",
      "name": "FIDELITY MSCI MATERIALS INDEX ETF "
    },
    {
      "symbol": "FMAY",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - MAY "
    },
    {
      "symbol": "FMB",
      "name": "FIRST TRUST MANAGED MUNICIPAL ETF "
    },
    {
      "symbol": "FMBH",
      "name": "First Mid Bancshares Inc"
    },
    {
      "symbol": "FMC",
      "name": "FMC Corp"
    },
    {
      "symbol": "FMCX",
      "name": "FMC Excelsior Focus Equity ETF"
    },
    {
      "symbol": "FMED",
      "name": "FIDELITY DISRUPTIVE MEDICINE ETF "
    },
    {
      "symbol": "FMET",
      "name": "FIDELITY METAVERSE ETF "
    },
    {
      "symbol": "FMF",
      "name": "FIRST TRUST MANAGED FUTURES STRATEGY FUND "
    },
    {
      "symbol": "FMHI",
      "name": "FIRST TRUST MUNICIPAL HIGH INCOME ETF "
    },
    {
      "symbol": "FMN",
      "name": "Federated Hermes Premier Municipal Income Fund"
    },
    {
      "symbol": "FMNB",
      "name": "Farmers National Banc Corp"
    },
    {
      "symbol": "FMNY",
      "name": "FIRST TRUST NEW YORK MUNICIPAL HIGH INCOME ETF "
    },
    {
      "symbol": "FMQQ",
      "name": "FMQQ THE NEXT FRONTIER INTERNET & ECOMMERCE ETF "
    },
    {
      "symbol": "FMS",
      "name": "Fresenius Medical Care AG & Co. KGaA"
    },
    {
      "symbol": "FMST",
      "name": "FINISHMASTER INC"
    },
    {
      "symbol": "FMSTW",
      "name": "Foremost Lithium Resource & Technology Ltd - Warrants (22/08/2028)"
    },
    {
      "symbol": "FMX",
      "name": "Fomento Economico Mexicano S.A.B. de C.V."
    },
    {
      "symbol": "FMY",
      "name": "First Trust Mortgage Income Fund"
    },
    {
      "symbol": "FN",
      "name": "Fabrinet"
    },
    {
      "symbol": "FNA",
      "name": "Paragon 28 Inc"
    },
    {
      "symbol": "FNB",
      "name": "F.N.B. Corp"
    },
    {
      "symbol": "FNCB",
      "name": "FNCB Bancorp Inc"
    },
    {
      "symbol": "FNCH",
      "name": "Finch Therapeutics Group Inc"
    },
    {
      "symbol": "FNCL",
      "name": "FIDELITY MSCI FINANCIALS INDEX ETF "
    },
    {
      "symbol": "FND",
      "name": "Floor & Decor Holdings Inc - Class A"
    },
    {
      "symbol": "FNDA",
      "name": "Schwab Fundamental U.S. Small Company Index ETF"
    },
    {
      "symbol": "FNDB",
      "name": "Schwab Fundamental U.S. Broad Market Index ETF"
    },
    {
      "symbol": "FNDC",
      "name": "Schwab Fundamental International Small Company Index ETF"
    },
    {
      "symbol": "FNDE",
      "name": "Schwab Fundamental Emerging Markets Large Company Index ETF"
    },
    {
      "symbol": "FNDF",
      "name": "Schwab Fundamental International Large Company Index ETF"
    },
    {
      "symbol": "FNDX",
      "name": "Schwab Fundamental U.S. Large Company Index ETF"
    },
    {
      "symbol": "FNF",
      "name": "Fidelity National Financial Inc"
    },
    {
      "symbol": "FNGD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FNGG",
      "name": "DIREXION DAILY NYSE FANG+ BULL 2X SHARES "
    },
    {
      "symbol": "FNGO",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FNGR",
      "name": "FingerMotion Inc"
    },
    {
      "symbol": "FNGS",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FNGU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "FNK",
      "name": "FIRST TRUST MID CAP VALUE ALPHADEX FUND "
    },
    {
      "symbol": "FNKO",
      "name": "Funko Inc - Class A"
    },
    {
      "symbol": "FNLC",
      "name": "First Bancorp Inc (ME)"
    },
    {
      "symbol": "FNOV",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - NOVEMBER "
    },
    {
      "symbol": "FNV",
      "name": "Franco-Nevada Corporation"
    },
    {
      "symbol": "FNVT",
      "name": "Finnovate Acquisition Corp - Class A"
    },
    {
      "symbol": "FNVTU",
      "name": "Finnovate Acquisition Corp - Units (1 Ord Class A & 3/4 War)"
    },
    {
      "symbol": "FNVTW",
      "name": "Finnovate Acquisition Corp - Warrants (30/09/2026)"
    },
    {
      "symbol": "FNWB",
      "name": "First Northwest Bancorp"
    },
    {
      "symbol": "FNWD",
      "name": "Finward Bancorp"
    },
    {
      "symbol": "FNX",
      "name": "FIRST TRUST MID CAP CORE ALPHADEX FUND "
    },
    {
      "symbol": "FNY",
      "name": "FIRST TRUST MID CAP GROWTH ALPHADEX FUND "
    },
    {
      "symbol": "FOA",
      "name": "Finance of America Companies Inc"
    },
    {
      "symbol": "FOA-WS",
      "name": "Finance of America Companies Inc - Warrants (08/04/2026)"
    },
    {
      "symbol": "FOCT",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - OCTOBER "
    },
    {
      "symbol": "FOF",
      "name": "Cohen & Steers Closed-End Opportunity Fund Inc"
    },
    {
      "symbol": "FOLD",
      "name": "Amicus Therapeutics Inc"
    },
    {
      "symbol": "FONR",
      "name": "Fonar Corp"
    },
    {
      "symbol": "FOR",
      "name": "Forestar Group Inc New"
    },
    {
      "symbol": "FORA",
      "name": "Forian Inc"
    },
    {
      "symbol": "FORD",
      "name": "Forward Industries Inc"
    },
    {
      "symbol": "FORH",
      "name": "Formidable ETF"
    },
    {
      "symbol": "FORL",
      "name": "GRANITESHARES 1.25X LONG F DAILY ETF "
    },
    {
      "symbol": "FORLU",
      "name": "Four Leaf Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "FORLW",
      "name": "Four Leaf Acquisition Corp - Warrants (15/03/2028)"
    },
    {
      "symbol": "FORM",
      "name": "FormFactor Inc"
    },
    {
      "symbol": "FORR",
      "name": "Forrester Research Inc"
    },
    {
      "symbol": "FORTY",
      "name": "Formula Systems (1985) Ltd"
    },
    {
      "symbol": "FOSL",
      "name": "Fossil Group Inc"
    },
    {
      "symbol": "FOSLL",
      "name": "Fossil Group Inc"
    },
    {
      "symbol": "FOUR",
      "name": "Shift4 Payments Inc - Class A"
    },
    {
      "symbol": "FOVL",
      "name": "iShares Focused Value Factor ETF"
    },
    {
      "symbol": "FOX",
      "name": "Fox Corporation - Class B"
    },
    {
      "symbol": "FOXA",
      "name": "Fox Corporation - Class A"
    },
    {
      "symbol": "FOXF",
      "name": "Fox Factory Holding Corp"
    },
    {
      "symbol": "FOXO",
      "name": "FOXO Technologies Inc - Class A"
    },
    {
      "symbol": "FPA",
      "name": "FIRST TRUST ASIA PACIFIC EX-JAPAN ALPHADEX FUND "
    },
    {
      "symbol": "FPAG",
      "name": "FPA Global Equity ETF"
    },
    {
      "symbol": "FPAY",
      "name": "FlexShopper Inc"
    },
    {
      "symbol": "FPE",
      "name": "FIRST TRUST PREFERRED SECURITIES AND INCOME ETF "
    },
    {
      "symbol": "FPEI",
      "name": "FIRST TRUST INSTITUTIONAL PREFERRED SECURITIES AND INCOME ETF "
    },
    {
      "symbol": "FPF",
      "name": "First Trust Intermediate Duration Preferred & Income Fund"
    },
    {
      "symbol": "FPFD",
      "name": "FIDELITY PREFERRED SECURITIES & INCOME ETF "
    },
    {
      "symbol": "FPH",
      "name": "Five Point Holdings LLC - Class A"
    },
    {
      "symbol": "FPI",
      "name": "Farmland Partners Inc"
    },
    {
      "symbol": "FPL",
      "name": "First Trust New Opportunities MLP & Energy Fund"
    },
    {
      "symbol": "FPRO",
      "name": "FIDELITY REAL ESTATE INVESTMENT ETF "
    },
    {
      "symbol": "FPX",
      "name": "FIRST TRUST US EQUITY OPPORTUNITIES ETF "
    },
    {
      "symbol": "FPXE",
      "name": "FIRST TRUST IPOX EUROPE EQUITY OPPORTUNITIES ETF "
    },
    {
      "symbol": "FPXI",
      "name": "FIRST TRUST INTERNATIONAL EQUITY OPPORTUNITIES ETF "
    },
    {
      "symbol": "FQAL",
      "name": "FIDELITY QUALITY FACTOR ETF "
    },
    {
      "symbol": "FR",
      "name": "First Industrial Realty Trust Inc"
    },
    {
      "symbol": "FRA",
      "name": "Blackrock Floating Rate Income Strategies Fund Inc"
    },
    {
      "symbol": "FRAF",
      "name": "Franklin Financial Services Corp"
    },
    {
      "symbol": "FRBA",
      "name": "First Bank (NJ)"
    },
    {
      "symbol": "FRBK",
      "name": "Republic First Bancorp Inc"
    },
    {
      "symbol": "FRBN",
      "name": "Forbion European Acquisition Corp - Class A"
    },
    {
      "symbol": "FRBNU",
      "name": "Forbion European Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "FRBNW",
      "name": "Forbion European Acquisition Corp - Warrants (10/12/2026)"
    },
    {
      "symbol": "FRD",
      "name": "Friedman Industries Inc"
    },
    {
      "symbol": "FRDM",
      "name": "FREEDOM 100 EMERGING MARKETS ETF "
    },
    {
      "symbol": "FREE",
      "name": "Whole Earth Brands Inc - Class A"
    },
    {
      "symbol": "FREEW",
      "name": "Whole Earth Brands Inc - Warrants (30/04/2026)"
    },
    {
      "symbol": "FREL",
      "name": "FIDELITY MSCI REAL ESTATE INDEX ETF "
    },
    {
      "symbol": "FREQ",
      "name": "Frequency Therapeutics Inc"
    },
    {
      "symbol": "FRES",
      "name": "Fresh2 Group Limited"
    },
    {
      "symbol": "FREY",
      "name": "FREYR Battery Inc"
    },
    {
      "symbol": "FREY-WS",
      "name": "FREYR Battery Warrants each whole warrant exercisable to purchase one Ordinary Share at an exercise price of 11.50 per share"
    },
    {
      "symbol": "FRGAP",
      "name": "Franchise Group Inc"
    },
    {
      "symbol": "FRGE",
      "name": "Forge Global Holdings Inc - Class A"
    },
    {
      "symbol": "FRGT",
      "name": "Freight Technologies Inc"
    },
    {
      "symbol": "FRHC",
      "name": "Freedom Holding Corp"
    },
    {
      "symbol": "FRI",
      "name": "FIRST TRUST S&P REIT INDEX FUND "
    },
    {
      "symbol": "FRLA",
      "name": "Fortune Rise Acquisition Corp - Class A"
    },
    {
      "symbol": "FRLAU",
      "name": "Fortune Rise Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "FRLAW",
      "name": "Fortune Rise Acquisition Corp - Warrants (06/12/2027)"
    },
    {
      "symbol": "FRME",
      "name": "First Merchants Corp"
    },
    {
      "symbol": "FRMEP",
      "name": "First Merchants Corp"
    },
    {
      "symbol": "FRNW",
      "name": "FIDELITY CLEAN ENERGY ETF "
    },
    {
      "symbol": "FRO",
      "name": "Frontline Plc"
    },
    {
      "symbol": "FROG",
      "name": "JFrog Ltd"
    },
    {
      "symbol": "FRPH",
      "name": "FRP Holdings Inc"
    },
    {
      "symbol": "FRPT",
      "name": "Freshpet Inc"
    },
    {
      "symbol": "FRSH",
      "name": "Freshworks Inc Class A"
    },
    {
      "symbol": "FRST",
      "name": "Primis Financial Corp"
    },
    {
      "symbol": "FRSX",
      "name": "Foresight Autonomous Holdings Ltd"
    },
    {
      "symbol": "FRT",
      "name": "Federal Realty Investment Trust."
    },
    {
      "symbol": "FRT-P-C",
      "name": "Federal Realty Investment Trust."
    },
    {
      "symbol": "FRTY",
      "name": "ALGER MID CAP 40 ETF "
    },
    {
      "symbol": "FRZA",
      "name": "Forza X1 Inc"
    },
    {
      "symbol": "FSBC",
      "name": "Five Star Bancorp"
    },
    {
      "symbol": "FSBD",
      "name": "FIDELITY SUSTAINABLE CORE PLUS BOND ETF "
    },
    {
      "symbol": "FSBW",
      "name": "FS Bancorp Inc"
    },
    {
      "symbol": "FSCO",
      "name": "FS Credit Opportunities Corp"
    },
    {
      "symbol": "FSD",
      "name": "First Trust High Income Long Short Fund"
    },
    {
      "symbol": "FSEA",
      "name": "First Seacoast Bancorp Inc"
    },
    {
      "symbol": "FSEC",
      "name": "FIDELITY INVESTMENT GRADE SECURITIZED ETF "
    },
    {
      "symbol": "FSEP",
      "name": "FT VEST U.S. EQUITY BUFFER ETF - SEPTEMBER "
    },
    {
      "symbol": "FSFG",
      "name": "First Savings Financial Group Inc"
    },
    {
      "symbol": "FSI",
      "name": "Flexible Solutions International Inc"
    },
    {
      "symbol": "FSIG",
      "name": "FIRST TRUST LIMITED DURATION INVESTMENT GRADE CORPORATE ETF "
    },
    {
      "symbol": "FSK",
      "name": "FS KKR Capital Corp"
    },
    {
      "symbol": "FSLD",
      "name": "FIDELITY SUSTAINABLE LOW DURATION BOND ETF "
    },
    {
      "symbol": "FSLR",
      "name": "First Solar Inc"
    },
    {
      "symbol": "FSLY",
      "name": "Fastly Inc - Class A"
    },
    {
      "symbol": "FSM",
      "name": "Fortuna Silver Mines Inc"
    },
    {
      "symbol": "FSMB",
      "name": "FIRST TRUST SHORT DURATION MANAGED MUNICIPAL ETF "
    },
    {
      "symbol": "FSMD",
      "name": "FIDELITY SMALL-MID MULTIFACTOR ETF "
    },
    {
      "symbol": "FSNB",
      "name": "Fusion Acquisition Corp II - Class A"
    },
    {
      "symbol": "FSNB-U",
      "name": "Fusion Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "FSP",
      "name": "Franklin Street Properties Corp"
    },
    {
      "symbol": "FSS",
      "name": "Federal Signal Corp"
    },
    {
      "symbol": "FSST",
      "name": "FIDELITY SUSTAINABLE U.S. EQUITY ETF "
    },
    {
      "symbol": "FSTA",
      "name": "FIDELITY MSCI CONSUMER STAPLES INDEX ETF "
    },
    {
      "symbol": "FSTR",
      "name": "L.B. Foster Co. - Class A"
    },
    {
      "symbol": "FSV",
      "name": "FirstService Corp"
    },
    {
      "symbol": "FSYD",
      "name": "FIDELITY SUSTAINABLE HIGH YIELD ETF "
    },
    {
      "symbol": "FSZ",
      "name": "FIRST TRUST SWITZERLAND ALPHADEX FUND "
    },
    {
      "symbol": "FT",
      "name": "Franklin Universal Trust"
    },
    {
      "symbol": "FTA",
      "name": "FIRST TRUST LARGE CAP VALUE ALPHADEX FUND "
    },
    {
      "symbol": "FTAA",
      "name": "FTAC Athena Acquisition Corp - Class A"
    },
    {
      "symbol": "FTAAU",
      "name": "FTAC Athena Acquisition Corp - Units (1 Ord Class A & 1/4 War)"
    },
    {
      "symbol": "FTAAW",
      "name": "FTAC Athena Acquisition Corp - Warrants (01/03/2026)"
    },
    {
      "symbol": "FTAG",
      "name": "FIRST TRUST INDXX GLOBAL AGRICULTURE ETF "
    },
    {
      "symbol": "FTAI",
      "name": "FTAI Aviation Ltd - Class A"
    },
    {
      "symbol": "FTAIM",
      "name": "FTAI Aviation Ltd"
    },
    {
      "symbol": "FTAIN",
      "name": "FTAI Aviation Ltd"
    },
    {
      "symbol": "FTAIO",
      "name": "FTAI Aviation Ltd"
    },
    {
      "symbol": "FTAIP",
      "name": "FTAI Aviation Ltd"
    },
    {
      "symbol": "FTBD",
      "name": "FIDELITY TACTICAL BOND ETF "
    },
    {
      "symbol": "FTC",
      "name": "First Trust Large Capital Growth AlphaDEX Fund"
    },
    {
      "symbol": "FTCB",
      "name": "First Trust Core Investment Grade ETF"
    },
    {
      "symbol": "FTCI",
      "name": "FTC Solar Inc"
    },
    {
      "symbol": "FTCS",
      "name": "FIRST TRUST CAPITAL STRENGTH ETF "
    },
    {
      "symbol": "FTDR",
      "name": "Frontdoor Inc"
    },
    {
      "symbol": "FTDS",
      "name": "FIRST TRUST DIVIDEND STRENGTH ETF "
    },
    {
      "symbol": "FTEC",
      "name": "FIDELITY MSCI INFORMATION TECHNOLOGY INDEX ETF "
    },
    {
      "symbol": "FTEK",
      "name": "Fuel Tech Inc"
    },
    {
      "symbol": "FTEL",
      "name": "Fitell Corp"
    },
    {
      "symbol": "FTF",
      "name": "Franklin Ltd Duration Income Trust"
    },
    {
      "symbol": "FTFT",
      "name": "Future FinTech Group Inc"
    },
    {
      "symbol": "FTGC",
      "name": "FIRST TRUST GLOBAL TACTICAL COMMODITY STRATEGY FUND "
    },
    {
      "symbol": "FTGS",
      "name": "FIRST TRUST GROWTH STRENGTH ETF "
    },
    {
      "symbol": "FTHI",
      "name": "FIRST TRUST BUYWRITE INCOME ETF "
    },
    {
      "symbol": "FTHM",
      "name": "Fathom Holdings Inc"
    },
    {
      "symbol": "FTHY",
      "name": "First Trust High Yield Opportunities 2027 Term Fund"
    },
    {
      "symbol": "FTI",
      "name": "TechnipFMC plc"
    },
    {
      "symbol": "FTIF",
      "name": "FIRST TRUST BLOOMBERG INFLATION SENSITIVE EQUITY ETF "
    },
    {
      "symbol": "FTII",
      "name": "FutureTech II Acquisition Corp - Class A"
    },
    {
      "symbol": "FTIIU",
      "name": "FutureTech II Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "FTIIW",
      "name": "FutureTech II Acquisition Corp - Warrants (23/12/2022)"
    },
    {
      "symbol": "FTK",
      "name": "Flotek Industries Inc"
    },
    {
      "symbol": "FTLF",
      "name": "FitLife Brands Inc"
    },
    {
      "symbol": "FTLS",
      "name": "FIRST TRUST LONG/SHORT EQUITY ETF "
    },
    {
      "symbol": "FTNT",
      "name": "Fortinet Inc"
    },
    {
      "symbol": "FTPA",
      "name": "FTAC Parnassus Acquisition Corp - Class A"
    },
    {
      "symbol": "FTPAW",
      "name": "FTAC Parnassus Acquisition Corp - Warrants (10/03/2026)"
    },
    {
      "symbol": "FTQI",
      "name": "FIRST TRUST NASDAQ BUYWRITE INCOME ETF "
    },
    {
      "symbol": "FTRB",
      "name": "Federated Hermes Total Return Bond ETF"
    },
    {
      "symbol": "FTRE",
      "name": "FORTE SOFTWARE INC"
    },
    {
      "symbol": "FTRI",
      "name": "FIRST TRUST INDXX GLOBAL NATURAL RESOURCES INCOME ETF "
    },
    {
      "symbol": "FTS",
      "name": "Fortis Inc"
    },
    {
      "symbol": "FTSD",
      "name": "Franklin Short Duration U.S. Government ETF"
    },
    {
      "symbol": "FTSL",
      "name": "FIRST TRUST SENIOR LOAN FUND "
    },
    {
      "symbol": "FTSM",
      "name": "FIRST TRUST ENHANCED SHORT MATURITY ETF "
    },
    {
      "symbol": "FTV",
      "name": "Fortive Corp"
    },
    {
      "symbol": "FTWO",
      "name": "Strive FAANG 2.0 ETF"
    },
    {
      "symbol": "FTXG",
      "name": "First Trust Nasdaq Food & Beverage ETF"
    },
    {
      "symbol": "FTXH",
      "name": "First Trust Nasdaq Pharmaceuticals ETF"
    },
    {
      "symbol": "FTXL",
      "name": "First Trust Nasdaq Semiconductor ETF"
    },
    {
      "symbol": "FTXN",
      "name": "First Trust Nasdaq Oil & Gas ETF"
    },
    {
      "symbol": "FTXO",
      "name": "First Trust Nasdaq Bank ETF"
    },
    {
      "symbol": "FTXR",
      "name": "First Trust Nasdaq Transportation ETF"
    },
    {
      "symbol": "FUBO",
      "name": "fuboTV Inc"
    },
    {
      "symbol": "FUFU",
      "name": "BitFuFu Inc - Class A"
    },
    {
      "symbol": "FUFUW",
      "name": "BitFuFu Inc - Warrants (01/03/2029)"
    },
    {
      "symbol": "FUL",
      "name": "H.B. Fuller Company"
    },
    {
      "symbol": "FULC",
      "name": "Fulcrum Therapeutics Inc"
    },
    {
      "symbol": "FULT",
      "name": "Fulton Financial Corp"
    },
    {
      "symbol": "FULTP",
      "name": "Fulton Financial Corp"
    },
    {
      "symbol": "FUMB",
      "name": "FIRST TRUST ULTRA SHORT DURATION MUNICIPAL ETF "
    },
    {
      "symbol": "FUN",
      "name": "Cedar Fair L.P."
    },
    {
      "symbol": "FUNC",
      "name": "First United Corporation"
    },
    {
      "symbol": "FUND",
      "name": "Sprott Focus Trust Inc"
    },
    {
      "symbol": "FUNL",
      "name": "CornerCap Fundametrics Large-Cap ETF"
    },
    {
      "symbol": "FURY",
      "name": "Fury Gold Mines Ltd"
    },
    {
      "symbol": "FUSB",
      "name": "First US Bancshares Inc"
    },
    {
      "symbol": "FUSI",
      "name": "AMERICAN CENTURY MULTISECTOR FLOATING INCOME ETF "
    },
    {
      "symbol": "FUSN",
      "name": "Fusion Pharmaceuticals Inc"
    },
    {
      "symbol": "FUTU",
      "name": "Futu Holdings Ltd"
    },
    {
      "symbol": "FUTY",
      "name": "FIDELITY MSCI UTILITIES INDEX ETF "
    },
    {
      "symbol": "FUV",
      "name": "Arcimoto Inc"
    },
    {
      "symbol": "FV",
      "name": "FIRST TRUST DORSEY WRIGHT FOCUS 5 ETF "
    },
    {
      "symbol": "FVAL",
      "name": "FIDELITY VALUE FACTOR ETF "
    },
    {
      "symbol": "FVC",
      "name": "FIRST TRUST DORSEY WRIGHT DYNAMIC FOCUS 5 ETF "
    },
    {
      "symbol": "FVCB",
      "name": "FVCBankcorp Inc"
    },
    {
      "symbol": "FVD",
      "name": "FIRST TRUST VALUE LINE DIVIDEND INDEX FUND "
    },
    {
      "symbol": "FVRR",
      "name": "Fiverr International Ltd"
    },
    {
      "symbol": "FWBI",
      "name": "First Wave BioPharma Inc"
    },
    {
      "symbol": "FWD",
      "name": "AB DISRUPTORS ETF "
    },
    {
      "symbol": "FWONA",
      "name": "Liberty Media Corp (New Liberty Formula One) Series A"
    },
    {
      "symbol": "FWONK",
      "name": "Liberty Media Corp (New Liberty Formula One) Series C"
    },
    {
      "symbol": "FWP"
    },
    {
      "symbol": "FWRD",
      "name": "Forward Air Corp"
    },
    {
      "symbol": "FWRG",
      "name": "First Watch Restaurant Group Inc"
    },
    {
      "symbol": "FXA",
      "name": "Invesco CurrencyShares Australian Dollar Trust"
    },
    {
      "symbol": "FXB",
      "name": "Invesco CurrencyShares British Pound Sterling Trust"
    },
    {
      "symbol": "FXC",
      "name": "Invesco CurrencyShares Canadian Dollar Trust"
    },
    {
      "symbol": "FXCO",
      "name": "Financial Strategies Acquisition Corp - Class A"
    },
    {
      "symbol": "FXCOR",
      "name": "Financial Strategies Acquisition Corp"
    },
    {
      "symbol": "FXCOW",
      "name": "Financial Strategies Acquisition Corp - Warrants (31/03/2028)"
    },
    {
      "symbol": "FXD",
      "name": "FIRST TRUST CONSUMER DISCRETIONARY ALPHADEX FUND "
    },
    {
      "symbol": "FXE",
      "name": "Invesco CurrencyShares Euro Trust"
    },
    {
      "symbol": "FXED",
      "name": "SOUND ENHANCED FIXED INCOME ETF "
    },
    {
      "symbol": "FXF",
      "name": "Invesco CurrencyShares Swiss Franc Trust"
    },
    {
      "symbol": "FXG",
      "name": "First Trust Consumer Staples AlphaDEX Fund"
    },
    {
      "symbol": "FXH",
      "name": "FIRST TRUST HEALTH CARE ALPHADEX FUND "
    },
    {
      "symbol": "FXI",
      "name": "ISHARES CHINA LARGE-CAP ETF "
    },
    {
      "symbol": "FXL",
      "name": "FIRST TRUST TECHNOLOGY ALPHADEX FUND "
    },
    {
      "symbol": "FXN",
      "name": "FIRST TRUST ENERGY ALPHADEX FUND "
    },
    {
      "symbol": "FXNC",
      "name": "First National Corp (Strasburg VA)"
    },
    {
      "symbol": "FXO",
      "name": "FIRST TRUST FINANCIALS ALPHADEX FUND "
    },
    {
      "symbol": "FXP",
      "name": "ProShares UltraShort FTSE China 50 -2x Shares"
    },
    {
      "symbol": "FXR",
      "name": "FIRST TRUST INDUSTRIALS/PRODUCER DURABLES ALPHADEX FUND "
    },
    {
      "symbol": "FXU",
      "name": "FIRST TRUST UTILITIES ALPHADEX FUND "
    },
    {
      "symbol": "FXY",
      "name": "Invesco CurrencyShares Japanese Yen Trust"
    },
    {
      "symbol": "FXZ",
      "name": "FIRST TRUST MATERIALS ALPHADEX FUND "
    },
    {
      "symbol": "FYBR",
      "name": "Frontier Communications Parent Inc"
    },
    {
      "symbol": "FYC",
      "name": "FIRST TRUST SMALL CAP GROWTH ALPHADEX FUND "
    },
    {
      "symbol": "FYEE",
      "name": "Fidelity Yield Enhanced Equity ETF"
    },
    {
      "symbol": "FYLD",
      "name": "Cambria Foreign Shareholder Yield ETF"
    },
    {
      "symbol": "FYLG",
      "name": "GLOBAL X FINANCIALS COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "FYT",
      "name": "FIRST TRUST SMALL CAP VALUE ALPHADEX FUND "
    },
    {
      "symbol": "FYX",
      "name": "FIRST TRUST SMALL CAP CORE ALPHADEX FUND "
    },
    {
      "symbol": "G",
      "name": "Genpact Ltd"
    },
    {
      "symbol": "GAA",
      "name": "Cambria Global Asset Allocation ETF"
    },
    {
      "symbol": "GAB",
      "name": "Gabelli Equity Trust Inc"
    },
    {
      "symbol": "GAB-P-G",
      "name": "Gabelli Equity Trust Inc"
    },
    {
      "symbol": "GAB-P-H",
      "name": "Gabelli Equity Trust Inc"
    },
    {
      "symbol": "GAB-P-K",
      "name": "Gabelli Equity Trust Inc"
    },
    {
      "symbol": "GABC",
      "name": "German American Bancorp Inc"
    },
    {
      "symbol": "GABF",
      "name": "GABELLI FINANCIAL SERVICES OPPORTUNITIES ETF "
    },
    {
      "symbol": "GAIA",
      "name": "Gaia Inc - Class A"
    },
    {
      "symbol": "GAIN",
      "name": "Gladstone Investment Corporation"
    },
    {
      "symbol": "GAINL",
      "name": "Gladstone Investment Corporation"
    },
    {
      "symbol": "GAINN",
      "name": "Gladstone Investment Corporation"
    },
    {
      "symbol": "GAINZ",
      "name": "Gladstone Investment Corporation"
    },
    {
      "symbol": "GAL",
      "name": "SPDR SSGA GLOBAL ALLOCATION ETF "
    },
    {
      "symbol": "GALT",
      "name": "Galectin Therapeutics Inc"
    },
    {
      "symbol": "GAM",
      "name": "General American Investors Co. Inc"
    },
    {
      "symbol": "GAM-P-B",
      "name": "General American Investors Co. Inc"
    },
    {
      "symbol": "GAMB",
      "name": "Gambling.com Group Ltd"
    },
    {
      "symbol": "GAMC",
      "name": "Golden Arrow Merger Corp - Class A"
    },
    {
      "symbol": "GAMCU",
      "name": "Golden Arrow Merger Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "GAMCW",
      "name": "Golden Arrow Merger Corp - Warrants (31/07/2026)"
    },
    {
      "symbol": "GAME",
      "name": "GameSquare Holdings Inc"
    },
    {
      "symbol": "GAMR",
      "name": "Amplify Video Game Tech ETF"
    },
    {
      "symbol": "GAN",
      "name": "GAN Ltd"
    },
    {
      "symbol": "GANX",
      "name": "Gain Therapeutics Inc"
    },
    {
      "symbol": "GAPR",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - APRIL "
    },
    {
      "symbol": "GAQ",
      "name": "Generation Asia I Acquisition Ltd - Class A"
    },
    {
      "symbol": "GASL",
      "name": "DIREXION DAILY NATURAL GAS RELATED BULL 3X SHARES "
    },
    {
      "symbol": "GASS",
      "name": "StealthGas Inc"
    },
    {
      "symbol": "GAST",
      "name": "GABELLI AUTOMATION ETF "
    },
    {
      "symbol": "GATE",
      "name": "Marblegate Acquisition Corp - Class A"
    },
    {
      "symbol": "GATEU",
      "name": "Marblegate Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "GATEW",
      "name": "Marblegate Acquisition Corp - Warrants (31/08/2026)"
    },
    {
      "symbol": "GATO",
      "name": "Gatos Silver Inc"
    },
    {
      "symbol": "GATX",
      "name": "GATX Corp"
    },
    {
      "symbol": "GAU",
      "name": "Galiano Gold Inc"
    },
    {
      "symbol": "GAUG",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - AUGUST "
    },
    {
      "symbol": "GB",
      "name": "Global Blue Group Holding AG"
    },
    {
      "symbol": "GB-WS",
      "name": "Global Blue Group Holding AG - Warrants (28/08/2025)"
    },
    {
      "symbol": "GBAB",
      "name": "Guggenheim Taxbl Muni Bnd & Invtmnt Grd Debt Trst Com Shrs Of benf Int"
    },
    {
      "symbol": "GBBK",
      "name": "Global Blockchain Acquisition Corp - Class A"
    },
    {
      "symbol": "GBBKR",
      "name": "Global Blockchain Acquisition Corp"
    },
    {
      "symbol": "GBBKW",
      "name": "Global Blockchain Acquisition Corp - Warrants (09/05/2027)"
    },
    {
      "symbol": "GBCI",
      "name": "Glacier Bancorp Inc"
    },
    {
      "symbol": "GBDC",
      "name": "Golub Capital BDC Inc"
    },
    {
      "symbol": "GBF",
      "name": "iShares Barclays Government/Credit Bond Fund"
    },
    {
      "symbol": "GBIL",
      "name": "GOLDMAN SACHS ACCESS TREASURY 0-1 YEAR ETF "
    },
    {
      "symbol": "GBIO",
      "name": "Generation Bio Company"
    },
    {
      "symbol": "GBLD",
      "name": "Invesco MSCI Green Building ETF"
    },
    {
      "symbol": "GBLI",
      "name": "Global Indemnity Group LLC - Class A"
    },
    {
      "symbol": "GBNY",
      "name": "Generations Bancorp NY Inc"
    },
    {
      "symbol": "GBR",
      "name": "New Concept Energy Inc"
    },
    {
      "symbol": "GBRG",
      "name": "SunCar Technology Group Inc"
    },
    {
      "symbol": "GBTC",
      "name": "Grayscale Investments LLC"
    },
    {
      "symbol": "GBTG",
      "name": "Global Business Travel Group Inc - Class A"
    },
    {
      "symbol": "GBUY",
      "name": "GOLDMAN SACHS FUTURE CONSUMER EQUITY ETF "
    },
    {
      "symbol": "GBX",
      "name": "Greenbrier Cos. Inc"
    },
    {
      "symbol": "GCAD",
      "name": "GABELLI COMMERCIAL AEROSPACE AND DEFENSE FUND "
    },
    {
      "symbol": "GCBC",
      "name": "Greene County Bancorp Inc"
    },
    {
      "symbol": "GCC",
      "name": "WISDOMTREE ENHANCED COMMODITY STRATEGY FUND "
    },
    {
      "symbol": "GCI",
      "name": "Gannett Co Inc"
    },
    {
      "symbol": "GCLN",
      "name": "GOLDMAN SACHS BLOOMBERG CLEAN ENERGY EQUITY ETF "
    },
    {
      "symbol": "GCMG",
      "name": "GCM Grosvenor Inc - Class A"
    },
    {
      "symbol": "GCMGW",
      "name": "GCM Grosvenor Inc - Warrants (17/11/2025)"
    },
    {
      "symbol": "GCO",
      "name": "Genesco Inc"
    },
    {
      "symbol": "GCOR",
      "name": "GOLDMAN SACHS ACCESS U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "GCOW",
      "name": "Pacer Global Cash Cows Dividend ETF"
    },
    {
      "symbol": "GCT",
      "name": "GigaCloud Technology Inc - Class A"
    },
    {
      "symbol": "GCTK",
      "name": "GlucoTrack Inc"
    },
    {
      "symbol": "GCTS",
      "name": "GCT Semiconductor Holding Inc"
    },
    {
      "symbol": "GCTS-WS",
      "name": "GCT Semiconductor Holding Inc Wt Exp"
    },
    {
      "symbol": "GCTSW",
      "name": "GCT Semiconductor Holding Inc - Warrants (03/01/2029)"
    },
    {
      "symbol": "GCV",
      "name": "Gabelli Convertible and Income Securities Fund Inc"
    },
    {
      "symbol": "GD",
      "name": "General Dynamics Corp"
    },
    {
      "symbol": "GDC",
      "name": "GD Culture Group Ltd"
    },
    {
      "symbol": "GDDY",
      "name": "Godaddy Inc - Class A"
    },
    {
      "symbol": "GDE",
      "name": "WISDOMTREE EFFICIENT GOLD PLUS EQUITY STRATEGY FUND "
    },
    {
      "symbol": "GDEC",
      "name": "FT Cboe Vest U.S. Equity Moderate Buffer ETF - December"
    },
    {
      "symbol": "GDEF",
      "name": "GOLDMAN SACHS DEFENSIVE EQUITY ETF "
    },
    {
      "symbol": "GDEN",
      "name": "Golden Entertainment Inc"
    },
    {
      "symbol": "GDEV",
      "name": "Nexters Inc"
    },
    {
      "symbol": "GDEVW",
      "name": "Nexters Inc - Warrants (26/08/2026)"
    },
    {
      "symbol": "GDHG",
      "name": "Golden Heaven Group Holdings Ltd - Class A"
    },
    {
      "symbol": "GDIV",
      "name": "HARBOR DIVIDEND GROWTH LEADERS ETF "
    },
    {
      "symbol": "GDL",
      "name": "GDL Fund"
    },
    {
      "symbol": "GDL-P-C",
      "name": "GDL Fund"
    },
    {
      "symbol": "GDMA",
      "name": "GADSDEN DYNAMIC MULTI-ASSET ETF "
    },
    {
      "symbol": "GDMN",
      "name": "WISDOMTREE EFFICIENT GOLD PLUS GOLD MINERS STRATEGY FUND "
    },
    {
      "symbol": "GDO",
      "name": "Western Asset Global Corporate Defined Opportunity Fund Inc"
    },
    {
      "symbol": "GDOC",
      "name": "GOLDMAN SACHS FUTURE HEALTH CARE EQUITY ETF "
    },
    {
      "symbol": "GDOT",
      "name": "Green Dot Corp - Class A"
    },
    {
      "symbol": "GDRX",
      "name": "GoodRx Holdings Inc - Class A"
    },
    {
      "symbol": "GDS",
      "name": "GDS Holdings Ltd"
    },
    {
      "symbol": "GDST",
      "name": "Goldenstone Acquisition Ltd"
    },
    {
      "symbol": "GDSTR",
      "name": "Goldenstone Acquisition Ltd"
    },
    {
      "symbol": "GDSTU",
      "name": "Goldenstone Acquisition Ltd - Units (1 Ord 1 War & 1 Rts)"
    },
    {
      "symbol": "GDSTW",
      "name": "Goldenstone Acquisition Ltd - Warrants (15/07/2026)"
    },
    {
      "symbol": "GDTC",
      "name": "CytoMed Therapeutics Ltd"
    },
    {
      "symbol": "GDV",
      "name": "Gabelli Dividend & Income Trust"
    },
    {
      "symbol": "GDV-P-H",
      "name": "Gabelli Dividend & Income Trust"
    },
    {
      "symbol": "GDV-P-K",
      "name": "Gabelli Dividend & Income Trust"
    },
    {
      "symbol": "GDVD",
      "name": "R3 Global Dividend Growth ETF"
    },
    {
      "symbol": "GDX",
      "name": "VANECK GOLD MINERS ETF "
    },
    {
      "symbol": "GDXD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "GDXJ",
      "name": "VANECK JUNIOR GOLD MINERS ETF "
    },
    {
      "symbol": "GDXU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "GDYN",
      "name": "Grid Dynamics Holdings Inc - Class A"
    },
    {
      "symbol": "GE",
      "name": "General Electric Company"
    },
    {
      "symbol": "GECC",
      "name": "Great Elm Capital Corp"
    },
    {
      "symbol": "GECCI",
      "name": "Great Elm Capital Corp"
    },
    {
      "symbol": "GECCM",
      "name": "Great Elm Capital Corp"
    },
    {
      "symbol": "GECCO",
      "name": "Great Elm Capital Corp"
    },
    {
      "symbol": "GECCZ",
      "name": "Great Elm Capital Corp"
    },
    {
      "symbol": "GEF",
      "name": "Greif Inc - Class A"
    },
    {
      "symbol": "GEF-B",
      "name": "Greif Inc - Class B"
    },
    {
      "symbol": "GEG",
      "name": "Great Elm Group Inc"
    },
    {
      "symbol": "GEGGL",
      "name": "Great Elm Group Inc"
    },
    {
      "symbol": "GEHC",
      "name": "GE HealthCare Technologies Inc"
    },
    {
      "symbol": "GEHCV",
      "name": "GE HealthCare Technologies Inc"
    },
    {
      "symbol": "GEL",
      "name": "Genesis Energy L.P."
    },
    {
      "symbol": "GEM",
      "name": "Goldman Sachs ActiveBeta Emerging Markets Equity ETF"
    },
    {
      "symbol": "GEMD",
      "name": "GOLDMAN SACHS ACCESS EMERGING MARKETS USD BOND ETF "
    },
    {
      "symbol": "GEN",
      "name": "Gen Digital Inc"
    },
    {
      "symbol": "GENC",
      "name": "Gencor Industries Inc"
    },
    {
      "symbol": "GENE",
      "name": "Genetic Technologies Ltd"
    },
    {
      "symbol": "GENI",
      "name": "Genius Sports Ltd"
    },
    {
      "symbol": "GENK",
      "name": "GEN Restaurant Group Inc - Class A"
    },
    {
      "symbol": "GENQU",
      "name": "ESGL Holdings Ltd - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "GENY",
      "name": "Principal Millennial GlobalGrowth ETF"
    },
    {
      "symbol": "GEO",
      "name": "Geo Group Inc"
    },
    {
      "symbol": "GEOS",
      "name": "Geospace Technologies Corp"
    },
    {
      "symbol": "GER",
      "name": "Goldman Sachs MLP and Energy Renaissance Fund"
    },
    {
      "symbol": "GERM",
      "name": "ETFMG Treatments Testing and Advancements ETF"
    },
    {
      "symbol": "GERN",
      "name": "Geron Corp"
    },
    {
      "symbol": "GES",
      "name": "Guess Inc"
    },
    {
      "symbol": "GET",
      "name": "GetnetAdquirencia e Servicos para Meios de Pagamento S.A. - Instituica"
    },
    {
      "symbol": "GETR",
      "name": "Getaround Inc - Class A"
    },
    {
      "symbol": "GETR-WS",
      "name": "Getaround Inc Warrants each whole warrant exercisable for one share of Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "GETY",
      "name": "Getty Images Holdings Inc - Class A"
    },
    {
      "symbol": "GEV",
      "name": "GE Vernova LLC"
    },
    {
      "symbol": "GEV-W",
      "name": "GE Vernova Inc WhenIssued"
    },
    {
      "symbol": "GEVO",
      "name": "Gevo Inc"
    },
    {
      "symbol": "GF",
      "name": "New Germany Fund Inc"
    },
    {
      "symbol": "GFAI",
      "name": "Guardforce AI Co Ltd"
    },
    {
      "symbol": "GFAIW",
      "name": "Guardforce AI Co Ltd - Warrants (01/09/2026)"
    },
    {
      "symbol": "GFEB",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - FEBRUARY "
    },
    {
      "symbol": "GFF",
      "name": "Griffon Corp"
    },
    {
      "symbol": "GFGF",
      "name": "GURU FAVORITE STOCKS ETF "
    },
    {
      "symbol": "GFI",
      "name": "Gold Fields Ltd"
    },
    {
      "symbol": "GFL",
      "name": "GFL Environmental Inc (Sub Voting)"
    },
    {
      "symbol": "GFOF",
      "name": "GRAYSCALE FUTURE OF FINANCE ETF "
    },
    {
      "symbol": "GFR",
      "name": "Greenfire Resources Ltd"
    },
    {
      "symbol": "GFS",
      "name": "GlobalFoundries Inc"
    },
    {
      "symbol": "GGAAF",
      "name": "Genesis Growth Tech Acquisition Corp - Class A"
    },
    {
      "symbol": "GGAL",
      "name": "Grupo Financiero Galicia"
    },
    {
      "symbol": "GGAUF",
      "name": "Genesis Growth Tech Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "GGAWF",
      "name": "Genesis Growth Tech Acquisition Corp - Warrants (08/12/2026)"
    },
    {
      "symbol": "GGB",
      "name": "Gerdau S.A."
    },
    {
      "symbol": "GGG",
      "name": "Graco Inc"
    },
    {
      "symbol": "GGLL",
      "name": "DIREXION DAILY GOOGL BULL 1.5X SHARES "
    },
    {
      "symbol": "GGLS",
      "name": "DIREXION DAILY GOOGL BEAR 1X SHARES "
    },
    {
      "symbol": "GGM",
      "name": "GGM Macro Alignment ETF"
    },
    {
      "symbol": "GGME",
      "name": "Invesco Next Gen Media and Gaming ETF"
    },
    {
      "symbol": "GGN",
      "name": "GAMCO Global Gold Natural Resources & Income Trust"
    },
    {
      "symbol": "GGN-P-B",
      "name": "GAMCO Global Gold Natural Resources & Income Trust"
    },
    {
      "symbol": "GGR",
      "name": "Gogoro Inc - Class A"
    },
    {
      "symbol": "GGROW",
      "name": "Gogoro Inc - Warrants (04/04/2027)"
    },
    {
      "symbol": "GGRW",
      "name": "GABELLI GROWTH INNOVATORS ETF "
    },
    {
      "symbol": "GGT",
      "name": "Gabelli Multimedia Trust Inc"
    },
    {
      "symbol": "GGT-P-E",
      "name": "Gabelli Multimedia Trust Inc"
    },
    {
      "symbol": "GGT-P-G",
      "name": "Gabelli Multimedia Trust Inc"
    },
    {
      "symbol": "GGUS",
      "name": "Goldman Sachs MarketBeta Russell 1000 Growth Equity ETF"
    },
    {
      "symbol": "GGZ",
      "name": "Gabelli Global Small and Mid Cap Value Trust"
    },
    {
      "symbol": "GH",
      "name": "Guardant Health Inc"
    },
    {
      "symbol": "GHC",
      "name": "Graham Holdings Co. - Class B"
    },
    {
      "symbol": "GHG",
      "name": "GreenTree Hospitality Group Ltd"
    },
    {
      "symbol": "GHI",
      "name": "Greystone Housing Impact Investors LP"
    },
    {
      "symbol": "GHIX",
      "name": "Gores Holdings IX Inc - Class A"
    },
    {
      "symbol": "GHIXU",
      "name": "Gores Holdings IX Inc - Units (1 Ord Class A & 1/3 War)"
    },
    {
      "symbol": "GHIXW",
      "name": "Gores Holdings IX Inc - Warrants (31/01/2027)"
    },
    {
      "symbol": "GHLD",
      "name": "Guild Holdings Co - Class A"
    },
    {
      "symbol": "GHM",
      "name": "Graham Corp"
    },
    {
      "symbol": "GHRS",
      "name": "GH Research PLC"
    },
    {
      "symbol": "GHSI",
      "name": "Guardion Health Sciences Inc"
    },
    {
      "symbol": "GHTA",
      "name": "GOOSE HOLLOW TACTICAL ALLOCATION ETF "
    },
    {
      "symbol": "GHY",
      "name": "PGIM Global High Yield Fund Inc"
    },
    {
      "symbol": "GHYB",
      "name": "GOLDMAN SACHS ACCESS HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "GHYG",
      "name": "ISHARES US & INTL HIGH YIELD CORP BOND ETF "
    },
    {
      "symbol": "GIACU",
      "name": "Gesher I Acquisition Corp - Units (1 Ord Share & 1/2 War)"
    },
    {
      "symbol": "GIB",
      "name": "CGI Inc - Class A"
    },
    {
      "symbol": "GIC",
      "name": "Global Industrial Company"
    },
    {
      "symbol": "GIFI",
      "name": "Gulf Island Fabrication Inc"
    },
    {
      "symbol": "GIGB",
      "name": "GOLDMAN SACHS ACCESS INVESTMENT GRADE CORPORATE BOND ETF "
    },
    {
      "symbol": "GIGM",
      "name": "Gigamedia"
    },
    {
      "symbol": "GII",
      "name": "SPDR(R) S&P GLOBAL INFRASTRUCTURE ETF "
    },
    {
      "symbol": "GIII",
      "name": "G-III Apparel Group Ltd"
    },
    {
      "symbol": "GIL",
      "name": "Gildan Activewear Inc"
    },
    {
      "symbol": "GILD",
      "name": "Gilead Sciences Inc"
    },
    {
      "symbol": "GILT",
      "name": "Gilat Satellite Networks"
    },
    {
      "symbol": "GINN",
      "name": "GOLDMAN SACHS INNOVATE EQUITY ETF "
    },
    {
      "symbol": "GINX",
      "name": "SGI Enhanced Global Income ETF"
    },
    {
      "symbol": "GIPR",
      "name": "Generation Income Properties Inc"
    },
    {
      "symbol": "GIPRW",
      "name": "Generation Income Properties Inc - Warrants (03/09/2026)"
    },
    {
      "symbol": "GIS",
      "name": "General Mills Inc"
    },
    {
      "symbol": "GIW",
      "name": "GigInternational1 Inc"
    },
    {
      "symbol": "GIWWU",
      "name": "GigInternational1 Inc - Units (1 Ord Share & 1/2 War)"
    },
    {
      "symbol": "GIWWW",
      "name": "GigInternational1 Inc - Warrants (19/04/2026)"
    },
    {
      "symbol": "GJAN",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - JANUARY "
    },
    {
      "symbol": "GJH",
      "name": "Synthetic FixedIncome Securities Inc 6375 STRATS Cl A1"
    },
    {
      "symbol": "GJO",
      "name": 37987.00011574074
    },
    {
      "symbol": "GJP",
      "name": "Synthetic FixedIncome Securities Inc Synthetic FixedIncome Securities Inc on behalf of STRATS SM Trust for Dominion Resources Inc Securities Series 2"
    },
    {
      "symbol": "GJR",
      "name": "Synthetic FixedIncome Securities Inc STRATS Trust for ProcterGamble Securities Series 20061"
    },
    {
      "symbol": "GJS",
      "name": "Synthetic Fixed-Income Securities Inc"
    },
    {
      "symbol": "GJT",
      "name": "Synthetic FixedIncome Securities Inc Synthetic FixedIncome Securities Inc Floating Rate Structured Repackaged AssetBacked Trust Securities Certificates"
    },
    {
      "symbol": "GJUL",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - JULY "
    },
    {
      "symbol": "GJUN",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - JUNE "
    },
    {
      "symbol": "GK",
      "name": "ADVISORSHARES GERBER KAWASAKI ETF "
    },
    {
      "symbol": "GKOS",
      "name": "Glaukos Corporation"
    },
    {
      "symbol": "GL",
      "name": "Globe Life Inc"
    },
    {
      "symbol": "GL-P-D",
      "name": "Globe Life Inc"
    },
    {
      "symbol": "GLAC",
      "name": "Global Lights Acquisition Corp"
    },
    {
      "symbol": "GLACR",
      "name": "Global Lights Acquisition Corp"
    },
    {
      "symbol": "GLACU",
      "name": "Global Lights Acquisition Corp - Units (1 1 Rights)"
    },
    {
      "symbol": "GLAD",
      "name": "Gladstone Capital Corp"
    },
    {
      "symbol": "GLADZ",
      "name": "Gladstone Capital Corp"
    },
    {
      "symbol": "GLBE",
      "name": "Global E Online Ltd"
    },
    {
      "symbol": "GLBL",
      "name": "Cartesian Growth Corp - Class A"
    },
    {
      "symbol": "GLBLW",
      "name": "Cartesian Growth Corp - Warrants (26/02/2028)"
    },
    {
      "symbol": "GLBS",
      "name": "Globus Maritime Ltd"
    },
    {
      "symbol": "GLBZ",
      "name": "Glen Burnie Bancorp"
    },
    {
      "symbol": "GLD",
      "name": "SPDR Gold Shares ETF"
    },
    {
      "symbol": "GLDD",
      "name": "Great Lakes Dredge & Dock Corporation"
    },
    {
      "symbol": "GLDG",
      "name": "GoldMining Inc"
    },
    {
      "symbol": "GLDI",
      "name": "Credit Suisse AG Nassau Branch"
    },
    {
      "symbol": "GLDM",
      "name": "SPDR Gold MiniShares Trust"
    },
    {
      "symbol": "GLDX",
      "name": "USCF GOLD STRATEGY PLUS INCOME FUND "
    },
    {
      "symbol": "GLIN",
      "name": "VANECK INDIA GROWTH LEADERS ETF "
    },
    {
      "symbol": "GLL",
      "name": "ProShares UltraShort Gold -2x Shares"
    },
    {
      "symbol": "GLLI",
      "name": "Globalink Investment Inc"
    },
    {
      "symbol": "GLLIR",
      "name": "Globalink Investment Inc"
    },
    {
      "symbol": "GLLIU",
      "name": "Globalink Investment Inc - Units (1 Ord 1 Rts & 1 War)"
    },
    {
      "symbol": "GLLIW",
      "name": "Globalink Investment Inc - Warrants(06/12/2026)"
    },
    {
      "symbol": "GLMD",
      "name": "Galmed Pharmaceuticals Ltd"
    },
    {
      "symbol": "GLNG",
      "name": "Golar Lng"
    },
    {
      "symbol": "GLO",
      "name": "Clough Global Opportunities Fund."
    },
    {
      "symbol": "GLOB",
      "name": "Globant S.A."
    },
    {
      "symbol": "GLOF",
      "name": "ISHARES GLOBAL EQUITY FACTOR ETF "
    },
    {
      "symbol": "GLOG-P-A",
      "name": "GasLog Ltd"
    },
    {
      "symbol": "GLOP-P-A",
      "name": "Gaslog Partners LP"
    },
    {
      "symbol": "GLOP-P-B",
      "name": "Gaslog Partners LP"
    },
    {
      "symbol": "GLOP-P-C",
      "name": "Gaslog Partners LP"
    },
    {
      "symbol": "GLOV",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) WORLD LOW VOL PLUS EQUITY ETF "
    },
    {
      "symbol": "GLP",
      "name": "Global Partners LP"
    },
    {
      "symbol": "GLP-P-B",
      "name": "Global Partners LP"
    },
    {
      "symbol": "GLPG",
      "name": "Galapagos NV"
    },
    {
      "symbol": "GLPI",
      "name": "Gaming and Leisure Properties Inc"
    },
    {
      "symbol": "GLQ",
      "name": "Clough Global Equity Fund"
    },
    {
      "symbol": "GLRE",
      "name": "Greenlight Capital Re Ltd - Class A"
    },
    {
      "symbol": "GLRY",
      "name": "INSPIRE MOMENTUM ETF "
    },
    {
      "symbol": "GLSI",
      "name": "Greenwich LifeSciences Inc"
    },
    {
      "symbol": "GLST",
      "name": "Global Star Acquisition Inc - Class A"
    },
    {
      "symbol": "GLSTR",
      "name": "Global Star Acquisition Inc"
    },
    {
      "symbol": "GLSTU",
      "name": "Global Star Acquisition Inc - Units (1 Ord Class A 1 War & 1 Right)"
    },
    {
      "symbol": "GLSTW",
      "name": "Global Star Acquisition Inc - Warrants(15/07/2028)"
    },
    {
      "symbol": "GLT",
      "name": "Glatfelter Corporation"
    },
    {
      "symbol": "GLTA",
      "name": "Galata Acquisition Corp - Class A"
    },
    {
      "symbol": "GLTA-U",
      "name": "Galata Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "GLTO",
      "name": "Galecto Inc"
    },
    {
      "symbol": "GLTR",
      "name": "abrdn Physical Precious Metals Basket Shares ETF"
    },
    {
      "symbol": "GLU",
      "name": "Gabelli Global Utility & Income Trust."
    },
    {
      "symbol": "GLU-P-A",
      "name": "Gabelli Global Utility & Income Trust."
    },
    {
      "symbol": "GLU-P-B",
      "name": "Gabelli Global Utility & Income Trust."
    },
    {
      "symbol": "GLUE",
      "name": "Monte Rosa Therapeutics Inc"
    },
    {
      "symbol": "GLV",
      "name": "Clough Global Dividend and Income Fund"
    },
    {
      "symbol": "GLW",
      "name": "Corning Inc"
    },
    {
      "symbol": "GLYC",
      "name": "GlycoMimetics Inc"
    },
    {
      "symbol": "GM",
      "name": "General Motors Company"
    },
    {
      "symbol": "GMAB",
      "name": "Genmab"
    },
    {
      "symbol": "GMAR",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - MARCH "
    },
    {
      "symbol": "GMAY",
      "name": "FT VEST U.S. EQUITY MODERATE BUFFER ETF - MAY "
    },
    {
      "symbol": "GME",
      "name": "Gamestop Corporation - Class A"
    },
    {
      "symbol": "GMED",
      "name": "Globus Medical Inc - Class A"
    },
    {
      "symbol": "GMET",
      "name": "VANECK GREEN METALS ETF "
    },
    {
      "symbol": "GMF",
      "name": "SPDR(R) S&P(R) EMERGING ASIA PACIFIC ETF "
    },
    {
      "symbol": "GMFI",
      "name": "Aetherium Acquisition Corp - Class A"
    },
    {
      "symbol": "GMFIU",
      "name": "Aetherium Acquisition Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "GMFIW",
      "name": "Aetherium Acquisition Corp - Warrants (21/12/2026)"
    },
    {
      "symbol": "GMGI",
      "name": "Golden Matrix Group Inc"
    },
    {
      "symbol": "GMGT",
      "name": "Gaming Technologies Inc"
    },
    {
      "symbol": "GMM",
      "name": "Global Mofy Metaverse Ltd"
    },
    {
      "symbol": "GMOM",
      "name": "Cambria Global Momentum ETF"
    },
    {
      "symbol": "GMRE",
      "name": "Global Medical REIT Inc"
    },
    {
      "symbol": "GMRE-P-A",
      "name": "Global Medical REIT Inc"
    },
    {
      "symbol": "GMS",
      "name": "GMS Inc"
    },
    {
      "symbol": "GMUN",
      "name": "GOLDMAN SACHS COMMUNITY MUNICIPAL BOND ETF "
    },
    {
      "symbol": "GNE",
      "name": "Genie Energy Ltd - Class B"
    },
    {
      "symbol": "GNFT",
      "name": "Genfit"
    },
    {
      "symbol": "GNK",
      "name": "Genco Shipping & Trading Ltd"
    },
    {
      "symbol": "GNL",
      "name": "Global Net Lease Inc"
    },
    {
      "symbol": "GNL-P-A",
      "name": "Global Net Lease Inc"
    },
    {
      "symbol": "GNL-P-B",
      "name": "Global Net Lease Inc"
    },
    {
      "symbol": "GNL-P-D",
      "name": "Global Net Lease Inc"
    },
    {
      "symbol": "GNL-P-E",
      "name": "Global Net Lease Inc"
    },
    {
      "symbol": "GNLN",
      "name": "Greenlane Holdings Inc - Class A"
    },
    {
      "symbol": "GNLX",
      "name": "Genelux Corp"
    },
    {
      "symbol": "GNMA",
      "name": "ISHARES GNMA BOND ETF "
    },
    {
      "symbol": "GNOM",
      "name": "GLOBAL X GENOMICS & BIOTECHNOLOGY ETF "
    },
    {
      "symbol": "GNPX",
      "name": "Genprex Inc"
    },
    {
      "symbol": "GNR",
      "name": "SPDR(R) S&P(R) GLOBAL NATURAL RESOURCES ETF "
    },
    {
      "symbol": "GNRC",
      "name": "Generac Holdings Inc"
    },
    {
      "symbol": "GNS",
      "name": "Genius Group Ltd"
    },
    {
      "symbol": "GNSS",
      "name": "Genasys Inc"
    },
    {
      "symbol": "GNT",
      "name": "GAMCO Natural Resources Gold & Income Trust"
    },
    {
      "symbol": "GNT-P-A",
      "name": "GAMCO Natural Resources Gold & Income Trust"
    },
    {
      "symbol": "GNTA",
      "name": "Genenta Science SpA"
    },
    {
      "symbol": "GNTX",
      "name": "Gentex Corp"
    },
    {
      "symbol": "GNTY",
      "name": "Guaranty Bancshares Inc (TX)"
    },
    {
      "symbol": "GNW",
      "name": "Genworth Financial Inc - Class A"
    },
    {
      "symbol": "GO",
      "name": "Grocery Outlet Holding Corp"
    },
    {
      "symbol": "GOAU",
      "name": "U.S. GLOBAL GO GOLD AND PRECIOUS METAL MINERS ETF "
    },
    {
      "symbol": "GOCO",
      "name": "GoHealth Inc - Class A"
    },
    {
      "symbol": "GOCT",
      "name": "FT Cboe Vest U.S. Equity Moderate Buffer ETF - October"
    },
    {
      "symbol": "GODN",
      "name": "Golden Star Acquisition Corp"
    },
    {
      "symbol": "GODNR",
      "name": "Golden Star Acquisition Corp"
    },
    {
      "symbol": "GODNU",
      "name": "Golden Star Acquisition Corp - Units (1 Ord & 1 Right )"
    },
    {
      "symbol": "GOEV",
      "name": "Canoo Inc - Class A"
    },
    {
      "symbol": "GOEVW",
      "name": "Canoo Inc - Warrants (05/09/2025)"
    },
    {
      "symbol": "GOEX",
      "name": "GLOBAL X GOLD EXPLORERS ETF "
    },
    {
      "symbol": "GOF",
      "name": "Guggenheim Strategic Opportunities Fund"
    },
    {
      "symbol": "GOGL",
      "name": "Golden Ocean Group Ltd"
    },
    {
      "symbol": "GOGO",
      "name": "Gogo Inc"
    },
    {
      "symbol": "GOLD",
      "name": "Barrick Gold Corp"
    },
    {
      "symbol": "GOLF",
      "name": "Acushnet Holdings Corp"
    },
    {
      "symbol": "GOLLQ",
      "name": "Gol Linhas Aereas Inteligentes S.A."
    },
    {
      "symbol": "GOLY",
      "name": "Strategy Shares Gold-Hedged Bond ETF"
    },
    {
      "symbol": "GOOD",
      "name": "Gladstone Commercial Corp"
    },
    {
      "symbol": "GOODN",
      "name": "Gladstone Commercial Corp"
    },
    {
      "symbol": "GOODO",
      "name": "Gladstone Commercial Corp"
    },
    {
      "symbol": "GOOG",
      "name": "Alphabet Inc - Class C"
    },
    {
      "symbol": "GOOGL",
      "name": "Alphabet Inc - Class A"
    },
    {
      "symbol": "GOOP",
      "name": "Kurv Yield Premium Strategy Google (GOOGL) ETF"
    },
    {
      "symbol": "GOOS",
      "name": "Canada Goose Holdings Inc (Subord Vot Shs)"
    },
    {
      "symbol": "GOOX",
      "name": "T-Rex 2X Long Alphabet Daily Target ETF"
    },
    {
      "symbol": "GOOY",
      "name": "YIELDMAX GOOGL OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "GORO",
      "name": "Gold Resource Corp"
    },
    {
      "symbol": "GORV",
      "name": "Lazydays Holdings Inc"
    },
    {
      "symbol": "GOSS",
      "name": "Gossamer Bio Inc"
    },
    {
      "symbol": "GOTU",
      "name": "Gaotu Techedu Inc"
    },
    {
      "symbol": "GOVI",
      "name": "INVESCO EQUAL WEIGHT 0-30 YEAR TREASURY ETF "
    },
    {
      "symbol": "GOVT",
      "name": "ISHARES U.S. TREASURY BOND ETF "
    },
    {
      "symbol": "GOVX",
      "name": "Geovax Labs Inc"
    },
    {
      "symbol": "GOVXW",
      "name": "Geovax Labs Inc - Warrants (01/01/2025)"
    },
    {
      "symbol": "GOVZ",
      "name": "iShares 25+ Year Treasury STRIPS Bond ETF"
    },
    {
      "symbol": "GP",
      "name": "GreenPower Motor Company Inc"
    },
    {
      "symbol": "GPAC",
      "name": "Global Partner Acquisition Corp II - Class A"
    },
    {
      "symbol": "GPACU",
      "name": "Global Partner Acquisition Corp II - Units (1 Ord Class A 1/6 War & 1 CVR )"
    },
    {
      "symbol": "GPACW",
      "name": "Global Partner Acquisition Corp II - Warrants (06/01/2026)"
    },
    {
      "symbol": "GPAK",
      "name": "Gamer Pakistan Inc"
    },
    {
      "symbol": "GPC",
      "name": "Genuine Parts Company"
    },
    {
      "symbol": "GPCR",
      "name": "Structure Therapeutics Inc"
    },
    {
      "symbol": "GPI",
      "name": "Group 1 Automotive Inc"
    },
    {
      "symbol": "GPIQ",
      "name": "GOLDMAN SACHS NASDAQ-100 CORE PREMIUM INCOME ETF "
    },
    {
      "symbol": "GPIX",
      "name": "GOLDMAN SACHS S&P 500 CORE PREMIUM INCOME ETF "
    },
    {
      "symbol": "GPJA",
      "name": "Georgia Power Company"
    },
    {
      "symbol": "GPK",
      "name": "Graphic Packaging Holding Company"
    },
    {
      "symbol": "GPMT",
      "name": "Granite Point Mortgage Trust Inc"
    },
    {
      "symbol": "GPMT-P-A",
      "name": "Granite Point Mortgage Trust Inc"
    },
    {
      "symbol": "GPN",
      "name": "Global Payments Inc"
    },
    {
      "symbol": "GPOR",
      "name": "Gulfport Energy Corp (New)"
    },
    {
      "symbol": "GPOW",
      "name": "GOLDMAN SACHS NORTH AMERICAN PIPELINES & POWER EQUITY ETF "
    },
    {
      "symbol": "GPRE",
      "name": "Green Plains Inc"
    },
    {
      "symbol": "GPRK",
      "name": "Geopark Ltd"
    },
    {
      "symbol": "GPRO",
      "name": "GoPro Inc - Class A"
    },
    {
      "symbol": "GPS",
      "name": "Gap Inc"
    },
    {
      "symbol": "GQI",
      "name": "Natixis Gateway Quality Income ETF"
    },
    {
      "symbol": "GQRE",
      "name": "FLEXSHARES GLOBAL QUALITY REAL ESTATE INDEX FUND "
    },
    {
      "symbol": "GRAB",
      "name": "Grab Holdings Ltd - Class A"
    },
    {
      "symbol": "GRABW",
      "name": "Grab Holdings Ltd - Warrants (01/12/2026)"
    },
    {
      "symbol": "GRBK",
      "name": "Green Brick Partners Inc"
    },
    {
      "symbol": "GRBK-P-A",
      "name": "Green Brick Partners Inc"
    },
    {
      "symbol": "GRC",
      "name": "Gorman-Rupp Company"
    },
    {
      "symbol": "GRCL",
      "name": "Gracell Biotechnologies Inc"
    },
    {
      "symbol": "GRDIW",
      "name": "Griid Infrastructure Inc - Warrants (01/01/9999)"
    },
    {
      "symbol": "GREE",
      "name": "Greenidge Generation Holdings Inc - Class A"
    },
    {
      "symbol": "GREEL",
      "name": "Greenidge Generation Holdings Inc"
    },
    {
      "symbol": "GREI",
      "name": "GOLDMAN SACHS FUTURE REAL ESTATE AND INFRASTRUCTURE EQUITY ETF "
    },
    {
      "symbol": "GREK",
      "name": "GLOBAL X MSCI GREECE ETF "
    },
    {
      "symbol": "GRF",
      "name": "Eagle Capital Growth Fund Inc"
    },
    {
      "symbol": "GRFS",
      "name": "Grifols SA"
    },
    {
      "symbol": "GRFX",
      "name": "Graphex Group Ltd American Depositary Shares each American Depositary Share representing 20"
    },
    {
      "symbol": "GRI",
      "name": "GRI Bio Inc"
    },
    {
      "symbol": "GRID",
      "name": "FIRST TRUST NASDAQ CLEAN EDGE SMART GRID INFRASTRUCTURE INDEX FUND "
    },
    {
      "symbol": "GRIN",
      "name": "Grindrod Shipping Holdings Ltd"
    },
    {
      "symbol": "GRMN",
      "name": "Garmin Ltd"
    },
    {
      "symbol": "GRN",
      "name": "iPath Series B Carbon ETN"
    },
    {
      "symbol": "GRNA",
      "name": "GreenLight Biosciences Inc"
    },
    {
      "symbol": "GRNAW",
      "name": "GreenLight Biosciences Holdings PBC - Warrants (30/09/2027)"
    },
    {
      "symbol": "GRNB",
      "name": "VanEck Green Bond ETF"
    },
    {
      "symbol": "GRND",
      "name": "Grindr Inc - Class A"
    },
    {
      "symbol": "GRND-WS",
      "name": "Grindr Inc Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "GRNQ",
      "name": "Greenpro Capital Corp"
    },
    {
      "symbol": "GRNT",
      "name": "Granite Ridge Resources Inc - Class A"
    },
    {
      "symbol": "GRNT-WS",
      "name": "Granite Ridge Resources Inc Warrants to purchase Common Stock each whole warrant exercisable for one share of common stock at an exercise price of 11.50 per s"
    },
    {
      "symbol": "GROM",
      "name": "Grom Social Enterprises Inc"
    },
    {
      "symbol": "GROMW",
      "name": "Grom Social Enterprises Inc - Warrants (17/06/2026)"
    },
    {
      "symbol": "GROV",
      "name": "Grove Collaborative Holdings Inc - Class A"
    },
    {
      "symbol": "GROW",
      "name": "U.S. Global Investors Inc - Class A"
    },
    {
      "symbol": "GROY",
      "name": "Gold Royalty Corp"
    },
    {
      "symbol": "GRP-U",
      "name": "Granite Real Estate Investment Trust - Units"
    },
    {
      "symbol": "GRPM",
      "name": "Invesco S&P MidCap 400 GARP ETF"
    },
    {
      "symbol": "GRPN",
      "name": "Groupon Inc"
    },
    {
      "symbol": "GRPZ",
      "name": "Invesco S&P SmallCap 600 GARP ETF"
    },
    {
      "symbol": "GRRR",
      "name": "Gorilla Technology Group Inc"
    },
    {
      "symbol": "GRRRW",
      "name": "Gorilla Technology Group Inc - Warrants (13/07/2027)"
    },
    {
      "symbol": "GRTS",
      "name": "Gritstone Bio Inc"
    },
    {
      "symbol": "GRTX",
      "name": "Galera Therapeutics Inc"
    },
    {
      "symbol": "GRVY",
      "name": "Gravity Co Ltd"
    },
    {
      "symbol": "GRWG",
      "name": "GrowGeneration Corp"
    },
    {
      "symbol": "GRX",
      "name": "Gabelli Healthcare & WellnessRx Trust"
    },
    {
      "symbol": "GRYP",
      "name": "Akerna Corp"
    },
    {
      "symbol": "GS",
      "name": "Goldman Sachs Group Inc"
    },
    {
      "symbol": "GS-P-A",
      "name": "Goldman Sachs Group Inc"
    },
    {
      "symbol": "GS-P-C",
      "name": "Goldman Sachs Group Inc"
    },
    {
      "symbol": "GS-P-D",
      "name": "Goldman Sachs Group Inc"
    },
    {
      "symbol": "GS-P-K",
      "name": "Goldman Sachs Group Inc"
    },
    {
      "symbol": "GSAT",
      "name": "Globalstar Inc"
    },
    {
      "symbol": "GSBC",
      "name": "Great Southern Bancorp Inc"
    },
    {
      "symbol": "GSBD",
      "name": "Goldman Sachs BDC Inc"
    },
    {
      "symbol": "GSC",
      "name": "GOLDMAN SACHS SMALL CAP CORE EQUITY ETF "
    },
    {
      "symbol": "GSDWW",
      "name": "Global Systems Dynamics Inc Wt Exp"
    },
    {
      "symbol": "GSEE",
      "name": "GOLDMAN SACHS MARKETBETA EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "GSEP",
      "name": "FT Cboe Vest U.S. Equity Moderate Buffer ETF - September"
    },
    {
      "symbol": "GSEU",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) EUROPE EQUITY ETF "
    },
    {
      "symbol": "GSEW",
      "name": "GOLDMAN SACHS EQUAL WEIGHT U.S. LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "GSFP",
      "name": "GOLDMAN SACHS FUTURE PLANET EQUITY ETF "
    },
    {
      "symbol": "GSG",
      "name": "iShares S&P GSCI Commodity-Indexed Trust"
    },
    {
      "symbol": "GSHD",
      "name": "Goosehead Insurance Inc - Class A"
    },
    {
      "symbol": "GSIB",
      "name": "Themes Global Systemically Important Banks ETF"
    },
    {
      "symbol": "GSID",
      "name": "GOLDMAN SACHS MARKETBETA INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "GSIE",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "GSIG",
      "name": "GOLDMAN SACHS ACCESS INVESTMENT GRADE CORPORATE 1-5 YEAR BOND ETF "
    },
    {
      "symbol": "GSIT",
      "name": "GSI Technology Inc"
    },
    {
      "symbol": "GSIW",
      "name": "Garden Stage Ltd"
    },
    {
      "symbol": "GSJY",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) JAPAN EQUITY ETF "
    },
    {
      "symbol": "GSK",
      "name": "GSK Plc"
    },
    {
      "symbol": "GSL",
      "name": "Global Ship Lease Inc - Class A"
    },
    {
      "symbol": "GSL-P-B",
      "name": "Global Ship Lease Inc"
    },
    {
      "symbol": "GSLC",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) U.S. LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "GSM",
      "name": "Ferroglobe Plc"
    },
    {
      "symbol": "GSMGW",
      "name": "Cheer Holding Inc - Warrants (13/02/2025)"
    },
    {
      "symbol": "GSPY",
      "name": "GOTHAM ENHANCED 500 ETF "
    },
    {
      "symbol": "GSRM",
      "name": "GSR II Meteora Acquisition Corp - Class A"
    },
    {
      "symbol": "GSRMW",
      "name": "GSR II Meteora Acquisition Corp - Warrants (24/02/2027)"
    },
    {
      "symbol": "GSSC",
      "name": "GOLDMAN SACHS ACTIVEBETA(R) U.S. SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "GSST",
      "name": "GOLDMAN SACHS ACCESS ULTRA SHORT BOND ETF "
    },
    {
      "symbol": "GSUN",
      "name": "Golden Sun Health Technology Group Ltd - Class A"
    },
    {
      "symbol": "GSUS",
      "name": "GOLDMAN SACHS MARKETBETA U.S. EQUITY ETF "
    },
    {
      "symbol": "GSY",
      "name": "INVESCO ULTRA SHORT DURATION ETF "
    },
    {
      "symbol": "GT",
      "name": "Goodyear Tire & Rubber Company"
    },
    {
      "symbol": "GTAC",
      "name": "Global Technology Acquisition Corp I - Class A"
    },
    {
      "symbol": "GTACU",
      "name": "Global Technology Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "GTACW",
      "name": "Global Technology Acquisition Corp I - Warrants (19/10/2026)"
    },
    {
      "symbol": "GTBP",
      "name": "GT Biopharma Inc"
    },
    {
      "symbol": "GTE",
      "name": "Gran Tierra Energy Inc"
    },
    {
      "symbol": "GTEC",
      "name": "Greenland Technologies Holding Corp"
    },
    {
      "symbol": "GTEK",
      "name": "GOLDMAN SACHS FUTURE TECH LEADERS EQUITY ETF "
    },
    {
      "symbol": "GTES",
      "name": "Gates Industrial Corporation plc"
    },
    {
      "symbol": "GTHX",
      "name": "G1 Therapeutics Inc"
    },
    {
      "symbol": "GTIM",
      "name": "Good Times Restaurants Inc"
    },
    {
      "symbol": "GTIP",
      "name": "GOLDMAN SACHS ACCESS INFLATION PROTECTED USD BOND ETF "
    },
    {
      "symbol": "GTLB",
      "name": "Gitlab Inc - Class A"
    },
    {
      "symbol": "GTLS",
      "name": "Chart Industries Inc"
    },
    {
      "symbol": "GTLS-P-B",
      "name": "Chart Industries Inc"
    },
    {
      "symbol": "GTN",
      "name": "Gray Television Inc"
    },
    {
      "symbol": "GTN-A",
      "name": "Gray Television Inc - Class A"
    },
    {
      "symbol": "GTO",
      "name": "INVESCO TOTAL RETURN BOND ETF "
    },
    {
      "symbol": "GTR",
      "name": "WisdomTree Target Range Fund"
    },
    {
      "symbol": "GTX",
      "name": "Garrett Motion Inc - New"
    },
    {
      "symbol": "GTY",
      "name": "Getty Realty Corp"
    },
    {
      "symbol": "GUG",
      "name": "Guggenheim Active Allocation Fund"
    },
    {
      "symbol": "GUNR",
      "name": "FLEXSHARES MORNINGSTAR GLOBAL UPSTREAM NATURAL RESOURCES INDEX FUND "
    },
    {
      "symbol": "GURE",
      "name": "Gulf Resources Inc"
    },
    {
      "symbol": "GURU",
      "name": "GLOBAL X GURU INDEX ETF "
    },
    {
      "symbol": "GUSA",
      "name": "GOLDMAN SACHS MARKETBETA(R) U.S. 1000 EQUITY ETF "
    },
    {
      "symbol": "GUSH",
      "name": "DIREXION DAILY S&P OIL & GAS EXP. & PROD. BULL 2X SHARES "
    },
    {
      "symbol": "GUT",
      "name": "Gabelli Utility Trust"
    },
    {
      "symbol": "GUT-P-C",
      "name": "Gabelli Utility Trust"
    },
    {
      "symbol": "GUTS",
      "name": "Fractyl Health Inc"
    },
    {
      "symbol": "GV",
      "name": "Visionary Education Technology Holdings Group Inc"
    },
    {
      "symbol": "GVA",
      "name": "Granite Construction Inc"
    },
    {
      "symbol": "GVAL",
      "name": "Cambria Global Value ETF"
    },
    {
      "symbol": "GVCI",
      "name": "Green Visor Financial Technology Acquisition Corp I - Class A"
    },
    {
      "symbol": "GVCIU",
      "name": "Green Visor Financial Technology Acquisition Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "GVCIW",
      "name": "Green Visor Financial Technology Acquisition Corp I - Warrants (27/10/2026)"
    },
    {
      "symbol": "GVH",
      "name": "Globavend Holdings Ltd"
    },
    {
      "symbol": "GVI",
      "name": "iShares Intermediate Government/Credit Bond ETF"
    },
    {
      "symbol": "GVIP",
      "name": "GOLDMAN SACHS HEDGE INDUSTRY VIP ETF "
    },
    {
      "symbol": "GVLU",
      "name": "GOTHAM 1000 VALUE ETF "
    },
    {
      "symbol": "GVP",
      "name": "GSE Systems Inc"
    },
    {
      "symbol": "GVUS",
      "name": "Goldman Sachs MarketBeta Russell 1000 Value Equity ETF"
    },
    {
      "symbol": "GWAV",
      "name": "Greenwave Technology Solutions Inc"
    },
    {
      "symbol": "GWH",
      "name": "ESS Tech Inc"
    },
    {
      "symbol": "GWH-WS",
      "name": "ESS Tech Inc Warrant"
    },
    {
      "symbol": "GWRE",
      "name": "Guidewire Software Inc"
    },
    {
      "symbol": "GWRS",
      "name": "Global Water Resources Inc"
    },
    {
      "symbol": "GWW",
      "name": "W.W. Grainger Inc"
    },
    {
      "symbol": "GWX",
      "name": "SPDR(R) S&P(R) INTERNATIONAL SMALL CAP ETF "
    },
    {
      "symbol": "GXAI",
      "name": "Gaxos.AI Inc"
    },
    {
      "symbol": "GXC",
      "name": "SPDR(R) S&P(R) CHINA ETF "
    },
    {
      "symbol": "GXG",
      "name": "GLOBAL X MSCI COLOMBIA ETF "
    },
    {
      "symbol": "GXO",
      "name": "GXO Logistics Inc"
    },
    {
      "symbol": "GXTG",
      "name": "GLOBAL X THEMATIC GROWTH ETF "
    },
    {
      "symbol": "GXUS",
      "name": "GOLDMAN SACHS MARKETBETA(R) TOTAL INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "GYLD",
      "name": "Arrow Dow Jones Global Yield ETF"
    },
    {
      "symbol": "GYRE",
      "name": "Gyre Therapeutics Inc"
    },
    {
      "symbol": "GYRO",
      "name": "Gyrodyne LLC"
    },
    {
      "symbol": "H",
      "name": "Hyatt Hotels Corporation - Class A"
    },
    {
      "symbol": "HA",
      "name": "Hawaiian Holdings Inc"
    },
    {
      "symbol": "HACK",
      "name": "Amplify Cybersecurity ETF"
    },
    {
      "symbol": "HAE",
      "name": "Haemonetics Corp"
    },
    {
      "symbol": "HAFC",
      "name": "Hanmi Financial Corp"
    },
    {
      "symbol": "HAIA",
      "name": "Healthcare AI Acquisition Corp - Class A"
    },
    {
      "symbol": "HAIAU",
      "name": "Healthcare AI Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "HAIAW",
      "name": "Healthcare AI Acquisition Corp - Warrants (07/12/2026)"
    },
    {
      "symbol": "HAIL",
      "name": "SPDR S&P Kensho Smart Mobility ETF"
    },
    {
      "symbol": "HAIN",
      "name": "Hain Celestial Group Inc"
    },
    {
      "symbol": "HAL",
      "name": "Halliburton Company"
    },
    {
      "symbol": "HALO",
      "name": "Halozyme Therapeutics Inc"
    },
    {
      "symbol": "HAO",
      "name": "Haoxi Health Technology Ltd - Class A"
    },
    {
      "symbol": "HAP",
      "name": "VANECK NATURAL RESOURCES ETF "
    },
    {
      "symbol": "HAPI",
      "name": "HARBOR HUMAN CAPITAL FACTOR US LARGE CAP ETF "
    },
    {
      "symbol": "HAPR",
      "name": "Innovator Premium Income 9 Buffer ETF - April"
    },
    {
      "symbol": "HAPS",
      "name": "HARBOR HUMAN CAPITAL FACTOR US SMALL CAP ETF "
    },
    {
      "symbol": "HAPY",
      "name": "HARBOR HUMAN CAPITAL FACTOR UNCONSTRAINED ETF "
    },
    {
      "symbol": "HARD",
      "name": "Simplify Commodities Strategy No K-1 ETF"
    },
    {
      "symbol": "HART",
      "name": "IQ HEALTHY HEARTS ETF "
    },
    {
      "symbol": "HAS",
      "name": "Hasbro Inc"
    },
    {
      "symbol": "HASI",
      "name": "Hannon Armstrong Sustainable Infrastructure capital Inc"
    },
    {
      "symbol": "HAUS",
      "name": "Residential REIT ETF"
    },
    {
      "symbol": "HAUZ",
      "name": "Xtrackers International Real Estate ETF"
    },
    {
      "symbol": "HAWX",
      "name": "ISHARES CURRENCY HEDGED MSCI ACWI EX U.S. ETF "
    },
    {
      "symbol": "HAYN",
      "name": "Haynes International Inc"
    },
    {
      "symbol": "HAYW",
      "name": "Hayward Holdings Inc"
    },
    {
      "symbol": "HBAN",
      "name": "Huntington Bancshares Inc"
    },
    {
      "symbol": "HBANL",
      "name": "Huntington Bancshares Inc"
    },
    {
      "symbol": "HBANM",
      "name": "Huntington Bancshares Inc"
    },
    {
      "symbol": "HBANP",
      "name": "Huntington Bancshares Inc"
    },
    {
      "symbol": "HBB",
      "name": "Hamilton Beach Brands Holding Co - Class A"
    },
    {
      "symbol": "HBCP",
      "name": "Home Bancorp Inc"
    },
    {
      "symbol": "HBI",
      "name": "Hanesbrands Inc"
    },
    {
      "symbol": "HBIO",
      "name": "Harvard Bioscience Inc"
    },
    {
      "symbol": "HBM",
      "name": "Hudbay Minerals Inc"
    },
    {
      "symbol": "HBNC",
      "name": "Horizon Bancorp Inc (IN)"
    },
    {
      "symbol": "HBT",
      "name": "HBT Financial Inc"
    },
    {
      "symbol": "HCA",
      "name": "HCA Healthcare Inc"
    },
    {
      "symbol": "HCAT",
      "name": "Health Catalyst Inc"
    },
    {
      "symbol": "HCC",
      "name": "Warrior Met Coal Inc"
    },
    {
      "symbol": "HCI",
      "name": "HCI Group Inc"
    },
    {
      "symbol": "HCKT",
      "name": "Hackett Group Inc (The)"
    },
    {
      "symbol": "HCM",
      "name": "HUTCHMED (China) Ltd"
    },
    {
      "symbol": "HCMT",
      "name": "DIREXION HCM TACTICAL ENHANCED US ETF "
    },
    {
      "symbol": "HCOM",
      "name": "Hartford Schroders Commodity Strategy ETF"
    },
    {
      "symbol": "HCOW",
      "name": "Amplify Cash Flow High Income ETF"
    },
    {
      "symbol": "HCP",
      "name": "HashiCorp Inc - Class A"
    },
    {
      "symbol": "HCRB",
      "name": "HARTFORD CORE BOND ETF "
    },
    {
      "symbol": "HCSG",
      "name": "Healthcare Services Group Inc"
    },
    {
      "symbol": "HCTI",
      "name": "Healthcare Triangle Inc"
    },
    {
      "symbol": "HCVI",
      "name": "Hennessy Capital Investment Corp VI - Class A"
    },
    {
      "symbol": "HCVIU",
      "name": "Hennessy Capital Investment Corp VI - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "HCVIW",
      "name": "Hennessy Capital Investment Corp VI - Warrants (10/06/2026)"
    },
    {
      "symbol": "HCWB",
      "name": "HCW Biologics Inc"
    },
    {
      "symbol": "HCXY",
      "name": "Hercules Capital Inc"
    },
    {
      "symbol": "HD",
      "name": "Home Depot Inc"
    },
    {
      "symbol": "HDAW",
      "name": "XTRACKERS MSCI ALL WORLD EX US HIGH DIVIDEND YIELD EQUITY ETF "
    },
    {
      "symbol": "HDB",
      "name": "HDFC Bank Ltd"
    },
    {
      "symbol": "HDEF",
      "name": "Xtrackers MSCI EAFE High Dividend Yield Equity ETF"
    },
    {
      "symbol": "HDG",
      "name": "PROSHARES HEDGE REPLICATION ETF "
    },
    {
      "symbol": "HDGE",
      "name": "Ranger Equity Bear -1x Shares"
    },
    {
      "symbol": "HDLB",
      "name": "UBS AG London Branch ETRACS Monthly Pay 2X Leveraged US High Divid Low Volatility ETN Ser B 09302044"
    },
    {
      "symbol": "HDMV",
      "name": "FIRST TRUST HORIZON MANAGED VOLATILITY DEVELOPED INTERNATIONAL ETF "
    },
    {
      "symbol": "HDRO",
      "name": "DEFIANCE NEXT GEN H2 ETF "
    },
    {
      "symbol": "HDSN",
      "name": "Hudson Technologies Inc"
    },
    {
      "symbol": "HDUS",
      "name": "HARTFORD DISCIPLINED US EQUITY ETF "
    },
    {
      "symbol": "HDV",
      "name": "iShares Core High Dividend ETF"
    },
    {
      "symbol": "HE",
      "name": "Hawaiian Electric Industries Inc"
    },
    {
      "symbol": "HEAR",
      "name": "Turtle Beach Corp"
    },
    {
      "symbol": "HEAT",
      "name": "TOUCHSTONE CLIMATE TRANSITION ETF "
    },
    {
      "symbol": "HEDJ",
      "name": "WisdomTree Europe Hedged Equity Fund"
    },
    {
      "symbol": "HEEM",
      "name": "ISHARES CURRENCY HEDGED MSCI EMERGING MARKETS ETF "
    },
    {
      "symbol": "HEES",
      "name": "H&E Equipment Services Inc"
    },
    {
      "symbol": "HEFA",
      "name": "ISHARES CURRENCY HEDGED MSCI EAFE ETF "
    },
    {
      "symbol": "HEGD",
      "name": "SWAN HEDGED EQUITY US LARGE CAP ETF "
    },
    {
      "symbol": "HEI",
      "name": "Heico Corp"
    },
    {
      "symbol": "HEI-A",
      "name": "Heico Corp - Class A"
    },
    {
      "symbol": "HELE",
      "name": "Helen of Troy Ltd"
    },
    {
      "symbol": "HELO",
      "name": "JPMORGAN HEDGED EQUITY LADDERED OVERLAY ETF "
    },
    {
      "symbol": "HELX",
      "name": "Franklin Genomic Advancements ETF"
    },
    {
      "symbol": "HEPA",
      "name": "Hepion Pharmaceuticals Inc"
    },
    {
      "symbol": "HEPS",
      "name": "D-MARKET Electronic Services & Trading"
    },
    {
      "symbol": "HEQ",
      "name": "John Hancock Hedged equity & Income Fund"
    },
    {
      "symbol": "HEQT",
      "name": "Simplify Hedged Equity ETF"
    },
    {
      "symbol": "HERD",
      "name": "Pacer Cash Cows Fund of Funds ETF"
    },
    {
      "symbol": "HERO",
      "name": "GLOBAL X VIDEO GAMES & ESPORTS ETF "
    },
    {
      "symbol": "HES",
      "name": "Hess Corporation"
    },
    {
      "symbol": "HESM",
      "name": "Hess Midstream LP - Class A"
    },
    {
      "symbol": "HEWC",
      "name": "iShares Currency Hedged MSCI Canada ETF"
    },
    {
      "symbol": "HEWG",
      "name": "ISHARES CURRENCY HEDGED MSCI GERMANY ETF "
    },
    {
      "symbol": "HEWJ",
      "name": "ISHARES CURRENCY HEDGED MSCI JAPAN ETF "
    },
    {
      "symbol": "HEWU",
      "name": "iShares Currency Hedged MSCI United Kingdom ETF"
    },
    {
      "symbol": "HEXO",
      "name": "HEXO Corp"
    },
    {
      "symbol": "HEZU",
      "name": "ISHARES CURRENCY HEDGED MSCI EUROZONE ETF "
    },
    {
      "symbol": "HF",
      "name": "DGA Absolute Return ETF"
    },
    {
      "symbol": "HFBL",
      "name": "Home Federal Bancorp Inc (Louisiana)"
    },
    {
      "symbol": "HFFG",
      "name": "HF Foods Group Inc"
    },
    {
      "symbol": "HFGO",
      "name": "HARTFORD LARGE CAP GROWTH ETF "
    },
    {
      "symbol": "HFND",
      "name": "UNLIMITED HFND MULTI-STRATEGY RETURN TRACKER ETF "
    },
    {
      "symbol": "HFRO",
      "name": "Highland Opportunities and Income Fund"
    },
    {
      "symbol": "HFRO-P-A",
      "name": "Highland Opportunities and Income Fund"
    },
    {
      "symbol": "HFWA",
      "name": "Heritage Financial Corp"
    },
    {
      "symbol": "HFXI",
      "name": "IQ FTSE International Equity Currency Neutral ETF"
    },
    {
      "symbol": "HG",
      "name": "Hamilton Insurance Group Ltd - Class B"
    },
    {
      "symbol": "HGAS",
      "name": "Global Gas Corp - Class A"
    },
    {
      "symbol": "HGASW",
      "name": "Global Gas Corp - Warrants (17/12/2025)"
    },
    {
      "symbol": "HGBL",
      "name": "Heritage Global Inc"
    },
    {
      "symbol": "HGER",
      "name": "HARBOR COMMODITY ALL-WEATHER STRATEGY ETF "
    },
    {
      "symbol": "HGLB",
      "name": "Highland Global Allocation Fund"
    },
    {
      "symbol": "HGTY",
      "name": "Hagerty Inc - Class A"
    },
    {
      "symbol": "HGTY-WS",
      "name": "Hagerty Inc Wt Exp"
    },
    {
      "symbol": "HGV",
      "name": "Hilton Grand Vacations Inc"
    },
    {
      "symbol": "HHGC",
      "name": "HHG Capital Corp"
    },
    {
      "symbol": "HHGCR",
      "name": "HHG Capital Corp"
    },
    {
      "symbol": "HHGCU",
      "name": "HHG Capital Corp - Units (1 Ord 1 War & 1 Rts)"
    },
    {
      "symbol": "HHGCW",
      "name": "HHG Capital Corp - Warrants (25/02/2026)"
    },
    {
      "symbol": "HHH",
      "name": "Howard Hughes Corporation"
    },
    {
      "symbol": "HHS",
      "name": "Harte-Hanks Inc"
    },
    {
      "symbol": "HI",
      "name": "Hillenbrand Inc"
    },
    {
      "symbol": "HIBB",
      "name": "Hibbett Inc"
    },
    {
      "symbol": "HIBL",
      "name": "DIREXION DAILY S&P 500(R) HIGH BETA BULL 3X SHARES "
    },
    {
      "symbol": "HIBS",
      "name": "DIREXION DAILY S&P 500(R) HIGH BETA BEAR 3X SHARES "
    },
    {
      "symbol": "HIDE",
      "name": "ALPHA ARCHITECT HIGH INFLATION AND DEFLATION ETF "
    },
    {
      "symbol": "HIDV",
      "name": "AB US HIGH DIVIDEND ETF "
    },
    {
      "symbol": "HIE",
      "name": "Miller/Howard High Income Equity Fund"
    },
    {
      "symbol": "HIFS",
      "name": "Hingham Institution For Savings"
    },
    {
      "symbol": "HIG",
      "name": "Hartford Financial Services Group Inc"
    },
    {
      "symbol": "HIG-P-G",
      "name": "Hartford Financial Services Group Inc"
    },
    {
      "symbol": "HIGH",
      "name": "Simplify Enhanced Income ETF"
    },
    {
      "symbol": "HIHO",
      "name": "Highway Holdings Ltd"
    },
    {
      "symbol": "HII",
      "name": "Huntington Ingalls Industries Inc"
    },
    {
      "symbol": "HIMS",
      "name": "Hims & Hers Health Inc - Class A"
    },
    {
      "symbol": "HIMX",
      "name": "Himax Technologies"
    },
    {
      "symbol": "HIO",
      "name": "Western Asset High Income Opportunity Fund Inc"
    },
    {
      "symbol": "HIPO",
      "name": "Hippo Holdings Inc"
    },
    {
      "symbol": "HIPO-WS",
      "name": "Hippo Holdings Inc - Warrants (16/09/2025)"
    },
    {
      "symbol": "HIPS",
      "name": "GraniteShares HIPS US High Income ETF"
    },
    {
      "symbol": "HITI",
      "name": "High Tide Inc"
    },
    {
      "symbol": "HIVE",
      "name": "HIVE Digital Technologies Ltd"
    },
    {
      "symbol": "HIW",
      "name": "Highwoods Properties Inc"
    },
    {
      "symbol": "HIX",
      "name": "Western Asset High Income Fund II Inc"
    },
    {
      "symbol": "HIYS",
      "name": "Invesco High Yield Select ETF"
    },
    {
      "symbol": "HJAN",
      "name": "Innovator Premium Income 9 Buffer ETF - January"
    },
    {
      "symbol": "HJEN",
      "name": "DIREXION HYDROGEN ETF "
    },
    {
      "symbol": "HKD",
      "name": "AMTD Digital Inc"
    },
    {
      "symbol": "HKIT",
      "name": "Hitek Global Inc"
    },
    {
      "symbol": "HKND",
      "name": "Humankind US Stock ETF"
    },
    {
      "symbol": "HL",
      "name": "Hecla Mining Company"
    },
    {
      "symbol": "HL-P-B",
      "name": "Hecla Mining Company"
    },
    {
      "symbol": "HLAL",
      "name": "WAHED FTSE USA SHARIAH ETF "
    },
    {
      "symbol": "HLF",
      "name": "Herbalife Ltd"
    },
    {
      "symbol": "HLGE",
      "name": "HARTFORD LONGEVITY ECONOMY ETF "
    },
    {
      "symbol": "HLI",
      "name": "Houlihan Lokey Inc - Class A"
    },
    {
      "symbol": "HLIO",
      "name": "Helios Technologies Inc"
    },
    {
      "symbol": "HLIT",
      "name": "Harmonic Inc"
    },
    {
      "symbol": "HLLY",
      "name": "Holley Inc - Class A"
    },
    {
      "symbol": "HLLY-WS",
      "name": "Holley Inc Warrants"
    },
    {
      "symbol": "HLMN",
      "name": "Hillman Solutions Corp"
    },
    {
      "symbol": "HLN",
      "name": "Haleon plc"
    },
    {
      "symbol": "HLNE",
      "name": "Hamilton Lane Inc - Class A"
    },
    {
      "symbol": "HLP",
      "name": "Hongli Group Inc"
    },
    {
      "symbol": "HLT",
      "name": "Hilton Worldwide Holdings Inc"
    },
    {
      "symbol": "HLTH",
      "name": "Cue Health Inc"
    },
    {
      "symbol": "HLVX",
      "name": "HilleVax Inc"
    },
    {
      "symbol": "HLX",
      "name": "Helix Energy Solutions Group Inc"
    },
    {
      "symbol": "HLXB",
      "name": "Helix Acquisition Corp II - Class A"
    },
    {
      "symbol": "HMAC",
      "name": "Hainan Manaslu Acquisition Corp"
    },
    {
      "symbol": "HMACR",
      "name": "Hainan Manaslu Acquisition Corp"
    },
    {
      "symbol": "HMACU",
      "name": "Hainan Manaslu Acquisition Corp - Units (1 Ord 1 War & 1 Rts)"
    },
    {
      "symbol": "HMACW",
      "name": "Hainan Manaslu Acquisition Corp - Warrants (31/01/2029)"
    },
    {
      "symbol": "HMC",
      "name": "Honda Motor"
    },
    {
      "symbol": "HMCO",
      "name": "HumanCo Acquisition Corp - Class A"
    },
    {
      "symbol": "HMCOU",
      "name": "HumanCo Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "HMCOW",
      "name": "HumanCo Acquisition Corp - Warrants (08/12/2025)"
    },
    {
      "symbol": "HMN",
      "name": "Horace Mann Educators Corp"
    },
    {
      "symbol": "HMNF",
      "name": "HMN Financial Inc"
    },
    {
      "symbol": "HMOP",
      "name": "HARTFORD MUNICIPAL OPPORTUNITIES ETF "
    },
    {
      "symbol": "HMST",
      "name": "HomeStreet Inc"
    },
    {
      "symbol": "HMY",
      "name": "Harmony Gold Mining Co Ltd"
    },
    {
      "symbol": "HNDL",
      "name": "Nasdaq 7HANDL Index ETF 1.23x Shares"
    },
    {
      "symbol": "HNI",
      "name": "HNI Corp"
    },
    {
      "symbol": "HNNA",
      "name": "Hennessy Advisors Inc"
    },
    {
      "symbol": "HNNAZ",
      "name": "Hennessy Advisors Inc"
    },
    {
      "symbol": "HNRA",
      "name": "HNR Acquisition Corp"
    },
    {
      "symbol": "HNRG",
      "name": "Hallador Energy Company"
    },
    {
      "symbol": "HNST",
      "name": "Honest Company Inc (The )"
    },
    {
      "symbol": "HNVR",
      "name": "Hanover Bancorp Inc"
    },
    {
      "symbol": "HNW",
      "name": "Pioneer Diversified High Income Fund Inc"
    },
    {
      "symbol": "HOCT",
      "name": "Innovator Premium Income 9 Buffer ETF - October"
    },
    {
      "symbol": "HODL",
      "name": "VanEck Bitcoin Trust"
    },
    {
      "symbol": "HOFT",
      "name": "Hooker Furnishings Corporation"
    },
    {
      "symbol": "HOFV",
      "name": "Hall of Fame Resort & Entertainment Company"
    },
    {
      "symbol": "HOFVW",
      "name": "Hall of Fame Resort & Entertainment Company - Warrants (24/01/2023)"
    },
    {
      "symbol": "HOG",
      "name": "Harley-Davidson Inc"
    },
    {
      "symbol": "HOLI",
      "name": "Hollysys Automation Technologies Ltd"
    },
    {
      "symbol": "HOLO",
      "name": "HOLOPAK TECHNOLOGIES INC"
    },
    {
      "symbol": "HOLOW",
      "name": "MicroCloud Hologram Inc - Warrants (31/01/2028)"
    },
    {
      "symbol": "HOLX",
      "name": "Hologic Inc"
    },
    {
      "symbol": "HOMB",
      "name": "Home Bancshares Inc"
    },
    {
      "symbol": "HOMZ",
      "name": "HOYA CAPITAL HOUSING ETF "
    },
    {
      "symbol": "HON",
      "name": "Honeywell International Inc"
    },
    {
      "symbol": "HONE",
      "name": "HarborOne Bancorp Inc"
    },
    {
      "symbol": "HOOD",
      "name": "Robinhood Markets Inc - Class A"
    },
    {
      "symbol": "HOOK",
      "name": "Hookipa Pharma Inc"
    },
    {
      "symbol": "HOPE",
      "name": "Hope Bancorp Inc"
    },
    {
      "symbol": "HORIU",
      "name": "Emerging Markets Horizon Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "HOTH",
      "name": "Hoth Therapeutics Inc"
    },
    {
      "symbol": "HOTL",
      "name": "Kelly Hotel & Lodging Sector ETF"
    },
    {
      "symbol": "HOUR",
      "name": "Hour Loop Inc"
    },
    {
      "symbol": "HOUS",
      "name": "Anywhere Real Estate Inc"
    },
    {
      "symbol": "HOV",
      "name": "Hovnanian Enterprises Inc - Class A"
    },
    {
      "symbol": "HOVNP",
      "name": "Hovnanian Enterprises Inc"
    },
    {
      "symbol": "HOVR",
      "name": "New Horizon Aircraft Ltd"
    },
    {
      "symbol": "HOVRW",
      "name": "New Horizon Aircraft Ltd Warrant"
    },
    {
      "symbol": "HOWL",
      "name": "Werewolf Therapeutics Inc"
    },
    {
      "symbol": "HP",
      "name": "Helmerich & Payne Inc"
    },
    {
      "symbol": "HPCO",
      "name": "Hempacco Co Inc"
    },
    {
      "symbol": "HPE",
      "name": "Hewlett Packard Enterprise Company"
    },
    {
      "symbol": "HPF",
      "name": "John Hancock Preferred Income Fund II"
    },
    {
      "symbol": "HPH",
      "name": "Highest Performances Holdings Inc"
    },
    {
      "symbol": "HPI",
      "name": "John Hancock Preferred Income Fund"
    },
    {
      "symbol": "HPK",
      "name": "HighPeak Energy Inc"
    },
    {
      "symbol": "HPKEW",
      "name": "HighPeak Energy Inc - Warrants (21/08/2025)"
    },
    {
      "symbol": "HPLT",
      "name": "Home Plate Acquisition Corp - Class A"
    },
    {
      "symbol": "HPLTU",
      "name": "Home Plate Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "HPLTW",
      "name": "Home Plate Acquisition Corp - Warrants (30/09/2026)"
    },
    {
      "symbol": "HPP",
      "name": "Hudson Pacific Properties Inc"
    },
    {
      "symbol": "HPP-P-C",
      "name": "Hudson Pacific Properties Inc"
    },
    {
      "symbol": "HPQ",
      "name": "HP Inc"
    },
    {
      "symbol": "HPS",
      "name": "John Hancock Preferred Income Fund III"
    },
    {
      "symbol": "HQGO",
      "name": "Hartford US Quality Growth ETF"
    },
    {
      "symbol": "HQH",
      "name": "abrdn Healthcare Investors"
    },
    {
      "symbol": "HQI",
      "name": "HireQuest Inc"
    },
    {
      "symbol": "HQL",
      "name": "abrdn Life Sciences Investors"
    },
    {
      "symbol": "HQY",
      "name": "Healthequity Inc"
    },
    {
      "symbol": "HR",
      "name": "Healthcare Realty Trust Inc"
    },
    {
      "symbol": "HRB",
      "name": "H&R Block Inc"
    },
    {
      "symbol": "HRI",
      "name": "Herc Holdings Inc"
    },
    {
      "symbol": "HRL",
      "name": "Hormel Foods Corp"
    },
    {
      "symbol": "HRMY",
      "name": "Harmony Biosciences Holdings Inc"
    },
    {
      "symbol": "HROW",
      "name": "Harrow Inc"
    },
    {
      "symbol": "HROWL",
      "name": "Harrow Inc"
    },
    {
      "symbol": "HROWM",
      "name": "Harrow Inc"
    },
    {
      "symbol": "HRT",
      "name": "HireRight Holdings Corp"
    },
    {
      "symbol": "HRTG",
      "name": "Heritage Insurance Holdings Inc"
    },
    {
      "symbol": "HRTS",
      "name": "Tema Cardiovascular and Metabolic ETF"
    },
    {
      "symbol": "HRTX",
      "name": "Heron Therapeutics Inc"
    },
    {
      "symbol": "HRYU",
      "name": "Hanryu Holdings Inc"
    },
    {
      "symbol": "HRZN",
      "name": "Horizon Technology Finance Corp"
    },
    {
      "symbol": "HSAI",
      "name": "Hesai Group"
    },
    {
      "symbol": "HSBC",
      "name": "HSBC Holdings plc"
    },
    {
      "symbol": "HSCS",
      "name": "Heart Test Laboratories Inc"
    },
    {
      "symbol": "HSCSW",
      "name": "Heart Test Laboratories Inc - Warrants(15/06/2027)"
    },
    {
      "symbol": "HSCZ",
      "name": "ISHARES CURRENCY HEDGED MSCI EAFE SMALL-CAP ETF "
    },
    {
      "symbol": "HSDT",
      "name": "Helius Medical Technologies Inc - Class A"
    },
    {
      "symbol": "HSHP",
      "name": "Himalaya Shipping Ltd"
    },
    {
      "symbol": "HSIC",
      "name": "Henry Schein Inc"
    },
    {
      "symbol": "HSII",
      "name": "Heidrick & Struggles International Inc"
    },
    {
      "symbol": "HSMV",
      "name": "FIRST TRUST HORIZON MANAGED VOLATILITY SMALL/MID ETF "
    },
    {
      "symbol": "HSON",
      "name": "Hudson Global Inc"
    },
    {
      "symbol": "HSPO",
      "name": "Horizon Space Acquisition I Corp"
    },
    {
      "symbol": "HSPOR",
      "name": "Horizon Space Acquisition I Corp"
    },
    {
      "symbol": "HSPOU",
      "name": "Horizon Space Acquisition I Corp - Units (1 Ord 1 War & 1 Rts)"
    },
    {
      "symbol": "HSPOW",
      "name": "Horizon Space Acquisition I Corp - Warrants (02/03/2029)"
    },
    {
      "symbol": "HSRT",
      "name": "HARTFORD SHORT DURATION ETF "
    },
    {
      "symbol": "HST",
      "name": "Host Hotels & Resorts Inc"
    },
    {
      "symbol": "HSTM",
      "name": "Healthstream Inc"
    },
    {
      "symbol": "HSUN",
      "name": "HARTFORD SUSTAINABLE INCOME ETF "
    },
    {
      "symbol": "HSY",
      "name": "Hershey Company"
    },
    {
      "symbol": "HT",
      "name": "Hersha Hospitality Trust - Class A"
    },
    {
      "symbol": "HT-P-C",
      "name": "Hersha Hospitality Trust"
    },
    {
      "symbol": "HT-P-D",
      "name": "Hersha Hospitality Trust"
    },
    {
      "symbol": "HT-P-E",
      "name": "Hersha Hospitality Trust"
    },
    {
      "symbol": "HTAB",
      "name": "HARTFORD SCHRODERS TAX-AWARE BOND ETF "
    },
    {
      "symbol": "HTBI",
      "name": "HomeTrust Bancshares Inc"
    },
    {
      "symbol": "HTBK",
      "name": "Heritage Commerce Corp"
    },
    {
      "symbol": "HTCR",
      "name": "HeartCore Enterprises Inc"
    },
    {
      "symbol": "HTD",
      "name": "John Hancock Tax- Advantaged Dividend Income"
    },
    {
      "symbol": "HTEC",
      "name": "ROBO Global Healthcare Technology and Innovation ETF"
    },
    {
      "symbol": "HTFB",
      "name": "Horizon Technology Finance Corp"
    },
    {
      "symbol": "HTFC",
      "name": "Horizon Technology Finance Corp"
    },
    {
      "symbol": "HTGC",
      "name": "Hercules Capital Inc"
    },
    {
      "symbol": "HTH",
      "name": "Hilltop Holdings Inc"
    },
    {
      "symbol": "HTHT",
      "name": "H World Group Ltd"
    },
    {
      "symbol": "HTIA",
      "name": "Healthcare Trust Inc"
    },
    {
      "symbol": "HTIBP",
      "name": "Healthcare Trust Inc"
    },
    {
      "symbol": "HTLD",
      "name": "Heartland Express Inc"
    },
    {
      "symbol": "HTLF",
      "name": "Heartland Financial USA Inc"
    },
    {
      "symbol": "HTLFP",
      "name": "Heartland Financial USA Inc"
    },
    {
      "symbol": "HTOO",
      "name": "Fusion Fuel Green Ltd - Class A"
    },
    {
      "symbol": "HTOOW",
      "name": "Fusion Fuel Green Ltd - Warrants (01/01/2023)"
    },
    {
      "symbol": "HTPA-U",
      "name": "Highland Transcend Partners I Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant"
    },
    {
      "symbol": "HTRB",
      "name": "HARTFORD TOTAL RETURN BOND ETF "
    },
    {
      "symbol": "HTUS",
      "name": "HULL TACTICAL US ETF "
    },
    {
      "symbol": "HTY",
      "name": "John Hancock Tax-Advantaged Global Shareholder Yield Fund"
    },
    {
      "symbol": "HTZ",
      "name": "Hertz Global Holdings Inc (New)"
    },
    {
      "symbol": "HTZWW",
      "name": "Hertz Global Holdings Inc - Warrants (30/06/2051)"
    },
    {
      "symbol": "HUBB",
      "name": "Hubbell Inc"
    },
    {
      "symbol": "HUBC",
      "name": "Hub Cyber Security Ltd"
    },
    {
      "symbol": "HUBCW",
      "name": "Hub Cyber Security Ltd - Warrants (27/02/2028)"
    },
    {
      "symbol": "HUBCZ",
      "name": "Hub Cyber Security Ltd - Warrants (22/08/2023)"
    },
    {
      "symbol": "HUBG",
      "name": "Hub Group Inc - Class A"
    },
    {
      "symbol": "HUBS",
      "name": "HubSpot Inc"
    },
    {
      "symbol": "HUDA",
      "name": "Hudson Acquisition I Corp"
    },
    {
      "symbol": "HUDAR",
      "name": "Hudson Acquisition I Corp"
    },
    {
      "symbol": "HUDAU",
      "name": "Hudson Acquisition I Corp - Units (1 Ord & 1 Right)"
    },
    {
      "symbol": "HUDI",
      "name": "Huadi International Group Co Ltd"
    },
    {
      "symbol": "HUGE",
      "name": "FSD Pharma Inc - Class B - Class B (Sub Voting)"
    },
    {
      "symbol": "HUIZ",
      "name": "Huize Holding Ltd"
    },
    {
      "symbol": "HUM",
      "name": "Humana Inc"
    },
    {
      "symbol": "HUMA",
      "name": "Humacyte Inc"
    },
    {
      "symbol": "HUMAW",
      "name": "Humacyte Inc - Warrants (27/08/2026)"
    },
    {
      "symbol": "HUN",
      "name": "Huntsman Corp"
    },
    {
      "symbol": "HURC",
      "name": "Hurco Companies Inc"
    },
    {
      "symbol": "HURN",
      "name": "Huron Consulting Group Inc"
    },
    {
      "symbol": "HUSA",
      "name": "Houston American Energy Corp"
    },
    {
      "symbol": "HUSV",
      "name": "FIRST TRUST HORIZON MANAGED VOLATILITY DOMESTIC ETF "
    },
    {
      "symbol": "HUT",
      "name": "Hut 8 Corp"
    },
    {
      "symbol": "HUYA",
      "name": "HUYA Inc"
    },
    {
      "symbol": "HVAL",
      "name": "ALPS Hillman Active Value ETF"
    },
    {
      "symbol": "HVT",
      "name": "Haverty Furniture Cos. Inc"
    },
    {
      "symbol": "HVT-A",
      "name": "Haverty Furniture Cos. Inc - Class A"
    },
    {
      "symbol": "HWBK",
      "name": "Hawthorn Bancshares Inc"
    },
    {
      "symbol": "HWC",
      "name": "Hancock Whitney Corp"
    },
    {
      "symbol": "HWCPZ",
      "name": "Hancock Whitney Corp"
    },
    {
      "symbol": "HWH",
      "name": "HWH International Inc"
    },
    {
      "symbol": "HWKN",
      "name": "Hawkins Inc"
    },
    {
      "symbol": "HWM",
      "name": "Howmet Aerospace Inc"
    },
    {
      "symbol": "HXL",
      "name": "Hexcel Corp"
    },
    {
      "symbol": "HY",
      "name": "Hyster-Yale Materials Handling Inc - Class A"
    },
    {
      "symbol": "HYAC",
      "name": "Haymaker Acquisition Corp 4 - Class A"
    },
    {
      "symbol": "HYAC-U",
      "name": "Haymaker Acquisition Corp 4 - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "HYAC-WS",
      "name": "Haymaker Acquisition Corp 4 Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50 per share"
    },
    {
      "symbol": "HYB",
      "name": "New America High Income Fund Inc"
    },
    {
      "symbol": "HYBB",
      "name": "ISHARES BB RATED CORPORATE BOND ETF "
    },
    {
      "symbol": "HYBL",
      "name": "SPDR(R) BLACKSTONE HIGH INCOME ETF "
    },
    {
      "symbol": "HYD",
      "name": "VanEck High Yield Muni ETF"
    },
    {
      "symbol": "HYDB",
      "name": "iShares High Yield Bond Factor ETF"
    },
    {
      "symbol": "HYDR",
      "name": "GLOBAL X HYDROGEN ETF "
    },
    {
      "symbol": "HYDW",
      "name": "XTRACKERS LOW BETA HIGH YIELD BOND ETF "
    },
    {
      "symbol": "HYEM",
      "name": "VanEck Emerging Markets High Yield Bond ETF"
    },
    {
      "symbol": "HYFI",
      "name": "AB HIGH YIELD ETF "
    },
    {
      "symbol": "HYFM",
      "name": "Hydrofarm Holdings Group Inc"
    },
    {
      "symbol": "HYG",
      "name": "iShares iBoxx USD High Yield Corporate Bond ETF"
    },
    {
      "symbol": "HYGH",
      "name": "ISHARES INTEREST RATE HEDGED HIGH YIELD BOND ETF "
    },
    {
      "symbol": "HYGI",
      "name": "ISHARES INFLATION HEDGED HIGH YIELD BOND ETF "
    },
    {
      "symbol": "HYGV",
      "name": "FLEXSHARES HIGH YIELD VALUE-SCORED BOND INDEX FUND "
    },
    {
      "symbol": "HYGW",
      "name": "ISHARES HIGH YIELD CORPORATE BOND BUYWRITE STRATEGY ETF "
    },
    {
      "symbol": "HYHG",
      "name": "ProShares High Yield-Interest Rate Hedged ETF"
    },
    {
      "symbol": "HYI",
      "name": "Western Asset High Yield Defined Opportunity Fund Inc"
    },
    {
      "symbol": "HYIN",
      "name": "WISDOMTREE ALTERNATIVE INCOME FUND "
    },
    {
      "symbol": "HYKE",
      "name": "Vest 2 Year Interest Rate Hedge ETF"
    },
    {
      "symbol": "HYLB",
      "name": "XTRACKERS USD HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "HYLG",
      "name": "GLOBAL X HEALTH CARE COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "HYLN",
      "name": "Hyliion Holdings Corporation - Class A"
    },
    {
      "symbol": "HYLS",
      "name": "FIRST TRUST TACTICAL HIGH YIELD ETF "
    },
    {
      "symbol": "HYMB",
      "name": "SPDR Nuveen Bloomberg High Yield Municipal Bond ETF"
    },
    {
      "symbol": "HYMC",
      "name": "Hycroft Mining Holding Corporation - Class A"
    },
    {
      "symbol": "HYMCL",
      "name": "Hycroft Mining Holding Corporation - Warrants (01/01/9999)"
    },
    {
      "symbol": "HYMCW",
      "name": "Hycroft Mining Holding Corporation Warrant"
    },
    {
      "symbol": "HYMU",
      "name": "BlackRock High Yield Muni Income Bond ETF"
    },
    {
      "symbol": "HYPR",
      "name": "Hyperfine Inc - Class A"
    },
    {
      "symbol": "HYRM",
      "name": "XTRACKERS RISK MANAGED USD HIGH YIELD STRATEGY ETF "
    },
    {
      "symbol": "HYS",
      "name": "PIMCO 0-5 Year High Yield Corporate Bond Index Exchange-Traded Fund"
    },
    {
      "symbol": "HYSA",
      "name": "BONDBLOXX USD HIGH YIELD BOND SECTOR ROTATION ETF "
    },
    {
      "symbol": "HYT",
      "name": "BlackRock Corporate High Yield Fund Inc"
    },
    {
      "symbol": "HYTR",
      "name": "COUNTERPOINT HIGH YIELD TREND ETF "
    },
    {
      "symbol": "HYUP",
      "name": "XTRACKERS HIGH BETA HIGH YIELD BOND ETF "
    },
    {
      "symbol": "HYW",
      "name": "Hywin Holdings Ltd"
    },
    {
      "symbol": "HYXF",
      "name": "ISHARES ESG ADVANCED HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "HYXU",
      "name": "ISHARES INTERNATIONAL HIGH YIELD BOND ETF "
    },
    {
      "symbol": "HYZD",
      "name": "WISDOMTREE INTEREST RATE HEDGED HIGH YIELD BOND FUND "
    },
    {
      "symbol": "HYZN",
      "name": "Hyzon Motors Inc - Class A"
    },
    {
      "symbol": "HYZNW",
      "name": "Hyzon Motors Inc - Warrants (02/10/2025)"
    },
    {
      "symbol": "HZO",
      "name": "Marinemax Inc"
    },
    {
      "symbol": "HZON-WS",
      "name": "Horizon Acquisition Corporation II Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50"
    },
    {
      "symbol": "IAC",
      "name": "IAC Inc - New"
    },
    {
      "symbol": "IAE",
      "name": "Voya Asia Pacific High Dividend Equity Income Fund"
    },
    {
      "symbol": "IAF",
      "name": "abrdn Australia Equity Fund Inc"
    },
    {
      "symbol": "IAG",
      "name": "Iamgold Corp"
    },
    {
      "symbol": "IAGG",
      "name": "ISHARES CORE INTERNATIONAL AGGREGATE BOND ETF "
    },
    {
      "symbol": "IAI",
      "name": "iShares U.S. Broker-Dealers ETF"
    },
    {
      "symbol": "IAK",
      "name": "iShares U.S. Insurance ETF"
    },
    {
      "symbol": "IAPR",
      "name": "Innovator International Developed Power Buffer ETF April"
    },
    {
      "symbol": "IART",
      "name": "Integra Lifesciences Holdings Corp"
    },
    {
      "symbol": "IAS",
      "name": "Integral Ad Science Holding Corp"
    },
    {
      "symbol": "IAT",
      "name": "iShares U.S. Regional Banks ETF"
    },
    {
      "symbol": "IAU",
      "name": "iShares Gold Trust"
    },
    {
      "symbol": "IAUF",
      "name": "ISHARES GOLD STRATEGY ETF "
    },
    {
      "symbol": "IAUM",
      "name": "iShares Gold Trust Micro"
    },
    {
      "symbol": "IAUX",
      "name": "i80 Gold Corp"
    },
    {
      "symbol": "IBACU",
      "name": "IB Acquisition Corp - Units (1 Ord & 1 Right)"
    },
    {
      "symbol": "IBAT",
      "name": "iShares Energy Storage & Materials ETF"
    },
    {
      "symbol": "IBB",
      "name": "iShares Biotechnology ETF"
    },
    {
      "symbol": "IBBQ",
      "name": "INVESCO NASDAQ BIOTECHNOLOGY ETF "
    },
    {
      "symbol": "IBCP",
      "name": "Independent Bank Corporation (Ionia MI)"
    },
    {
      "symbol": "IBD",
      "name": "INSPIRE CORPORATE BOND ETF "
    },
    {
      "symbol": "IBDP",
      "name": "ISHARES IBONDS DEC 2024 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDQ",
      "name": "ISHARES IBONDS DEC 2025 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDR",
      "name": "ISHARES IBONDS DEC 2026 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDS",
      "name": "ISHARES IBONDS DEC 2027 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDT",
      "name": "ISHARES IBONDS DEC 2028 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDU",
      "name": "ISHARES IBONDS DEC 2029 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDV",
      "name": "ISHARES IBONDS DEC 2030 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDW",
      "name": "ISHARES IBONDS DEC 2031 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDX",
      "name": "ISHARES IBONDS DEC 2032 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBDY",
      "name": "ISHARES IBONDS DEC 2033 TERM CORPORATE ETF "
    },
    {
      "symbol": "IBEX",
      "name": "IBEX Ltd"
    },
    {
      "symbol": "IBHD",
      "name": "ISHARES IBONDS 2024 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHE",
      "name": "ISHARES IBONDS 2025 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHF",
      "name": "ISHARES IBONDS 2026 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHG",
      "name": "ISHARES IBONDS 2027 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHH",
      "name": "ISHARES IBONDS 2028 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHI",
      "name": "ISHARES IBONDS 2029 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBHJ",
      "name": "ISHARES IBONDS 2030 TERM HIGH YIELD AND INCOME ETF "
    },
    {
      "symbol": "IBIA",
      "name": "ISHARES IBONDS OCT 2024 TERM TIPS ETF "
    },
    {
      "symbol": "IBIB",
      "name": "ISHARES IBONDS OCT 2025 TERM TIPS ETF "
    },
    {
      "symbol": "IBIC",
      "name": "ISHARES IBONDS OCT 2026 TERM TIPS ETF "
    },
    {
      "symbol": "IBID",
      "name": "ISHARES IBONDS OCT 2027 TERM TIPS ETF "
    },
    {
      "symbol": "IBIE",
      "name": "ISHARES IBONDS OCT 2028 TERM TIPS ETF "
    },
    {
      "symbol": "IBIF",
      "name": "ISHARES IBONDS OCT 2029 TERM TIPS ETF "
    },
    {
      "symbol": "IBIG",
      "name": "ISHARES IBONDS OCT 2030 TERM TIPS ETF "
    },
    {
      "symbol": "IBIH",
      "name": "ISHARES IBONDS OCT 2031 TERM TIPS ETF "
    },
    {
      "symbol": "IBII",
      "name": "ISHARES IBONDS OCT 2032 TERM TIPS ETF "
    },
    {
      "symbol": "IBIJ",
      "name": "ISHARES IBONDS OCT 2033 TERM TIPS ETF "
    },
    {
      "symbol": "IBIO",
      "name": "iBio Inc"
    },
    {
      "symbol": "IBIT",
      "name": "iShares Bitcoin Trust"
    },
    {
      "symbol": "IBKR",
      "name": "Interactive Brokers Group Inc - Class A"
    },
    {
      "symbol": "IBLC",
      "name": "iShares Blockchain and Tech ETF"
    },
    {
      "symbol": "IBM",
      "name": "International Business Machines Corp"
    },
    {
      "symbol": "IBMK",
      "name": "iShares iBonds Dec 2022 Term Muni Bond ETF"
    },
    {
      "symbol": "IBMM",
      "name": "ISHARES IBONDS DEC 2024 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBMN",
      "name": "ISHARES IBONDS DEC 2025 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBMO",
      "name": "ISHARES IBONDS DEC 2026 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBMP",
      "name": "ISHARES IBONDS DEC 2027 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBMQ",
      "name": "ISHARES IBONDS DEC 2028 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBMR",
      "name": "ISHARES IBONDS DEC 2029 TERM MUNI BOND ETF "
    },
    {
      "symbol": "IBN",
      "name": "ICICI Bank Ltd"
    },
    {
      "symbol": "IBND",
      "name": "SPDR(R) BLOOMBERG INTERNATIONAL CORPORATE BOND ETF "
    },
    {
      "symbol": "IBOC",
      "name": "International Bancshares Corp"
    },
    {
      "symbol": "IBOT",
      "name": "VANECK ROBOTICS ETF "
    },
    {
      "symbol": "IBP",
      "name": "Installed Building Products Inc"
    },
    {
      "symbol": "IBRN",
      "name": "ISHARES NEUROSCIENCE AND HEALTHCARE ETF "
    },
    {
      "symbol": "IBRX",
      "name": "ImmunityBio Inc"
    },
    {
      "symbol": "IBTA",
      "name": "Ibotta Inc - Class A"
    },
    {
      "symbol": "IBTE",
      "name": "ISHARES IBONDS DEC 2024 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTF",
      "name": "ISHARES IBONDS DEC 2025 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTG",
      "name": "ISHARES IBONDS DEC 2026 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTH",
      "name": "ISHARES IBONDS DEC 2027 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTI",
      "name": "ISHARES IBONDS DEC 2028 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTJ",
      "name": "ISHARES IBONDS DEC 2029 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTK",
      "name": "ISHARES IBONDS DEC 2030 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTL",
      "name": "ISHARES IBONDS DEC 2031 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTM",
      "name": "ISHARES IBONDS DEC 2032 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTO",
      "name": "ISHARES IBONDS DEC 2033 TERM TREASURY ETF "
    },
    {
      "symbol": "IBTX",
      "name": "Independent Bank Group Inc"
    },
    {
      "symbol": "IBUY",
      "name": "AMPLIFY ONLINE RETAIL ETF "
    },
    {
      "symbol": "ICAD",
      "name": "Icad Inc"
    },
    {
      "symbol": "ICAP",
      "name": "INFRACAP EQUITY INCOME FUND ETF "
    },
    {
      "symbol": "ICCC",
      "name": "Immucell Corp"
    },
    {
      "symbol": "ICCH",
      "name": "ICC Holdings Inc"
    },
    {
      "symbol": "ICCM",
      "name": "Icecure Medical Ltd"
    },
    {
      "symbol": "ICCT",
      "name": "iCoreConnect Inc"
    },
    {
      "symbol": "ICD",
      "name": "Independence Contract Drilling Inc"
    },
    {
      "symbol": "ICE",
      "name": "Intercontinental Exchange Inc"
    },
    {
      "symbol": "ICF",
      "name": "iShares Cohen & Steers REIT ETF"
    },
    {
      "symbol": "ICFI",
      "name": "ICF International Inc"
    },
    {
      "symbol": "ICG",
      "name": "Intchains Group Ltd"
    },
    {
      "symbol": "ICHR",
      "name": "Ichor Holdings Ltd"
    },
    {
      "symbol": "ICL",
      "name": "ICL Group Ltd"
    },
    {
      "symbol": "ICLK",
      "name": "iClick Interactive Asia Group Ltd"
    },
    {
      "symbol": "ICLN",
      "name": "iShares Global Clean Energy ETF"
    },
    {
      "symbol": "ICLO",
      "name": "Invesco AAA CLO Floating Rate Note ETF"
    },
    {
      "symbol": "ICLR",
      "name": "Icon Plc"
    },
    {
      "symbol": "ICMB",
      "name": "Investcorp Credit Management BDC Inc"
    },
    {
      "symbol": "ICNC-U",
      "name": "Iconic Sports Acquisition Corp Units"
    },
    {
      "symbol": "ICOP",
      "name": "iShares Copper and Metals Mining ETF"
    },
    {
      "symbol": "ICOW",
      "name": "Pacer Developed Markets International Cash Cows 100 ETF"
    },
    {
      "symbol": "ICR-P-A",
      "name": "InPoint Commercial Real Estate Income Inc"
    },
    {
      "symbol": "ICSH",
      "name": "BLACKROCK ULTRA SHORT-TERM BOND ETF "
    },
    {
      "symbol": "ICU",
      "name": "SeaStar Medical Holding Corp"
    },
    {
      "symbol": "ICUCW",
      "name": "SeaStar Medical Holding Corp - Warrants (28/10/2027)"
    },
    {
      "symbol": "ICUI",
      "name": "ICU Medical Inc"
    },
    {
      "symbol": "ICVT",
      "name": "ISHARES CONVERTIBLE BOND ETF "
    },
    {
      "symbol": "ID",
      "name": "L1 IDENTITY SOLUTIONS INC."
    },
    {
      "symbol": "IDA",
      "name": "Idacorp Inc"
    },
    {
      "symbol": "IDAI",
      "name": "T Stamp Inc - Class A"
    },
    {
      "symbol": "IDAT",
      "name": "ISHARES FUTURE CLOUD 5G AND TECH ETF "
    },
    {
      "symbol": "IDCC",
      "name": "Interdigital Inc"
    },
    {
      "symbol": "IDE",
      "name": "Voya Infrastructure Industrials and Materials Fund"
    },
    {
      "symbol": "IDEC",
      "name": "Innovator International Developed Power Buffer ETF December"
    },
    {
      "symbol": "IDEV",
      "name": "ISHARES CORE MSCI INTERNATIONAL DEVELOPED MARKETS ETF "
    },
    {
      "symbol": "IDEX",
      "name": "Ideanomics Inc"
    },
    {
      "symbol": "IDGT",
      "name": "iShares North American Tech-Multimedia Networking ETF"
    },
    {
      "symbol": "IDHQ",
      "name": "INVESCO S&P INTERNATIONAL DEVELOPED QUALITY ETF "
    },
    {
      "symbol": "IDIV",
      "name": "U.S. Equity Cumulative Dividends Fund Series 2027"
    },
    {
      "symbol": "IDLV",
      "name": "INVESCO S&P INTERNATIONAL DEVELOPED LOW VOLATILITY ETF "
    },
    {
      "symbol": "IDMO",
      "name": "INVESCO S&P INTERNATIONAL DEVELOPED MOMENTUM ETF "
    },
    {
      "symbol": "IDN",
      "name": "Intellicheck Inc"
    },
    {
      "symbol": "IDNA",
      "name": "ISHARES GENOMICS IMMUNOLOGY AND HEALTHCARE ETF "
    },
    {
      "symbol": "IDOG",
      "name": "ALPS INTERNATIONAL SECTOR DIVIDEND DOGS ETF "
    },
    {
      "symbol": "IDR",
      "name": "Idaho Strategic Resources Inc"
    },
    {
      "symbol": "IDRV",
      "name": "ISHARES SELF-DRIVING EV AND TECH ETF "
    },
    {
      "symbol": "IDT",
      "name": "IDT Corp - Class B"
    },
    {
      "symbol": "IDU",
      "name": "iShares U.S. Utilities ETF"
    },
    {
      "symbol": "IDUB",
      "name": "Aptus International Enhanced Yield ETF"
    },
    {
      "symbol": "IDV",
      "name": "iShares International Select Dividend ETF"
    },
    {
      "symbol": "IDVO",
      "name": "Amplify International Enhanced Dividend Income ETF"
    },
    {
      "symbol": "IDX",
      "name": "VANECK INDONESIA INDEX ETF "
    },
    {
      "symbol": "IDXX",
      "name": "Idexx Laboratories Inc"
    },
    {
      "symbol": "IDYA",
      "name": "Ideaya Biosciences Inc"
    },
    {
      "symbol": "IE",
      "name": "Ivanhoe Electric Inc"
    },
    {
      "symbol": "IEDI",
      "name": "ISHARES U.S. CONSUMER FOCUSED ETF "
    },
    {
      "symbol": "IEF",
      "name": "iShares 7-10 Year Treasury Bond ETF"
    },
    {
      "symbol": "IEFA",
      "name": "ISHARES CORE MSCI EAFE ETF "
    },
    {
      "symbol": "IEI",
      "name": "iShares 3-7 Year Treasury Bond ETF"
    },
    {
      "symbol": "IEMG",
      "name": "ISHARES CORE MSCI EMERGING MARKETS ETF "
    },
    {
      "symbol": "IEO",
      "name": "iShares U.S. Oil & Gas Exploration & Production ETF"
    },
    {
      "symbol": "IEP",
      "name": "Icahn Enterprises L P"
    },
    {
      "symbol": "IESC",
      "name": "IES Holdings Inc"
    },
    {
      "symbol": "IETC",
      "name": "ISHARES U.S. TECH INDEPENDENCE FOCUSED ETF "
    },
    {
      "symbol": "IEUR",
      "name": "ISHARES CORE MSCI EUROPE ETF "
    },
    {
      "symbol": "IEUS",
      "name": "ISHARES MSCI EUROPE SMALL-CAP ETF "
    },
    {
      "symbol": "IEV",
      "name": "iShares Europe ETF"
    },
    {
      "symbol": "IEX",
      "name": "Idex Corporation"
    },
    {
      "symbol": "IEZ",
      "name": "iShares U.S. Oil Equipment & Services ETF"
    },
    {
      "symbol": "IFBD",
      "name": "Infobird Co Ltd"
    },
    {
      "symbol": "IFEB",
      "name": "Innovator International Developed Power Buffer ETF-February"
    },
    {
      "symbol": "IFED",
      "name": "ETRACS IFED Invest with the Fed TR Index ETN"
    },
    {
      "symbol": "IFF",
      "name": "International Flavors & Fragrances Inc"
    },
    {
      "symbol": "IFGL",
      "name": "iShares International Developed Real Estate ETF"
    },
    {
      "symbol": "IFIN",
      "name": "Infint Acquisition Corp - Class A"
    },
    {
      "symbol": "IFIN-U",
      "name": "Infint Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "IFIN-WS",
      "name": "Infint Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "IFN",
      "name": "India Fund Inc"
    },
    {
      "symbol": "IFN-R",
      "name": "India Fund Inc The Rights expiring May 14 2024 Rights"
    },
    {
      "symbol": "IFN-R-W",
      "name": "India Fund Inc The Rights expiring May 14 2024 Rights when issued"
    },
    {
      "symbol": "IFRA",
      "name": "iShares U.S. Infrastructure ETF"
    },
    {
      "symbol": "IFRX",
      "name": "InflaRx N.V."
    },
    {
      "symbol": "IFS",
      "name": "Intercorp Financial Services Inc"
    },
    {
      "symbol": "IFV",
      "name": "FIRST TRUST DORSEY WRIGHT INTERNATIONAL FOCUS 5 ETF "
    },
    {
      "symbol": "IG",
      "name": "PRINCIPAL INVESTMENT GRADE CORPORATE ACTIVE ETF "
    },
    {
      "symbol": "IGA",
      "name": "Voya Global Advantage and Premium Opportunity Fund"
    },
    {
      "symbol": "IGBH",
      "name": "ISHARES INTEREST RATE HEDGED LONG-TERM CORPORATE BOND ETF "
    },
    {
      "symbol": "IGC",
      "name": "IGC Pharma Inc"
    },
    {
      "symbol": "IGD",
      "name": "Voya Global Equity Dividend and Premium Opportunity Fund"
    },
    {
      "symbol": "IGE",
      "name": "iShares North American Natural Resources ETF"
    },
    {
      "symbol": "IGEB",
      "name": "iShares Investment Grade Bond Factor ETF"
    },
    {
      "symbol": "IGF",
      "name": "iShares Global Infrastructure ETF"
    },
    {
      "symbol": "IGHG",
      "name": "PROSHARES INVESTMENT GRADE-INTEREST RATE HEDGED "
    },
    {
      "symbol": "IGI",
      "name": "Western Asset Investment Grade Defined Opportunity Trust Inc"
    },
    {
      "symbol": "IGIB",
      "name": "iShares Trust iShares 5-10 Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "IGIC",
      "name": "International General Insurance Holdings Ltd"
    },
    {
      "symbol": "IGLB",
      "name": "iShares 10 Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "IGLD",
      "name": "FT VEST GOLD STRATEGY TARGET INCOME ETF "
    },
    {
      "symbol": "IGM",
      "name": "iShares Expanded Tech Sector ETF"
    },
    {
      "symbol": "IGMS",
      "name": "IGM Biosciences Inc"
    },
    {
      "symbol": "IGOV",
      "name": "ISHARES INTERNATIONAL TREASURY BOND ETF "
    },
    {
      "symbol": "IGPT",
      "name": "Invesco AI and Next Gen Software ETF"
    },
    {
      "symbol": "IGR",
      "name": "CBRE Global Real Estate Income Fund"
    },
    {
      "symbol": "IGR-R",
      "name": "CBRE Global Real Estate Income Fund Rights expiring April 6 2023 Rights"
    },
    {
      "symbol": "IGR-R-W",
      "name": "CBRE Global Real Estate Income Fund Rights expiring April 6 2023 Rights when issued"
    },
    {
      "symbol": "IGRO",
      "name": "iShares International Dividend Growth ETF"
    },
    {
      "symbol": "IGSB",
      "name": "iShares Trust iShares 1-5 Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "IGT",
      "name": "International Game Technology PLC"
    },
    {
      "symbol": "IGTA",
      "name": "Inception Growth Acquisition Ltd"
    },
    {
      "symbol": "IGTAR",
      "name": "Inception Growth Acquisition Ltd"
    },
    {
      "symbol": "IGTAU",
      "name": "Inception Growth Acquisition Ltd - Units (1 Ord 1/2 War & 1 Rts)"
    },
    {
      "symbol": "IGTAW",
      "name": "Inception Growth Acquisition Ltd - Warrants(15/10/2026)"
    },
    {
      "symbol": "IGTR",
      "name": "Innovator Gradient Tactical Rotation Strategy ETF"
    },
    {
      "symbol": "IGV",
      "name": "iShares Expanded Tech-Software Sector ETF"
    },
    {
      "symbol": "IGZ",
      "name": "NYSE ARCA LISTED TEST STOCK FOR CTS CQS"
    },
    {
      "symbol": "IH",
      "name": "iHuman Inc"
    },
    {
      "symbol": "IHAK",
      "name": "ISHARES CYBERSECURITY AND TECH ETF "
    },
    {
      "symbol": "IHD",
      "name": "Voya Emerging Markets High Dividend Equity Fund"
    },
    {
      "symbol": "IHDG",
      "name": "WisdomTree International Hedged Quality Dividend Growth Fund"
    },
    {
      "symbol": "IHE",
      "name": "iShares U.S. Pharmaceuticals ETF"
    },
    {
      "symbol": "IHF",
      "name": "iShares U.S. Healthcare Providers ETF"
    },
    {
      "symbol": "IHG",
      "name": "Intercontinental Hotels Group"
    },
    {
      "symbol": "IHI",
      "name": "iShares U.S. Medical Devices ETF"
    },
    {
      "symbol": "IHIT",
      "name": "Invesco High Income 2023 Target Term Fund"
    },
    {
      "symbol": "IHRT",
      "name": "iHeartMedia Inc - Class A New"
    },
    {
      "symbol": "IHS",
      "name": "IHS Holding Ltd"
    },
    {
      "symbol": "IHT",
      "name": "Innsuites Hospitality Trust"
    },
    {
      "symbol": "IHTA",
      "name": "Invesco High Income 2024 Target Term Fund"
    },
    {
      "symbol": "IHY",
      "name": "VanEck International High Yield Bond ETF"
    },
    {
      "symbol": "IHYF",
      "name": "Invesco High Yield Bond Factor ETF"
    },
    {
      "symbol": "IIF",
      "name": "Morgan Stanley India Investment Fund Inc"
    },
    {
      "symbol": "IIGD",
      "name": "INVESCO INVESTMENT GRADE DEFENSIVE ETF "
    },
    {
      "symbol": "III",
      "name": "Information Services Group Inc"
    },
    {
      "symbol": "IIIN",
      "name": "Insteel Industries Inc"
    },
    {
      "symbol": "IIIV",
      "name": "i3 Verticals Inc - Class A"
    },
    {
      "symbol": "IIM",
      "name": "Invesco Value Municipal Income Trust"
    },
    {
      "symbol": "IINN",
      "name": "Inspira Technologies Oxy B.H.N. Ltd"
    },
    {
      "symbol": "IINNW",
      "name": "Inspira Technologies Oxy B.H.N. Ltd - Warrants (30/06/2026)"
    },
    {
      "symbol": "IIPR",
      "name": "Innovative Industrial Properties Inc"
    },
    {
      "symbol": "IIPR-P-A",
      "name": "Innovative Industrial Properties Inc"
    },
    {
      "symbol": "IIVI",
      "name": "Coherent Corp"
    },
    {
      "symbol": "IJAN",
      "name": "Innovator International Developed Power Buffer ETF January"
    },
    {
      "symbol": "IJH",
      "name": "iShares Core S&P Mid-Cap ETF"
    },
    {
      "symbol": "IJJ",
      "name": "iShares S&P Mid-Cap 400 Value ETF"
    },
    {
      "symbol": "IJK",
      "name": "iShares S&P Mid-Cap 400 Growth ETF"
    },
    {
      "symbol": "IJR",
      "name": "iShares Core S&P Small-Cap ETF"
    },
    {
      "symbol": "IJS",
      "name": "iShares S&P Small-Cap 600 Value ETF"
    },
    {
      "symbol": "IJT",
      "name": "iShares S&P Small-Cap 600 Growth ETF"
    },
    {
      "symbol": "IJUL",
      "name": "Innovator International Developed Power Buffer ETF July"
    },
    {
      "symbol": "IKNA",
      "name": "Ikena Oncology Inc"
    },
    {
      "symbol": "IKT",
      "name": "Inhibikase Therapeutics Inc"
    },
    {
      "symbol": "ILAG",
      "name": "Intelligent Living Application Group Inc"
    },
    {
      "symbol": "ILCB",
      "name": "iShares Morningstar U.S. Equity ETF"
    },
    {
      "symbol": "ILCG",
      "name": "iShares Morningstar Growth ETF"
    },
    {
      "symbol": "ILCV",
      "name": "iShares Morningstar Value ETF"
    },
    {
      "symbol": "ILDR",
      "name": "FIRST TRUST INNOVATION LEADERS ETF "
    },
    {
      "symbol": "ILF",
      "name": "iShares Latin America 40 ETF"
    },
    {
      "symbol": "ILIT",
      "name": "iShares Lithium Miners and Producers ETF"
    },
    {
      "symbol": "ILMN",
      "name": "Illumina Inc"
    },
    {
      "symbol": "ILPT",
      "name": "Industrial Logistics Properties Trust"
    },
    {
      "symbol": "ILTB",
      "name": "iShares Core 10+ Year USD Bond ETF"
    },
    {
      "symbol": "IMAB",
      "name": "I-Mab"
    },
    {
      "symbol": "IMACW",
      "name": "IMAC Holdings Inc - Warrants (13/12/2023)"
    },
    {
      "symbol": "IMAQ",
      "name": "International Media Acquisition Corp"
    },
    {
      "symbol": "IMAQR",
      "name": "International Media Acquisition Corp"
    },
    {
      "symbol": "IMAQU",
      "name": "International Media Acquisition Corp - Units (1 Ord 1 Rts & 1 War)"
    },
    {
      "symbol": "IMAQW",
      "name": "International Media Acquisition Corp - Warrants (21/07/2026)"
    },
    {
      "symbol": "IMAR",
      "name": "Innovator International Developed Power Buffer ETF March"
    },
    {
      "symbol": "IMAX",
      "name": "Imax Corp"
    },
    {
      "symbol": "IMCB",
      "name": "iShares Morningstar Mid-Cap ETF"
    },
    {
      "symbol": "IMCC",
      "name": "IM Cannabis Corp"
    },
    {
      "symbol": "IMCG",
      "name": "iShares Morningstar Mid-Cap Growth ETF"
    },
    {
      "symbol": "IMCR",
      "name": "Immunocore Holdings plc"
    },
    {
      "symbol": "IMCV",
      "name": "iShares Morningstar Mid-Cap Value ETF"
    },
    {
      "symbol": "IMFL",
      "name": "INVESCO INTERNATIONAL DEVELOPED DYNAMIC MULTIFACTOR ETF "
    },
    {
      "symbol": "IMKTA",
      "name": "Ingles Markets Inc - Class A"
    },
    {
      "symbol": "IMMP",
      "name": "Immutep Ltd"
    },
    {
      "symbol": "IMMR",
      "name": "Immersion Corp"
    },
    {
      "symbol": "IMMX",
      "name": "Immix Biopharma Inc"
    },
    {
      "symbol": "IMNM",
      "name": "Immunome Inc"
    },
    {
      "symbol": "IMNN",
      "name": "Imunon Inc"
    },
    {
      "symbol": "IMO",
      "name": "Imperial Oil Ltd"
    },
    {
      "symbol": "IMOM",
      "name": "ALPHA ARCHITECT INTERNATIONAL QUANTITATIVE MOMENTUM ETF "
    },
    {
      "symbol": "IMOS",
      "name": "Chipmos Technologies Inc"
    },
    {
      "symbol": "IMPP",
      "name": "Imperial Petroleum Inc"
    },
    {
      "symbol": "IMPPP",
      "name": "Imperial Petroleum Inc"
    },
    {
      "symbol": "IMPPV",
      "name": "Imperial Petroleum Inc Exdistribution When Issued"
    },
    {
      "symbol": "IMRN",
      "name": "Immuron Ltd"
    },
    {
      "symbol": "IMRX",
      "name": "Immuneering Corp Class A"
    },
    {
      "symbol": "IMSI",
      "name": "Invesco Municipal Strategic Income ETF"
    },
    {
      "symbol": "IMTB",
      "name": "iShares Core 5-10 Year USD Bond ETF"
    },
    {
      "symbol": "IMTE",
      "name": "Integrated Media Technology Ltd"
    },
    {
      "symbol": "IMTM",
      "name": "ISHARES MSCI INTL MOMENTUM FACTOR ETF "
    },
    {
      "symbol": "IMTX",
      "name": "Immatics N.V"
    },
    {
      "symbol": "IMTXW",
      "name": "Immatics N.V - Warrants (01/07/2025)"
    },
    {
      "symbol": "IMUX",
      "name": "Immunic Inc"
    },
    {
      "symbol": "IMVT",
      "name": "Immunovant Inc"
    },
    {
      "symbol": "IMXI",
      "name": "International Money Express Inc"
    },
    {
      "symbol": "INAB",
      "name": "IN8bio Inc"
    },
    {
      "symbol": "INAQ",
      "name": "Insight Acquisition Corp - Class A"
    },
    {
      "symbol": "INAQU",
      "name": "Insight Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "INAQW",
      "name": "Insight Acquisition Corp - Warrants(26/08/2026)"
    },
    {
      "symbol": "INAV",
      "name": "Mohr Industry Nav ETF"
    },
    {
      "symbol": "INBK",
      "name": "First Internet Bancorp"
    },
    {
      "symbol": "INBKZ",
      "name": "First Internet Bancorp"
    },
    {
      "symbol": "INBS",
      "name": "Intelligent Bio Solutions Inc"
    },
    {
      "symbol": "INBX",
      "name": "Inhibrx Inc"
    },
    {
      "symbol": "INC",
      "name": "VANECK DYNAMIC HIGH INCOME ETF "
    },
    {
      "symbol": "INCM",
      "name": "Franklin Income Focus ETF"
    },
    {
      "symbol": "INCO",
      "name": "Columbia India Consumer ETF"
    },
    {
      "symbol": "INCR",
      "name": "INC Research Holdings Inc"
    },
    {
      "symbol": "INCY",
      "name": "Incyte Corp"
    },
    {
      "symbol": "INDA",
      "name": "ISHARES MSCI INDIA ETF "
    },
    {
      "symbol": "INDB",
      "name": "Independent Bank Corp"
    },
    {
      "symbol": "INDE",
      "name": "MATTHEWS INDIA ACTIVE ETF "
    },
    {
      "symbol": "INDF",
      "name": "NIFTY INDIA FINANCIALS ETF "
    },
    {
      "symbol": "INDI",
      "name": "Indie Semiconductor Inc - Class A"
    },
    {
      "symbol": "INDL",
      "name": "DIREXION DAILY MSCI INDIA BULL 2X SHARES "
    },
    {
      "symbol": "INDO",
      "name": "Indonesia Energy Corp Ltd"
    },
    {
      "symbol": "INDP",
      "name": "Indaptus Therapeutics Inc"
    },
    {
      "symbol": "INDS",
      "name": "Pacer Industrial Real Estate ETF"
    },
    {
      "symbol": "INDV",
      "name": "Indivior Plc"
    },
    {
      "symbol": "INDY",
      "name": "iShares India 50 ETF"
    },
    {
      "symbol": "INFA",
      "name": "Informatica Inc - Class A"
    },
    {
      "symbol": "INFL",
      "name": "HORIZON KINETICS INFLATION BENEFICIARIES ETF "
    },
    {
      "symbol": "INFN",
      "name": "Infinera Corp"
    },
    {
      "symbol": "INFR",
      "name": "ClearBridge Sustainable Infrastructure ETF"
    },
    {
      "symbol": "INFU",
      "name": "InfuSystem Holdings Inc"
    },
    {
      "symbol": "INFY",
      "name": "Infosys Ltd"
    },
    {
      "symbol": "ING",
      "name": "ING Groep N.V."
    },
    {
      "symbol": "INGN",
      "name": "Inogen Inc"
    },
    {
      "symbol": "INGR",
      "name": "Ingredion Inc"
    },
    {
      "symbol": "INHD",
      "name": "Inno Holdings Inc"
    },
    {
      "symbol": "INKA",
      "name": "Near Intelligence Inc - Class A"
    },
    {
      "symbol": "INKM",
      "name": "SPDR SSgA Income Allocation ETF"
    },
    {
      "symbol": "INKT",
      "name": "MiNK Therapeutics Inc"
    },
    {
      "symbol": "INLX",
      "name": "Intellinetics Inc"
    },
    {
      "symbol": "INM",
      "name": "InMed Pharmaceuticals Inc"
    },
    {
      "symbol": "INMB",
      "name": "INmune Bio Inc"
    },
    {
      "symbol": "INMD",
      "name": "Inmode Ltd"
    },
    {
      "symbol": "INMU",
      "name": "BlackRock Intermediate Muni Income Bond ETF"
    },
    {
      "symbol": "INN",
      "name": "Summit Hotel Properties Inc"
    },
    {
      "symbol": "INN-P-E",
      "name": "Summit Hotel Properties Inc"
    },
    {
      "symbol": "INN-P-F",
      "name": "Summit Hotel Properties Inc"
    },
    {
      "symbol": "INNO",
      "name": "HARBOR DISRUPTIVE INNOVATION ETF "
    },
    {
      "symbol": "INNV",
      "name": "InnovAge Holding Corp"
    },
    {
      "symbol": "INO",
      "name": "Inovio Pharmaceuticals Inc"
    },
    {
      "symbol": "INOD",
      "name": "Innodata Inc"
    },
    {
      "symbol": "INOV",
      "name": "Innovator International Developed Power Buffer ETF November"
    },
    {
      "symbol": "INPX",
      "name": "Inpixon"
    },
    {
      "symbol": "INPXV",
      "name": "Inpixon"
    },
    {
      "symbol": "INQQ",
      "name": "INDIA INTERNET & ECOMMERCE ETF "
    },
    {
      "symbol": "INRO",
      "name": "BlackRock U.S. Industry Rotation ETF"
    },
    {
      "symbol": "INSE",
      "name": "Inspired Entertainment Inc"
    },
    {
      "symbol": "INSG",
      "name": "Inseego Corp"
    },
    {
      "symbol": "INSI",
      "name": "Insight Select Income Fund"
    },
    {
      "symbol": "INSM",
      "name": "Insmed Inc"
    },
    {
      "symbol": "INSP",
      "name": "Inspire Medical Systems Inc"
    },
    {
      "symbol": "INST",
      "name": "Instructure Holdings Inc"
    },
    {
      "symbol": "INSW",
      "name": "International Seaways Inc"
    },
    {
      "symbol": "INTA",
      "name": "Intapp Inc"
    },
    {
      "symbol": "INTC",
      "name": "Intel Corp"
    },
    {
      "symbol": "INTE",
      "name": "Integral Acquisition Corp 1 - Class A"
    },
    {
      "symbol": "INTEU",
      "name": "Integral Acquisition Corp 1 - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "INTEW",
      "name": "Integral Acquisition Corp 1 - Warrants (31/05/2028)"
    },
    {
      "symbol": "INTF",
      "name": "ISHARES INTERNATIONAL EQUITY FACTOR ETF "
    },
    {
      "symbol": "INTG",
      "name": "Intergroup Corp"
    },
    {
      "symbol": "INTJ",
      "name": "Intelligent Group Ltd"
    },
    {
      "symbol": "INTL",
      "name": "MAIN INTERNATIONAL ETF "
    },
    {
      "symbol": "INTR",
      "name": "Inter & Co Inc - Class A"
    },
    {
      "symbol": "INTS",
      "name": "Intensity Therapeutics Inc"
    },
    {
      "symbol": "INTT",
      "name": "Intest Corp"
    },
    {
      "symbol": "INTU",
      "name": "Intuit Inc"
    },
    {
      "symbol": "INTZ",
      "name": "Intrusion Inc"
    },
    {
      "symbol": "INUV",
      "name": "Inuvo Inc"
    },
    {
      "symbol": "INVA",
      "name": "Innoviva Inc"
    },
    {
      "symbol": "INVE",
      "name": "Identiv Inc"
    },
    {
      "symbol": "INVH",
      "name": "Invitation Homes Inc"
    },
    {
      "symbol": "INVO",
      "name": "INVO Bioscience Inc"
    },
    {
      "symbol": "INVZ",
      "name": "Innoviz Technologies Ltd"
    },
    {
      "symbol": "INVZW",
      "name": "Innoviz Technologies Ltd - Warrants (05/04/2026)"
    },
    {
      "symbol": "INZY",
      "name": "Inozyme Pharma Inc"
    },
    {
      "symbol": "IOBT",
      "name": "IO Biotech Inc"
    },
    {
      "symbol": "IOCT",
      "name": "Innovator International Developed Power Buffer ETF - October"
    },
    {
      "symbol": "IOMT",
      "name": "Isomet Corp"
    },
    {
      "symbol": "ION",
      "name": "PROSHARES S&P GLOBAL CORE BATTERY METALS ETF "
    },
    {
      "symbol": "IONM",
      "name": "Assure Holdings Corp"
    },
    {
      "symbol": "IONQ",
      "name": "IonQ Inc"
    },
    {
      "symbol": "IONQ-WS",
      "name": "IonQ Inc Wt"
    },
    {
      "symbol": "IONR",
      "name": "ioneer Ltd"
    },
    {
      "symbol": "IONS",
      "name": "Ionis Pharmaceuticals Inc"
    },
    {
      "symbol": "IOO",
      "name": "iShares Global 100 ETF"
    },
    {
      "symbol": "IOPP",
      "name": "Simplify Tara India Opportunities ETF"
    },
    {
      "symbol": "IOR",
      "name": "Income Opportunity Realty Investors Inc"
    },
    {
      "symbol": "IOSP",
      "name": "Innospec Inc"
    },
    {
      "symbol": "IOT",
      "name": "Samsara Inc - Class A"
    },
    {
      "symbol": "IOVA",
      "name": "Iovance Biotherapeutics Inc"
    },
    {
      "symbol": "IP",
      "name": "International Paper Company"
    },
    {
      "symbol": "IPA",
      "name": "ImmunoPrecise Antibodies Ltd"
    },
    {
      "symbol": "IPAC",
      "name": "ISHARES CORE MSCI PACIFIC ETF "
    },
    {
      "symbol": "IPAR",
      "name": "Inter Parfums Inc"
    },
    {
      "symbol": "IPAY",
      "name": "Amplify Mobile Payments ETF"
    },
    {
      "symbol": "IPB",
      "name": "Merrill Lynch Depositor Inc"
    },
    {
      "symbol": "IPDN",
      "name": "Professional Diversity Network Inc"
    },
    {
      "symbol": "IPDP",
      "name": "DIVIDEND PERFORMERS ETF "
    },
    {
      "symbol": "IPG",
      "name": "Interpublic Group Of Cos. Inc"
    },
    {
      "symbol": "IPGP",
      "name": "IPG Photonics Corp"
    },
    {
      "symbol": "IPHA",
      "name": "Innate Pharma"
    },
    {
      "symbol": "IPI",
      "name": "Intrepid Potash Inc"
    },
    {
      "symbol": "IPKW",
      "name": "INVESCO INTERNATIONAL BUYBACK ACHIEVERS ETF "
    },
    {
      "symbol": "IPO",
      "name": "RENAISSANCE IPO ETF "
    },
    {
      "symbol": "IPOS",
      "name": "RENAISSANCE INTERNATIONAL IPO ETF "
    },
    {
      "symbol": "IPPP",
      "name": "PREFERRED-PLUS ETF "
    },
    {
      "symbol": "IPSC",
      "name": "Century Therapeutics Inc"
    },
    {
      "symbol": "IPW",
      "name": "iPower Inc"
    },
    {
      "symbol": "IPWR",
      "name": "Ideal Power Inc"
    },
    {
      "symbol": "IPX",
      "name": "IperionX Ltd"
    },
    {
      "symbol": "IPXX",
      "name": "Inflection Point Acquisition Corp II - Class A"
    },
    {
      "symbol": "IPXXU",
      "name": "Inflection Point Acquisition Corp II - Units (1 Ord Class A & 1/2 Warr)"
    },
    {
      "symbol": "IPXXW",
      "name": "Inflection Point Acquisition Corp II - Warrants (15/07/2023)"
    },
    {
      "symbol": "IQ",
      "name": "iQIYI Inc"
    },
    {
      "symbol": "IQDE",
      "name": "FLEXSHARES INTERNATIONAL QUALITY DIVIDEND DEFENSIVE INDEX FUND "
    },
    {
      "symbol": "IQDF",
      "name": "FLEXSHARES INTERNATIONAL QUALITY DIVIDEND INDEX FUND "
    },
    {
      "symbol": "IQDG",
      "name": "WisdomTree International Quality Dividend Growth Fund"
    },
    {
      "symbol": "IQDY",
      "name": "FLEXSHARES INTERNATIONAL QUALITY DIVIDEND DYNAMIC INDEX FUND "
    },
    {
      "symbol": "IQHI",
      "name": "IQ MACKAY ESG HIGH INCOME ETF "
    },
    {
      "symbol": "IQI",
      "name": "Invesco Quality Municipal Income Trust"
    },
    {
      "symbol": "IQIN",
      "name": "IQ 500 INTERNATIONAL ETF "
    },
    {
      "symbol": "IQLT",
      "name": "ISHARES MSCI INTL QUALITY FACTOR ETF "
    },
    {
      "symbol": "IQM",
      "name": "Franklin Intelligent Machines ETF"
    },
    {
      "symbol": "IQMDW",
      "name": "Intelligent Medicine Acquisition Corp - Warrants - (05/11/2026)"
    },
    {
      "symbol": "IQQQ",
      "name": "ProShares Nasdaq-100 High Income ETF"
    },
    {
      "symbol": "IQRA",
      "name": "IQ CBRE Real Assets ETF"
    },
    {
      "symbol": "IQSI",
      "name": "IQ Candriam International Equity ETF"
    },
    {
      "symbol": "IQSM",
      "name": "IQ Candriam U.S. Mid Cap Equity ETF"
    },
    {
      "symbol": "IQSU",
      "name": "IQ Candriam U.S. Large Cap Equity ETF"
    },
    {
      "symbol": "IQV",
      "name": "IQVIA Holdings Inc"
    },
    {
      "symbol": "IR",
      "name": "Ingersoll-Rand Inc"
    },
    {
      "symbol": "IRAA",
      "name": "Iris Acquisition Corp - Class A"
    },
    {
      "symbol": "IRAAU",
      "name": "Iris Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "IRAAW",
      "name": "Iris Acquisition Corp - Warrants (24/02/2026)"
    },
    {
      "symbol": "IRBO",
      "name": "ISHARES ROBOTICS AND ARTIFICIAL INTELLIGENCE MULTISECTOR ETF "
    },
    {
      "symbol": "IRBT",
      "name": "Irobot Corp"
    },
    {
      "symbol": "IRDM",
      "name": "Iridium Communications Inc"
    },
    {
      "symbol": "IREN",
      "name": "Iris Energy Ltd"
    },
    {
      "symbol": "IRET",
      "name": "iREIT - MarketVector Quality REIT Index ETF"
    },
    {
      "symbol": "IRIX",
      "name": "IRIDEX Corp"
    },
    {
      "symbol": "IRL",
      "name": "New Ireland Fund Inc"
    },
    {
      "symbol": "IRM",
      "name": "Iron Mountain Inc"
    },
    {
      "symbol": "IRMD",
      "name": "Iradimed Corp"
    },
    {
      "symbol": "IROH",
      "name": "Iron Horse Acquisitions Corp"
    },
    {
      "symbol": "IROHR",
      "name": "Iron Horse Acquisitions Corp"
    },
    {
      "symbol": "IROHU",
      "name": "Iron Horse Acquisitions Corp - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "IROHW",
      "name": "Iron Horse Acquisitions Corp - Warrants (27/12/2028)"
    },
    {
      "symbol": "IRON",
      "name": "Disc Medicine Inc"
    },
    {
      "symbol": "IROQ",
      "name": "IF Bancorp Inc"
    },
    {
      "symbol": "IRS",
      "name": "Irsa Inversiones Y Representaciones S.A."
    },
    {
      "symbol": "IRS-WS",
      "name": "Irsa Inversiones Y Representaciones S.A. - Warrants (13/05/2026)"
    },
    {
      "symbol": "IRT",
      "name": "Independence Realty Trust Inc"
    },
    {
      "symbol": "IRTC",
      "name": "iRhythm Technologies Inc"
    },
    {
      "symbol": "IRTR",
      "name": "iShares LifePath Retirement ETF"
    },
    {
      "symbol": "IRVH",
      "name": "GLOBAL X INTEREST RATE VOLATILITY & INFLATION HEDGE ETF "
    },
    {
      "symbol": "IRWD",
      "name": "Ironwood Pharmaceuticals Inc - Class A"
    },
    {
      "symbol": "ISCB",
      "name": "iShares Morningstar Small-Cap ETF"
    },
    {
      "symbol": "ISCF",
      "name": "ISHARES INTERNATIONAL SMALL-CAP EQUITY FACTOR ETF "
    },
    {
      "symbol": "ISCG",
      "name": "iShares Morningstar Small-Cap Growth ETF"
    },
    {
      "symbol": "ISCV",
      "name": "iShares Morningstar Small-Cap Value ETF"
    },
    {
      "symbol": "ISD",
      "name": "PGIM High Yield Bond Fund Inc"
    },
    {
      "symbol": "ISDB",
      "name": "Invesco Short Duration Bond ETF"
    },
    {
      "symbol": "ISDR",
      "name": "Issuer Direct Corp"
    },
    {
      "symbol": "ISEP",
      "name": "Innovator International Developed Power Buffer ETF September"
    },
    {
      "symbol": "ISG",
      "name": "ING Group NV Perpetual Dent Secs 6125"
    },
    {
      "symbol": "ISHG",
      "name": "ISHARES 1-3 YEAR INTERNATIONAL TREASURY BOND ETF "
    },
    {
      "symbol": "ISHP",
      "name": "First Trust S-Network E-Commerce ETF"
    },
    {
      "symbol": "ISMD",
      "name": "INSPIRE SMALL/MID CAP ETF "
    },
    {
      "symbol": "ISO",
      "name": "IsoPlexis Corp"
    },
    {
      "symbol": "ISPC",
      "name": "iSpecimen Inc"
    },
    {
      "symbol": "ISPO",
      "name": "Inspirato Incorporated - Class A"
    },
    {
      "symbol": "ISPOW",
      "name": "Inspirato Incorporated - Warrants (11/02/2027)"
    },
    {
      "symbol": "ISPR",
      "name": "Ispire Technology Inc"
    },
    {
      "symbol": "ISPY",
      "name": "ProShares S&P 500 High Income ETF"
    },
    {
      "symbol": "ISRA",
      "name": "VANECK ISRAEL ETF "
    },
    {
      "symbol": "ISRG",
      "name": "Intuitive Surgical Inc"
    },
    {
      "symbol": "ISRL",
      "name": "Israel Acquisitions Corp - Class A"
    },
    {
      "symbol": "ISRLU",
      "name": "Israel Acquisitions Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "ISRLW",
      "name": "Israel Acquisitions Corp - Warrants (12/12/2027)"
    },
    {
      "symbol": "ISSC",
      "name": "Innovative Solutions And Support Inc"
    },
    {
      "symbol": "ISTB",
      "name": "ISHARES CORE 1-5 YEAR USD BOND ETF "
    },
    {
      "symbol": "ISTR",
      "name": "Investar Holding Corp"
    },
    {
      "symbol": "ISUN",
      "name": "iSun Inc"
    },
    {
      "symbol": "ISVL",
      "name": "ISHARES INTERNATIONAL DEVELOPED SMALL CAP VALUE FACTOR ETF "
    },
    {
      "symbol": "ISWN",
      "name": "AMPLIFY BLACKSWAN ISWN ETF "
    },
    {
      "symbol": "ISZE",
      "name": "ISHARES MSCI INTL SIZE FACTOR ETF "
    },
    {
      "symbol": "IT",
      "name": "Gartner Inc"
    },
    {
      "symbol": "ITA",
      "name": "iShares U.S. Aerospace & Defense ETF"
    },
    {
      "symbol": "ITAN",
      "name": "Sparkline Intangible Value ETF"
    },
    {
      "symbol": "ITB",
      "name": "iShares U.S. Home Construction ETF"
    },
    {
      "symbol": "ITCI",
      "name": "Intra-Cellular Therapies Inc"
    },
    {
      "symbol": "ITDA",
      "name": "iShares LifePath Target Date 2025 ETF"
    },
    {
      "symbol": "ITDB",
      "name": "iShares LifePath Target Date 2030 ETF"
    },
    {
      "symbol": "ITDC",
      "name": "iShares LifePath Target Date 2035 ETF"
    },
    {
      "symbol": "ITDD",
      "name": "iShares LifePath Target Date 2040 ETF"
    },
    {
      "symbol": "ITDE",
      "name": "iShares LifePath Target Date 2045 ETF"
    },
    {
      "symbol": "ITDF",
      "name": "iShares LifePath Target Date 2050 ETF"
    },
    {
      "symbol": "ITDG",
      "name": "iShares LifePath Target Date 2055 ETF"
    },
    {
      "symbol": "ITDH",
      "name": "iShares LifePath Target Date 2060 ETF"
    },
    {
      "symbol": "ITDI",
      "name": "iShares LifePath Target Date 2065 ETF"
    },
    {
      "symbol": "ITEQ",
      "name": "Amplify BlueStar Israel Technology ETF"
    },
    {
      "symbol": "ITGR",
      "name": "Integer Holdings Corp"
    },
    {
      "symbol": "ITI",
      "name": "Iteris Inc"
    },
    {
      "symbol": "ITIC",
      "name": "Investors Title Company"
    },
    {
      "symbol": "ITM",
      "name": "VanEck Intermediate Muni ETF"
    },
    {
      "symbol": "ITOS",
      "name": "ITeos Therapeutics Inc"
    },
    {
      "symbol": "ITOT",
      "name": "iShares Core S&P Total U.S. Stock Market ETF"
    },
    {
      "symbol": "ITP",
      "name": "IT Tech Packaging Inc"
    },
    {
      "symbol": "ITRG",
      "name": "Integra Resources Corp"
    },
    {
      "symbol": "ITRI",
      "name": "Itron Inc"
    },
    {
      "symbol": "ITRM",
      "name": "Iterum Therapeutics Plc"
    },
    {
      "symbol": "ITRN",
      "name": "Ituran Location And Control Ltd"
    },
    {
      "symbol": "ITT",
      "name": "ITT Inc"
    },
    {
      "symbol": "ITUB",
      "name": "Itau Unibanco Holding S.A."
    },
    {
      "symbol": "ITW",
      "name": "Illinois Tool Works Inc"
    },
    {
      "symbol": "IUS",
      "name": "INVESCO RAFI(TM) STRATEGIC US ETF "
    },
    {
      "symbol": "IUSB",
      "name": "ISHARES CORE TOTAL USD BOND MARKET ETF "
    },
    {
      "symbol": "IUSG",
      "name": "iShares Core S&P U.S.Growth ETF"
    },
    {
      "symbol": "IUSV",
      "name": "iShares Core S&P U.S.Value ETF"
    },
    {
      "symbol": "IVA",
      "name": "Inventiva"
    },
    {
      "symbol": "IVAC",
      "name": "Intevac Inc"
    },
    {
      "symbol": "IVAL",
      "name": "ALPHA ARCHITECT INTERNATIONAL QUANTITATIVE VALUE ETF "
    },
    {
      "symbol": "IVCA",
      "name": "Investcorp India Acquisition Corp - Class A"
    },
    {
      "symbol": "IVCAU",
      "name": "Investcorp India Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "IVCAW",
      "name": "Investcorp India Acquisition Corp - Warrants (01/06/2028)"
    },
    {
      "symbol": "IVCB",
      "name": "Investcorp Europe Acquisition Corp I - Class A"
    },
    {
      "symbol": "IVCBU",
      "name": "Investcorp Europe Acquisition Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "IVCBW",
      "name": "Investcorp Europe Acquisition Corp I - Warrants (15/12/2026)"
    },
    {
      "symbol": "IVCP",
      "name": "Swiftmerge Acquisition Corp - Class A"
    },
    {
      "symbol": "IVCPU",
      "name": "Swiftmerge Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "IVCPW",
      "name": "Swiftmerge Acquisition Corp - Warrants (13/12/2026)"
    },
    {
      "symbol": "IVDA",
      "name": "Iveda Solutions Inc"
    },
    {
      "symbol": "IVDAW",
      "name": "Iveda Solutions Inc - Warrants (01/04/2027)"
    },
    {
      "symbol": "IVE",
      "name": "iShares S&P 500 Value ETF"
    },
    {
      "symbol": "IVEG",
      "name": "ISHARES EMERGENT FOOD AND AGTECH MULTISECTOR ETF "
    },
    {
      "symbol": "IVES",
      "name": "Amplify Global Cloud Technology ETF"
    },
    {
      "symbol": "IVH",
      "name": "Delaware Ivy High Income Opportunities Fund"
    },
    {
      "symbol": "IVLU",
      "name": "ISHARES MSCI INTL VALUE FACTOR ETF "
    },
    {
      "symbol": "IVOG",
      "name": "VANGUARD S&P MID-CAP 400 GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "IVOL",
      "name": "Quadratic Interest Rate Volatility And Inflation Hedge ETF"
    },
    {
      "symbol": "IVOO",
      "name": "VANGUARD S&P MID-CAP 400 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "IVOV",
      "name": "VANGUARD S&P MID-CAP 400 VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "IVP",
      "name": "Inspire Veterinary Partners Inc - Class A"
    },
    {
      "symbol": "IVR",
      "name": "Invesco Mortgage Capital Inc"
    },
    {
      "symbol": "IVR-P-B",
      "name": "Invesco Mortgage Capital Inc Preferred Series B Cum Fxd to Fltg"
    },
    {
      "symbol": "IVR-P-C",
      "name": "Invesco Mortgage Capital Inc"
    },
    {
      "symbol": "IVRA",
      "name": "Invesco Real Assets ESG ETF"
    },
    {
      "symbol": "IVRS",
      "name": "iShares Future Metaverse Tech and Communications ETF"
    },
    {
      "symbol": "IVT",
      "name": "InvenTrust Properties Corp"
    },
    {
      "symbol": "IVV",
      "name": "iShares Core S&P 500 ETF"
    },
    {
      "symbol": "IVVB",
      "name": "iShares Large Cap Deep Buffer ETF"
    },
    {
      "symbol": "IVVD",
      "name": "Invivyd Inc"
    },
    {
      "symbol": "IVVM",
      "name": "iShares Large Cap Moderate Buffer ETF"
    },
    {
      "symbol": "IVVW",
      "name": "iShares S&P 500 BuyWrite ETF"
    },
    {
      "symbol": "IVW",
      "name": "iShares S&P 500 Growth ETF"
    },
    {
      "symbol": "IVZ",
      "name": "Invesco Ltd"
    },
    {
      "symbol": "IWB",
      "name": "iShares Russell 1000 ETF"
    },
    {
      "symbol": "IWC",
      "name": "iShares Micro-Cap ETF"
    },
    {
      "symbol": "IWD",
      "name": "iShares Russell 1000 Value ETF"
    },
    {
      "symbol": "IWDL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "IWF",
      "name": "iShares Russell 1000 Growth ETF"
    },
    {
      "symbol": "IWFG",
      "name": "IQ WINSLOW FOCUSED LARGE CAP GROWTH ETF "
    },
    {
      "symbol": "IWFH",
      "name": "ISHARES VIRTUAL WORK AND LIFE MULTISECTOR ETF "
    },
    {
      "symbol": "IWFL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "IWIN",
      "name": "AMPLIFY INFLATION FIGHTER ETF "
    },
    {
      "symbol": "IWL",
      "name": "iShares Russell Top 200 ETF"
    },
    {
      "symbol": "IWLG",
      "name": "IQ WINSLOW LARGE CAP GROWTH ETF "
    },
    {
      "symbol": "IWM",
      "name": "iShares Russell 2000 ETF"
    },
    {
      "symbol": "IWML",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "IWMW",
      "name": "iShares Russell 2000 BuyWrite ETF"
    },
    {
      "symbol": "IWMY",
      "name": "Defiance R2000 Enhanced Options Income ETF"
    },
    {
      "symbol": "IWN",
      "name": "iShares Russell 2000 Value ETF"
    },
    {
      "symbol": "IWO",
      "name": "iShares Russell 2000 Growth ETF"
    },
    {
      "symbol": "IWP",
      "name": "iShares Russell Mid-Cap Growth ETF"
    },
    {
      "symbol": "IWR",
      "name": "iShares Russell Mid-Cap ETF"
    },
    {
      "symbol": "IWS",
      "name": "iShares Russell Mid-Cap Value ETF"
    },
    {
      "symbol": "IWTR",
      "name": "ISHARES MSCI WATER MANAGEMENT MULTISECTOR ETF "
    },
    {
      "symbol": "IWV",
      "name": "iShares Russell 3000 ETF"
    },
    {
      "symbol": "IWX",
      "name": "iShares Russell Top 200 Value ETF"
    },
    {
      "symbol": "IWY",
      "name": "iShares Russell Top 200 Growth ETF"
    },
    {
      "symbol": "IX",
      "name": "Orix Corporation"
    },
    {
      "symbol": "IXAQ",
      "name": "IX Acquisition Corp - Class A"
    },
    {
      "symbol": "IXAQU",
      "name": "IX Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "IXAQW",
      "name": "IX Acquisition Corp - Warrants (31/07/2028)"
    },
    {
      "symbol": "IXC",
      "name": "iShares Global Energy ETF"
    },
    {
      "symbol": "IXG",
      "name": "iShares Global Financials ETF"
    },
    {
      "symbol": "IXHL",
      "name": "Incannex Healthcare Inc"
    },
    {
      "symbol": "IXJ",
      "name": "iShares Global Healthcare ETF"
    },
    {
      "symbol": "IXN",
      "name": "iShares Global Tech ETF"
    },
    {
      "symbol": "IXP",
      "name": "iShares Global Comm Services ETF"
    },
    {
      "symbol": "IXUS",
      "name": "ISHARES CORE MSCI TOTAL INTERNATIONAL STOCK ETF "
    },
    {
      "symbol": "IYC",
      "name": "iShares U.S. Consumer Discretionary ETF"
    },
    {
      "symbol": "IYE",
      "name": "iShares U.S. Energy ETF"
    },
    {
      "symbol": "IYF",
      "name": "iShares U.S. Financials ETF"
    },
    {
      "symbol": "IYG",
      "name": "iShares U.S. Financial Services ETF"
    },
    {
      "symbol": "IYH",
      "name": "iShares U.S. Healthcare ETF"
    },
    {
      "symbol": "IYJ",
      "name": "iShares U.S. Industrials ETF"
    },
    {
      "symbol": "IYK",
      "name": "iShares U.S. Consumer Staples ETF"
    },
    {
      "symbol": "IYLD",
      "name": "ISHARES MORNINGSTAR MULTI-ASSET INCOME ETF "
    },
    {
      "symbol": "IYM",
      "name": "iShares U.S. Basic Materials ETF"
    },
    {
      "symbol": "IYR",
      "name": "iShares U.S. Real Estate ETF"
    },
    {
      "symbol": "IYT",
      "name": "iShares U.S. Transportation ETF"
    },
    {
      "symbol": "IYW",
      "name": "iShares U.S. Technology ETF"
    },
    {
      "symbol": "IYY",
      "name": "iShares Dow Jones U.S. ETF"
    },
    {
      "symbol": "IYZ",
      "name": "iShares U.S. Telecommunications ETF"
    },
    {
      "symbol": "IZEA",
      "name": "IZEA Worldwide Inc"
    },
    {
      "symbol": "IZM",
      "name": "Iczoom Group Inc - Class A"
    },
    {
      "symbol": "IZRL",
      "name": "ARK ISRAEL INNOVATIVE TECHNOLOGY ETF "
    },
    {
      "symbol": "J",
      "name": "Jacobs Solutions Inc"
    },
    {
      "symbol": "JAAA",
      "name": "JANUS HENDERSON AAA CLO ETF "
    },
    {
      "symbol": "JACK",
      "name": "Jack In The Box Inc"
    },
    {
      "symbol": "JAGX",
      "name": "Jaguar Health Inc"
    },
    {
      "symbol": "JAKK",
      "name": "Jakks Pacific Inc"
    },
    {
      "symbol": "JAMF",
      "name": "Jamf Holding Corp"
    },
    {
      "symbol": "JAN",
      "name": "JanOne Inc"
    },
    {
      "symbol": "JAND",
      "name": "Innovator Premium Income 10 Barrier ETF - January"
    },
    {
      "symbol": "JANH",
      "name": "Innovator Premium Income 20 Barrier ETF - January"
    },
    {
      "symbol": "JANJ",
      "name": "Innovator Premium Income 30 Barrier ETF - January"
    },
    {
      "symbol": "JANP",
      "name": "PGIM US Large-Cap Buffer 12 ETF - January"
    },
    {
      "symbol": "JANQ",
      "name": "Innovator Premium Income 40 Barrier ETF - January"
    },
    {
      "symbol": "JANT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 JAN ETF "
    },
    {
      "symbol": "JANW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 JAN ETF "
    },
    {
      "symbol": "JANX",
      "name": "Janux Therapeutics Inc"
    },
    {
      "symbol": "JANZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (JANUARY) ETF "
    },
    {
      "symbol": "JAVA",
      "name": "JPMorgan Active Value ETF"
    },
    {
      "symbol": "JAZZ",
      "name": "Jazz Pharmaceuticals plc"
    },
    {
      "symbol": "JBBB",
      "name": "JANUS HENDERSON B-BBB CLO ETF "
    },
    {
      "symbol": "JBGS",
      "name": "JBG SMITH Properties"
    },
    {
      "symbol": "JBHT",
      "name": "J.B. Hunt Transport Services Inc"
    },
    {
      "symbol": "JBI",
      "name": "Janus International Group Inc - Class A"
    },
    {
      "symbol": "JBK",
      "name": "Lehman ABS Corp"
    },
    {
      "symbol": "JBL",
      "name": "Jabil Inc"
    },
    {
      "symbol": "JBLU",
      "name": "Jetblue Airways Corp"
    },
    {
      "symbol": "JBND",
      "name": "JPMorgan Active Bond ETF"
    },
    {
      "symbol": "JBSS",
      "name": "Sanfilippo (John B.) & Son Inc"
    },
    {
      "symbol": "JBT",
      "name": "John Bean Technologies Corp"
    },
    {
      "symbol": "JCE",
      "name": "Nuveen Core Equity Alpha Fund"
    },
    {
      "symbol": "JCHI",
      "name": "JPMORGAN ACTIVE CHINA ETF "
    },
    {
      "symbol": "JCI",
      "name": "Johnson Controls International plc"
    },
    {
      "symbol": "JCICU",
      "name": "Jack Creek Investment Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "JCPB",
      "name": "JPMorgan Core Plus Bond ETF"
    },
    {
      "symbol": "JCPI",
      "name": "JPMorgan Inflation Managed Bond ETF"
    },
    {
      "symbol": "JCSE",
      "name": "JE Cleantech Holdings Ltd"
    },
    {
      "symbol": "JCTCF",
      "name": "Jewett-Cameron Trading Co. Ltd"
    },
    {
      "symbol": "JCTR",
      "name": "JPMORGAN CARBON TRANSITION U.S. EQUITY ETF "
    },
    {
      "symbol": "JD",
      "name": "JD.com Inc"
    },
    {
      "symbol": "JDOC",
      "name": "JPMorgan Healthcare Leaders ETF"
    },
    {
      "symbol": "JDST",
      "name": "DIREXION DAILY JUNIOR GOLD MINERS INDEX BEAR 2X SHARES "
    },
    {
      "symbol": "JDVI",
      "name": "John Hancock Disciplined Value International Select ETF"
    },
    {
      "symbol": "JEF",
      "name": "Jefferies Financial Group Inc"
    },
    {
      "symbol": "JELD",
      "name": "JELD-WEN Holding Inc"
    },
    {
      "symbol": "JEMA",
      "name": "JPMORGAN ACTIVEBUILDERS EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "JEMD",
      "name": "Nuveen Emerging Markets Debt 2022 Target Term Fund"
    },
    {
      "symbol": "JEPI",
      "name": "JPMorgan Equity Premium Income ETF"
    },
    {
      "symbol": "JEPQ",
      "name": "JPMorgan Nasdaq Equity Premium Income ETF"
    },
    {
      "symbol": "JEPY",
      "name": "Defiance S&P 500 Enhanced Options Income ETF"
    },
    {
      "symbol": "JEQ",
      "name": "abrdn Japan Equity Fund Inc"
    },
    {
      "symbol": "JETD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "JETS",
      "name": "U.S. GLOBAL JETS ETF "
    },
    {
      "symbol": "JETU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "JEWL",
      "name": "Adamas One Corp"
    },
    {
      "symbol": "JFBR",
      "name": "Jeffs Brands Ltd"
    },
    {
      "symbol": "JFBRW",
      "name": "Jeffs Brands Ltd - Warrants (26/08/2027)"
    },
    {
      "symbol": "JFIN",
      "name": "Jiayin Group Inc"
    },
    {
      "symbol": "JFR",
      "name": "Nuveen Floating Rate Income Fund"
    },
    {
      "symbol": "JFU",
      "name": "9F Inc"
    },
    {
      "symbol": "JFWD",
      "name": "JACOB FORWARD ETF "
    },
    {
      "symbol": "JG",
      "name": "Aurora Mobile Ltd"
    },
    {
      "symbol": "JGH",
      "name": "Nuveen Global High Income Fund"
    },
    {
      "symbol": "JGLO",
      "name": "JPMORGAN GLOBAL SELECT EQUITY ETF "
    },
    {
      "symbol": "JGRO",
      "name": "JPMorgan Active Growth ETF"
    },
    {
      "symbol": "JHAA",
      "name": "Nuveen Corporate Income 2023 Target Term Fund"
    },
    {
      "symbol": "JHAC",
      "name": "John Hancock Fundamental All Cap Core ETF"
    },
    {
      "symbol": "JHCB",
      "name": "John Hancock Corporate Bond ETF"
    },
    {
      "symbol": "JHDV",
      "name": "John Hancock U.S. High Dividend ETF"
    },
    {
      "symbol": "JHEM",
      "name": "John Hancock Multifactor Emerging Markets ETF"
    },
    {
      "symbol": "JHG",
      "name": "Janus Henderson Group plc"
    },
    {
      "symbol": "JHI",
      "name": "John Hancock Investors Trust"
    },
    {
      "symbol": "JHID",
      "name": "John Hancock International High Dividend ETF"
    },
    {
      "symbol": "JHMB",
      "name": "John Hancock Mortgage-Backed Securities ETF"
    },
    {
      "symbol": "JHMD",
      "name": "John Hancock Multifactor Developed International ETF"
    },
    {
      "symbol": "JHML",
      "name": "John Hancock Multifactor Large Cap ETF"
    },
    {
      "symbol": "JHMM",
      "name": "John Hancock Multifactor Mid Cap ETF"
    },
    {
      "symbol": "JHMU",
      "name": "John Hancock Dynamic Municipal Bond ETF"
    },
    {
      "symbol": "JHPI",
      "name": "John Hancock Preferred Income ETF"
    },
    {
      "symbol": "JHS",
      "name": "John Hancock Income Securities Trust"
    },
    {
      "symbol": "JHSC",
      "name": "John Hancock Multifactor Small Cap ETF"
    },
    {
      "symbol": "JHX",
      "name": "James Hardie Industries plc"
    },
    {
      "symbol": "JIG",
      "name": "JPMORGAN INTERNATIONAL GROWTH ETF "
    },
    {
      "symbol": "JILL",
      "name": "J.Jill Inc"
    },
    {
      "symbol": "JIRE",
      "name": "JPMORGAN INTERNATIONAL RESEARCH ENHANCED EQUITY ETF "
    },
    {
      "symbol": "JIVE",
      "name": "JPMORGAN INTERNATIONAL VALUE ETF "
    },
    {
      "symbol": "JJE",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "JJM",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "JJP",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "JJS",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "JJSF",
      "name": "J&J Snack Foods Corp"
    },
    {
      "symbol": "JKHY",
      "name": "Jack Henry & Associates Inc"
    },
    {
      "symbol": "JKS",
      "name": "JinkoSolar Holding Co. Ltd"
    },
    {
      "symbol": "JL",
      "name": "J-Long Group Ltd"
    },
    {
      "symbol": "JLL",
      "name": "Jones Lang Lasalle Inc"
    },
    {
      "symbol": "JLS",
      "name": "Nuveen Mortgage and Income Fund"
    },
    {
      "symbol": "JMACU",
      "name": "Maxpro Capital Acquisition Corp - Units (1 Ord Share Class A & 1 War)"
    },
    {
      "symbol": "JMBS",
      "name": "JANUS HENDERSON MORTGAGE-BACKED SECURITIES ETF "
    },
    {
      "symbol": "JMEE",
      "name": "JPMorgan Market Expansion Enhanced Equity ETF"
    },
    {
      "symbol": "JMHI",
      "name": "JPMORGAN HIGH YIELD MUNICIPAL ETF "
    },
    {
      "symbol": "JMIA",
      "name": "Jumia Technologies Ag"
    },
    {
      "symbol": "JMM",
      "name": "Nuveen Multi-Market Income Fund"
    },
    {
      "symbol": "JMOM",
      "name": "JPMORGAN U.S. MOMENTUM FACTOR ETF "
    },
    {
      "symbol": "JMSB",
      "name": "John Marshall Bancorp Inc"
    },
    {
      "symbol": "JMSI",
      "name": "JPMorgan Sustainable Municipal Income ETF"
    },
    {
      "symbol": "JMST",
      "name": "JPMorgan Ultra-Short Municipal Income ETF"
    },
    {
      "symbol": "JMUB",
      "name": "JPMorgan Municipal ETF"
    },
    {
      "symbol": "JNJ",
      "name": "Johnson & Johnson"
    },
    {
      "symbol": "JNJ-WD",
      "name": "Johnson & Johnson WhenDistributed"
    },
    {
      "symbol": "JNK",
      "name": "SPDR Bloomberg High Yield Bond ETF"
    },
    {
      "symbol": "JNPR",
      "name": "Juniper Networks Inc"
    },
    {
      "symbol": "JNUG",
      "name": "DIREXION DAILY JUNIOR GOLD MINERS INDEX BULL 2X SHARES "
    },
    {
      "symbol": "JNVR",
      "name": "Janover Inc"
    },
    {
      "symbol": "JOB",
      "name": "GEE Group Inc"
    },
    {
      "symbol": "JOBY",
      "name": "Joby Aviation Inc"
    },
    {
      "symbol": "JOBY-WS",
      "name": "Joby Aviation Inc Wt"
    },
    {
      "symbol": "JOE",
      "name": "St. Joe Company"
    },
    {
      "symbol": "JOET",
      "name": "VIRTUS TERRANOVA U.S. QUALITY MOMENTUM ETF "
    },
    {
      "symbol": "JOF",
      "name": "Japan Smaller Capitalization Fund Inc"
    },
    {
      "symbol": "JOJO",
      "name": "ATAC CREDIT ROTATION ETF "
    },
    {
      "symbol": "JOUT",
      "name": "Johnson Outdoors Inc - Class A"
    },
    {
      "symbol": "JPAN",
      "name": "MATTHEWS JAPAN ACTIVE ETF "
    },
    {
      "symbol": "JPC",
      "name": "Nuveen Preferred & Income Opportunities Fund"
    },
    {
      "symbol": "JPEF",
      "name": "JPMorgan Equity Focus ETF"
    },
    {
      "symbol": "JPEM",
      "name": "JPMORGAN DIVERSIFIED RETURN EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "JPI",
      "name": "Nuveen Preferred and Income Term Fund"
    },
    {
      "symbol": "JPIB",
      "name": "JPMorgan International Bond Opportunities ETF"
    },
    {
      "symbol": "JPIE",
      "name": "JPMorgan Income ETF"
    },
    {
      "symbol": "JPIN",
      "name": "JPMORGAN DIVERSIFIED RETURN INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "JPLD",
      "name": "JPMorgan Ltd Duration Bond ETF"
    },
    {
      "symbol": "JPM",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-C",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-D",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-J",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-K",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-L",
      "name": "JPMorgan Chase & Company"
    },
    {
      "symbol": "JPM-P-M",
      "name": "J P Morgan Chase & Co Depositary Shares Series M"
    },
    {
      "symbol": "JPMB",
      "name": "JPMorgan USD Emerging Markets Sovereign Bond ETF"
    },
    {
      "symbol": "JPME",
      "name": "JPMORGAN DIVERSIFIED RETURN U.S. MID CAP EQUITY ETF "
    },
    {
      "symbol": "JPMO",
      "name": "YieldMax JPM Option Income Strategy ETF"
    },
    {
      "symbol": "JPRE",
      "name": "JPMorgan Realty Income ETF"
    },
    {
      "symbol": "JPS",
      "name": "Nuveen Preferred & Income Securities Fund"
    },
    {
      "symbol": "JPSE",
      "name": "JPMORGAN DIVERSIFIED RETURN U.S. SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "JPST",
      "name": "JPMorgan Ultra-Short Income ETF"
    },
    {
      "symbol": "JPSV",
      "name": "JPMORGAN ACTIVE SMALL CAP VALUE ETF "
    },
    {
      "symbol": "JPT",
      "name": "Nuveen Preferred and Income Fund"
    },
    {
      "symbol": "JPUS",
      "name": "JPMORGAN DIVERSIFIED RETURN U.S. EQUITY ETF "
    },
    {
      "symbol": "JPXN",
      "name": "iShares JPX-Nikkei 400 ETF"
    },
    {
      "symbol": "JQC",
      "name": "Nuveen Credit Strategies Income Fund"
    },
    {
      "symbol": "JQUA",
      "name": "JPMORGAN U.S. QUALITY FACTOR ETF "
    },
    {
      "symbol": "JRE",
      "name": "JANUS HENDERSON U.S. REAL ESTATE ETF "
    },
    {
      "symbol": "JRI",
      "name": "Nuveen Real Asset Income and Growth Fund"
    },
    {
      "symbol": "JRNY",
      "name": "ALPS Global Travel Beneficiaries ETF"
    },
    {
      "symbol": "JRO",
      "name": "Nuveen Floating Rate Income Opportunity Fund"
    },
    {
      "symbol": "JRS",
      "name": "Nuveen Real Estate Income Fund."
    },
    {
      "symbol": "JRSH",
      "name": "Jerash holdings (US) Inc"
    },
    {
      "symbol": "JRVR",
      "name": "James River Group Holdings Ltd"
    },
    {
      "symbol": "JSCP",
      "name": "JPMorgan Short Duration Core Plus ETF"
    },
    {
      "symbol": "JSD",
      "name": "Nuveen Short Duration Credit Opportunities Fund"
    },
    {
      "symbol": "JSI",
      "name": "Janus Henderson Securitized Income ETF"
    },
    {
      "symbol": "JSM",
      "name": "Navient Corp"
    },
    {
      "symbol": "JSMD",
      "name": "JANUS HENDERSON SMALL/MID CAP GROWTH ALPHA ETF "
    },
    {
      "symbol": "JSML",
      "name": "JANUS HENDERSON SMALL CAP GROWTH ALPHA ETF "
    },
    {
      "symbol": "JSPR",
      "name": "Jasper Therapeutics Inc"
    },
    {
      "symbol": "JSPRW",
      "name": "Jasper Therapeutics Inc - Warrants (24/09/2026)"
    },
    {
      "symbol": "JSTC",
      "name": "ADASINA SOCIAL JUSTICE ALL CAP GLOBAL ETF "
    },
    {
      "symbol": "JTAI",
      "name": "Jet.AI Inc"
    },
    {
      "symbol": "JTAIW",
      "name": "Jet.AI Inc - Warrants (26/07/2028)"
    },
    {
      "symbol": "JTAIZ",
      "name": "Jet.AI Inc - Warrants - New (26/07/2028)"
    },
    {
      "symbol": "JTEK",
      "name": "JPMorgan U.S. Tech Leaders ETF"
    },
    {
      "symbol": "JUCY",
      "name": "Aptus Enhanced Yield ETF"
    },
    {
      "symbol": "JUGG",
      "name": "Jaws Juggernaut Acquisition Corp - Class A"
    },
    {
      "symbol": "JUGGU",
      "name": "Jaws Juggernaut Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "JUGGW",
      "name": "Jaws Juggernaut Acquisition Corp - Warrants (17/06/2026)"
    },
    {
      "symbol": "JULD",
      "name": "Innovator Premium Income 10 Barrier ETF - July"
    },
    {
      "symbol": "JULH",
      "name": "Innovator Premium Income 20 Barrier ETF - July"
    },
    {
      "symbol": "JULJ",
      "name": "Innovator Premium Income 30 Barrier ETF - July"
    },
    {
      "symbol": "JULQ",
      "name": "Innovator Premium Income 40 Barrier ETF - July"
    },
    {
      "symbol": "JULT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 JUL ETF "
    },
    {
      "symbol": "JULW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 JUL ETF "
    },
    {
      "symbol": "JULZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (JULY) ETF "
    },
    {
      "symbol": "JUNE",
      "name": "Junee Ltd"
    },
    {
      "symbol": "JUNT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 JUN ETF "
    },
    {
      "symbol": "JUNW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 JUN ETF "
    },
    {
      "symbol": "JUNZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (JUNE) ETF "
    },
    {
      "symbol": "JUST",
      "name": "GOLDMAN SACHS JUST U.S. LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "JVA",
      "name": "Coffee Holding Co Inc"
    },
    {
      "symbol": "JVAL",
      "name": "JPMORGAN U.S. VALUE FACTOR ETF "
    },
    {
      "symbol": "JVSA",
      "name": "JVSPAC Acquisition Corp - Class A"
    },
    {
      "symbol": "JVSAR",
      "name": "JVSPAC Acquisition Corp"
    },
    {
      "symbol": "JVSAU",
      "name": "JVSPAC Acquisition Corp - Units (1 Ord & 1 Rts)"
    },
    {
      "symbol": "JWEL",
      "name": "Jowell Global Ltd"
    },
    {
      "symbol": "JWN",
      "name": "Nordstrom Inc"
    },
    {
      "symbol": "JWSM",
      "name": "Jaws Mustang Acquisition Corporation - Class A"
    },
    {
      "symbol": "JWSM-U",
      "name": "Jaws Mustang Acquisition Corporation - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "JWSM-WS",
      "name": "Jaws Mustang Acquisition Corporation - Warrants (30/01/2026)"
    },
    {
      "symbol": "JXI",
      "name": "iShares Global Utilities ETF"
    },
    {
      "symbol": "JXJT",
      "name": "JX Luxventure Ltd"
    },
    {
      "symbol": "JXN",
      "name": "Jackson Financial Inc - Class A"
    },
    {
      "symbol": "JXN-P-A",
      "name": "Jackson Financial Inc"
    },
    {
      "symbol": "JYD",
      "name": "Jayud Global Logistics Ltd - Class A"
    },
    {
      "symbol": "JYNT",
      "name": "Joint Corp"
    },
    {
      "symbol": "JZ",
      "name": "Jianzhi Education Technology Group Co Ltd"
    },
    {
      "symbol": "JZXN",
      "name": "Jiuzi Holdings Inc"
    },
    {
      "symbol": "K",
      "name": "Kellanova Company"
    },
    {
      "symbol": "K-W",
      "name": "Kellogg Company WhenIssued"
    },
    {
      "symbol": "KA",
      "name": "Kineta Inc"
    },
    {
      "symbol": "KACL",
      "name": "Kairous Acquisition Corp Ltd"
    },
    {
      "symbol": "KACLR",
      "name": "Kairous Acquisition Corp Ltd"
    },
    {
      "symbol": "KACLU",
      "name": "Kairous Acquisition Corp Ltd - Units (1 Ord Share & 1/2 War & 1 Right)"
    },
    {
      "symbol": "KACLW",
      "name": "Kairous Acquisition Corp Ltd - Warrants (15/09/2026)"
    },
    {
      "symbol": "KAI",
      "name": "Kadant Inc"
    },
    {
      "symbol": "KALA",
      "name": "Kala Pharmaceuticals Inc"
    },
    {
      "symbol": "KALL",
      "name": "KraneShares MSCI China All Shares Index ETF"
    },
    {
      "symbol": "KALU",
      "name": "Kaiser Aluminum Corp"
    },
    {
      "symbol": "KALV",
      "name": "KalVista Pharmaceuticals Inc"
    },
    {
      "symbol": "KAPR",
      "name": "Innovator U.S. Small Cap Power Buffer ETF - April"
    },
    {
      "symbol": "KAR",
      "name": "Openlane Inc"
    },
    {
      "symbol": "KARB",
      "name": "CARBON STRATEGY ETF "
    },
    {
      "symbol": "KARO",
      "name": "Karooooo Ltd"
    },
    {
      "symbol": "KARS",
      "name": "KraneShares Electric Vehicles and Future Mobility Index ETF"
    },
    {
      "symbol": "KAVL",
      "name": "Kaival Brands Innovations Group Inc"
    },
    {
      "symbol": "KB",
      "name": "KB Financial Group Inc"
    },
    {
      "symbol": "KBA",
      "name": "KraneSharesBosera MSCI China A 50 Connect Index ETF"
    },
    {
      "symbol": "KBE",
      "name": "SPDR S&P Bank ETF"
    },
    {
      "symbol": "KBH",
      "name": "KB Home"
    },
    {
      "symbol": "KBNTW",
      "name": "Kubient Inc - Warrants (09/07/2025)"
    },
    {
      "symbol": "KBR",
      "name": "KBR Inc"
    },
    {
      "symbol": "KBUF",
      "name": "KraneShares 90% KWEB Defined Outcome January 2026 ETF"
    },
    {
      "symbol": "KBWB",
      "name": "INVESCO KBW BANK ETF "
    },
    {
      "symbol": "KBWD",
      "name": "INVESCO KBW HIGH DIVIDEND YIELD FINANCIAL ETF "
    },
    {
      "symbol": "KBWP",
      "name": "INVESCO KBW PROPERTY & CASUALTY INSURANCE ETF "
    },
    {
      "symbol": "KBWR",
      "name": "INVESCO KBW REGIONAL BANKING ETF "
    },
    {
      "symbol": "KBWY",
      "name": "INVESCO KBW PREMIUM YIELD EQUITY REIT ETF "
    },
    {
      "symbol": "KC",
      "name": "Kingsoft Cloud Holdings Ltd"
    },
    {
      "symbol": "KCCA",
      "name": "Kraneshares California Carbon Allowance Strategy ETF"
    },
    {
      "symbol": "KCE",
      "name": "SPDR(R) S&P CAPITAL MARKETS ETF "
    },
    {
      "symbol": "KCGI",
      "name": "Kensington Capital Acquisition Corp V - Class A"
    },
    {
      "symbol": "KCGI-U",
      "name": "Kensington Capital Acquisition Corp V - Units (1 Ord Share Class A & 3/4 War)"
    },
    {
      "symbol": "KCGI-WS",
      "name": "Kensington Capital Acquisition Corp V Redeemable warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50"
    },
    {
      "symbol": "KD",
      "name": "Kyndryl Holdings Inc"
    },
    {
      "symbol": "KDIV",
      "name": "KRANESHARES S&P PAN ASIA DIVIDEND ARISTOCRATS INDEX ETF "
    },
    {
      "symbol": "KDNY",
      "name": "Chinook Therapeutics Inc"
    },
    {
      "symbol": "KDP",
      "name": "Keurig Dr Pepper Inc"
    },
    {
      "symbol": "KDRN",
      "name": "KINGSBARN TACTICAL BOND ETF "
    },
    {
      "symbol": "KE",
      "name": "Kimball Electronics Inc"
    },
    {
      "symbol": "KEAT",
      "name": "Keating Active ETF"
    },
    {
      "symbol": "KELYA",
      "name": "Kelly Services Inc - Class A"
    },
    {
      "symbol": "KELYB",
      "name": "Kelly Services Inc - Class B"
    },
    {
      "symbol": "KEM",
      "name": "KraneShares Dynamic Emerging Markets Strategy ETF"
    },
    {
      "symbol": "KEMQ",
      "name": "KraneShares Emerging Markets Consumer Technology Index ETF"
    },
    {
      "symbol": "KEMX",
      "name": "KraneShares MSCI Emerging Markets ex China Index ETF"
    },
    {
      "symbol": "KEN",
      "name": "Kenon Holdings Ltd"
    },
    {
      "symbol": "KEP",
      "name": "Korea Electric Power"
    },
    {
      "symbol": "KEQU",
      "name": "Kewaunee Scientific Corporation"
    },
    {
      "symbol": "KEUA",
      "name": "KraneShares European Carbon Allowance Strategy ETF"
    },
    {
      "symbol": "KEX",
      "name": "Kirby Corp"
    },
    {
      "symbol": "KEY",
      "name": "Keycorp"
    },
    {
      "symbol": "KEY-P-I",
      "name": "Keycorp"
    },
    {
      "symbol": "KEY-P-J",
      "name": "Keycorp"
    },
    {
      "symbol": "KEY-P-K",
      "name": "Keycorp"
    },
    {
      "symbol": "KEY-P-L",
      "name": "Keycorp"
    },
    {
      "symbol": "KEYS",
      "name": "Keysight Technologies Inc"
    },
    {
      "symbol": "KF",
      "name": "Korea Fund Inc"
    },
    {
      "symbol": "KFFB",
      "name": "Kentucky First Federal Bancorp"
    },
    {
      "symbol": "KFRC",
      "name": "Kforce Inc"
    },
    {
      "symbol": "KFS",
      "name": "Kingsway Financial Services Inc"
    },
    {
      "symbol": "KFVG",
      "name": "KraneShares CICC China 5G and Semiconductor Index ETF"
    },
    {
      "symbol": "KFY",
      "name": "Korn Ferry"
    },
    {
      "symbol": "KFYP",
      "name": "KraneShares CICC China Leaders 100 Index ETF"
    },
    {
      "symbol": "KGC",
      "name": "Kinross Gold Corp"
    },
    {
      "symbol": "KGEI",
      "name": "Kolibri Global Energy Inc"
    },
    {
      "symbol": "KGRN",
      "name": "KraneShares MSCI China Clean Technology Index ETF"
    },
    {
      "symbol": "KGS",
      "name": "Kodiak Gas Services Inc"
    },
    {
      "symbol": "KHC",
      "name": "Kraft Heinz Company"
    },
    {
      "symbol": "KHYB",
      "name": "KraneShares Asia Pacific High Income Bond ETF"
    },
    {
      "symbol": "KIDS",
      "name": "OrthoPediatrics Corp"
    },
    {
      "symbol": "KIE",
      "name": "SPDR S&P Insurance ETF"
    },
    {
      "symbol": "KIM",
      "name": "Kimco Realty Corporation"
    },
    {
      "symbol": "KIM-P-L",
      "name": "Kimco Realty Corporation"
    },
    {
      "symbol": "KIM-P-M",
      "name": "Kimco Realty Corporation"
    },
    {
      "symbol": "KIM-P-N",
      "name": "Kimco Realty Corporation"
    },
    {
      "symbol": "KIND",
      "name": "Nextdoor Holdings Inc - Class A"
    },
    {
      "symbol": "KINS",
      "name": "Kingstone Cos. Inc"
    },
    {
      "symbol": "KIO",
      "name": "KKR Income Opportunities Fund"
    },
    {
      "symbol": "KIO-R",
      "name": "KKR Income Opportunities Fund Rights expiring February 16 2023 Rights"
    },
    {
      "symbol": "KIO-R-W",
      "name": "KKR Income Opportunities Fund Rights expiring February 16 2023 Rights when issued"
    },
    {
      "symbol": "KIRK",
      "name": "Kirkland`s Inc"
    },
    {
      "symbol": "KITT",
      "name": "Nauticus Robotics Inc"
    },
    {
      "symbol": "KITTW",
      "name": "Nauticus Robotics Inc - Warrants (30/07/2026)"
    },
    {
      "symbol": "KJAN",
      "name": "Innovator U.S. Small Cap Power Buffer ETF - January"
    },
    {
      "symbol": "KJUL",
      "name": "Innovator U.S. Small Cap Power Buffer ETF - July"
    },
    {
      "symbol": "KKR",
      "name": "KKR & Co. Inc"
    },
    {
      "symbol": "KKRS",
      "name": "KKR Group Finance Co. IX LLC"
    },
    {
      "symbol": "KLAC",
      "name": "KLA Corp"
    },
    {
      "symbol": "KLCD",
      "name": "KFA Large Cap Quality Dividend Index ETF"
    },
    {
      "symbol": "KLDW",
      "name": "KNOWLEDGE LEADERS DEVELOPED WORLD ETF "
    },
    {
      "symbol": "KLG",
      "name": "WK Kellogg Company"
    },
    {
      "symbol": "KLG-W",
      "name": "WK Kellogg Co WhenIssued"
    },
    {
      "symbol": "KLIC",
      "name": "Kulicke & Soffa Industries Inc"
    },
    {
      "symbol": "KLIP",
      "name": "KraneShares China Internet and Covered Call Strategy ETF"
    },
    {
      "symbol": "KLNE",
      "name": "DIREXION DAILY GLOBAL CLEAN ENERGY BULL 2X SHARES "
    },
    {
      "symbol": "KLTR",
      "name": "Kaltura Inc"
    },
    {
      "symbol": "KLXE",
      "name": "KLX Energy Services Holdings Inc"
    },
    {
      "symbol": "KLXY",
      "name": "KraneShares Global Luxury Index ETF"
    },
    {
      "symbol": "KMB",
      "name": "Kimberly-Clark Corp"
    },
    {
      "symbol": "KMDA",
      "name": "Kamada Ltd"
    },
    {
      "symbol": "KMED",
      "name": "KraneShares Emerging Markets Healthcare Index ETF"
    },
    {
      "symbol": "KMET",
      "name": "KraneShares Electrification Metals"
    },
    {
      "symbol": "KMF",
      "name": "Kayne Anderson NextGen Energy & Infrastructure Inc"
    },
    {
      "symbol": "KMI",
      "name": "Kinder Morgan Inc - Class P"
    },
    {
      "symbol": "KMLM",
      "name": "KFA Mount Lucas Managed Futures Index Strategy ETF"
    },
    {
      "symbol": "KMPB",
      "name": "Kemper Corporation"
    },
    {
      "symbol": "KMPR",
      "name": "Kemper Corporation"
    },
    {
      "symbol": "KMT",
      "name": "Kennametal Inc"
    },
    {
      "symbol": "KMX",
      "name": "Carmax Inc"
    },
    {
      "symbol": "KN",
      "name": "Knowles Corp"
    },
    {
      "symbol": "KNCT",
      "name": "Invesco Next Gen Connectivity ETF"
    },
    {
      "symbol": "KNDI",
      "name": "Kandi Technologies Group Inc"
    },
    {
      "symbol": "KNF",
      "name": "Knife River Corp"
    },
    {
      "symbol": "KNF-W",
      "name": "Knife Riv Holding Co. WhenIssued"
    },
    {
      "symbol": "KNG",
      "name": "FT VEST S&P 500 DIVIDEND ARISTOCRATS TARGET INCOME ETF "
    },
    {
      "symbol": "KNGS",
      "name": "Roundhill S&P Dividend Monarchs ETF"
    },
    {
      "symbol": "KNGZ",
      "name": "First Trust S&P 500 Diversified Dividend Aristocrats ETF"
    },
    {
      "symbol": "KNOP",
      "name": "KNOT Offshore Partners LP"
    },
    {
      "symbol": "KNOW",
      "name": "Fundamentals First ETF"
    },
    {
      "symbol": "KNSA",
      "name": "Kiniksa Pharmaceuticals Ltd - Class A"
    },
    {
      "symbol": "KNSL",
      "name": "Kinsale Capital Group Inc"
    },
    {
      "symbol": "KNTK",
      "name": "Kinetik Holdings Inc - Class A"
    },
    {
      "symbol": "KNW",
      "name": "Know Labs Inc"
    },
    {
      "symbol": "KNX",
      "name": "Knight-Swift Transportation Holdings Inc - Class A"
    },
    {
      "symbol": "KO",
      "name": "Coca-Cola Company"
    },
    {
      "symbol": "KOCG",
      "name": "FIS Knights of Columbus Global Belief ETF"
    },
    {
      "symbol": "KOCT",
      "name": "Innovator U.S. Small Cap Power Buffer ETF - October"
    },
    {
      "symbol": "KOD",
      "name": "Kodiak Sciences Inc"
    },
    {
      "symbol": "KODK",
      "name": "Eastman Kodak Company"
    },
    {
      "symbol": "KOF",
      "name": "Coca-Cola Femsa S.A.B. DE C.V."
    },
    {
      "symbol": "KOIN",
      "name": "CAPITAL LINK GLOBAL FINTECH LEADERS ETF "
    },
    {
      "symbol": "KOKU",
      "name": "XTRACKERS MSCI KOKUSAI EQUITY ETF "
    },
    {
      "symbol": "KOLD",
      "name": "ProShares UltraShort Bloomberg Natural Gas -2x Shares"
    },
    {
      "symbol": "KOMP",
      "name": "SPDR S&P Kensho New Economies Composite ETF"
    },
    {
      "symbol": "KONG",
      "name": "Formidable Fortress ETF"
    },
    {
      "symbol": "KOOL",
      "name": "North Shore Equity Rotation ETF"
    },
    {
      "symbol": "KOP",
      "name": "Koppers Holdings Inc"
    },
    {
      "symbol": "KOPN",
      "name": "Kopin Corp"
    },
    {
      "symbol": "KORE",
      "name": "Kore Group Holdings Inc"
    },
    {
      "symbol": "KORP",
      "name": "AMERICAN CENTURY DIVERSIFIED CORPORATE BOND ETF "
    },
    {
      "symbol": "KORU",
      "name": "DIREXION DAILY MSCI SOUTH KOREA BULL 3X SHARES "
    },
    {
      "symbol": "KOS",
      "name": "Kosmos Energy Ltd"
    },
    {
      "symbol": "KOSS",
      "name": "Koss Corp"
    },
    {
      "symbol": "KPLT",
      "name": "Katapult Holdings Inc"
    },
    {
      "symbol": "KPLTW",
      "name": "Katapult Holdings Inc - Warrants (09/06/2026)"
    },
    {
      "symbol": "KPOP",
      "name": "KPOP and Korean Entertainment ETF"
    },
    {
      "symbol": "KPRO",
      "name": "KraneShares 100% KWEB Defined Outcome January 2026 ETF"
    },
    {
      "symbol": "KPRX",
      "name": "Kiora Pharmaceuticals Inc"
    },
    {
      "symbol": "KPTI",
      "name": "Karyopharm Therapeutics Inc"
    },
    {
      "symbol": "KR",
      "name": "Kroger Company"
    },
    {
      "symbol": "KRBN",
      "name": "KraneShares Global Carbon Strategy ETF"
    },
    {
      "symbol": "KRBP",
      "name": "Kiromic BioPharma Inc"
    },
    {
      "symbol": "KRC",
      "name": "Kilroy Realty Corp"
    },
    {
      "symbol": "KRE",
      "name": "SPDR S&P Regional Banking ETF"
    },
    {
      "symbol": "KREF",
      "name": "KKR Real Estate Finance Trust Inc"
    },
    {
      "symbol": "KREF-P-A",
      "name": "KKR Real Estate Finance Trust Inc 6.50 Series A Cumulative Redeemable Preferred Stock"
    },
    {
      "symbol": "KRG",
      "name": "Kite Realty Group Trust"
    },
    {
      "symbol": "KRKR",
      "name": "36Kr Holdings Inc"
    },
    {
      "symbol": "KRMA",
      "name": "GLOBAL X CONSCIOUS COMPANIES ETF "
    },
    {
      "symbol": "KRMD",
      "name": "KORU Medical Systems Inc"
    },
    {
      "symbol": "KRNL",
      "name": "Kernel Group Holdings Inc - Class A"
    },
    {
      "symbol": "KRNLU",
      "name": "Kernel Group Holdings Inc - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "KRNLW",
      "name": "Kernel Group Holdings Inc - Warrants (02/02/2026)"
    },
    {
      "symbol": "KRNT",
      "name": "Kornit Digital Ltd"
    },
    {
      "symbol": "KRNY",
      "name": "Kearny Financial Corp"
    },
    {
      "symbol": "KRO",
      "name": "Kronos Worldwide Inc"
    },
    {
      "symbol": "KRON",
      "name": "Kronos Bio Inc"
    },
    {
      "symbol": "KROP",
      "name": "GLOBAL X AGTECH & FOOD INNOVATION ETF "
    },
    {
      "symbol": "KROS",
      "name": "Keros Therapeutics Inc"
    },
    {
      "symbol": "KRP",
      "name": "Kimbell Royalty Partners LP"
    },
    {
      "symbol": "KRRO",
      "name": "Korro Bio Inc"
    },
    {
      "symbol": "KRT",
      "name": "Karat Packaging Inc"
    },
    {
      "symbol": "KRUS",
      "name": "Kura Sushi USA Inc - Class A"
    },
    {
      "symbol": "KRUZ",
      "name": "UNUSUAL WHALES SUBVERSIVE REPUBLICAN TRADING ETF "
    },
    {
      "symbol": "KRYS",
      "name": "Krystal Biotech Inc"
    },
    {
      "symbol": "KSA",
      "name": "ISHARES MSCI SAUDI ARABIA ETF "
    },
    {
      "symbol": "KSCD",
      "name": "KFA Small Cap Quality Dividend Index ETF"
    },
    {
      "symbol": "KSCP",
      "name": "Knightscope Inc - Class A"
    },
    {
      "symbol": "KSEA",
      "name": "KraneShares Rockefeller Ocean Engagement ETF"
    },
    {
      "symbol": "KSET",
      "name": "KraneShares Global Carbon Offset Strategy ETF"
    },
    {
      "symbol": "KSM",
      "name": "DWS Strategic Municipal Income Trust"
    },
    {
      "symbol": "KSPI",
      "name": "Kaspi.kz JSC"
    },
    {
      "symbol": "KSS",
      "name": "Kohl`s Corp"
    },
    {
      "symbol": "KSTR",
      "name": "KraneShares SSE STAR Market 50 Index ETF"
    },
    {
      "symbol": "KT",
      "name": "KT Corporation"
    },
    {
      "symbol": "KTB",
      "name": "Kontoor Brands Inc"
    },
    {
      "symbol": "KTCC",
      "name": "Key Tronic Corp"
    },
    {
      "symbol": "KTEC",
      "name": "KraneShares Hang Seng TECH Index ETF"
    },
    {
      "symbol": "KTF",
      "name": "DWS Municipal Income Trust"
    },
    {
      "symbol": "KTH",
      "name": "Structures Products Cp 8 CorTS Issued by Peco Energy Cap Tr II Preferred Stock"
    },
    {
      "symbol": "KTN",
      "name": "Structured Products Corp 8205 CorTS 8205 Corporate Backed Trust Securities CorTS"
    },
    {
      "symbol": "KTOS",
      "name": "Kratos Defense & Security Solutions Inc"
    },
    {
      "symbol": "KTRA",
      "name": "Kintara Therapeutics Inc"
    },
    {
      "symbol": "KTTA",
      "name": "Pasithea Therapeutics Corp"
    },
    {
      "symbol": "KTTAW",
      "name": "Pasithea Therapeutics Corp - Warrants (11/08/2026)"
    },
    {
      "symbol": "KUKE",
      "name": "Kuke Music Holding Ltd"
    },
    {
      "symbol": "KULR",
      "name": "KULR Technology Group Inc"
    },
    {
      "symbol": "KURA",
      "name": "Kura Oncology Inc"
    },
    {
      "symbol": "KURE",
      "name": "KraneShares MSCI All China Health Care Index ETF"
    },
    {
      "symbol": "KVAC",
      "name": "Keen Vision Acquisition Corp"
    },
    {
      "symbol": "KVACU",
      "name": "Keen Vision Acquisition Corp - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "KVACW",
      "name": "Keen Vision Acquisition Corp - Warrants (15/03/2028)"
    },
    {
      "symbol": "KVHI",
      "name": "KVH Industries Inc"
    },
    {
      "symbol": "KVLE",
      "name": "KFA Value Line Dynamic Dividend Equity Index ETF"
    },
    {
      "symbol": "KVUE",
      "name": "Kenvue Inc"
    },
    {
      "symbol": "KVUE-W",
      "name": "Kenvue Inc When Issued"
    },
    {
      "symbol": "KVYO",
      "name": "Klaviyo Inc - Series A"
    },
    {
      "symbol": "KW",
      "name": "Kennedy-Wilson Holdings Inc"
    },
    {
      "symbol": "KWE",
      "name": "KWESST Micro Systems Inc"
    },
    {
      "symbol": "KWEB",
      "name": "KraneShares CSI China Internet ETF"
    },
    {
      "symbol": "KWESW",
      "name": "KWESST Micro Systems Inc - Warrants (29/04/2023)"
    },
    {
      "symbol": "KWR",
      "name": "Quaker Houghton"
    },
    {
      "symbol": "KWT",
      "name": "ISHARES MSCI KUWAIT ETF "
    },
    {
      "symbol": "KXI",
      "name": "iShares Global Consumer Staples ETF"
    },
    {
      "symbol": "KXIN",
      "name": "Kaixin Auto Holdings"
    },
    {
      "symbol": "KYMR",
      "name": "Kymera Therapeutics Inc"
    },
    {
      "symbol": "KYN",
      "name": "Kayne Anderson Energy Infrastructure Fund Inc"
    },
    {
      "symbol": "KYTX",
      "name": "Kyverna Therapeutics Inc"
    },
    {
      "symbol": "KZIA",
      "name": "Kazia Therapeutics Ltd"
    },
    {
      "symbol": "KZR",
      "name": "Kezar Life Sciences Inc"
    },
    {
      "symbol": "L",
      "name": "Loews Corp"
    },
    {
      "symbol": "LAAC",
      "name": "Lithium Americas (Argentina) Corp"
    },
    {
      "symbol": "LAAC-W",
      "name": "Lithium Americas Argentina Corp WhenIssued"
    },
    {
      "symbol": "LAB",
      "name": "Standard BioTools Inc"
    },
    {
      "symbol": "LABD",
      "name": "DIREXION DAILY S&P BIOTECH BEAR 3X SHARES DIREXION DAILY S&AMP;P BIOTECH BEAR 3X SHARES"
    },
    {
      "symbol": "LABP",
      "name": "Landos Biopharma Inc"
    },
    {
      "symbol": "LABU",
      "name": "DIREXION DAILY S&P BIOTECH BULL 3X SHARES DIREXION DAILY S&AMP;P BIOTECH BULL 3X SHARES"
    },
    {
      "symbol": "LAC",
      "name": "Lithium Americas Corp (NewCo)"
    },
    {
      "symbol": "LAC-W",
      "name": "Lithium Americas Corp When Issued"
    },
    {
      "symbol": "LAD",
      "name": "Lithia Motors Inc - Class A"
    },
    {
      "symbol": "LADR",
      "name": "Ladder Capital Corp - Class A"
    },
    {
      "symbol": "LAES",
      "name": "SEALSQ Corp"
    },
    {
      "symbol": "LAESV",
      "name": "SEALSQ Corp"
    },
    {
      "symbol": "LAKE",
      "name": "Lakeland Industries Inc"
    },
    {
      "symbol": "LALT",
      "name": "FIRST TRUST MULTI-STRATEGY ALTERNATIVE ETF "
    },
    {
      "symbol": "LAMR",
      "name": "Lamar Advertising Co - Class A"
    },
    {
      "symbol": "LANC",
      "name": "Lancaster Colony Corp"
    },
    {
      "symbol": "LAND",
      "name": "Gladstone Land Corp"
    },
    {
      "symbol": "LANDM",
      "name": "Gladstone Land Corp"
    },
    {
      "symbol": "LANDO",
      "name": "Gladstone Land Corp"
    },
    {
      "symbol": "LANDP",
      "name": "Gladstone Land Corp"
    },
    {
      "symbol": "LANV",
      "name": "Lanvin Group Holdings Ltd - Class A"
    },
    {
      "symbol": "LANV-WS",
      "name": "Lanvin Group Holdings Ltd - Warrants (19/01/2026)"
    },
    {
      "symbol": "LAPR",
      "name": "Innovator Premium Income 15 Buffer ETF - April"
    },
    {
      "symbol": "LARK",
      "name": "Landmark Bancorp Inc"
    },
    {
      "symbol": "LASE",
      "name": "Laser Photonics Corp"
    },
    {
      "symbol": "LASR",
      "name": "nLIGHT Inc"
    },
    {
      "symbol": "LATG",
      "name": "LatAmGrowth SPAC - Class A"
    },
    {
      "symbol": "LATGU",
      "name": "LatAmGrowth SPAC - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "LAUR",
      "name": "Laureate Education Inc"
    },
    {
      "symbol": "LAW",
      "name": "CS Disco Inc"
    },
    {
      "symbol": "LAZ",
      "name": "Lazard Ltd - Class A"
    },
    {
      "symbol": "LAZR",
      "name": "Luminar Technologies Inc - Class A"
    },
    {
      "symbol": "LBAI",
      "name": "Lakeland Bancorp Inc"
    },
    {
      "symbol": "LBAY",
      "name": "LEATHERBACK LONG/SHORT ALTERNATIVE YIELD ETF "
    },
    {
      "symbol": "LBBB",
      "name": "Lakeshore Acquisition II Corp"
    },
    {
      "symbol": "LBBBR",
      "name": "Lakeshore Acquisition II Corp"
    },
    {
      "symbol": "LBBBU",
      "name": "Lakeshore Acquisition II Corp - Units (1 Ord 1/2 War & 1 Right)"
    },
    {
      "symbol": "LBBBW",
      "name": "Lakeshore Acquisition II Corp - Warrants (18/11/2026)"
    },
    {
      "symbol": "LBO",
      "name": "WHITEWOLF Publicly Listed Private Equity ETF"
    },
    {
      "symbol": "LBPH",
      "name": "Longboard Pharmaceuticals Inc"
    },
    {
      "symbol": "LBRDA",
      "name": "Liberty Broadband Corp - Series A"
    },
    {
      "symbol": "LBRDK",
      "name": "Liberty Broadband Corp - Series C"
    },
    {
      "symbol": "LBRDP",
      "name": "Liberty Broadband Corp"
    },
    {
      "symbol": "LBRT",
      "name": "Liberty Energy Inc - Class A"
    },
    {
      "symbol": "LBTYA",
      "name": "Liberty Global plc - Class A"
    },
    {
      "symbol": "LBTYB",
      "name": "Liberty Global plc - Class B"
    },
    {
      "symbol": "LBTYK",
      "name": "Liberty Global plc - Class C"
    },
    {
      "symbol": "LC",
      "name": "LendingClub Corp"
    },
    {
      "symbol": "LCAA",
      "name": "L Catterton Asia Acquisition Corp - Class A"
    },
    {
      "symbol": "LCAAU",
      "name": "L Catterton Asia Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "LCAAW",
      "name": "L Catterton Asia Acquisition Corp - Warrants (08/03/2026)"
    },
    {
      "symbol": "LCF",
      "name": "TOUCHSTONE US LARGE CAP FOCUSED ETF "
    },
    {
      "symbol": "LCFY",
      "name": "Locafy Ltd"
    },
    {
      "symbol": "LCFYW",
      "name": "Locafy Ltd - Warrants (23/03/2027)"
    },
    {
      "symbol": "LCG",
      "name": "Sterling Capital Focus Equity ETF"
    },
    {
      "symbol": "LCID",
      "name": "Lucid Group Inc"
    },
    {
      "symbol": "LCII",
      "name": "LCI Industries"
    },
    {
      "symbol": "LCLG",
      "name": "Logan Capital Broad Innovative Growth ETF"
    },
    {
      "symbol": "LCNB",
      "name": "LCNB Corp"
    },
    {
      "symbol": "LCR",
      "name": "LEUTHOLD CORE ETF "
    },
    {
      "symbol": "LCTD",
      "name": "BlackRock World ex U.S. Carbon Transition Readiness ETF"
    },
    {
      "symbol": "LCTU",
      "name": "BlackRock U.S. Carbon Transition Readiness ETF"
    },
    {
      "symbol": "LCTX",
      "name": "Lineage Cell Therapeutics Inc"
    },
    {
      "symbol": "LCUT",
      "name": "Lifetime Brands Inc"
    },
    {
      "symbol": "LCW",
      "name": "Learn CW Investment Corp - Class A"
    },
    {
      "symbol": "LCW-U",
      "name": "Learn CW Investment Corporation Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant"
    },
    {
      "symbol": "LCW-WS",
      "name": "Learn CW Investment Corp - Warrants (08/10/2026)"
    },
    {
      "symbol": "LD",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "LDEM",
      "name": "ISHARES ESG MSCI EM LEADERS ETF "
    },
    {
      "symbol": "LDI",
      "name": "LoanDepot Inc - Class A"
    },
    {
      "symbol": "LDOS",
      "name": "Leidos Holdings Inc"
    },
    {
      "symbol": "LDP",
      "name": "Cohen & Steers Ltd Duration Preferred and Income Fund Inc"
    },
    {
      "symbol": "LDSF",
      "name": "FIRST TRUST LOW DURATION STRATEGIC FOCUS ETF "
    },
    {
      "symbol": "LDTC",
      "name": "LeddarTech Holdings Inc"
    },
    {
      "symbol": "LDTCW",
      "name": "LeddarTech Holdings Inc - Warrants (01/01/2025)"
    },
    {
      "symbol": "LDUR",
      "name": "PIMCO Enhanced Low Duration Active Exchange-Traded Fund"
    },
    {
      "symbol": "LDWY",
      "name": "Lendway Inc"
    },
    {
      "symbol": "LE",
      "name": "Lands` End Inc"
    },
    {
      "symbol": "LEA",
      "name": "Lear Corp"
    },
    {
      "symbol": "LEAD",
      "name": "Siren DIVCON Leaders Dividend ETF"
    },
    {
      "symbol": "LECO",
      "name": "Lincoln Electric Holdings Inc"
    },
    {
      "symbol": "LEDS",
      "name": "Semileds Corp"
    },
    {
      "symbol": "LEE",
      "name": "Lee Enterprises Inc"
    },
    {
      "symbol": "LEG",
      "name": "Leggett & Platt Inc"
    },
    {
      "symbol": "LEGH",
      "name": "Legacy Housing Corp"
    },
    {
      "symbol": "LEGN",
      "name": "Legend Biotech Corp"
    },
    {
      "symbol": "LEGR",
      "name": "FIRST TRUST INDXX INNOVATIVE TRANSACTION & PROCESS ETF "
    },
    {
      "symbol": "LEGT",
      "name": "Legato Merger Corp III"
    },
    {
      "symbol": "LEGT-U",
      "name": "Legato Merger Corp III - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "LEGT-WS",
      "name": "Legato Merger Corp III - Warrants (01/01/9999)"
    },
    {
      "symbol": "LEMB",
      "name": "ISHARES J.P. MORGAN EM LOCAL CURRENCY BOND ETF "
    },
    {
      "symbol": "LEN",
      "name": "Lennar Corp - Class A"
    },
    {
      "symbol": "LEN-B",
      "name": "Lennar Corp - Class B"
    },
    {
      "symbol": "LENZ",
      "name": "Graphite Bio Inc"
    },
    {
      "symbol": "LEO",
      "name": "BNY Mellon Strategic Municipals Inc"
    },
    {
      "symbol": "LESL",
      "name": "Leslies Inc"
    },
    {
      "symbol": "LEU",
      "name": "Centrus Energy Corp - Class A"
    },
    {
      "symbol": "LEV",
      "name": "Lion Electric Co (The)"
    },
    {
      "symbol": "LEV-WS",
      "name": "Lion Electric Co (The) - Warrants (06/05/2026)"
    },
    {
      "symbol": "LEV-WS-A",
      "name": "Lion Electric Co (The) - Warrants (13/12/2027)"
    },
    {
      "symbol": "LEVI",
      "name": "Levi Strauss & Co. Cls A"
    },
    {
      "symbol": "LEXI",
      "name": "Alexis Practical Tactical ETF"
    },
    {
      "symbol": "LEXX",
      "name": "Lexaria Bioscience Corp"
    },
    {
      "symbol": "LEXXW",
      "name": "Lexaria Bioscience Corp - Warrants (11/01/2026)"
    },
    {
      "symbol": "LFACW",
      "name": "LF Capital Acquisition Corp. II"
    },
    {
      "symbol": "LFCR",
      "name": "Lifecore Biomedical Inc"
    },
    {
      "symbol": "LFEQ",
      "name": "VANECK LONG/FLAT TREND ETF "
    },
    {
      "symbol": "LFLY",
      "name": "Leafly Holdings Inc"
    },
    {
      "symbol": "LFLYW",
      "name": "Leafly Holdings Inc - Warrants (07/02/2027)"
    },
    {
      "symbol": "LFMD",
      "name": "LifeMD Inc"
    },
    {
      "symbol": "LFMDP",
      "name": "LifeMD Inc"
    },
    {
      "symbol": "LFST",
      "name": "LifeStance Health Group Inc"
    },
    {
      "symbol": "LFT",
      "name": "Lument Finance Trust Inc"
    },
    {
      "symbol": "LFT-P-A",
      "name": "Lument Finance Trust Inc"
    },
    {
      "symbol": "LFUS",
      "name": "Littelfuse Inc"
    },
    {
      "symbol": "LFVN",
      "name": "Lifevantage Corporation"
    },
    {
      "symbol": "LFWD",
      "name": "Rewalk Robotics Ltd"
    },
    {
      "symbol": "LGACU",
      "name": "Lazard Growth Acquisition Corp I - Units (1 Ord Class A & 1/5 War)"
    },
    {
      "symbol": "LGCB",
      "name": "Linkage Global Inc"
    },
    {
      "symbol": "LGCL",
      "name": "Lucas GC Ltd"
    },
    {
      "symbol": "LGF-A",
      "name": "Lions Gate Entertainment Corp - Class A"
    },
    {
      "symbol": "LGF-B",
      "name": "Lions Gate Entertainment Corp - Class B"
    },
    {
      "symbol": "LGH",
      "name": "HCM Defender 500 Index ETF"
    },
    {
      "symbol": "LGHL",
      "name": "Lion Group Holding Ltd"
    },
    {
      "symbol": "LGHLW",
      "name": "Lion Group Holding Ltd - Warrants (17/06/2025)"
    },
    {
      "symbol": "LGHT",
      "name": "Langar Global HealthTech ETF"
    },
    {
      "symbol": "LGI",
      "name": "Lazard Global Total Return and Income Fund Inc"
    },
    {
      "symbol": "LGIH",
      "name": "LGI Homes Inc"
    },
    {
      "symbol": "LGL",
      "name": "LGL Group Inc"
    },
    {
      "symbol": "LGL-WS",
      "name": "LGL Group Inc - Warrants (16/11/2025)"
    },
    {
      "symbol": "LGLV",
      "name": "SPDR SSGA US Large Cap Low Volatility Index ETF"
    },
    {
      "symbol": "LGMK",
      "name": "LogicMark Inc"
    },
    {
      "symbol": "LGND",
      "name": "Ligand Pharmaceuticals Inc - Class B"
    },
    {
      "symbol": "LGO",
      "name": "Largo Inc"
    },
    {
      "symbol": "LGOV",
      "name": "FIRST TRUST LONG DURATION OPPORTUNITIES ETF "
    },
    {
      "symbol": "LGRO",
      "name": "Level Four Large Cap Growth Active ETF"
    },
    {
      "symbol": "LGV-WS",
      "name": "Longview Acquisition Corp II Redeemable Warrants each whole Warrant exercisable for one share of Class A Common Stock each at an exercise price of 11.50 per s"
    },
    {
      "symbol": "LGVC",
      "name": "LAMF Global Ventures Corp I - Class A"
    },
    {
      "symbol": "LGVCU",
      "name": "LAMF Global Ventures Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "LGVCW",
      "name": "LAMF Global Ventures Corp I - Warrants (05/11/2026)"
    },
    {
      "symbol": "LGVN",
      "name": "Longeveron Inc - Class A"
    },
    {
      "symbol": "LGVNV",
      "name": "Longeveron Inc Subscription Right When Issued"
    },
    {
      "symbol": "LH",
      "name": "Laboratory Corp Of America Holdings"
    },
    {
      "symbol": "LH-W",
      "name": "Laboratory Corporation of America Holdings WhenIssued"
    },
    {
      "symbol": "LHC",
      "name": "Leo Holdings Corp II - Class A"
    },
    {
      "symbol": "LHC-U",
      "name": "Leo Holdings Corp II - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "LHX",
      "name": "L3Harris Technologies Inc"
    },
    {
      "symbol": "LI",
      "name": "Li Auto Inc"
    },
    {
      "symbol": "LIBY",
      "name": "Liberty Resources Acquisition Corp - Class A"
    },
    {
      "symbol": "LIBYU",
      "name": "Liberty Resources Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "LIBYW",
      "name": "Liberty Resources Acquisition Corp - Warrants - (31/10/2028)"
    },
    {
      "symbol": "LICN",
      "name": "Lichen China Ltd - Class A"
    },
    {
      "symbol": "LICY",
      "name": "Li-Cycle Holdings Corp - Class A"
    },
    {
      "symbol": "LIDR",
      "name": "AEye Inc - Class A"
    },
    {
      "symbol": "LIDRW",
      "name": "AEye Inc - Warrants (16/08/2026)"
    },
    {
      "symbol": "LIFE",
      "name": "Atyr Pharma Inc"
    },
    {
      "symbol": "LIFW",
      "name": "MSP Recovery Inc - Class A"
    },
    {
      "symbol": "LIFWW",
      "name": "MSP Recovery Inc - Warrants -New (23/05/2027)"
    },
    {
      "symbol": "LIFWZ",
      "name": "MSP Recovery Inc - Warrants (23/05/2027)"
    },
    {
      "symbol": "LII",
      "name": "Lennox International Inc"
    },
    {
      "symbol": "LILA",
      "name": "Liberty Latin America Ltd - Class A"
    },
    {
      "symbol": "LILAK",
      "name": "Liberty Latin America Ltd - Class C"
    },
    {
      "symbol": "LILM",
      "name": "Lilium N.V - Class A"
    },
    {
      "symbol": "LILMW",
      "name": "Lilium N.V - Warrants (14/09/2026)"
    },
    {
      "symbol": "LIN",
      "name": "Linde Plc."
    },
    {
      "symbol": "LINC",
      "name": "Lincoln Educational Services Corp"
    },
    {
      "symbol": "LIND",
      "name": "Lindblad Expeditions Holdings Inc"
    },
    {
      "symbol": "LINK",
      "name": "Interlink Electronics"
    },
    {
      "symbol": "LIONU",
      "name": "Lionheart III Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "LIPO",
      "name": "Lipella Pharmaceuticals Inc"
    },
    {
      "symbol": "LIQT",
      "name": "LiqTech International Inc"
    },
    {
      "symbol": "LIT",
      "name": "Global X Lithium & Battery Tech ETF"
    },
    {
      "symbol": "LITB",
      "name": "LightInTheBox Holding Co Ltd"
    },
    {
      "symbol": "LITE",
      "name": "Lumentum Holdings Inc"
    },
    {
      "symbol": "LITM",
      "name": "Snow Lake Resources Ltd"
    },
    {
      "symbol": "LITP",
      "name": "Sprott Lithium Miners ETF"
    },
    {
      "symbol": "LITT",
      "name": "Logistics Innovation Technologies Corp - Class A"
    },
    {
      "symbol": "LITTU",
      "name": "Logistics Innovation Technologies Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "LITTW",
      "name": "Logistics Innovation Technologies Corp - Warrants (10/06/2026)"
    },
    {
      "symbol": "LIVE",
      "name": "Live Ventures Inc"
    },
    {
      "symbol": "LIVN",
      "name": "LivaNova PLC"
    },
    {
      "symbol": "LIXT",
      "name": "Lixte Biotechnology Holdings Inc"
    },
    {
      "symbol": "LIXTW",
      "name": "Lixte Biotechnology Holdings Inc - Warrants (01/01/2025)"
    },
    {
      "symbol": "LJAN",
      "name": "Innovator Premium Income 15 Buffer ETF - January"
    },
    {
      "symbol": "LKCO",
      "name": "Luokung Technology Corp"
    },
    {
      "symbol": "LKFN",
      "name": "Lakeland Financial Corp"
    },
    {
      "symbol": "LKOR",
      "name": "FLEXSHARES CREDIT-SCORED US LONG CORPORATE BOND INDEX FUND "
    },
    {
      "symbol": "LKQ",
      "name": "LKQ Corp"
    },
    {
      "symbol": "LL",
      "name": "LL Flooring Holdings Inc"
    },
    {
      "symbol": "LLAP",
      "name": "Terran Orbital Corp - Class A"
    },
    {
      "symbol": "LLAP-WS",
      "name": "Terran Orbital Corp - Warrants (09/03/2028)"
    },
    {
      "symbol": "LLY",
      "name": "Lilly(Eli) & Company"
    },
    {
      "symbol": "LLYVA",
      "name": "Liberty Media Corp (New Liberty Live) Series A"
    },
    {
      "symbol": "LLYVK",
      "name": "Liberty Media Corp (New Liberty Live) Series C"
    },
    {
      "symbol": "LMACA",
      "name": "Liberty Media Acquisition Corp - Series A"
    },
    {
      "symbol": "LMACU",
      "name": "Liberty Media Acquisition Corp - Units (1 Ord Share Ser A & 1/5 War)"
    },
    {
      "symbol": "LMACW",
      "name": "Liberty Media Acquisition Corp - Warrants (22/01/2026)"
    },
    {
      "symbol": "LMAT",
      "name": "Lemaitre Vascular Inc"
    },
    {
      "symbol": "LMB",
      "name": "Limbach Holdings Inc"
    },
    {
      "symbol": "LMBS",
      "name": "FIRST TRUST LOW DURATION OPPORTUNITIES ETF "
    },
    {
      "symbol": "LMFA",
      "name": "LM Funding America Inc"
    },
    {
      "symbol": "LMND",
      "name": "Lemonade Inc"
    },
    {
      "symbol": "LMND-WS",
      "name": "Lemonade Inc - Warrants (09/02/2026)"
    },
    {
      "symbol": "LMNL",
      "name": "Liminal Biosciences Inc"
    },
    {
      "symbol": "LMNR",
      "name": "Limoneira Company"
    },
    {
      "symbol": "LMT",
      "name": "Lockheed Martin Corp"
    },
    {
      "symbol": "LNC",
      "name": "Lincoln National Corp"
    },
    {
      "symbol": "LNC-P-D",
      "name": "Lincoln National Corporation Depositary Shares Series D"
    },
    {
      "symbol": "LND",
      "name": "Brasilagro Companhia Brasileira De Propriedade Agricola"
    },
    {
      "symbol": "LNG",
      "name": "Cheniere Energy Inc"
    },
    {
      "symbol": "LNGG",
      "name": "ROUNDHILL ALERIAN LNG ETF "
    },
    {
      "symbol": "LNGZ",
      "name": "Range Global LNG Ecosystem Index ETF"
    },
    {
      "symbol": "LNKB",
      "name": "Linkbancorp Inc"
    },
    {
      "symbol": "LNN",
      "name": "Lindsay Corporation"
    },
    {
      "symbol": "LNSR",
      "name": "LENSAR Inc"
    },
    {
      "symbol": "LNT",
      "name": "Alliant Energy Corp"
    },
    {
      "symbol": "LNTH",
      "name": "Lantheus Holdings Inc"
    },
    {
      "symbol": "LNW",
      "name": "Light & Wonder Inc"
    },
    {
      "symbol": "LNZA",
      "name": "LanzaTech Global Inc - Class A"
    },
    {
      "symbol": "LNZAW",
      "name": "LanzaTech Global Inc - Warrants (06/02/2028)"
    },
    {
      "symbol": "LOAN",
      "name": "Manhattan Bridge Capital Inc"
    },
    {
      "symbol": "LOAR",
      "name": "Loar Holdings Inc"
    },
    {
      "symbol": "LOB",
      "name": "Live Oak Bancshares Inc"
    },
    {
      "symbol": "LOBO",
      "name": "Lobo Ev Technologies Ltd"
    },
    {
      "symbol": "LOCL",
      "name": "Local Bounti Corp - Class A"
    },
    {
      "symbol": "LOCO",
      "name": "El Pollo Loco Holdings Inc"
    },
    {
      "symbol": "LOCT",
      "name": "Innovator Premium Income 15 Buffer ETF - October"
    },
    {
      "symbol": "LODE",
      "name": "Comstock Inc"
    },
    {
      "symbol": "LOGI",
      "name": "Logitech International S.A."
    },
    {
      "symbol": "LOMA",
      "name": "Loma Negra Compania Industrial Argentina Sociedad Anonima"
    },
    {
      "symbol": "LONZ",
      "name": "PIMCO Senior Loan Active ExchangeTraded Fund"
    },
    {
      "symbol": "LOOP",
      "name": "Loop Industries Inc"
    },
    {
      "symbol": "LOPE",
      "name": "Grand Canyon Education Inc"
    },
    {
      "symbol": "LOPP",
      "name": "GABELLI LOVE OUR PLANET & PEOPLE ETF "
    },
    {
      "symbol": "LOT",
      "name": "Lotus Technology Inc"
    },
    {
      "symbol": "LOTWW",
      "name": "Lotus Technology Inc - Warrants (23/02/2029)"
    },
    {
      "symbol": "LOUP",
      "name": "Innovator Deepwater Frontier Tech ETF"
    },
    {
      "symbol": "LOVE",
      "name": "Lovesac Company"
    },
    {
      "symbol": "LOW",
      "name": "Lowe`s Cos. Inc"
    },
    {
      "symbol": "LOWV",
      "name": "AB US LOW VOLATILITY EQUITY ETF "
    },
    {
      "symbol": "LPA",
      "name": "Logistic Properties of the Americas"
    },
    {
      "symbol": "LPCN",
      "name": "Lipocine Inc"
    },
    {
      "symbol": "LPG",
      "name": "Dorian LPG Ltd"
    },
    {
      "symbol": "LPL",
      "name": "LG Display Co Ltd"
    },
    {
      "symbol": "LPLA",
      "name": "LPL Financial Holdings Inc"
    },
    {
      "symbol": "LPRO",
      "name": "Open Lending Corp"
    },
    {
      "symbol": "LPSN",
      "name": "Liveperson Inc"
    },
    {
      "symbol": "LPTH",
      "name": "Lightpath Technologies Inc - Class A"
    },
    {
      "symbol": "LPTV",
      "name": "Loop Media Inc"
    },
    {
      "symbol": "LPTX",
      "name": "Leap Therapeutics Inc"
    },
    {
      "symbol": "LPX",
      "name": "Louisiana-Pacific Corp"
    },
    {
      "symbol": "LQAI",
      "name": "LG QRAFT AI-Powered U.S. Large Cap Core ETF"
    },
    {
      "symbol": "LQD",
      "name": "iShares iBoxx USD Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "LQDA",
      "name": "Liquidia Corp"
    },
    {
      "symbol": "LQDB",
      "name": "iShares BBB Rated Corporate Bond ETF"
    },
    {
      "symbol": "LQDH",
      "name": "ISHARES INTEREST RATE HEDGED CORPORATE BOND ETF "
    },
    {
      "symbol": "LQDI",
      "name": "ISHARES INFLATION HEDGED CORPORATE BOND ETF "
    },
    {
      "symbol": "LQDT",
      "name": "Liquidity Services Inc"
    },
    {
      "symbol": "LQDW",
      "name": "ISHARES INVESTMENT GRADE CORPORATE BOND BUYWRITE STRATEGY ETF "
    },
    {
      "symbol": "LQIG",
      "name": "SPDR MARKETAXESS INVESTMENT GRADE 400 CORPORATE BOND ETF "
    },
    {
      "symbol": "LQR",
      "name": "LQR House Inc"
    },
    {
      "symbol": "LRCX",
      "name": "Lam Research Corp"
    },
    {
      "symbol": "LRE",
      "name": "Lead Real Estate Co Ltd"
    },
    {
      "symbol": "LRFC",
      "name": "Logan Ridge Finance Corporation"
    },
    {
      "symbol": "LRGC",
      "name": "AB US LARGE CAP STRATEGIC EQUITIES ETF "
    },
    {
      "symbol": "LRGE",
      "name": "ClearBridge Large Cap Growth ESG ETF"
    },
    {
      "symbol": "LRGF",
      "name": "ISHARES U.S. EQUITY FACTOR ETF "
    },
    {
      "symbol": "LRHC",
      "name": "La Rosa Holdings Corp"
    },
    {
      "symbol": "LRMR",
      "name": "Larimar Therapeutics Inc"
    },
    {
      "symbol": "LRN",
      "name": "Stride Inc"
    },
    {
      "symbol": "LRND",
      "name": "IQ U.S. LARGE CAP R&D LEADERS ETF "
    },
    {
      "symbol": "LSAF",
      "name": "LeaderShares AlphaFactor US Core Equity ETF"
    },
    {
      "symbol": "LSAK",
      "name": "Lesaka Technologies Inc"
    },
    {
      "symbol": "LSAT",
      "name": "LeaderShares AlphaFactor Tactical Focused ETF"
    },
    {
      "symbol": "LSBK",
      "name": "Lake Shore Bancorp"
    },
    {
      "symbol": "LSCC",
      "name": "Lattice Semiconductor Corp"
    },
    {
      "symbol": "LSDI",
      "name": "Lucy Scientific Discovery Inc"
    },
    {
      "symbol": "LSEA",
      "name": "Landsea Homes Corporation - Class A"
    },
    {
      "symbol": "LSEAW",
      "name": "Landsea Homes Corporation Warrant"
    },
    {
      "symbol": "LSEQ",
      "name": "HARBOR LONG-SHORT EQUITY ETF "
    },
    {
      "symbol": "LSF",
      "name": "Laird Superfood Inc"
    },
    {
      "symbol": "LSGR",
      "name": "NATIXIS LOOMIS SAYLES FOCUSED GROWTH ETF "
    },
    {
      "symbol": "LSPD",
      "name": "Lightspeed Commerce Inc (Sub Voting)"
    },
    {
      "symbol": "LSPRU",
      "name": "ZyVersa Therapeutics Inc - Units (1 Ord Share Class A & 3/4 War)"
    },
    {
      "symbol": "LSST",
      "name": "NATIXIS LOOMIS SAYLES SHORT DURATION INCOME ETF "
    },
    {
      "symbol": "LSTA",
      "name": "Lisata Therapeutics Inc"
    },
    {
      "symbol": "LSTR",
      "name": "Landstar System Inc"
    },
    {
      "symbol": "LSXMA",
      "name": "Liberty Media Corp (New Liberty SiriusXM) Series A"
    },
    {
      "symbol": "LSXMB",
      "name": "Liberty Media Corp (New Liberty SiriusXM) Series B"
    },
    {
      "symbol": "LSXMK",
      "name": "Liberty Media Corp (New Liberty SiriusXM) Series C"
    },
    {
      "symbol": "LTBR",
      "name": "Lightbridge Corp"
    },
    {
      "symbol": "LTC",
      "name": "LTC Properties Inc"
    },
    {
      "symbol": "LTH",
      "name": "Life Time Group Holdings Inc"
    },
    {
      "symbol": "LTL",
      "name": "PROSHARES ULTRA COMMUNICATION SERVICES "
    },
    {
      "symbol": "LTPZ",
      "name": "PIMCO 15+ Year U.S. TIPS Index Exchange-Traded Fund"
    },
    {
      "symbol": "LTRN",
      "name": "Lantern Pharma Inc"
    },
    {
      "symbol": "LTRPA",
      "name": "Liberty TripAdvisor Holdings Inc - Series A"
    },
    {
      "symbol": "LTRPB",
      "name": "Liberty TripAdvisor Holdings Inc - Series B"
    },
    {
      "symbol": "LTRX",
      "name": "Lantronix Inc"
    },
    {
      "symbol": "LTRY",
      "name": "Lottery.com Inc"
    },
    {
      "symbol": "LTRYW",
      "name": "Lottery.com Inc - Warrants (29/10/2026)"
    },
    {
      "symbol": "LU",
      "name": "Lufax Holding Ltd"
    },
    {
      "symbol": "LUCD",
      "name": "Lucid Diagnostics Inc"
    },
    {
      "symbol": "LUCY",
      "name": "Innovative Eyewear Inc"
    },
    {
      "symbol": "LUCYW",
      "name": "Innovative Eyewear Inc - Warrants(31/12/2023)"
    },
    {
      "symbol": "LULU",
      "name": "Lululemon Athletica Inc"
    },
    {
      "symbol": "LUMN",
      "name": "Lumen Technologies Inc"
    },
    {
      "symbol": "LUMO",
      "name": "Lumos Pharma Inc"
    },
    {
      "symbol": "LUNA",
      "name": "Luna Innovations Inc"
    },
    {
      "symbol": "LUNG",
      "name": "Pulmonx Corp"
    },
    {
      "symbol": "LUNR",
      "name": "Intuitive Machines Inc - Class A"
    },
    {
      "symbol": "LUNRW",
      "name": "Intuitive Machines Inc - Warrants (13/02/2028)"
    },
    {
      "symbol": "LUV",
      "name": "Southwest Airlines Company"
    },
    {
      "symbol": "LUX",
      "name": "Tema Luxury ETF"
    },
    {
      "symbol": "LUXH",
      "name": "LuxUrban Hotels Inc"
    },
    {
      "symbol": "LUXHP",
      "name": "LuxUrban Hotels Inc"
    },
    {
      "symbol": "LUXX",
      "name": "ROUNDHILL S&P GLOBAL LUXURY ETF "
    },
    {
      "symbol": "LVAC",
      "name": "Lava Medtech Acquisition Corp - Class A"
    },
    {
      "symbol": "LVACW",
      "name": "Lava Medtech Acquisition Corp - Warrants (21/10/2026)"
    },
    {
      "symbol": "LVHD",
      "name": "Franklin U.S. Low Volatility High Dividend Index ETF"
    },
    {
      "symbol": "LVHI",
      "name": "Franklin International Low Volatility High Dividend Index ETF"
    },
    {
      "symbol": "LVLU",
      "name": "Lulus Fashion Lounge Holdings Inc"
    },
    {
      "symbol": "LVO",
      "name": "LiveOne Inc"
    },
    {
      "symbol": "LVOL",
      "name": "AMERICAN CENTURY LOW VOLATILITY ETF "
    },
    {
      "symbol": "LVRO",
      "name": "Lavoro Ltd - Class A"
    },
    {
      "symbol": "LVROW",
      "name": "Lavoro Ltd - Warrants (08/02/2028)"
    },
    {
      "symbol": "LVS",
      "name": "Las Vegas Sands Corp"
    },
    {
      "symbol": "LVTX",
      "name": "LAVA Therapeutics NV"
    },
    {
      "symbol": "LVWR",
      "name": "LiveWire Group Inc"
    },
    {
      "symbol": "LVWR-WS",
      "name": "LiveWire Group Inc - Warrants (01/01/9999)"
    },
    {
      "symbol": "LW",
      "name": "Lamb Weston Holdings Inc"
    },
    {
      "symbol": "LWAY",
      "name": "Lifeway Foods Inc"
    },
    {
      "symbol": "LWLG",
      "name": "Lightwave Logic Inc"
    },
    {
      "symbol": "LX",
      "name": "LexinFintech Holdings Ltd"
    },
    {
      "symbol": "LXEH",
      "name": "Lixiang Education Holding Co Ltd"
    },
    {
      "symbol": "LXEO",
      "name": "Lexeo Therapeutics Inc"
    },
    {
      "symbol": "LXFR",
      "name": "Luxfer Holdings PLC"
    },
    {
      "symbol": "LXP",
      "name": "LXP Industrial Trust"
    },
    {
      "symbol": "LXP-P-C",
      "name": "LXP Industrial Trust"
    },
    {
      "symbol": "LXRX",
      "name": "Lexicon Pharmaceuticals Inc"
    },
    {
      "symbol": "LXU",
      "name": "LSB Industries Inc"
    },
    {
      "symbol": "LYB",
      "name": "LyondellBasell Industries NV - Class A"
    },
    {
      "symbol": "LYEL",
      "name": "Lyell Immunopharma Inc"
    },
    {
      "symbol": "LYFE",
      "name": "2ndVote Life Neutral Plus ETF"
    },
    {
      "symbol": "LYFT",
      "name": "Lyft Inc Cls A"
    },
    {
      "symbol": "LYG",
      "name": "Lloyds Banking Group plc"
    },
    {
      "symbol": "LYRA",
      "name": "Lyra Therapeutics Inc"
    },
    {
      "symbol": "LYT",
      "name": "Lytus Technologies Holdings PTV Ltd"
    },
    {
      "symbol": "LYTS",
      "name": "LSI Industries Inc"
    },
    {
      "symbol": "LYV",
      "name": "Live Nation Entertainment Inc"
    },
    {
      "symbol": "LZ",
      "name": "LegalZoom.com Inc"
    },
    {
      "symbol": "LZB",
      "name": "La-Z-Boy Inc"
    },
    {
      "symbol": "LZM",
      "name": "Lifezone Metals Ltd"
    },
    {
      "symbol": "LZM-WS",
      "name": "Lifezone Metals Ltd - Warrants (05/07/2028)"
    },
    {
      "symbol": "M",
      "name": "Macy`s Inc"
    },
    {
      "symbol": "MA",
      "name": "Mastercard Incorporated - Class A"
    },
    {
      "symbol": "MAA",
      "name": "Mid-America Apartment Communities Inc"
    },
    {
      "symbol": "MAA-P-I",
      "name": "Mid-America Apartment Communities Inc"
    },
    {
      "symbol": "MAC",
      "name": "Macerich Company"
    },
    {
      "symbol": "MACA",
      "name": "Moringa Acquisition Corp - Class A"
    },
    {
      "symbol": "MACAU",
      "name": "Moringa Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "MACAW",
      "name": "Moringa Acquisition Corp - Warrants (19/02/2026)"
    },
    {
      "symbol": "MACK",
      "name": "Merrimack Pharmaceuticals Inc"
    },
    {
      "symbol": "MAG",
      "name": "MAG Silver Corp"
    },
    {
      "symbol": "MAGA",
      "name": "POINT BRIDGE AMERICA FIRST ETF "
    },
    {
      "symbol": "MAGG",
      "name": "Madison Aggregate Bond ETF"
    },
    {
      "symbol": "MAGQ",
      "name": "Roundhill Daily Inverse Magnificent Seven ETF"
    },
    {
      "symbol": "MAGS",
      "name": "ROUNDHILL MAGNIFICENT SEVEN ETF "
    },
    {
      "symbol": "MAGX",
      "name": "Roundhill Daily 2X Long Magnificent Seven ETF"
    },
    {
      "symbol": "MAIA",
      "name": "MAIA Biotechnology Inc"
    },
    {
      "symbol": "MAIN",
      "name": "Main Street Capital Corporation"
    },
    {
      "symbol": "MAKX",
      "name": "PROSHARES S&P KENSHO SMART FACTORIES ETF "
    },
    {
      "symbol": "MAMA",
      "name": "Mama`s Creations Inc"
    },
    {
      "symbol": "MAMB",
      "name": "Monarch Ambassador Income ETF"
    },
    {
      "symbol": "MAMO",
      "name": "Massimo Group"
    },
    {
      "symbol": "MAN",
      "name": "ManpowerGroup"
    },
    {
      "symbol": "MANH",
      "name": "Manhattan Associates Inc"
    },
    {
      "symbol": "MANU",
      "name": "Manchester United Plc. - Class A"
    },
    {
      "symbol": "MAPP",
      "name": "HARBOR MULTI-ASSET EXPLORER ETF "
    },
    {
      "symbol": "MAPS",
      "name": "WM Technology Inc - Class A"
    },
    {
      "symbol": "MAPSW",
      "name": "WM Technology Inc - Warrants (16/06/2026)"
    },
    {
      "symbol": "MAQC",
      "name": "Maquia Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "MAQCU",
      "name": "Maquia Capital Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "MAQCW",
      "name": "Maquia Capital Acquisition Corp - Warrants (05/05/2026)"
    },
    {
      "symbol": "MAR",
      "name": "Marriott International Inc - Class A"
    },
    {
      "symbol": "MARA",
      "name": "Marathon Digital Holdings Inc"
    },
    {
      "symbol": "MARB",
      "name": "FIRST TRUST MERGER ARBITRAGE ETF "
    },
    {
      "symbol": "MARM",
      "name": "FT Vest U.S. Equity Max Buffer ETF - March"
    },
    {
      "symbol": "MARPS",
      "name": "Marine Petroleum Trust"
    },
    {
      "symbol": "MART",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 MAR ETF "
    },
    {
      "symbol": "MARW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 MAR ETF "
    },
    {
      "symbol": "MARX",
      "name": "Mars Acquisition Corp"
    },
    {
      "symbol": "MARXR",
      "name": "Mars Acquisition Corp"
    },
    {
      "symbol": "MARXU",
      "name": "Mars Acquisition Corp - Units (1 Ord & 1 Right )"
    },
    {
      "symbol": "MARZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (MARCH) ETF "
    },
    {
      "symbol": "MAS",
      "name": "Masco Corp"
    },
    {
      "symbol": "MASI",
      "name": "Masimo Corp"
    },
    {
      "symbol": "MASS",
      "name": "908 Devices Inc"
    },
    {
      "symbol": "MAT",
      "name": "Mattel Inc"
    },
    {
      "symbol": "MATH",
      "name": "Metalpha Technology Holding Ltd"
    },
    {
      "symbol": "MATV",
      "name": "Mativ Holdings Inc"
    },
    {
      "symbol": "MATW",
      "name": "Matthews International Corp - Class A"
    },
    {
      "symbol": "MATX",
      "name": "Matson Inc"
    },
    {
      "symbol": "MAV",
      "name": "Pioneer Municipal High Income Advantage Fund Inc"
    },
    {
      "symbol": "MAX",
      "name": "MediaAlpha Inc - Class A"
    },
    {
      "symbol": "MAXI",
      "name": "Simplify Bitcoin Strategy PLUS Income ETF"
    },
    {
      "symbol": "MAXN",
      "name": "Maxeon Solar Technologies Ltd"
    },
    {
      "symbol": "MAYS",
      "name": "J.W. Mays Inc"
    },
    {
      "symbol": "MAYT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 MAY ETF "
    },
    {
      "symbol": "MAYW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 MAY ETF "
    },
    {
      "symbol": "MAYZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (MAY) ETF "
    },
    {
      "symbol": "MBAY",
      "name": "Mediabay Inc"
    },
    {
      "symbol": "MBB",
      "name": "iShares MBS ETF"
    },
    {
      "symbol": "MBBB",
      "name": "VANECK MOODY'S ANALYTICS BBB CORPORATE BOND ETF "
    },
    {
      "symbol": "MBC",
      "name": "MasterBrand Inc"
    },
    {
      "symbol": "MBC-W",
      "name": "MasterBrand Inc WhenIssued"
    },
    {
      "symbol": "MBCC",
      "name": "Monarch Blue Chips Core ETF"
    },
    {
      "symbol": "MBCN",
      "name": "Middlefield Banc Corp"
    },
    {
      "symbol": "MBI",
      "name": "MBIA Inc"
    },
    {
      "symbol": "MBIN",
      "name": "Merchants Bancorp"
    },
    {
      "symbol": "MBINM",
      "name": "Merchants Bancorp"
    },
    {
      "symbol": "MBINN",
      "name": "Merchants Bancorp Depositary Shares 6.00 Fixed Rate Series C NonCumulative Perpetual Preferred Stock"
    },
    {
      "symbol": "MBINO",
      "name": "Merchants Bancorp"
    },
    {
      "symbol": "MBIO",
      "name": "Mustang Bio Inc"
    },
    {
      "symbol": "MBLY",
      "name": "Mobileye Global Inc - Class A"
    },
    {
      "symbol": "MBND",
      "name": "SPDR NUVEEN MUNICIPAL BOND ETF "
    },
    {
      "symbol": "MBNE",
      "name": "SPDR Nuveen Municipal Bond ESG ETF"
    },
    {
      "symbol": "MBNKP",
      "name": "Medallion Bank"
    },
    {
      "symbol": "MBOT",
      "name": "Microbot Medical Inc"
    },
    {
      "symbol": "MBOX",
      "name": "FREEDOM DAY DIVIDEND ETF "
    },
    {
      "symbol": "MBRX",
      "name": "Moleculin Biotech Inc"
    },
    {
      "symbol": "MBS",
      "name": "Angel Oak Mortgage-Backed Securities ETF"
    },
    {
      "symbol": "MBSD",
      "name": "FLEXSHARES DISCIPLINED DURATION MBS INDEX FUND "
    },
    {
      "symbol": "MBSF",
      "name": "Regan Floating Rate MBS ETF"
    },
    {
      "symbol": "MBTC",
      "name": "Nocturne Acquisition Corp"
    },
    {
      "symbol": "MBTCR",
      "name": "Nocturne Acquisition Corp"
    },
    {
      "symbol": "MBTCU",
      "name": "Nocturne Acquisition Corp - Units (1 & 1 Rights)"
    },
    {
      "symbol": "MBUU",
      "name": "Malibu Boats Inc - Class A"
    },
    {
      "symbol": "MBWM",
      "name": "Mercantile Bank Corp"
    },
    {
      "symbol": "MC",
      "name": "Moelis & Co - Class A"
    },
    {
      "symbol": "MCAA",
      "name": "Mountain & Co I Acquisition Corp - Class A"
    },
    {
      "symbol": "MCAAU",
      "name": "Mountain & Co I Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "MCAAW",
      "name": "Mountain & Co I Acquisition Corp - Warrants - (04/11/2026)"
    },
    {
      "symbol": "MCAC",
      "name": "Monterey Capital Acquisition Corp - Class A"
    },
    {
      "symbol": "MCACR",
      "name": "Monterey Capital Acquisition Corp"
    },
    {
      "symbol": "MCACU",
      "name": "Monterey Capital Acquisition Corp - Units (1 Ord Class A 1 War & 1 Right)"
    },
    {
      "symbol": "MCACW",
      "name": "Monterey Capital Acquisition Corp - Warrants (10/05/2027)"
    },
    {
      "symbol": "MCAG",
      "name": "Mountain Crest Acquisition Corp V"
    },
    {
      "symbol": "MCAGR",
      "name": "Mountain Crest Acquisition Corp V"
    },
    {
      "symbol": "MCAGU",
      "name": "Mountain Crest Acquisition Corp V - Units (1 1 Rights)"
    },
    {
      "symbol": "MCB",
      "name": "Metropolitan Bank Holding Corp"
    },
    {
      "symbol": "MCBC",
      "name": "Macatawa Bank Corp"
    },
    {
      "symbol": "MCBS",
      "name": "MetroCity Bankshares Inc"
    },
    {
      "symbol": "MCD",
      "name": "McDonald`s Corp"
    },
    {
      "symbol": "MCFT",
      "name": "MasterCraft Boat Holdings Inc"
    },
    {
      "symbol": "MCH",
      "name": "MATTHEWS CHINA ACTIVE ETF "
    },
    {
      "symbol": "MCHI",
      "name": "ISHARES MSCI CHINA ETF "
    },
    {
      "symbol": "MCHP",
      "name": "Microchip Technology Inc"
    },
    {
      "symbol": "MCHS",
      "name": "MATTHEWS CHINA DISCOVERY ACTIVE ETF "
    },
    {
      "symbol": "MCHX",
      "name": "Marchex Inc - Class B"
    },
    {
      "symbol": "MCI",
      "name": "Barings Corporate Investors"
    },
    {
      "symbol": "MCK",
      "name": "Mckesson Corporation"
    },
    {
      "symbol": "MCN",
      "name": "Madison Covered Call & Equity Strategy Fund"
    },
    {
      "symbol": "MCO",
      "name": "Moody`s Corp"
    },
    {
      "symbol": "MCOM",
      "name": "METRICOM INC"
    },
    {
      "symbol": "MCR",
      "name": "MFS Charter Income Trust"
    },
    {
      "symbol": "MCRB",
      "name": "Seres Therapeutics Inc"
    },
    {
      "symbol": "MCRI",
      "name": "Monarch Casino & Resort Inc"
    },
    {
      "symbol": "MCS",
      "name": "Marcus Corp"
    },
    {
      "symbol": "MCSE",
      "name": "Martin Currie Sustainable International Equity ETF"
    },
    {
      "symbol": "MCVT",
      "name": "Mill City Ventures III Ltd"
    },
    {
      "symbol": "MCW",
      "name": "Mister Car Wash Inc"
    },
    {
      "symbol": "MCY",
      "name": "Mercury General Corp"
    },
    {
      "symbol": "MD",
      "name": "Pediatrix Medical Group Inc"
    },
    {
      "symbol": "MDAI",
      "name": "Spectral AI Inc - Class A"
    },
    {
      "symbol": "MDAIW",
      "name": "Spectral AI Inc - Warrants (11/09/2028)"
    },
    {
      "symbol": "MDB",
      "name": "MongoDB Inc - Class A"
    },
    {
      "symbol": "MDBH",
      "name": "MDB Capital Holdings LLC - Class A"
    },
    {
      "symbol": "MDCP",
      "name": "VICTORYSHARES THB MID CAP ESG ETF "
    },
    {
      "symbol": "MDEV",
      "name": "First Trust Indxx Medical Devices ETF"
    },
    {
      "symbol": "MDGL",
      "name": "Madrigal Pharmaceuticals Inc"
    },
    {
      "symbol": "MDIA",
      "name": "MediaCo Holding Inc - Class A"
    },
    {
      "symbol": "MDIV",
      "name": "MULTI-ASSET DIVERSIFIED INCOME INDEX FUND "
    },
    {
      "symbol": "MDJH",
      "name": "MDJM Ltd"
    },
    {
      "symbol": "MDLV",
      "name": "Morgan Dempsey Large Cap Value ETF"
    },
    {
      "symbol": "MDLZ",
      "name": "Mondelez International Inc - Class A"
    },
    {
      "symbol": "MDNAF",
      "name": "Medicenna Therapeutics Corp"
    },
    {
      "symbol": "MDPL",
      "name": "Monarch Dividend Plus Index ETF"
    },
    {
      "symbol": "MDRR",
      "name": "Medalist Diversified REIT Inc"
    },
    {
      "symbol": "MDRRP",
      "name": "Medalist Diversified REIT Inc"
    },
    {
      "symbol": "MDST",
      "name": "Westwood Salient Enhanced Midstream Income ETF"
    },
    {
      "symbol": "MDT",
      "name": "Medtronic Plc"
    },
    {
      "symbol": "MDU",
      "name": "MDU Resources Group Inc"
    },
    {
      "symbol": "MDU-W",
      "name": "MDU Resources Group Inc WhenIssued"
    },
    {
      "symbol": "MDV",
      "name": "Modiv Industrial Inc - Class C"
    },
    {
      "symbol": "MDV-P-A",
      "name": "Modiv Industrial Inc"
    },
    {
      "symbol": "MDWD",
      "name": "MediWound Ltd"
    },
    {
      "symbol": "MDXG",
      "name": "Mimedx Group Inc"
    },
    {
      "symbol": "MDXH",
      "name": "MDxHealth SA"
    },
    {
      "symbol": "MDY",
      "name": "S&P MidCap 400 ETF"
    },
    {
      "symbol": "MDYG",
      "name": "SPDR S&P 400 Mid Cap Growth ETF"
    },
    {
      "symbol": "MDYV",
      "name": "SPDR S&P 400 Mid Cap Value ETF"
    },
    {
      "symbol": "ME",
      "name": "23andMe Holding Co - Class A"
    },
    {
      "symbol": "MEAR",
      "name": "BLACKROCK SHORT MATURITY MUNICIPAL BOND ETF "
    },
    {
      "symbol": "MEC",
      "name": "Mayville Engineering Company Inc"
    },
    {
      "symbol": "MED",
      "name": "Medifast Inc"
    },
    {
      "symbol": "MEDI",
      "name": "HARBOR HEALTH CARE ETF "
    },
    {
      "symbol": "MEDP",
      "name": "Medpace Holdings Inc"
    },
    {
      "symbol": "MEDS",
      "name": "Trxade Health Inc"
    },
    {
      "symbol": "MEDX",
      "name": "HORIZON KINETICS MEDICAL ETF "
    },
    {
      "symbol": "MEG",
      "name": "Montrose Environmental Group Inc"
    },
    {
      "symbol": "MEGI",
      "name": "MainStay CBRE Global Infrastructure Megatrends Fund"
    },
    {
      "symbol": "MEGL",
      "name": "Magic Empire Global Ltd"
    },
    {
      "symbol": "MEI",
      "name": "Methode Electronics Inc"
    },
    {
      "symbol": "MEIP",
      "name": "MEI Pharma Inc"
    },
    {
      "symbol": "MEKA",
      "name": "MELI Kaszek Pioneer Corp - Class A"
    },
    {
      "symbol": "MELI",
      "name": "MercadoLibre Inc"
    },
    {
      "symbol": "MEM",
      "name": "MATTHEWS EMERGING MARKETS EQUITY ACTIVE ETF "
    },
    {
      "symbol": "MEMS",
      "name": "MATTHEWS EMERGING MARKETS DISCOVERY ACTIVE ETF "
    },
    {
      "symbol": "MEMX",
      "name": "MATTHEWS EMERGING MARKETS EX CHINA ACTIVE ETF "
    },
    {
      "symbol": "MEOA",
      "name": "Minority Equality Opportunities Acquisition Inc - Class A"
    },
    {
      "symbol": "MEOAW",
      "name": "Minority Equality Opportunities Acquisition Inc - Warrants (26/08/2026)"
    },
    {
      "symbol": "MEOH",
      "name": "Methanex Corp"
    },
    {
      "symbol": "MER-P-K",
      "name": "Bank Of America Corp"
    },
    {
      "symbol": "MERC",
      "name": "Mercer International Inc"
    },
    {
      "symbol": "MESA",
      "name": "Mesa Air Group Inc"
    },
    {
      "symbol": "MESO",
      "name": "Mesoblast Ltd"
    },
    {
      "symbol": "MET",
      "name": "Metlife Inc"
    },
    {
      "symbol": "MET-P-A",
      "name": "Metlife Inc"
    },
    {
      "symbol": "MET-P-E",
      "name": "Metlife Inc"
    },
    {
      "symbol": "MET-P-F",
      "name": "Metlife Inc 4.75 PRF PERPETUAL USD 25 11000th int Ser F"
    },
    {
      "symbol": "META",
      "name": "Meta Platforms Inc - Class A"
    },
    {
      "symbol": "METBV",
      "name": "Ramaco Resources Inc"
    },
    {
      "symbol": "METC",
      "name": "Ramaco Resources Inc - Class A"
    },
    {
      "symbol": "METCB",
      "name": "Ramaco Resources Inc - Class B"
    },
    {
      "symbol": "METCL",
      "name": "Ramaco Resources Inc"
    },
    {
      "symbol": "METCV",
      "name": "Ramaco Resources Inc"
    },
    {
      "symbol": "METV",
      "name": "ROUNDHILL BALL METAVERSE ETF "
    },
    {
      "symbol": "MEXX",
      "name": "DIREXION DAILY MSCI MEXICO BULL 3X SHARES "
    },
    {
      "symbol": "MFA",
      "name": "MFA Financial Inc"
    },
    {
      "symbol": "MFA-P-B",
      "name": "MFA Financial Inc"
    },
    {
      "symbol": "MFA-P-C",
      "name": "MFA Financial Inc"
    },
    {
      "symbol": "MFAN",
      "name": "MFA Financial Inc 8.875 Senior Notes due 2029"
    },
    {
      "symbol": "MFAO",
      "name": "MFA Financial Inc"
    },
    {
      "symbol": "MFC",
      "name": "Manulife Financial Corp"
    },
    {
      "symbol": "MFD",
      "name": "Macquarie-First Tr. Global Inf. Utilities Div. & Income Fund"
    },
    {
      "symbol": "MFDX",
      "name": "PIMCO RAFI Dynamic Multi-Factor International Equity ETF"
    },
    {
      "symbol": "MFEM",
      "name": "PIMCO RAFI DYNAMIC MULTI-FACTOR EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "MFG",
      "name": "Mizuho Financial Group Inc"
    },
    {
      "symbol": "MFH",
      "name": "Mercurity Fintech Holding Inc"
    },
    {
      "symbol": "MFI",
      "name": "mF International Ltd"
    },
    {
      "symbol": "MFIC",
      "name": "MidCap Financial Investment Corporation"
    },
    {
      "symbol": "MFICL",
      "name": "MidCap Financial Investment Corporation 8.00 Notes due 2028"
    },
    {
      "symbol": "MFIN",
      "name": "Medallion Financial Corp"
    },
    {
      "symbol": "MFLX",
      "name": "FIRST TRUST FLEXIBLE MUNICIPAL HIGH INCOME ETF "
    },
    {
      "symbol": "MFM",
      "name": "MFS Municipal Income Trust"
    },
    {
      "symbol": "MFUL",
      "name": "MINDFUL CONSERVATIVE ETF "
    },
    {
      "symbol": "MFUS",
      "name": "PIMCO RAFI DYNAMIC MULTI-FACTOR U.S. EQUITY ETF "
    },
    {
      "symbol": "MFV",
      "name": "MFS Special Value Trust"
    },
    {
      "symbol": "MG",
      "name": "Mistras Group Inc"
    },
    {
      "symbol": "MGA",
      "name": "Magna International Inc"
    },
    {
      "symbol": "MGC",
      "name": "VANGUARD MEGA CAP INDEX FUND ETF SHARES"
    },
    {
      "symbol": "MGEE",
      "name": "MGE Energy Inc"
    },
    {
      "symbol": "MGF",
      "name": "MFS Government Markets Income Trust"
    },
    {
      "symbol": "MGI",
      "name": "Moneygram International Inc"
    },
    {
      "symbol": "MGIC",
      "name": "Magic Software Enterprises Ltd"
    },
    {
      "symbol": "MGIH",
      "name": "Millennium Group International Holdings Ltd"
    },
    {
      "symbol": "MGK",
      "name": "VANGUARD MEGA CAP GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "MGLD",
      "name": "Marygold Companies Inc (The)"
    },
    {
      "symbol": "MGM",
      "name": "MGM Resorts International"
    },
    {
      "symbol": "MGMT",
      "name": "BALLAST SMALL/MID CAP ETF "
    },
    {
      "symbol": "MGNI",
      "name": "Magnite Inc"
    },
    {
      "symbol": "MGNR",
      "name": "American Beacon GLG Natural Resources ETF"
    },
    {
      "symbol": "MGNX",
      "name": "Macrogenics Inc"
    },
    {
      "symbol": "MGOL",
      "name": "MGO Global Inc"
    },
    {
      "symbol": "MGOV",
      "name": "FIRST TRUST INTERMEDIATE GOVERNMENT OPPORTUNITIES ETF "
    },
    {
      "symbol": "MGPI",
      "name": "MGP Ingredients Inc"
    },
    {
      "symbol": "MGR",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "MGRB",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "MGRC",
      "name": "McGrath Rentcorp"
    },
    {
      "symbol": "MGRD",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "MGRE",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "MGRM",
      "name": "Monogram Orthopaedics Inc"
    },
    {
      "symbol": "MGRO",
      "name": "VanEck Morningstar Wide Moat Growth ETF"
    },
    {
      "symbol": "MGRX",
      "name": "Mangoceuticals Inc"
    },
    {
      "symbol": "MGTA",
      "name": "Magenta Therapeutics Inc"
    },
    {
      "symbol": "MGTX",
      "name": "MeiraGTx Holdings plc"
    },
    {
      "symbol": "MGU",
      "name": "Macquarie Global Infrastructure Total Return Fund Inc"
    },
    {
      "symbol": "MGV",
      "name": "VANGUARD MEGA CAP VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "MGX",
      "name": "Metagenomi Inc"
    },
    {
      "symbol": "MGY",
      "name": "Magnolia Oil & Gas Corp - Class A"
    },
    {
      "symbol": "MGYR",
      "name": "Magyar Bancorp Inc"
    },
    {
      "symbol": "MHD",
      "name": "BlackRock MuniHoldings Fund Inc"
    },
    {
      "symbol": "MHF",
      "name": "Western Asset Municipal High Income Fund Inc"
    },
    {
      "symbol": "MHH",
      "name": "Mastech Digital Inc"
    },
    {
      "symbol": "MHI",
      "name": "Pioneer Municipal High Income Fund Inc"
    },
    {
      "symbol": "MHK",
      "name": "Mohawk Industries Inc"
    },
    {
      "symbol": "MHLA",
      "name": "Maiden Holdings Ltd"
    },
    {
      "symbol": "MHLD",
      "name": "Maiden Holdings Ltd"
    },
    {
      "symbol": "MHN",
      "name": "BlackRock MuniHoldings New York Quality Fund Inc"
    },
    {
      "symbol": "MHNC",
      "name": "Maiden Holdings North American Ltd 775 Nts 12012043"
    },
    {
      "symbol": "MHO",
      "name": "MI Homes Inc"
    },
    {
      "symbol": "MHUA",
      "name": "Meihua International Medical Technologies Co Ltd"
    },
    {
      "symbol": "MI",
      "name": "NFT Ltd -Class A"
    },
    {
      "symbol": "MICS",
      "name": "Singing Machine Co. Inc"
    },
    {
      "symbol": "MID",
      "name": "AMERICAN CENTURY MID CAP GROWTH IMPACT ETF "
    },
    {
      "symbol": "MIDD",
      "name": "Middleby Corp"
    },
    {
      "symbol": "MIDE",
      "name": "XTRACKERS S&P MIDCAP 400 ESG ETF "
    },
    {
      "symbol": "MIDU",
      "name": "DIREXION DAILY MID CAP BULL 3X SHARES "
    },
    {
      "symbol": "MIDZ",
      "name": "DIREXION DAILY MID CAP BEAR 3X SHARES "
    },
    {
      "symbol": "MIG",
      "name": "VANECK MOODY'S ANALYTICS IG CORPORATE BOND ETF "
    },
    {
      "symbol": "MIGI",
      "name": "Mawson Infrastructure Group Inc"
    },
    {
      "symbol": "MILN",
      "name": "GLOBAL X MILLENNIAL CONSUMER ETF "
    },
    {
      "symbol": "MIN",
      "name": "MFS Intermediate Income Trust"
    },
    {
      "symbol": "MIND",
      "name": "MIND Technology Inc"
    },
    {
      "symbol": "MINDP",
      "name": "MIND Technology Inc"
    },
    {
      "symbol": "MINM",
      "name": "Minim Inc"
    },
    {
      "symbol": "MINN",
      "name": "MAIRS & POWER MINNESOTA MUNICIPAL BOND ETF "
    },
    {
      "symbol": "MINO",
      "name": "PIMCO Municipal Income Opportunities Active Exchange-Traded Fund"
    },
    {
      "symbol": "MINT",
      "name": "PIMCO Enhanced Short Maturity Active Exchange-Traded Fund"
    },
    {
      "symbol": "MINV",
      "name": "MATTHEWS ASIA INNOVATORS ACTIVE ETF "
    },
    {
      "symbol": "MIO",
      "name": "Pioneer Municipal High Income Opportunities Fund Inc"
    },
    {
      "symbol": "MIR",
      "name": "Mirion Technologies Inc - Class A"
    },
    {
      "symbol": "MIR-WS",
      "name": "Mirion Technologies Inc - Warrants (30/06/2027)"
    },
    {
      "symbol": "MIRA",
      "name": "Mira Pharmaceuticals Inc"
    },
    {
      "symbol": "MIRM",
      "name": "Mirum Pharmaceuticals Inc"
    },
    {
      "symbol": "MISL",
      "name": "FIRST TRUST INDXX AEROSPACE & DEFENSE ETF "
    },
    {
      "symbol": "MIST",
      "name": "Milestone Pharmaceuticals Inc"
    },
    {
      "symbol": "MITA",
      "name": "Coliseum Acquisition Corp - Class A"
    },
    {
      "symbol": "MITAU",
      "name": "Coliseum Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "MITAW",
      "name": "Coliseum Acquisition Corp - Warrants (02/04/2028)"
    },
    {
      "symbol": "MITK",
      "name": "Mitek Systems Inc"
    },
    {
      "symbol": "MITN",
      "name": "AG Mortgage Investment Trust Inc"
    },
    {
      "symbol": "MITQ",
      "name": "Moving iMage Technologies Inc"
    },
    {
      "symbol": "MITT",
      "name": "AG Mortgage Investment Trust Inc"
    },
    {
      "symbol": "MITT-P-A",
      "name": "AG Mortgage Investment Trust Inc"
    },
    {
      "symbol": "MITT-P-B",
      "name": "AG Mortgage Investment Trust Inc"
    },
    {
      "symbol": "MITT-P-C",
      "name": "AG Mortgage Investment Trust Inc"
    },
    {
      "symbol": "MIY",
      "name": "BlackRock MuniYield Michigan Quality Fund Inc"
    },
    {
      "symbol": "MJ",
      "name": "Amplify Alternative Harvest ETF"
    },
    {
      "symbol": "MJUS",
      "name": "ETFMG U.S. Alternative Harvest ETF"
    },
    {
      "symbol": "MKAM",
      "name": "MKAM ETF"
    },
    {
      "symbol": "MKC",
      "name": "McCormick & Co. Inc (Non Voting)"
    },
    {
      "symbol": "MKC-V",
      "name": "McCormick & Co. Inc"
    },
    {
      "symbol": "MKFG",
      "name": "Markforged Holding Corporation"
    },
    {
      "symbol": "MKFG-WS",
      "name": "Markforged Holding Corporation Warrants"
    },
    {
      "symbol": "MKL",
      "name": "Markel Group Inc"
    },
    {
      "symbol": "MKOR",
      "name": "MATTHEWS KOREA ACTIVE ETF "
    },
    {
      "symbol": "MKSI",
      "name": "MKS Instruments Inc"
    },
    {
      "symbol": "MKTW",
      "name": "Marketwise Inc - Class A"
    },
    {
      "symbol": "MKTX",
      "name": "MarketAxess Holdings Inc"
    },
    {
      "symbol": "ML",
      "name": "MoneyLion Inc - Class A"
    },
    {
      "symbol": "ML-WS",
      "name": "MoneyLion Inc Wt Exp 06012027"
    },
    {
      "symbol": "MLAB",
      "name": "Mesa Laboratories Inc"
    },
    {
      "symbol": "MLAIU",
      "name": "McLaren Technology Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "MLCO",
      "name": "Melco Resorts & Entertainment Ltd"
    },
    {
      "symbol": "MLEC",
      "name": "Moolec Science SA"
    },
    {
      "symbol": "MLECW",
      "name": "Moolec Science SA - Warrants (30/12/2027)"
    },
    {
      "symbol": "MLGO",
      "name": "MicroAlgo Inc"
    },
    {
      "symbol": "MLI",
      "name": "Mueller Industries Inc"
    },
    {
      "symbol": "MLKN",
      "name": "MillerKnoll Inc"
    },
    {
      "symbol": "MLM",
      "name": "Martin Marietta Materials Inc"
    },
    {
      "symbol": "MLN",
      "name": "VanEck Long Muni ETF"
    },
    {
      "symbol": "MLNK",
      "name": "MeridianLink Inc"
    },
    {
      "symbol": "MLP",
      "name": "Maui Land & Pineapple Co. Inc"
    },
    {
      "symbol": "MLPA",
      "name": "GLOBAL X MLP ETF "
    },
    {
      "symbol": "MLPB",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "MLPR",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "MLPX",
      "name": "GLOBAL X MLP & ENERGY INFRASTRUCTURE ETF "
    },
    {
      "symbol": "MLR",
      "name": "Miller Industries Inc"
    },
    {
      "symbol": "MLSS",
      "name": "Milestone Scientific Inc"
    },
    {
      "symbol": "MLTX",
      "name": "MoonLake Immunotherapeutics - Class A"
    },
    {
      "symbol": "MLYS",
      "name": "Mineralys Therapeutics Inc"
    },
    {
      "symbol": "MMA",
      "name": "Alta Global Group Ltd"
    },
    {
      "symbol": "MMAT",
      "name": "Meta Materials Inc"
    },
    {
      "symbol": "MMC",
      "name": "Marsh & McLennan Cos. Inc"
    },
    {
      "symbol": "MMCA",
      "name": "IQ MacKay California Municipal Intermediate ETF"
    },
    {
      "symbol": "MMD",
      "name": "MainStay MacKay DefinedTerm Municipal Opportunities Fund"
    },
    {
      "symbol": "MMI",
      "name": "Marcus & Millichap Inc"
    },
    {
      "symbol": "MMIN",
      "name": "IQ MacKay Municipal Insured ETF"
    },
    {
      "symbol": "MMIT",
      "name": "IQ MacKay Municipal Intermediate ETF"
    },
    {
      "symbol": "MMLG",
      "name": "FIRST TRUST MULTI-MANAGER LARGE GROWTH ETF "
    },
    {
      "symbol": "MMLP",
      "name": "Martin Midstream Partners LP"
    },
    {
      "symbol": "MMM",
      "name": "3M Company"
    },
    {
      "symbol": "MMM-W",
      "name": "3M Company WhenIssued"
    },
    {
      "symbol": "MMS",
      "name": "Maximus Inc"
    },
    {
      "symbol": "MMSC",
      "name": "FIRST TRUST MULTI-MANAGER SMALL CAP OPPORTUNITIES ETF "
    },
    {
      "symbol": "MMSI",
      "name": "Merit Medical Systems Inc"
    },
    {
      "symbol": "MMT",
      "name": "MFS Multimarket Income Trust"
    },
    {
      "symbol": "MMTM",
      "name": "SPDR S&P 1500 MOMENTUM TILT ETF "
    },
    {
      "symbol": "MMU",
      "name": "Western Asset Managed Municipals Fund Inc"
    },
    {
      "symbol": "MMV",
      "name": "MultiMetaVerse Holdings Ltd - Class A"
    },
    {
      "symbol": "MMVWW",
      "name": "MultiMetaVerse Holdings Ltd - Warrants (04/01/2028)"
    },
    {
      "symbol": "MMYT",
      "name": "MakeMyTrip Ltd"
    },
    {
      "symbol": "MNA",
      "name": "IQ Merger Arbitrage ETF"
    },
    {
      "symbol": "MNBD",
      "name": "ALPS Intermediate Municipal Bond ETF"
    },
    {
      "symbol": "MNDO",
      "name": "Mind C.T.I Ltd"
    },
    {
      "symbol": "MNDR",
      "name": "Mobile health Network Solutions - Class A"
    },
    {
      "symbol": "MNDY",
      "name": "Monday.Com Ltd"
    },
    {
      "symbol": "MNKD",
      "name": "Mannkind Corp"
    },
    {
      "symbol": "MNMD",
      "name": "Mind Medicine Inc"
    },
    {
      "symbol": "MNOV",
      "name": "Medicinova Inc"
    },
    {
      "symbol": "MNP",
      "name": "Western Asset Municipal Partners Fund Inc"
    },
    {
      "symbol": "MNPR",
      "name": "Monopar Therapeutics Inc"
    },
    {
      "symbol": "MNR",
      "name": "Mach Natural Resources LP"
    },
    {
      "symbol": "MNRO",
      "name": "Monro Inc"
    },
    {
      "symbol": "MNSB",
      "name": "MainStreet Bancshares Inc"
    },
    {
      "symbol": "MNSBP",
      "name": "MainStreet Bancshares Inc"
    },
    {
      "symbol": "MNSO",
      "name": "MINISO Group Holding Ltd"
    },
    {
      "symbol": "MNST",
      "name": "Monster Beverage Corp"
    },
    {
      "symbol": "MNTK",
      "name": "Montauk Renewables Inc"
    },
    {
      "symbol": "MNTL",
      "name": "Tema Neuroscience and Mental Health ETF"
    },
    {
      "symbol": "MNTN",
      "name": "Everest Consolidator Acquisition Corp - Class A"
    },
    {
      "symbol": "MNTN-U",
      "name": "Everest Consolidator Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "MNTN-WS",
      "name": "Everest Consolidator Acquisition Corporation Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50"
    },
    {
      "symbol": "MNTS",
      "name": "Momentus Inc - Class A"
    },
    {
      "symbol": "MNTSW",
      "name": "Momentus Inc - Warrants (12/08/2026)"
    },
    {
      "symbol": "MNTX",
      "name": "Manitex International Inc"
    },
    {
      "symbol": "MNY",
      "name": "MoneyHero Ltd - Class A"
    },
    {
      "symbol": "MNYWW",
      "name": "MoneyHero Ltd - Warrants (13/09/2028)"
    },
    {
      "symbol": "MO",
      "name": "Altria Group Inc"
    },
    {
      "symbol": "MOAT",
      "name": "VANECK MORNINGSTAR WIDE MOAT ETF "
    },
    {
      "symbol": "MOB",
      "name": "Mobilicom Ltd"
    },
    {
      "symbol": "MOBBW",
      "name": "Mobilicom Ltd - Warrants (31/08/2027)"
    },
    {
      "symbol": "MOBX",
      "name": "Mobix Labs Inc - Class A"
    },
    {
      "symbol": "MOBXW",
      "name": "Mobix Labs Inc - Warrants (16/07/2021)"
    },
    {
      "symbol": "MOD",
      "name": "Modine Manufacturing Company"
    },
    {
      "symbol": "MODD",
      "name": "Modular Medical Inc"
    },
    {
      "symbol": "MODG",
      "name": "Topgolf Callaway Brands Corp"
    },
    {
      "symbol": "MODL",
      "name": "VictoryShares WestEnd U.S. Sector ETF"
    },
    {
      "symbol": "MODN",
      "name": "Model N Inc"
    },
    {
      "symbol": "MODV",
      "name": "ModivCare Inc"
    },
    {
      "symbol": "MOFG",
      "name": "MidWestOne Financial Group Inc"
    },
    {
      "symbol": "MOG-A",
      "name": "Moog Inc - Class A"
    },
    {
      "symbol": "MOG-B",
      "name": "Moog Inc - Class B"
    },
    {
      "symbol": "MOGO",
      "name": "Mogo Inc (Sub Voting)"
    },
    {
      "symbol": "MOGU",
      "name": "MOGU Inc"
    },
    {
      "symbol": "MOH",
      "name": "Molina Healthcare Inc"
    },
    {
      "symbol": "MOHR",
      "name": "MOHR GROWTH ETF "
    },
    {
      "symbol": "MOLN",
      "name": "Molecular Partners AG"
    },
    {
      "symbol": "MOMO",
      "name": "Hello Group Inc"
    },
    {
      "symbol": "MONCU",
      "name": "Monument Circle Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "MOND",
      "name": "Mondee Holdings Inc - Class A"
    },
    {
      "symbol": "MOO",
      "name": "VANECK AGRIBUSINESS ETF "
    },
    {
      "symbol": "MOOD",
      "name": "RELATIVE SENTIMENT TACTICAL ALLOCATION ETF "
    },
    {
      "symbol": "MOON",
      "name": "DIREXION MOONSHOT INNOVATORS ETF "
    },
    {
      "symbol": "MOR",
      "name": "Morphosys AG"
    },
    {
      "symbol": "MORF",
      "name": "Morphic Holding Inc"
    },
    {
      "symbol": "MORN",
      "name": "Morningstar Inc"
    },
    {
      "symbol": "MORT",
      "name": "VanEck Mortgage REIT Income ETF"
    },
    {
      "symbol": "MOS",
      "name": "Mosaic Company"
    },
    {
      "symbol": "MOTE",
      "name": "VANECK MORNINGSTAR ESG MOAT ETF "
    },
    {
      "symbol": "MOTG",
      "name": "VANECK MORNINGSTAR GLOBAL WIDE MOAT ETF "
    },
    {
      "symbol": "MOTI",
      "name": "VANECK MORNINGSTAR INTERNATIONAL MOAT ETF "
    },
    {
      "symbol": "MOTO",
      "name": "SMARTETFS SMART TRANSPORTATION & TECHNOLOGY ETF "
    },
    {
      "symbol": "MOTS",
      "name": "Motus GI Holdings Inc"
    },
    {
      "symbol": "MOV",
      "name": "Movado Group Inc"
    },
    {
      "symbol": "MOVE",
      "name": "Movano Inc"
    },
    {
      "symbol": "MP",
      "name": "MP Materials Corporation"
    },
    {
      "symbol": "MPA",
      "name": "BlackRock MuniYield Pennsylvania Quality Fund"
    },
    {
      "symbol": "MPAA",
      "name": "Motorcar Parts of America Inc"
    },
    {
      "symbol": "MPACW",
      "name": "Model Performance Acquisition Corp Warrant"
    },
    {
      "symbol": "MPAY",
      "name": "AKROS MONTHLY PAYOUT ETF "
    },
    {
      "symbol": "MPB",
      "name": "Mid Penn Bancorp Inc"
    },
    {
      "symbol": "MPC",
      "name": "Marathon Petroleum Corp"
    },
    {
      "symbol": "MPLN",
      "name": "MultiPlan Corp - Class A"
    },
    {
      "symbol": "MPLN-WS",
      "name": "MultiPlan Corp Wt Exp 10082025"
    },
    {
      "symbol": "MPLX",
      "name": "MPLX LP"
    },
    {
      "symbol": "MPRA",
      "name": "Mercato Partners Acquisition Corp - Class A"
    },
    {
      "symbol": "MPRAU",
      "name": "Mercato Partners Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "MPRAW",
      "name": "Mercato Partners Acquisition Corp - Warrants - (29/10/2026)"
    },
    {
      "symbol": "MPRO",
      "name": "Monarch ProCap ETF"
    },
    {
      "symbol": "MPTI",
      "name": "M-tron Industries Inc"
    },
    {
      "symbol": "MPU",
      "name": "Mega Matrix Corp"
    },
    {
      "symbol": "MPV",
      "name": "Barings Participation Investors"
    },
    {
      "symbol": "MPW",
      "name": "Medical Properties Trust Inc"
    },
    {
      "symbol": "MPWR",
      "name": "Monolithic Power System Inc"
    },
    {
      "symbol": "MPX",
      "name": "Marine Products Corp"
    },
    {
      "symbol": "MQ",
      "name": "Marqeta Inc - Class A"
    },
    {
      "symbol": "MQT",
      "name": "BlackRock MuniYield Quality Fund II Inc"
    },
    {
      "symbol": "MQY",
      "name": "BlackRock MuniYield Quality Fund Inc"
    },
    {
      "symbol": "MRAD",
      "name": "SMARTETFS ADVERTISING & MARKETING TECHNOLOGY ETF "
    },
    {
      "symbol": "MRAI",
      "name": "Marpai Inc Class A"
    },
    {
      "symbol": "MRAM",
      "name": "Everspin Technologies Inc"
    },
    {
      "symbol": "MRBK",
      "name": "Meridian Corp"
    },
    {
      "symbol": "MRC",
      "name": "MRC Global Inc"
    },
    {
      "symbol": "MRCC",
      "name": "Monroe Capital Corp"
    },
    {
      "symbol": "MRCP",
      "name": "PGIM US Large-Cap Buffer 12 ETF - March"
    },
    {
      "symbol": "MRCY",
      "name": "Mercury Systems Inc"
    },
    {
      "symbol": "MRDB",
      "name": "MariaDB Plc - Class A"
    },
    {
      "symbol": "MRDB-WS",
      "name": "MariaDB Plc - Warrants (16/12/2027)"
    },
    {
      "symbol": "MREO",
      "name": "Mereo Biopharma Group Plc"
    },
    {
      "symbol": "MRGR",
      "name": "ProShares Merger ETF"
    },
    {
      "symbol": "MRIN",
      "name": "Marin Software Inc"
    },
    {
      "symbol": "MRK",
      "name": "Merck & Co Inc"
    },
    {
      "symbol": "MRKR",
      "name": "Marker Therapeutics Inc"
    },
    {
      "symbol": "MRM",
      "name": "MEDIROM Healthcare Technologies Inc"
    },
    {
      "symbol": "MRNA",
      "name": "Moderna Inc"
    },
    {
      "symbol": "MRNO",
      "name": "Murano Global Investments PLC - Class A"
    },
    {
      "symbol": "MRNOW",
      "name": "Murano Global Investments PLC - Warrants (20/03/2029)"
    },
    {
      "symbol": "MRNS",
      "name": "Marinus Pharmaceuticals Inc"
    },
    {
      "symbol": "MRNY",
      "name": "YieldMax MRNA Option Income Strategy ETF"
    },
    {
      "symbol": "MRO",
      "name": "Marathon Oil Corporation"
    },
    {
      "symbol": "MRSK",
      "name": "Toews Agility Shares Managed Risk ETF"
    },
    {
      "symbol": "MRSN",
      "name": "Mersana Therapeutics Inc"
    },
    {
      "symbol": "MRT",
      "name": "MedEquities Realty Trust Inc"
    },
    {
      "symbol": "MRTN",
      "name": "Marten Transport Ltd"
    },
    {
      "symbol": "MRUS",
      "name": "Merus N.V"
    },
    {
      "symbol": "MRVI",
      "name": "Maravai LifeSciences Holdings Inc - Class A"
    },
    {
      "symbol": "MRVL",
      "name": "Marvell Technology Inc"
    },
    {
      "symbol": "MRX",
      "name": "Marex Group Plc"
    },
    {
      "symbol": "MS",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-A",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-E",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-F",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-I",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-K",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-L",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MS-P-P",
      "name": "Morgan Stanley"
    },
    {
      "symbol": "MSA",
      "name": "MSA Safety Inc"
    },
    {
      "symbol": "MSAI",
      "name": "MultiSensor AI Holdings Inc"
    },
    {
      "symbol": "MSAIW",
      "name": "MultiSensor AI Holdings Inc - Warrants - (19/12/2028)"
    },
    {
      "symbol": "MSB",
      "name": "Mesabi Trust"
    },
    {
      "symbol": "MSBI",
      "name": "Midland States Bancorp Inc"
    },
    {
      "symbol": "MSBIP",
      "name": "Midland States Bancorp Inc"
    },
    {
      "symbol": "MSC",
      "name": "Studio City International Holdings Ltd"
    },
    {
      "symbol": "MSCI",
      "name": "MSCI Inc"
    },
    {
      "symbol": "MSD",
      "name": "Morgan Stanley Emerging Markets Debt Fund Inc"
    },
    {
      "symbol": "MSDA",
      "name": "MSD Acquisition Corp - Class A"
    },
    {
      "symbol": "MSDL",
      "name": "Morgan Stanley Direct Lending Fund"
    },
    {
      "symbol": "MSEX",
      "name": "Middlesex Water Company"
    },
    {
      "symbol": "MSFD",
      "name": "DIREXION DAILY MSFT BEAR 1X SHARES "
    },
    {
      "symbol": "MSFL",
      "name": "GraniteShares 2x Long MSFT Daily ETF"
    },
    {
      "symbol": "MSFO",
      "name": "YieldMax MSFT Option Income Strategy ETF"
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corporation"
    },
    {
      "symbol": "MSFU",
      "name": "DIREXION DAILY MSFT BULL 1.5X SHARES "
    },
    {
      "symbol": "MSFX",
      "name": "T-Rex 2X Long Microsoft Daily Target ETF"
    },
    {
      "symbol": "MSFY",
      "name": "Kurv Yield Premium Strategy Microsoft (MSFT) ETF"
    },
    {
      "symbol": "MSGE",
      "name": "Madison Square Garden Entertainment Corp - Class A"
    },
    {
      "symbol": "MSGM",
      "name": "Motorsport Games Inc - Class A"
    },
    {
      "symbol": "MSGS",
      "name": "Madison Square Garden Sports Corp - Class A"
    },
    {
      "symbol": "MSI",
      "name": "Motorola Solutions Inc"
    },
    {
      "symbol": "MSM",
      "name": "MSC Industrial Direct Co. Inc - Class A"
    },
    {
      "symbol": "MSMR",
      "name": "MCELHENNY SHEFFIELD MANAGED RISK ETF "
    },
    {
      "symbol": "MSN",
      "name": "Emerson Radio Corp"
    },
    {
      "symbol": "MSOS",
      "name": "AdvisorShares Pure US Cannabis ETF"
    },
    {
      "symbol": "MSOX",
      "name": "AdvisorShares MSOS 2x Daily ETF"
    },
    {
      "symbol": "MSS",
      "name": "Maison Solutions Inc - Class A"
    },
    {
      "symbol": "MSSA",
      "name": "Metal Sky Star Acquisition Corp"
    },
    {
      "symbol": "MSSAR",
      "name": "Metal Sky Star Acquisition Corp"
    },
    {
      "symbol": "MSSAU",
      "name": "Metal Sky Star Acquisition Corp - Units (1 Ord 1 Rts & 1 War)"
    },
    {
      "symbol": "MSSAW",
      "name": "Metal Sky Star Acquisition Corp - Warrants (31/03/2027)"
    },
    {
      "symbol": "MSSS",
      "name": "Monarch Select Subsector Index ETF"
    },
    {
      "symbol": "MSTB",
      "name": "LHA MARKET STATE TACTICAL BETA ETF "
    },
    {
      "symbol": "MSTI",
      "name": "Madison Short Term Strategic Income ETF"
    },
    {
      "symbol": "MSTQ",
      "name": "LHA MARKET STATE TACTICAL Q ETF "
    },
    {
      "symbol": "MSTR",
      "name": "Microstrategy Inc - Class A"
    },
    {
      "symbol": "MSTY",
      "name": "YieldMax MSTR Option Income Strategy ETF"
    },
    {
      "symbol": "MSVX",
      "name": "LHA MARKET STATE ALPHA SEEKER ETF "
    },
    {
      "symbol": "MT",
      "name": "ArcelorMittal"
    },
    {
      "symbol": "MTA",
      "name": "Metalla Royalty and Streaming Ltd"
    },
    {
      "symbol": "MTAC",
      "name": "MedTech Acquisition Corp - Class A"
    },
    {
      "symbol": "MTAL",
      "name": "Metals Acquisition Ltd"
    },
    {
      "symbol": "MTAL-WS",
      "name": "Metals Acquisition Ltd - Warrants (09/06/2028)"
    },
    {
      "symbol": "MTB",
      "name": "M & T Bank Corp"
    },
    {
      "symbol": "MTB-P-H",
      "name": "M & T Bank Corp"
    },
    {
      "symbol": "MTBA",
      "name": "Simplify MBS ETF"
    },
    {
      "symbol": "MTC",
      "name": "Mmtec Inc"
    },
    {
      "symbol": "MTCH",
      "name": "Match Group Inc - New"
    },
    {
      "symbol": "MTCR",
      "name": "Metacrine Inc"
    },
    {
      "symbol": "MTD",
      "name": "Mettler-Toledo International Inc"
    },
    {
      "symbol": "MTDR",
      "name": "Matador Resources Company"
    },
    {
      "symbol": "MTEK",
      "name": "Maris Tech Ltd"
    },
    {
      "symbol": "MTEKW",
      "name": "Maris Tech Ltd - Warrant (06/01/2027)"
    },
    {
      "symbol": "MTEM",
      "name": "Molecular Templates Inc"
    },
    {
      "symbol": "MTEN",
      "name": "Mingteng International Corporation Inc"
    },
    {
      "symbol": "MTEST"
    },
    {
      "symbol": "MTEX",
      "name": "Mannatech Inc"
    },
    {
      "symbol": "MTG",
      "name": "MGIC Investment Corp"
    },
    {
      "symbol": "MTGP",
      "name": "WISDOMTREE MORTGAGE PLUS BOND FUND "
    },
    {
      "symbol": "MTH",
      "name": "Meritage Homes Corp"
    },
    {
      "symbol": "MTLS",
      "name": "Materialise Nv"
    },
    {
      "symbol": "MTN",
      "name": "Vail Resorts Inc"
    },
    {
      "symbol": "MTNB",
      "name": "Matinas Biopharma Holdings Inc"
    },
    {
      "symbol": "MTR",
      "name": "Mesa Royalty Trust"
    },
    {
      "symbol": "MTRN",
      "name": "Materion Corp"
    },
    {
      "symbol": "MTRX",
      "name": "Matrix Service Company"
    },
    {
      "symbol": "MTSI",
      "name": "MACOM Technology Solutions Holdings Inc"
    },
    {
      "symbol": "MTTR",
      "name": "Matterport Inc - Class A"
    },
    {
      "symbol": "MTUL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "MTUM",
      "name": "ISHARES MSCI USA MOMENTUM FACTOR ETF "
    },
    {
      "symbol": "MTUS",
      "name": "TimkenSteel Corp"
    },
    {
      "symbol": "MTW",
      "name": "Manitowoc Co. Inc"
    },
    {
      "symbol": "MTX",
      "name": "Minerals Technologies Inc"
    },
    {
      "symbol": "MTZ",
      "name": "Mastec Inc"
    },
    {
      "symbol": "MU",
      "name": "Micron Technology Inc"
    },
    {
      "symbol": "MUA",
      "name": "BlackRock Muniassets Fund Inc"
    },
    {
      "symbol": "MUB",
      "name": "iShares National Muni Bond ETF"
    },
    {
      "symbol": "MUC",
      "name": "BlackRock MuniHoldings California Quality Fund Inc"
    },
    {
      "symbol": "MUE",
      "name": "BlackRock MuniHoldings Quality Fund II Inc"
    },
    {
      "symbol": "MUFG",
      "name": "Mitsubishi UFJ Financial Group Inc"
    },
    {
      "symbol": "MUI",
      "name": "BlackRock Municipal Income Fund Inc"
    },
    {
      "symbol": "MUJ",
      "name": "BlackRock MuniHoldings New Jersey Quality Fund Inc"
    },
    {
      "symbol": "MULN",
      "name": "Mullen Automotive Inc"
    },
    {
      "symbol": "MUNI",
      "name": "PIMCO Intermediate Municipal Bond Active Exchange-Traded Fund"
    },
    {
      "symbol": "MUR",
      "name": "Murphy Oil Corp"
    },
    {
      "symbol": "MURA",
      "name": "Mural Oncology plc"
    },
    {
      "symbol": "MURFW",
      "name": "Murphy Canyon Acquisition Corp - Warrants (25/01/2027)"
    },
    {
      "symbol": "MUSA",
      "name": "Murphy USA Inc"
    },
    {
      "symbol": "MUSI",
      "name": "AMERICAN CENTURY MULTISECTOR INCOME ETF "
    },
    {
      "symbol": "MUSQ",
      "name": "MUSQ Global Music Industry ETF"
    },
    {
      "symbol": "MUST",
      "name": "COLUMBIA MULTI-SECTOR MUNICIPAL INCOME ETF "
    },
    {
      "symbol": "MUX",
      "name": "McEwen Mining Inc"
    },
    {
      "symbol": "MVAL",
      "name": "VanEck Morningstar Wide Moat Value ETF"
    },
    {
      "symbol": "MVBF",
      "name": "MVB Financial Corp"
    },
    {
      "symbol": "MVF",
      "name": "BlackRock MuniVest Fund Inc"
    },
    {
      "symbol": "MVFD",
      "name": "Monarch Volume Factor Dividend Tree Index ETF"
    },
    {
      "symbol": "MVFG",
      "name": "Monarch Volume Factor Global Unconstrained Index ETF"
    },
    {
      "symbol": "MVIS",
      "name": "Microvision Inc"
    },
    {
      "symbol": "MVO",
      "name": "MV Oil Trust"
    },
    {
      "symbol": "MVPA",
      "name": "Miller Value Partners Appreciation ETF"
    },
    {
      "symbol": "MVPL",
      "name": "Miller Value Partners Leverage ETF"
    },
    {
      "symbol": "MVPS",
      "name": "Amplify Thematic All-Stars ETF"
    },
    {
      "symbol": "MVRK",
      "name": "Maverick Lifestyle Inc - Class A"
    },
    {
      "symbol": "MVRL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "MVST",
      "name": "Microvast Holdings Inc"
    },
    {
      "symbol": "MVSTW",
      "name": "Microvast Holdings Inc - Warrants (23/07/2026)"
    },
    {
      "symbol": "MVT",
      "name": "BlackRock Munivest Fund II Inc"
    },
    {
      "symbol": "MVV",
      "name": "PROSHARES ULTRA MIDCAP400 "
    },
    {
      "symbol": "MWA",
      "name": "Mueller Water Products Inc - Series A"
    },
    {
      "symbol": "MWG",
      "name": "Multi Ways Holdings Ltd"
    },
    {
      "symbol": "MX",
      "name": "MagnaChip Semiconductor Corp"
    },
    {
      "symbol": "MXC",
      "name": "Mexco Energy Corp"
    },
    {
      "symbol": "MXCT",
      "name": "MaxCyte Inc"
    },
    {
      "symbol": "MXE",
      "name": "Mexico Equity And Income Fund Inc"
    },
    {
      "symbol": "MXF",
      "name": "Mexico Fund Inc"
    },
    {
      "symbol": "MXI",
      "name": "iShares Global Materials ETF"
    },
    {
      "symbol": "MXL",
      "name": "MaxLinear Inc"
    },
    {
      "symbol": "MYD",
      "name": "BlackRock MuniYield Fund Inc"
    },
    {
      "symbol": "MYE",
      "name": "Myers Industries Inc"
    },
    {
      "symbol": "MYFW",
      "name": "First Western Financial Inc"
    },
    {
      "symbol": "MYGN",
      "name": "Myriad Genetics Inc"
    },
    {
      "symbol": "MYI",
      "name": "BlackRock MuniYield Quality Fund III Inc"
    },
    {
      "symbol": "MYLD",
      "name": "Cambria Micro and SmallCap Shareholder Yield ETF"
    },
    {
      "symbol": "MYMD",
      "name": "MyMD Pharmaceuticals Inc"
    },
    {
      "symbol": "MYN",
      "name": "BlackRock MuniYield New York Quality Fund Inc"
    },
    {
      "symbol": "MYNA",
      "name": "Mynaric AG"
    },
    {
      "symbol": "MYND",
      "name": "Mynd.ai Inc"
    },
    {
      "symbol": "MYNZ",
      "name": "Mainz Biomed N.V."
    },
    {
      "symbol": "MYO",
      "name": "Myomo Inc"
    },
    {
      "symbol": "MYPS",
      "name": "PLAYSTUDIOS Inc - Class A"
    },
    {
      "symbol": "MYRG",
      "name": "MYR Group Inc"
    },
    {
      "symbol": "MYSZ",
      "name": "My Size Inc"
    },
    {
      "symbol": "MYTE",
      "name": "MYT Netherlands Parent BV"
    },
    {
      "symbol": "MYY",
      "name": "ProShares Short Midcap400 -1x Shares"
    },
    {
      "symbol": "MZZ",
      "name": "ProShares UltraShort MidCap400 -2x Shares"
    },
    {
      "symbol": "NA",
      "name": "Nano Labs Ltd"
    },
    {
      "symbol": "NAACU",
      "name": "North Atlantic Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "NAAS",
      "name": "Naas Technology Inc"
    },
    {
      "symbol": "NABL",
      "name": "N-able Inc"
    },
    {
      "symbol": "NAC",
      "name": "Nuveen California Quality Municipal Income Fund"
    },
    {
      "symbol": "NACP",
      "name": "IMPACT SHARES NAACP MINORITY EMPOWERMENT ETF "
    },
    {
      "symbol": "NAD",
      "name": "Nuveen Quality Municipal Income Fund"
    },
    {
      "symbol": "NAII",
      "name": "Natural Alternatives International Inc"
    },
    {
      "symbol": "NAIL",
      "name": "DIREXION DAILY HOMEBUILDERS & SUPPLIES BULL 3X SHARES "
    },
    {
      "symbol": "NAK",
      "name": "Northern Dynasty Minerals Ltd"
    },
    {
      "symbol": "NAMS",
      "name": "NewAmsterdam Pharma Company NV"
    },
    {
      "symbol": "NAMSW",
      "name": "NewAmsterdam Pharma Company NV - Warrants (15/11/2027)"
    },
    {
      "symbol": "NAN",
      "name": "Nuveen New York Quality Municipal Income Fund"
    },
    {
      "symbol": "NANC",
      "name": "UNUSUAL WHALES SUBVERSIVE DEMOCRATIC TRADING ETF "
    },
    {
      "symbol": "NANR",
      "name": "SPDR S&P NORTH AMERICAN NATURAL RESOURCES ETF "
    },
    {
      "symbol": "NAOV",
      "name": "NanoVibronix Inc"
    },
    {
      "symbol": "NAPA",
      "name": "Duckhorn Portfolio Inc (The)"
    },
    {
      "symbol": "NAPR",
      "name": "Innovator Growth-100 Power Buffer ETF - April"
    },
    {
      "symbol": "NARI",
      "name": "Inari Medical Inc"
    },
    {
      "symbol": "NAT",
      "name": "Nordic American Tankers Ltd"
    },
    {
      "symbol": "NATH",
      "name": "Nathan`s Famous Inc"
    },
    {
      "symbol": "NATL",
      "name": "National Interstate Corp"
    },
    {
      "symbol": "NATL-W",
      "name": "NCR Atleos Corporation WhenIssued"
    },
    {
      "symbol": "NATR",
      "name": "Nature`s Sunshine Products Inc"
    },
    {
      "symbol": "NAUT",
      "name": "Nautilus Biotechnology Inc"
    },
    {
      "symbol": "NAVI",
      "name": "Navient Corp"
    },
    {
      "symbol": "NAZ",
      "name": "Nuveen Arizona Quality Municipal Income Fund"
    },
    {
      "symbol": "NB",
      "name": "NioCorp Developments Ltd"
    },
    {
      "symbol": "NBB",
      "name": "Nuveen Taxable Municipal Income Fund"
    },
    {
      "symbol": "NBBK",
      "name": "NB Bancorp Inc"
    },
    {
      "symbol": "NBCC",
      "name": "NEUBERGER BERMAN NEXT GENERATION CONNECTED CONSUMER ETF "
    },
    {
      "symbol": "NBCE",
      "name": "Neuberger Berman China Equity ETF"
    },
    {
      "symbol": "NBCM",
      "name": "Commodity Strategy ETF"
    },
    {
      "symbol": "NBCT",
      "name": "NEUBERGER BERMAN CARBON TRANSITION & INFRASTRUCTURE ETF "
    },
    {
      "symbol": "NBDS",
      "name": "NEUBERGER BERMAN DISRUPTERS ETF "
    },
    {
      "symbol": "NBGR",
      "name": "Neuberger Berman Global Real Estate ETF"
    },
    {
      "symbol": "NBH",
      "name": "Neuberger Berman Municipal Fund Inc"
    },
    {
      "symbol": "NBHC",
      "name": "National Bank Holdings Corp - Class A"
    },
    {
      "symbol": "NBIX",
      "name": "Neurocrine Biosciences Inc"
    },
    {
      "symbol": "NBN",
      "name": "Northeast Bank"
    },
    {
      "symbol": "NBO",
      "name": "Neuberger Berman New York Municipal Fund Inc"
    },
    {
      "symbol": "NBOS",
      "name": "Neuberger Berman Option Strategy ETF"
    },
    {
      "symbol": "NBR",
      "name": "Nabors Industries Ltd"
    },
    {
      "symbol": "NBSE",
      "name": "NeuBase Therapeutics Inc"
    },
    {
      "symbol": "NBSM",
      "name": "Neuberger Berman Small-Mid Cap ETF"
    },
    {
      "symbol": "NBST",
      "name": "Newbury Street Acquisition Corp"
    },
    {
      "symbol": "NBSTU",
      "name": "Newbury Street Acquisition Corp - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "NBSTW",
      "name": "Newbury Street Acquisition Corp - Warrants (30/04/2028)"
    },
    {
      "symbol": "NBTB",
      "name": "NBT Bancorp. Inc"
    },
    {
      "symbol": "NBTX",
      "name": "Nanobiotix"
    },
    {
      "symbol": "NBW",
      "name": "Neuberger Berman California Municipal Fund Inc"
    },
    {
      "symbol": "NBXG",
      "name": "Neuberger Berman Next Generation Connectivity Fund Inc"
    },
    {
      "symbol": "NBY",
      "name": "Novabay Pharmaceuticals Inc"
    },
    {
      "symbol": "NC",
      "name": "Nacco Industries Inc - Class A"
    },
    {
      "symbol": "NCA",
      "name": "Nuveen California Municipal Value Fund."
    },
    {
      "symbol": "NCDL",
      "name": "Nuveen Churchill Direct Lending Corp"
    },
    {
      "symbol": "NCI",
      "name": "Neo Concept International Group Holdings Ltd"
    },
    {
      "symbol": "NCL",
      "name": "Northann Corp"
    },
    {
      "symbol": "NCLH",
      "name": "Norwegian Cruise Line Holdings Ltd"
    },
    {
      "symbol": "NCMI",
      "name": "National Cinemedia Inc"
    },
    {
      "symbol": "NCNA",
      "name": "NuCana plc"
    },
    {
      "symbol": "NCNC",
      "name": "noco-noco Inc"
    },
    {
      "symbol": "NCNCW",
      "name": "noco-noco Inc - Warrants(25/08/2028)"
    },
    {
      "symbol": "NCNO",
      "name": "Ncino Inc"
    },
    {
      "symbol": "NCPB",
      "name": "NUVEEN CORE PLUS BOND ETF "
    },
    {
      "symbol": "NCPL",
      "name": "Netcapital Inc"
    },
    {
      "symbol": "NCPLW",
      "name": "Netcapital Inc - Warrants(05/07/2027)"
    },
    {
      "symbol": "NCRA",
      "name": "Nocera Inc"
    },
    {
      "symbol": "NCSM",
      "name": "NCS Multistage Holdings Inc"
    },
    {
      "symbol": "NCTY",
      "name": "The9 Ltd"
    },
    {
      "symbol": "NCV",
      "name": "Virtus Convertible & Income Fund"
    },
    {
      "symbol": "NCV-P-A",
      "name": "Virtus Convertible & Income Fund"
    },
    {
      "symbol": "NCZ",
      "name": "Virtus Convertible & Income Fund II"
    },
    {
      "symbol": "NCZ-P-A",
      "name": "Virtus Convertible & Income Fund II"
    },
    {
      "symbol": "NDAC",
      "name": "NightDragon Acquisition Corp - Class A"
    },
    {
      "symbol": "NDACU",
      "name": "NightDragon Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "NDACW",
      "name": "NightDragon Acquisition Corp - Warrants (26/02/2026)"
    },
    {
      "symbol": "NDAQ",
      "name": "Nasdaq Inc - 144A"
    },
    {
      "symbol": "NDIA",
      "name": "GLOBAL X INDIA ACTIVE ETF "
    },
    {
      "symbol": "NDIV",
      "name": "Amplify Natural Resources Dividend Income ETF"
    },
    {
      "symbol": "NDLS",
      "name": "Noodles & Company - Class A"
    },
    {
      "symbol": "NDMO",
      "name": "Nuveen Dynamic Municipal Opportunities Fund"
    },
    {
      "symbol": "NDP",
      "name": "Tortoise Energy Independence Fund Inc"
    },
    {
      "symbol": "NDRA",
      "name": "ENDRA Life Sciences Inc"
    },
    {
      "symbol": "NDSN",
      "name": "Nordson Corp"
    },
    {
      "symbol": "NDVG",
      "name": "NUVEEN DIVIDEND GROWTH ETF "
    },
    {
      "symbol": "NE",
      "name": "Noble Corp Plc - Class A"
    },
    {
      "symbol": "NE-WS",
      "name": "Noble Corporation plc Tranche 1 Warrants"
    },
    {
      "symbol": "NE-WS-A",
      "name": "Noble Corporation plc Tranche 2 Warrants"
    },
    {
      "symbol": "NEA",
      "name": "Nuveen AMT-Free Quality Municipal Income Fund"
    },
    {
      "symbol": "NEAR",
      "name": "BLACKROCK SHORT DURATION BOND ETF "
    },
    {
      "symbol": "NECB",
      "name": "NorthEast Community Bancorp Inc"
    },
    {
      "symbol": "NEE",
      "name": "NextEra Energy Inc"
    },
    {
      "symbol": "NEE-P-Q",
      "name": "NextEra Energy Inc. Corporate Units"
    },
    {
      "symbol": "NEE-P-R",
      "name": "NextEra Energy Inc Corporate Units expiring 09012019"
    },
    {
      "symbol": "NEEPN",
      "name": "NextEra Energy Capital Holdings Inc"
    },
    {
      "symbol": "NEGG",
      "name": "Newegg Commerce Inc"
    },
    {
      "symbol": "NEM",
      "name": "Newmont Corp"
    },
    {
      "symbol": "NEN",
      "name": "New England Realty Associates LP"
    },
    {
      "symbol": "NEO",
      "name": "Neogenomics Inc"
    },
    {
      "symbol": "NEOG",
      "name": "Neogen Corp"
    },
    {
      "symbol": "NEON",
      "name": "Neonode Inc"
    },
    {
      "symbol": "NEOV",
      "name": "NeoVolta Inc"
    },
    {
      "symbol": "NEOVW",
      "name": "NeoVolta Inc - Warrants(01/04/2027)"
    },
    {
      "symbol": "NEP",
      "name": "NextEra Energy Partners LP"
    },
    {
      "symbol": "NEPH",
      "name": "Nephros Inc"
    },
    {
      "symbol": "NERD",
      "name": "ROUNDHILL VIDEO GAMES ETF "
    },
    {
      "symbol": "NERV",
      "name": "Minerva Neurosciences Inc"
    },
    {
      "symbol": "NET",
      "name": "Cloudflare Inc - Class A"
    },
    {
      "symbol": "NETD",
      "name": "Nabors Energy Transition Corp II - Class A"
    },
    {
      "symbol": "NETDU",
      "name": "Nabors Energy Transition Corp II - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "NETDW",
      "name": "Nabors Energy Transition Corp II - Warrants (01/09/2028)"
    },
    {
      "symbol": "NETL",
      "name": "NETLease Corporate Real Estate ETF"
    },
    {
      "symbol": "NETZ",
      "name": "TCW TRANSFORM SYSTEMS ETF "
    },
    {
      "symbol": "NEU",
      "name": "NewMarket Corp"
    },
    {
      "symbol": "NEUE",
      "name": "NeueHealth Inc"
    },
    {
      "symbol": "NEWP",
      "name": "New Pacific Metals Corp - New"
    },
    {
      "symbol": "NEWT",
      "name": "NewtekOne Inc"
    },
    {
      "symbol": "NEWTI",
      "name": "NewtekOne Inc"
    },
    {
      "symbol": "NEWTL",
      "name": "NewtekOne Inc"
    },
    {
      "symbol": "NEWTZ",
      "name": "NewtekOne Inc"
    },
    {
      "symbol": "NEWZ",
      "name": "StockSnips AI-Powered Sentiment US All Cap ETF"
    },
    {
      "symbol": "NEXA",
      "name": "Nexa Resources S.A."
    },
    {
      "symbol": "NEXI",
      "name": "Neximmune Inc"
    },
    {
      "symbol": "NEXN",
      "name": "Nexxen International Ltd"
    },
    {
      "symbol": "NEXT",
      "name": "NextDecade Corporation"
    },
    {
      "symbol": "NFBK",
      "name": "Northfield Bancorp Inc"
    },
    {
      "symbol": "NFE",
      "name": "New Fortress Energy Inc - Class A"
    },
    {
      "symbol": "NFG",
      "name": "National Fuel Gas Company"
    },
    {
      "symbol": "NFGC",
      "name": "New Found Gold Corp"
    },
    {
      "symbol": "NFJ",
      "name": "Virtus AllianzGI Dividend Interest & Premium Strategy Fund"
    },
    {
      "symbol": "NFLP",
      "name": "Kurv Yield Premium Strategy Netflix (NFLX) ETF"
    },
    {
      "symbol": "NFLT",
      "name": "VIRTUS NEWFLEET MULTI-SECTOR BOND ETF "
    },
    {
      "symbol": "NFLX",
      "name": "Netflix Inc"
    },
    {
      "symbol": "NFLY",
      "name": "YIELDMAX NFLX OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "NFRA",
      "name": "FLEXSHARES STOXX GLOBAL BROAD INFRASTRUCTURE INDEX FUND "
    },
    {
      "symbol": "NFTY",
      "name": "FIRST TRUST INDIA NIFTY 50 EQUAL WEIGHT ETF "
    },
    {
      "symbol": "NFYS",
      "name": "Enphys Acquisition Corp - Class A"
    },
    {
      "symbol": "NFYS-U",
      "name": "Enphys Acquisition Corp Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant"
    },
    {
      "symbol": "NFYS-WS",
      "name": "Enphys Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "NG",
      "name": "Novagold Resources Inc"
    },
    {
      "symbol": "NGD",
      "name": "New Gold Inc"
    },
    {
      "symbol": "NGG",
      "name": "National Grid Plc"
    },
    {
      "symbol": "NGIO",
      "name": "NuGenerex Immuno-Oncology Inc"
    },
    {
      "symbol": "NGL",
      "name": "NGL Energy Partners LP"
    },
    {
      "symbol": "NGL-P-B",
      "name": "NGL Energy Partners LP"
    },
    {
      "symbol": "NGL-P-C",
      "name": "NGL ENERGY PARTNERS LP 9625 Class C FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
      "symbol": "NGMS",
      "name": "NeoGames SA"
    },
    {
      "symbol": "NGNE",
      "name": "Neoleukin Therapeutics Inc"
    },
    {
      "symbol": "NGS",
      "name": "Natural Gas Services Group Inc"
    },
    {
      "symbol": "NGVC",
      "name": "Natural Grocers by Vitamin Cottage Inc"
    },
    {
      "symbol": "NGVT",
      "name": "Ingevity Corp"
    },
    {
      "symbol": "NHC",
      "name": "National Healthcare Corp"
    },
    {
      "symbol": "NHI",
      "name": "National Health Investors Inc"
    },
    {
      "symbol": "NHICU",
      "name": "NewHold Investment Corp II - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "NHS",
      "name": "Neuberger Berman High Yield Strategies Fund"
    },
    {
      "symbol": "NHTC",
      "name": "Natural Health Trends Corp"
    },
    {
      "symbol": "NI",
      "name": "NiSource Inc"
    },
    {
      "symbol": "NIC",
      "name": "Nicolet Bankshares Inc"
    },
    {
      "symbol": "NICE",
      "name": "NICE Ltd"
    },
    {
      "symbol": "NICK",
      "name": "Nicholas Financial Inc"
    },
    {
      "symbol": "NID",
      "name": "Nuveen Intermediate Duration Municipal Term Fund"
    },
    {
      "symbol": "NIE",
      "name": "Virtus Equity & Convertible Income Fund"
    },
    {
      "symbol": "NIKL",
      "name": "Sprott Nickel Miners ETF"
    },
    {
      "symbol": "NIM",
      "name": "Nuveen Select Maturities Municipal Fund"
    },
    {
      "symbol": "NINE",
      "name": "Nine Energy Service Inc"
    },
    {
      "symbol": "NIO",
      "name": "NIO Inc"
    },
    {
      "symbol": "NIOBW",
      "name": "NioCorp Developments Ltd - Warrants (17/03/2028)"
    },
    {
      "symbol": "NIQ",
      "name": "Nuveen Intermediate Duration Quality Municipal Term Fund"
    },
    {
      "symbol": "NISN",
      "name": "NiSun International Enterprise Development Group Co Ltd - Class A"
    },
    {
      "symbol": "NITO",
      "name": "N2OFF Inc"
    },
    {
      "symbol": "NIU",
      "name": "Niu Technologies"
    },
    {
      "symbol": "NIVF",
      "name": "NewGenIvf Group Ltd - Class A"
    },
    {
      "symbol": "NIVFW",
      "name": "NewGenIvf Group Ltd - Warrants (03/04/2029)"
    },
    {
      "symbol": "NJAN",
      "name": "Innovator Growth-100 Power Buffer ETF - January"
    },
    {
      "symbol": "NJR",
      "name": "New Jersey Resources Corporation"
    },
    {
      "symbol": "NJUL",
      "name": "Innovator Growth-100 Power Buffer ETF - July"
    },
    {
      "symbol": "NKE",
      "name": "Nike Inc - Class B"
    },
    {
      "symbol": "NKEL",
      "name": "AXS 2X NKE Bull Daily ETF"
    },
    {
      "symbol": "NKEQ",
      "name": "AXS 2X NKE Bear Daily ETF"
    },
    {
      "symbol": "NKG",
      "name": "Nuveen Georgia Quality Municipal Income Fund"
    },
    {
      "symbol": "NKGN",
      "name": "NKGen Biotech Inc"
    },
    {
      "symbol": "NKGNW",
      "name": "NKGen Biotech Inc - Warrants (01/09/2028)"
    },
    {
      "symbol": "NKLA",
      "name": "Nikola Corp"
    },
    {
      "symbol": "NKSH",
      "name": "National Bankshares Inc"
    },
    {
      "symbol": "NKTR",
      "name": "Nektar Therapeutics"
    },
    {
      "symbol": "NKTX",
      "name": "Nkarta Inc"
    },
    {
      "symbol": "NKX",
      "name": "Nuveen California AMT-Free Quality Municipal Income Fund"
    },
    {
      "symbol": "NL",
      "name": "NL Industries Inc"
    },
    {
      "symbol": "NLOP",
      "name": "Net Lease Office Properties"
    },
    {
      "symbol": "NLOP-W",
      "name": "Net Lease Office Properties of Beneficial Interest WhenIssued"
    },
    {
      "symbol": "NLR",
      "name": "VANECK URANIUM AND NUCLEAR ETF "
    },
    {
      "symbol": "NLSP",
      "name": "NLS Pharmaceutics Ltd"
    },
    {
      "symbol": "NLSPW",
      "name": "NLS Pharmaceutics Ltd - Warrants (25/09/2025)"
    },
    {
      "symbol": "NLY",
      "name": "Annaly Capital Management Inc"
    },
    {
      "symbol": "NLY-P-F",
      "name": "Annaly Capital Management Inc"
    },
    {
      "symbol": "NLY-P-G",
      "name": "Annaly Capital Management Inc"
    },
    {
      "symbol": "NLY-P-I",
      "name": "Annaly Capital Management Inc"
    },
    {
      "symbol": "NMAI",
      "name": "Nuveen Multi-Asset Income Fund"
    },
    {
      "symbol": "NMCO",
      "name": "Nuveen Municipal Credit Opportunities Fund"
    },
    {
      "symbol": "NMFC",
      "name": "New Mountain Finance Corp"
    },
    {
      "symbol": "NMFCZ",
      "name": "New Mountain Finance Corp"
    },
    {
      "symbol": "NMG",
      "name": "Nouveau Monde Graphite Inc"
    },
    {
      "symbol": "NMHI",
      "name": "Nature`s Miracle Holding Inc"
    },
    {
      "symbol": "NMHIW",
      "name": "Nature`s Miracle Holding Inc - Warrants (08/03/2029)"
    },
    {
      "symbol": "NMI",
      "name": "Nuveen Municipal Income Fund"
    },
    {
      "symbol": "NMIH",
      "name": "NMI Holdings Inc - Class A"
    },
    {
      "symbol": "NML",
      "name": "Neuberger Berman Energy Infrastructure and Income Fund Inc"
    },
    {
      "symbol": "NMM",
      "name": "Navios Maritime Partners L.P."
    },
    {
      "symbol": "NMR",
      "name": "Nomura Holdings Inc"
    },
    {
      "symbol": "NMRA",
      "name": "Neumora Therapeutics Inc"
    },
    {
      "symbol": "NMRK",
      "name": "Newmark Group Inc - Class A"
    },
    {
      "symbol": "NMS",
      "name": "Nuveen Minnesota Quality Municipal Income Fund"
    },
    {
      "symbol": "NMT",
      "name": "Nuveen Massachusetts Quality Municipal Income Fund"
    },
    {
      "symbol": "NMTC",
      "name": "NeuroOne Medical Technologies Corp"
    },
    {
      "symbol": "NMZ",
      "name": "Nuveen Municipal High Income Opportunity Fund"
    },
    {
      "symbol": "NN",
      "name": "NextNav Inc"
    },
    {
      "symbol": "NNAG",
      "name": "99 Acquisition Group Inc - Class A"
    },
    {
      "symbol": "NNAGR",
      "name": "99 Acquisition Group Inc"
    },
    {
      "symbol": "NNAGU",
      "name": "99 Acquisition Group Inc - Units (1 Ord Class A 1 War & 1 Rts)"
    },
    {
      "symbol": "NNAGW",
      "name": "99 Acquisition Group Inc - Warrants (25/08/2028)"
    },
    {
      "symbol": "NNAVW",
      "name": "NextNav Inc - Warrants (28/10/2026)"
    },
    {
      "symbol": "NNBR",
      "name": "NN Inc"
    },
    {
      "symbol": "NNDM",
      "name": "Nano Dimension Ltd"
    },
    {
      "symbol": "NNI",
      "name": "Nelnet Inc - Class A"
    },
    {
      "symbol": "NNN",
      "name": "NNN REIT Inc"
    },
    {
      "symbol": "NNOX",
      "name": "Nano X Imaging Ltd"
    },
    {
      "symbol": "NNVC",
      "name": "NanoViricides Inc"
    },
    {
      "symbol": "NNY",
      "name": "Nuveen New York Municipal Value Fund"
    },
    {
      "symbol": "NOA",
      "name": "North American Construction Group Ltd"
    },
    {
      "symbol": "NOAC",
      "name": "Natural Order Acquisition Corp"
    },
    {
      "symbol": "NOACU",
      "name": "Natural Order Acquisition Corp - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "NOACW",
      "name": "Natural Order Acquisition Corp - Warrants (15/09/2025)"
    },
    {
      "symbol": "NOAH",
      "name": "Noah Holdings Ltd"
    },
    {
      "symbol": "NOBL",
      "name": "ProShares S&P 500 Dividend Aristocrats ETF"
    },
    {
      "symbol": "NOC",
      "name": "Northrop Grumman Corp"
    },
    {
      "symbol": "NOCT",
      "name": "Innovator Growth-100 Power Buffer ETF- October"
    },
    {
      "symbol": "NODK",
      "name": "NI Holdings Inc"
    },
    {
      "symbol": "NOG",
      "name": "Northern Oil and Gas Inc"
    },
    {
      "symbol": "NOK",
      "name": "Nokia Corp"
    },
    {
      "symbol": "NOM",
      "name": "Nuveen Missouri Quality Municipal Income Fund"
    },
    {
      "symbol": "NOMD",
      "name": "Nomad Foods Ltd"
    },
    {
      "symbol": "NORW",
      "name": "GLOBAL X MSCI NORWAY ETF "
    },
    {
      "symbol": "NOTE",
      "name": "FiscalNote Holdings Inc - Class A"
    },
    {
      "symbol": "NOTE-WS",
      "name": "FiscalNote Holdings Inc Warrants to purchase one share of Class A common stock each at an exercise price of 11.50 per share"
    },
    {
      "symbol": "NOTV",
      "name": "Inotiv Inc"
    },
    {
      "symbol": "NOV",
      "name": "NOV Inc"
    },
    {
      "symbol": "NOVA",
      "name": "Sunnova Energy International Inc"
    },
    {
      "symbol": "NOVT",
      "name": "Novanta Inc"
    },
    {
      "symbol": "NOVV",
      "name": "Nova Vision Acquisition Corp"
    },
    {
      "symbol": "NOVVR",
      "name": "Nova Vision Acquisition Corp"
    },
    {
      "symbol": "NOVVU",
      "name": "Nova Vision Acquisition Corp - Unit (1 Ordinary share 1 Wrt & 1 Rts)"
    },
    {
      "symbol": "NOVVW",
      "name": "Nova Vision Acquisition Corp - Warrants (31/12/2028)"
    },
    {
      "symbol": "NOVZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (NOVEMBER) ETF "
    },
    {
      "symbol": "NOW",
      "name": "ServiceNow Inc"
    },
    {
      "symbol": "NPAB",
      "name": "New Providence Acquisition Corp II - Class A"
    },
    {
      "symbol": "NPABU",
      "name": "New Providence Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "NPABW",
      "name": "New Providence Acquisition Corp II - Warrants - (04/11/2026)"
    },
    {
      "symbol": "NPCE",
      "name": "NeuroPace Inc"
    },
    {
      "symbol": "NPCT",
      "name": "Nuveen Core Plus Impact Fund"
    },
    {
      "symbol": "NPFD",
      "name": "Nuveen Variable Rate Preferred & Income Fund"
    },
    {
      "symbol": "NPFI",
      "name": "NUVEEN PREFERRED AND INCOME ETF "
    },
    {
      "symbol": "NPK",
      "name": "National Presto Industries Inc"
    },
    {
      "symbol": "NPO",
      "name": "EnPro Industries Inc"
    },
    {
      "symbol": "NPV",
      "name": "Nuveen Virginia Quality Municipal Income Fund"
    },
    {
      "symbol": "NPWR",
      "name": "NET Power Inc - Class A"
    },
    {
      "symbol": "NPWR-WS",
      "name": "NET Power Inc Redeemable warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50"
    },
    {
      "symbol": "NQP",
      "name": "Nuveen Pennsylvania Quality Municipal Income Fund"
    },
    {
      "symbol": "NR",
      "name": "Newpark Resources Inc"
    },
    {
      "symbol": "NRAC",
      "name": "Northern Revival Acquisition Corp - Class A"
    },
    {
      "symbol": "NRACU",
      "name": "Northern Revival Acquisition Corp - Units (1 Ord Class A & 1/3 War)"
    },
    {
      "symbol": "NRACW",
      "name": "Northern Revival Acquisition Corp - Warrants (31/01/2028)"
    },
    {
      "symbol": "NRBO",
      "name": "NeuroBo Pharmaceuticals Inc"
    },
    {
      "symbol": "NRC",
      "name": "National Research Corp"
    },
    {
      "symbol": "NRDS",
      "name": "Nerdwallet Inc - Class A"
    },
    {
      "symbol": "NRDY",
      "name": "Nerdy Inc - Class A"
    },
    {
      "symbol": "NREF",
      "name": "NexPoint Real Estate Finance Inc"
    },
    {
      "symbol": "NREF-P-A",
      "name": "NexPoint Real Estate Finance Inc"
    },
    {
      "symbol": "NRES",
      "name": "Xtrackers RREEF Global Natural Resources ETF"
    },
    {
      "symbol": "NRG",
      "name": "NRG Energy Inc"
    },
    {
      "symbol": "NRGD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "NRGU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "NRGV",
      "name": "Energy Vault Holdings Inc"
    },
    {
      "symbol": "NRIM",
      "name": "Northrim Bancorp Inc"
    },
    {
      "symbol": "NRIX",
      "name": "Nurix Therapeutics Inc"
    },
    {
      "symbol": "NRK",
      "name": "Nuveen New York AMT-Free Quality Municipal Income Fund"
    },
    {
      "symbol": "NRO",
      "name": "Neuberger Berman Real Estate Securities Income Fund Inc"
    },
    {
      "symbol": "NRP",
      "name": "Natural Resource Partners LP"
    },
    {
      "symbol": "NRSH",
      "name": "Aztlan North America Nearshoring Stock Selection ETF"
    },
    {
      "symbol": "NRSN",
      "name": "NeuroSense Therapeutics Ltd"
    },
    {
      "symbol": "NRSNW",
      "name": "NeuroSense Therapeutics Ltd - Warrants (09/11/2026)"
    },
    {
      "symbol": "NRT",
      "name": "North European Oil Royalty Trust"
    },
    {
      "symbol": "NRUC",
      "name": "National Rural Utilities Coop Finance Corp"
    },
    {
      "symbol": "NRXP",
      "name": "NRX Pharmaceuticals Inc"
    },
    {
      "symbol": "NRXPW",
      "name": "NRX Pharmaceuticals Inc - Warrants (24/05/2026)"
    },
    {
      "symbol": "NRXS",
      "name": "Neuraxis Inc"
    },
    {
      "symbol": "NS",
      "name": "Nustar Energy L P"
    },
    {
      "symbol": "NS-P-A",
      "name": "Nustar Energy L P"
    },
    {
      "symbol": "NS-P-B",
      "name": "Nustar Energy L P"
    },
    {
      "symbol": "NS-P-C",
      "name": "Nustar Energy L P"
    },
    {
      "symbol": "NSA",
      "name": "National Storage Affiliates Trust"
    },
    {
      "symbol": "NSA-P-A",
      "name": "National Storage Affiliates Trust"
    },
    {
      "symbol": "NSC",
      "name": "Norfolk Southern Corp"
    },
    {
      "symbol": "NSCR",
      "name": "NUVEEN SUSTAINABLE CORE ETF "
    },
    {
      "symbol": "NSCS",
      "name": "NUVEEN SMALL CAP SELECT ETF "
    },
    {
      "symbol": "NSI",
      "name": "National Security Emerging Markets Index ETF"
    },
    {
      "symbol": "NSIT",
      "name": "Insight Enterprises Inc"
    },
    {
      "symbol": "NSL",
      "name": "Nuveen Senior Income Fund"
    },
    {
      "symbol": "NSP",
      "name": "Insperity Inc"
    },
    {
      "symbol": "NSPL",
      "name": "NightShares 500 1x/1.5x ETF"
    },
    {
      "symbol": "NSPR",
      "name": "InspireMD Inc"
    },
    {
      "symbol": "NSS",
      "name": "NuStar Logistics LP"
    },
    {
      "symbol": "NSSC",
      "name": "NAPCO Security Technologies Inc"
    },
    {
      "symbol": "NSTS",
      "name": "NSTS Bancorp Inc"
    },
    {
      "symbol": "NSYS",
      "name": "Nortech Systems Inc"
    },
    {
      "symbol": "NTAP",
      "name": "Netapp Inc"
    },
    {
      "symbol": "NTB",
      "name": "Bank of N T Butterfield & Son Ltd"
    },
    {
      "symbol": "NTBL",
      "name": "Notable Labs Inc Ord"
    },
    {
      "symbol": "NTCT",
      "name": "Netscout Systems Inc"
    },
    {
      "symbol": "NTES",
      "name": "NetEase Inc"
    },
    {
      "symbol": "NTEST",
      "name": "NTEST"
    },
    {
      "symbol": "NTEST-A",
      "name": "NTESTA"
    },
    {
      "symbol": "NTEST-B",
      "name": "NTESTB"
    },
    {
      "symbol": "NTEST-C",
      "name": "NTESTC"
    },
    {
      "symbol": "NTEST-G"
    },
    {
      "symbol": "NTEST-H"
    },
    {
      "symbol": "NTEST-I"
    },
    {
      "symbol": "NTEST-J"
    },
    {
      "symbol": "NTEST-K"
    },
    {
      "symbol": "NTEST-L"
    },
    {
      "symbol": "NTEST-M"
    },
    {
      "symbol": "NTEST-N"
    },
    {
      "symbol": "NTEST-O"
    },
    {
      "symbol": "NTEST-P"
    },
    {
      "symbol": "NTEST-Q"
    },
    {
      "symbol": "NTEST-Y"
    },
    {
      "symbol": "NTEST-Z"
    },
    {
      "symbol": "NTG",
      "name": "Tortoise Midstream Energy Fund Inc"
    },
    {
      "symbol": "NTGR",
      "name": "Netgear Inc"
    },
    {
      "symbol": "NTIC",
      "name": "Northern Technologies International Corp"
    },
    {
      "symbol": "NTIP",
      "name": "Network-1 Technologies Inc"
    },
    {
      "symbol": "NTLA",
      "name": "Intellia Therapeutics Inc"
    },
    {
      "symbol": "NTNX",
      "name": "Nutanix Inc - Class A"
    },
    {
      "symbol": "NTR",
      "name": "Nutrien Ltd"
    },
    {
      "symbol": "NTRA",
      "name": "Natera Inc"
    },
    {
      "symbol": "NTRB",
      "name": "Nutriband Inc"
    },
    {
      "symbol": "NTRBW",
      "name": "Nutriband Inc - Warrants (30/09/2026)"
    },
    {
      "symbol": "NTRP",
      "name": "Neurotrope Inc"
    },
    {
      "symbol": "NTRS",
      "name": "Northern Trust Corp"
    },
    {
      "symbol": "NTRSO",
      "name": "Northern Trust Corp"
    },
    {
      "symbol": "NTSE",
      "name": "WISDOMTREE EMERGING MARKETS EFFICIENT CORE FUND "
    },
    {
      "symbol": "NTSI",
      "name": "WISDOMTREE INTERNATIONAL EFFICIENT CORE FUND "
    },
    {
      "symbol": "NTST",
      "name": "Netstreit Corp"
    },
    {
      "symbol": "NTSX",
      "name": "WisdomTree U.S. Efficient Core Fund"
    },
    {
      "symbol": "NTWK",
      "name": "Netsol Technologies Inc"
    },
    {
      "symbol": "NTZ",
      "name": "Natuzzi S.P.A."
    },
    {
      "symbol": "NTZG",
      "name": "NUVEEN GLOBAL NET ZERO TRANSITION ETF "
    },
    {
      "symbol": "NU",
      "name": "Nu Holdings Ltd Class A"
    },
    {
      "symbol": "NUAG",
      "name": "NUVEEN ENHANCED YIELD U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "NUBD",
      "name": "NUVEEN ESG U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "NUDM",
      "name": "NUVEEN ESG INTERNATIONAL DEVELOPED MARKETS EQUITY ETF "
    },
    {
      "symbol": "NUDV",
      "name": "NUVEEN ESG DIVIDEND ETF "
    },
    {
      "symbol": "NUE",
      "name": "Nucor Corp"
    },
    {
      "symbol": "NUEM",
      "name": "NUVEEN ESG EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "NUGO",
      "name": "NUVEEN GROWTH OPPORTUNITIES ETF "
    },
    {
      "symbol": "NUGT",
      "name": "DIREXION DAILY GOLD MINERS INDEX BULL 2X SHARES "
    },
    {
      "symbol": "NUHY",
      "name": "NUVEEN ESG HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "NUKK",
      "name": "Nukkleus Inc - New"
    },
    {
      "symbol": "NUKKW",
      "name": "Nukkleus Inc - Warrants (22/12/2028)"
    },
    {
      "symbol": "NUKZ",
      "name": "Range Nuclear Renaissance Index ETF"
    },
    {
      "symbol": "NULC",
      "name": "NUVEEN ESG LARGE-CAP ETF "
    },
    {
      "symbol": "NULG",
      "name": "NUVEEN ESG LARGE-CAP GROWTH ETF "
    },
    {
      "symbol": "NULV",
      "name": "NUVEEN ESG LARGE-CAP VALUE ETF "
    },
    {
      "symbol": "NUMG",
      "name": "NUVEEN ESG MID-CAP GROWTH ETF "
    },
    {
      "symbol": "NUMV",
      "name": "NUVEEN ESG MID-CAP VALUE ETF "
    },
    {
      "symbol": "NUO",
      "name": "Nuveen Ohio Quality Municipal Income Fund"
    },
    {
      "symbol": "NURE",
      "name": "NUVEEN SHORT-TERM REIT ETF "
    },
    {
      "symbol": "NURO",
      "name": "Neurometrix Inc"
    },
    {
      "symbol": "NUS",
      "name": "Nu Skin Enterprises Inc - Class A"
    },
    {
      "symbol": "NUSA",
      "name": "NUVEEN ESG 1-5 YEAR U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "NUSB",
      "name": "NUVEEN ULTRA SHORT INCOME ETF "
    },
    {
      "symbol": "NUSC",
      "name": "NUVEEN ESG SMALL-CAP ETF "
    },
    {
      "symbol": "NUSI",
      "name": "NATIONWIDE NASDAQ-100 RISK-MANAGED INCOME ETF "
    },
    {
      "symbol": "NUTX",
      "name": "Nutex Health Inc"
    },
    {
      "symbol": "NUV",
      "name": "Nuveen Municipal Value Fund Inc"
    },
    {
      "symbol": "NUVB",
      "name": "Nuvation Bio Inc - Class A"
    },
    {
      "symbol": "NUVB-WS",
      "name": "Nuvation Bio Inc Warrants"
    },
    {
      "symbol": "NUVL",
      "name": "Nuvalent Inc - Class A"
    },
    {
      "symbol": "NUW",
      "name": "Nuveen AMT-Free Municipal Value Fund"
    },
    {
      "symbol": "NUWE",
      "name": "Nuwellis Inc"
    },
    {
      "symbol": "NUZE",
      "name": "Nuzee Inc"
    },
    {
      "symbol": "NVAC",
      "name": "NorthView Acquisition Corp"
    },
    {
      "symbol": "NVACR",
      "name": "NorthView Acquisition Corp"
    },
    {
      "symbol": "NVACW",
      "name": "NorthView Acquisition Corp - Warrants (02/08/2027)"
    },
    {
      "symbol": "NVAX",
      "name": "Novavax Inc"
    },
    {
      "symbol": "NVBT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 NOV ETF "
    },
    {
      "symbol": "NVBW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 NOV ETF "
    },
    {
      "symbol": "NVCR",
      "name": "NovoCure Ltd"
    },
    {
      "symbol": "NVCT",
      "name": "Nuvectis Pharma Inc"
    },
    {
      "symbol": "NVD",
      "name": "GRANITESHARES 2X SHORT NVDA DAILY ETF "
    },
    {
      "symbol": "NVDA",
      "name": "NVIDIA Corp"
    },
    {
      "symbol": "NVDD",
      "name": "DIREXION DAILY NVDA BEAR 1X SHARES "
    },
    {
      "symbol": "NVDL",
      "name": "GRANITESHARES 1.5X LONG NVDA DAILY ETF "
    },
    {
      "symbol": "NVDQ",
      "name": "T-Rex 2X Inverse NVIDIA Daily Target ETF"
    },
    {
      "symbol": "NVDS",
      "name": "AXS 1.25X NVDA Bear Daily ETF"
    },
    {
      "symbol": "NVDU",
      "name": "DIREXION DAILY NVDA BULL 1.5X SHARES "
    },
    {
      "symbol": "NVDX",
      "name": "T-Rex 2X Long NVIDIA Daily Target ETF"
    },
    {
      "symbol": "NVDY",
      "name": "YIELDMAX NVDA OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "NVEC",
      "name": "NVE Corp"
    },
    {
      "symbol": "NVEE",
      "name": "NV5 Global Inc"
    },
    {
      "symbol": "NVEI",
      "name": "Nuvei Corporation (Sub Voting)"
    },
    {
      "symbol": "NVFY",
      "name": "Nova Lifestyle Inc"
    },
    {
      "symbol": "NVG",
      "name": "Nuveen AMT-Free Municipal Credit Income Fund"
    },
    {
      "symbol": "NVGS",
      "name": "Navigator Holdings Ltd"
    },
    {
      "symbol": "NVIR",
      "name": "HORIZON KINETICS ENERGY AND REMEDIATION ETF "
    },
    {
      "symbol": "NVMI",
      "name": "Nova Ltd"
    },
    {
      "symbol": "NVNI",
      "name": "Nvni Group Ltd"
    },
    {
      "symbol": "NVNIW",
      "name": "Nvni Group Ltd - Warrants (01/11/2028)"
    },
    {
      "symbol": "NVNO",
      "name": "enVVeno Medical Corporation"
    },
    {
      "symbol": "NVO",
      "name": "Novo Nordisk"
    },
    {
      "symbol": "NVOS",
      "name": "Novo Integrated Sciences Inc"
    },
    {
      "symbol": "NVR",
      "name": "NVR Inc"
    },
    {
      "symbol": "NVRI",
      "name": "Enviri Corp"
    },
    {
      "symbol": "NVRO",
      "name": "Nevro Corp"
    },
    {
      "symbol": "NVS",
      "name": "Novartis AG"
    },
    {
      "symbol": "NVSAU",
      "name": "New Vista Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "NVST",
      "name": "Envista Holdings Corp"
    },
    {
      "symbol": "NVT",
      "name": "nVent Electric plc"
    },
    {
      "symbol": "NVTS",
      "name": "Navitas Semiconductor Corp"
    },
    {
      "symbol": "NVVE",
      "name": "Nuvve Holding Corp"
    },
    {
      "symbol": "NVVEW",
      "name": "Nuvve Holding Corp - Warrants (19/03/2026)"
    },
    {
      "symbol": "NVX",
      "name": "Novonix Ltd"
    },
    {
      "symbol": "NWBI",
      "name": "Northwest Bancshares Inc"
    },
    {
      "symbol": "NWE",
      "name": "NorthWestern Energy Group Inc"
    },
    {
      "symbol": "NWFL",
      "name": "Norwood Financial Corp"
    },
    {
      "symbol": "NWG",
      "name": "NatWest Group Plc"
    },
    {
      "symbol": "NWGL",
      "name": "Nature Wood Group Ltd"
    },
    {
      "symbol": "NWL",
      "name": "Newell Brands Inc"
    },
    {
      "symbol": "NWLG",
      "name": "NUVEEN WINSLOW LARGE-CAP GROWTH ESG ETF "
    },
    {
      "symbol": "NWLI",
      "name": "National Western Life Group Inc - Class A"
    },
    {
      "symbol": "NWN",
      "name": "Northwest Natural Holding Company"
    },
    {
      "symbol": "NWPX",
      "name": "Northwest Pipe Company"
    },
    {
      "symbol": "NWS",
      "name": "News Corp - Class B"
    },
    {
      "symbol": "NWSA",
      "name": "News Corp - Class A"
    },
    {
      "symbol": "NWTN",
      "name": "NWTN Inc - Class B"
    },
    {
      "symbol": "NWTNW",
      "name": "NWTN Inc - Warrants (11/11/2027)"
    },
    {
      "symbol": "NX",
      "name": "Quanex Building Products Corp"
    },
    {
      "symbol": "NXC",
      "name": "Nuveen California Select Tax-Free Income Portfolio"
    },
    {
      "symbol": "NXDT",
      "name": "NexPoint Diversified Real Estate Trust"
    },
    {
      "symbol": "NXDT-P-A",
      "name": "NexPoint Diversified Real Estate Trust"
    },
    {
      "symbol": "NXE",
      "name": "NexGen Energy Ltd"
    },
    {
      "symbol": "NXG",
      "name": "NXG NextGen Infrastructure Income Fund"
    },
    {
      "symbol": "NXGL",
      "name": "Nexgel Inc"
    },
    {
      "symbol": "NXGLW",
      "name": "Nexgel Inc - Warrants (17/12/2026)"
    },
    {
      "symbol": "NXJ",
      "name": "Nuveen New Jersey Quality Municipal Income Fund"
    },
    {
      "symbol": "NXL",
      "name": "Nexalin Technology Inc"
    },
    {
      "symbol": "NXLIW",
      "name": "Nexalin Technology Inc - Warrants (15/09/2025)"
    },
    {
      "symbol": "NXMD",
      "name": "Nexeon MedSystems Inc"
    },
    {
      "symbol": "NXN",
      "name": "Nuveen New York Select Tax-Free Income Portfolio"
    },
    {
      "symbol": "NXP",
      "name": "Nuveen Select Tax-Free Income Portfolio"
    },
    {
      "symbol": "NXPI",
      "name": "NXP Semiconductors NV"
    },
    {
      "symbol": "NXPL",
      "name": "NextPlat Corp"
    },
    {
      "symbol": "NXPLW",
      "name": "NextPlat Corp - Warrants (29/04/2026)"
    },
    {
      "symbol": "NXRT",
      "name": "NexPoint Residential Trust Inc"
    },
    {
      "symbol": "NXST",
      "name": "Nexstar Media Group Inc"
    },
    {
      "symbol": "NXT",
      "name": "Nextracker Inc - Class A"
    },
    {
      "symbol": "NXT(EXP20091224)",
      "name": "Nextracker Inc"
    },
    {
      "symbol": "NXTC",
      "name": "Nextcure Inc"
    },
    {
      "symbol": "NXTE",
      "name": "AXS Green Alpha ETF"
    },
    {
      "symbol": "NXTG",
      "name": "FIRST TRUST INDXX NEXTG ETF "
    },
    {
      "symbol": "NXTI",
      "name": "Simplify Next Intangible Core Index ETF"
    },
    {
      "symbol": "NXTT",
      "name": "Next Technology Holding Inc"
    },
    {
      "symbol": "NXTV",
      "name": "Simplify Next Intangible Value Index ETF"
    },
    {
      "symbol": "NXU",
      "name": "Energy Vault Holdings Inc - Class A"
    },
    {
      "symbol": "NYAX",
      "name": "Nayax Ltd"
    },
    {
      "symbol": "NYC",
      "name": "American Strategic Investment Co - Class A"
    },
    {
      "symbol": "NYCB",
      "name": "New York Community Bancorp Inc"
    },
    {
      "symbol": "NYCB-P-A",
      "name": "New York Community Bancorp Inc"
    },
    {
      "symbol": "NYCB-P-U",
      "name": "New York Community Bancorp Inc Capital Tr V BONUSES"
    },
    {
      "symbol": "NYF",
      "name": "iShares New York Muni Bond ETF"
    },
    {
      "symbol": "NYMT",
      "name": "New York Mortgage Trust Inc"
    },
    {
      "symbol": "NYMTL",
      "name": "New York Mortgage Trust Inc"
    },
    {
      "symbol": "NYMTM",
      "name": "New York Mortgage Trust Inc"
    },
    {
      "symbol": "NYMTN",
      "name": "New York Mortgage Trust Inc"
    },
    {
      "symbol": "NYMTZ",
      "name": "New York Mortgage Trust Inc"
    },
    {
      "symbol": "NYT",
      "name": "New York Times Co. - Class A"
    },
    {
      "symbol": "NYXH",
      "name": "Nyxoah SA"
    },
    {
      "symbol": "NZAC",
      "name": "SPDR MSCI ACWI CLIMATE PARIS ALIGNED ETF "
    },
    {
      "symbol": "NZF",
      "name": "Nuveen Municipal Credit Income Fund"
    },
    {
      "symbol": "NZRO",
      "name": "STRATEGY SHARES HALT CLIMATE CHANGE ETF "
    },
    {
      "symbol": "NZUS",
      "name": "SPDR MSCI USA CLIMATE PARIS ALIGNED ETF "
    },
    {
      "symbol": "O",
      "name": "Realty Income Corp"
    },
    {
      "symbol": "O-P",
      "name": "Realty Income Corp"
    },
    {
      "symbol": "OABI",
      "name": "OmniAb Inc"
    },
    {
      "symbol": "OABIW",
      "name": "OmniAb Inc - Warrants (01/11/2027)"
    },
    {
      "symbol": "OACP",
      "name": "ONEASCENT CORE PLUS BOND ETF "
    },
    {
      "symbol": "OAEM",
      "name": "ONEASCENT EMERGING MARKETS ETF "
    },
    {
      "symbol": "OAIA",
      "name": "Teucrium AiLA Long-Short Agriculture Strategy ETF"
    },
    {
      "symbol": "OAIB",
      "name": "Teucrium AiLA Long/Short Base Metals Strategy ETF"
    },
    {
      "symbol": "OAIM",
      "name": "ONEASCENT INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "OAK-P-A",
      "name": "Oaktree Capital Group LLC"
    },
    {
      "symbol": "OAK-P-B",
      "name": "Oaktree Capital Group LLC"
    },
    {
      "symbol": "OAKU",
      "name": "Oak Woods Acquisition Corp - Class A"
    },
    {
      "symbol": "OAKUR",
      "name": "Oak Woods Acquisition Corp"
    },
    {
      "symbol": "OAKUU",
      "name": "Oak Woods Acquisition Corp - Units (1 Ord Class A & 1 War 1 Right )"
    },
    {
      "symbol": "OAKUW",
      "name": "Oak Woods Acquisition Corp - Warrants (23/03/2028)"
    },
    {
      "symbol": "OALC",
      "name": "ONEASCENT LARGE CAP CORE ETF "
    },
    {
      "symbol": "OARK",
      "name": "YIELDMAX INNOVATION OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "OB",
      "name": "Outbrain Inc"
    },
    {
      "symbol": "OBDC",
      "name": "Blue Owl Capital Corp"
    },
    {
      "symbol": "OBDE",
      "name": "Blue Owl Capital Corp III"
    },
    {
      "symbol": "OBE",
      "name": "Obsidian Energy Ltd"
    },
    {
      "symbol": "OBIL",
      "name": "US TREASURY 12 MONTH BILL ETF "
    },
    {
      "symbol": "OBIO",
      "name": "Orchestra BioMed Holdings Inc"
    },
    {
      "symbol": "OBK",
      "name": "Origin Bancorp Inc"
    },
    {
      "symbol": "OBLG",
      "name": "Oblong Inc"
    },
    {
      "symbol": "OBND",
      "name": "SPDR LOOMIS SAYLES OPPORTUNISTIC BOND ETF "
    },
    {
      "symbol": "OBOR",
      "name": "KraneShares MSCI One Belt One Road Index ETF"
    },
    {
      "symbol": "OBT",
      "name": "Orange County Bancorp Inc"
    },
    {
      "symbol": "OC",
      "name": "Owens Corning"
    },
    {
      "symbol": "OCAX",
      "name": "OCA Acquisition Corp - Class A"
    },
    {
      "symbol": "OCAXU",
      "name": "OCA Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "OCAXW",
      "name": "OCA Acquisition Corp - Warrants (14/01/2026)"
    },
    {
      "symbol": "OCC",
      "name": "Optical Cable Corp"
    },
    {
      "symbol": "OCCI",
      "name": "OFS Credit Company Inc"
    },
    {
      "symbol": "OCCIN",
      "name": "OFS Credit Company Inc"
    },
    {
      "symbol": "OCCIO",
      "name": "OFS Credit Company Inc"
    },
    {
      "symbol": "OCEA",
      "name": "Ocean Biomedical Inc"
    },
    {
      "symbol": "OCEAW",
      "name": "Ocean Biomedical Inc - Warrants (14/02/2028)"
    },
    {
      "symbol": "OCEN",
      "name": "IQ CLEAN OCEANS ETF "
    },
    {
      "symbol": "OCFC",
      "name": "OceanFirst Financial Corp"
    },
    {
      "symbol": "OCFCP",
      "name": "OceanFirst Financial Corp"
    },
    {
      "symbol": "OCFT",
      "name": "Oneconnect Financial Technology Co Ltd"
    },
    {
      "symbol": "OCG",
      "name": "Oriental Culture Holding Ltd"
    },
    {
      "symbol": "OCGN",
      "name": "Ocugen Inc"
    },
    {
      "symbol": "OCIO",
      "name": "ClearShares OCIO ETF"
    },
    {
      "symbol": "OCN",
      "name": "Ocwen Financial Corp"
    },
    {
      "symbol": "OCS",
      "name": "Oculis Holding AG"
    },
    {
      "symbol": "OCSAW",
      "name": "Oculis Holding AG - Warrants (02/03/2028)"
    },
    {
      "symbol": "OCSL",
      "name": "Oaktree Specialty Lending Corp"
    },
    {
      "symbol": "OCTD",
      "name": "Innovator Premium Income 10 Barrier ETF - October"
    },
    {
      "symbol": "OCTH",
      "name": "Innovator Premium Income 20 Barrier ETF - October"
    },
    {
      "symbol": "OCTJ",
      "name": "Innovator Premium Income 30 Barrier ETF - October"
    },
    {
      "symbol": "OCTO",
      "name": "Eightco Holdings Inc"
    },
    {
      "symbol": "OCTQ",
      "name": "Innovator Premium Income 40 Barrier ETF - October"
    },
    {
      "symbol": "OCTT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 OCT ETF "
    },
    {
      "symbol": "OCTW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 OCT ETF "
    },
    {
      "symbol": "OCTZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (OCTOBER) ETF "
    },
    {
      "symbol": "OCUL",
      "name": "Ocular Therapeutix Inc"
    },
    {
      "symbol": "OCUP",
      "name": "Ocuphire Pharma Inc"
    },
    {
      "symbol": "OCX",
      "name": "Oncocyte Corporation"
    },
    {
      "symbol": "ODC",
      "name": "Oil-Dri Corp Of America"
    },
    {
      "symbol": "ODD",
      "name": "ODDITY Tech Ltd - Class A"
    },
    {
      "symbol": "ODDS",
      "name": "PACER BLUESTAR DIGITAL ENTERTAINMENT ETF "
    },
    {
      "symbol": "ODFL",
      "name": "Old Dominion Freight Line Inc"
    },
    {
      "symbol": "ODP",
      "name": "ODP Corporation (The)"
    },
    {
      "symbol": "ODV",
      "name": "Osisko Development Corp"
    },
    {
      "symbol": "ODVWZ",
      "name": "Osisko Development Corp - Warrants (27/05/2027)"
    },
    {
      "symbol": "OEC",
      "name": "Orion S.A"
    },
    {
      "symbol": "OEF",
      "name": "iShares S&P 100 ETF"
    },
    {
      "symbol": "OESX",
      "name": "Orion Energy Systems Inc"
    },
    {
      "symbol": "OEUR",
      "name": "ALPS OShares Europe Quality Dividend ETF"
    },
    {
      "symbol": "OFG",
      "name": "OFG Bancorp"
    },
    {
      "symbol": "OFIX",
      "name": "Orthofix Medical Inc"
    },
    {
      "symbol": "OFLX",
      "name": "Omega Flex Inc"
    },
    {
      "symbol": "OFOS",
      "name": "Range Global Offshore Oil Services Index ETF"
    },
    {
      "symbol": "OFS",
      "name": "OFS Capital Corp"
    },
    {
      "symbol": "OFSSH",
      "name": "OFS Capital Corp"
    },
    {
      "symbol": "OGCP",
      "name": "Empire State Realty OP LP"
    },
    {
      "symbol": "OGE",
      "name": "Oge Energy Corp"
    },
    {
      "symbol": "OGEN",
      "name": "Oragenics Inc"
    },
    {
      "symbol": "OGI",
      "name": "OrganiGram Holdings Inc"
    },
    {
      "symbol": "OGIG",
      "name": "ALPS OShares Global Internet Giants ETF"
    },
    {
      "symbol": "OGN",
      "name": "Organon & Company"
    },
    {
      "symbol": "OGS",
      "name": "ONE Gas Inc"
    },
    {
      "symbol": "OGSP",
      "name": "Obra High Grade Structured Products ETF"
    },
    {
      "symbol": "OHI",
      "name": "Omega Healthcare Investors Inc"
    },
    {
      "symbol": "OHPA",
      "name": "Orion Acquisition Corp - Class A"
    },
    {
      "symbol": "OHPAU",
      "name": "Orion Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "OHPAW",
      "name": "Orion Acquisition Corp - Warrants (19/02/2026)"
    },
    {
      "symbol": "OI",
      "name": "O-I Glass Inc"
    },
    {
      "symbol": "OIA",
      "name": "Invesco Municipal Income Opportunities Trust"
    },
    {
      "symbol": "OIH",
      "name": "VANECK OIL SERVICES ETF "
    },
    {
      "symbol": "OII",
      "name": "Oceaneering International Inc"
    },
    {
      "symbol": "OILD",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "OILK",
      "name": "ProShares K-1 Free Crude Oil Strategy ETF"
    },
    {
      "symbol": "OILT",
      "name": "Texas Capital Texas Oil Index ETF"
    },
    {
      "symbol": "OILU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "OIS",
      "name": "Oil States International Inc"
    },
    {
      "symbol": "OKE",
      "name": "Oneok Inc"
    },
    {
      "symbol": "OKTA",
      "name": "Okta Inc - Class A"
    },
    {
      "symbol": "OKYO",
      "name": "OKYO Pharma Ltd - New"
    },
    {
      "symbol": "OLB",
      "name": "OLB Group Inc"
    },
    {
      "symbol": "OLED",
      "name": "Universal Display Corp"
    },
    {
      "symbol": "OLK",
      "name": "Olink Holding AB (publ)"
    },
    {
      "symbol": "OLLI",
      "name": "Ollies Bargain Outlet Holdings Inc"
    },
    {
      "symbol": "OLMA",
      "name": "Olema Pharmaceuticals Inc"
    },
    {
      "symbol": "OLN",
      "name": "Olin Corp"
    },
    {
      "symbol": "OLO",
      "name": "Olo Inc - Class A"
    },
    {
      "symbol": "OLP",
      "name": "One Liberty Properties Inc"
    },
    {
      "symbol": "OLPX",
      "name": "Olaplex Holdings Inc"
    },
    {
      "symbol": "OM",
      "name": "Outset Medical Inc"
    },
    {
      "symbol": "OMAB",
      "name": "Grupo Aeroportuario del Centro Norte S.A.B de C.V."
    },
    {
      "symbol": "OMC",
      "name": "Omnicom Group Inc"
    },
    {
      "symbol": "OMCL",
      "name": "Omnicell Inc"
    },
    {
      "symbol": "OMER",
      "name": "Omeros Corporation"
    },
    {
      "symbol": "OMEX",
      "name": "Odyssey Marine Exploration Inc"
    },
    {
      "symbol": "OMF",
      "name": "OneMain Holdings Inc"
    },
    {
      "symbol": "OMFL",
      "name": "INVESCO RUSSELL 1000(R) DYNAMIC MULTIFACTOR ETF "
    },
    {
      "symbol": "OMFS",
      "name": "INVESCO RUSSELL 2000(R) DYNAMIC MULTIFACTOR ETF "
    },
    {
      "symbol": "OMGA",
      "name": "Omega Therapeutics Inc"
    },
    {
      "symbol": "OMH",
      "name": "Ohmyhome Ltd"
    },
    {
      "symbol": "OMI",
      "name": "Owens & Minor Inc"
    },
    {
      "symbol": "OMIC",
      "name": "Singular Genomics Systems Inc"
    },
    {
      "symbol": "OMQS",
      "name": "OMNIQ Corp"
    },
    {
      "symbol": "ON",
      "name": "ON Semiconductor Corp"
    },
    {
      "symbol": "ONB",
      "name": "Old National Bancorp"
    },
    {
      "symbol": "ONBPO",
      "name": "Old National Bancorp"
    },
    {
      "symbol": "ONBPP",
      "name": "Old National Bancorp"
    },
    {
      "symbol": "ONCO",
      "name": "Onconetix Inc"
    },
    {
      "symbol": "ONCT",
      "name": "Oncternal Therapeutics Inc"
    },
    {
      "symbol": "ONCY",
      "name": "Oncolytics Biotech Inc"
    },
    {
      "symbol": "OND",
      "name": "PROSHARES ON-DEMAND ETF PROSHARE ON-DEMAND ETF"
    },
    {
      "symbol": "ONDS",
      "name": "Ondas Holdings Inc"
    },
    {
      "symbol": "ONEO",
      "name": "SPDR RUSSELL 1000 MOMENTUM FOCUS ETF "
    },
    {
      "symbol": "ONEQ",
      "name": "FIDELITY NASDAQ COMPOSITE INDEX ETF "
    },
    {
      "symbol": "ONEV",
      "name": "SPDR Russell 1000 Low Volatility Focus ETF"
    },
    {
      "symbol": "ONEW",
      "name": "Onewater Marine Inc - Class A"
    },
    {
      "symbol": "ONEY",
      "name": "SPDR Russell 1000 Yield Focus ETF"
    },
    {
      "symbol": "ONFO",
      "name": "Onfolio Holdings Inc"
    },
    {
      "symbol": "ONFOW",
      "name": "Onfolio Holdings Inc - Warrants (02/01/2027)"
    },
    {
      "symbol": "ONL",
      "name": "Orion Office REIT Inc"
    },
    {
      "symbol": "ONLN",
      "name": "PROSHARES ONLINE RETAIL ETF "
    },
    {
      "symbol": "ONMD",
      "name": "OneMedNet Corp"
    },
    {
      "symbol": "ONMDW",
      "name": "OneMedNet Corp - Warrants (05/05/2026)"
    },
    {
      "symbol": "ONOF",
      "name": "GLOBAL X ADAPTIVE U.S. RISK MANAGEMENT ETF "
    },
    {
      "symbol": "ONON",
      "name": "On Holding AG Class A"
    },
    {
      "symbol": "ONTF",
      "name": "ON24 Inc"
    },
    {
      "symbol": "ONTO",
      "name": "Onto Innovation Inc"
    },
    {
      "symbol": "ONVO",
      "name": "Organovo Holdings Inc"
    },
    {
      "symbol": "ONYX",
      "name": "Onyx Acquisition Co I - Class A"
    },
    {
      "symbol": "ONYXU",
      "name": "Onyx Acquisition Co I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "ONYXW",
      "name": "Onyx Acquisition Co I - Warrants (30/11/2028)"
    },
    {
      "symbol": "OOMA",
      "name": "Ooma Inc"
    },
    {
      "symbol": "OOSP",
      "name": "Obra Opportunistic Structured Products ET"
    },
    {
      "symbol": "OOTO",
      "name": "DIREXION DAILY TRAVEL & VACATION BULL 2X SHARES "
    },
    {
      "symbol": "OP",
      "name": "OceanPal Inc"
    },
    {
      "symbol": "OPAD",
      "name": "Offerpad Solutions Inc - Class A"
    },
    {
      "symbol": "OPAL",
      "name": "OPAL Fuels Inc - Class A"
    },
    {
      "symbol": "OPBK",
      "name": "OP Bancorp"
    },
    {
      "symbol": "OPCH",
      "name": "Option Care Health Inc"
    },
    {
      "symbol": "OPEN",
      "name": "Opendoor Technologies Inc"
    },
    {
      "symbol": "OPER",
      "name": "ClearShares Ultra-Short Maturity ETF"
    },
    {
      "symbol": "OPFI",
      "name": "OppFi Inc - Class A"
    },
    {
      "symbol": "OPFI-WS",
      "name": "OppFi Inc Wt Exp 08312027"
    },
    {
      "symbol": "OPGN",
      "name": "Opgen Inc"
    },
    {
      "symbol": "OPHC",
      "name": "Optimumbank Holdings Inc"
    },
    {
      "symbol": "OPI",
      "name": "Office Properties Income Trust"
    },
    {
      "symbol": "OPINL",
      "name": "Office Properties Income Trust"
    },
    {
      "symbol": "OPK",
      "name": "Opko Health Inc"
    },
    {
      "symbol": "OPOF",
      "name": "Old Point Financial Corp"
    },
    {
      "symbol": "OPP",
      "name": "RiverNorth/DoubleLine Strategic opportunity fund Inc"
    },
    {
      "symbol": "OPP-P-A",
      "name": "RiverNorth/DoubleLine Strategic opportunity fund Inc"
    },
    {
      "symbol": "OPP-P-B",
      "name": "RiverNorth/DoubleLine Strategic opportunity fund Inc"
    },
    {
      "symbol": "OPRA",
      "name": "Opera Ltd"
    },
    {
      "symbol": "OPRT",
      "name": "Oportun Financial Corp"
    },
    {
      "symbol": "OPRX",
      "name": "OptimizeRx Corp"
    },
    {
      "symbol": "OPT",
      "name": "Opthea Ltd"
    },
    {
      "symbol": "OPTN",
      "name": "OptiNose Inc"
    },
    {
      "symbol": "OPTT",
      "name": "Ocean Power Technologies - Reg S"
    },
    {
      "symbol": "OPTX",
      "name": "NETOPTIX CORP"
    },
    {
      "symbol": "OPTXW",
      "name": "Syntec Optics Holdings Inc Wt Exp"
    },
    {
      "symbol": "OPTZ",
      "name": "Optimize Strategy Index ETF"
    },
    {
      "symbol": "OPXS",
      "name": "Optex Systems Holdings Inc"
    },
    {
      "symbol": "OPY",
      "name": "Oppenheimer Holdings Inc - Class A"
    },
    {
      "symbol": "OR",
      "name": "Osisko Gold Royalties Ltd"
    },
    {
      "symbol": "ORA",
      "name": "Ormat Technologies Inc"
    },
    {
      "symbol": "ORAN",
      "name": "Orange."
    },
    {
      "symbol": "ORC",
      "name": "Orchid Island Capital Inc"
    },
    {
      "symbol": "ORCL",
      "name": "Oracle Corp"
    },
    {
      "symbol": "ORGN",
      "name": "Origin Materials Inc"
    },
    {
      "symbol": "ORGNW",
      "name": "Origin Materials Inc - Warrants (23/06/2026)"
    },
    {
      "symbol": "ORGO",
      "name": "Organogenesis Holdings Inc - Class A"
    },
    {
      "symbol": "ORGS",
      "name": "Orgenesis Inc"
    },
    {
      "symbol": "ORI",
      "name": "Old Republic International Corp"
    },
    {
      "symbol": "ORIC",
      "name": "ORIC Pharmaceuticals Inc"
    },
    {
      "symbol": "ORLA",
      "name": "Orla Mining Ltd"
    },
    {
      "symbol": "ORLY",
      "name": "O`Reilly Automotive Inc"
    },
    {
      "symbol": "ORMP",
      "name": "Oramed Pharmaceuticals Inc"
    },
    {
      "symbol": "ORN",
      "name": "Orion Group Holdings Inc"
    },
    {
      "symbol": "ORRF",
      "name": "Orrstown Financial Services Inc"
    },
    {
      "symbol": "OSBC",
      "name": "Old Second Bancorporation Inc"
    },
    {
      "symbol": "OSCR",
      "name": "Oscar Health Inc - Class A"
    },
    {
      "symbol": "OSCV",
      "name": "Opus Small Cap Value Plus ETF"
    },
    {
      "symbol": "OSEA",
      "name": "HARBOR INTERNATIONAL COMPOUNDERS ETF "
    },
    {
      "symbol": "OSG",
      "name": "Overseas Shipholding Group Inc - Class A"
    },
    {
      "symbol": "OSI",
      "name": "Osiris Acquisition Corp - Class A"
    },
    {
      "symbol": "OSI-U",
      "name": "Osiris Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "OSI-WS",
      "name": "Osiris Acquisition Corp - Warrants (01/05/2028)"
    },
    {
      "symbol": "OSIS",
      "name": "OSI Systems Inc"
    },
    {
      "symbol": "OSK",
      "name": "Oshkosh Corp"
    },
    {
      "symbol": "OSPN",
      "name": "OneSpan Inc"
    },
    {
      "symbol": "OSS",
      "name": "One Stop Systems Inc"
    },
    {
      "symbol": "OST",
      "name": "Ostin Technology Group Co Ltd"
    },
    {
      "symbol": "OSUR",
      "name": "Orasure Technologies Inc"
    },
    {
      "symbol": "OSW",
      "name": "OneSpaWorld Holdings Ltd"
    },
    {
      "symbol": "OTECU",
      "name": "OceanTech Acquisitions I Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "OTECW",
      "name": "OceanTech Acquisitions I Corp - Warrants (12/05/2026)"
    },
    {
      "symbol": "OTEX",
      "name": "Open Text Corp"
    },
    {
      "symbol": "OTIS",
      "name": "Otis Worldwide Corp"
    },
    {
      "symbol": "OTLK",
      "name": "Outlook Therapeutics Inc"
    },
    {
      "symbol": "OTLY",
      "name": "Oatly Group AB"
    },
    {
      "symbol": "OTMO",
      "name": "Otonomo Technologies Ltd"
    },
    {
      "symbol": "OTMOW",
      "name": "Otonomo Technologies Ltd - Warrants (13/08/2026)"
    },
    {
      "symbol": "OTRK",
      "name": "Ontrak Inc"
    },
    {
      "symbol": "OTRKP",
      "name": "Ontrak Inc"
    },
    {
      "symbol": "OTTR",
      "name": "Otter Tail Corporation"
    },
    {
      "symbol": "OUNZ",
      "name": "VanEck Merk Gold Trust"
    },
    {
      "symbol": "OUSA",
      "name": "ALPS OShares U.S. Quality Dividend ETF"
    },
    {
      "symbol": "OUSM",
      "name": "ALPS OShares U.S. Small-Cap Quality Dividend ETF"
    },
    {
      "symbol": "OUST",
      "name": "Ouster Inc - Class A"
    },
    {
      "symbol": "OUST-WS",
      "name": "Ouster Inc Warrants"
    },
    {
      "symbol": "OUT",
      "name": "Outfront Media Inc"
    },
    {
      "symbol": "OVB",
      "name": "OVERLAY SHARES CORE BOND ETF "
    },
    {
      "symbol": "OVBC",
      "name": "Ohio Valley Banc Corp"
    },
    {
      "symbol": "OVF",
      "name": "OVERLAY SHARES FOREIGN EQUITY ETF "
    },
    {
      "symbol": "OVID",
      "name": "Ovid Therapeutics Inc"
    },
    {
      "symbol": "OVL",
      "name": "OVERLAY SHARES LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "OVLH",
      "name": "OVERLAY SHARES HEDGED LARGE CAP EQUITY ETF "
    },
    {
      "symbol": "OVLY",
      "name": "Oak Valley Bancorp"
    },
    {
      "symbol": "OVM",
      "name": "OVERLAY SHARES MUNICIPAL BOND ETF "
    },
    {
      "symbol": "OVS",
      "name": "OVERLAY SHARES SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "OVT",
      "name": "OVERLAY SHARES SHORT TERM BOND ETF "
    },
    {
      "symbol": "OVV",
      "name": "Ovintiv Inc"
    },
    {
      "symbol": "OWL",
      "name": "Blue Owl Capital Inc - Class A"
    },
    {
      "symbol": "OWL-WS",
      "name": "Blue Owl Capital Inc Redeemable Warrants"
    },
    {
      "symbol": "OWLT",
      "name": "Owlet Inc - Class A"
    },
    {
      "symbol": "OWNS",
      "name": "CCM Affordable Housing MBS ETF"
    },
    {
      "symbol": "OXBR",
      "name": "Oxbridge Re Holdings Ltd"
    },
    {
      "symbol": "OXBRW",
      "name": "Oxbridge Re Holdings Ltd - Warrants (26/03/2024)"
    },
    {
      "symbol": "OXLC",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCL",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCM",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCN",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCO",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCP",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXLCZ",
      "name": "Oxford Lane Capital Corp"
    },
    {
      "symbol": "OXM",
      "name": "Oxford Industries Inc"
    },
    {
      "symbol": "OXSQ",
      "name": "Oxford Square Capital Corp"
    },
    {
      "symbol": "OXSQG",
      "name": "Oxford Square Capital Corp"
    },
    {
      "symbol": "OXSQZ",
      "name": "Oxford Square Capital Corp"
    },
    {
      "symbol": "OXUSU",
      "name": "Borealis Foods Inc - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "OXY",
      "name": "Occidental Petroleum Corp"
    },
    {
      "symbol": "OXY-WS",
      "name": "Occidental Petroleum Corp - Warrants (03/08/2027)"
    },
    {
      "symbol": "OZ",
      "name": "Belpointe REIT Inc"
    },
    {
      "symbol": "OZK",
      "name": "Bank OZK"
    },
    {
      "symbol": "OZKAP",
      "name": "Bank OZK"
    },
    {
      "symbol": "OZON",
      "name": "Ozon Holdings PLC"
    },
    {
      "symbol": "PAA",
      "name": "Plains All American Pipeline LP"
    },
    {
      "symbol": "PAAA",
      "name": "PGIM AAA CLO ETF "
    },
    {
      "symbol": "PAAS",
      "name": "Pan American Silver Corp"
    },
    {
      "symbol": "PAB",
      "name": "PGIM ACTIVE AGGREGATE BOND ETF "
    },
    {
      "symbol": "PABD",
      "name": "iShares Paris-Aligned Climate MSCI World ex USA ETF"
    },
    {
      "symbol": "PABU",
      "name": "ISHARES PARIS-ALIGNED CLIMATE MSCI USA ETF "
    },
    {
      "symbol": "PAC",
      "name": "Grupo Aeroportuario Del Pacifico SAB de CV"
    },
    {
      "symbol": "PACB",
      "name": "Pacific Biosciences of California Inc"
    },
    {
      "symbol": "PACI-U",
      "name": "PROOF Acquisition Corp I Units each consisting of one share of Class A common stock 0.0001 par value and onehalf of one redeemable warrant"
    },
    {
      "symbol": "PACK",
      "name": "Ranpak Holdings Corp - Class A"
    },
    {
      "symbol": "PACS",
      "name": "PACS Group Inc"
    },
    {
      "symbol": "PACWP",
      "name": "PacWest Bancorp Depositary Shares Each Representing a 140th Interest in a Share of 7.75 Fixed Rate NonCumulative Perpetual Preferred Stock Series A"
    },
    {
      "symbol": "PACX",
      "name": "Pioneer Merger Corp - Class A"
    },
    {
      "symbol": "PACXW",
      "name": "Pioneer Merger Corp - Warrants(07/01/2026)"
    },
    {
      "symbol": "PAG",
      "name": "Penske Automotive Group Inc"
    },
    {
      "symbol": "PAGP",
      "name": "Plains GP Holdings LP - Class A"
    },
    {
      "symbol": "PAGS",
      "name": "PagSeguro Digital Ltd - Class A"
    },
    {
      "symbol": "PAHC",
      "name": "Phibro Animal Health Corp - Class A"
    },
    {
      "symbol": "PAI",
      "name": "Western Asset Investment Grade Income Fund Inc"
    },
    {
      "symbol": "PALC",
      "name": "Pacer Lunt Large Cap Multi-Factor Alternator ETF"
    },
    {
      "symbol": "PALI",
      "name": "Palisade Bio Inc"
    },
    {
      "symbol": "PALL",
      "name": "abrdn Physical Palladium Shares ETF"
    },
    {
      "symbol": "PALT",
      "name": "Paltalk Inc"
    },
    {
      "symbol": "PAM",
      "name": "Pampa Energia SA"
    },
    {
      "symbol": "PAMC",
      "name": "Pacer Lunt MidCap Multi-Factor Alternator ETF"
    },
    {
      "symbol": "PANL",
      "name": "Pangaea Logistics Solutions Ltd"
    },
    {
      "symbol": "PANW",
      "name": "Palo Alto Networks Inc"
    },
    {
      "symbol": "PAPI",
      "name": "PARAMETRIC EQUITY PREMIUM INCOME ETF "
    },
    {
      "symbol": "PAPL",
      "name": "Pineapple Financial Inc"
    },
    {
      "symbol": "PAPR",
      "name": "Innovator U.S. Equity Power Buffer ETF - April"
    },
    {
      "symbol": "PAR",
      "name": "Par Technology Corp"
    },
    {
      "symbol": "PARA",
      "name": "Paramount Global - Class B"
    },
    {
      "symbol": "PARAA",
      "name": "Paramount Global - Class A"
    },
    {
      "symbol": "PARAP",
      "name": "Paramount Global Conv Pfd"
    },
    {
      "symbol": "PARR",
      "name": "Par Pacific Holdings Inc"
    },
    {
      "symbol": "PASG",
      "name": "Passage Bio Inc"
    },
    {
      "symbol": "PATH",
      "name": "UiPath Inc - Class A"
    },
    {
      "symbol": "PATK",
      "name": "Patrick Industries Inc"
    },
    {
      "symbol": "PAUG",
      "name": "Innovator U.S. Equity Power Buffer ETF - August"
    },
    {
      "symbol": "PAVE",
      "name": "GLOBAL X U.S. INFRASTRUCTURE DEVELOPMENT ETF "
    },
    {
      "symbol": "PAVM",
      "name": "PAVmed Inc"
    },
    {
      "symbol": "PAVMZ",
      "name": "PAVmed Inc - Warrants - Series Z (30/04/2024)"
    },
    {
      "symbol": "PAVS",
      "name": "Paranovus Entertainment Technology Ltd - Class A"
    },
    {
      "symbol": "PAWZ",
      "name": "ProShares Pet Care ETF"
    },
    {
      "symbol": "PAX",
      "name": "Patria Investments Ltd - Class A"
    },
    {
      "symbol": "PAXS",
      "name": "PIMCO Access Income Fund"
    },
    {
      "symbol": "PAY",
      "name": "Paymentus Holdings Inc - Class A"
    },
    {
      "symbol": "PAYC",
      "name": "Paycom Software Inc"
    },
    {
      "symbol": "PAYO",
      "name": "Payoneer Global Inc"
    },
    {
      "symbol": "PAYOW",
      "name": "Payoneer Global Inc - Warrants (25/06/2026)"
    },
    {
      "symbol": "PAYS",
      "name": "PaySign Inc"
    },
    {
      "symbol": "PAYX",
      "name": "Paychex Inc"
    },
    {
      "symbol": "PB",
      "name": "Prosperity Bancshares Inc"
    },
    {
      "symbol": "PBA",
      "name": "Pembina Pipeline Corporation"
    },
    {
      "symbol": "PBAP",
      "name": "PGIM US Large-Cap Buffer 20 ETF - April"
    },
    {
      "symbol": "PBBK",
      "name": "PB Bankshares Inc"
    },
    {
      "symbol": "PBD",
      "name": "INVESCO GLOBAL CLEAN ENERGY ETF "
    },
    {
      "symbol": "PBDC",
      "name": "Putnam BDC Income ETF"
    },
    {
      "symbol": "PBE",
      "name": "Invesco Biotechnology & Genome ETF"
    },
    {
      "symbol": "PBF",
      "name": "PBF Energy Inc - Class A"
    },
    {
      "symbol": "PBFB",
      "name": "PGIM US Large-Cap Buffer 20 ETF - February"
    },
    {
      "symbol": "PBFS",
      "name": "Pioneer Bancorp Inc"
    },
    {
      "symbol": "PBH",
      "name": "Prestige Consumer Healthcare Inc"
    },
    {
      "symbol": "PBHC",
      "name": "Pathfinder Bancorp Inc"
    },
    {
      "symbol": "PBI",
      "name": "Pitney Bowes Inc"
    },
    {
      "symbol": "PBI-P-B",
      "name": "Pitney Bowes Inc"
    },
    {
      "symbol": "PBJ",
      "name": "Invesco Food & Beverage ETF"
    },
    {
      "symbol": "PBJA",
      "name": "PGIM US Large-Cap Buffer 20 ETF - January"
    },
    {
      "symbol": "PBL",
      "name": "PGIM PORTFOLIO BALLAST ETF "
    },
    {
      "symbol": "PBM",
      "name": "Psyence Biomedical Ltd"
    },
    {
      "symbol": "PBMR",
      "name": "PGIM US Large-Cap Buffer 20 ETF - March"
    },
    {
      "symbol": "PBMWW",
      "name": "Psyence Biomedical Ltd - Warrants (25/01/2029)"
    },
    {
      "symbol": "PBPB",
      "name": "Potbelly Corp"
    },
    {
      "symbol": "PBR",
      "name": "Petroleo Brasileiro S.A. Petrobras"
    },
    {
      "symbol": "PBR-A",
      "name": "Petroleo Brasileiro S.A. Petrobras"
    },
    {
      "symbol": "PBT",
      "name": "Permian Basin Royalty Trust"
    },
    {
      "symbol": "PBTP",
      "name": "INVESCO 0-5 YR US TIPS ETF "
    },
    {
      "symbol": "PBUS",
      "name": "INVESCO MSCI USA ETF "
    },
    {
      "symbol": "PBW",
      "name": "Invesco WilderHill Clean Energy ETF"
    },
    {
      "symbol": "PBYI",
      "name": "Puma Biotechnology Inc"
    },
    {
      "symbol": "PCAR",
      "name": "Paccar Inc"
    },
    {
      "symbol": "PCB",
      "name": "PCB Bancorp."
    },
    {
      "symbol": "PCCE",
      "name": "Polen Capital China Growth ETF"
    },
    {
      "symbol": "PCCT",
      "name": "Spectaire Holdings Inc - Class A"
    },
    {
      "symbol": "PCCTU",
      "name": "Perception Capital Corp II - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PCEF",
      "name": "INVESCO CEF INCOME COMPOSITE ETF "
    },
    {
      "symbol": "PCF",
      "name": "High Income Securities Fund"
    },
    {
      "symbol": "PCG",
      "name": "PG&E Corp"
    },
    {
      "symbol": "PCG-P-A",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-B",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-C",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-D",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-E",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-G",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-H",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCG-P-I",
      "name": "Pacific Gas & Electric Company"
    },
    {
      "symbol": "PCGG",
      "name": "Polen Capital Global Growth ETF"
    },
    {
      "symbol": "PCH",
      "name": "PotlatchDeltic Corp"
    },
    {
      "symbol": "PCIG",
      "name": "Polen Capital International Growth ETF"
    },
    {
      "symbol": "PCM",
      "name": "PCM Fund Inc"
    },
    {
      "symbol": "PCN",
      "name": "PIMCO Corporate & Income Strategy Fund"
    },
    {
      "symbol": "PCOR",
      "name": "Procore Technologies Inc"
    },
    {
      "symbol": "PCQ",
      "name": "Pimco California Municipal Income Fund"
    },
    {
      "symbol": "PCRB",
      "name": "Putnam ESG Core Bond ETF"
    },
    {
      "symbol": "PCRX",
      "name": "Pacira BioSciences Inc"
    },
    {
      "symbol": "PCSA",
      "name": "Processa Pharmaceuticals Inc"
    },
    {
      "symbol": "PCT",
      "name": "PureCycle Technologies Inc"
    },
    {
      "symbol": "PCTTU",
      "name": "PureCycle Technologies Inc - Units (1 Ord Class A & 3/4 War)"
    },
    {
      "symbol": "PCTTW",
      "name": "PureCycle Technologies Inc - Warrants (17/03/2026)"
    },
    {
      "symbol": "PCTY",
      "name": "Paylocity Holding Corp"
    },
    {
      "symbol": "PCVX",
      "name": "Vaxcyte Inc"
    },
    {
      "symbol": "PCY",
      "name": "INVESCO EMERGING MARKETS SOVEREIGN DEBT ETF "
    },
    {
      "symbol": "PCYO",
      "name": "Pure Cycle Corp"
    },
    {
      "symbol": "PD",
      "name": "Pagerduty Inc"
    },
    {
      "symbol": "PDBA",
      "name": "Invesco Agriculture Commodity Strategy No K-1 ETF"
    },
    {
      "symbol": "PDBC",
      "name": "INVESCO OPTIMUM YIELD DIVERSIFIED COMMODITY STRATEGY NO K-1 ETF "
    },
    {
      "symbol": "PDCO",
      "name": "Patterson Companies Inc"
    },
    {
      "symbol": "PDD",
      "name": "PDD Holdings Inc"
    },
    {
      "symbol": "PDEC",
      "name": "Innovator U.S. Equity Power Buffer ETF - December"
    },
    {
      "symbol": "PDEX",
      "name": "Pro-Dex Inc (co)"
    },
    {
      "symbol": "PDFS",
      "name": "PDF Solutions Inc"
    },
    {
      "symbol": "PDI",
      "name": "PIMCO Dynamic Income Fund"
    },
    {
      "symbol": "PDLB",
      "name": "Ponce Financial Group Inc"
    },
    {
      "symbol": "PDM",
      "name": "Piedmont Office Realty Trust Inc - Class A"
    },
    {
      "symbol": "PDN",
      "name": "INVESCO FTSE RAFI DEVELOPED MARKETS EX-U.S. SMALL-MID ETF "
    },
    {
      "symbol": "PDO",
      "name": "PIMCO Dynamic Income Opportunities Fund"
    },
    {
      "symbol": "PDP",
      "name": "Invesco Dorsey Wright Momentum ETF"
    },
    {
      "symbol": "PDS",
      "name": "Precision Drilling Corp"
    },
    {
      "symbol": "PDSB",
      "name": "PDS Biotechnology Corporation"
    },
    {
      "symbol": "PDT",
      "name": "John Hancock Premium Dividend Fund"
    },
    {
      "symbol": "PDX",
      "name": "PIMCO Energy and Tactical Credit Opportunities Fund"
    },
    {
      "symbol": "PDYN",
      "name": "Palladyne AI Corp"
    },
    {
      "symbol": "PDYNW",
      "name": "Palladyne AI Corp - Warrants (24/09/2026)"
    },
    {
      "symbol": "PEB",
      "name": "Pebblebrook Hotel Trust"
    },
    {
      "symbol": "PEB-P-E",
      "name": "Pebblebrook Hotel Trust"
    },
    {
      "symbol": "PEB-P-F",
      "name": "Pebblebrook Hotel Trust"
    },
    {
      "symbol": "PEB-P-G",
      "name": "Pebblebrook Hotel Trust"
    },
    {
      "symbol": "PEB-P-H",
      "name": "Pebblebrook Hotel Trust"
    },
    {
      "symbol": "PEBK",
      "name": "Peoples Bancorp Of North Carolina Inc"
    },
    {
      "symbol": "PEBO",
      "name": "Peoples Bancorp Inc (Marietta OH)"
    },
    {
      "symbol": "PECO",
      "name": "Phillips Edison & Company Inc - New"
    },
    {
      "symbol": "PED",
      "name": "PEDEVCO Corp"
    },
    {
      "symbol": "PEG",
      "name": "Public Service Enterprise Group Inc"
    },
    {
      "symbol": "PEGA",
      "name": "Pegasystems Inc"
    },
    {
      "symbol": "PEGR",
      "name": "Project Energy Reimagined Acquisition Corp - Class A"
    },
    {
      "symbol": "PEGRU",
      "name": "Project Energy Reimagined Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PEGRW",
      "name": "Project Energy Reimagined Acquisition Corp - Warrants (28/10/2026)"
    },
    {
      "symbol": "PEGY",
      "name": "Pineapple Energy Inc"
    },
    {
      "symbol": "PEJ",
      "name": "Invesco Leisure and Entertainment ETF"
    },
    {
      "symbol": "PEMX",
      "name": "Putnam Emerging Markets ex-China ETF"
    },
    {
      "symbol": "PEN",
      "name": "Penumbra Inc"
    },
    {
      "symbol": "PENN",
      "name": "PENN Entertainment Inc"
    },
    {
      "symbol": "PEO",
      "name": "Adams Natural Resources Fund Inc"
    },
    {
      "symbol": "PEP",
      "name": "PepsiCo Inc"
    },
    {
      "symbol": "PEPG",
      "name": "PepGen Inc"
    },
    {
      "symbol": "PEPLW",
      "name": "PepperLime Health Acquisition Corp - Warrants (01/10/2026)"
    },
    {
      "symbol": "PERF",
      "name": "Perfect Corp - Class A"
    },
    {
      "symbol": "PERF-WS",
      "name": "Perfect Corp Warrants each exercisable for one Class A Ordinary Share at a price of 11.50 per share"
    },
    {
      "symbol": "PERI",
      "name": "Perion Network Ltd"
    },
    {
      "symbol": "PESI",
      "name": "Perma-Fix Environmental Services Inc"
    },
    {
      "symbol": "PET",
      "name": "Wag Group Company"
    },
    {
      "symbol": "PETQ",
      "name": "PetIQ Inc - Class A"
    },
    {
      "symbol": "PETS",
      "name": "Petmed Express Inc"
    },
    {
      "symbol": "PETVW",
      "name": "PetVivo Holdings Inc - Warrants (15/04/2026)"
    },
    {
      "symbol": "PETWW",
      "name": "Wag Group Co - Warrants(08/08/2027)"
    },
    {
      "symbol": "PETZ",
      "name": "TDH Holdings Inc"
    },
    {
      "symbol": "PEV",
      "name": "Phoenix Motor Inc"
    },
    {
      "symbol": "PEX",
      "name": "ProShares Global Listed Private Equity ETF"
    },
    {
      "symbol": "PEXL",
      "name": "Pacer US Export Leaders ETF"
    },
    {
      "symbol": "PEY",
      "name": "Invesco High Yield Equity Dividend Achievers ETF"
    },
    {
      "symbol": "PEZ",
      "name": "Invesco Dorsey Wright Consumer Cyclicals Momentum ETF"
    },
    {
      "symbol": "PFBC",
      "name": "Preferred Bank"
    },
    {
      "symbol": "PFC",
      "name": "Premier Financial Corp"
    },
    {
      "symbol": "PFD",
      "name": "Flaherty & Crumrine Preferred and Income Fund Inc"
    },
    {
      "symbol": "PFE",
      "name": "Pfizer Inc"
    },
    {
      "symbol": "PFEB",
      "name": "Innovator U.S. Equity Power Buffer ETF - February"
    },
    {
      "symbol": "PFEL",
      "name": "AXS 2X PFE Bull Daily ETF"
    },
    {
      "symbol": "PFES",
      "name": "AXS 2X PFE Bear Daily ETF"
    },
    {
      "symbol": "PFF",
      "name": "iShares Trust iShares Preferred and Income Securities ETF"
    },
    {
      "symbol": "PFFA",
      "name": "VIRTUS INFRACAP U.S. PREFERRED STOCK ETF "
    },
    {
      "symbol": "PFFD",
      "name": "GLOBAL X U.S. PREFERRED ETF "
    },
    {
      "symbol": "PFFL",
      "name": "ETRACS 2xMonthly Pay Leveraged Preferred Stock Index ETN due September 25 2048"
    },
    {
      "symbol": "PFFR",
      "name": "INFRACAP REIT PREFERRED ETF "
    },
    {
      "symbol": "PFFV",
      "name": "GLOBAL X VARIABLE RATE PREFERRED ETF "
    },
    {
      "symbol": "PFG",
      "name": "Principal Financial Group Inc"
    },
    {
      "symbol": "PFGC",
      "name": "Performance Food Group Company"
    },
    {
      "symbol": "PFH",
      "name": "Prudential Financial Inc"
    },
    {
      "symbol": "PFI",
      "name": "Invesco Dorsey Wright Financial Momentum ETF"
    },
    {
      "symbol": "PFIE",
      "name": "Profire Energy Inc"
    },
    {
      "symbol": "PFIG",
      "name": "INVESCO FUNDAMENTAL INVESTMENT GRADE CORPORATE BOND ETF "
    },
    {
      "symbol": "PFIS",
      "name": "Peoples Financial Services Corp"
    },
    {
      "symbol": "PFIX",
      "name": "Simplify Interest Rate Hedge ETF"
    },
    {
      "symbol": "PFL",
      "name": "Pimco Income Strategy Fund"
    },
    {
      "symbol": "PFLD",
      "name": "AAM LOW DURATION PREFERRED AND INCOME SECURITIES ETF "
    },
    {
      "symbol": "PFLT",
      "name": "PennantPark Floating Rate Capital Ltd"
    },
    {
      "symbol": "PFM",
      "name": "Invesco Dividend Achievers ETF"
    },
    {
      "symbol": "PFMT",
      "name": "Performant Financial Corp"
    },
    {
      "symbol": "PFN",
      "name": "Pimco Income Strategy Fund II"
    },
    {
      "symbol": "PFO",
      "name": "Flaherty & Crumrine Preferred and Income Opportunity Fund Inc"
    },
    {
      "symbol": "PFRL",
      "name": "PGIM FLOATING RATE INCOME ETF "
    },
    {
      "symbol": "PFS",
      "name": "Provident Financial Services Inc"
    },
    {
      "symbol": "PFSI",
      "name": "PennyMac Financial Services Inc"
    },
    {
      "symbol": "PFTA",
      "name": "Perception Capital Corp III - Class A"
    },
    {
      "symbol": "PFTAU",
      "name": "Perception Capital Corp III - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "PFTAW",
      "name": "Perception Capital Corp III - Warrants (08/07/2026)"
    },
    {
      "symbol": "PFUT",
      "name": "Putnam Sustainable Future ETF"
    },
    {
      "symbol": "PFX",
      "name": "PhenixFIN Corp"
    },
    {
      "symbol": "PFXF",
      "name": "VanEck Preferred Securities ex Financials ETF"
    },
    {
      "symbol": "PFXNL",
      "name": "PhenixFIN Corp"
    },
    {
      "symbol": "PFXNZ",
      "name": "PhenixFIN Corp"
    },
    {
      "symbol": "PG",
      "name": "Procter & Gamble Company"
    },
    {
      "symbol": "PGC",
      "name": "Peapack-Gladstone Financial Corp"
    },
    {
      "symbol": "PGEN",
      "name": "Precigen Inc"
    },
    {
      "symbol": "PGF",
      "name": "Invesco Financial Preferred ETF"
    },
    {
      "symbol": "PGHY",
      "name": "INVESCO GLOBAL EX-US HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "PGJ",
      "name": "Invesco Golden Dragon China ETF"
    },
    {
      "symbol": "PGNY",
      "name": "Progyny Inc"
    },
    {
      "symbol": "PGP",
      "name": "Pimco Global StocksPLUS & Income Fund"
    },
    {
      "symbol": "PGR",
      "name": "Progressive Corp"
    },
    {
      "symbol": "PGRE",
      "name": "Paramount Group Inc"
    },
    {
      "symbol": "PGRO",
      "name": "Putnam Focused Large Cap Growth ETF"
    },
    {
      "symbol": "PGRU",
      "name": "PropertyGuru Group Ltd"
    },
    {
      "symbol": "PGSS",
      "name": "Pegasus Digital Mobility Acquisition Corp - Class A"
    },
    {
      "symbol": "PGSS-U",
      "name": "Pegasus Digital Mobility Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "PGSS-WS",
      "name": "Pegasus Digital Mobility Acquisition Corp - Warrants(01/01/9999)"
    },
    {
      "symbol": "PGX",
      "name": "INVESCO PREFERRED ETF "
    },
    {
      "symbol": "PGY",
      "name": "Pagaya Technologies Ltd - Class A"
    },
    {
      "symbol": "PGYWW",
      "name": "Pagaya Technologies Ltd - Warrants(01/09/2027)"
    },
    {
      "symbol": "PGZ",
      "name": "Principal Real Estate Income Fund"
    },
    {
      "symbol": "PH",
      "name": "Parker-Hannifin Corp"
    },
    {
      "symbol": "PHAR",
      "name": "Pharming Group N.V."
    },
    {
      "symbol": "PHAT",
      "name": "Phathom Pharmaceuticals Inc"
    },
    {
      "symbol": "PHB",
      "name": "INVESCO FUNDAMENTAL HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "PHD",
      "name": "Pioneer Floating Rate Fund Inc"
    },
    {
      "symbol": "PHDG",
      "name": "INVESCO S&P 500 DOWNSIDE HEDGED ETF "
    },
    {
      "symbol": "PHEQ",
      "name": "PARAMETRIC HEDGED EQUITY ETF "
    },
    {
      "symbol": "PHG",
      "name": "Koninklijke Philips N.V."
    },
    {
      "symbol": "PHGE",
      "name": "BiomX Inc"
    },
    {
      "symbol": "PHGE-U",
      "name": "BiomX Inc - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "PHGE-WS",
      "name": "BiomX Inc - Warrants (13/12/2023)"
    },
    {
      "symbol": "PHI",
      "name": "PLDT Inc"
    },
    {
      "symbol": "PHIN",
      "name": "PHINIA Inc"
    },
    {
      "symbol": "PHIN-W",
      "name": "PHINIA Inc WhenIssued"
    },
    {
      "symbol": "PHIO",
      "name": "Phio Pharmaceuticals Corp"
    },
    {
      "symbol": "PHK",
      "name": "Pimco High Income Fund"
    },
    {
      "symbol": "PHM",
      "name": "PulteGroup Inc"
    },
    {
      "symbol": "PHO",
      "name": "Invesco Water Resources ETF"
    },
    {
      "symbol": "PHR",
      "name": "Phreesia Inc"
    },
    {
      "symbol": "PHT",
      "name": "Pioneer High Income Fund Inc"
    },
    {
      "symbol": "PHUN",
      "name": "Phunware Inc"
    },
    {
      "symbol": "PHVS",
      "name": "Pharvaris NV"
    },
    {
      "symbol": "PHX",
      "name": "PHX Minerals Inc - Class A"
    },
    {
      "symbol": "PHXM",
      "name": "PHAXIAM Therapeutics SA ADR"
    },
    {
      "symbol": "PHYD",
      "name": "Putnam ESG High Yield ETF"
    },
    {
      "symbol": "PHYL",
      "name": "PGIM Active High Yield Bond ETF"
    },
    {
      "symbol": "PHYS",
      "name": "Sprott Physical Gold Trust"
    },
    {
      "symbol": "PHYT",
      "name": "Pyrophyte Acquisition Corp - Class A"
    },
    {
      "symbol": "PHYT-U",
      "name": "Pyrophyte Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PHYT-WS",
      "name": "Pyrophyte Acquisition Corp - Warrants(01/01/9999)"
    },
    {
      "symbol": "PI",
      "name": "Impinj Inc"
    },
    {
      "symbol": "PICB",
      "name": "INVESCO INTERNATIONAL CORPORATE BOND ETF "
    },
    {
      "symbol": "PICK",
      "name": "ISHARES MSCI GLOBAL METALS & MINING PRODUCERS ETF "
    },
    {
      "symbol": "PID",
      "name": "Invesco International Dividend Achievers ETF"
    },
    {
      "symbol": "PIE",
      "name": "INVESCO DORSEY WRIGHT EMERGING MARKETS MOMENTUM ETF "
    },
    {
      "symbol": "PIFI",
      "name": "CLEARSHARES PITON INTERMEDIATE FIXED INCOME ETF "
    },
    {
      "symbol": "PII",
      "name": "Polaris Inc"
    },
    {
      "symbol": "PIII",
      "name": "P3 Health Partners Inc - Class A"
    },
    {
      "symbol": "PIIIW",
      "name": "P3 Health Partners Inc - Warrants (19/11/2026)"
    },
    {
      "symbol": "PIK",
      "name": "Kidpik Corp"
    },
    {
      "symbol": "PILL",
      "name": "DIREXION DAILY PHARMACEUTICAL & MEDICAL BULL 3X SHARES "
    },
    {
      "symbol": "PIM",
      "name": "Putnam Master Intermediate Income Trust"
    },
    {
      "symbol": "PIN",
      "name": "INVESCO INDIA ETF "
    },
    {
      "symbol": "PINC",
      "name": "Premier Inc - Class A"
    },
    {
      "symbol": "PINE",
      "name": "Alpine Income Property Trust Inc"
    },
    {
      "symbol": "PINK",
      "name": "SIMPLIFY HEALTH CARE ETF "
    },
    {
      "symbol": "PINS",
      "name": "Pinterest Inc - Class A"
    },
    {
      "symbol": "PIO",
      "name": "INVESCO GLOBAL WATER ETF "
    },
    {
      "symbol": "PIPR",
      "name": "Piper Sandler Co`s"
    },
    {
      "symbol": "PIRS",
      "name": "Pieris Pharmaceuticals Inc"
    },
    {
      "symbol": "PIT",
      "name": "VANECK COMMODITY STRATEGY ETF "
    },
    {
      "symbol": "PIXY",
      "name": "ShiftPixy Inc"
    },
    {
      "symbol": "PIZ",
      "name": "INVESCO DORSEY WRIGHT DEVELOPED MARKETS MOMENTUM ETF "
    },
    {
      "symbol": "PJAN",
      "name": "Innovator U.S. Equity Power Buffer ETF - January"
    },
    {
      "symbol": "PJBF",
      "name": "PGIM Jennison Better Future ETF"
    },
    {
      "symbol": "PJFG",
      "name": "PGIM JENNISON FOCUSED GROWTH ETF "
    },
    {
      "symbol": "PJFM",
      "name": "PGIM Jennison Focused Mid-Cap ETF"
    },
    {
      "symbol": "PJFV",
      "name": "PGIM JENNISON FOCUSED VALUE ETF "
    },
    {
      "symbol": "PJIO",
      "name": "PGIM Jennison International Opportunities ETF"
    },
    {
      "symbol": "PJP",
      "name": "Invesco Pharmaceuticals ETF"
    },
    {
      "symbol": "PJT",
      "name": "PJT Partners Inc - Class A"
    },
    {
      "symbol": "PJUL",
      "name": "Innovator U.S. Equity Power Buffer ETF - July"
    },
    {
      "symbol": "PJUN",
      "name": "Innovator U.S. Equity Power Buffer ETF - June"
    },
    {
      "symbol": "PK",
      "name": "Park Hotels & Resorts Inc"
    },
    {
      "symbol": "PKB",
      "name": "Invesco Building & Construction ETF"
    },
    {
      "symbol": "PKBK",
      "name": "Parke Bancorp Inc"
    },
    {
      "symbol": "PKE",
      "name": "Park Aerospace Corp"
    },
    {
      "symbol": "PKG",
      "name": "Packaging Corp Of America"
    },
    {
      "symbol": "PKOH",
      "name": "Park-Ohio Holdings Corp"
    },
    {
      "symbol": "PKST",
      "name": "Peakstone Realty Trust - Class E"
    },
    {
      "symbol": "PKW",
      "name": "Invesco BuyBack Achievers ETF"
    },
    {
      "symbol": "PKX",
      "name": "POSCO Holdings Inc"
    },
    {
      "symbol": "PL",
      "name": "Planet Labs PBC - Class A"
    },
    {
      "symbol": "PL-WS",
      "name": "Planet Labs PBC Wt Exp 06122026"
    },
    {
      "symbol": "PLAB",
      "name": "Photronics Inc"
    },
    {
      "symbol": "PLAG",
      "name": "Planet Green Holdings Corp"
    },
    {
      "symbol": "PLAO",
      "name": "Patria Latin American Opportunity Acquisition Corp - Class A"
    },
    {
      "symbol": "PLAOU",
      "name": "Patria Latin American Opportunity Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PLAOW",
      "name": "Patria Latin American Opportunity Acquisition Corp - Warrants (23/02/2027)"
    },
    {
      "symbol": "PLAY",
      "name": "Dave & Buster`s Entertainment Inc"
    },
    {
      "symbol": "PLBC",
      "name": "Plumas Bancorp."
    },
    {
      "symbol": "PLBY",
      "name": "PLBY Group Inc"
    },
    {
      "symbol": "PLCE",
      "name": "Childrens Place Inc"
    },
    {
      "symbol": "PLD",
      "name": "Prologis Inc"
    },
    {
      "symbol": "PLDR",
      "name": "Putnam Sustainable Leaders ETF"
    },
    {
      "symbol": "PLG",
      "name": "Platinum Group Metals Ltd"
    },
    {
      "symbol": "PLL",
      "name": "Piedmont Lithium Inc"
    },
    {
      "symbol": "PLMI",
      "name": "Plum Acquisition Corp I - Class A"
    },
    {
      "symbol": "PLMIU",
      "name": "Plum Acquisition Corp I - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "PLMIW",
      "name": "Plum Acquisition Corp I - Warrants (15/03/2026)"
    },
    {
      "symbol": "PLMJ",
      "name": "Plum Acquisition Corp III - Class A"
    },
    {
      "symbol": "PLMJU",
      "name": "Plum Acquisition Corp III - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "PLMJW",
      "name": "Plum Acquisition Corp III - Warrants (31/03/2028)"
    },
    {
      "symbol": "PLMR",
      "name": "Palomar Holdings Inc"
    },
    {
      "symbol": "PLNT",
      "name": "Planet Fitness Inc - Class A"
    },
    {
      "symbol": "PLOW",
      "name": "Douglas Dynamics Inc"
    },
    {
      "symbol": "PLPC",
      "name": "Preformed Line Products Company"
    },
    {
      "symbol": "PLRX",
      "name": "Pliant Therapeutics Inc"
    },
    {
      "symbol": "PLSE",
      "name": "Pulse Biosciences Inc"
    },
    {
      "symbol": "PLTK",
      "name": "Playtika Holding Corp"
    },
    {
      "symbol": "PLTM",
      "name": "GraniteShares Platinum Shares"
    },
    {
      "symbol": "PLTN",
      "name": "Plutonian Acquisition Corp"
    },
    {
      "symbol": "PLTNR",
      "name": "Plutonian Acquisition Corp"
    },
    {
      "symbol": "PLTNU",
      "name": "Plutonian Acquisition Corp - Units (1 Ord 1 War & 1 Right)"
    },
    {
      "symbol": "PLTNW",
      "name": "Plutonian Acquisition Corp - Warrants (26/10/2027)"
    },
    {
      "symbol": "PLTR",
      "name": "Palantir Technologies Inc - Class A"
    },
    {
      "symbol": "PLUG",
      "name": "Plug Power Inc"
    },
    {
      "symbol": "PLUR",
      "name": "Pluri Inc"
    },
    {
      "symbol": "PLUS",
      "name": "ePlus Inc"
    },
    {
      "symbol": "PLX",
      "name": "Protalix BioTherapeutics Inc"
    },
    {
      "symbol": "PLXS",
      "name": "Plexus Corp"
    },
    {
      "symbol": "PLYA",
      "name": "Playa Hotels & Resorts N.V."
    },
    {
      "symbol": "PLYM",
      "name": "Plymouth Industrial Reit Inc"
    },
    {
      "symbol": "PM",
      "name": "Philip Morris International Inc"
    },
    {
      "symbol": "PMAR",
      "name": "Innovator U.S. Equity Power Buffer ETF - March"
    },
    {
      "symbol": "PMAY",
      "name": "Innovator U.S. Equity Power Buffer ETF - May"
    },
    {
      "symbol": "PMCB",
      "name": "PharmaCyte Biotech Inc"
    },
    {
      "symbol": "PMD",
      "name": "Psychemedics Corp"
    },
    {
      "symbol": "PMEC",
      "name": "Primech Holdings Ltd"
    },
    {
      "symbol": "PMF",
      "name": "Pimco Municipal Income Fund"
    },
    {
      "symbol": "PMGM",
      "name": "Priveterra Acquisition Corp II - Class A"
    },
    {
      "symbol": "PMGMU",
      "name": "Priveterra Acquisition Corp II - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "PMGMW",
      "name": "Priveterra Acquisition Corp II - Warrants (02/12/2025)"
    },
    {
      "symbol": "PML",
      "name": "Pimco Municipal Income Fund II"
    },
    {
      "symbol": "PMM",
      "name": "Putnam Managed Municipal Income Trust."
    },
    {
      "symbol": "PMN",
      "name": "ProMIS Neurosciences Inc"
    },
    {
      "symbol": "PMNT",
      "name": "Perfect Moment Ltd"
    },
    {
      "symbol": "PMO",
      "name": "Putnam Municipal Opportunities Trust"
    },
    {
      "symbol": "PMT",
      "name": "Pennymac Mortgage Investment Trust"
    },
    {
      "symbol": "PMT-P-A",
      "name": "Pennymac Mortgage Investment Trust"
    },
    {
      "symbol": "PMT-P-B",
      "name": "Pennymac Mortgage Investment Trust"
    },
    {
      "symbol": "PMT-P-C",
      "name": "Pennymac Mortgage Investment Trust"
    },
    {
      "symbol": "PMTS",
      "name": "CPI Card Group Inc"
    },
    {
      "symbol": "PMTU",
      "name": "Pennymac Mortgage Investment Trust"
    },
    {
      "symbol": "PMVP",
      "name": "PMV Pharmaceuticals Inc"
    },
    {
      "symbol": "PMX",
      "name": "Pimco Municipal Income Fund III"
    },
    {
      "symbol": "PNBK",
      "name": "Patriot National Bancorp Inc"
    },
    {
      "symbol": "PNC",
      "name": "PNC Financial Services Group Inc"
    },
    {
      "symbol": "PNF",
      "name": "Pimco New York Municipal Income Fund"
    },
    {
      "symbol": "PNFP",
      "name": "Pinnacle Financial Partners Inc"
    },
    {
      "symbol": "PNFPP",
      "name": "Pinnacle Financial Partners Inc"
    },
    {
      "symbol": "PNI",
      "name": "Pimco New York Municipal Income Fund II"
    },
    {
      "symbol": "PNM",
      "name": "PNM Resources Inc"
    },
    {
      "symbol": "PNNT",
      "name": "PennantPark Investment Corporation"
    },
    {
      "symbol": "PNOV",
      "name": "Innovator U.S. Equity Power Buffer ETF - November"
    },
    {
      "symbol": "PNQI",
      "name": "Invesco NASDAQ Internet ETF"
    },
    {
      "symbol": "PNR",
      "name": "Pentair plc"
    },
    {
      "symbol": "PNRG",
      "name": "PrimeEnergy Resources Corp"
    },
    {
      "symbol": "PNST",
      "name": "Pinstripes Holdings Inc - Class A"
    },
    {
      "symbol": "PNST-WS",
      "name": "Pinstripes Holdings Inc Warrants"
    },
    {
      "symbol": "PNSTWS",
      "name": "Pinstripes Holdings Inc - Warrants (30/09/2028)"
    },
    {
      "symbol": "PNTG",
      "name": "Pennant Group Inc"
    },
    {
      "symbol": "PNW",
      "name": "Pinnacle West Capital Corp"
    },
    {
      "symbol": "POAI",
      "name": "Predictive Oncology Inc"
    },
    {
      "symbol": "POCI",
      "name": "Precision Optics Corp Inc"
    },
    {
      "symbol": "POCT",
      "name": "Innovator U.S. Equity Power Buffer ETF - October"
    },
    {
      "symbol": "PODC",
      "name": "PodcastOne Inc"
    },
    {
      "symbol": "PODD",
      "name": "Insulet Corporation"
    },
    {
      "symbol": "POET",
      "name": "POET Technologies Inc"
    },
    {
      "symbol": "POLA",
      "name": "Polar Power Inc"
    },
    {
      "symbol": "PONOU",
      "name": "PONO Capital Corp - Units (1 Ord Share Class A & 3/4 War)"
    },
    {
      "symbol": "POOL",
      "name": "Pool Corporation"
    },
    {
      "symbol": "POR",
      "name": "Portland General Electric Company"
    },
    {
      "symbol": "POST",
      "name": "Post Holdings Inc"
    },
    {
      "symbol": "POWA",
      "name": "INVESCO BLOOMBERG PRICING POWER ETF "
    },
    {
      "symbol": "POWI",
      "name": "Power Integrations Inc"
    },
    {
      "symbol": "POWL",
      "name": "Powell Industries Inc"
    },
    {
      "symbol": "POWW",
      "name": "AMMO Inc"
    },
    {
      "symbol": "POWWP",
      "name": "AMMO Inc"
    },
    {
      "symbol": "PP",
      "name": "THE MEET KEVIN PRICING POWER ETF "
    },
    {
      "symbol": "PPA",
      "name": "Invesco Aerospace & Defense ETF"
    },
    {
      "symbol": "PPBI",
      "name": "Pacific Premier Bancorp Inc"
    },
    {
      "symbol": "PPBT",
      "name": "Purple Biotech Ltd"
    },
    {
      "symbol": "PPC",
      "name": "Pilgrim`s Pride Corp"
    },
    {
      "symbol": "PPEM",
      "name": "Putnam PanAgora ESG Emerging Markets Equity ETF"
    },
    {
      "symbol": "PPG",
      "name": "PPG Industries Inc"
    },
    {
      "symbol": "PPH",
      "name": "VanEck Pharmaceutical ETF"
    },
    {
      "symbol": "PPHP",
      "name": "PHP Ventures Acquisition Corp - Class A"
    },
    {
      "symbol": "PPHPR",
      "name": "PHP Ventures Acquisition Corp"
    },
    {
      "symbol": "PPHPU",
      "name": "PHP Ventures Acquisition Corp - Units (1 Ord Class A & 1/2 War & 1 Right)"
    },
    {
      "symbol": "PPHPW",
      "name": "PHP Ventures Acquisition Corp - Warrants (01/01/2023)"
    },
    {
      "symbol": "PPI",
      "name": "AXS Astoria Inflation Sensitive ETF"
    },
    {
      "symbol": "PPIE",
      "name": "Putnam PanAgora ESG International Equity ETF"
    },
    {
      "symbol": "PPIH",
      "name": "Perma-Pipe International Holdings Inc"
    },
    {
      "symbol": "PPL",
      "name": "PPL Corp"
    },
    {
      "symbol": "PPLT",
      "name": "abrdn Physical Platinum Shares ETF"
    },
    {
      "symbol": "PPSI",
      "name": "Pioneer Power Solutions Inc"
    },
    {
      "symbol": "PPT",
      "name": "Putnam Premier Income Trust"
    },
    {
      "symbol": "PPTA",
      "name": "Perpetua Resources Corp Com"
    },
    {
      "symbol": "PPTY",
      "name": "U.S. Diversified Real Estate ETF"
    },
    {
      "symbol": "PPYA",
      "name": "Papaya Growth Opportunity Corp I - Class A"
    },
    {
      "symbol": "PPYAU",
      "name": "Papaya Growth Opportunity Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "PPYAW",
      "name": "Papaya Growth Opportunity Corp I - Warrants (31/12/2028)"
    },
    {
      "symbol": "PQDI",
      "name": "PRINCIPAL SPECTRUM TAX-ADVANTAGED DIVIDEND ACTIVE ETF "
    },
    {
      "symbol": "PR",
      "name": "Permian Resources Corp - Class A"
    },
    {
      "symbol": "PRA",
      "name": "Proassurance Corporation"
    },
    {
      "symbol": "PRAA",
      "name": "PRA Group Inc"
    },
    {
      "symbol": "PRAE",
      "name": "PlanRock Alternative Growth ETF"
    },
    {
      "symbol": "PRAX",
      "name": "Praxis Precision Medicines Inc"
    },
    {
      "symbol": "PRAY",
      "name": "FIS Christian Stock Fund"
    },
    {
      "symbol": "PRCH",
      "name": "Porch Group Inc - Class A"
    },
    {
      "symbol": "PRCT",
      "name": "Procept BioRobotics Corp"
    },
    {
      "symbol": "PRDO",
      "name": "Perdoceo Education Corporation"
    },
    {
      "symbol": "PRDS",
      "name": "Pardes Biosciences Inc"
    },
    {
      "symbol": "PRE",
      "name": "Prenetics Global Ltd - Class A"
    },
    {
      "symbol": "PRE-P-J",
      "name": "PartnerRe Ltd 4.875 Fixed Rate NonCumulative Redeemable Preferred Shares Series J"
    },
    {
      "symbol": "PREF",
      "name": "Principal Spectrum Preferred Securities Active ETF"
    },
    {
      "symbol": "PRENW",
      "name": "Prenetics Global Ltd - Warrants(17/05/2027)"
    },
    {
      "symbol": "PRF",
      "name": "Invesco FTSE RAFI US 1000 ETF"
    },
    {
      "symbol": "PRFD",
      "name": "PIMCO PREFERRED AND CAPITAL SECURITIES ACTIVE EXCHANGE-TRADED FUND "
    },
    {
      "symbol": "PRFT",
      "name": "Perficient Inc"
    },
    {
      "symbol": "PRFX",
      "name": "PainReform Ltd"
    },
    {
      "symbol": "PRFZ",
      "name": "Invesco FTSE RAFI US 1500 Small-Mid ETF"
    },
    {
      "symbol": "PRG",
      "name": "PROG Holdings Inc"
    },
    {
      "symbol": "PRGO",
      "name": "Perrigo Company plc"
    },
    {
      "symbol": "PRGS",
      "name": "Progress Software Corp"
    },
    {
      "symbol": "PRH",
      "name": "Prudential Financial Inc"
    },
    {
      "symbol": "PRI",
      "name": "Primerica Inc"
    },
    {
      "symbol": "PRIF-P-D",
      "name": "Priority Income Fund Inc 700 Series D Term Preferred Stock due 2029"
    },
    {
      "symbol": "PRIF-P-F",
      "name": "Priority Income Fund Inc 6.625% Series F"
    },
    {
      "symbol": "PRIF-P-G",
      "name": "Priority Income Fund Inc"
    },
    {
      "symbol": "PRIF-P-H",
      "name": "Priority Income Fund Inc"
    },
    {
      "symbol": "PRIF-P-I",
      "name": "Priority Income Fund Inc"
    },
    {
      "symbol": "PRIF-P-J",
      "name": "Priority Income Fund Inc"
    },
    {
      "symbol": "PRIF-P-K",
      "name": "Priority Income Fund Inc"
    },
    {
      "symbol": "PRIF-P-L",
      "name": "Priority Income Fund Inc 6.375 Series L Term Preferred Stock Due 2029"
    },
    {
      "symbol": "PRIM",
      "name": "Primoris Services Corp"
    },
    {
      "symbol": "PRK",
      "name": "Park National Corp"
    },
    {
      "symbol": "PRKS",
      "name": "SeaWorld Entertainment Inc"
    },
    {
      "symbol": "PRLB",
      "name": "Proto Labs Inc"
    },
    {
      "symbol": "PRLD",
      "name": "Prelude Therapeutics Inc"
    },
    {
      "symbol": "PRLH",
      "name": "Pearl Holdings Acquisition Corp - Class A"
    },
    {
      "symbol": "PRLHU",
      "name": "Pearl Holdings Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PRLHW",
      "name": "Pearl Holdings Acquisition Corp - Warrants (15/12/2026)"
    },
    {
      "symbol": "PRM",
      "name": "Perimeter Solutions SA"
    },
    {
      "symbol": "PRME",
      "name": "Prime Medicine Inc"
    },
    {
      "symbol": "PRMN",
      "name": "PlanRock Market Neutral Income ETF"
    },
    {
      "symbol": "PRMW",
      "name": "Primo Water Corporation"
    },
    {
      "symbol": "PRN",
      "name": "Invesco Dorsey Wright Industrials Momentum ETF"
    },
    {
      "symbol": "PRNT",
      "name": "THE 3D PRINTING ETF "
    },
    {
      "symbol": "PRO",
      "name": "Pros Holdings Inc"
    },
    {
      "symbol": "PROC",
      "name": "Procaps Group S.A"
    },
    {
      "symbol": "PROCW",
      "name": "Procaps Group S.A - Warrants (29/09/2026)"
    },
    {
      "symbol": "PROF",
      "name": "Profound Medical Corp"
    },
    {
      "symbol": "PROK",
      "name": "ProKidney Corp - Class A"
    },
    {
      "symbol": "PROV",
      "name": "Provident Financial Holdings Inc"
    },
    {
      "symbol": "PRPH",
      "name": "ProPhase Labs Inc"
    },
    {
      "symbol": "PRPL",
      "name": "Purple Innovation Inc - Class A"
    },
    {
      "symbol": "PRPO",
      "name": "Precipio Inc"
    },
    {
      "symbol": "PRQR",
      "name": "ProQR Therapeutics N.V"
    },
    {
      "symbol": "PRSO",
      "name": "Peraso Inc"
    },
    {
      "symbol": "PRST",
      "name": "Presto Automation Inc"
    },
    {
      "symbol": "PRSTW",
      "name": "Presto Automation Inc - Warrants (21/09/2027)"
    },
    {
      "symbol": "PRT",
      "name": "PermRock Royalty Trust"
    },
    {
      "symbol": "PRTA",
      "name": "Prothena Corporation plc"
    },
    {
      "symbol": "PRTC",
      "name": "PureTech Health Plc"
    },
    {
      "symbol": "PRTG",
      "name": "Portage Biotech Inc"
    },
    {
      "symbol": "PRTH",
      "name": "Priority Technology Holdings Inc"
    },
    {
      "symbol": "PRTS",
      "name": "CarParts.com Inc"
    },
    {
      "symbol": "PRU",
      "name": "Prudential Financial Inc"
    },
    {
      "symbol": "PRVA",
      "name": "Privia Health Group Inc"
    },
    {
      "symbol": "PRZO",
      "name": "ParaZero Technologies Ltd"
    },
    {
      "symbol": "PSA",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-F",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-G",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-H",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-I",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-J",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-K",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-L",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-M",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-N",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-O",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-P",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-Q",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-R",
      "name": "Public Storage."
    },
    {
      "symbol": "PSA-P-S",
      "name": "Public Storage."
    },
    {
      "symbol": "PSBD",
      "name": "Palmer Square Capital BDC Inc"
    },
    {
      "symbol": "PSC",
      "name": "Principal U.S. Small-Cap ETF"
    },
    {
      "symbol": "PSCC",
      "name": "INVESCO S&P SMALLCAP CONSUMER STAPLES ETF "
    },
    {
      "symbol": "PSCD",
      "name": "INVESCO S&P SMALLCAP CONSUMER DISCRETIONARY ETF "
    },
    {
      "symbol": "PSCE",
      "name": "INVESCO S&P SMALLCAP ENERGY ETF "
    },
    {
      "symbol": "PSCF",
      "name": "INVESCO S&P SMALLCAP FINANCIALS ETF "
    },
    {
      "symbol": "PSCH",
      "name": "INVESCO S&P SMALLCAP HEALTH CARE ETF "
    },
    {
      "symbol": "PSCI",
      "name": "INVESCO S&P SMALLCAP INDUSTRIALS ETF "
    },
    {
      "symbol": "PSCJ",
      "name": "PACER SWAN SOS CONSERVATIVE (JULY) ETF "
    },
    {
      "symbol": "PSCM",
      "name": "INVESCO S&P SMALLCAP MATERIALS ETF "
    },
    {
      "symbol": "PSCQ",
      "name": "PACER SWAN SOS CONSERVATIVE (OCTOBER) ETF "
    },
    {
      "symbol": "PSCT",
      "name": "INVESCO S&P SMALLCAP INFORMATION TECHNOLOGY ETF "
    },
    {
      "symbol": "PSCU",
      "name": "INVESCO S&P SMALLCAP UTILITIES & COMMUNICATION SERVICES ETF "
    },
    {
      "symbol": "PSCW",
      "name": "PACER SWAN SOS CONSERVATIVE (APRIL) ETF "
    },
    {
      "symbol": "PSCX",
      "name": "PACER SWAN SOS CONSERVATIVE (JANUARY) ETF "
    },
    {
      "symbol": "PSDM",
      "name": "PGIM SHORT DURATION MULTI-SECTOR BOND ETF "
    },
    {
      "symbol": "PSEC",
      "name": "Prospect Capital Corp"
    },
    {
      "symbol": "PSEC-P-A",
      "name": "Prospect Capital Corp"
    },
    {
      "symbol": "PSEP",
      "name": "Innovator U.S. Equity Power Buffer ETF - September"
    },
    {
      "symbol": "PSET",
      "name": "Principal Quality ETF"
    },
    {
      "symbol": "PSF",
      "name": "Cohen & Steers Select Preferred and Income Fund Inc"
    },
    {
      "symbol": "PSFD",
      "name": "PACER SWAN SOS FLEX (JANUARY) ETF "
    },
    {
      "symbol": "PSFE",
      "name": "Paysafe Ltd - Class A"
    },
    {
      "symbol": "PSFE-WS",
      "name": "Paysafe Ltd - Warrants (11/08/2025)"
    },
    {
      "symbol": "PSFF",
      "name": "PACER SWAN SOS FUND OF FUNDS ETF "
    },
    {
      "symbol": "PSFJ",
      "name": "PACER SWAN SOS FLEX (JULY) ETF "
    },
    {
      "symbol": "PSFM",
      "name": "PACER SWAN SOS FLEX (APRIL) ETF "
    },
    {
      "symbol": "PSFO",
      "name": "PACER SWAN SOS FLEX (OCTOBER) ETF "
    },
    {
      "symbol": "PSH",
      "name": "PGIM Short Duration High Yield ETF"
    },
    {
      "symbol": "PSHG",
      "name": "Performance Shipping Inc"
    },
    {
      "symbol": "PSI",
      "name": "Invesco Semiconductors ETF"
    },
    {
      "symbol": "PSIL",
      "name": "ADVISORSHARES PSYCHEDELICS ETF "
    },
    {
      "symbol": "PSK",
      "name": "SPDR ICE Preferred Securities ETF"
    },
    {
      "symbol": "PSL",
      "name": "Invesco Dorsey Wright Consumer Staples Momentum ETF"
    },
    {
      "symbol": "PSLV",
      "name": "Sprott Physical Silver Trust"
    },
    {
      "symbol": "PSMD",
      "name": "PACER SWAN SOS MODERATE (JANUARY) ETF "
    },
    {
      "symbol": "PSMJ",
      "name": "PACER SWAN SOS MODERATE (JULY) ETF "
    },
    {
      "symbol": "PSMO",
      "name": "PACER SWAN SOS MODERATE (OCTOBER) ETF "
    },
    {
      "symbol": "PSMR",
      "name": "PACER SWAN SOS MODERATE (APRIL) ETF "
    },
    {
      "symbol": "PSMT",
      "name": "Pricesmart Inc"
    },
    {
      "symbol": "PSN",
      "name": "Parsons Corp"
    },
    {
      "symbol": "PSNL",
      "name": "Personalis Inc"
    },
    {
      "symbol": "PSNY",
      "name": "Polestar Automotive Holding UK PLC"
    },
    {
      "symbol": "PSNYW",
      "name": "Polestar Automotive Holding UK PLC"
    },
    {
      "symbol": "PSO",
      "name": "Pearson plc"
    },
    {
      "symbol": "PSP",
      "name": "Invesco Global Listed Private Equity ETF"
    },
    {
      "symbol": "PSQ",
      "name": "ProShares Short QQQ -1x Shares"
    },
    {
      "symbol": "PSQH",
      "name": "PSQ Holdings Inc - Class A"
    },
    {
      "symbol": "PSQH-WS",
      "name": "PSQ Holdings Inc - Warrants (01/01/9999)"
    },
    {
      "symbol": "PSR",
      "name": "INVESCO ACTIVE U.S. REAL ESTATE ETF "
    },
    {
      "symbol": "PST",
      "name": "PowerShares UltraShort Lehman 7-10 + Year Treasury ProShares -2X Sh"
    },
    {
      "symbol": "PSTG",
      "name": "Pure Storage Inc - Class A"
    },
    {
      "symbol": "PSTL",
      "name": "Postal Realty Trust Inc Cls A"
    },
    {
      "symbol": "PSTP",
      "name": "Innovator Power Buffer Step-Up Strategy ETF"
    },
    {
      "symbol": "PSTR",
      "name": "PeakShares Sector Rotation ETF"
    },
    {
      "symbol": "PSTV",
      "name": "Plus Therapeutics Inc"
    },
    {
      "symbol": "PSTX",
      "name": "Poseida Therapeutics Inc"
    },
    {
      "symbol": "PSWD",
      "name": "Xtrackers Cybersecurity Select Equity ETF"
    },
    {
      "symbol": "PSX",
      "name": "Phillips 66"
    },
    {
      "symbol": "PT",
      "name": "Pintec Technology Holdings Ltd"
    },
    {
      "symbol": "PTA",
      "name": "Cohen & Steers Tax-Advantaged Preferred Securities & Income Fund"
    },
    {
      "symbol": "PTBD",
      "name": "Pacer Trendpilot US Bond ETF"
    },
    {
      "symbol": "PTC",
      "name": "PTC Inc"
    },
    {
      "symbol": "PTCT",
      "name": "PTC Therapeutics Inc"
    },
    {
      "symbol": "PTEC",
      "name": "GLOBAL X PROPTECH ETF "
    },
    {
      "symbol": "PTEN",
      "name": "Patterson-UTI Energy Inc"
    },
    {
      "symbol": "PTEST",
      "name": "PTEST"
    },
    {
      "symbol": "PTEST-A"
    },
    {
      "symbol": "PTEST-W"
    },
    {
      "symbol": "PTEST-X"
    },
    {
      "symbol": "PTEST-Y"
    },
    {
      "symbol": "PTEU",
      "name": "Pacer TrendpilotTM European Index ETF"
    },
    {
      "symbol": "PTF",
      "name": "Invesco Dorsey Wright Technology Momentum ETF"
    },
    {
      "symbol": "PTGX",
      "name": "Protagonist Therapeutics Inc"
    },
    {
      "symbol": "PTH",
      "name": "Invesco Dorsey Wright Healthcare Momentum ETF"
    },
    {
      "symbol": "PTHR",
      "name": "Pono Capital Three Inc - Class A"
    },
    {
      "symbol": "PTHRW",
      "name": "Pono Capital Three Inc - Warrants (11/01/2028)"
    },
    {
      "symbol": "PTIN",
      "name": "Pacer Trendpilot International ETF"
    },
    {
      "symbol": "PTIX",
      "name": "Protagenic Therapeutics Inc"
    },
    {
      "symbol": "PTIXW",
      "name": "Protagenic Therapeutics Inc - Warrants (13/04/2025)"
    },
    {
      "symbol": "PTL",
      "name": "Inspire 500 ETF"
    },
    {
      "symbol": "PTLC",
      "name": "Pacer Trendpilot US Large Cap ETF"
    },
    {
      "symbol": "PTLO",
      "name": "Portillos Inc - Class A"
    },
    {
      "symbol": "PTMC",
      "name": "Pacer Trendpilot US Mid Cap ETF"
    },
    {
      "symbol": "PTMN",
      "name": "Portman Ridge Finance Corp"
    },
    {
      "symbol": "PTN",
      "name": "Palatin Technologies Inc"
    },
    {
      "symbol": "PTNQ",
      "name": "Pacer Trendpilot 100 ETF"
    },
    {
      "symbol": "PTON",
      "name": "Peloton Interactive Inc - Class A"
    },
    {
      "symbol": "PTPI",
      "name": "Petros Pharmaceuticals Inc"
    },
    {
      "symbol": "PTRB",
      "name": "PGIM TOTAL RETURN BOND ETF "
    },
    {
      "symbol": "PTSI",
      "name": "P.A.M. Transportation Services Inc"
    },
    {
      "symbol": "PTVE",
      "name": "Pactiv Evergreen Inc"
    },
    {
      "symbol": "PTWO",
      "name": "Pono Capital Two Inc - Class A"
    },
    {
      "symbol": "PTWOU",
      "name": "Pono Capital Two Inc - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "PTWOW",
      "name": "Pono Capital Two Inc - Warrants (31/07/2027)"
    },
    {
      "symbol": "PTY",
      "name": "PIMCO Corporate & Income Opportunity Fund"
    },
    {
      "symbol": "PUBM",
      "name": "PubMatic Inc - Class A"
    },
    {
      "symbol": "PUCK",
      "name": "Goal Acquisitions Corp"
    },
    {
      "symbol": "PUCKU",
      "name": "Goal Acquisitions Corp - Units (1 Ord & 1 War)"
    },
    {
      "symbol": "PUCKW",
      "name": "Goal Acquisitions Corp - Warrants (11/02/2026)"
    },
    {
      "symbol": "PUI",
      "name": "Invesco Dorsey Wright Utilities Momentum ETF"
    },
    {
      "symbol": "PUK",
      "name": "Prudential plc"
    },
    {
      "symbol": "PULM",
      "name": "Pulmatrix Inc"
    },
    {
      "symbol": "PULS",
      "name": "PGIM Ultra Short Bond ETF"
    },
    {
      "symbol": "PULT",
      "name": "Putnam ESG Ultra Short ETF"
    },
    {
      "symbol": "PUMP",
      "name": "ProPetro Holding Corp"
    },
    {
      "symbol": "PUTD",
      "name": "Cboe Validus S&P 500 Dynamic PutWrite Index ETF"
    },
    {
      "symbol": "PUTW",
      "name": "WISDOMTREE PUTWRITE STRATEGY FUND "
    },
    {
      "symbol": "PVAL",
      "name": "Putnam Focused Large Cap Value ETF"
    },
    {
      "symbol": "PVBC",
      "name": "Provident Bancorp Inc"
    },
    {
      "symbol": "PVH",
      "name": "PVH Corp"
    },
    {
      "symbol": "PVI",
      "name": "INVESCO FLOATING RATE MUNICIPAL INCOME ETF "
    },
    {
      "symbol": "PVL",
      "name": "Permianville Royalty Trust"
    },
    {
      "symbol": "PW",
      "name": "Power REIT"
    },
    {
      "symbol": "PW-P-A",
      "name": "Power REIT"
    },
    {
      "symbol": "PWB",
      "name": "Invesco Large Cap Growth ETF"
    },
    {
      "symbol": "PWER",
      "name": "Power One Inc"
    },
    {
      "symbol": "PWFL",
      "name": "PowerFleet Inc"
    },
    {
      "symbol": "PWM",
      "name": "Prestige Wealth Inc"
    },
    {
      "symbol": "PWOD",
      "name": "Penns Woods Bancorp Inc"
    },
    {
      "symbol": "PWP",
      "name": "Perella Weinberg Partners - Class A"
    },
    {
      "symbol": "PWR",
      "name": "Quanta Services Inc"
    },
    {
      "symbol": "PWS",
      "name": "Pacer WealthShield ETF"
    },
    {
      "symbol": "PWSC",
      "name": "PowerSchool Holdings Inc Class A"
    },
    {
      "symbol": "PWUP",
      "name": "PowerUp Acquisition Corp - Class A"
    },
    {
      "symbol": "PWUPU",
      "name": "PowerUp Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "PWUPW",
      "name": "PowerUp Acquisition Corp - Warrants (31/03/2028)"
    },
    {
      "symbol": "PWV",
      "name": "Invesco Large Cap Value ETF"
    },
    {
      "symbol": "PWZ",
      "name": "INVESCO CALIFORNIA AMT-FREE MUNICIPAL BOND ETF "
    },
    {
      "symbol": "PX",
      "name": "P10 Inc - Class A"
    },
    {
      "symbol": "PXD",
      "name": "Pioneer Natural Resources Company"
    },
    {
      "symbol": "PXDT",
      "name": "Pixie Dust Technologies Inc"
    },
    {
      "symbol": "PXE",
      "name": "Invesco Energy Exploration & Production ETF"
    },
    {
      "symbol": "PXF",
      "name": "INVESCO FTSE RAFI DEVELOPED MARKETS EX-U.S. ETF "
    },
    {
      "symbol": "PXH",
      "name": "INVESCO FTSE RAFI EMERGING MARKETS ETF "
    },
    {
      "symbol": "PXI",
      "name": "Invesco Dorsey Wright Energy Momentum ETF"
    },
    {
      "symbol": "PXJ",
      "name": "Invesco Oil & Gas Services ETF"
    },
    {
      "symbol": "PXLW",
      "name": "Pixelworks Inc"
    },
    {
      "symbol": "PXMD",
      "name": "PaxMedica Inc"
    },
    {
      "symbol": "PXS",
      "name": "Pyxis Tankers Inc"
    },
    {
      "symbol": "PXSAP",
      "name": "Pyxis Tankers Inc"
    },
    {
      "symbol": "PXSAW",
      "name": "Pyxis Tankers Inc - Warrants (19/08/2025)"
    },
    {
      "symbol": "PY",
      "name": "PRINCIPAL VALUE ETF "
    },
    {
      "symbol": "PYCR",
      "name": "Paycor HCM Inc"
    },
    {
      "symbol": "PYLD",
      "name": "PIMCO Multisector Bond Active Exchange-Traded Fund"
    },
    {
      "symbol": "PYN",
      "name": "Pimco New York Municipal Income Fund III"
    },
    {
      "symbol": "PYPD",
      "name": "Polypid Ltd"
    },
    {
      "symbol": "PYPL",
      "name": "PayPal Holdings Inc"
    },
    {
      "symbol": "PYPS",
      "name": "AXS 1.5X PYPL Bear Daily ETF"
    },
    {
      "symbol": "PYPT",
      "name": "AXS 1.5X PYPL Bull Daily ETF"
    },
    {
      "symbol": "PYPY",
      "name": "YieldMax PYPL Option Income Strategy ETF"
    },
    {
      "symbol": "PYR",
      "name": "PyroGenesis Canada Inc"
    },
    {
      "symbol": "PYT",
      "name": "PPLUS Trust Series GSC-2"
    },
    {
      "symbol": "PYXS",
      "name": "Pyxis Oncology Inc"
    },
    {
      "symbol": "PYZ",
      "name": "Invesco Dorsey Wright Basic Materials Momentum ETF"
    },
    {
      "symbol": "PZA",
      "name": "INVESCO NATIONAL AMT-FREE MUNICIPAL BOND ETF "
    },
    {
      "symbol": "PZC",
      "name": "Pimco California Municipal Income Fund III"
    },
    {
      "symbol": "PZG",
      "name": "Paramount Gold Nevada Corp"
    },
    {
      "symbol": "PZT",
      "name": "INVESCO NEW YORK AMT-FREE MUNICIPAL BOND ETF "
    },
    {
      "symbol": "PZZA",
      "name": "Papa John`s International Inc"
    },
    {
      "symbol": "QABA",
      "name": "FIRST TRUST NASDAQ ABA COMMUNITY BANK INDEX FUND "
    },
    {
      "symbol": "QAI",
      "name": "IQ Hedge Multi-Strategy Tracker ETF"
    },
    {
      "symbol": "QARP",
      "name": "XTRACKERS RUSSELL 1000 US QUALITY AT A REASONABLE PRICE ETF "
    },
    {
      "symbol": "QAT",
      "name": "ISHARES MSCI QATAR ETF "
    },
    {
      "symbol": "QBTS",
      "name": "D-Wave Quantum Inc"
    },
    {
      "symbol": "QBTS-WS",
      "name": "D-Wave Quantum Inc - Warrants (13/10/2027)"
    },
    {
      "symbol": "QCAP",
      "name": "FT Vest Nasdaq-100 Conservative Buffer ETF - April"
    },
    {
      "symbol": "QCLN",
      "name": "FIRST TRUST NASDAQ CLEAN EDGE GREEN ENERGY INDEX FUND "
    },
    {
      "symbol": "QCLR",
      "name": "GLOBAL X NASDAQ 100 COLLAR 95-110 ETF "
    },
    {
      "symbol": "QCOM",
      "name": "Qualcomm Inc"
    },
    {
      "symbol": "QCON",
      "name": "AMERICAN CENTURY QUALITY CONVERTIBLE SECURITIES ETF "
    },
    {
      "symbol": "QCRH",
      "name": "QCR Holding Inc"
    },
    {
      "symbol": "QD",
      "name": "Qudian Inc"
    },
    {
      "symbol": "QDEC",
      "name": "FT VEST NASDAQ-100 BUFFER ETF - DECEMBER "
    },
    {
      "symbol": "QDEF",
      "name": "FLEXSHARES QUALITY DIVIDEND DEFENSIVE INDEX FUND "
    },
    {
      "symbol": "QDEL",
      "name": "QuidelOrtho Corporation"
    },
    {
      "symbol": "QDF",
      "name": "FLEXSHARES QUALITY DIVIDEND INDEX FUND "
    },
    {
      "symbol": "QDIV",
      "name": "GLOBAL X S&P 500 QUALITY DIVIDEND ETF "
    },
    {
      "symbol": "QDPL",
      "name": "PACER METAURUS US LARGE CAP DIVIDEND MULTIPLIER 400 ETF "
    },
    {
      "symbol": "QDRO",
      "name": "Quadro Acquisition One Corp - Class A"
    },
    {
      "symbol": "QDROU",
      "name": "Quadro Acquisition One Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "QDROW",
      "name": "Quadro Acquisition One Corp - Warrants (10/02/2026)"
    },
    {
      "symbol": "QDTE",
      "name": "Roundhill N-100 0DTE Covered Call Strategy ETF"
    },
    {
      "symbol": "QDYN",
      "name": "FlexShares Quality Dividend Dynamic Index Fund"
    },
    {
      "symbol": "QEFA",
      "name": "SPDR MSCI EAFE STRATEGICFACTORS ETF "
    },
    {
      "symbol": "QEMM",
      "name": "SPDR MSCI EMERGING MARKETS STRATEGICFACTORS ETF "
    },
    {
      "symbol": "QETA",
      "name": "Quetta Acquisition Corp"
    },
    {
      "symbol": "QETAR",
      "name": "Quetta Acquisition Corp"
    },
    {
      "symbol": "QETAU",
      "name": "Quetta Acquisition Corp - Units (1 1 Rights)"
    },
    {
      "symbol": "QFIN",
      "name": "360 DigiTech Inc"
    },
    {
      "symbol": "QFLR",
      "name": "Innovator Nasdaq-100 Managed Floor ETF"
    },
    {
      "symbol": "QGEN",
      "name": "Qiagen NV"
    },
    {
      "symbol": "QGRO",
      "name": "AMERICAN CENTURY U.S. QUALITY GROWTH ETF "
    },
    {
      "symbol": "QGRW",
      "name": "WisdomTree U.S. Quality Growth Fund"
    },
    {
      "symbol": "QH",
      "name": "Quhuo Ltd"
    },
    {
      "symbol": "QID",
      "name": "ProShares UltraShort QQQ -2x Shares"
    },
    {
      "symbol": "QINT",
      "name": "AMERICAN CENTURY QUALITY DIVERSIFIED INTERNATIONAL ETF "
    },
    {
      "symbol": "QIPT",
      "name": "Quipt Home Medical Corp"
    },
    {
      "symbol": "QIS",
      "name": "Simplify Multi-QIS Alternative ETF"
    },
    {
      "symbol": "QIWI",
      "name": "QIWI plc"
    },
    {
      "symbol": "QJUN",
      "name": "FT VEST NASDAQ-100 BUFFER ETF - JUNE "
    },
    {
      "symbol": "QLC",
      "name": "FLEXSHARES US QUALITY LARGE CAP INDEX FUND "
    },
    {
      "symbol": "QLD",
      "name": "ProShares Ultra QQQ 2x Shares"
    },
    {
      "symbol": "QLGN",
      "name": "Qualigen Therapeutics Inc"
    },
    {
      "symbol": "QLI",
      "name": "Qilian International Holding Group Ltd"
    },
    {
      "symbol": "QLTA",
      "name": "ISHARES AAA - A RATED CORPORATE BOND ETF "
    },
    {
      "symbol": "QLTY",
      "name": "GMO US Quality ETF"
    },
    {
      "symbol": "QLV",
      "name": "FLEXSHARES US QUALITY LOW VOLATILITY INDEX FUND "
    },
    {
      "symbol": "QLVD",
      "name": "FLEXSHARES DEVELOPED MARKETS EX-US QUALITY LOW VOLATILITY INDEX FUND "
    },
    {
      "symbol": "QLVE",
      "name": "FLEXSHARES EMERGING MARKETS QUALITY LOW VOLATILITY INDEX FUND "
    },
    {
      "symbol": "QLYS",
      "name": "Qualys Inc"
    },
    {
      "symbol": "QMAR",
      "name": "FT VEST NASDAQ-100 BUFFER ETF - MARCH "
    },
    {
      "symbol": "QMCO",
      "name": "Quantum Corp"
    },
    {
      "symbol": "QMID",
      "name": "WisdomTree U.S. MidCap Quality Growth Fund"
    },
    {
      "symbol": "QMOM",
      "name": "ALPHA ARCHITECT U.S. QUANTITATIVE MOMENTUM ETF "
    },
    {
      "symbol": "QNCX",
      "name": "Quince Therapeutics Inc"
    },
    {
      "symbol": "QNRX",
      "name": "Quoin Pharmaceuticals Ltd"
    },
    {
      "symbol": "QNST",
      "name": "QuinStreet Inc"
    },
    {
      "symbol": "QOMO",
      "name": "Qomolangma Acquisition Corp"
    },
    {
      "symbol": "QOMOR",
      "name": "Qomolangma Acquisition Corp"
    },
    {
      "symbol": "QOMOU",
      "name": "Qomolangma Acquisition Corp - Units (1 Ord 1 Right & 1 War )"
    },
    {
      "symbol": "QOMOW",
      "name": "Qomolangma Acquisition Corp - Warrants (29/09/2027)"
    },
    {
      "symbol": "QOWZ",
      "name": "Invesco Nasdaq Free Cash Flow Achievers ETF"
    },
    {
      "symbol": "QPFF",
      "name": "AMERICAN CENTURY QUALITY PREFERRED ETF "
    },
    {
      "symbol": "QPX",
      "name": "ADVISORSHARES Q DYNAMIC GROWTH ETF "
    },
    {
      "symbol": "QQEW",
      "name": "FIRST TRUST NASDAQ-100 EQUAL WEIGHTED INDEX FUND "
    },
    {
      "symbol": "QQH",
      "name": "HCM Defender 100 Index ETF"
    },
    {
      "symbol": "QQJG",
      "name": "Invesco ESG NASDAQ Next Gen 100 ETF"
    },
    {
      "symbol": "QQMG",
      "name": "Invesco ESG NASDAQ 100 ETF"
    },
    {
      "symbol": "QQQ",
      "name": "Invesco QQQ Trust Series 1"
    },
    {
      "symbol": "QQQA",
      "name": "PROSHARES NASDAQ-100 DORSEY WRIGHT MOMENTUM ETF "
    },
    {
      "symbol": "QQQD",
      "name": "Direxion Daily Concentrated Qs Bear 1X Shares"
    },
    {
      "symbol": "QQQE",
      "name": "DIREXION NASDAQ-100(R) EQUAL WEIGHTED INDEX SHARES "
    },
    {
      "symbol": "QQQI",
      "name": "NEOS Nasdaq 100 High Income ETF"
    },
    {
      "symbol": "QQQJ",
      "name": "INVESCO NASDAQ NEXT GEN 100 ETF "
    },
    {
      "symbol": "QQQM",
      "name": "INVESCO NASDAQ 100 ETF "
    },
    {
      "symbol": "QQQN",
      "name": "VICTORYSHARES NASDAQ NEXT 50 ETF "
    },
    {
      "symbol": "QQQS",
      "name": "INVESCO NASDAQ FUTURE GEN 200 ETF "
    },
    {
      "symbol": "QQQU",
      "name": "Daily Concentrated Qs Bull 2X Shares"
    },
    {
      "symbol": "QQQX",
      "name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund"
    },
    {
      "symbol": "QQQY",
      "name": "Defiance Nasdaq 100 Enhanced Options Income ETF"
    },
    {
      "symbol": "QQXT",
      "name": "FIRST TRUST NASDAQ-100 EX-TECHNOLOGY SECTOR INDEX FUND "
    },
    {
      "symbol": "QRFT",
      "name": "QRAFT AI Enhanced U.S. Large Cap ETF"
    },
    {
      "symbol": "QRHC",
      "name": "Quest Resource Holding Corp"
    },
    {
      "symbol": "QRMI",
      "name": "GLOBAL X NASDAQ 100 RISK MANAGED INCOME ETF "
    },
    {
      "symbol": "QRTEA",
      "name": "Qurate Retail Inc - Series A"
    },
    {
      "symbol": "QRTEB",
      "name": "Qurate Retail Inc - Series B"
    },
    {
      "symbol": "QRTEP",
      "name": "Qurate Retail Inc"
    },
    {
      "symbol": "QRVO",
      "name": "Qorvo Inc"
    },
    {
      "symbol": "QS",
      "name": "QuantumScape Corp - Class A"
    },
    {
      "symbol": "QSAM",
      "name": "QSAM Biosciences Inc"
    },
    {
      "symbol": "QSG",
      "name": "QuantaSing Group Ltd"
    },
    {
      "symbol": "QSI",
      "name": "Quantum-Si Incorporated - Class A"
    },
    {
      "symbol": "QSIAW",
      "name": "Quantum-Si Incorporated - Warrants (10/06/2026)"
    },
    {
      "symbol": "QSML",
      "name": "WisdomTree U.S. SmallCap Quality Growth Fund"
    },
    {
      "symbol": "QSPT",
      "name": "FT VEST NASDAQ-100 BUFFER ETF - SEPTEMBER "
    },
    {
      "symbol": "QSR",
      "name": "Restaurant Brands International Inc"
    },
    {
      "symbol": "QSWN",
      "name": "Amplify BlackSwan Tech & Treasury ETF"
    },
    {
      "symbol": "QTAP",
      "name": "Innovator Growth Accelerated Plus ETF - April"
    },
    {
      "symbol": "QTEC",
      "name": "FIRST TRUST NASDAQ-100-TECHNOLOGY SECTOR INDEX FUND "
    },
    {
      "symbol": "QTI",
      "name": "QT Imaging Holdings Inc"
    },
    {
      "symbol": "QTJA",
      "name": "Innovator Growth Accelerated Plus ETF - January"
    },
    {
      "symbol": "QTJL",
      "name": "Innovator Growth Accelerated Plus ETF - July"
    },
    {
      "symbol": "QTNT"
    },
    {
      "symbol": "QTOC",
      "name": "Innovator Growth Accelerated Plus ETF - October"
    },
    {
      "symbol": "QTR",
      "name": "GLOBAL X NASDAQ 100 TAIL RISK ETF "
    },
    {
      "symbol": "QTRX",
      "name": "Quanterix Corp"
    },
    {
      "symbol": "QTTB",
      "name": "Homology Medicines Inc"
    },
    {
      "symbol": "QTUM",
      "name": "DEFIANCE QUANTUM ETF "
    },
    {
      "symbol": "QTWO",
      "name": "Q2 Holdings Inc"
    },
    {
      "symbol": "QUAD",
      "name": "Quad/Graphics Inc - Class A"
    },
    {
      "symbol": "QUAL",
      "name": "ISHARES MSCI USA QUALITY FACTOR ETF "
    },
    {
      "symbol": "QUBT",
      "name": "Quantum Computing Inc"
    },
    {
      "symbol": "QUIK",
      "name": "Quicklogic Corp"
    },
    {
      "symbol": "QULL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "QURE",
      "name": "uniQure N.V."
    },
    {
      "symbol": "QUS",
      "name": "SPDR MSCI USA StrategicFactors SM ETF"
    },
    {
      "symbol": "QUVU",
      "name": "HARTFORD QUALITY VALUE ETF "
    },
    {
      "symbol": "QVAL",
      "name": "ALPHA ARCHITECT U.S. QUANTITATIVE VALUE ETF "
    },
    {
      "symbol": "QVCC",
      "name": "QVC Inc"
    },
    {
      "symbol": "QVCD",
      "name": "QVC Inc"
    },
    {
      "symbol": "QVML",
      "name": "INVESCO S&P 500 QVM MULTI-FACTOR ETF "
    },
    {
      "symbol": "QVMM",
      "name": "INVESCO S&P MIDCAP 400 QVM MULTI-FACTOR ETF "
    },
    {
      "symbol": "QVMS",
      "name": "INVESCO S&P SMALLCAP 600 QVM MULTI-FACTOR ETF "
    },
    {
      "symbol": "QVOY",
      "name": "Q3 ALL-SEASON ACTIVE ROTATION ETF "
    },
    {
      "symbol": "QWLD",
      "name": "SPDR MSCI WORLD STRATEGICFACTORS ETF "
    },
    {
      "symbol": "QWST",
      "name": "Harbor Small Cap Explorer ETF"
    },
    {
      "symbol": "QYLD",
      "name": "GLOBAL X NASDAQ 100 COVERED CALL ETF "
    },
    {
      "symbol": "QYLE",
      "name": "GLOBAL X NASDAQ 100 ESG COVERED CALL ETF "
    },
    {
      "symbol": "QYLG",
      "name": "GLOBAL X NASDAQ 100 COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "R",
      "name": "Ryder System Inc"
    },
    {
      "symbol": "RA",
      "name": "Brookfield Real Assets Income Fund Inc"
    },
    {
      "symbol": "RAAX",
      "name": "VANECK INFLATION ALLOCATION ETF "
    },
    {
      "symbol": "RACE",
      "name": "Ferrari N.V."
    },
    {
      "symbol": "RACY",
      "name": "Relativity Acquisition Corp - Class A"
    },
    {
      "symbol": "RACYU",
      "name": "Relativity Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "RACYW",
      "name": "Relativity Acquisition Corp - Warrants(10/02/2027)"
    },
    {
      "symbol": "RAFE",
      "name": "Pimco Rafi ESG U.S. ETF"
    },
    {
      "symbol": "RAIL",
      "name": "FreightCar America Inc"
    },
    {
      "symbol": "RAMMU",
      "name": "Aries I Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "RAMP",
      "name": "LiveRamp Holdings Inc"
    },
    {
      "symbol": "RAND",
      "name": "Rand Capital Corp"
    },
    {
      "symbol": "RANI",
      "name": "Rani Therapeutics Holdings Inc Class A"
    },
    {
      "symbol": "RAPT",
      "name": "RAPT Therapeutics Inc"
    },
    {
      "symbol": "RARE",
      "name": "Ultragenyx Pharmaceutical Inc"
    },
    {
      "symbol": "RATE",
      "name": "GLOBAL X INTEREST RATE HEDGE ETF "
    },
    {
      "symbol": "RAVE",
      "name": "Rave Restaurant Group Inc"
    },
    {
      "symbol": "RAVI",
      "name": "FLEXSHARES ULTRA-SHORT INCOME FUND "
    },
    {
      "symbol": "RAYA",
      "name": "Erayak Power Solution Group Inc - Class A"
    },
    {
      "symbol": "RAYC",
      "name": "RAYLIANT QUANTAMENTAL CHINA EQUITY ETF "
    },
    {
      "symbol": "RAYD",
      "name": "RAYLIANT QUANTITATIVE DEVELOPED MARKET EQUITY ETF "
    },
    {
      "symbol": "RAYE",
      "name": "RAYLIANT QUANTAMENTAL EMERGING MARKET EX-CHINA EQUITY ETF "
    },
    {
      "symbol": "RAYJ",
      "name": "Rayliant SMDAM Japan Equity ETF"
    },
    {
      "symbol": "RAYS",
      "name": "GLOBAL X SOLAR ETF "
    },
    {
      "symbol": "RBA",
      "name": "RB Global Inc"
    },
    {
      "symbol": "RBB",
      "name": "RBB Bancorp"
    },
    {
      "symbol": "RBBN",
      "name": "Ribbon Communications Inc - New"
    },
    {
      "symbol": "RBC",
      "name": "RBC Bearings Inc"
    },
    {
      "symbol": "RBCAA",
      "name": "Republic Bancorp Inc (KY) - Class A"
    },
    {
      "symbol": "RBCP",
      "name": "RBC Bearings Incorporated 5.00 Series A Mandatory Convertible Preferred Stock"
    },
    {
      "symbol": "RBKB",
      "name": "Rhinebeck Bancorp Inc"
    },
    {
      "symbol": "RBLD",
      "name": "FIRST TRUST ALERIAN U.S. NEXTGEN INFRASTRUCTURE ETF "
    },
    {
      "symbol": "RBLX",
      "name": "Roblox Corporation - Class A"
    },
    {
      "symbol": "RBOT",
      "name": "Vicarious Surgical Inc - Class A"
    },
    {
      "symbol": "RBOT-WS",
      "name": "Vicarious Surgical Inc Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "RBRK",
      "name": "Rubrik Inc - Class A"
    },
    {
      "symbol": "RBT",
      "name": "Rubicon Technologies Inc - Class A"
    },
    {
      "symbol": "RBT-WS",
      "name": "Rubicon Technologies Inc Warrants each whole warrant exercisable to purchase one share of Class A Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "RC",
      "name": "Ready Capital Corp"
    },
    {
      "symbol": "RC-P-C",
      "name": "Ready Capital Corp"
    },
    {
      "symbol": "RC-P-E",
      "name": "Ready Capital Corp"
    },
    {
      "symbol": "RCAT",
      "name": "Red Cat Holdings Inc"
    },
    {
      "symbol": "RCB",
      "name": "Ready Capital Corp"
    },
    {
      "symbol": "RCC",
      "name": "Ready Capital Corp"
    },
    {
      "symbol": "RCEL",
      "name": "AVITA Medical Inc"
    },
    {
      "symbol": "RCFA",
      "name": "RCF Acquisition Corp - Class A"
    },
    {
      "symbol": "RCFA-U",
      "name": "RCF Acquisition Corp Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant"
    },
    {
      "symbol": "RCFA-WS",
      "name": "RCF Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "RCG",
      "name": "RENN Fund Inc"
    },
    {
      "symbol": "RCI",
      "name": "Rogers Communications Inc - Class B"
    },
    {
      "symbol": "RCKT",
      "name": "Rocket Pharmaceuticals Inc"
    },
    {
      "symbol": "RCKTW",
      "name": "Rocket Pharmaceuticals Inc - Warrants (02/09/2026)"
    },
    {
      "symbol": "RCKY",
      "name": "Rocky Brands Inc"
    },
    {
      "symbol": "RCL",
      "name": "Royal Caribbean Group"
    },
    {
      "symbol": "RCLFU",
      "name": "Spectral AI Inc - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "RCM",
      "name": "R1 RCM Inc"
    },
    {
      "symbol": "RCMT",
      "name": "RCM Technologies Inc"
    },
    {
      "symbol": "RCON",
      "name": "Recon Technology Ltd - Class A"
    },
    {
      "symbol": "RCRT",
      "name": "Recruiter.com Group Inc"
    },
    {
      "symbol": "RCRTW",
      "name": "Recruiter.com Group Inc - Warrants (15/06/2026)"
    },
    {
      "symbol": "RCS",
      "name": "PIMCO Strategic Income Fund Inc"
    },
    {
      "symbol": "RCUS",
      "name": "Arcus Biosciences Inc"
    },
    {
      "symbol": "RDCM",
      "name": "Radcom"
    },
    {
      "symbol": "RDDT",
      "name": "Reddit Inc - Class A"
    },
    {
      "symbol": "RDFI",
      "name": "RAREVIEW DYNAMIC FIXED INCOME ETF "
    },
    {
      "symbol": "RDFN",
      "name": "Redfin Corp"
    },
    {
      "symbol": "RDHL",
      "name": "Redhill Biopharma Ltd"
    },
    {
      "symbol": "RDI",
      "name": "Reading International Inc - Class A"
    },
    {
      "symbol": "RDIB",
      "name": "Reading International Inc - Class B"
    },
    {
      "symbol": "RDIV",
      "name": "INVESCO S&P ULTRA DIVIDEND REVENUE ETF "
    },
    {
      "symbol": "RDN",
      "name": "Radian Group Inc"
    },
    {
      "symbol": "RDNT",
      "name": "Radnet Inc"
    },
    {
      "symbol": "RDOG",
      "name": "ALPS REIT DIVIDEND DOGS ETF "
    },
    {
      "symbol": "RDUS",
      "name": "Schnitzer Steel Industries Inc - Class A"
    },
    {
      "symbol": "RDVI",
      "name": "FT VEST RISING DIVIDEND ACHIEVERS TARGET INCOME ETF "
    },
    {
      "symbol": "RDVT",
      "name": "Red Violet Inc"
    },
    {
      "symbol": "RDVY",
      "name": "FIRST TRUST RISING DIVIDEND ACHIEVERS ETF "
    },
    {
      "symbol": "RDW",
      "name": "Redwire Corporation"
    },
    {
      "symbol": "RDW-WS",
      "name": "Redwire Corporation Redeemable Warrants"
    },
    {
      "symbol": "RDWR",
      "name": "Radware"
    },
    {
      "symbol": "RDY",
      "name": "Dr. Reddy`s Laboratories Ltd"
    },
    {
      "symbol": "RDZN",
      "name": "Roadzen Inc"
    },
    {
      "symbol": "RDZNW",
      "name": "Roadzen Inc - Warrants (30/11/2028)"
    },
    {
      "symbol": "REAI",
      "name": "Private Real Estate Strategy via Liquid REITs ETF"
    },
    {
      "symbol": "REAL",
      "name": "Therealreal Inc"
    },
    {
      "symbol": "REAX",
      "name": "The Real Brokerage Inc"
    },
    {
      "symbol": "REBN",
      "name": "Reborn Coffee Inc"
    },
    {
      "symbol": "RECS",
      "name": "COLUMBIA RESEARCH ENHANCED CORE ETF "
    },
    {
      "symbol": "REE",
      "name": "REE Automotive Ltd - Class A"
    },
    {
      "symbol": "REET",
      "name": "iShares Global REIT ETF"
    },
    {
      "symbol": "REFI",
      "name": "Chicago Atlantic Real Estate Finance Inc"
    },
    {
      "symbol": "REFR",
      "name": "Research Frontiers Inc"
    },
    {
      "symbol": "REG",
      "name": "Regency Centers Corporation"
    },
    {
      "symbol": "REGCO",
      "name": "Regency Centers Corporation"
    },
    {
      "symbol": "REGCP",
      "name": "Regency Centers Corporation"
    },
    {
      "symbol": "REGL",
      "name": "ProShares S&P MidCap 400 Div Aristocrats ETF"
    },
    {
      "symbol": "REGN",
      "name": "Regeneron Pharmaceuticals Inc"
    },
    {
      "symbol": "REI",
      "name": "Ring Energy Inc"
    },
    {
      "symbol": "REIT",
      "name": "ALPS ACTIVE REIT ETF "
    },
    {
      "symbol": "REK",
      "name": "ProShares Short Real Estate -1x Shares"
    },
    {
      "symbol": "REKR",
      "name": "Rekor Systems Inc"
    },
    {
      "symbol": "RELI",
      "name": "Reliance Global Group Inc"
    },
    {
      "symbol": "RELIW",
      "name": "Reliance Global Group Inc - Warrants - Series A (01/02/2026)"
    },
    {
      "symbol": "RELL",
      "name": "Richardson Electronics Ltd"
    },
    {
      "symbol": "RELX",
      "name": "RELX Plc"
    },
    {
      "symbol": "RELY",
      "name": "Remitly Global Inc"
    },
    {
      "symbol": "REM",
      "name": "iShares Mortgage Real Estate ETF"
    },
    {
      "symbol": "REMX",
      "name": "VANECK RARE EARTH AND STRATEGIC METALS ETF "
    },
    {
      "symbol": "RENB",
      "name": "Renovaro Biosciences Inc"
    },
    {
      "symbol": "RENE",
      "name": "Cartesian Growth Corp II - Class A"
    },
    {
      "symbol": "RENEU",
      "name": "Cartesian Growth Corp II - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "RENEW",
      "name": "Cartesian Growth Corp II - Warrants(12/07/2028)"
    },
    {
      "symbol": "RENT",
      "name": "Rent the Runway Inc - Class A"
    },
    {
      "symbol": "RENW",
      "name": "Harbor Energy Transition Strategy ETF"
    },
    {
      "symbol": "REPL",
      "name": "Replimune Group Inc"
    },
    {
      "symbol": "REPX",
      "name": "Riley Exploration Permian Inc"
    },
    {
      "symbol": "RERE",
      "name": "ATRenew Inc"
    },
    {
      "symbol": "RES",
      "name": "RPC Inc"
    },
    {
      "symbol": "RETL",
      "name": "DIREXION DAILY RETAIL BULL 3X SHARES "
    },
    {
      "symbol": "RETO",
      "name": "ReTo Eco-Solutions Inc"
    },
    {
      "symbol": "REUN",
      "name": "Reunion Neuroscience Inc"
    },
    {
      "symbol": "REVB",
      "name": "Revelation Biosciences Inc"
    },
    {
      "symbol": "REVBW",
      "name": "Revelation Biosciences Inc - Warrants(10/01/2027)"
    },
    {
      "symbol": "REVG",
      "name": "REV Group Inc"
    },
    {
      "symbol": "REVS",
      "name": "COLUMBIA RESEARCH ENHANCED VALUE ETF "
    },
    {
      "symbol": "REW",
      "name": "ProShares UltraShort Technology -2x Shares"
    },
    {
      "symbol": "REX",
      "name": "REX American Resources Corp"
    },
    {
      "symbol": "REXR",
      "name": "Rexford Industrial Realty Inc"
    },
    {
      "symbol": "REXR-P-B",
      "name": "Rexford Industrial Realty Inc"
    },
    {
      "symbol": "REXR-P-C",
      "name": "Rexford Industrial Realty Inc"
    },
    {
      "symbol": "REYN",
      "name": "Reynolds Consumer Products Inc"
    },
    {
      "symbol": "REZ",
      "name": "iShares Residential and Multisector Real Estate ETF"
    },
    {
      "symbol": "REZI",
      "name": "Resideo Technologies Inc"
    },
    {
      "symbol": "RF",
      "name": "Regions Financial Corp"
    },
    {
      "symbol": "RF-P-B",
      "name": "Regions Financial Corp"
    },
    {
      "symbol": "RF-P-C",
      "name": "Regions Financial Corp"
    },
    {
      "symbol": "RF-P-E",
      "name": "Regions Financial Corp"
    },
    {
      "symbol": "RFAC",
      "name": "RF Acquisition Corp - Class A"
    },
    {
      "symbol": "RFACR",
      "name": "RF Acquisition Corp"
    },
    {
      "symbol": "RFACU",
      "name": "RF Acquisition Corp - Units (1 Ord Class A & 1 War & 1 Right )"
    },
    {
      "symbol": "RFACW",
      "name": "RF Acquisition Corp - Warrants (01/05/2028)"
    },
    {
      "symbol": "RFCI",
      "name": "RIVERFRONT DYNAMIC CORE INCOME ETF "
    },
    {
      "symbol": "RFDA",
      "name": "RIVERFRONT DYNAMIC US DIVIDEND ADVANTAGE ETF "
    },
    {
      "symbol": "RFDI",
      "name": "FIRST TRUST RIVERFRONT DYNAMIC DEVELOPED INTERNATIONAL ETF "
    },
    {
      "symbol": "RFEM",
      "name": "FIRST TRUST RIVERFRONT DYNAMIC EMERGING MARKETS ETF "
    },
    {
      "symbol": "RFEU",
      "name": "FIRST TRUST RIVERFRONT DYNAMIC EUROPE ETF "
    },
    {
      "symbol": "RFFC",
      "name": "ALPS ACTIVE EQUITY OPPORTUNITY ETF "
    },
    {
      "symbol": "RFG",
      "name": "Invesco S&P MidCap 400 Pure Growth ETF"
    },
    {
      "symbol": "RFI",
      "name": "Cohen & Steers Total Return Realty Fund Inc"
    },
    {
      "symbol": "RFIL",
      "name": "RF Industries Ltd"
    },
    {
      "symbol": "RFL",
      "name": "Rafael Holdings Inc - Class B"
    },
    {
      "symbol": "RFM",
      "name": "RiverNorth Flexible Municipal Income Fund Inc"
    },
    {
      "symbol": "RFMZ",
      "name": "RiverNorth Flexible Municipal Income Fund II Inc"
    },
    {
      "symbol": "RFV",
      "name": "Invesco S&P MidCap 400 Pure Value ETF"
    },
    {
      "symbol": "RGA",
      "name": "Reinsurance Group Of America Inc"
    },
    {
      "symbol": "RGC",
      "name": "Regencell Bioscience Holdings Ltd"
    },
    {
      "symbol": "RGCO",
      "name": "RGC Resources Inc"
    },
    {
      "symbol": "RGEN",
      "name": "Repligen Corp"
    },
    {
      "symbol": "RGF",
      "name": "Real Good Food Company Inc (The) - Class A"
    },
    {
      "symbol": "RGLD",
      "name": "Royal Gold Inc"
    },
    {
      "symbol": "RGLS",
      "name": "Regulus Therapeutics Inc"
    },
    {
      "symbol": "RGNX",
      "name": "Regenxbio Inc"
    },
    {
      "symbol": "RGP",
      "name": "Resources Connection Inc"
    },
    {
      "symbol": "RGR",
      "name": "Sturm Ruger & Co. Inc"
    },
    {
      "symbol": "RGT",
      "name": "Royce Global Value Trust Inc"
    },
    {
      "symbol": "RGTI",
      "name": "Rigetti Computing Inc"
    },
    {
      "symbol": "RGTIW",
      "name": "Rigetti Computing Inc - Warrants (03/03/2027)"
    },
    {
      "symbol": "RH",
      "name": "RH - Class A"
    },
    {
      "symbol": "RHCB",
      "name": "BNY MELLON RESPONSIBLE HORIZONS CORPORATE BOND ETF "
    },
    {
      "symbol": "RHE",
      "name": "Regional Health Properties Inc"
    },
    {
      "symbol": "RHE-P-A",
      "name": "Regional Health Properties Inc"
    },
    {
      "symbol": "RHI",
      "name": "Robert Half Inc"
    },
    {
      "symbol": "RHP",
      "name": "Ryman Hospitality Properties Inc"
    },
    {
      "symbol": "RHRX",
      "name": "RH Tactical Rotation ETF"
    },
    {
      "symbol": "RHTX",
      "name": "RH Tactical Outlook ETF"
    },
    {
      "symbol": "RICK",
      "name": "RCI Hospitality Holdings Inc"
    },
    {
      "symbol": "RIET",
      "name": "Hoya Capital High Dividend Yield ETF"
    },
    {
      "symbol": "RIG",
      "name": "Transocean Ltd"
    },
    {
      "symbol": "RIGL",
      "name": "Rigel Pharmaceuticals"
    },
    {
      "symbol": "RIGS",
      "name": "RIVERFRONT STRATEGIC INCOME FUND "
    },
    {
      "symbol": "RILY",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYG",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYK",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYL",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYM",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYN",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYO",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYP",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYT",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RILYZ",
      "name": "B. Riley Financial Inc"
    },
    {
      "symbol": "RINC",
      "name": "AXS REAL ESTATE INCOME ETF "
    },
    {
      "symbol": "RINF",
      "name": "ProShares Inflation Expectations ETF"
    },
    {
      "symbol": "RING",
      "name": "ISHARES MSCI GLOBAL GOLD MINERS ETF "
    },
    {
      "symbol": "RIO",
      "name": "Rio Tinto plc"
    },
    {
      "symbol": "RIOT",
      "name": "Riot Platforms Inc"
    },
    {
      "symbol": "RISN",
      "name": "INSPIRE TACTICAL BALANCED ETF "
    },
    {
      "symbol": "RISR",
      "name": "FOLIOBEYOND ALTERNATIVE INCOME AND INTEREST RATE HEDGE ETF "
    },
    {
      "symbol": "RITA",
      "name": "ETFB GREEN SRI REITS ETF "
    },
    {
      "symbol": "RITM",
      "name": "Rithm Capital Corporation"
    },
    {
      "symbol": "RITM-P-A",
      "name": "Rithm Capital Corporation"
    },
    {
      "symbol": "RITM-P-B",
      "name": "Rithm Capital Corporation"
    },
    {
      "symbol": "RITM-P-C",
      "name": "Rithm Capital Corporation"
    },
    {
      "symbol": "RITM-P-D",
      "name": "Rithm Capital Corporation"
    },
    {
      "symbol": "RIV",
      "name": "RiverNorth Opportunities Fund Inc"
    },
    {
      "symbol": "RIV-P-A",
      "name": "RiverNorth Opportunities Fund Inc 6.00 Series A Perpetual Preferred Stock"
    },
    {
      "symbol": "RIVN",
      "name": "Rivian Automotive Inc - Class A"
    },
    {
      "symbol": "RJF",
      "name": "Raymond James Financial Inc"
    },
    {
      "symbol": "RJF-P-B",
      "name": "Raymond James Financial Inc"
    },
    {
      "symbol": "RJMG",
      "name": "FT Raymond James Multicap Growth Equity ETF"
    },
    {
      "symbol": "RKDA",
      "name": "Arcadia Biosciences Inc"
    },
    {
      "symbol": "RKLB",
      "name": "Rocket Lab USA Inc"
    },
    {
      "symbol": "RKT",
      "name": "Rocket Companies Inc Class A"
    },
    {
      "symbol": "RL",
      "name": "Ralph Lauren Corp - Class A"
    },
    {
      "symbol": "RLAY",
      "name": "Relay Therapeutics Inc"
    },
    {
      "symbol": "RLGT",
      "name": "Radiant Logistics Inc"
    },
    {
      "symbol": "RLI",
      "name": "RLI Corp"
    },
    {
      "symbol": "RLJ",
      "name": "RLJ Lodging Trust"
    },
    {
      "symbol": "RLJ-P-A",
      "name": "RLJ Lodging Trust"
    },
    {
      "symbol": "RLMD",
      "name": "Relmada Therapeutics Inc"
    },
    {
      "symbol": "RLTY",
      "name": "Cohen & Steers Real Estate Opportunities and Income Fund"
    },
    {
      "symbol": "RLX",
      "name": "RLX Technology Inc"
    },
    {
      "symbol": "RLY",
      "name": "SPDR SSgA Multi-Asset Real Return ETF"
    },
    {
      "symbol": "RLYB",
      "name": "Rallybio Corp"
    },
    {
      "symbol": "RM",
      "name": "Regional Management Corp"
    },
    {
      "symbol": "RMAX",
      "name": "RE/MAX Holdings Inc - Class A"
    },
    {
      "symbol": "RMBI",
      "name": "Richmond Mutual Bancorporation Inc"
    },
    {
      "symbol": "RMBL",
      "name": "RumbleON Inc - Class B"
    },
    {
      "symbol": "RMBS",
      "name": "Rambus Inc"
    },
    {
      "symbol": "RMCF",
      "name": "Rocky Mountain Chocolate Factory Inc"
    },
    {
      "symbol": "RMCO",
      "name": "Royalty Management Holding Corporation Class A Common Stock"
    },
    {
      "symbol": "RMCOW",
      "name": "Royalty Management Holding Corporation Warrant"
    },
    {
      "symbol": "RMD",
      "name": "Resmed Inc"
    },
    {
      "symbol": "RMI",
      "name": "RiverNorth Opportunistic Municipal Income Fund Inc"
    },
    {
      "symbol": "RMIF",
      "name": "LHA RISK-MANAGED INCOME ETF "
    },
    {
      "symbol": "RMM",
      "name": "RiverNorth Managed Duration Municipal Income Fund Inc"
    },
    {
      "symbol": "RMMZ",
      "name": "RiverNorth Managed Duration Municipal Income Fund II Inc"
    },
    {
      "symbol": "RMNI",
      "name": "Rimini Street Inc"
    },
    {
      "symbol": "RMPL-P",
      "name": "RiverNorth Capital and Income Fund"
    },
    {
      "symbol": "RMR",
      "name": "RMR Group Inc (The) - Class A"
    },
    {
      "symbol": "RMT",
      "name": "Royce Micro-Cap Trust Inc"
    },
    {
      "symbol": "RMTI",
      "name": "Rockwell Medical Inc"
    },
    {
      "symbol": "RNA",
      "name": "Avidity Biosciences Inc"
    },
    {
      "symbol": "RNAC",
      "name": "Cartesian Therapeutics Inc"
    },
    {
      "symbol": "RNAZ",
      "name": "TransCode Therapeutics Inc"
    },
    {
      "symbol": "RNDM",
      "name": "First Trust Developed International Equity Select ETF"
    },
    {
      "symbol": "RNEM",
      "name": "First Trust Emerging Markets Equity Select ETF"
    },
    {
      "symbol": "RNERU",
      "name": "Mount Rainier Acquisition Corp - Unit (1 Ordinary share & 1 Wrt)"
    },
    {
      "symbol": "RNEW",
      "name": "HARBOR ENERGY TRANSITION STRATEGY ETF "
    },
    {
      "symbol": "RNG",
      "name": "RingCentral Inc - Class A"
    },
    {
      "symbol": "RNGR",
      "name": "Ranger Energy Services Inc - Class A"
    },
    {
      "symbol": "RNLX",
      "name": "Renalytix Plc"
    },
    {
      "symbol": "RNMC",
      "name": "First Trust Mid Cap US Equity Select ETF"
    },
    {
      "symbol": "RNP",
      "name": "Cohen & Steers REIT & Preferred Income Fund Inc"
    },
    {
      "symbol": "RNR",
      "name": "RenaissanceRe Holdings Ltd"
    },
    {
      "symbol": "RNR-P-F",
      "name": "RenaissanceRe Holdings Ltd"
    },
    {
      "symbol": "RNR-P-G",
      "name": "RenaissanceRe Holdings Ltd Depositary Shares Series G"
    },
    {
      "symbol": "RNRG",
      "name": "GLOBAL X RENEWABLE ENERGY PRODUCERS ETF "
    },
    {
      "symbol": "RNSC",
      "name": "First Trust Small Cap US Equity Select ETF"
    },
    {
      "symbol": "RNST",
      "name": "Renasant Corp"
    },
    {
      "symbol": "RNW",
      "name": "ReNew Energy Global plc - Class A"
    },
    {
      "symbol": "RNWK",
      "name": "Realnetworks Inc"
    },
    {
      "symbol": "RNWWW",
      "name": "ReNew Energy Global plc - Warrants (23/08/2026)"
    },
    {
      "symbol": "RNWZ",
      "name": "TRUESHARES EAGLE GLOBAL RENEWABLE ENERGY INCOME ETF "
    },
    {
      "symbol": "RNXT",
      "name": "RenovoRx Inc"
    },
    {
      "symbol": "ROAD",
      "name": "Construction Partners Inc - Class A"
    },
    {
      "symbol": "ROAM",
      "name": "HARTFORD MULTIFACTOR EMERGING MARKETS ETF "
    },
    {
      "symbol": "ROBO",
      "name": "ROBO Global Robotics and Automation Index ETF"
    },
    {
      "symbol": "ROBT",
      "name": "FIRST TRUST NASDAQ ARTIFICIAL INTELLIGENCE AND ROBOTICS ETF "
    },
    {
      "symbol": "ROC",
      "name": "ROC Energy Acquisition Corp"
    },
    {
      "symbol": "ROCAU",
      "name": "ROC Energy Acquisition Corp - Units (1 Ord Share & 1 Right)"
    },
    {
      "symbol": "ROCK",
      "name": "Gibraltar Industries Inc"
    },
    {
      "symbol": "ROCL",
      "name": "Roth CH Acquisition V Company"
    },
    {
      "symbol": "ROCLU",
      "name": "Roth CH Acquisition V Co - Unit (1 Ordinary share & 1/2 Wrt)"
    },
    {
      "symbol": "ROCLW",
      "name": "Roth CH Acquisition V Co - Warrants (10/12/2026)"
    },
    {
      "symbol": "RODE",
      "name": "HARTFORD MULTIFACTOR DIVERSIFIED INTERNATIONAL ETF "
    },
    {
      "symbol": "RODM",
      "name": "HARTFORD MULTIFACTOR DEVELOPED MARKETS (EX-US) ETF "
    },
    {
      "symbol": "ROE",
      "name": "Astoria US Quality Kings ETF"
    },
    {
      "symbol": "ROG",
      "name": "Rogers Corp"
    },
    {
      "symbol": "ROI",
      "name": "RiskOn International Inc Com Par 0.001"
    },
    {
      "symbol": "ROIC",
      "name": "Retail Opportunity Investments Corp"
    },
    {
      "symbol": "ROIS",
      "name": "Hartford Multifactor International Small Company ETF"
    },
    {
      "symbol": "ROIV",
      "name": "Roivant Sciences Ltd"
    },
    {
      "symbol": "ROK",
      "name": "Rockwell Automation Inc"
    },
    {
      "symbol": "ROKT",
      "name": "SPDR S&P KENSHO FINAL FRONTIERS ETF "
    },
    {
      "symbol": "ROKU",
      "name": "Roku Inc - Class A"
    },
    {
      "symbol": "ROL",
      "name": "Rollins Inc"
    },
    {
      "symbol": "ROM",
      "name": "ProShares Ultra Technology 2x Shares"
    },
    {
      "symbol": "ROMA",
      "name": "Roma Green Finance Ltd"
    },
    {
      "symbol": "ROMO",
      "name": "Strategy Shares Newfound/ReSolve Robust Momentum ETF"
    },
    {
      "symbol": "ROOF",
      "name": "IQ CBRE NextGen Real Estate ETF"
    },
    {
      "symbol": "ROOT",
      "name": "Root Inc - Class A"
    },
    {
      "symbol": "ROP",
      "name": "Roper Technologies Inc"
    },
    {
      "symbol": "RORO",
      "name": "ATAC US ROTATION ETF "
    },
    {
      "symbol": "ROSC",
      "name": "HARTFORD MULTIFACTOR SMALL CAP ETF "
    },
    {
      "symbol": "ROSS",
      "name": "Ross Acquisition Corp II - Class A"
    },
    {
      "symbol": "ROSS-U",
      "name": "Ross Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "ROSS-WS",
      "name": "Ross Acquisition Corp II - Warrants (01/02/2026)"
    },
    {
      "symbol": "ROST",
      "name": "Ross Stores Inc"
    },
    {
      "symbol": "ROUS",
      "name": "HARTFORD MULTIFACTOR US EQUITY ETF "
    },
    {
      "symbol": "ROYA",
      "name": "Tema Global Royalties ETF"
    },
    {
      "symbol": "RPAR",
      "name": "RPAR RISK PARITY ETF "
    },
    {
      "symbol": "RPAY",
      "name": "Repay Holdings Corporation - Class A"
    },
    {
      "symbol": "RPD",
      "name": "Rapid7 Inc"
    },
    {
      "symbol": "RPG",
      "name": "Invesco S&P 500 Pure Growth ETF"
    },
    {
      "symbol": "RPHM",
      "name": "Reneo Pharmaceuticals Inc"
    },
    {
      "symbol": "RPHS",
      "name": "Regents Park Hedged Market Strategy ETF"
    },
    {
      "symbol": "RPID",
      "name": "Rapid Micro Biosystems Inc - Class A"
    },
    {
      "symbol": "RPM",
      "name": "RPM International Inc"
    },
    {
      "symbol": "RPRX",
      "name": "Royalty Pharma plc - Class A"
    },
    {
      "symbol": "RPTX",
      "name": "Repare Therapeutics Inc"
    },
    {
      "symbol": "RPV",
      "name": "Invesco S&P 500 Pure Value ETF"
    },
    {
      "symbol": "RQI",
      "name": "Cohen & Steers Quality Income Realty Fund Inc"
    },
    {
      "symbol": "RR",
      "name": "Richtech Robotics Inc - Class B"
    },
    {
      "symbol": "RRAC",
      "name": "Rigel Resource Acquisition Corp - Class A"
    },
    {
      "symbol": "RRAC-U",
      "name": "Rigel Resource Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "RRAC-WS",
      "name": "Rigel Resource Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "RRBI",
      "name": "Red River Bancshares Inc"
    },
    {
      "symbol": "RRC",
      "name": "Range Resources Corp"
    },
    {
      "symbol": "RRGB",
      "name": "Red Robin Gourmet Burgers Inc"
    },
    {
      "symbol": "RRR",
      "name": "Red Rock Resorts Inc - Class A"
    },
    {
      "symbol": "RRX",
      "name": "Regal Rexnord Corp"
    },
    {
      "symbol": "RS",
      "name": "Reliance Steel & Aluminum Company"
    },
    {
      "symbol": "RSBT",
      "name": "Return Stacked Bonds & Managed Futures ETF"
    },
    {
      "symbol": "RSEE",
      "name": "RAREVIEW SYSTEMATIC EQUITY ETF "
    },
    {
      "symbol": "RSF",
      "name": "RiverNorth Capital and Income Fund"
    },
    {
      "symbol": "RSF-R",
      "name": "RiverNorth Capital and Income Fund Rights expiring January 27 2023 Rights"
    },
    {
      "symbol": "RSF-R-W",
      "name": "RiverNorth Capital and Income Fund Rights expiring January 27 2023 Rights when issued"
    },
    {
      "symbol": "RSG",
      "name": "Republic Services Inc"
    },
    {
      "symbol": "RSHO",
      "name": "Tema American Reshoring ETF"
    },
    {
      "symbol": "RSI",
      "name": "Rush Street Interactive Inc - Class A"
    },
    {
      "symbol": "RSKD",
      "name": "Riskified Ltd - Class A"
    },
    {
      "symbol": "RSLS",
      "name": "ReShape Lifesciences Inc"
    },
    {
      "symbol": "RSP",
      "name": "Invesco S&P 500 Equal Weight ETF"
    },
    {
      "symbol": "RSPC",
      "name": "Invesco S&P 500 Equal Weight Communication Services ETF"
    },
    {
      "symbol": "RSPD",
      "name": "Invesco S&P 500 Equal Weight Consumer Discretionary ETF"
    },
    {
      "symbol": "RSPE",
      "name": "Invesco ESG S&P 500 Equal Weight ETF"
    },
    {
      "symbol": "RSPF",
      "name": "Invesco S&P 500 Equal Weight Financials ETF"
    },
    {
      "symbol": "RSPG",
      "name": "Invesco S&P 500 Equal Weight Energy ETF"
    },
    {
      "symbol": "RSPH",
      "name": "Invesco S&P 500 Equal Weight Health Care ETF"
    },
    {
      "symbol": "RSPM",
      "name": "Invesco S&P 500 Equal Weight Materials ETF"
    },
    {
      "symbol": "RSPN",
      "name": "Invesco S&P 500 Equal Weight Industrials ETF"
    },
    {
      "symbol": "RSPR",
      "name": "Invesco S&P 500 Equal Weight Real Estate ETF"
    },
    {
      "symbol": "RSPS",
      "name": "Invesco S&P 500 Equal Weight Consumer Staples ETF"
    },
    {
      "symbol": "RSPT",
      "name": "Invesco S&P 500 Equal Weight Technology ETF"
    },
    {
      "symbol": "RSPU",
      "name": "Invesco S&P 500 Equal Weight Utilities ETF"
    },
    {
      "symbol": "RSSB",
      "name": "Return Stacked Global Stocks & Bonds ETF"
    },
    {
      "symbol": "RSSS",
      "name": "Research Solutions Inc"
    },
    {
      "symbol": "RSST",
      "name": "Return Stacked U.S. Stocks & Managed Futures ETF"
    },
    {
      "symbol": "RSVR",
      "name": "Reservoir Media Inc"
    },
    {
      "symbol": "RSVRW",
      "name": "Reservoir Media Inc - Warrants (28/07/2026)"
    },
    {
      "symbol": "RTAI",
      "name": "RAREVIEW TAX ADVANTAGED INCOME ETF "
    },
    {
      "symbol": "RTC",
      "name": "Baijiayun Group Ltd - Class A"
    },
    {
      "symbol": "RTH",
      "name": "VANECK RETAIL ETF "
    },
    {
      "symbol": "RTO",
      "name": "Rentokil Initial"
    },
    {
      "symbol": "RTX",
      "name": "RTX Corp"
    },
    {
      "symbol": "RUFF",
      "name": "ALPHA DOG ETF "
    },
    {
      "symbol": "RULE",
      "name": "ADAPTIVE CORE ETF "
    },
    {
      "symbol": "RUM",
      "name": "Rumble Inc - Class A"
    },
    {
      "symbol": "RUMBW",
      "name": "Rumble Inc Wt Exp 02182028"
    },
    {
      "symbol": "RUN",
      "name": "Sunrun Inc"
    },
    {
      "symbol": "RUNN",
      "name": "RUNNING OAK EFFICIENT GROWTH ETF "
    },
    {
      "symbol": "RUSHA",
      "name": "Rush Enterprises Inc - Class A"
    },
    {
      "symbol": "RUSHB",
      "name": "Rush Enterprises Inc - Class B"
    },
    {
      "symbol": "RUSS",
      "name": "DIREXION DAILY RUSSIA BEAR 3X SHARES "
    },
    {
      "symbol": "RVER",
      "name": "Trenchless Fund ETF"
    },
    {
      "symbol": "RVLV",
      "name": "Revolve Group Inc - Class A"
    },
    {
      "symbol": "RVMD",
      "name": "Revolution Medicines Inc"
    },
    {
      "symbol": "RVMDW",
      "name": "Revolution Medicines Inc - Warrants (17/12/2026)"
    },
    {
      "symbol": "RVNC",
      "name": "Revance Therapeutics Inc"
    },
    {
      "symbol": "RVNU",
      "name": "XTRACKERS MUNICIPAL INFRASTRUCTURE REVENUE BOND ETF "
    },
    {
      "symbol": "RVP",
      "name": "Retractable Technologies Inc"
    },
    {
      "symbol": "RVPH",
      "name": "Reviva Pharmaceuticals Holdings Inc"
    },
    {
      "symbol": "RVPHW",
      "name": "Reviva Pharmaceuticals Holdings Inc - Warrants (25/12/2025)"
    },
    {
      "symbol": "RVRB",
      "name": "Reverb ETF"
    },
    {
      "symbol": "RVSB",
      "name": "Riverview Bancorp Inc"
    },
    {
      "symbol": "RVSN",
      "name": "Rail Vision Ltd"
    },
    {
      "symbol": "RVSNW",
      "name": "Rail Vision Ltd - Warrants (27/03/2027)"
    },
    {
      "symbol": "RVT",
      "name": "Royce Value Trust Inc"
    },
    {
      "symbol": "RVTY",
      "name": "Revvity Inc"
    },
    {
      "symbol": "RVYL",
      "name": "Ryvyl Inc Com New"
    },
    {
      "symbol": "RWAY",
      "name": "Runway Growth Finance Corp"
    },
    {
      "symbol": "RWAYL",
      "name": "Runway Growth Finance Corp"
    },
    {
      "symbol": "RWAYZ",
      "name": "Runway Growth Finance Corp"
    },
    {
      "symbol": "RWJ",
      "name": "INVESCO S&P SMALLCAP 600 REVENUE ETF "
    },
    {
      "symbol": "RWK",
      "name": "INVESCO S&P MIDCAP 400 REVENUE ETF "
    },
    {
      "symbol": "RWL",
      "name": "Invesco S&P 500 Revenue ETF"
    },
    {
      "symbol": "RWM",
      "name": "ProShares Short Russell2000 -1x Shares"
    },
    {
      "symbol": "RWO",
      "name": "SPDR(R) DOW JONES GLOBAL REAL ESTATE ETF "
    },
    {
      "symbol": "RWOD",
      "name": "Redwoods Acquisition Corp"
    },
    {
      "symbol": "RWODR",
      "name": "Redwoods Acquisition Corp"
    },
    {
      "symbol": "RWODU",
      "name": "Redwoods Acquisition Corp - Units (1 Ord 1 War & 1 Right )"
    },
    {
      "symbol": "RWODW",
      "name": "Redwoods Acquisition Corp - Warrants(15/03/2027)"
    },
    {
      "symbol": "RWR",
      "name": "SPDR DJ Wilshire REIT ETF"
    },
    {
      "symbol": "RWT",
      "name": "Redwood Trust Inc"
    },
    {
      "symbol": "RWT-P-A",
      "name": "Redwood Trust Inc"
    },
    {
      "symbol": "RWTN",
      "name": "Redwood Trust Inc 9.125 Senior Notes Due 2029"
    },
    {
      "symbol": "RWX",
      "name": "SPDR(R) DOW JONES INTERNATIONAL REAL ESTATE ETF "
    },
    {
      "symbol": "RXD",
      "name": "ProShares UltraShort Health Care -2x Shares"
    },
    {
      "symbol": "RXDX",
      "name": "Prometheus Biosciences Inc"
    },
    {
      "symbol": "RXI",
      "name": "iShares Global Consumer Discretionary ETF"
    },
    {
      "symbol": "RXL",
      "name": "ProShares Ultra Health Care 2X Shares"
    },
    {
      "symbol": "RXO",
      "name": "RXO Inc"
    },
    {
      "symbol": "RXRX",
      "name": "Recursion Pharmaceuticals Inc - Class A"
    },
    {
      "symbol": "RXST",
      "name": "RxSight Inc"
    },
    {
      "symbol": "RXT",
      "name": "Rackspace Technology Inc"
    },
    {
      "symbol": "RY",
      "name": "Royal Bank Of Canada"
    },
    {
      "symbol": "RYAAY",
      "name": "Ryanair Holdings Plc"
    },
    {
      "symbol": "RYAM",
      "name": "Rayonier Advanced Materials Inc"
    },
    {
      "symbol": "RYAN",
      "name": "Ryan Specialty Holdings Inc Class A"
    },
    {
      "symbol": "RYDE",
      "name": "Ryde Group Ltd - Class A"
    },
    {
      "symbol": "RYI",
      "name": "Ryerson Holding Corp"
    },
    {
      "symbol": "RYLD",
      "name": "GLOBAL X RUSSELL 2000 COVERED CALL ETF "
    },
    {
      "symbol": "RYLG",
      "name": "GLOBAL X RUSSELL 2000 COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "RYN",
      "name": "Rayonier Inc"
    },
    {
      "symbol": "RYSE",
      "name": "VEST 10 YEAR INTEREST RATE HEDGE ETF "
    },
    {
      "symbol": "RYTM",
      "name": "Rhythm Pharmaceuticals Inc"
    },
    {
      "symbol": "RZB",
      "name": "Reinsurance Group Of America Inc"
    },
    {
      "symbol": "RZC",
      "name": "Reinsurance Group Of America Inc"
    },
    {
      "symbol": "RZG",
      "name": "INVESCO S&P SMALLCAP 600 PURE GROWTH ETF "
    },
    {
      "symbol": "RZLT",
      "name": "Rezolute Inc"
    },
    {
      "symbol": "RZV",
      "name": "Invesco S&P SmallCap 600 Pure Value ETF"
    },
    {
      "symbol": "S",
      "name": "SentinelOne Inc - Class A"
    },
    {
      "symbol": "SA",
      "name": "Seabridge Gold Inc"
    },
    {
      "symbol": "SAA",
      "name": "ProShares Ultra SmallCap600 2x Shares"
    },
    {
      "symbol": "SABA",
      "name": "Saba Capital Income & Opportunities Fund II"
    },
    {
      "symbol": "SABR",
      "name": "Sabre Corp"
    },
    {
      "symbol": "SABRP",
      "name": "Sabre Corp"
    },
    {
      "symbol": "SABS",
      "name": "SAB Biotherapeutics Inc"
    },
    {
      "symbol": "SABSW",
      "name": "SAB Biotherapeutics Inc - Warrants (25/07/2027)"
    },
    {
      "symbol": "SACC",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SACH",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SACH-P-A",
      "name": "Sachem Capital Corp 7.75 Series A Cumulative Redeemable Preferred Stock"
    },
    {
      "symbol": "SAEF",
      "name": "Schwab Ariel ESG ETF"
    },
    {
      "symbol": "SAFE",
      "name": "Safehold Inc"
    },
    {
      "symbol": "SAFT",
      "name": "Safety Insurance Group Inc"
    },
    {
      "symbol": "SAGE",
      "name": "Sage Therapeutics Inc"
    },
    {
      "symbol": "SAGP",
      "name": "STRATEGAS GLOBAL POLICY OPPORTUNITIES ETF "
    },
    {
      "symbol": "SAH",
      "name": "Sonic Automotive Inc - Class A"
    },
    {
      "symbol": "SAI",
      "name": "SAI.TECH Global Corporation - Class A"
    },
    {
      "symbol": "SAIA",
      "name": "Saia Inc"
    },
    {
      "symbol": "SAIC",
      "name": "Science Applications International Corp"
    },
    {
      "symbol": "SAITW",
      "name": "SAI.TECH Global Corporation - Warrants (29/04/2027)"
    },
    {
      "symbol": "SAJ",
      "name": "Saratoga Investment Corp"
    },
    {
      "symbol": "SAM",
      "name": "Boston Beer Co. Inc - Class A"
    },
    {
      "symbol": "SAMAU",
      "name": "Schultze Special Purpose Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "SAMG",
      "name": "Silvercrest Asset Management Group Inc - Class A"
    },
    {
      "symbol": "SAMM",
      "name": "Strategas Macro Momentum ETF"
    },
    {
      "symbol": "SAMT",
      "name": "STRATEGAS MACRO THEMATIC OPPORTUNITIES ETF "
    },
    {
      "symbol": "SAN",
      "name": "Banco Santander S.A."
    },
    {
      "symbol": "SANA",
      "name": "Sana Biotechnology Inc"
    },
    {
      "symbol": "SAND",
      "name": "Sandstorm Gold Ltd"
    },
    {
      "symbol": "SANG",
      "name": "SANGSTAT MEDICAL CORP"
    },
    {
      "symbol": "SANM",
      "name": "Sanmina Corp"
    },
    {
      "symbol": "SANW",
      "name": "S&W Seed Company"
    },
    {
      "symbol": "SAP",
      "name": "Sap SE"
    },
    {
      "symbol": "SAR",
      "name": "Saratoga Investment Corp"
    },
    {
      "symbol": "SARK",
      "name": "AXS Short Innovation Daily ETF"
    },
    {
      "symbol": "SASI",
      "name": "Sigma Additive Solutions Inc"
    },
    {
      "symbol": "SASR",
      "name": "Sandy Spring Bancorp"
    },
    {
      "symbol": "SAT",
      "name": "Saratoga Investment Corp"
    },
    {
      "symbol": "SATL",
      "name": "Satellogic Inc - Class A"
    },
    {
      "symbol": "SATLW",
      "name": "Satellogic Inc - Warrants (25/01/2027)"
    },
    {
      "symbol": "SATO",
      "name": "INVESCO ALERIAN GALAXY CRYPTO ECONOMY ETF "
    },
    {
      "symbol": "SATS",
      "name": "EchoStar Corp - Class A"
    },
    {
      "symbol": "SATX",
      "name": "SatixFy Communications Ltd - Class A"
    },
    {
      "symbol": "SAUG",
      "name": "FT VEST U.S. SMALL CAP MODERATE BUFFER ETF - AUGUST "
    },
    {
      "symbol": "SAVA",
      "name": "Cassava Sciences Inc"
    },
    {
      "symbol": "SAVAW",
      "name": "Cassava Sciences Inc - Warrants (15/11/2024)"
    },
    {
      "symbol": "SAVE",
      "name": "Spirit Airlines Inc"
    },
    {
      "symbol": "SAY",
      "name": "Saratoga Investment Corp"
    },
    {
      "symbol": "SAZ",
      "name": "Saratoga Investment Corp"
    },
    {
      "symbol": "SB",
      "name": "Safe Bulkers Inc"
    },
    {
      "symbol": "SB-P-C",
      "name": "Safe Bulkers Inc"
    },
    {
      "symbol": "SB-P-D",
      "name": "Safe Bulkers Inc"
    },
    {
      "symbol": "SBAC",
      "name": "SBA Communications Corp - Class A"
    },
    {
      "symbol": "SBB",
      "name": "ProShares Short SmallCap600 -1x Shares"
    },
    {
      "symbol": "SBBA",
      "name": "Scorpio Tankers Inc"
    },
    {
      "symbol": "SBCF",
      "name": "Seacoast Banking Corp Of Florida"
    },
    {
      "symbol": "SBET",
      "name": "SharpLink Gaming Inc"
    },
    {
      "symbol": "SBEV",
      "name": "Splash Beverage Group Inc"
    },
    {
      "symbol": "SBEV-WS",
      "name": "Splash Beverage Group Inc - Warrants (01/01/9999)"
    },
    {
      "symbol": "SBFG",
      "name": "SB Financial Group Inc"
    },
    {
      "symbol": "SBFM",
      "name": "Sunshine Biopharma Inc"
    },
    {
      "symbol": "SBFMW",
      "name": "Sunshine Biopharma Inc - Warrants (15/02/2027)"
    },
    {
      "symbol": "SBGI",
      "name": "Sinclair Inc - Class A"
    },
    {
      "symbol": "SBH",
      "name": "Sally Beauty Holdings Inc"
    },
    {
      "symbol": "SBI",
      "name": "Western Asset Intermediate Muni Fund Inc"
    },
    {
      "symbol": "SBIG",
      "name": "SpringBig Holdings Inc"
    },
    {
      "symbol": "SBIGW",
      "name": "SpringBig Holdings Inc - Warrants (14/06/2027)"
    },
    {
      "symbol": "SBIO",
      "name": "ALPS MEDICAL BREAKTHROUGHS ETF "
    },
    {
      "symbol": "SBIT",
      "name": "ProShares UltraShort Bitcoin ETF"
    },
    {
      "symbol": "SBLK",
      "name": "Star Bulk Carriers Corp"
    },
    {
      "symbol": "SBND",
      "name": "COLUMBIA SHORT DURATION BOND ETF "
    },
    {
      "symbol": "SBOW",
      "name": "SilverBow Resources Inc"
    },
    {
      "symbol": "SBR",
      "name": "Sabine Royalty Trust"
    },
    {
      "symbol": "SBRA",
      "name": "Sabra Healthcare REIT Inc"
    },
    {
      "symbol": "SBS",
      "name": "Companhia de Saneamento Basico do Estado de Sao Paulo."
    },
    {
      "symbol": "SBSI",
      "name": "Southside Bancshares Inc"
    },
    {
      "symbol": "SBSW",
      "name": "Sibanye Stillwater Ltd"
    },
    {
      "symbol": "SBT",
      "name": "Sterling Bancorp Inc"
    },
    {
      "symbol": "SBUX",
      "name": "Starbucks Corp"
    },
    {
      "symbol": "SBXC",
      "name": "SilverBox Corp III - Class A"
    },
    {
      "symbol": "SBXC-U",
      "name": "SilverBox Corp III - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "SBXC-WS",
      "name": "SilverBox Corp III - Warrants (28/02/2028)"
    },
    {
      "symbol": "SCAP",
      "name": "InfraCap Small Cap Income ETF"
    },
    {
      "symbol": "SCAQU",
      "name": "Stratim Cloud Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "SCC",
      "name": "ProShares UltraShort Consumer Discretionary"
    },
    {
      "symbol": "SCCB",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCC",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCD",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCE",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCF",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCG",
      "name": "Sachem Capital Corp"
    },
    {
      "symbol": "SCCO",
      "name": "Southern Copper Corporation"
    },
    {
      "symbol": "SCD",
      "name": "LMP Capital and Income Fund Inc"
    },
    {
      "symbol": "SCDL",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "SCE-P-G",
      "name": "SCE Trust II Trust Preferred Securities"
    },
    {
      "symbol": "SCE-P-H",
      "name": "SCE Trust III FixedFloating Rate Trust Preference Securities"
    },
    {
      "symbol": "SCE-P-J",
      "name": "Southern California Edison Company 5375 FixedtoFloating Rate Trust Preference Securities"
    },
    {
      "symbol": "SCE-P-K",
      "name": "Southern California Edison Company 545 FixedtoFloating Rate Trust Preference Securities"
    },
    {
      "symbol": "SCE-P-L",
      "name": "SCE Trust VI"
    },
    {
      "symbol": "SCHA",
      "name": "SCHWAB U.S. SMALL-CAP ETF "
    },
    {
      "symbol": "SCHB",
      "name": "SCHWAB U.S. BROAD MARKET ETF "
    },
    {
      "symbol": "SCHC",
      "name": "SCHWAB INTERNATIONAL SMALL-CAP EQUITY ETF "
    },
    {
      "symbol": "SCHD",
      "name": "SCHWAB U.S. DIVIDEND EQUITY ETF "
    },
    {
      "symbol": "SCHE",
      "name": "SCHWAB EMERGING MARKETS EQUITY ETF "
    },
    {
      "symbol": "SCHF",
      "name": "SCHWAB INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "SCHG",
      "name": "SCHWAB U.S. LARGE-CAP GROWTH ETF "
    },
    {
      "symbol": "SCHH",
      "name": "Schwab U.S. REIT ETF"
    },
    {
      "symbol": "SCHI",
      "name": "SCHWAB 5-10 YEAR CORPORATE BOND ETF "
    },
    {
      "symbol": "SCHJ",
      "name": "SCHWAB 1-5 YEAR CORPORATE BOND ETF "
    },
    {
      "symbol": "SCHK",
      "name": "SCHWAB 1000 INDEX ETF "
    },
    {
      "symbol": "SCHL",
      "name": "Scholastic Corp"
    },
    {
      "symbol": "SCHM",
      "name": "SCHWAB U.S. MID-CAP ETF "
    },
    {
      "symbol": "SCHO",
      "name": "SCHWAB SHORT-TERM U.S. TREASURY ETF "
    },
    {
      "symbol": "SCHP",
      "name": "SCHWAB U.S. TIPS ETF "
    },
    {
      "symbol": "SCHQ",
      "name": "SCHWAB LONG-TERM U.S. TREASURY ETF "
    },
    {
      "symbol": "SCHR",
      "name": "SCHWAB INTERMEDIATE-TERM U.S. TREASURY ETF "
    },
    {
      "symbol": "SCHV",
      "name": "SCHWAB U.S. LARGE-CAP VALUE ETF "
    },
    {
      "symbol": "SCHW",
      "name": "Charles Schwab Corp"
    },
    {
      "symbol": "SCHW-P-D",
      "name": "Charles Schwab Corp"
    },
    {
      "symbol": "SCHW-P-J",
      "name": "Charles Schwab Corp"
    },
    {
      "symbol": "SCHX",
      "name": "SCHWAB U.S. LARGE-CAP ETF "
    },
    {
      "symbol": "SCHY",
      "name": "SCHWAB INTERNATIONAL DIVIDEND EQUITY ETF "
    },
    {
      "symbol": "SCHZ",
      "name": "SCHWAB U.S. AGGREGATE BOND ETF "
    },
    {
      "symbol": "SCI",
      "name": "Service Corp International"
    },
    {
      "symbol": "SCIO",
      "name": "First Trust Structured Credit Income Opportunities ETF"
    },
    {
      "symbol": "SCJ",
      "name": "ISHARES MSCI JAPAN SMALL-CAP ETF "
    },
    {
      "symbol": "SCKT",
      "name": "Socket Mobile Inc"
    },
    {
      "symbol": "SCL",
      "name": "Stepan Company"
    },
    {
      "symbol": "SCLX",
      "name": "Scilex Holding Company"
    },
    {
      "symbol": "SCLXW",
      "name": "Scilex Holding Company - Warrants (10/11/2027)"
    },
    {
      "symbol": "SCLZ",
      "name": "Swan Enhanced Dividend Income ETF"
    },
    {
      "symbol": "SCM",
      "name": "Stellus Capital Investment Corp"
    },
    {
      "symbol": "SCMA",
      "name": "Seaport Calibre Materials Acquisition Corp - Class A"
    },
    {
      "symbol": "SCMAU",
      "name": "Seaport Calibre Materials Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "SCMAW",
      "name": "Seaport Calibre Materials Acquisition Corp - Warrants (28/10/2026)"
    },
    {
      "symbol": "SCMB",
      "name": "SCHWAB MUNICIPAL BOND ETF "
    },
    {
      "symbol": "SCNI",
      "name": "Scinai Immunotherapeutics Ltd"
    },
    {
      "symbol": "SCO",
      "name": "ProShares UltraShort Bloomberg Crude Oil -2x Shares"
    },
    {
      "symbol": "SCOR",
      "name": "Comscore Inc"
    },
    {
      "symbol": "SCPH",
      "name": "scPharmaceuticals Inc"
    },
    {
      "symbol": "SCPX",
      "name": "NightHawk Biosciences Inc"
    },
    {
      "symbol": "SCRD",
      "name": "JANUS HENDERSON SUSTAINABLE CORPORATE BOND ETF "
    },
    {
      "symbol": "SCRM",
      "name": "Screaming Eagle Acquisition Corp - Class A"
    },
    {
      "symbol": "SCRMU",
      "name": "Screaming Eagle Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "SCRMW",
      "name": "Screaming Eagle Acquisition Corp - Warrants (05/01/2027)"
    },
    {
      "symbol": "SCS",
      "name": "Steelcase Inc - Class A"
    },
    {
      "symbol": "SCSC",
      "name": "Scansource Inc"
    },
    {
      "symbol": "SCU",
      "name": "Sculptor Capital Management Inc - Class A"
    },
    {
      "symbol": "SCVL",
      "name": "Shoe Carnival Inc"
    },
    {
      "symbol": "SCWO",
      "name": "374Water Inc"
    },
    {
      "symbol": "SCWX",
      "name": "SecureWorks Corp - Class A"
    },
    {
      "symbol": "SCX",
      "name": "L.S. Starrett Co. - Class A"
    },
    {
      "symbol": "SCYB",
      "name": "SCHWAB HIGH YIELD BOND ETF "
    },
    {
      "symbol": "SCYX",
      "name": "Scynexis Inc"
    },
    {
      "symbol": "SCZ",
      "name": "ISHARES MSCI EAFE SMALL-CAP ETF "
    },
    {
      "symbol": "SD",
      "name": "Sandridge Energy Inc New"
    },
    {
      "symbol": "SDA",
      "name": "SunCar Technology Group Inc - Class A"
    },
    {
      "symbol": "SDACU",
      "name": "Sustainable Development Acquisition I Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SDAWW",
      "name": "SunCar Technology Group Inc - Warrants (08/05/2028)"
    },
    {
      "symbol": "SDCI",
      "name": "USCF SummerHaven Dynamic Commodity Strategy No K-1 Fund"
    },
    {
      "symbol": "SDD",
      "name": "ProShares UltraShort SmallCap600 -2x Shares"
    },
    {
      "symbol": "SDEM",
      "name": "GLOBAL X MSCI SUPERDIVIDEND EMERGING MARKETS ETF "
    },
    {
      "symbol": "SDG",
      "name": "iShares MSCI Global Sustainable Development Goals ETF"
    },
    {
      "symbol": "SDGR",
      "name": "Schrodinger Inc"
    },
    {
      "symbol": "SDHC",
      "name": "Smith Douglas Homes Corp - Class A"
    },
    {
      "symbol": "SDHY",
      "name": "PGIM Short Duration High Yield Opportunities Fund"
    },
    {
      "symbol": "SDIG",
      "name": "Stronghold Digital Mining Inc - Class A"
    },
    {
      "symbol": "SDIV",
      "name": "GLOBAL X SUPERDIVIDEND ETF "
    },
    {
      "symbol": "SDOG",
      "name": "ALPS SECTOR DIVIDEND DOGS ETF "
    },
    {
      "symbol": "SDOT",
      "name": "Sadot Group Inc"
    },
    {
      "symbol": "SDOW",
      "name": "ProShares UltraPro Short Dow30 -3x Shares"
    },
    {
      "symbol": "SDP",
      "name": "ProShares UltraShort Utilities -2x Shares"
    },
    {
      "symbol": "SDPI",
      "name": "Superior Drilling Products Inc"
    },
    {
      "symbol": "SDRL",
      "name": "Seadrill Ltd"
    },
    {
      "symbol": "SDS",
      "name": "ProShares UltraShort S&P500 -2x Shares"
    },
    {
      "symbol": "SDSI",
      "name": "AMERICAN CENTURY SHORT DURATION STRATEGIC INCOME ETF "
    },
    {
      "symbol": "SDVD",
      "name": "FT VEST SMID RISING DIVIDEND ACHIEVERS TARGET INCOME ETF "
    },
    {
      "symbol": "SDVY",
      "name": "FIRST TRUST SMID CAP RISING DIVIDEND ACHIEVERS ETF "
    },
    {
      "symbol": "SDY",
      "name": "SPDR Dividend ETF"
    },
    {
      "symbol": "SE",
      "name": "Sea Ltd"
    },
    {
      "symbol": "SEA",
      "name": "U.S. GLOBAL SEA TO SKY CARGO ETF "
    },
    {
      "symbol": "SEAL-P-A",
      "name": "Seapeak LLC"
    },
    {
      "symbol": "SEAL-P-B",
      "name": "Seapeak LLC"
    },
    {
      "symbol": "SEAT",
      "name": "Vivid Seats Inc - Class A"
    },
    {
      "symbol": "SEATW",
      "name": "Vivid Seats Inc - Warrants (18/10/2026)"
    },
    {
      "symbol": "SEB",
      "name": "Seaboard Corp"
    },
    {
      "symbol": "SECT",
      "name": "MAIN SECTOR ROTATION ETF "
    },
    {
      "symbol": "SEDA",
      "name": "SDCL EDGE Acquisition Corp - Class A"
    },
    {
      "symbol": "SEDA-U",
      "name": "SDCL EDGE Acquisition Corporation Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant"
    },
    {
      "symbol": "SEDA-WS",
      "name": "SDCL EDGE Acquisition Corporation Redeemable warrants each whole warrant exercisable for one share of Class A ordinary share at an exercise price of 11.50"
    },
    {
      "symbol": "SEDG",
      "name": "Solaredge Technologies Inc"
    },
    {
      "symbol": "SEE",
      "name": "Sealed Air Corp"
    },
    {
      "symbol": "SEED",
      "name": "Origin Agritech Ltd"
    },
    {
      "symbol": "SEEL",
      "name": "Seelos Therapeutics Inc"
    },
    {
      "symbol": "SEER",
      "name": "Seer Inc - Class A"
    },
    {
      "symbol": "SEF",
      "name": "ProShares Short Financials -1x Shares"
    },
    {
      "symbol": "SEIC",
      "name": "SEI Investments Company"
    },
    {
      "symbol": "SEIM",
      "name": "SEI Enhanced U.S. Large Cap Momentum Factor ETF"
    },
    {
      "symbol": "SEIQ",
      "name": "SEI Enhanced U.S. Large Cap Quality Factor ETF"
    },
    {
      "symbol": "SEIV",
      "name": "SEI Enhanced U.S. Large Cap Value Factor ETF"
    },
    {
      "symbol": "SEIX",
      "name": "VIRTUS SEIX SENIOR LOAN ETF "
    },
    {
      "symbol": "SELF",
      "name": "Global Self Storage Inc"
    },
    {
      "symbol": "SELV",
      "name": "SEI Enhanced Low Volatility U.S. Large Cap ETF"
    },
    {
      "symbol": "SELX",
      "name": "Semilux International Ltd"
    },
    {
      "symbol": "SEM",
      "name": "Select Medical Holdings Corporation"
    },
    {
      "symbol": "SEMI",
      "name": "Columbia Seligman Semiconductor and Technology ETF"
    },
    {
      "symbol": "SEMR",
      "name": "SEMrush Holdings Inc - Class A"
    },
    {
      "symbol": "SENEA",
      "name": "Seneca Foods Corp - Class A"
    },
    {
      "symbol": "SENEB",
      "name": "Seneca Foods Corp - Class B"
    },
    {
      "symbol": "SENS",
      "name": "Senseonics Holdings Inc"
    },
    {
      "symbol": "SENT",
      "name": "AdvisorShares Alpha DNA Equity Sentiment ETF"
    },
    {
      "symbol": "SEPA",
      "name": "SEP Acquisition Corp - Class A"
    },
    {
      "symbol": "SEPAU",
      "name": "SEP Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SEPAW",
      "name": "SEP Acquisition Corp - Warrants (27/07/2026)"
    },
    {
      "symbol": "SEPT",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER10 SEP ETF "
    },
    {
      "symbol": "SEPW",
      "name": "ALLIANZIM U.S. LARGE CAP BUFFER20 SEP ETF "
    },
    {
      "symbol": "SEPZ",
      "name": "TRUESHARES STRUCTURED OUTCOME (SEPTEMBER) ETF "
    },
    {
      "symbol": "SER",
      "name": "AgeX Therapeutics Inc"
    },
    {
      "symbol": "SERA",
      "name": "Sera Prognostics Inc Class A"
    },
    {
      "symbol": "SES",
      "name": "SES AI Corporation - Class A"
    },
    {
      "symbol": "SES-WS",
      "name": "SES AI Corporation - Warrants (08/01/2026)"
    },
    {
      "symbol": "SESG",
      "name": "Sprott ESG Gold ETF"
    },
    {
      "symbol": "SETH",
      "name": "ProShares Short Ether Strategy ETF"
    },
    {
      "symbol": "SETM",
      "name": "Sprott Energy Transition Materials ETF"
    },
    {
      "symbol": "SEVN",
      "name": "Seven Hills Realty Trust ."
    },
    {
      "symbol": "SEZL",
      "name": "Sezzle Inc"
    },
    {
      "symbol": "SF",
      "name": "Stifel Financial Corp"
    },
    {
      "symbol": "SF-P-B",
      "name": "Stifel Financial Corp"
    },
    {
      "symbol": "SF-P-C",
      "name": "Stifel Financial Corp"
    },
    {
      "symbol": "SF-P-D",
      "name": "Stifel Financial Corporation Depositary Shares Series D"
    },
    {
      "symbol": "SFB",
      "name": "Stifel Financial Corp"
    },
    {
      "symbol": "SFBC",
      "name": "Sound Financial Bancorp Inc"
    },
    {
      "symbol": "SFBS",
      "name": "ServisFirst Bancshares Inc"
    },
    {
      "symbol": "SFEB",
      "name": "FT Vest U.S. Small Cap Moderate Buffer ETF - February"
    },
    {
      "symbol": "SFIG",
      "name": "WisdomTree U.S. Short-Term Corporate Bond Fund"
    },
    {
      "symbol": "SFIX",
      "name": "Stitch Fix Inc - Class A"
    },
    {
      "symbol": "SFL",
      "name": "SFL Corporation Ltd"
    },
    {
      "symbol": "SFLO",
      "name": "VictoryShares Small Cap Free Cash Flow ETF"
    },
    {
      "symbol": "SFLR",
      "name": "Innovator Equity Managed Floor ETF"
    },
    {
      "symbol": "SFM",
      "name": "Sprouts Farmers Market Inc"
    },
    {
      "symbol": "SFNC",
      "name": "Simmons First National Corp - Class A"
    },
    {
      "symbol": "SFRT",
      "name": "Appreciate Holdings Inc - Class A"
    },
    {
      "symbol": "SFRTW",
      "name": "Appreciate Holdings Inc - Warrants (29/11/2027)"
    },
    {
      "symbol": "SFST",
      "name": "Southern First Bancshares Inc"
    },
    {
      "symbol": "SFWL",
      "name": "Shengfeng Development Ltd - Class A"
    },
    {
      "symbol": "SFY",
      "name": "SoFi Select 500 ETF"
    },
    {
      "symbol": "SFYF",
      "name": "SoFi Social 50 ETF"
    },
    {
      "symbol": "SFYX",
      "name": "SoFi Next 500 ETF"
    },
    {
      "symbol": "SG",
      "name": "Sweetgreen Inc - Class A"
    },
    {
      "symbol": "SGA",
      "name": "Saga Communications Inc - Class A"
    },
    {
      "symbol": "SGBX",
      "name": "Safe & Green Holdings Corp"
    },
    {
      "symbol": "SGBXV",
      "name": "Safe & Green Holdings Corp"
    },
    {
      "symbol": "SGC",
      "name": "Superior Group of Companies Inc."
    },
    {
      "symbol": "SGD",
      "name": "Safe and Green Development Corp"
    },
    {
      "symbol": "SGDJ",
      "name": "Sprott Junior Gold Miners ETF"
    },
    {
      "symbol": "SGDM",
      "name": "Sprott Gold Miners ETF"
    },
    {
      "symbol": "SGDVV",
      "name": "Safe and Green Development Corporation"
    },
    {
      "symbol": "SGE",
      "name": "Strong Global Entertainment Inc - Class A"
    },
    {
      "symbol": "SGH",
      "name": "SMART Global Holdings Inc"
    },
    {
      "symbol": "SGHC",
      "name": "Super Group (SGHC) Ltd"
    },
    {
      "symbol": "SGHT",
      "name": "Sight Sciences Inc"
    },
    {
      "symbol": "SGLC",
      "name": "SGI U.S. LARGE CAP CORE ETF "
    },
    {
      "symbol": "SGLY",
      "name": "Singularity Future Technology Ltd"
    },
    {
      "symbol": "SGMA",
      "name": "Sigmatron International Inc"
    },
    {
      "symbol": "SGML",
      "name": "Sigma Lithium Corporation"
    },
    {
      "symbol": "SGMO",
      "name": "Sangamo Therapeutics Inc"
    },
    {
      "symbol": "SGMT",
      "name": "Sagimet Biosciences Inc - Class A"
    },
    {
      "symbol": "SGN",
      "name": "Signing Day Sports Inc"
    },
    {
      "symbol": "SGOL",
      "name": "abrdn Physical Gold Shares ETF"
    },
    {
      "symbol": "SGOV",
      "name": "iShares 0-3 Month Treasury Bond ETF"
    },
    {
      "symbol": "SGRP",
      "name": "Spar Group Inc"
    },
    {
      "symbol": "SGRY",
      "name": "Surgery Partners Inc"
    },
    {
      "symbol": "SGTX",
      "name": "Sigilon Therapeutics Inc"
    },
    {
      "symbol": "SGU",
      "name": "Star Group L.P."
    },
    {
      "symbol": "SH",
      "name": "ProShares Short S&P500 -1x Shares"
    },
    {
      "symbol": "SHAG",
      "name": "WISDOMTREE YIELD ENHANCED U.S. SHORT-TERM AGGREGATE BOND FUND "
    },
    {
      "symbol": "SHAK",
      "name": "Shake Shack Inc - Class A"
    },
    {
      "symbol": "SHBI",
      "name": "Shore Bancshares Inc"
    },
    {
      "symbol": "SHC",
      "name": "Sotera Health Company"
    },
    {
      "symbol": "SHCAU",
      "name": "Spindletop Health Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "SHCO",
      "name": "Soho House & Co Inc Class A"
    },
    {
      "symbol": "SHCR",
      "name": "Sharecare Inc - Class A"
    },
    {
      "symbol": "SHCRW",
      "name": "Sharecare Inc - Warrants (01/07/2026)"
    },
    {
      "symbol": "SHDG",
      "name": "SOUNDWATCH HEDGED EQUITY ETF "
    },
    {
      "symbol": "SHE",
      "name": "SPDR MSCI USA Gender Diversity ETF"
    },
    {
      "symbol": "SHEL",
      "name": "Shell Plc ADR (Representing - )"
    },
    {
      "symbol": "SHEN",
      "name": "Shenandoah Telecommunications Company"
    },
    {
      "symbol": "SHFS",
      "name": "SHF Holdings Inc - Class A"
    },
    {
      "symbol": "SHFSW",
      "name": "SHF Holdings Inc - Warrants (28/12/2027)"
    },
    {
      "symbol": "SHG",
      "name": "Shinhan Financial Group Co. Ltd"
    },
    {
      "symbol": "SHIM",
      "name": "Shimmick Corp"
    },
    {
      "symbol": "SHIP",
      "name": "Seanergy Maritime Holdings Corp"
    },
    {
      "symbol": "SHLD",
      "name": "GLOBAL X DEFENSE TECH ETF "
    },
    {
      "symbol": "SHLS",
      "name": "Shoals Technologies Group Inc - Class A"
    },
    {
      "symbol": "SHLT",
      "name": "SHL Telemedicine Ltd ADR"
    },
    {
      "symbol": "SHM",
      "name": "SPDR Nuveen Bloomberg Short Term Municipal Bond ETF"
    },
    {
      "symbol": "SHNY",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "SHO",
      "name": "Sunstone Hotel Investors Inc"
    },
    {
      "symbol": "SHO-P-H",
      "name": "Sunstone Hotel Investors Inc"
    },
    {
      "symbol": "SHO-P-I",
      "name": "Sunstone Hotel Investors Inc"
    },
    {
      "symbol": "SHOC",
      "name": "Strive U.S. Semiconductor ETF"
    },
    {
      "symbol": "SHOO",
      "name": "Steven Madden Ltd"
    },
    {
      "symbol": "SHOP",
      "name": "Shopify Inc - Class A"
    },
    {
      "symbol": "SHOT",
      "name": "Safety Shot Inc Com"
    },
    {
      "symbol": "SHOTW",
      "name": "Safety Shot Inc Wt Exp"
    },
    {
      "symbol": "SHPH",
      "name": "Shuttle Pharmaceuticals Holdings Inc"
    },
    {
      "symbol": "SHPP",
      "name": "Pacer Industrials and Logistics ETF"
    },
    {
      "symbol": "SHPW",
      "name": "Shapeways Holdings Inc"
    },
    {
      "symbol": "SHPWW",
      "name": "Shapeways Holdings Inc - Warrants (31/10/2026)"
    },
    {
      "symbol": "SHRT",
      "name": "GOTHAM SHORT STRATEGIES ETF "
    },
    {
      "symbol": "SHRY",
      "name": "First Trust Large Cap US Equity Select ETF"
    },
    {
      "symbol": "SHUS",
      "name": "Syntax Stratified U.S. Total Market Hedged ETF"
    },
    {
      "symbol": "SHV",
      "name": "iShares Short Treasury Bond ETF"
    },
    {
      "symbol": "SHW",
      "name": "Sherwin-Williams Company"
    },
    {
      "symbol": "SHY",
      "name": "iShares 1-3 Year Treasury Bond ETF"
    },
    {
      "symbol": "SHYD",
      "name": "VanEck Short High Yield Muni ETF"
    },
    {
      "symbol": "SHYF",
      "name": "Shyft Group Inc (The)"
    },
    {
      "symbol": "SHYG",
      "name": "ISHARES 0-5 YEAR HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "SHYL",
      "name": "XTRACKERS SHORT DURATION HIGH YIELD BOND ETF "
    },
    {
      "symbol": "SIBN",
      "name": "SI-BONE Inc"
    },
    {
      "symbol": "SID",
      "name": "Companhia Siderurgica Nacional"
    },
    {
      "symbol": "SIDU",
      "name": "Sidus Space Inc - Class A"
    },
    {
      "symbol": "SIEB",
      "name": "Siebert Financial Corp"
    },
    {
      "symbol": "SIF",
      "name": "SIFCO Industries Inc"
    },
    {
      "symbol": "SIFI",
      "name": "HARBOR SCIENTIFIC ALPHA INCOME ETF "
    },
    {
      "symbol": "SIFY",
      "name": "Sify Technologies Ltd"
    },
    {
      "symbol": "SIG",
      "name": "Signet Jewelers Ltd"
    },
    {
      "symbol": "SIGA",
      "name": "SIGA Technologies Inc"
    },
    {
      "symbol": "SIGI",
      "name": "Selective Insurance Group Inc"
    },
    {
      "symbol": "SIGIP",
      "name": "Selective Insurance Group Inc Depositary Shares each representing a 11000th interest in a share of 4.60 NonCumulative Preferred Stock Series B"
    },
    {
      "symbol": "SIHY",
      "name": "HARBOR SCIENTIFIC ALPHA HIGH-YIELD ETF "
    },
    {
      "symbol": "SII",
      "name": "Sprott Inc"
    },
    {
      "symbol": "SIJ",
      "name": "ProShares UltraShort Industrials -2x Shares"
    },
    {
      "symbol": "SIL",
      "name": "Global X Silver Miners ETF"
    },
    {
      "symbol": "SILC",
      "name": "Silicom Ltd"
    },
    {
      "symbol": "SILJ",
      "name": "Amplify Junior Silver Miners ETF"
    },
    {
      "symbol": "SILK",
      "name": "Silk Road Medical Inc"
    },
    {
      "symbol": "SILV",
      "name": "SilverCrest Metals Inc"
    },
    {
      "symbol": "SIM",
      "name": "Grupo Simec S.A.B. de C.V."
    },
    {
      "symbol": "SIMO",
      "name": "Silicon Motion Technology Corp"
    },
    {
      "symbol": "SIMS",
      "name": "SPDR S&P Kensho Intelligent Structures ETF"
    },
    {
      "symbol": "SINGD",
      "name": "Singlepoint Inc"
    },
    {
      "symbol": "SINT",
      "name": "SINTX Technologies Inc"
    },
    {
      "symbol": "SIO",
      "name": "TOUCHSTONE STRATEGIC INCOME OPPORTUNITIES ETF "
    },
    {
      "symbol": "SIRI",
      "name": "Sirius XM Holdings Inc"
    },
    {
      "symbol": "SISI",
      "name": "Shineco Inc"
    },
    {
      "symbol": "SITC",
      "name": "SITE Centers Corp"
    },
    {
      "symbol": "SITC-P-A",
      "name": "SITE Centers Corp"
    },
    {
      "symbol": "SITE",
      "name": "SiteOne Landscape Supply Inc"
    },
    {
      "symbol": "SITM",
      "name": "SiTime Corp"
    },
    {
      "symbol": "SIVR",
      "name": "abrdn Physical Silver Shares ETF"
    },
    {
      "symbol": "SIX",
      "name": "Six Flags Entertainment Corp"
    },
    {
      "symbol": "SIXA",
      "name": "ETC 6 MERIDIAN MEGA CAP EQUITY ETF "
    },
    {
      "symbol": "SIXF",
      "name": "AllianzIM U.S. Large Cap 6 Month Buffer10 Feb/Aug ETF"
    },
    {
      "symbol": "SIXH",
      "name": "ETC 6 MERIDIAN HEDGED EQUITY-INDEX OPTION STRATEGY ETF "
    },
    {
      "symbol": "SIXJ",
      "name": "ALLIANZIM U.S. LARGE CAP 6 MONTH BUFFER10 JAN/JUL ETF "
    },
    {
      "symbol": "SIXL",
      "name": "ETC 6 MERIDIAN LOW BETA EQUITY STRATEGY ETF "
    },
    {
      "symbol": "SIXO",
      "name": "ALLIANZIM U.S. LARGE CAP 6 MONTH BUFFER10 APR/OCT ETF "
    },
    {
      "symbol": "SIXP",
      "name": "AllianzIM U.S. Large Cap 6 Month Buffer10 Mar/Sep ETF"
    },
    {
      "symbol": "SIXS",
      "name": "ETC 6 MERIDIAN SMALL CAP EQUITY ETF "
    },
    {
      "symbol": "SIZE",
      "name": "ISHARES MSCI USA SIZE FACTOR ETF "
    },
    {
      "symbol": "SJ",
      "name": "Scienjoy Holding Corporation - Class A"
    },
    {
      "symbol": "SJB",
      "name": "ProShares Short High Yield -1x Shares"
    },
    {
      "symbol": "SJM",
      "name": "J.M. Smucker Company"
    },
    {
      "symbol": "SJNK",
      "name": "SPDR Bloomberg Short Term High Yield Bond ETF"
    },
    {
      "symbol": "SJT",
      "name": "San Juan Basin Royalty Trust"
    },
    {
      "symbol": "SJW",
      "name": "SJW Group"
    },
    {
      "symbol": "SKE",
      "name": "Skeena Resources Ltd"
    },
    {
      "symbol": "SKF",
      "name": "ProShares UltraShort Financials -2x Shares"
    },
    {
      "symbol": "SKGR",
      "name": "SK Growth Opportunities Corp - Class A"
    },
    {
      "symbol": "SKGRU",
      "name": "SK Growth Opportunities Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SKGRW",
      "name": "SK Growth Opportunities Corp - Warrants (26/05/2029)"
    },
    {
      "symbol": "SKIL",
      "name": "Skillsoft Corp - Class A"
    },
    {
      "symbol": "SKIN",
      "name": "Beauty Health Company (The) - Class A"
    },
    {
      "symbol": "SKLZ",
      "name": "Skillz Inc - Class A"
    },
    {
      "symbol": "SKM",
      "name": "SK Telecom Co Ltd"
    },
    {
      "symbol": "SKOR",
      "name": "FLEXSHARES CREDIT-SCORED US CORPORATE BOND INDEX FUND "
    },
    {
      "symbol": "SKRE",
      "name": "Tuttle Capital Daily 2X Inverse Regional Banks ETF"
    },
    {
      "symbol": "SKT",
      "name": "Tanger Factory Outlet Centers Inc"
    },
    {
      "symbol": "SKWD",
      "name": "Skyward Specialty Insurance Group Inc"
    },
    {
      "symbol": "SKX",
      "name": "Skechers U S A Inc - Class A"
    },
    {
      "symbol": "SKY",
      "name": "Skyline Champion Corp"
    },
    {
      "symbol": "SKYH",
      "name": "Sky Harbour Group Corporation - Class A"
    },
    {
      "symbol": "SKYT",
      "name": "SkyWater Technology Inc"
    },
    {
      "symbol": "SKYU",
      "name": "ProShares Ultra Nasdaq Cloud Computing ETF 2x Shares"
    },
    {
      "symbol": "SKYW",
      "name": "Skywest Inc"
    },
    {
      "symbol": "SKYX",
      "name": "SKYX Platforms Corp"
    },
    {
      "symbol": "SKYY",
      "name": "FIRST TRUST CLOUD COMPUTING ETF "
    },
    {
      "symbol": "SLAB",
      "name": "Silicon Laboratories Inc"
    },
    {
      "symbol": "SLAM",
      "name": "Slam Corp - Class A"
    },
    {
      "symbol": "SLAMU",
      "name": "Slam Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "SLAMW",
      "name": "Slam Corp - Warrants (23/02/2026)"
    },
    {
      "symbol": "SLB",
      "name": "SLB"
    },
    {
      "symbol": "SLCA",
      "name": "U.S. Silica Holdings Inc"
    },
    {
      "symbol": "SLDB",
      "name": "Solid Biosciences Inc"
    },
    {
      "symbol": "SLDP",
      "name": "Solid Power Inc - Class A"
    },
    {
      "symbol": "SLDPW",
      "name": "Solid Power Inc - Warrants (08/12/2026)"
    },
    {
      "symbol": "SLE",
      "name": "Super League Enterprise Inc"
    },
    {
      "symbol": "SLF",
      "name": "Sun Life Financial Inc"
    },
    {
      "symbol": "SLG",
      "name": "SL Green Realty Corp"
    },
    {
      "symbol": "SLG-P-I",
      "name": "SL Green Realty Corp"
    },
    {
      "symbol": "SLGC",
      "name": "SomaLogic Inc - Class A"
    },
    {
      "symbol": "SLGCW",
      "name": "SomaLogic Inc - Warrants (31/08/2026)"
    },
    {
      "symbol": "SLGL",
      "name": "Sol-Gel Technologies Ltd"
    },
    {
      "symbol": "SLGN",
      "name": "Silgan Holdings Inc"
    },
    {
      "symbol": "SLI",
      "name": "Standard Lithium Ltd"
    },
    {
      "symbol": "SLM",
      "name": "SLM Corp"
    },
    {
      "symbol": "SLMBP",
      "name": "SLM Corp"
    },
    {
      "symbol": "SLN",
      "name": "Silence Therapeutics Plc"
    },
    {
      "symbol": "SLNA",
      "name": "Selina Hospitality PLC."
    },
    {
      "symbol": "SLNAW",
      "name": "Selina Hospitality PLC. - Warrants (27/10/2027)"
    },
    {
      "symbol": "SLND",
      "name": "Southland Holdings Inc"
    },
    {
      "symbol": "SLND-WS",
      "name": "Southland Holdings Inc - Warrants (13/02/2028)"
    },
    {
      "symbol": "SLNG",
      "name": "Stabilis Solutions Inc"
    },
    {
      "symbol": "SLNH",
      "name": "Soluna Holdings Inc"
    },
    {
      "symbol": "SLNHP",
      "name": "Soluna Holdings Inc"
    },
    {
      "symbol": "SLNO",
      "name": "Soleno Therapeutics Inc"
    },
    {
      "symbol": "SLP",
      "name": "Simulations Plus Inc"
    },
    {
      "symbol": "SLQD",
      "name": "ISHARES 0-5 YEAR INVESTMENT GRADE CORPORATE BOND ETF "
    },
    {
      "symbol": "SLQT",
      "name": "SelectQuote Inc"
    },
    {
      "symbol": "SLRC",
      "name": "SLR Investment Corp"
    },
    {
      "symbol": "SLRN",
      "name": "Acelyrin Inc"
    },
    {
      "symbol": "SLRX",
      "name": "Salarius Pharmaceuticals Inc"
    },
    {
      "symbol": "SLS",
      "name": "SELLAS Life Sciences Group Inc"
    },
    {
      "symbol": "SLV",
      "name": "iShares Silver Trust"
    },
    {
      "symbol": "SLVM",
      "name": "Sylvamo Corp"
    },
    {
      "symbol": "SLVO",
      "name": "Credit Suisse AG Nassau Branch"
    },
    {
      "symbol": "SLVP",
      "name": "ISHARES MSCI GLOBAL SILVER AND METALS MINERS ETF "
    },
    {
      "symbol": "SLVRU",
      "name": "SilverSPAC Inc - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "SLX",
      "name": "VANECK STEEL ETF "
    },
    {
      "symbol": "SLYG",
      "name": "SPDR S&P 600 Small Cap Growth ETF"
    },
    {
      "symbol": "SLYV",
      "name": "SPDR S&P 600 Small Cap Value ETF"
    },
    {
      "symbol": "SM",
      "name": "SM Energy Company"
    },
    {
      "symbol": "SMAR",
      "name": "Smartsheet Inc - Class A"
    },
    {
      "symbol": "SMAY",
      "name": "FT VEST U.S. SMALL CAP MODERATE BUFFER ETF - MAY "
    },
    {
      "symbol": "SMB",
      "name": "VanEck Short Muni ETF"
    },
    {
      "symbol": "SMBC",
      "name": "Southern Missouri Bancorp Inc"
    },
    {
      "symbol": "SMBK",
      "name": "SmartFinancial Inc"
    },
    {
      "symbol": "SMCF",
      "name": "Themes US Small Cap Cash Flow Champions ETF"
    },
    {
      "symbol": "SMCI",
      "name": "Super Micro Computer Inc"
    },
    {
      "symbol": "SMCO",
      "name": "Hilton Small-MidCap Opportunity ETF"
    },
    {
      "symbol": "SMCP",
      "name": "AlphaMark Actively Managed Small Cap ETF"
    },
    {
      "symbol": "SMDD",
      "name": "ProShares UltraPro Short MidCap400 -3x Shares"
    },
    {
      "symbol": "SMDV",
      "name": "ProShares Russell 2000 Div Growers ETF"
    },
    {
      "symbol": "SMDY",
      "name": "Syntax Stratified MidCap ETF"
    },
    {
      "symbol": "SMFG",
      "name": "Sumitomo Mitsui Financial Group Inc"
    },
    {
      "symbol": "SMFL",
      "name": "Smart for Life Inc"
    },
    {
      "symbol": "SMG",
      "name": "Scotts Miracle-Gro Company - Class A"
    },
    {
      "symbol": "SMH",
      "name": "VANECK SEMICONDUCTOR ETF "
    },
    {
      "symbol": "SMHB",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "SMHI",
      "name": "SEACOR Marine Holdings Inc"
    },
    {
      "symbol": "SMI",
      "name": "VANECK HIP SUSTAINABLE MUNI ETF "
    },
    {
      "symbol": "SMID",
      "name": "Smith-Midland Corp"
    },
    {
      "symbol": "SMIG",
      "name": "AAM BAHL & GAYNOR SMALL/MID CAP INCOME GROWTH ETF "
    },
    {
      "symbol": "SMIN",
      "name": "ISHARES MSCI INDIA SMALL-CAP ETF "
    },
    {
      "symbol": "SMIZ",
      "name": "ZACKS SMALL/MID CAP ETF "
    },
    {
      "symbol": "SMLE",
      "name": "XTRACKERS S&P SMALLCAP 600 ESG ETF "
    },
    {
      "symbol": "SMLF",
      "name": "ISHARES U.S. SMALL-CAP EQUITY FACTOR ETF "
    },
    {
      "symbol": "SMLP",
      "name": "Summit Midstream Partners LP"
    },
    {
      "symbol": "SMLR",
      "name": "Semler Scientific Inc"
    },
    {
      "symbol": "SMLV",
      "name": "SPDR SSGA US SMALL CAP LOW VOLATILITY INDEX ETF "
    },
    {
      "symbol": "SMMD",
      "name": "iShares Russell 2500 ETF"
    },
    {
      "symbol": "SMMF",
      "name": "Summit Financial Group Inc"
    },
    {
      "symbol": "SMMT",
      "name": "Summit Therapeutics Inc"
    },
    {
      "symbol": "SMMU",
      "name": "PIMCO Short Term Municipal Bond Active Exchange-Traded Fund"
    },
    {
      "symbol": "SMMV",
      "name": "ISHARES MSCI USA SMALL-CAP MIN VOL FACTOR ETF "
    },
    {
      "symbol": "SMN",
      "name": "ProShares UltraShort Materials"
    },
    {
      "symbol": "SMOG",
      "name": "VANECK LOW CARBON ENERGY ETF "
    },
    {
      "symbol": "SMOT",
      "name": "VANECK MORNINGSTAR SMID MOAT ETF "
    },
    {
      "symbol": "SMP",
      "name": "Standard Motor Products Inc"
    },
    {
      "symbol": "SMPL",
      "name": "Simply Good Foods Company"
    },
    {
      "symbol": "SMR",
      "name": "NuScale Power Corporation - Class A"
    },
    {
      "symbol": "SMR-WS",
      "name": "NuScale Power Corporation Warrants each exercisable for one share of Class A Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "SMRI",
      "name": "Bushido Capital US Equity ETF"
    },
    {
      "symbol": "SMRT",
      "name": "SmartRent Inc - Class A"
    },
    {
      "symbol": "SMSI",
      "name": "Smith Micro Software Inc"
    },
    {
      "symbol": "SMTC",
      "name": "Semtech Corp"
    },
    {
      "symbol": "SMTH",
      "name": "ALPS Smith Core Plus Bond ETF"
    },
    {
      "symbol": "SMTI",
      "name": "Sanara MedTech Inc"
    },
    {
      "symbol": "SMWB",
      "name": "Similarweb Ltd"
    },
    {
      "symbol": "SMX",
      "name": "SMX (Security Matters) Plc - Class A"
    },
    {
      "symbol": "SMXT",
      "name": "SolarMax Technology Inc"
    },
    {
      "symbol": "SMXWW",
      "name": "SMX (Security Matters) Plc - Warrants (07/03/2028)"
    },
    {
      "symbol": "SN",
      "name": "SharkNinja Inc"
    },
    {
      "symbol": "SNA",
      "name": "Snap-on Inc"
    },
    {
      "symbol": "SNAL",
      "name": "Snail Inc - Class A"
    },
    {
      "symbol": "SNAP",
      "name": "Snap Inc - Class A"
    },
    {
      "symbol": "SNAV",
      "name": "MOHR SECTOR NAV ETF "
    },
    {
      "symbol": "SNAX",
      "name": "Stryve Foods Inc - Class A"
    },
    {
      "symbol": "SNAXW",
      "name": "Stryve Foods Inc - Warrants (20/07/2026)"
    },
    {
      "symbol": "SNBR",
      "name": "Sleep Number Corp"
    },
    {
      "symbol": "SNCR",
      "name": "Synchronoss Technologies Inc"
    },
    {
      "symbol": "SNCRL",
      "name": "Synchronoss Technologies Inc"
    },
    {
      "symbol": "SNCY",
      "name": "Sun Country Airlines Holdings Inc"
    },
    {
      "symbol": "SND",
      "name": "Smart Sand Inc"
    },
    {
      "symbol": "SNDA",
      "name": "Sonida Senior Living Inc"
    },
    {
      "symbol": "SNDL",
      "name": "SNDL Inc"
    },
    {
      "symbol": "SNDR",
      "name": "Schneider National Inc - Class B"
    },
    {
      "symbol": "SNDX",
      "name": "Syndax Pharmaceuticals Inc"
    },
    {
      "symbol": "SNES",
      "name": "SenesTech Inc"
    },
    {
      "symbol": "SNEX",
      "name": "StoneX Group Inc"
    },
    {
      "symbol": "SNFCA",
      "name": "Security National Financial Corp - Class A"
    },
    {
      "symbol": "SNGX",
      "name": "Soligenix Inc"
    },
    {
      "symbol": "SNN",
      "name": "Smith & Nephew plc"
    },
    {
      "symbol": "SNOA",
      "name": "Sonoma Pharmaceuticals Inc"
    },
    {
      "symbol": "SNOW",
      "name": "Snowflake Inc - Class A"
    },
    {
      "symbol": "SNPD",
      "name": "XTRACKERS S&P ESG DIVIDEND ARISTOCRATS ETF "
    },
    {
      "symbol": "SNPE",
      "name": "XTRACKERS S&P 500 ESG ETF "
    },
    {
      "symbol": "SNPG",
      "name": "XTRACKERS S&P 500 GROWTH ESG ETF "
    },
    {
      "symbol": "SNPO",
      "name": "Snap One Holdings Corp"
    },
    {
      "symbol": "SNPS",
      "name": "Synopsys Inc"
    },
    {
      "symbol": "SNPV",
      "name": "XTRACKERS S&P 500 VALUE ESG ETF "
    },
    {
      "symbol": "SNPX",
      "name": "Synaptogenix Inc"
    },
    {
      "symbol": "SNSE",
      "name": "Sensei Biotherapeutics Inc"
    },
    {
      "symbol": "SNSR",
      "name": "GLOBAL X INTERNET OF THINGS ETF "
    },
    {
      "symbol": "SNT",
      "name": "Senstar Technologies Corp"
    },
    {
      "symbol": "SNTG",
      "name": "Sentage Holdings Inc"
    },
    {
      "symbol": "SNTI",
      "name": "Senti Biosciences Inc"
    },
    {
      "symbol": "SNV",
      "name": "Synovus Financial Corp"
    },
    {
      "symbol": "SNV-P-D",
      "name": "Synovus Financial Corp"
    },
    {
      "symbol": "SNV-P-E",
      "name": "Synovus Financial Corp"
    },
    {
      "symbol": "SNX",
      "name": "TD Synnex Corp"
    },
    {
      "symbol": "SNY",
      "name": "Sanofi"
    },
    {
      "symbol": "SO",
      "name": "Southern Company"
    },
    {
      "symbol": "SOAR",
      "name": "Volato Group Inc - Class A"
    },
    {
      "symbol": "SOBR",
      "name": "Sobr Safe Inc"
    },
    {
      "symbol": "SOC",
      "name": "Flame Acquisition Corp"
    },
    {
      "symbol": "SOC-WS",
      "name": "Sable Offshore Corp Wt Exp"
    },
    {
      "symbol": "SOCL",
      "name": "GLOBAL X SOCIAL MEDIA ETF "
    },
    {
      "symbol": "SOCWS",
      "name": "Flame Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "SOF",
      "name": "Amplify ETF Trust Samsung SOFR"
    },
    {
      "symbol": "SOFI",
      "name": "SoFi Technologies Inc"
    },
    {
      "symbol": "SOGP",
      "name": "Sound Group Inc"
    },
    {
      "symbol": "SOGU",
      "name": "AXS Short De-SPAC Daily ETF"
    },
    {
      "symbol": "SOHO",
      "name": "Sotherly Hotels Inc"
    },
    {
      "symbol": "SOHOB",
      "name": "Sotherly Hotels Inc"
    },
    {
      "symbol": "SOHON",
      "name": "Sotherly Hotels Inc"
    },
    {
      "symbol": "SOHOO",
      "name": "Sotherly Hotels Inc"
    },
    {
      "symbol": "SOHU",
      "name": "Sohu.com Ltd"
    },
    {
      "symbol": "SOI",
      "name": "Solaris Oilfield Infrastructure Inc - Class A"
    },
    {
      "symbol": "SOJC",
      "name": "Southern Company"
    },
    {
      "symbol": "SOJD",
      "name": "Southern Company"
    },
    {
      "symbol": "SOJE",
      "name": "Southern Company"
    },
    {
      "symbol": "SOL",
      "name": "Emeren Group Ltd"
    },
    {
      "symbol": "SOLO",
      "name": "Electrameccanica Vehicles Corp"
    },
    {
      "symbol": "SOLOW",
      "name": "Electrameccanica Vehicles Corp - Warrants (03/08/2023)"
    },
    {
      "symbol": "SOLR",
      "name": "SMARTETFS SUSTAINABLE ENERGY II ETF "
    },
    {
      "symbol": "SOLV",
      "name": "Solventum Corp"
    },
    {
      "symbol": "SOLV-W",
      "name": "Solventum Corporation WhenIssued"
    },
    {
      "symbol": "SON",
      "name": "Sonoco Products Company"
    },
    {
      "symbol": "SOND",
      "name": "Sonder Holdings Inc - Class A"
    },
    {
      "symbol": "SONDW",
      "name": "Sonder Holdings Inc - Warrants (18/01/2027)"
    },
    {
      "symbol": "SONM",
      "name": "Sonim Technologies Inc"
    },
    {
      "symbol": "SONN",
      "name": "Sonnet BioTherapeutics Holdings Inc"
    },
    {
      "symbol": "SONO",
      "name": "Sonos Inc"
    },
    {
      "symbol": "SONY",
      "name": "Sony Group Corporation"
    },
    {
      "symbol": "SOPA",
      "name": "Society Pass Inc"
    },
    {
      "symbol": "SOPH",
      "name": "SOPHiA Genetics SA"
    },
    {
      "symbol": "SOQ",
      "name": "Sonde Resources Corp"
    },
    {
      "symbol": "SOR",
      "name": "Source Capital Inc"
    },
    {
      "symbol": "SOS",
      "name": "SOS Ltd"
    },
    {
      "symbol": "SOTK",
      "name": "Sono-Tek Corp"
    },
    {
      "symbol": "SOUN",
      "name": "SoundHound AI Inc - Class A"
    },
    {
      "symbol": "SOUNW",
      "name": "SoundHound AI Inc - Warrants (26/04/2027)"
    },
    {
      "symbol": "SOVF",
      "name": "Sovereign`s Capital Flourish Fund"
    },
    {
      "symbol": "SOXL",
      "name": "DIREXION DAILY SEMICONDUCTOR BULL 3X SHARES "
    },
    {
      "symbol": "SOXQ",
      "name": "INVESCO PHLX SEMICONDUCTOR ETF "
    },
    {
      "symbol": "SOXS",
      "name": "Direxion Daily Semiconductor Bear 3X Shares"
    },
    {
      "symbol": "SOXX",
      "name": "iShares Semiconductor ETF"
    },
    {
      "symbol": "SOYB",
      "name": "Teucrium Soybean Fund"
    },
    {
      "symbol": "SP",
      "name": "SP Plus Corp"
    },
    {
      "symbol": "SPAB",
      "name": "SPDR Portfolio Aggregate Bond ETF"
    },
    {
      "symbol": "SPAM",
      "name": "Themes Cybersecurity ETF"
    },
    {
      "symbol": "SPAQ",
      "name": "HORIZON KINETICS SPAC ACTIVE ETF "
    },
    {
      "symbol": "SPAX",
      "name": "Robinson Alternative Yield Pre-merger SPAC ETF"
    },
    {
      "symbol": "SPB",
      "name": "Spectrum Brands Holdings Inc"
    },
    {
      "symbol": "SPBC",
      "name": "SIMPLIFY U.S. EQUITY PLUS GBTC ETF "
    },
    {
      "symbol": "SPBO",
      "name": "SPDR Portfolio Corporate Bond ETF"
    },
    {
      "symbol": "SPC",
      "name": "CROSSINGBRIDGE PRE-MERGER SPAC ETF "
    },
    {
      "symbol": "SPCB",
      "name": "SuperCom Ltd"
    },
    {
      "symbol": "SPCE",
      "name": "Virgin Galactic Holdings Inc - Class A"
    },
    {
      "symbol": "SPCX",
      "name": "THE SPAC AND NEW ISSUE ETF "
    },
    {
      "symbol": "SPCZ",
      "name": "RIVERNORTH ENHANCED PRE-MERGER SPAC ETF "
    },
    {
      "symbol": "SPD",
      "name": "Simplify US Equity PLUS Downside Convexity ETF"
    },
    {
      "symbol": "SPDG",
      "name": "SPDR Portfolio S&P Sector Neutral Dividend ETF"
    },
    {
      "symbol": "SPDN",
      "name": "DIREXION DAILY S&P 500 (R) BEAR 1X SHARES "
    },
    {
      "symbol": "SPDV",
      "name": "AAM S&P 500 HIGH DIVIDEND VALUE ETF "
    },
    {
      "symbol": "SPDW",
      "name": "SPDR(R) PORTFOLIO DEVELOPED WORLD EX-US ETF "
    },
    {
      "symbol": "SPE",
      "name": "Special Opportunities Fund Inc"
    },
    {
      "symbol": "SPE-P-C",
      "name": "Special Opportunities Fund Inc"
    },
    {
      "symbol": "SPEC",
      "name": "Spectaire Holdings Inc"
    },
    {
      "symbol": "SPECW",
      "name": "Spectaire Holdings Inc - Warrants (19/10/2028)"
    },
    {
      "symbol": "SPEM",
      "name": "SPDR(R) PORTFOLIO EMERGING MARKETS ETF "
    },
    {
      "symbol": "SPEU",
      "name": "SPDR(R) PORTFOLIO EUROPE ETF "
    },
    {
      "symbol": "SPFF",
      "name": "GLOBAL X SUPERINCOME PREFERRED ETF "
    },
    {
      "symbol": "SPFI",
      "name": "South Plains Financial Inc"
    },
    {
      "symbol": "SPG",
      "name": "Simon Property Group Inc"
    },
    {
      "symbol": "SPG-P-J",
      "name": "Simon Property Group Inc"
    },
    {
      "symbol": "SPGC",
      "name": "Sacks Parente Golf Inc"
    },
    {
      "symbol": "SPGI",
      "name": "S&P Global Inc"
    },
    {
      "symbol": "SPGM",
      "name": "SPDR(R) PORTFOLIO MSCI GLOBAL STOCK MARKET ETF "
    },
    {
      "symbol": "SPGP",
      "name": "Invesco S&P 500 GARP ETF"
    },
    {
      "symbol": "SPH",
      "name": "Suburban Propane Partners LP"
    },
    {
      "symbol": "SPHB",
      "name": "INVESCO S&P 500 HIGH BETA ETF "
    },
    {
      "symbol": "SPHD",
      "name": "INVESCO S&P 500 HIGH DIVIDEND LOW VOLATILITY ETF "
    },
    {
      "symbol": "SPHQ",
      "name": "Invesco S&P 500 Quality ETF"
    },
    {
      "symbol": "SPHR",
      "name": "Sphere Entertainment Co - Class A"
    },
    {
      "symbol": "SPHR-W",
      "name": "Sphere Entertainment Co. Class A WhenIssued"
    },
    {
      "symbol": "SPHY",
      "name": "SPDR Portfolio High Yield Bond ETF"
    },
    {
      "symbol": "SPI",
      "name": "SPI Energy Co Ltd"
    },
    {
      "symbol": "SPIB",
      "name": "SPDR Portfolio Intermediate Term Corporate Bond ETF"
    },
    {
      "symbol": "SPIP",
      "name": "SPDR Portfolio TIPS ETF"
    },
    {
      "symbol": "SPIR",
      "name": "Spire Global Inc - Class A"
    },
    {
      "symbol": "SPKBU",
      "name": "Silver Spike Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "SPKL",
      "name": "Spark I Acquisition Corp - Class A"
    },
    {
      "symbol": "SPKLU",
      "name": "Spark I Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SPKLW",
      "name": "Spark I Acquisition Corp - Warrants (28/09/2028)"
    },
    {
      "symbol": "SPKX",
      "name": "ConvexityShares 1x SPIKES Futures ETF"
    },
    {
      "symbol": "SPKY",
      "name": "ConvexityShares Daily 1.5x SPIKES Futures ETF"
    },
    {
      "symbol": "SPLB",
      "name": "SPDR Portfolio Long Term Corporate Bond ETF"
    },
    {
      "symbol": "SPLG",
      "name": "SPDR Portfolio S&P 500 ETF"
    },
    {
      "symbol": "SPLP",
      "name": "Steel Partners Holdings LP"
    },
    {
      "symbol": "SPLP-P-A",
      "name": "Steel Partners Holdings LP"
    },
    {
      "symbol": "SPLV",
      "name": "INVESCO S&P 500 LOW VOLATILITY ETF "
    },
    {
      "symbol": "SPMB",
      "name": "SPDR Portfolio Mortgage Backed Bond ETF"
    },
    {
      "symbol": "SPMD",
      "name": "SPDR Portfolio S&P 400 Mid Cap ETF"
    },
    {
      "symbol": "SPMO",
      "name": "INVESCO S&P 500 MOMENTUM ETF "
    },
    {
      "symbol": "SPMV",
      "name": "INVESCO S&P 500 MINIMUM VARIANCE ETF "
    },
    {
      "symbol": "SPNS",
      "name": "Sapiens International Corp NV"
    },
    {
      "symbol": "SPNT",
      "name": "SiriusPoint Ltd"
    },
    {
      "symbol": "SPNT-P-B",
      "name": "SiriusPoint Ltd"
    },
    {
      "symbol": "SPOK",
      "name": "Spok Holdings Inc"
    },
    {
      "symbol": "SPOT",
      "name": "Spotify Technology S.A."
    },
    {
      "symbol": "SPPI",
      "name": "Spectrum Pharmaceuticals Inc"
    },
    {
      "symbol": "SPPL",
      "name": "Simpple Ltd"
    },
    {
      "symbol": "SPPP",
      "name": "Sprott Physical Platinum and Palladium Trust"
    },
    {
      "symbol": "SPR",
      "name": "Spirit Aerosystems Holdings Inc - Class A"
    },
    {
      "symbol": "SPRB",
      "name": "Spruce Biosciences Inc"
    },
    {
      "symbol": "SPRC",
      "name": "SciSparc Ltd"
    },
    {
      "symbol": "SPRE",
      "name": "SP FUNDS S&P GLOBAL REIT SHARIA ETF "
    },
    {
      "symbol": "SPRO",
      "name": "Spero Therapeutics Inc"
    },
    {
      "symbol": "SPRU",
      "name": "Spruce Power Holding Corporation - Class A"
    },
    {
      "symbol": "SPRX",
      "name": "SPEAR ALPHA ETF "
    },
    {
      "symbol": "SPRY",
      "name": "ARS Pharmaceuticals Inc"
    },
    {
      "symbol": "SPSB",
      "name": "SPDR Portfolio Short Term Corporate Bond ETF"
    },
    {
      "symbol": "SPSC",
      "name": "SPS Commerce Inc"
    },
    {
      "symbol": "SPSK",
      "name": "SP FUNDS DOW JONES GLOBAL SUKUK ETF "
    },
    {
      "symbol": "SPSM",
      "name": "SPDR Portfolio S&P 600 Small Cap ETF"
    },
    {
      "symbol": "SPT",
      "name": "Sprout Social Inc Class A"
    },
    {
      "symbol": "SPTE",
      "name": "SP Funds S&P Global Technology ETF"
    },
    {
      "symbol": "SPTI",
      "name": "SPDR Portfolio Intermediate Term Treasury ETF"
    },
    {
      "symbol": "SPTK",
      "name": "SportsTek Acquisition Corp - Class A"
    },
    {
      "symbol": "SPTKW",
      "name": "SportsTek Acquisition Corp - Warrants (16/02/2028)"
    },
    {
      "symbol": "SPTL",
      "name": "SPDR Portfolio Long Term Treasury ETF"
    },
    {
      "symbol": "SPTM",
      "name": "SPDR Portfolio S&P 1500 Composite Stock Market ETF"
    },
    {
      "symbol": "SPTN",
      "name": "SpartanNash Company"
    },
    {
      "symbol": "SPTS",
      "name": "SPDR Portfolio Short Term Treasury ETF"
    },
    {
      "symbol": "SPUC",
      "name": "SIMPLIFY US EQUITY PLUS UPSIDE CONVEXITY ETF "
    },
    {
      "symbol": "SPUS",
      "name": "SP FUNDS S&P 500 SHARIA INDUSTRY EXCLUSIONS ETF "
    },
    {
      "symbol": "SPUU",
      "name": "DIREXION DAILY S&P 500(R) BULL 2X SHARES "
    },
    {
      "symbol": "SPVM",
      "name": "Invesco Russell Top 200 Pure Value ETF"
    },
    {
      "symbol": "SPVU",
      "name": "INVESCO S&P 500 ENHANCED VALUE ETF "
    },
    {
      "symbol": "SPWH",
      "name": "Sportsman`s Warehouse Holdings Inc"
    },
    {
      "symbol": "SPWO",
      "name": "SP Funds S&P World (ex-US) ETF"
    },
    {
      "symbol": "SPWR",
      "name": "Sunpower Corp"
    },
    {
      "symbol": "SPXC",
      "name": "SPX Technologies Inc"
    },
    {
      "symbol": "SPXE",
      "name": "PROSHARES S&P 500 EX-ENERGY ETF "
    },
    {
      "symbol": "SPXL",
      "name": "DIREXION DAILY S&P 500(R) BULL 3X SHARES "
    },
    {
      "symbol": "SPXN",
      "name": "ProShares S&P 500 Ex-Financials ETF"
    },
    {
      "symbol": "SPXS",
      "name": "DIREXION DAILY S&P 500(R) BEAR 3X SHARES "
    },
    {
      "symbol": "SPXT",
      "name": "ProShares S&P 500 Ex-Technology ETF"
    },
    {
      "symbol": "SPXU",
      "name": "ProShares UltraPro Short S&P 500"
    },
    {
      "symbol": "SPXV",
      "name": "PROSHARES S&P 500 EX-HEALTH CARE ETF "
    },
    {
      "symbol": "SPXX",
      "name": "Nuveen S&P 500 Dynamic Overwrite Fund"
    },
    {
      "symbol": "SPY",
      "name": "SPDR S&P 500 ETF Trust"
    },
    {
      "symbol": "SPYC",
      "name": "SIMPLIFY US EQUITY PLUS CONVEXITY ETF "
    },
    {
      "symbol": "SPYD",
      "name": "SPDR Portfolio S&P 500 High Dividend ETF"
    },
    {
      "symbol": "SPYG",
      "name": "SPDR Portfolio S&P 500 Growth ETF"
    },
    {
      "symbol": "SPYI",
      "name": "NEOS S&P 500 High Income ETF"
    },
    {
      "symbol": "SPYT",
      "name": "Defiance S&P 500 Target Income ETF"
    },
    {
      "symbol": "SPYV",
      "name": "SPDR Portfolio S&P 500 Value ETF"
    },
    {
      "symbol": "SPYX",
      "name": "SSGA SPDR S&P 500 Fossil Fuel Free ETF"
    },
    {
      "symbol": "SQ",
      "name": "Block Inc - Class A"
    },
    {
      "symbol": "SQEW",
      "name": "LeaderShares Equity Skew ETF"
    },
    {
      "symbol": "SQFT",
      "name": "Presidio Property Trust Inc - Class A"
    },
    {
      "symbol": "SQFTP",
      "name": "Presidio Property Trust Inc"
    },
    {
      "symbol": "SQFTW",
      "name": "Presidio Property Trust Inc - Warrants (24/01/2027)"
    },
    {
      "symbol": "SQLV",
      "name": "Royce Quant Small-Cap Quality Value ETF"
    },
    {
      "symbol": "SQM",
      "name": "Sociedad Quimica Y Minera de Chile S.A."
    },
    {
      "symbol": "SQNS",
      "name": "Sequans Communications S.A"
    },
    {
      "symbol": "SQQQ",
      "name": "ProShares UltraPro Short QQQ -3x Shares"
    },
    {
      "symbol": "SQSP",
      "name": "Squarespace Inc - Class A"
    },
    {
      "symbol": "SQY",
      "name": "YIELDMAX SQ OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "SR",
      "name": "Spire Inc"
    },
    {
      "symbol": "SR-P-A",
      "name": "Spire Inc"
    },
    {
      "symbol": "SRAD",
      "name": "Sportradar Group AG - Class A"
    },
    {
      "symbol": "SRAX",
      "name": "SRAX Inc - Class A"
    },
    {
      "symbol": "SRBK",
      "name": "SR Bancorp Inc"
    },
    {
      "symbol": "SRCE",
      "name": "1st Source Corp"
    },
    {
      "symbol": "SRCL",
      "name": "Stericycle Inc"
    },
    {
      "symbol": "SRDX",
      "name": "Surmodics Inc"
    },
    {
      "symbol": "SRE",
      "name": "Sempra"
    },
    {
      "symbol": "SREA",
      "name": "Sempra"
    },
    {
      "symbol": "SRET",
      "name": "GLOBAL X SUPERDIVIDEND REIT ETF "
    },
    {
      "symbol": "SRFM",
      "name": "Surf Air Mobility Inc"
    },
    {
      "symbol": "SRG",
      "name": "Seritage Growth Properties - Class A"
    },
    {
      "symbol": "SRG-P-A",
      "name": "Seritage Growth Properties"
    },
    {
      "symbol": "SRHQ",
      "name": "SRH U.S. QUALITY ETF "
    },
    {
      "symbol": "SRHR",
      "name": "SRH REIT Covered Call ETF"
    },
    {
      "symbol": "SRI",
      "name": "Stoneridge Inc"
    },
    {
      "symbol": "SRL",
      "name": "Scully Royalty Ltd"
    },
    {
      "symbol": "SRLN",
      "name": "SPDR Blackstone Senior Loan ETF"
    },
    {
      "symbol": "SRM",
      "name": "SRM Entertainment Inc"
    },
    {
      "symbol": "SROI",
      "name": "Calamos Antetokounmpo Global Sustainable Equities ETF"
    },
    {
      "symbol": "SRPT",
      "name": "Sarepta Therapeutics Inc"
    },
    {
      "symbol": "SRRK",
      "name": "Scholar Rock Holding Corp"
    },
    {
      "symbol": "SRS",
      "name": "ProShares UltraShort Real Estate -2x Shares"
    },
    {
      "symbol": "SRTS",
      "name": "Sensus Healthcare Inc"
    },
    {
      "symbol": "SRTY",
      "name": "ProShares UltraPro Short Russell2000 -3x Shares"
    },
    {
      "symbol": "SRV",
      "name": "NXG Cushing Midstream Energy Fund"
    },
    {
      "symbol": "SRV-R",
      "name": "NXG Cushing Midstream Energy Fund Rights expiring December 14 2023 Rights"
    },
    {
      "symbol": "SRV-R-W",
      "name": "NXG Cushing Midstream Energy Fund Rights expiring December 14 2023 Rights when issued"
    },
    {
      "symbol": "SRVR",
      "name": "Pacer Data & Infrastructure Real Estate ETF"
    },
    {
      "symbol": "SRZN",
      "name": "Surrozen Inc"
    },
    {
      "symbol": "SRZNW",
      "name": "Surrozen Inc - Warrants (01/08/2026)"
    },
    {
      "symbol": "SSB",
      "name": "SouthState Corporation"
    },
    {
      "symbol": "SSBI",
      "name": "Summit State Bank"
    },
    {
      "symbol": "SSBK",
      "name": "Southern States Bancshares Inc"
    },
    {
      "symbol": "SSD",
      "name": "Simpson Manufacturing Co. Inc"
    },
    {
      "symbol": "SSFI",
      "name": "Day Hagan/Ned Davis Research Smart Sector Fixed Income ETF"
    },
    {
      "symbol": "SSG",
      "name": "ProShares UltraShort Semiconductors -2x Shares"
    },
    {
      "symbol": "SSIC",
      "name": "Silver Spike Investment Corp"
    },
    {
      "symbol": "SSKN",
      "name": "STRATA Skin Sciences Inc"
    },
    {
      "symbol": "SSL",
      "name": "Sasol Ltd"
    },
    {
      "symbol": "SSLY",
      "name": "Syntax Stratified SmallCap ETF"
    },
    {
      "symbol": "SSNC",
      "name": "SS&C Technologies Holdings Inc"
    },
    {
      "symbol": "SSNT",
      "name": "SilverSun Technologies Inc"
    },
    {
      "symbol": "SSO",
      "name": "ProShares Ultra S&P500 2x Shares"
    },
    {
      "symbol": "SSP",
      "name": "E.W. Scripps Co. - Class A"
    },
    {
      "symbol": "SSPX",
      "name": "JANUS HENDERSON U.S. SUSTAINABLE EQUITY ETF "
    },
    {
      "symbol": "SSPY",
      "name": "SYNTAX STRATIFIED LARGECAP ETF "
    },
    {
      "symbol": "SSRM",
      "name": "SSR Mining Inc"
    },
    {
      "symbol": "SSSS",
      "name": "SuRo Capital Corp"
    },
    {
      "symbol": "SSSSL",
      "name": "SuRo Capital Corp"
    },
    {
      "symbol": "SST",
      "name": "System1 Inc - Class A"
    },
    {
      "symbol": "SST-WS",
      "name": "System1 Inc Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "SSTI",
      "name": "SoundThinking Inc"
    },
    {
      "symbol": "SSTK",
      "name": "Shutterstock Inc"
    },
    {
      "symbol": "SSUS",
      "name": "Day Hagan/Ned Davis Research Smart Sector ETF"
    },
    {
      "symbol": "SSXU",
      "name": "Day Hagan/Ned Davis Research Smart Sector International ETF"
    },
    {
      "symbol": "SSY",
      "name": "Sunlink Health Systems Inc"
    },
    {
      "symbol": "SSYS",
      "name": "Stratasys Ltd"
    },
    {
      "symbol": "ST",
      "name": "Sensata Technologies Holding Plc"
    },
    {
      "symbol": "STAA",
      "name": "Staar Surgical Company"
    },
    {
      "symbol": "STAF",
      "name": "Staffing 360 Solutions Inc"
    },
    {
      "symbol": "STAG",
      "name": "STAG Industrial Inc"
    },
    {
      "symbol": "STAX",
      "name": "Macquarie ETF Trust TaxFree USA Short Term"
    },
    {
      "symbol": "STBA",
      "name": "S & T Bancorp Inc"
    },
    {
      "symbol": "STBF",
      "name": "Performance Trust Short Term Bond ETF"
    },
    {
      "symbol": "STBX",
      "name": "Starbox Group Holdings Ltd"
    },
    {
      "symbol": "STC",
      "name": "Stewart Information Services Corp"
    },
    {
      "symbol": "STCE",
      "name": "Schwab Crypto Thematic ETF"
    },
    {
      "symbol": "STCN",
      "name": "Steel Connect Inc"
    },
    {
      "symbol": "STE",
      "name": "Steris Plc"
    },
    {
      "symbol": "STEL",
      "name": "Stellar Bancorp Inc"
    },
    {
      "symbol": "STEM",
      "name": "Stem Inc - Class A"
    },
    {
      "symbol": "STEP",
      "name": "StepStone Group Inc - Class A"
    },
    {
      "symbol": "STER",
      "name": "Sterling Check Corp"
    },
    {
      "symbol": "STEW",
      "name": "SRH Total Return Fund Inc"
    },
    {
      "symbol": "STG",
      "name": "Sunlands Technology Group"
    },
    {
      "symbol": "STGW",
      "name": "Stagwell Inc - Class A"
    },
    {
      "symbol": "STHO",
      "name": "Star Holdings"
    },
    {
      "symbol": "STHOV",
      "name": "Star Holdings Shares of Beneficial Interest"
    },
    {
      "symbol": "STI",
      "name": "Solidion Technology Inc"
    },
    {
      "symbol": "STIM",
      "name": "Neuronetics Inc"
    },
    {
      "symbol": "STIP",
      "name": "ISHARES 0-5 YEAR TIPS BOND ETF "
    },
    {
      "symbol": "STK",
      "name": "Columbia Seligman Premium Technology Growth Fund Inc"
    },
    {
      "symbol": "STKH",
      "name": "Steakholder Foods Ltd"
    },
    {
      "symbol": "STKL",
      "name": "Sunopta Inc"
    },
    {
      "symbol": "STKS",
      "name": "ONE Group Hospitality Inc"
    },
    {
      "symbol": "STLA",
      "name": "Stellantis N.V"
    },
    {
      "symbol": "STLD",
      "name": "Steel Dynamics Inc"
    },
    {
      "symbol": "STLG",
      "name": "iShares Factors US Growth Style ETF"
    },
    {
      "symbol": "STLV",
      "name": "ISHARES FACTORS US VALUE STYLE ETF "
    },
    {
      "symbol": "STM",
      "name": "ST Microelectronics"
    },
    {
      "symbol": "STN",
      "name": "Stantec Inc"
    },
    {
      "symbol": "STNC",
      "name": "Hennessy Stance ESG ETF"
    },
    {
      "symbol": "STNE",
      "name": "StoneCo Ltd - Class A"
    },
    {
      "symbol": "STNG",
      "name": "Scorpio Tankers Inc"
    },
    {
      "symbol": "STOK",
      "name": "Stoke Therapeutics Inc"
    },
    {
      "symbol": "STOT",
      "name": "SPDR DoubleLine Short Duration Total Return Tactical ETF"
    },
    {
      "symbol": "STPZ",
      "name": "PIMCO 1-5 Year U.S. TIPS Index Exchange-Traded Fund"
    },
    {
      "symbol": "STR",
      "name": "Sitio Royalties Corp - Class A"
    },
    {
      "symbol": "STRA",
      "name": "Strategic Education Inc"
    },
    {
      "symbol": "STRL",
      "name": "Sterling Infrastructure Inc"
    },
    {
      "symbol": "STRM",
      "name": "Streamline Health Solutions Inc"
    },
    {
      "symbol": "STRO",
      "name": "Sutro Biopharma Inc"
    },
    {
      "symbol": "STRR",
      "name": "Star Equity Holdings Inc"
    },
    {
      "symbol": "STRRP",
      "name": "Star Equity Holdings Inc"
    },
    {
      "symbol": "STRS",
      "name": "Stratus Properties Inc"
    },
    {
      "symbol": "STRT",
      "name": "Strattec Security Corp"
    },
    {
      "symbol": "STRV",
      "name": "Strive 500 ETF"
    },
    {
      "symbol": "STRW",
      "name": "Strawberry Fields Reit Inc"
    },
    {
      "symbol": "STSS",
      "name": "Sharps Technology Inc"
    },
    {
      "symbol": "STSSW",
      "name": "Sharps Technology Inc - Warrants (13/04/2027)"
    },
    {
      "symbol": "STT",
      "name": "State Street Corp"
    },
    {
      "symbol": "STT-P-G",
      "name": "State Street Corp"
    },
    {
      "symbol": "STTK",
      "name": "Shattuck Labs Inc"
    },
    {
      "symbol": "STVN",
      "name": "Stevanato Group Spa"
    },
    {
      "symbol": "STWD",
      "name": "Starwood Property Trust Inc"
    },
    {
      "symbol": "STX",
      "name": "Seagate Technology Holdings Plc"
    },
    {
      "symbol": "STXD",
      "name": "Strive 1000 Dividend Growth ETF"
    },
    {
      "symbol": "STXE",
      "name": "Strive Emerging Markets Ex-China ETF"
    },
    {
      "symbol": "STXG",
      "name": "Strive 1000 Growth ETF"
    },
    {
      "symbol": "STXK",
      "name": "Strive Small-Cap ETF"
    },
    {
      "symbol": "STXM",
      "name": "Strive Mid-Cap ETF"
    },
    {
      "symbol": "STXS",
      "name": "Stereotaxis Inc"
    },
    {
      "symbol": "STXT",
      "name": "Strive Total Return Bond ETF"
    },
    {
      "symbol": "STXV",
      "name": "Strive 1000 Value ETF"
    },
    {
      "symbol": "STZ",
      "name": "Constellation Brands Inc - Class A"
    },
    {
      "symbol": "STZ-B",
      "name": "Constellation Brands Inc - Class B"
    },
    {
      "symbol": "SU",
      "name": "Suncor Energy Inc"
    },
    {
      "symbol": "SUAC",
      "name": "ShoulderUp Technology Acquisition Corp - Class A"
    },
    {
      "symbol": "SUAC-U",
      "name": "ShoulderUp Technology Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SUAC-WS",
      "name": "ShoulderUp Technology Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "SUB",
      "name": "iShares Short-Term National Muni Bond ETF"
    },
    {
      "symbol": "SUGP",
      "name": "SU Group Holdings Ltd"
    },
    {
      "symbol": "SUI",
      "name": "Sun Communities Inc"
    },
    {
      "symbol": "SUM",
      "name": "Summit Materials Inc - Class A"
    },
    {
      "symbol": "SUN",
      "name": "Sunoco LP"
    },
    {
      "symbol": "SUP",
      "name": "Superior Industries International Inc"
    },
    {
      "symbol": "SUPL",
      "name": "PROSHARES SUPPLY CHAIN LOGISTICS ETF "
    },
    {
      "symbol": "SUPN",
      "name": "Supernus Pharmaceuticals Inc"
    },
    {
      "symbol": "SUPP",
      "name": "TCW TRANSFORM SUPPLY CHAIN ETF "
    },
    {
      "symbol": "SUPV",
      "name": "Grupo Supervielle S.A."
    },
    {
      "symbol": "SURE",
      "name": "ADVISORSHARES INSIDER ADVANTAGE ETF "
    },
    {
      "symbol": "SURF",
      "name": "Surface Oncology Inc"
    },
    {
      "symbol": "SURG",
      "name": "Surgepays Inc"
    },
    {
      "symbol": "SURGW",
      "name": "Surgepays Inc - Warrants (22/10/2024)"
    },
    {
      "symbol": "SURI",
      "name": "SIMPLIFY PROPEL OPPORTUNITIES ETF "
    },
    {
      "symbol": "SUSA",
      "name": "MSCI USA ESG Select ETF"
    },
    {
      "symbol": "SUSB",
      "name": "iShares Trust iShares ESG Aware 1-5 Year USD Corporate Bond ETF"
    },
    {
      "symbol": "SUSC",
      "name": "iShares Trust iShares ESG Aware USD Corporate Bond ETF"
    },
    {
      "symbol": "SUSL",
      "name": "ISHARES ESG MSCI USA LEADERS ETF "
    },
    {
      "symbol": "SUZ",
      "name": "Suzano S.A."
    },
    {
      "symbol": "SVA",
      "name": "Sinovac Biotech Ltd"
    },
    {
      "symbol": "SVAL",
      "name": "iShares US Small Cap Value Factor ETF"
    },
    {
      "symbol": "SVC",
      "name": "Service Properties Trust"
    },
    {
      "symbol": "SVFAU",
      "name": "SVF Investment Corp - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "SVII",
      "name": "Spring Valley Acquisition Corp II - Class A"
    },
    {
      "symbol": "SVIIR",
      "name": "Spring Valley Acquisition Corp II"
    },
    {
      "symbol": "SVIIU",
      "name": "Spring Valley Acquisition Corp II - Units (1 Ord Class A 1 Right & 1/2 War)"
    },
    {
      "symbol": "SVIIW",
      "name": "Spring Valley Acquisition Corp II - Warrants (12/10/2027)"
    },
    {
      "symbol": "SVIX",
      "name": "1x Short VIX Futures ETF"
    },
    {
      "symbol": "SVM",
      "name": "Silvercorp Metals Inc"
    },
    {
      "symbol": "SVMH",
      "name": "SRIVARU Holding Ltd"
    },
    {
      "symbol": "SVMHW",
      "name": "SRIVARU Holding Ltd - Warrants (08/12/2028)"
    },
    {
      "symbol": "SVNAU",
      "name": "7 Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "SVOL",
      "name": "Simplify Volatility Premium ETF"
    },
    {
      "symbol": "SVRA",
      "name": "Savara Inc"
    },
    {
      "symbol": "SVRE",
      "name": "SaverOne 2014 Ltd"
    },
    {
      "symbol": "SVREW",
      "name": "SaverOne 2014 Ltd - Warrants(04/05/2027)"
    },
    {
      "symbol": "SVT",
      "name": "Servotronics Inc"
    },
    {
      "symbol": "SVV",
      "name": "Savers Value Village Inc"
    },
    {
      "symbol": "SVXY",
      "name": "ProShares Short VIX Short-Term Futures ETF -1x Shares"
    },
    {
      "symbol": "SWAG",
      "name": "Stran & Company Inc"
    },
    {
      "symbol": "SWAGW",
      "name": "Stran & Company Inc - Warrants (01/11/2026)"
    },
    {
      "symbol": "SWAN",
      "name": "Amplify BlackSwan Growth & Treasury Core ETF"
    },
    {
      "symbol": "SWAV",
      "name": "ShockWave Medical Inc"
    },
    {
      "symbol": "SWBI",
      "name": "Smith & Wesson Brands Inc"
    },
    {
      "symbol": "SWEB",
      "name": "AXS Short China Internet ETF"
    },
    {
      "symbol": "SWET",
      "name": "Athlon Acquisition Corp - Class A"
    },
    {
      "symbol": "SWETU",
      "name": "Athlon Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "SWETW",
      "name": "Athlon Acquisition Corp - Warrants (12/01/2026)"
    },
    {
      "symbol": "SWI",
      "name": "SolarWinds Corp"
    },
    {
      "symbol": "SWIM",
      "name": "Latham Group Inc"
    },
    {
      "symbol": "SWIN",
      "name": "Solowin Holdings"
    },
    {
      "symbol": "SWK",
      "name": "Stanley Black & Decker Inc"
    },
    {
      "symbol": "SWKH",
      "name": "Swk Holdings Corp"
    },
    {
      "symbol": "SWKHL",
      "name": "Swk Holdings Corp"
    },
    {
      "symbol": "SWKS",
      "name": "Skyworks Solutions Inc"
    },
    {
      "symbol": "SWN",
      "name": "Southwestern Energy Company"
    },
    {
      "symbol": "SWSS",
      "name": "Clean Energy Special Situations Corp"
    },
    {
      "symbol": "SWSSU",
      "name": "Clean Energy Special Situations Corp - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "SWSSW",
      "name": "Clean Energy Special Situations Corp - Warrants (01/12/2027)"
    },
    {
      "symbol": "SWTX",
      "name": "SpringWorks Therapeutics Inc"
    },
    {
      "symbol": "SWVL",
      "name": "Swvl Holdings Corp - Class A"
    },
    {
      "symbol": "SWVLW",
      "name": "Swvl Holdings Corp - Warrants (31/03/2027)"
    },
    {
      "symbol": "SWX",
      "name": "Southwest Gas Holdings Inc"
    },
    {
      "symbol": "SWZ",
      "name": "Swiss Helvetia Fund Inc"
    },
    {
      "symbol": "SXC",
      "name": "SunCoke Energy Inc"
    },
    {
      "symbol": "SXI",
      "name": "Standex International Corp"
    },
    {
      "symbol": "SXQG",
      "name": "ETC 6 MERIDIAN QUALITY GROWTH ETF "
    },
    {
      "symbol": "SXT",
      "name": "Sensient Technologies Corp"
    },
    {
      "symbol": "SXTC",
      "name": "China SXT Pharmaceuticals Inc"
    },
    {
      "symbol": "SXTP",
      "name": "60 Degrees Pharmaceuticals Inc"
    },
    {
      "symbol": "SXTPW",
      "name": "60 Degrees Pharmaceuticals Inc - Warrants (16/05/2028)"
    },
    {
      "symbol": "SXUS",
      "name": "JANUS HENDERSON INTERNATIONAL SUSTAINABLE EQUITY ETF "
    },
    {
      "symbol": "SY",
      "name": "So-Young International Inc"
    },
    {
      "symbol": "SYBT",
      "name": "Stock Yards Bancorp Inc"
    },
    {
      "symbol": "SYBX",
      "name": "Synlogic Inc"
    },
    {
      "symbol": "SYF",
      "name": "Synchrony Financial"
    },
    {
      "symbol": "SYF-P-A",
      "name": "Synchrony Financial"
    },
    {
      "symbol": "SYII",
      "name": "Syntax Stratified Total Market II ETF"
    },
    {
      "symbol": "SYK",
      "name": "Stryker Corp"
    },
    {
      "symbol": "SYLD",
      "name": "Cambria Shareholder Yield ETF"
    },
    {
      "symbol": "SYM",
      "name": "Symbotic Inc - Class A"
    },
    {
      "symbol": "SYNA",
      "name": "Synaptics Inc"
    },
    {
      "symbol": "SYNB",
      "name": "Putnam BioRevolution ETF"
    },
    {
      "symbol": "SYNX",
      "name": "Silynxcom Ltd"
    },
    {
      "symbol": "SYPR",
      "name": "Sypris Solutions Inc"
    },
    {
      "symbol": "SYRA",
      "name": "Syra Health Corp - Class A"
    },
    {
      "symbol": "SYRE",
      "name": "Spyre Therapeutics Inc"
    },
    {
      "symbol": "SYRS",
      "name": "Syros Pharmaceuticals Inc"
    },
    {
      "symbol": "SYT",
      "name": "SYLA Technologies Co Ltd"
    },
    {
      "symbol": "SYTA",
      "name": "Siyata Mobile Inc"
    },
    {
      "symbol": "SYTAW",
      "name": "Siyata Mobile Inc - Warrants (25/09/2025)"
    },
    {
      "symbol": "SYUS",
      "name": "Syntax Stratified U.S. Total Market ETF"
    },
    {
      "symbol": "SYY",
      "name": "Sysco Corp"
    },
    {
      "symbol": "SZK",
      "name": "ProShares UltraShort Consumer Staples"
    },
    {
      "symbol": "SZNE",
      "name": "Pacer CFRA Stovall Equal Weight Seasonal Rotation ETF"
    },
    {
      "symbol": "T",
      "name": "AT&T Inc"
    },
    {
      "symbol": "T-P-A",
      "name": "AT&T Inc"
    },
    {
      "symbol": "T-P-C",
      "name": "AT&T Inc"
    },
    {
      "symbol": "TAC",
      "name": "Transalta Corp"
    },
    {
      "symbol": "TACK",
      "name": "Fairlead Tactical Sector ETF"
    },
    {
      "symbol": "TACT",
      "name": "Transact Technologies Inc"
    },
    {
      "symbol": "TAFI",
      "name": "AB TAX-AWARE SHORT DURATION MUNICIPAL ETF "
    },
    {
      "symbol": "TAFL",
      "name": "AB Tax-Aware Long Municipal ETF"
    },
    {
      "symbol": "TAFM",
      "name": "AB Tax-Aware Intermediate Municipal ETF"
    },
    {
      "symbol": "TAGG",
      "name": "T. ROWE PRICE QM U.S. BOND ETF "
    },
    {
      "symbol": "TAGS",
      "name": "Teucrium Agricultural Fund"
    },
    {
      "symbol": "TAIL",
      "name": "Cambria Tail Risk ETF"
    },
    {
      "symbol": "TAIT",
      "name": "Taitron Components Inc - Class A"
    },
    {
      "symbol": "TAK",
      "name": "Takeda Pharmaceutical Company"
    },
    {
      "symbol": "TAL",
      "name": "TAL Education Group"
    },
    {
      "symbol": "TALK",
      "name": "Talkspace Inc"
    },
    {
      "symbol": "TALKW",
      "name": "Talkspace Inc - Warrants (21/06/2025)"
    },
    {
      "symbol": "TALO",
      "name": "Talos Energy Inc"
    },
    {
      "symbol": "TAN",
      "name": "INVESCO SOLAR ETF "
    },
    {
      "symbol": "TANH",
      "name": "Tantech Holdings Ltd"
    },
    {
      "symbol": "TANNI",
      "name": "TravelCenters of America Inc"
    },
    {
      "symbol": "TANNL",
      "name": "TravelCenters of America Inc"
    },
    {
      "symbol": "TANNZ",
      "name": "TravelCenters of America Inc"
    },
    {
      "symbol": "TAOP",
      "name": "Taoping Inc"
    },
    {
      "symbol": "TAP",
      "name": "Molson Coors Beverage Company - Class B"
    },
    {
      "symbol": "TAP-A",
      "name": "Molson Coors Beverage Company - Class A"
    },
    {
      "symbol": "TARA",
      "name": "Protara Therapeutics Inc"
    },
    {
      "symbol": "TARK",
      "name": "AXS 2X Innovation ETF"
    },
    {
      "symbol": "TARO",
      "name": "Taro Pharmaceutical Industries"
    },
    {
      "symbol": "TARS",
      "name": "Tarsus Pharmaceuticals Inc"
    },
    {
      "symbol": "TASK",
      "name": "TaskUs Inc Class A"
    },
    {
      "symbol": "TAST",
      "name": "Carrols Restaurant Group Inc"
    },
    {
      "symbol": "TATT",
      "name": "TAT Technologies Ltd"
    },
    {
      "symbol": "TAXF",
      "name": "AMERICAN CENTURY DIVERSIFIED MUNICIPAL BOND ETF "
    },
    {
      "symbol": "TAXX",
      "name": "BondBloxx IR+M Tax-Aware Short Duration ETF"
    },
    {
      "symbol": "TAYD",
      "name": "Taylor Devices Inc"
    },
    {
      "symbol": "TBB",
      "name": "AT&T Inc"
    },
    {
      "symbol": "TBBB",
      "name": "BBB Foods Inc - Class A"
    },
    {
      "symbol": "TBBK",
      "name": "Bancorp Inc (The)"
    },
    {
      "symbol": "TBC",
      "name": "AT&T Inc"
    },
    {
      "symbol": "TBF",
      "name": "ProShares Short 20+ Year Treasury -1x Shares"
    },
    {
      "symbol": "TBFC",
      "name": "The Brinsmere Fund Conservative ETF"
    },
    {
      "symbol": "TBFG",
      "name": "The Brinsmere Fund Growth ETF"
    },
    {
      "symbol": "TBG",
      "name": "TBG Dividend Focus ETF"
    },
    {
      "symbol": "TBI",
      "name": "TrueBlue Inc"
    },
    {
      "symbol": "TBIL",
      "name": "US TREASURY 3 MONTH BILL ETF "
    },
    {
      "symbol": "TBIO",
      "name": "Telesis Bio Inc"
    },
    {
      "symbol": "TBJL",
      "name": "Innovator 20+ Year Treasury Bond 9 Buffer ETF - July"
    },
    {
      "symbol": "TBLA",
      "name": "Taboola.com Ltd"
    },
    {
      "symbol": "TBLAW",
      "name": "Taboola.com Ltd - Warrants (29/06/2026)"
    },
    {
      "symbol": "TBLD",
      "name": "Thornburg Income Builder Opportunities Trust"
    },
    {
      "symbol": "TBLL",
      "name": "INVESCO SHORT TERM TREASURY ETF "
    },
    {
      "symbol": "TBLT",
      "name": "Toughbuilt Industries Inc"
    },
    {
      "symbol": "TBMC",
      "name": "Trailblazer Merger Corp I - Class A"
    },
    {
      "symbol": "TBMCR",
      "name": "Trailblazer Merger Corp I"
    },
    {
      "symbol": "TBMCU",
      "name": "Trailblazer Merger Corp I - Units (1 Ord Class A & 1 Right)"
    },
    {
      "symbol": "TBNK",
      "name": "Territorial Bancorp Inc"
    },
    {
      "symbol": "TBPH",
      "name": "Theravance Biopharma Inc"
    },
    {
      "symbol": "TBRG",
      "name": "Computer Programs & Systems Inc"
    },
    {
      "symbol": "TBSA",
      "name": "TB SA Acquisition Corp - Class A"
    },
    {
      "symbol": "TBSAU",
      "name": "TB SA Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "TBSAW",
      "name": "TB SA Acquisition Corp - Warrants (01/03/2028)"
    },
    {
      "symbol": "TBT",
      "name": "PowerShares UltraShort Lehman 20+ Year Treasury ProShares 2x Shares"
    },
    {
      "symbol": "TBUX",
      "name": "T. ROWE PRICE ULTRA SHORT-TERM BOND ETF "
    },
    {
      "symbol": "TBX",
      "name": "ProShares Short 7-10 Year Treasury -1x Shares"
    },
    {
      "symbol": "TC",
      "name": "TuanChe Ltd"
    },
    {
      "symbol": "TCAF",
      "name": "T. ROWE PRICE CAPITAL APPRECIATION EQUITY ETF "
    },
    {
      "symbol": "TCBC",
      "name": "TC Bancshares Inc"
    },
    {
      "symbol": "TCBI",
      "name": "Texas Capital Bancshares Inc"
    },
    {
      "symbol": "TCBIO",
      "name": "Texas Capital Bancshares Inc"
    },
    {
      "symbol": "TCBK",
      "name": "Trico Bancshares"
    },
    {
      "symbol": "TCBP",
      "name": "TC BioPharm (Holdings) plc"
    },
    {
      "symbol": "TCBPW",
      "name": "TC BioPharm (Holdings) plc - Warrants (08/02/2027)"
    },
    {
      "symbol": "TCBS",
      "name": "Texas Community Bancshares Inc"
    },
    {
      "symbol": "TCBX",
      "name": "Third Coast Bancshares Inc"
    },
    {
      "symbol": "TCDA"
    },
    {
      "symbol": "TCHI",
      "name": "ISHARES MSCI CHINA MULTISECTOR TECH ETF "
    },
    {
      "symbol": "TCHP",
      "name": "T. ROWE PRICE BLUE CHIP GROWTH ETF "
    },
    {
      "symbol": "TCI",
      "name": "Transcontinental Realty Investors Inc"
    },
    {
      "symbol": "TCJH",
      "name": "Top KingWin Ltd - Class A"
    },
    {
      "symbol": "TCMD",
      "name": "Tactile Systems Technology Inc"
    },
    {
      "symbol": "TCN",
      "name": "Tricon Residential Inc"
    },
    {
      "symbol": "TCOA",
      "name": "Zalatoris Acquisition Corp - Class A"
    },
    {
      "symbol": "TCOA-U",
      "name": "Zalatoris Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "TCOA-WS",
      "name": "Zalatoris Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "TCOM",
      "name": "Trip.com Group Ltd"
    },
    {
      "symbol": "TCON",
      "name": "TRACON Pharmaceuticals Inc"
    },
    {
      "symbol": "TCPC",
      "name": "BlackRock TCP Capital Corp"
    },
    {
      "symbol": "TCRT",
      "name": "Alaunos Therapeutics Inc"
    },
    {
      "symbol": "TCRX",
      "name": "Tscan Therapeutics Inc"
    },
    {
      "symbol": "TCS",
      "name": "Container Store Group Inc"
    },
    {
      "symbol": "TCTM",
      "name": "Tarena International Inc"
    },
    {
      "symbol": "TCVA",
      "name": "TCV Acquisition Corp - Class A"
    },
    {
      "symbol": "TCX",
      "name": "Tucows Inc - Class A"
    },
    {
      "symbol": "TD",
      "name": "Toronto Dominion Bank"
    },
    {
      "symbol": "TDC",
      "name": "Teradata Corp"
    },
    {
      "symbol": "TDCX",
      "name": "TDCX Inc"
    },
    {
      "symbol": "TDF",
      "name": "Templeton Dragon Fund Inc"
    },
    {
      "symbol": "TDG",
      "name": "Transdigm Group Incorporated"
    },
    {
      "symbol": "TDI",
      "name": "TOUCHSTONE DYNAMIC INTERNATIONAL ETF "
    },
    {
      "symbol": "TDIV",
      "name": "FIRST TRUST NASDAQ TECHNOLOGY DIVIDEND INDEX FUND "
    },
    {
      "symbol": "TDOC",
      "name": "Teladoc Health Inc"
    },
    {
      "symbol": "TDS",
      "name": "Telephone And Data Systems Inc"
    },
    {
      "symbol": "TDS-P-U",
      "name": "Telephone And Data Systems Inc"
    },
    {
      "symbol": "TDS-P-V",
      "name": "Telephone And Data Systems Inc"
    },
    {
      "symbol": "TDSA",
      "name": "Cabana Target Drawdown 5 ETF"
    },
    {
      "symbol": "TDSB",
      "name": "CABANA TARGET BETA ETF "
    },
    {
      "symbol": "TDSC",
      "name": "Cabana Target Drawdown 10 ETF"
    },
    {
      "symbol": "TDSD",
      "name": "Cabana Target Drawdown 13 ETF"
    },
    {
      "symbol": "TDSE",
      "name": "Cabana Target Drawdown 16 ETF"
    },
    {
      "symbol": "TDTF",
      "name": "FLEXSHARES IBOXX 5-YEAR TARGET DURATION TIPS INDEX FUND "
    },
    {
      "symbol": "TDTT",
      "name": "FLEXSHARES IBOXX 3-YEAR TARGET DURATION TIPS INDEX FUND "
    },
    {
      "symbol": "TDUP",
      "name": "ThredUp Inc - Class A"
    },
    {
      "symbol": "TDV",
      "name": "ProShares S&P Technology Dividend Aristocrats ETF"
    },
    {
      "symbol": "TDVG",
      "name": "T. ROWE PRICE DIVIDEND GROWTH ETF "
    },
    {
      "symbol": "TDVI",
      "name": "FT VEST TECHNOLOGY DIVIDEND TARGET INCOME ETF "
    },
    {
      "symbol": "TDW",
      "name": "Tidewater Inc - New"
    },
    {
      "symbol": "TDW-WS",
      "name": "Tidewater Inc - Warrants (24/11/2024)"
    },
    {
      "symbol": "TDY",
      "name": "Teledyne Technologies Inc"
    },
    {
      "symbol": "TEAF",
      "name": "Ecofin Sustainable and Social Impact Term Fund"
    },
    {
      "symbol": "TEAM",
      "name": "Atlassian Corporation - Class A"
    },
    {
      "symbol": "TECB",
      "name": "ISHARES U.S. TECH BREAKTHROUGH MULTISECTOR ETF "
    },
    {
      "symbol": "TECH",
      "name": "Bio-Techne Corp"
    },
    {
      "symbol": "TECK",
      "name": "Teck Resources Ltd - Class B - Class B (Sub Voting)"
    },
    {
      "symbol": "TECL",
      "name": "DIREXION DAILY TECHNOLOGY BULL 3X SHARES "
    },
    {
      "symbol": "TECS",
      "name": "DIREXION DAILY TECHNOLOGY BEAR 3X SHARES "
    },
    {
      "symbol": "TECTP",
      "name": "Tectonic Financial Inc"
    },
    {
      "symbol": "TEF",
      "name": "Telefonica S.A"
    },
    {
      "symbol": "TEI",
      "name": "Templeton Emerging Markets Income Fund Inc"
    },
    {
      "symbol": "TEL",
      "name": "TE Connectivity Ltd"
    },
    {
      "symbol": "TELA",
      "name": "TELA Bio Inc"
    },
    {
      "symbol": "TELL",
      "name": "Tellurian Inc"
    },
    {
      "symbol": "TELLL",
      "name": "Tellurian Inc"
    },
    {
      "symbol": "TELO",
      "name": "Telomir Pharmaceuticals Inc"
    },
    {
      "symbol": "TEMP",
      "name": "JPMORGAN CLIMATE CHANGE SOLUTIONS ETF "
    },
    {
      "symbol": "TENB",
      "name": "Tenable Holdings Inc"
    },
    {
      "symbol": "TENK",
      "name": "TenX Keane Acquisition"
    },
    {
      "symbol": "TENKR",
      "name": "TenX Keane Acquisition"
    },
    {
      "symbol": "TENKU",
      "name": "TenX Keane Acquisition - Units (1 Ord & 1 Rts)"
    },
    {
      "symbol": "TENX",
      "name": "Tenax Therapeutics Inc"
    },
    {
      "symbol": "TEO",
      "name": "Telecom Argentina S.A."
    },
    {
      "symbol": "TEQI",
      "name": "T. ROWE PRICE EQUITY INCOME ETF "
    },
    {
      "symbol": "TER",
      "name": "Teradyne Inc"
    },
    {
      "symbol": "TERN",
      "name": "Terns Pharmaceuticals Inc"
    },
    {
      "symbol": "TETE",
      "name": "Technology & Telecommunication Acquisition Corp - Class A"
    },
    {
      "symbol": "TETEU",
      "name": "Technology & Telecommunication Acquisition Corp - Units (1 Ord Class A & 1 War)"
    },
    {
      "symbol": "TETEW",
      "name": "Technology & Telecommunication Acquisition Corp - Warrants (13/01/2027)"
    },
    {
      "symbol": "TEVA",
      "name": "Teva- Pharmaceutical Industries Ltd"
    },
    {
      "symbol": "TEX",
      "name": "Terex Corp"
    },
    {
      "symbol": "TFC",
      "name": "Truist Financial Corporation"
    },
    {
      "symbol": "TFC-P-I",
      "name": "Truist Financial Corporation"
    },
    {
      "symbol": "TFC-P-O",
      "name": "Truist Financial Corporation"
    },
    {
      "symbol": "TFC-P-R",
      "name": "Truist Financial Corporation"
    },
    {
      "symbol": "TFFP",
      "name": "Tff Pharmaceuticals Inc"
    },
    {
      "symbol": "TFI",
      "name": "SPDR Nuveen Bloomberg Municipal Bond ETF"
    },
    {
      "symbol": "TFII",
      "name": "TFI International Inc"
    },
    {
      "symbol": "TFIN",
      "name": "Triumph Financial Inc"
    },
    {
      "symbol": "TFINP",
      "name": "Triumph Financial Inc"
    },
    {
      "symbol": "TFJL",
      "name": "Innovator 20+ Year Treasury Bond 5 Floor ETF - July"
    },
    {
      "symbol": "TFLO",
      "name": "ISHARES TREASURY FLOATING RATE BOND ETF "
    },
    {
      "symbol": "TFLR",
      "name": "T. Rowe Price Floating Rate ETF"
    },
    {
      "symbol": "TFPM",
      "name": "Triple Flag Precious Metals Corp"
    },
    {
      "symbol": "TFPN",
      "name": "Blueprint Chesapeake Multi-Asset Trend ETF"
    },
    {
      "symbol": "TFSA",
      "name": "Terra Income Fund 6 Inc"
    },
    {
      "symbol": "TFSL",
      "name": "TFS Financial Corporation"
    },
    {
      "symbol": "TFX",
      "name": "Teleflex Incorporated"
    },
    {
      "symbol": "TG",
      "name": "Tredegar Corp"
    },
    {
      "symbol": "TGAA",
      "name": "Target Global Acquisition I Corp - Class A"
    },
    {
      "symbol": "TGAAU",
      "name": "Target Global Acquisition I Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "TGAAW",
      "name": "Target Global Acquisition I Corp - Warrants (09/03/2026)"
    },
    {
      "symbol": "TGAN",
      "name": "Transphorm Inc"
    },
    {
      "symbol": "TGB",
      "name": "Taseko Mines Ltd"
    },
    {
      "symbol": "TGI",
      "name": "Triumph Group Inc"
    },
    {
      "symbol": "TGL",
      "name": "Treasure Global Inc"
    },
    {
      "symbol": "TGLR",
      "name": "LAFFER TENGLER Equity Income ETF"
    },
    {
      "symbol": "TGLS",
      "name": "Tecnoglass Inc"
    },
    {
      "symbol": "TGNA",
      "name": "TEGNA Inc"
    },
    {
      "symbol": "TGR-WS",
      "name": "Kimbell Tiger Acquisition Corporation Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per share"
    },
    {
      "symbol": "TGRT",
      "name": "T. ROWE PRICE GROWTH ETF "
    },
    {
      "symbol": "TGRW",
      "name": "T. ROWE PRICE GROWTH STOCK ETF "
    },
    {
      "symbol": "TGS",
      "name": "Transportadora de Gas del Sur"
    },
    {
      "symbol": "TGT",
      "name": "Target Corp"
    },
    {
      "symbol": "TGTX",
      "name": "TG Therapeutics Inc"
    },
    {
      "symbol": "TH",
      "name": "Target Hospitality Corp - Class A"
    },
    {
      "symbol": "THACU",
      "name": "Thrive Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "THAR",
      "name": "Tharimmune Inc"
    },
    {
      "symbol": "THC",
      "name": "Tenet Healthcare Corp"
    },
    {
      "symbol": "THCH",
      "name": "TH International Ltd"
    },
    {
      "symbol": "THCHW",
      "name": "TH International Ltd - Warrants (28/09/2027)"
    },
    {
      "symbol": "THCP",
      "name": "Thunder Bridge Capital Partners IV Inc - Class A"
    },
    {
      "symbol": "THCPU",
      "name": "Thunder Bridge Capital Partners IV Inc - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "THCPW",
      "name": "Thunder Bridge Capital Partners IV Inc - Warrants (30/06/2026)"
    },
    {
      "symbol": "THD",
      "name": "ISHARES MSCI THAILAND ETF "
    },
    {
      "symbol": "THFF",
      "name": "First Financial Corp - Indiana"
    },
    {
      "symbol": "THG",
      "name": "Hanover Insurance Group Inc"
    },
    {
      "symbol": "THLV",
      "name": "THOR LOW VOLATILITY ETF "
    },
    {
      "symbol": "THM",
      "name": "International Tower Hill Mines Ltd"
    },
    {
      "symbol": "THMO",
      "name": "ThermoGenesis Holdings Inc"
    },
    {
      "symbol": "THNQ",
      "name": "ROBO Global Artificial Intelligence ETF"
    },
    {
      "symbol": "THO",
      "name": "Thor Industries Inc"
    },
    {
      "symbol": "THQ",
      "name": "abrdn Healthcare Opportunities Fund"
    },
    {
      "symbol": "THR",
      "name": "Thermon Group Holdings Inc"
    },
    {
      "symbol": "THRD",
      "name": "Third Harmonic Bio Inc"
    },
    {
      "symbol": "THRM",
      "name": "Gentherm Inc - Class A"
    },
    {
      "symbol": "THRN",
      "name": "Thorne Healthtech Inc"
    },
    {
      "symbol": "THRY",
      "name": "Thryv Holdings Inc"
    },
    {
      "symbol": "THS",
      "name": "Treehouse Foods Inc"
    },
    {
      "symbol": "THTX",
      "name": "Theratechnologies Inc"
    },
    {
      "symbol": "THW",
      "name": "abrdn World Healthcare Fund"
    },
    {
      "symbol": "THY",
      "name": "Toews Agility Shares Dynamic Tactical Income ETF"
    },
    {
      "symbol": "THYF",
      "name": "T. Rowe Price U.S. High Yield ETF"
    },
    {
      "symbol": "TIGO",
      "name": "Millicom International Cellular S.A."
    },
    {
      "symbol": "TIGR",
      "name": "UP Fintech Holding Ltd"
    },
    {
      "symbol": "TIL",
      "name": "Instil Bio Inc"
    },
    {
      "symbol": "TILE",
      "name": "Interface Inc"
    },
    {
      "symbol": "TILL",
      "name": "Teucrium Agricultural Strategy No K-1 ETF"
    },
    {
      "symbol": "TILT",
      "name": "FLEXSHARES MORNINGSTAR US MARKET FACTOR TILT INDEX FUND "
    },
    {
      "symbol": "TIMB",
      "name": "TIM SA"
    },
    {
      "symbol": "TIME",
      "name": "Clockwise Core Equity & Innovation ETF"
    },
    {
      "symbol": "TINT",
      "name": "PROSHARES SMART MATERIALS ETF "
    },
    {
      "symbol": "TINY",
      "name": "PROSHARES NANOTECHNOLOGY ETF "
    },
    {
      "symbol": "TIP",
      "name": "iShares TIPS Bond ETF"
    },
    {
      "symbol": "TIPT",
      "name": "Tiptree Inc"
    },
    {
      "symbol": "TIPX",
      "name": "SPDR Bloomberg 1-10 Year TIPS ETF"
    },
    {
      "symbol": "TIPZ",
      "name": "PIMCO Broad U.S. TIPS Index Exchange-Traded Fund"
    },
    {
      "symbol": "TIRX",
      "name": "Tian Ruixiang Holdings Ltd - Class A"
    },
    {
      "symbol": "TISI",
      "name": "Team Inc"
    },
    {
      "symbol": "TITN",
      "name": "Titan Machinery Inc"
    },
    {
      "symbol": "TIVC",
      "name": "Tivic Health Systems Inc"
    },
    {
      "symbol": "TIXT",
      "name": "TELUS International (Cda) Inc (Sub Voting)"
    },
    {
      "symbol": "TJUL",
      "name": "Innovator Equity Defined Protection ETF - 2 Yr to July 2025"
    },
    {
      "symbol": "TJX",
      "name": "TJX Companies Inc"
    },
    {
      "symbol": "TK",
      "name": "Teekay Corp"
    },
    {
      "symbol": "TKC",
      "name": "Turkcell Iletisim Hizmetleri A.S."
    },
    {
      "symbol": "TKLF",
      "name": "Yoshitsu Co Ltd"
    },
    {
      "symbol": "TKNO",
      "name": "Alpha Teknova Inc"
    },
    {
      "symbol": "TKO",
      "name": "TKO Group Holdings Inc - Class A"
    },
    {
      "symbol": "TKR",
      "name": "Timken Company"
    },
    {
      "symbol": "TLF",
      "name": "Tandy Leather Factory Inc"
    },
    {
      "symbol": "TLGY",
      "name": "TLGY Acquisition Corp - Class A"
    },
    {
      "symbol": "TLGYU",
      "name": "TLGY Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "TLGYW",
      "name": "TLGY Acquisition Corp - Warrants (09/11/2026)"
    },
    {
      "symbol": "TLH",
      "name": "iShares 10-20 Year Treasury Bond ETF"
    },
    {
      "symbol": "TLIS",
      "name": "Talis Biomedical Corp"
    },
    {
      "symbol": "TLK",
      "name": "Telkom Indonesia (Persero) Tbk PT"
    },
    {
      "symbol": "TLPH",
      "name": "Talphera Inc"
    },
    {
      "symbol": "TLRY",
      "name": "Tilray Brands Inc"
    },
    {
      "symbol": "TLS",
      "name": "Telos Corp"
    },
    {
      "symbol": "TLSA",
      "name": "Tiziana Life Sciences Ltd"
    },
    {
      "symbol": "TLSI",
      "name": "TriSalus Life Sciences Inc"
    },
    {
      "symbol": "TLSIW",
      "name": "TriSalus Life Sciences Inc Wt Exp"
    },
    {
      "symbol": "TLT",
      "name": "iShares 20+ Year Treasury Bond ETF"
    },
    {
      "symbol": "TLTD",
      "name": "FLEXSHARES MORNINGSTAR DEVELOPED MARKETS EX-US FACTOR TILT INDEX FUND "
    },
    {
      "symbol": "TLTE",
      "name": "FLEXSHARES MORNINGSTAR EMERGING MARKETS FACTOR TILT INDEX FUND "
    },
    {
      "symbol": "TLTW",
      "name": "ISHARES 20+ YEAR TREASURY BOND BUYWRITE STRATEGY ETF "
    },
    {
      "symbol": "TLYS",
      "name": "Tillys Inc - Class A"
    },
    {
      "symbol": "TM",
      "name": "Toyota Motor Corporation"
    },
    {
      "symbol": "TMAC",
      "name": "Music Acquisition Corporation - Series A"
    },
    {
      "symbol": "TMAC-U",
      "name": "Music Acquisition Corporation - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "TMAT",
      "name": "MAIN THEMATIC INNOVATION ETF "
    },
    {
      "symbol": "TMC",
      "name": "TMC the metals company Inc"
    },
    {
      "symbol": "TMCI",
      "name": "Treace Medical Concepts Inc"
    },
    {
      "symbol": "TMCWW",
      "name": "TMC the metals company Inc - Warrants (09/09/2026)"
    },
    {
      "symbol": "TMDI"
    },
    {
      "symbol": "TMDV",
      "name": "ProShares Russell US Dividend Growers ETF"
    },
    {
      "symbol": "TMDX",
      "name": "Transmedics Group Inc"
    },
    {
      "symbol": "TME",
      "name": "Tencent Music Entertainment Group"
    },
    {
      "symbol": "TMET",
      "name": "ISHARES TRANSITION-ENABLING METALS ETF "
    },
    {
      "symbol": "TMF",
      "name": "DIREXION DAILY 20+ YEAR TREASURY BULL 3X SHARES "
    },
    {
      "symbol": "TMFC",
      "name": "MOTLEY FOOL 100 INDEX ETF "
    },
    {
      "symbol": "TMFE",
      "name": "MOTLEY FOOL CAPITAL EFFICIENCY 100 INDEX ETF "
    },
    {
      "symbol": "TMFG",
      "name": "MOTLEY FOOL GLOBAL OPPORTUNITIES ETF "
    },
    {
      "symbol": "TMFM",
      "name": "MOTLEY FOOL MID-CAP GROWTH ETF "
    },
    {
      "symbol": "TMFS",
      "name": "MOTLEY FOOL SMALL-CAP GROWTH ETF "
    },
    {
      "symbol": "TMFX",
      "name": "MOTLEY FOOL NEXT INDEX ETF "
    },
    {
      "symbol": "TMHC",
      "name": "Taylor Morrison Home Corp"
    },
    {
      "symbol": "TMO",
      "name": "Thermo Fisher Scientific Inc"
    },
    {
      "symbol": "TMP",
      "name": "Tompkins Financial Corp"
    },
    {
      "symbol": "TMQ",
      "name": "Trilogy Metals Inc"
    },
    {
      "symbol": "TMSL",
      "name": "T. ROWE PRICE SMALL-MID CAP ETF "
    },
    {
      "symbol": "TMTC",
      "name": "TMT Acquisition Corp"
    },
    {
      "symbol": "TMTCR",
      "name": "TMT Acquisition Corp"
    },
    {
      "symbol": "TMTCU",
      "name": "TMT Acquisition Corp - Units (1 Ord & 1 Rts)"
    },
    {
      "symbol": "TMUS",
      "name": "T-Mobile US Inc"
    },
    {
      "symbol": "TMV",
      "name": "DIREXION DAILY 20+ YEAR TREASURY BEAR 3X SHARES "
    },
    {
      "symbol": "TNA",
      "name": "DIREXION DAILY SMALL CAP BULL 3X SHARES "
    },
    {
      "symbol": "TNC",
      "name": "Tennant Company"
    },
    {
      "symbol": "TNDM",
      "name": "Tandem Diabetes Care Inc"
    },
    {
      "symbol": "TNET",
      "name": "TriNet Group Inc"
    },
    {
      "symbol": "TNGX",
      "name": "Tango Therapeutics Inc"
    },
    {
      "symbol": "TNK",
      "name": "Teekay Tankers Ltd - Class A"
    },
    {
      "symbol": "TNL",
      "name": "Travel+Leisure Company"
    },
    {
      "symbol": "TNON",
      "name": "Tenon Medical Inc"
    },
    {
      "symbol": "TNONW",
      "name": "Tenon Medical Inc - Warrants (16/06/2028)"
    },
    {
      "symbol": "TNP",
      "name": "Tsakos Energy Navigation Ltd"
    },
    {
      "symbol": "TNP-P-E",
      "name": "Tsakos Energy Navigation Ltd"
    },
    {
      "symbol": "TNP-P-F",
      "name": "Tsakos Energy Navigation Ltd"
    },
    {
      "symbol": "TNXP",
      "name": "Tonix Pharmaceuticals Holding Corp"
    },
    {
      "symbol": "TNYA",
      "name": "Tenaya Therapeutics Inc"
    },
    {
      "symbol": "TOACU",
      "name": "Talon 1 Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "TOI",
      "name": "Oncology Institute Inc (The)"
    },
    {
      "symbol": "TOIIW",
      "name": "Oncology Institute Inc (The) - Warrants (15/11/2026)"
    },
    {
      "symbol": "TOK",
      "name": "ISHARES MSCI KOKUSAI ETF "
    },
    {
      "symbol": "TOKE",
      "name": "CAMBRIA CANNABIS ETF "
    },
    {
      "symbol": "TOL",
      "name": "Toll Brothers Inc"
    },
    {
      "symbol": "TOLL",
      "name": "Tema Monopolies and Oligopolies ETF"
    },
    {
      "symbol": "TOLZ",
      "name": "ProShares DJ Brookfield Global Infrastructure ETF"
    },
    {
      "symbol": "TOMZ",
      "name": "TOMI Environmental Solutions Inc"
    },
    {
      "symbol": "TOON",
      "name": "Kartoon Studios Inc"
    },
    {
      "symbol": "TOP",
      "name": "TOP Financial Group Ltd"
    },
    {
      "symbol": "TOPS",
      "name": "Top Ships Inc"
    },
    {
      "symbol": "TORO",
      "name": "Toro Corp"
    },
    {
      "symbol": "TOROV",
      "name": "Toro Corp"
    },
    {
      "symbol": "TOST",
      "name": "Toast Inc - Class A"
    },
    {
      "symbol": "TOTL",
      "name": "SPDR DoubleLine Total Return Tactical ETF"
    },
    {
      "symbol": "TOTR",
      "name": "T. Rowe Price Total Return ETF"
    },
    {
      "symbol": "TOUR",
      "name": "Tuniu Corp"
    },
    {
      "symbol": "TOUS",
      "name": "T. ROWE PRICE INTERNATIONAL EQUITY ETF "
    },
    {
      "symbol": "TOVX",
      "name": "Theriva Biologics Inc"
    },
    {
      "symbol": "TOWN",
      "name": "Townebank Portsmouth VA"
    },
    {
      "symbol": "TPB",
      "name": "Turning Point Brands Inc"
    },
    {
      "symbol": "TPC",
      "name": "Tutor Perini Corp"
    },
    {
      "symbol": "TPCS",
      "name": "Techprecision Corp"
    },
    {
      "symbol": "TPET",
      "name": "Trio Petroleum Corp"
    },
    {
      "symbol": "TPG",
      "name": "TPG Inc - Class A"
    },
    {
      "symbol": "TPGXL",
      "name": "TPG Operating Group II L.P."
    },
    {
      "symbol": "TPH",
      "name": "Tri Pointe Homes Inc"
    },
    {
      "symbol": "TPHD",
      "name": "TIMOTHY PLAN HIGH DIVIDEND STOCK ETF "
    },
    {
      "symbol": "TPHE",
      "name": "TIMOTHY PLAN HIGH DIVIDEND STOCK ENHANCED ETF "
    },
    {
      "symbol": "TPHS",
      "name": "Trinity Place Holdings Inc"
    },
    {
      "symbol": "TPIC",
      "name": "TPI Composites Inc"
    },
    {
      "symbol": "TPIF",
      "name": "TIMOTHY PLAN INTERNATIONAL ETF "
    },
    {
      "symbol": "TPL",
      "name": "Texas Pacific Land Corporation"
    },
    {
      "symbol": "TPLC",
      "name": "TIMOTHY PLAN US LARGE/MID CAP CORE ETF "
    },
    {
      "symbol": "TPLE",
      "name": "TIMOTHY PLAN US LARGE/MID CAP CORE ENHANCED ETF "
    },
    {
      "symbol": "TPMN",
      "name": "TIMOTHY PLAN MARKET NEUTRAL ETF "
    },
    {
      "symbol": "TPOR",
      "name": "DIREXION DAILY TRANSPORTATION BULL 3X SHARES "
    },
    {
      "symbol": "TPR",
      "name": "Tapestry Inc"
    },
    {
      "symbol": "TPSC",
      "name": "TIMOTHY PLAN US SMALL CAP CORE ETF "
    },
    {
      "symbol": "TPST",
      "name": "Tempest Therapeutics Inc"
    },
    {
      "symbol": "TPTA",
      "name": "Terra Property Trust Inc"
    },
    {
      "symbol": "TPVG",
      "name": "TriplePoint Venture Growth BDC Corp"
    },
    {
      "symbol": "TPX",
      "name": "Tempur Sealy International Inc"
    },
    {
      "symbol": "TPYP",
      "name": "TORTOISE NORTH AMERICAN PIPELINE FUND "
    },
    {
      "symbol": "TPZ",
      "name": "Tortoise Power and Energy Infrastructure Fund Inc"
    },
    {
      "symbol": "TQQQ",
      "name": "ProShares UltraPro QQQ 3x Shares"
    },
    {
      "symbol": "TR",
      "name": "Tootsie Roll Industries Inc"
    },
    {
      "symbol": "TRAK",
      "name": "DealerTrack Technologies Inc"
    },
    {
      "symbol": "TRAW",
      "name": "Traws Pharma Inc"
    },
    {
      "symbol": "TRC",
      "name": "Tejon Ranch Company"
    },
    {
      "symbol": "TRDA",
      "name": "Entrada Therapeutics Inc"
    },
    {
      "symbol": "TREE",
      "name": "LendingTree Inc"
    },
    {
      "symbol": "TRES",
      "name": "Defiance Treasury Alternative Yield ETF"
    },
    {
      "symbol": "TREX",
      "name": "TREX Co. Inc"
    },
    {
      "symbol": "TRFK",
      "name": "Pacer Data and Digital Revolution ETF"
    },
    {
      "symbol": "TRFM",
      "name": "AAM TRANSFORMERS ETF "
    },
    {
      "symbol": "TRGP",
      "name": "Targa Resources Corp"
    },
    {
      "symbol": "TRI",
      "name": "Thomson-Reuters Corp"
    },
    {
      "symbol": "TRIB",
      "name": "Trinity Biotech Plc"
    },
    {
      "symbol": "TRIN",
      "name": "Trinity Capital Inc"
    },
    {
      "symbol": "TRINL",
      "name": "Trinity Capital Inc"
    },
    {
      "symbol": "TRINZ",
      "name": "Trinity Capital Inc"
    },
    {
      "symbol": "TRIP",
      "name": "TripAdvisor Inc"
    },
    {
      "symbol": "TRIS",
      "name": "Tristar Acquisition I Corp - Class A"
    },
    {
      "symbol": "TRIS-U",
      "name": "Tristar Acquisition I Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "TRIS-WS",
      "name": "Tristar Acquisition I Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "TRMB",
      "name": "Trimble Inc"
    },
    {
      "symbol": "TRMD",
      "name": "Torm Plc - Class A"
    },
    {
      "symbol": "TRMK",
      "name": "Trustmark Corp"
    },
    {
      "symbol": "TRML",
      "name": "Tourmaline Bio Inc"
    },
    {
      "symbol": "TRN",
      "name": "Trinity Industries Inc"
    },
    {
      "symbol": "TRND",
      "name": "Pacer Trendpilot Fund of Funds ETF"
    },
    {
      "symbol": "TRNO",
      "name": "Terreno Realty Corp"
    },
    {
      "symbol": "TRNR",
      "name": "Interactive Strength Inc"
    },
    {
      "symbol": "TRNS",
      "name": "Transcat Inc"
    },
    {
      "symbol": "TRON",
      "name": "Corner Growth Acquisition Corp 2 - Class A"
    },
    {
      "symbol": "TRONU",
      "name": "Corner Growth Acquisition Corp 2 - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "TRONW",
      "name": "Corner Growth Acquisition Corp 2 - Warrants (09/04/2026)"
    },
    {
      "symbol": "TROO",
      "name": "TROOPS Inc"
    },
    {
      "symbol": "TROW",
      "name": "T. Rowe Price Group Inc"
    },
    {
      "symbol": "TROX",
      "name": "Tronox Holdings plc - Class A"
    },
    {
      "symbol": "TRP",
      "name": "TC Energy Corporation"
    },
    {
      "symbol": "TRS",
      "name": "Trimas Corporation"
    },
    {
      "symbol": "TRSG",
      "name": "Tungray Technologies Inc - Class A"
    },
    {
      "symbol": "TRST",
      "name": "Trustco Bank Corp"
    },
    {
      "symbol": "TRT",
      "name": "Trio-Tech International"
    },
    {
      "symbol": "TRTL",
      "name": "TortoiseEcofin Acquisition Corp III - Class A"
    },
    {
      "symbol": "TRTL-U",
      "name": "TortoiseEcofin Acquisition Corp III - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "TRTL-WS",
      "name": "TortoiseEcofin Acquisition Corp III - Warrants (01/01/9999)"
    },
    {
      "symbol": "TRTN-P-A",
      "name": "Triton International Limited 8.50 Series A Cumulative Redeemable Perpetual Preference Shares"
    },
    {
      "symbol": "TRTN-P-B",
      "name": "Triton International Ltd 8 PRF PERPETUAL USD 25 Ser B"
    },
    {
      "symbol": "TRTN-P-C",
      "name": "Triton International Ltd"
    },
    {
      "symbol": "TRTN-P-D",
      "name": "Triton International Ltd"
    },
    {
      "symbol": "TRTN-P-E",
      "name": "Triton International Ltd"
    },
    {
      "symbol": "TRTX",
      "name": "TPG RE Finance Trust Inc"
    },
    {
      "symbol": "TRTX-P-C",
      "name": "TPG RE Finance Trust Inc"
    },
    {
      "symbol": "TRTY",
      "name": "Cambria Trinity ETF"
    },
    {
      "symbol": "TRU",
      "name": "TransUnion"
    },
    {
      "symbol": true,
      "name": "Truecar Inc"
    },
    {
      "symbol": "TRUG",
      "name": "TruGolf Inc - Class A"
    },
    {
      "symbol": "TRUP",
      "name": "Trupanion Inc"
    },
    {
      "symbol": "TRV",
      "name": "Travelers Companies Inc"
    },
    {
      "symbol": "TRVG",
      "name": "Trivago NV"
    },
    {
      "symbol": "TRVI",
      "name": "Trevi Therapeutics Inc"
    },
    {
      "symbol": "TRVN",
      "name": "Trevena Inc"
    },
    {
      "symbol": "TRX",
      "name": "TRX Gold Corp"
    },
    {
      "symbol": "TS",
      "name": "Tenaris S.A."
    },
    {
      "symbol": "TSAT",
      "name": "Telesat Corp - Class A"
    },
    {
      "symbol": "TSBK",
      "name": "Timberland Bancorp Inc"
    },
    {
      "symbol": "TSBX",
      "name": "Turnstone Biologics Corp"
    },
    {
      "symbol": "TSCO",
      "name": "Tractor Supply Company"
    },
    {
      "symbol": "TSDD",
      "name": "GRANITESHARES 2X SHORT TSLA DAILY ETF "
    },
    {
      "symbol": "TSE",
      "name": "Trinseo PLC"
    },
    {
      "symbol": "TSEC",
      "name": "TOUCHSTONE SECURITIZED INCOME ETF "
    },
    {
      "symbol": "TSEM",
      "name": "Tower Semiconductor Ltd"
    },
    {
      "symbol": "TSHA",
      "name": "Taysha Gene Therapies Inc"
    },
    {
      "symbol": "TSI",
      "name": "TCW Strategic Income Fund Inc"
    },
    {
      "symbol": "TSIB",
      "name": "Tishman Speyer Innovation Corp II - Class A"
    },
    {
      "symbol": "TSIBU",
      "name": "Tishman Speyer Innovation Corp II - Units (1 Ord Share Class A & 1/5 War)"
    },
    {
      "symbol": "TSIBW",
      "name": "Tishman Speyer Innovation Corp II - Warrants (11/02/2026)"
    },
    {
      "symbol": "TSL",
      "name": "GRANITESHARES 1.25X LONG TSLA DAILY ETF "
    },
    {
      "symbol": "TSLA",
      "name": "Tesla Inc"
    },
    {
      "symbol": "TSLH",
      "name": "Innovator Hedged TSLA Strategy ETF"
    },
    {
      "symbol": "TSLL",
      "name": "DIREXION DAILY TSLA BULL 1.5X SHARES "
    },
    {
      "symbol": "TSLP",
      "name": "Kurv Yield Premium Strategy Tesla (TSLA) ETF"
    },
    {
      "symbol": "TSLQ",
      "name": "AXS TSLA Bear Daily ETF"
    },
    {
      "symbol": "TSLR",
      "name": "GRANITESHARES 2X LONG TSLA DAILY ETF "
    },
    {
      "symbol": "TSLS",
      "name": "DIREXION DAILY TSLA BEAR 1X SHARES "
    },
    {
      "symbol": "TSLT",
      "name": "T-REX 2X Long Tesla Daily Target ETF"
    },
    {
      "symbol": "TSLX",
      "name": "Sixth Street Specialty Lending Inc"
    },
    {
      "symbol": "TSLY",
      "name": "YIELDMAX TSLA OPTION INCOME STRATEGY ETF "
    },
    {
      "symbol": "TSLZ",
      "name": "T-Rex 2X Inverse Tesla Daily Target ETF"
    },
    {
      "symbol": "TSM",
      "name": "Taiwan Semiconductor Manufacturing"
    },
    {
      "symbol": "TSME",
      "name": "THRIVENT SMALL-MID CAP ESG ETF "
    },
    {
      "symbol": "TSN",
      "name": "Tyson Foods Inc - Class A"
    },
    {
      "symbol": "TSPA",
      "name": "T. ROWE PRICE U.S. EQUITY RESEARCH ETF "
    },
    {
      "symbol": "TSQ",
      "name": "Townsquare Media Inc - Class A"
    },
    {
      "symbol": "TSRI",
      "name": "TSR Inc"
    },
    {
      "symbol": "TSVT",
      "name": "2seventy bio Inc"
    },
    {
      "symbol": "TT",
      "name": "Trane Technologies plc - Class A"
    },
    {
      "symbol": "TTAC",
      "name": "FCF US QUALITY ETF "
    },
    {
      "symbol": "TTAI",
      "name": "FCF INTERNATIONAL QUALITY ETF "
    },
    {
      "symbol": "TTC",
      "name": "Toro Company"
    },
    {
      "symbol": "TTD",
      "name": "Trade Desk Inc - Class A"
    },
    {
      "symbol": "TTE",
      "name": "TotalEnergies SE"
    },
    {
      "symbol": "TTEC",
      "name": "TTEC Holdings Inc"
    },
    {
      "symbol": "TTEK",
      "name": "Tetra Tech Inc"
    },
    {
      "symbol": "TTGT",
      "name": "Techtarget Inc"
    },
    {
      "symbol": "TTI",
      "name": "Tetra Technologies Inc"
    },
    {
      "symbol": "TTMI",
      "name": "TTM Technologies Inc"
    },
    {
      "symbol": "TTNP",
      "name": "Titan Pharmaceuticals Inc (de)"
    },
    {
      "symbol": "TTOO",
      "name": "T2 Biosystems Inc"
    },
    {
      "symbol": "TTP",
      "name": "Tortoise Pipeline & Energy Fund Inc"
    },
    {
      "symbol": "TTSH",
      "name": "Tile Shop Hldgs Inc"
    },
    {
      "symbol": "TTT",
      "name": "ProShares UltraPro Short 20+ Year Treasury -3x Shares"
    },
    {
      "symbol": "TTWO",
      "name": "Take-Two Interactive Software Inc"
    },
    {
      "symbol": "TU",
      "name": "Telus Corp"
    },
    {
      "symbol": "TUA",
      "name": "Simplify Short Term Treasury Futures Strategy ETF"
    },
    {
      "symbol": "TUG",
      "name": "STF Tactical Growth ETF"
    },
    {
      "symbol": "TUGN",
      "name": "STF Tactical Growth & Income ETF"
    },
    {
      "symbol": "TUNE",
      "name": "Clouty Tune ETF"
    },
    {
      "symbol": "TUP",
      "name": "Tupperware Brands Corporation"
    },
    {
      "symbol": "TUR",
      "name": "ISHARES MSCI TURKEY ETF "
    },
    {
      "symbol": "TURB",
      "name": "Turbo Energy S.A."
    },
    {
      "symbol": "TURN",
      "name": "180 Degree Capital Corp"
    },
    {
      "symbol": "TUSI",
      "name": "TOUCHSTONE ULTRA SHORT INCOME ETF "
    },
    {
      "symbol": "TUSK",
      "name": "Mammoth Energy Services Inc"
    },
    {
      "symbol": "TUYA",
      "name": "Tuya Inc"
    },
    {
      "symbol": "TV",
      "name": "Grupo Televisa SAB"
    },
    {
      "symbol": "TVAL",
      "name": "T. ROWE PRICE VALUE ETF "
    },
    {
      "symbol": "TVC",
      "name": "Tennessee Valley Authority"
    },
    {
      "symbol": "TVE",
      "name": "Tennessee Valley Authority"
    },
    {
      "symbol": "TVGN",
      "name": "Tevogen Bio Holdings Inc"
    },
    {
      "symbol": "TVGNW",
      "name": "Tevogen Bio Holdings Inc - Warrants (14/02/2029)"
    },
    {
      "symbol": "TVTX",
      "name": "Travere Therapeutics Inc"
    },
    {
      "symbol": "TW",
      "name": "Tradeweb Markets Inc Cls A"
    },
    {
      "symbol": "TWCB",
      "name": "Bilander Acquisition Corp - Class A"
    },
    {
      "symbol": "TWCBU",
      "name": "Bilander Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)"
    },
    {
      "symbol": "TWCBW",
      "name": "Bilander Acquisition Corp - Warrants (19/05/2026)"
    },
    {
      "symbol": "TWG",
      "name": "Top Wealth Group Holding Ltd"
    },
    {
      "symbol": "TWI",
      "name": "Titan International Inc"
    },
    {
      "symbol": "TWIN",
      "name": "Twin Disc Incorporated"
    },
    {
      "symbol": "TWIO",
      "name": "TRAJAN WEALTH INCOME OPPORTUNITIES ETF "
    },
    {
      "symbol": "TWKS",
      "name": "Thoughtworks Holding Inc"
    },
    {
      "symbol": "TWLO",
      "name": "Twilio Inc Class A"
    },
    {
      "symbol": "TWLV",
      "name": "Twelve Seas Investment Co II - Class A"
    },
    {
      "symbol": "TWLVU",
      "name": "Twelve Seas Investment Co II - Units (1 Ord Class A & 1/3 War)"
    },
    {
      "symbol": "TWM",
      "name": "ProShares UltraShort Russell2000 -2x Shares"
    },
    {
      "symbol": "TWN",
      "name": "Taiwan Fund Inc"
    },
    {
      "symbol": "TWO",
      "name": "Two Harbors Investment Corp"
    },
    {
      "symbol": "TWO-P-A",
      "name": "Two Harbors Investment Corp"
    },
    {
      "symbol": "TWO-P-B",
      "name": "Two Harbors Investment Corp"
    },
    {
      "symbol": "TWO-P-C",
      "name": "Two Harbors Investment Corp"
    },
    {
      "symbol": "TWOU",
      "name": "2U Inc"
    },
    {
      "symbol": "TWST",
      "name": "Twist Bioscience Corp"
    },
    {
      "symbol": "TX",
      "name": "Ternium S.A."
    },
    {
      "symbol": "TXG",
      "name": "10x Genomics Inc - Class A"
    },
    {
      "symbol": "TXMD",
      "name": "TherapeuticsMD Inc"
    },
    {
      "symbol": "TXN",
      "name": "Texas Instruments Inc"
    },
    {
      "symbol": "TXO",
      "name": "TXO Partners L.P."
    },
    {
      "symbol": "TXRH",
      "name": "Texas Roadhouse Inc"
    },
    {
      "symbol": "TXS",
      "name": "Texas Capital Texas Equity Index ETF"
    },
    {
      "symbol": "TXSS",
      "name": "Texas Capital Texas Small Cap Equity Index ETF"
    },
    {
      "symbol": "TXT",
      "name": "Textron Inc"
    },
    {
      "symbol": "TY",
      "name": "Tri-Continental Corp"
    },
    {
      "symbol": "TY-P",
      "name": "Tri-Continental Corp"
    },
    {
      "symbol": "TYA",
      "name": "SIMPLIFY INTERMEDIATE TERM TREASURY FUTURES STRATEGY ETF "
    },
    {
      "symbol": "TYD",
      "name": "DIREXION DAILY 7-10 YEAR TREASURY BULL 3X SHARES "
    },
    {
      "symbol": "TYG",
      "name": "Tortoise Energy Infrastructure Corp"
    },
    {
      "symbol": "TYGO",
      "name": "Tigo Energy Inc"
    },
    {
      "symbol": "TYL",
      "name": "Tyler Technologies Inc"
    },
    {
      "symbol": "TYLD",
      "name": "Cambria Tactical Yield ETF"
    },
    {
      "symbol": "TYLG",
      "name": "GLOBAL X INFORMATION TECHNOLOGY COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "TYO",
      "name": "DIREXION DAILY 7-10 YEAR TREASURY BEAR 3X SHARES "
    },
    {
      "symbol": "TYRA",
      "name": "Tyra Biosciences Inc"
    },
    {
      "symbol": "TZA",
      "name": "DIREXION DAILY SMALL CAP BEAR 3X SHARES "
    },
    {
      "symbol": "TZOO",
      "name": "Travelzoo"
    },
    {
      "symbol": "U",
      "name": "Unity Software Inc"
    },
    {
      "symbol": "UA",
      "name": "Under Armour Inc - Class C"
    },
    {
      "symbol": "UAA",
      "name": "Under Armour Inc - Class A"
    },
    {
      "symbol": "UAE",
      "name": "ISHARES MSCI UAE ETF "
    },
    {
      "symbol": "UAL",
      "name": "United Airlines Holdings Inc"
    },
    {
      "symbol": "UAMY",
      "name": "United States Antimony Corp"
    },
    {
      "symbol": "UAN",
      "name": "CVR Partners LP"
    },
    {
      "symbol": "UAPR",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - April"
    },
    {
      "symbol": "UAUG",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - August"
    },
    {
      "symbol": "UAVS",
      "name": "AgEagle Aerial Systems Inc"
    },
    {
      "symbol": "UBCP",
      "name": "United Bancorp Inc (Martins Ferry OH)"
    },
    {
      "symbol": "UBER",
      "name": "Uber Technologies Inc"
    },
    {
      "symbol": "UBFO",
      "name": "United Security Bancshares (CA)"
    },
    {
      "symbol": "UBND",
      "name": "VictoryShares Core Plus Intermediate Bond ETF"
    },
    {
      "symbol": "UBR",
      "name": "PROSHARES ULTRA MSCI BRAZIL CAPPED "
    },
    {
      "symbol": "UBS",
      "name": "UBS Group AG"
    },
    {
      "symbol": "UBSI",
      "name": "United Bankshares Inc"
    },
    {
      "symbol": "UBT",
      "name": "ProShares Ultra 20+ Year Treasury 2x Shares"
    },
    {
      "symbol": "UBX",
      "name": "Unity Biotechnology Inc"
    },
    {
      "symbol": "UBXG",
      "name": "U-BX Technology Ltd"
    },
    {
      "symbol": "UCAR",
      "name": "U Power Ltd"
    },
    {
      "symbol": "UCBI",
      "name": "United Community Banks Inc"
    },
    {
      "symbol": "UCBIO",
      "name": "United Community Banks Inc"
    },
    {
      "symbol": "UCC",
      "name": "ProShares Ultra Consumer Discretionary"
    },
    {
      "symbol": "UCIB",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "UCL",
      "name": "Ucloudlink Group Inc"
    },
    {
      "symbol": "UCO",
      "name": "ProShares Ultra Bloomberg Crude Oil 2x Shares"
    },
    {
      "symbol": "UCON",
      "name": "FIRST TRUST TCW UNCONSTRAINED PLUS BOND ETF "
    },
    {
      "symbol": "UCTT",
      "name": "Ultra Clean Hldgs Inc"
    },
    {
      "symbol": "UCYB",
      "name": "PROSHARES ULTRA NASDAQ CYBERSECURITY "
    },
    {
      "symbol": "UDEC",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - December"
    },
    {
      "symbol": "UDI",
      "name": "USCF DIVIDEND INCOME FUND "
    },
    {
      "symbol": "UDIV",
      "name": "Franklin U.S. Core Dividend Tilt Index ETF"
    },
    {
      "symbol": "UDMY",
      "name": "Udemy Inc"
    },
    {
      "symbol": "UDN",
      "name": "Invesco DB US Dollar Index Bearish Fund -1x Shares"
    },
    {
      "symbol": "UDOW",
      "name": "ProShares UltraPro Dow30 3x Shares"
    },
    {
      "symbol": "UDR",
      "name": "UDR Inc"
    },
    {
      "symbol": "UE",
      "name": "Urban Edge Properties"
    },
    {
      "symbol": "UEC",
      "name": "Uranium Energy Corp"
    },
    {
      "symbol": "UEIC",
      "name": "Universal Electronics Inc"
    },
    {
      "symbol": "UEVM",
      "name": "VICTORYSHARES EMERGING MARKETS VALUE MOMENTUM ETF FORMERLY VICTORYSHARES USAA MSCI EMERGING MARKETS VALUE MOMENTUM ETF "
    },
    {
      "symbol": "UFCS",
      "name": "United Fire Group Inc"
    },
    {
      "symbol": "UFEB",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - February"
    },
    {
      "symbol": "UFI",
      "name": "UNIFI Inc"
    },
    {
      "symbol": "UFIV",
      "name": "US TREASURY 5 YEAR NOTE ETF "
    },
    {
      "symbol": "UFO",
      "name": "PROCURE SPACE ETF "
    },
    {
      "symbol": "UFPI",
      "name": "UFP Industries Inc"
    },
    {
      "symbol": "UFPT",
      "name": "UFP Technologies Inc"
    },
    {
      "symbol": "UG",
      "name": "United-Guardian Inc"
    },
    {
      "symbol": "UGA",
      "name": "United States Gasoline Fund LP"
    },
    {
      "symbol": "UGE",
      "name": "ProShares Ultra Consumer Staples"
    },
    {
      "symbol": "UGI",
      "name": "UGI Corp"
    },
    {
      "symbol": "UGIC",
      "name": "UGI Corp"
    },
    {
      "symbol": "UGL",
      "name": "ProShares Ultra Gold 2x Shares"
    },
    {
      "symbol": "UGP",
      "name": "Ultrapar Participacoes S.A."
    },
    {
      "symbol": "UGRO",
      "name": "Urban-gro Inc"
    },
    {
      "symbol": "UHAL",
      "name": "U-Haul Holding Company"
    },
    {
      "symbol": "UHAL-B",
      "name": "U-Haul Holding Company - Series N"
    },
    {
      "symbol": "UHG",
      "name": "United Homes Group Inc - Class A"
    },
    {
      "symbol": "UHGWW",
      "name": "United Homes Group Inc - Warrants (30/03/2028)"
    },
    {
      "symbol": "UHS",
      "name": "Universal Health Services Inc - Class B"
    },
    {
      "symbol": "UHT",
      "name": "Universal Health Realty Income Trust"
    },
    {
      "symbol": "UI",
      "name": "Ubiquiti Inc"
    },
    {
      "symbol": "UIS",
      "name": "Unisys Corp"
    },
    {
      "symbol": "UITB",
      "name": "VICTORYSHARES CORE INTERMEDIATE BOND ETF FORMERLY VICTORYSHARES USAA CORE INTERMEDIATE-TERM BOND ETF VICTORYSHARES CORE INTERMEDIATE BOND ETF"
    },
    {
      "symbol": "UIVM",
      "name": "VICTORYSHARES INTERNATIONAL VALUE MOMENTUM ETF FORMERLY VICTORYSHARES USAA MSCI INTERNATIONAL VALUE MOMENTUM ETF "
    },
    {
      "symbol": "UJAN",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - January"
    },
    {
      "symbol": "UJB",
      "name": "ProShares Ultra High Yield 2x Shares"
    },
    {
      "symbol": "UJUL",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - July"
    },
    {
      "symbol": "UJUN",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - June"
    },
    {
      "symbol": "UK",
      "name": "Ucommune International Ltd - Class A"
    },
    {
      "symbol": "UKOMW",
      "name": "Ucommune International Ltd - Warrants (17/11/2025)"
    },
    {
      "symbol": "UL",
      "name": "Unilever plc"
    },
    {
      "symbol": "ULBI",
      "name": "Ultralife Corp"
    },
    {
      "symbol": "ULCC",
      "name": "Frontier Group Holdings Inc"
    },
    {
      "symbol": "ULE",
      "name": "ProShares Ultra Euro 2x Shares"
    },
    {
      "symbol": "ULH",
      "name": "Universal Logistics Holdings Inc"
    },
    {
      "symbol": "ULS",
      "name": "UL Solutions Inc - Class A"
    },
    {
      "symbol": "ULST",
      "name": "SPDR SSgA Ultra Short Term Bond ETF"
    },
    {
      "symbol": "ULTA",
      "name": "Ulta Beauty Inc"
    },
    {
      "symbol": "ULTY",
      "name": "YieldMax Ultra Option Income Strategy ETF"
    },
    {
      "symbol": "ULVM",
      "name": "VICTORYSHARES US VALUE MOMENTUM ETF FORMERLY VICTORYSHARES USAA MSCI USA VALUE MOMENTUM ETF "
    },
    {
      "symbol": "ULY",
      "name": "Urgent.ly Inc"
    },
    {
      "symbol": "UMAC",
      "name": "Unusual Machines Inc"
    },
    {
      "symbol": "UMAR",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - March"
    },
    {
      "symbol": "UMAY",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - May"
    },
    {
      "symbol": "UMBF",
      "name": "UMB Financial Corp"
    },
    {
      "symbol": "UMC",
      "name": "United Micro Electronics"
    },
    {
      "symbol": "UMDD",
      "name": "ProShares UltraPro MidCap400 3x Shares"
    },
    {
      "symbol": "UMH",
      "name": "UMH Properties Inc"
    },
    {
      "symbol": "UMH-P-D",
      "name": "UMH Properties Inc"
    },
    {
      "symbol": "UMI",
      "name": "USCF MIDSTREAM ENERGY INCOME FUND "
    },
    {
      "symbol": "UMMA",
      "name": "WAHED DOW JONES ISLAMIC WORLD ETF "
    },
    {
      "symbol": "UNAMQ",
      "name": "Unico American Corp"
    },
    {
      "symbol": "UNB",
      "name": "Union Bankshares Inc"
    },
    {
      "symbol": "UNCY",
      "name": "Unicycive Therapeutics Inc"
    },
    {
      "symbol": "UNF",
      "name": "Unifirst Corp"
    },
    {
      "symbol": "UNFI",
      "name": "United Natural Foods Inc"
    },
    {
      "symbol": "UNG",
      "name": "United States Natural Gas Fund"
    },
    {
      "symbol": "UNH",
      "name": "Unitedhealth Group Inc"
    },
    {
      "symbol": "UNIT",
      "name": "Uniti Group Inc"
    },
    {
      "symbol": "UNIY",
      "name": "WISDOMTREE VOYA YIELD ENHANCED USD UNIVERSAL BOND FUND "
    },
    {
      "symbol": "UNL",
      "name": "United States 12 Month Natural Gas Fund"
    },
    {
      "symbol": "UNM",
      "name": "Unum Group"
    },
    {
      "symbol": "UNMA",
      "name": "Unum Group 6250 Junior Subordinated Notes due 2058"
    },
    {
      "symbol": "UNOV",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - November"
    },
    {
      "symbol": "UNP",
      "name": "Union Pacific Corp"
    },
    {
      "symbol": "UNTY",
      "name": "Unity Bancorp Inc"
    },
    {
      "symbol": "UOCT",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - October"
    },
    {
      "symbol": "UONE",
      "name": "Urban One Inc - Class A"
    },
    {
      "symbol": "UONEK",
      "name": "Urban One Inc - Class D"
    },
    {
      "symbol": "UP",
      "name": "Wheels Up Experience Inc - Class A"
    },
    {
      "symbol": "UPAR",
      "name": "UPAR ULTRA RISK PARITY ETF "
    },
    {
      "symbol": "UPBD",
      "name": "Upbound Group Inc"
    },
    {
      "symbol": "UPC",
      "name": "Universe Pharmaceuticals Inc"
    },
    {
      "symbol": "UPGD",
      "name": "Invesco Raymond James SB-1 Equity ETF"
    },
    {
      "symbol": "UPGR",
      "name": "Xtrackers US Green Infrastructure Select Equity ETF"
    },
    {
      "symbol": "UPLD",
      "name": "Upland Software Inc"
    },
    {
      "symbol": "UPRO",
      "name": "ProShares UltraPro S&P 500 ETF 3x Shares"
    },
    {
      "symbol": "UPS",
      "name": "United Parcel Service Inc - Class B"
    },
    {
      "symbol": "UPST",
      "name": "Upstart Holdings Inc"
    },
    {
      "symbol": "UPV",
      "name": "ProShares Ultra FTSE Europe 2x Shares"
    },
    {
      "symbol": "UPW",
      "name": "ProShares Ultra Utilities 2x Shares"
    },
    {
      "symbol": "UPWK",
      "name": "Upwork Inc"
    },
    {
      "symbol": "UPXI",
      "name": "Upexi Inc"
    },
    {
      "symbol": "URA",
      "name": "GLOBAL X URANIUM ETF "
    },
    {
      "symbol": "URBN",
      "name": "Urban Outfitters Inc"
    },
    {
      "symbol": "URE",
      "name": "PROSHARES ULTRA REAL ESTATE "
    },
    {
      "symbol": "URG",
      "name": "Ur-Energy Inc"
    },
    {
      "symbol": "URGN",
      "name": "UroGen Pharma Ltd"
    },
    {
      "symbol": "URI",
      "name": "United Rentals Inc"
    },
    {
      "symbol": "URNJ",
      "name": "Sprott Junior Uranium Miners ETF"
    },
    {
      "symbol": "URNM",
      "name": "Sprott Uranium Miners ETF"
    },
    {
      "symbol": "UROY",
      "name": "Uranium Royalty Corp"
    },
    {
      "symbol": "URTH",
      "name": "ISHARES MSCI WORLD ETF "
    },
    {
      "symbol": "URTY",
      "name": "ProShares UltraPro Russell2000 3x Shares"
    },
    {
      "symbol": "USA",
      "name": "Liberty All-Star Equity Fund"
    },
    {
      "symbol": "USAC",
      "name": "USA Compression Partners LP"
    },
    {
      "symbol": "USAI",
      "name": "PACER AMERICAN ENERGY INDEPENDENCE ETF "
    },
    {
      "symbol": "USAP",
      "name": "Universal Stainless & Alloy Products Inc"
    },
    {
      "symbol": "USAS",
      "name": "Americas Gold and Silver Corp"
    },
    {
      "symbol": "USAU",
      "name": "U.S. Gold Corp"
    },
    {
      "symbol": "USB",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USB-P-A",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USB-P-H",
      "name": "US Bancorp Depositary Shares repstg 11000th Pfd Ser B"
    },
    {
      "symbol": "USB-P-P",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USB-P-Q",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USB-P-R",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USB-P-S",
      "name": "U.S. Bancorp."
    },
    {
      "symbol": "USBF",
      "name": "ISHARES USD BOND FACTOR ETF "
    },
    {
      "symbol": "USCA",
      "name": "XTRACKERS MSCI USA CLIMATE ACTION EQUITY ETF "
    },
    {
      "symbol": "USCB",
      "name": "USCB Financial Holdings Inc - Class A"
    },
    {
      "symbol": "USCF",
      "name": "Themes US Cash Flow Champions ETF"
    },
    {
      "symbol": "USCI",
      "name": "United States Commodity Index Fund"
    },
    {
      "symbol": "USCL",
      "name": "ISHARES CLIMATE CONSCIOUS & TRANSITION MSCI USA ETF "
    },
    {
      "symbol": "USCTF",
      "name": "Roth CH Acquisition Co - Class A"
    },
    {
      "symbol": "USD",
      "name": "ProShares Ultra Semiconductors 2X Shares"
    },
    {
      "symbol": "USDU",
      "name": "WISDOMTREE BLOOMBERG U.S. DOLLAR BULLISH FUND "
    },
    {
      "symbol": "USDX",
      "name": "SGI Enhanced Core ETF"
    },
    {
      "symbol": "USE",
      "name": "USCF ENERGY COMMODITY STRATEGY ABSOLUTE RETURN FUND "
    },
    {
      "symbol": "USEA",
      "name": "United Maritime Corp"
    },
    {
      "symbol": "USEG",
      "name": "U.S. Energy Corp"
    },
    {
      "symbol": "USEP",
      "name": "Innovator U.S. Equity Ultra Buffer ETF - September"
    },
    {
      "symbol": "USFD",
      "name": "US Foods Holding Corp"
    },
    {
      "symbol": "USFI",
      "name": "BrandywineGLOBAL - U.S. Fixed Income ETF"
    },
    {
      "symbol": "USFR",
      "name": "WISDOMTREE FLOATING RATE TREASURY FUND "
    },
    {
      "symbol": "USG",
      "name": "USG Corp"
    },
    {
      "symbol": "USGO",
      "name": "U.S. GoldMining Inc"
    },
    {
      "symbol": "USGOW",
      "name": "U.S. GoldMining Inc - Warrants (11/04/2028)"
    },
    {
      "symbol": "USHY",
      "name": "ISHARES BROAD USD HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "USIG",
      "name": "iShares Broad USD Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "USIN",
      "name": "WisdomTree 7-10 Year Laddered Treasury Fund"
    },
    {
      "symbol": "USIO",
      "name": "Usio Inc"
    },
    {
      "symbol": "USL",
      "name": "United States 12 Month Oil Fund LP"
    },
    {
      "symbol": "USLM",
      "name": "United States Lime & Minerals Inc"
    },
    {
      "symbol": "USM",
      "name": "United States Cellular Corporation"
    },
    {
      "symbol": "USMC",
      "name": "Principal U.S. Mega-Cap ETF"
    },
    {
      "symbol": "USMF",
      "name": "WisdomTree U.S. Multifactor Fund"
    },
    {
      "symbol": "USML",
      "name": "UBS AG London Branch"
    },
    {
      "symbol": "USMV",
      "name": "ISHARES MSCI USA MIN VOL FACTOR ETF "
    },
    {
      "symbol": "USNA",
      "name": "Usana Health Sciences Inc"
    },
    {
      "symbol": "USNZ",
      "name": "XTRACKERS NET ZERO PATHWAY PARIS ALIGNED US EQUITY ETF "
    },
    {
      "symbol": "USO",
      "name": "United States Oil Fund"
    },
    {
      "symbol": "USOI",
      "name": "Credit Suisse AG Nassau Branch"
    },
    {
      "symbol": "USPH",
      "name": "U.S. Physical Therapy Inc"
    },
    {
      "symbol": "USPX",
      "name": "Franklin U.S. Equity Index ETF"
    },
    {
      "symbol": "USRD",
      "name": "Themes US R&D Champions ETF"
    },
    {
      "symbol": "USRT",
      "name": "iShares Core U.S. REIT ETF"
    },
    {
      "symbol": "USSE",
      "name": "SEGALL BRYANT & HAMILL SELECT EQUITY ETF "
    },
    {
      "symbol": "USSG",
      "name": "XTRACKERS MSCI USA ESG LEADERS EQUITY ETF "
    },
    {
      "symbol": "USSH",
      "name": "WisdomTree 1-3 Year Laddered Treasury Fund"
    },
    {
      "symbol": "UST",
      "name": "ProShares Ultra 7-10 Year Treasury 2x Shares"
    },
    {
      "symbol": "USTB",
      "name": "VictoryShares Short-Term Bond ETF"
    },
    {
      "symbol": "USTUF",
      "name": "Roth CH Acquisition Co - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "USTWF",
      "name": "Roth CH Acquisition Co - Warrants (20/10/2026)"
    },
    {
      "symbol": "USVM",
      "name": "VICTORYSHARES US SMALL MID CAP VALUE MOMENTUM ETF FORMERLY VICTORYSHARES USAA MSCI USA SMALL CAP VALUE MOMENTUM ETF "
    },
    {
      "symbol": "USVN",
      "name": "US TREASURY 7 YEAR NOTE ETF "
    },
    {
      "symbol": "USVT",
      "name": "US VALUE ETF "
    },
    {
      "symbol": "USX",
      "name": "U.S. Xpress Enterprises Inc - Class A"
    },
    {
      "symbol": "USXF",
      "name": "ISHARES ESG ADVANCED MSCI USA ETF "
    },
    {
      "symbol": "UTAA",
      "name": "UTA Acquisition Corp - Class A"
    },
    {
      "symbol": "UTAAU",
      "name": "UTA Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "UTEN",
      "name": "US TREASURY 10 YEAR NOTE ETF "
    },
    {
      "symbol": "UTES",
      "name": "VIRTUS REAVES UTILITIES ETF "
    },
    {
      "symbol": "UTF",
      "name": "Cohen & Steers Infrastructure Fund Inc"
    },
    {
      "symbol": "UTG",
      "name": "Reaves Utility Income Fund"
    },
    {
      "symbol": "UTHR",
      "name": "United Therapeutics Corp"
    },
    {
      "symbol": "UTHY",
      "name": "US TREASURY 30 YEAR BOND ETF "
    },
    {
      "symbol": "UTI",
      "name": "Universal Technical Institute Inc"
    },
    {
      "symbol": "UTL",
      "name": "Unitil Corp"
    },
    {
      "symbol": "UTMD",
      "name": "Utah Medical Products Inc"
    },
    {
      "symbol": "UTRE",
      "name": "US TREASURY 3 YEAR NOTE ETF "
    },
    {
      "symbol": "UTRN",
      "name": "VESPER U.S. LARGE CAP SHORT-TERM REVERSAL STRATEGY ETF "
    },
    {
      "symbol": "UTSI",
      "name": "UTStarcom Holdings Corp"
    },
    {
      "symbol": "UTSL",
      "name": "DIREXION DAILY UTILITIES BULL 3X SHARES "
    },
    {
      "symbol": "UTWO",
      "name": "US TREASURY 2 YEAR NOTE ETF "
    },
    {
      "symbol": "UTWY",
      "name": "US TREASURY 20 YEAR BOND ETF "
    },
    {
      "symbol": "UTZ",
      "name": "Utz Brands Inc - Class A"
    },
    {
      "symbol": "UUP",
      "name": "Invesco DB US Dollar Index Bullish Fund"
    },
    {
      "symbol": "UUU",
      "name": "Universal Security Instruments Inc"
    },
    {
      "symbol": "UUUU",
      "name": "Energy Fuels Inc"
    },
    {
      "symbol": "UVE",
      "name": "Universal Insurance Holdings Inc"
    },
    {
      "symbol": "UVIX",
      "name": "2x Long VIX Futures ETF"
    },
    {
      "symbol": "UVSP",
      "name": "Univest Financial Corp"
    },
    {
      "symbol": "UVV",
      "name": "Universal Corp"
    },
    {
      "symbol": "UVXY",
      "name": "ProShares Ultra VIX Short-Term Futures ETF 2x Shares"
    },
    {
      "symbol": "UWM",
      "name": "ProShares Ultra Russell 2000 2X Shares"
    },
    {
      "symbol": "UWMC",
      "name": "UWM Holdings Corporation Class A"
    },
    {
      "symbol": "UWMC-WS",
      "name": "UWM Holdings Corporation Warrant"
    },
    {
      "symbol": "UXI",
      "name": "ProShares Ultra Industrials 2x Shares"
    },
    {
      "symbol": "UXIN",
      "name": "Uxin Ltd"
    },
    {
      "symbol": "UYG",
      "name": "ProShares Ultra Financials 2x Shares"
    },
    {
      "symbol": "UYLD",
      "name": "Angel Oak UltraShort Income ETF"
    },
    {
      "symbol": "UYM",
      "name": "ProShares Ultra Materials"
    },
    {
      "symbol": "UZD",
      "name": "United States Cellular Corporation"
    },
    {
      "symbol": "UZE",
      "name": "United States Cellular Corporation"
    },
    {
      "symbol": "UZF",
      "name": "United States Cellular Corporation"
    },
    {
      "symbol": "V",
      "name": "Visa Inc - Class A"
    },
    {
      "symbol": "VABK",
      "name": "Virginia National Bankshares Corp"
    },
    {
      "symbol": "VABS",
      "name": "VIRTUS NEWFLEET ABS/MBS ETF "
    },
    {
      "symbol": "VAC",
      "name": "Marriott Vacations Worldwide Corp"
    },
    {
      "symbol": "VAL",
      "name": "Valaris Ltd"
    },
    {
      "symbol": "VAL-WS",
      "name": "Valaris Ltd Warrants"
    },
    {
      "symbol": "VALE",
      "name": "Vale S.A."
    },
    {
      "symbol": "VALN",
      "name": "Valneva SE"
    },
    {
      "symbol": "VALQ",
      "name": "AMERICAN CENTURY U.S. QUALITY VALUE ETF "
    },
    {
      "symbol": "VALU",
      "name": "Value Line Inc"
    },
    {
      "symbol": "VAMO",
      "name": "Cambria ETF Trust Cambria Value and Momentum ETF"
    },
    {
      "symbol": "VANI",
      "name": "Vivani Medical Inc"
    },
    {
      "symbol": "VAPO",
      "name": "Vapotherm Inc"
    },
    {
      "symbol": "VATE",
      "name": "Innovate Corp"
    },
    {
      "symbol": "VATE-R",
      "name": 45376.00011574074
    },
    {
      "symbol": "VAW",
      "name": "VANGUARD MATERIALS INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VAXX",
      "name": "Vaxxinity Inc - Class A"
    },
    {
      "symbol": "VB",
      "name": "VANGUARD SMALL-CAP INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VBF",
      "name": "Invesco Bond Fund"
    },
    {
      "symbol": "VBFC",
      "name": "Village Bank & Trust Financial Corporation"
    },
    {
      "symbol": "VBIV",
      "name": "VBI Vaccines Inc"
    },
    {
      "symbol": "VBK",
      "name": "Vanguard Small Cap Growth ETF"
    },
    {
      "symbol": "VBLT",
      "name": "Vascular Biogenics Ltd"
    },
    {
      "symbol": "VBND",
      "name": "VIDENT U.S. BOND STRATEGY ETF "
    },
    {
      "symbol": "VBNK",
      "name": "VILLAGE BANCORP INC"
    },
    {
      "symbol": "VBR",
      "name": "VANGUARD SMALL-CAP VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VBTX",
      "name": "Veritex Holdings Inc"
    },
    {
      "symbol": "VC",
      "name": "Visteon Corp"
    },
    {
      "symbol": "VCAR",
      "name": "Simplify Volt TSLA Revolution ETF"
    },
    {
      "symbol": "VCEB",
      "name": "VANGUARD ESG U.S. CORPORATE BOND ETF ETF SHARES"
    },
    {
      "symbol": "VCEL",
      "name": "Vericel Corp"
    },
    {
      "symbol": "VCIG",
      "name": "VCI Global Ltd"
    },
    {
      "symbol": "VCIT",
      "name": "VANGUARD INTERMEDIATE-TERM CORPORATE BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VCKAU",
      "name": "Scilex Holding Company - Units (1 Ord & 1/2 War)"
    },
    {
      "symbol": "VCLN",
      "name": "VIRTUS DUFF & PHELPS CLEAN ENERGY ETF "
    },
    {
      "symbol": "VCLT",
      "name": "VANGUARD LONG-TERM CORPORATE BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VCNX",
      "name": "Vaccinex Inc"
    },
    {
      "symbol": "VCR",
      "name": "VANGUARD CONSUMER DISCRETIONARY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VCRB",
      "name": "Vanguard Core Bond ETF"
    },
    {
      "symbol": "VCSA",
      "name": "Vacasa Inc - Class A"
    },
    {
      "symbol": "VCSH",
      "name": "VANGUARD SHORT-TERM CORPORATE BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VCTR",
      "name": "Victory Capital Holdings Inc - Class A"
    },
    {
      "symbol": "VCV",
      "name": "Invesco California Value Municipal Income Trust"
    },
    {
      "symbol": "VCXA",
      "name": "10X Capital Venture Acquisition Corp II - Class A"
    },
    {
      "symbol": "VCXAW",
      "name": "10X Capital Venture Acquisition Corp II - Warrants (19/04/2028)"
    },
    {
      "symbol": "VCXB",
      "name": "10X Capital Venture Acquisition Corp III - Class A"
    },
    {
      "symbol": "VCXB-U",
      "name": "10X Capital Venture Acquisition Corp III - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "VCXB-WS",
      "name": "10X Capital Venture Acquisition Corp III - Warrants (30/06/2028)"
    },
    {
      "symbol": "VCYT",
      "name": "Veracyte Inc"
    },
    {
      "symbol": "VDC",
      "name": "VANGUARD CONSUMER STAPLES INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VDE",
      "name": "VANGUARD ENERGY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VEA",
      "name": "Vanguard FTSE Developed Markets ETF"
    },
    {
      "symbol": "VECO",
      "name": "Veeco Instruments Inc"
    },
    {
      "symbol": "VECT",
      "name": "VectivBio Holding AG"
    },
    {
      "symbol": "VEEE",
      "name": "Twin Vee PowerCats Company"
    },
    {
      "symbol": "VEEV",
      "name": "Veeva Systems Inc - Class A"
    },
    {
      "symbol": "VEGA",
      "name": "ADVISORSHARES STAR GLOBAL BUY-WRITE ETF "
    },
    {
      "symbol": "VEGI",
      "name": "ISHARES MSCI AGRICULTURE PRODUCERS ETF "
    },
    {
      "symbol": "VEGN",
      "name": "US VEGAN CLIMATE ETF "
    },
    {
      "symbol": "VEL",
      "name": "Velocity Financial Inc"
    },
    {
      "symbol": "VEMY",
      "name": "VIRTUS STONE HARBOR EMERGING MARKETS HIGH YIELD BOND ETF "
    },
    {
      "symbol": "VEON",
      "name": "VEON Ltd"
    },
    {
      "symbol": "VERA",
      "name": "Vera Therapeutics Inc - Class A"
    },
    {
      "symbol": "VERB",
      "name": "Verb Technology Company Inc"
    },
    {
      "symbol": "VERI",
      "name": "Veritone Inc"
    },
    {
      "symbol": "VERO",
      "name": "Venus Concept Inc"
    },
    {
      "symbol": "VERS",
      "name": "PROSHARES METAVERSE ETF "
    },
    {
      "symbol": "VERU",
      "name": "Veru Inc"
    },
    {
      "symbol": "VERV",
      "name": "Verve Therapeutics Inc"
    },
    {
      "symbol": "VERX",
      "name": "Vertex Inc Class A"
    },
    {
      "symbol": "VERY",
      "name": "Vericity Inc"
    },
    {
      "symbol": "VET",
      "name": "Vermilion Energy Inc"
    },
    {
      "symbol": "VETZ",
      "name": "Academy Veteran Impact ETF"
    },
    {
      "symbol": "VEU",
      "name": "VANGUARD FTSE ALL-WORLD EX-US INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VEV",
      "name": "Vicinity Motor Corp"
    },
    {
      "symbol": "VFC",
      "name": "VF Corp"
    },
    {
      "symbol": "VFF",
      "name": "Village Farms International Inc"
    },
    {
      "symbol": "VFH",
      "name": "VANGUARD FINANCIALS INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VFL",
      "name": "abrdn National Municipal Income Fund"
    },
    {
      "symbol": "VFLO",
      "name": "VictoryShares Free Cash Flow ETF"
    },
    {
      "symbol": "VFMF",
      "name": "VANGUARD U.S. MULTIFACTOR ETF ETF SHARES"
    },
    {
      "symbol": "VFMO",
      "name": "VANGUARD U.S. MOMENTUM FACTOR ETF ETF SHARES"
    },
    {
      "symbol": "VFMV",
      "name": "VANGUARD U.S. MINIMUM VOLATILITY ETF ETF SHARES"
    },
    {
      "symbol": "VFQY",
      "name": "VANGUARD U.S. QUALITY FACTOR ETF ETF SHARES"
    },
    {
      "symbol": "VFS",
      "name": "VinFast Auto Ltd"
    },
    {
      "symbol": "VFSWW",
      "name": "VinFast Auto Ltd - Warrants (15/08/2028)"
    },
    {
      "symbol": "VFVA",
      "name": "VANGUARD U.S. VALUE FACTOR ETF ETF SHARES"
    },
    {
      "symbol": "VGAS",
      "name": "Verde Clean Fuels Inc - Class A"
    },
    {
      "symbol": "VGASW",
      "name": "Verde Clean Fuels Inc - Warrants (14/02/2028)"
    },
    {
      "symbol": "VGFC",
      "name": "The Very Good Food Company Inc"
    },
    {
      "symbol": "VGI",
      "name": "Virtus Global Multi-Sector Income Fund"
    },
    {
      "symbol": "VGIT",
      "name": "VANGUARD INTERMEDIATE-TERM TREASURY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VGK",
      "name": "VANGUARD EUROPEAN STOCK INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VGLT",
      "name": "VANGUARD LONG-TERM TREASURY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VGM",
      "name": "Invesco Trust for Investment Grade Municipals"
    },
    {
      "symbol": "VGR",
      "name": "Vector Group Ltd"
    },
    {
      "symbol": "VGSH",
      "name": "VANGUARD SHORT-TERM TREASURY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VGSR",
      "name": "Vert Global Sustainable Real Estate ETF"
    },
    {
      "symbol": "VGT",
      "name": "VANGUARD INFORMATION TECHNOLOGY INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VGZ",
      "name": "Vista Gold Corp"
    },
    {
      "symbol": "VHAI",
      "name": "Vocodia Holdings Corp"
    },
    {
      "symbol": "VHAI-WS-A",
      "name": "Vocodia Holdings Corp Warrants Series A"
    },
    {
      "symbol": "VHAI-WS-B",
      "name": "Vocodia Holdings Corp Warrants Series B"
    },
    {
      "symbol": "VHAQ-WS",
      "name": "Viveon Health Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "VHC",
      "name": "Virnetx Holding Corp"
    },
    {
      "symbol": "VHI",
      "name": "Valhi Inc"
    },
    {
      "symbol": "VHT",
      "name": "VANGUARD HEALTH CARE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VIA",
      "name": "Via Renewables Inc - Class A"
    },
    {
      "symbol": "VIASP",
      "name": "Via Renewables Inc"
    },
    {
      "symbol": "VIAV",
      "name": "Viavi Solutions Inc"
    },
    {
      "symbol": "VICE",
      "name": "ADVISORSHARES VICE ETF "
    },
    {
      "symbol": "VICI",
      "name": "VICI Properties Inc"
    },
    {
      "symbol": "VICR",
      "name": "Vicor Corp"
    },
    {
      "symbol": "VIDI",
      "name": "VIDENT INTERNATIONAL EQUITY STRATEGY ETF "
    },
    {
      "symbol": "VIG",
      "name": "Vanguard Dividend Appreciation FTF"
    },
    {
      "symbol": "VIGI",
      "name": "VANGUARD INTERNATIONAL DIVIDEND APPRECIATION INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VIGL",
      "name": "Vigil Neuroscience Inc"
    },
    {
      "symbol": "VINC",
      "name": "Vincerx Pharma Inc"
    },
    {
      "symbol": "VINE",
      "name": "Fresh Vine Wine Inc"
    },
    {
      "symbol": "VINO",
      "name": "Gaucho Group Holdings Inc"
    },
    {
      "symbol": "VINP",
      "name": "Vinci Partners Investments Ltd - Class A"
    },
    {
      "symbol": "VIOG",
      "name": "VANGUARD S&P SMALL-CAP 600 GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VIOO",
      "name": "VANGUARD S&P SMALL-CAP 600 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VIOT",
      "name": "Viomi Technology Co Ltd"
    },
    {
      "symbol": "VIOV",
      "name": "VANGUARD S&P SMALL-CAP 600 VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VIPS",
      "name": "Vipshop Holdings Ltd"
    },
    {
      "symbol": "VIR",
      "name": "Vir Biotechnology Inc"
    },
    {
      "symbol": "VIRC",
      "name": "Virco Manufacturing Corp"
    },
    {
      "symbol": "VIRI",
      "name": "Virios Therapeutics Inc"
    },
    {
      "symbol": "VIRS",
      "name": "PACER BIOTHREAT STRATEGY ETF "
    },
    {
      "symbol": "VIRT",
      "name": "Virtu Financial Inc - Class A"
    },
    {
      "symbol": "VIRX",
      "name": "Viracta Therapeutics Inc"
    },
    {
      "symbol": "VIS",
      "name": "VANGUARD INDUSTRIALS INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VISL",
      "name": "Vislink Technologies Inc"
    },
    {
      "symbol": "VIST",
      "name": "Vista Energy S.A.B. de C.V"
    },
    {
      "symbol": "VITL",
      "name": "Vital Farms Inc"
    },
    {
      "symbol": "VIV",
      "name": "Telefonica Brasil S.A."
    },
    {
      "symbol": "VIVK",
      "name": "Vivakor Inc"
    },
    {
      "symbol": "VIXM",
      "name": "ProShares VIX Mid-Term Futures ETF"
    },
    {
      "symbol": "VIXY",
      "name": "ProShares VIX Short-Term Futures ETF"
    },
    {
      "symbol": "VJET",
      "name": "Voxeljet AG"
    },
    {
      "symbol": "VKI",
      "name": "Invesco Advantage Municipal Income Trust II"
    },
    {
      "symbol": "VKQ",
      "name": "Invesco Municipal Trust"
    },
    {
      "symbol": "VKTX",
      "name": "Viking Therapeutics Inc"
    },
    {
      "symbol": "VLCN",
      "name": "Volcon Inc"
    },
    {
      "symbol": "VLD",
      "name": "Velo3D Inc - New"
    },
    {
      "symbol": "VLD-WS",
      "name": "Velo3D Inc Redeemable warrants each whole warrant exercisable for one share of Common Stock at an exercise price of 11.50"
    },
    {
      "symbol": "VLDRW",
      "name": "Velodyne Lidar Inc Warrant"
    },
    {
      "symbol": "VLGEA",
      "name": "Village Super Market Inc - Class A"
    },
    {
      "symbol": "VLN",
      "name": "Valens Semiconductor Ltd"
    },
    {
      "symbol": "VLN-WS",
      "name": "Valens Semiconductor Ltd Warrants each warrant to purchase onehalf of one Ordinary Share"
    },
    {
      "symbol": "VLO",
      "name": "Valero Energy Corp"
    },
    {
      "symbol": "VLRS",
      "name": "Controladora Vuela Cia De Aviacion"
    },
    {
      "symbol": "VLT",
      "name": "Invesco High Income Trust II"
    },
    {
      "symbol": "VLTO",
      "name": "Veralto Corp"
    },
    {
      "symbol": "VLTO-W",
      "name": "Veralto Corp WhenIssued"
    },
    {
      "symbol": "VLU",
      "name": "SPDR S&P 1500 Value Tilt ETF"
    },
    {
      "symbol": "VLUE",
      "name": "ISHARES MSCI USA VALUE FACTOR ETF "
    },
    {
      "symbol": "VLY",
      "name": "Valley National Bancorp"
    },
    {
      "symbol": "VLYPO",
      "name": "Valley National Bancorp"
    },
    {
      "symbol": "VLYPP",
      "name": "Valley National Bancorp 625 FixedtoFloating Rate Series A NonCumulative Perpetual Preferred Stock"
    },
    {
      "symbol": "VMAR",
      "name": "Vision Marine Technologies Inc"
    },
    {
      "symbol": "VMAX",
      "name": "Hartford US Value ETF"
    },
    {
      "symbol": "VMBS",
      "name": "VANGUARD MORTGAGE-BACKED SECURITIES INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VMC",
      "name": "Vulcan Materials Company"
    },
    {
      "symbol": "VMCA",
      "name": "Valuence Merger Corp I - Class A"
    },
    {
      "symbol": "VMCAU",
      "name": "Valuence Merger Corp I - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "VMCAW",
      "name": "Valuence Merger Corp I - Warrants (18/02/2027)"
    },
    {
      "symbol": "VMD",
      "name": "Viemed Healthcare Inc"
    },
    {
      "symbol": "VMEO",
      "name": "Vimeo Inc"
    },
    {
      "symbol": "VMGA",
      "name": "VMG Consumer Acquisition Corp - Class A"
    },
    {
      "symbol": "VMGAW",
      "name": "VMG Consumer Acquisition Corp - Warrants (08/11/2026)"
    },
    {
      "symbol": "VMI",
      "name": "Valmont Industries Inc"
    },
    {
      "symbol": "VMO",
      "name": "Invesco Municipal Opportunity Trust"
    },
    {
      "symbol": "VMOT",
      "name": "ALPHA ARCHITECT VALUE MOMENTUM TREND ETF "
    },
    {
      "symbol": "VMW",
      "name": "Vmware Inc - Class A"
    },
    {
      "symbol": "VNAM",
      "name": "GLOBAL X MSCI VIETNAM ETF "
    },
    {
      "symbol": "VNCE",
      "name": "Vince Holding Corp"
    },
    {
      "symbol": "VNDA",
      "name": "Vanda Pharmaceuticals Inc"
    },
    {
      "symbol": "VNET",
      "name": "VNET Group Inc"
    },
    {
      "symbol": "VNLA",
      "name": "JANUS HENDERSON SHORT DURATION INCOME ETF "
    },
    {
      "symbol": "VNM",
      "name": "VANECK VIETNAM ETF "
    },
    {
      "symbol": "VNMC",
      "name": "NATIXIS VAUGHAN NELSON MID CAP ETF "
    },
    {
      "symbol": "VNO",
      "name": "Vornado Realty Trust"
    },
    {
      "symbol": "VNO-P-L",
      "name": "Vornado Realty Trust"
    },
    {
      "symbol": "VNO-P-M",
      "name": "Vornado Realty Trust"
    },
    {
      "symbol": "VNO-P-N",
      "name": "Vornado Realty Trust"
    },
    {
      "symbol": "VNO-P-O",
      "name": "Vornado Realty Trust 4.45 Series O Cumulative Redeemable Preferred Shares Liquidation Preference 25.00 Per Share"
    },
    {
      "symbol": "VNOM",
      "name": "Viper Energy Inc - Class A"
    },
    {
      "symbol": "VNQ",
      "name": "Vanguard Real Estate Index Fund ETF"
    },
    {
      "symbol": "VNQI",
      "name": "VANGUARD GLOBAL EX-U.S. REAL ESTATE INDEX FUND ETF"
    },
    {
      "symbol": "VNRX",
      "name": "VolitionRX Ltd"
    },
    {
      "symbol": "VNSE",
      "name": "NATIXIS VAUGHAN NELSON SELECT ETF "
    },
    {
      "symbol": "VNT",
      "name": "Vontier Corporation"
    },
    {
      "symbol": "VO",
      "name": "VANGUARD MID-CAP INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOC",
      "name": "VOC Energy Trust"
    },
    {
      "symbol": "VOD",
      "name": "Vodafone Group plc"
    },
    {
      "symbol": "VOE",
      "name": "VANGUARD MID-CAP VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VONE",
      "name": "VANGUARD RUSSELL 1000 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VONG",
      "name": "VANGUARD RUSSELL 1000 GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VONV",
      "name": "VANGUARD RUSSELL 1000 VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOO",
      "name": "VANGUARD 500 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOOG",
      "name": "VANGUARD S&P 500 GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOOV",
      "name": "VANGUARD S&P 500 VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOR",
      "name": "Vor Biopharma Inc"
    },
    {
      "symbol": "VOT",
      "name": "VANGUARD MID-CAP GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOTE",
      "name": "TCW TRANSFORM 500 ETF "
    },
    {
      "symbol": "VOX",
      "name": "VANGUARD COMMUNICATION SERVICES INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VOXR",
      "name": "Vox Royalty Corp"
    },
    {
      "symbol": "VOXX",
      "name": "VOXX International Corp - Class A"
    },
    {
      "symbol": "VOYA",
      "name": "Voya Financial Inc"
    },
    {
      "symbol": "VOYA-P-B",
      "name": "Voya Financial Inc"
    },
    {
      "symbol": "VPC",
      "name": "VIRTUS PRIVATE CREDIT STRATEGY ETF "
    },
    {
      "symbol": "VPG",
      "name": "Vishay Precision Group Inc"
    },
    {
      "symbol": "VPL",
      "name": "VANGUARD PACIFIC STOCK INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VPLS",
      "name": "Vanguard Core Plus Bond ETF"
    },
    {
      "symbol": "VPU",
      "name": "VANGUARD UTILITIES INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VPV",
      "name": "Invesco Pennsylvania Value Municipal Income Trust"
    },
    {
      "symbol": "VRA",
      "name": "Vera Bradley Inc"
    },
    {
      "symbol": "VRAI",
      "name": "VIRTUS REAL ASSET INCOME ETF "
    },
    {
      "symbol": "VRAR",
      "name": "Glimpse Group Inc (The)"
    },
    {
      "symbol": "VRAX",
      "name": "Virax Biolabs Group Ltd - Class A"
    },
    {
      "symbol": "VRCA",
      "name": "Verrica Pharmaceuticals Inc"
    },
    {
      "symbol": "VRDN",
      "name": "Viridian Therapeutics Inc"
    },
    {
      "symbol": "VRE",
      "name": "Veris Residential Inc"
    },
    {
      "symbol": "VREX",
      "name": "Varex Imaging Corp"
    },
    {
      "symbol": "VRIG",
      "name": "INVESCO VARIABLE RATE INVESTMENT GRADE ETF "
    },
    {
      "symbol": "VRM",
      "name": "Vroom Inc"
    },
    {
      "symbol": "VRME",
      "name": "VerifyMe Inc"
    },
    {
      "symbol": "VRMEW",
      "name": "VerifyMe Inc - Warrants (17/06/2025)"
    },
    {
      "symbol": "VRNA",
      "name": "Verona Pharma Plc"
    },
    {
      "symbol": "VRNS",
      "name": "Varonis Systems Inc"
    },
    {
      "symbol": "VRNT",
      "name": "Verint Systems Inc"
    },
    {
      "symbol": "VRP",
      "name": "INVESCO VARIABLE RATE PREFERRED ETF "
    },
    {
      "symbol": "VRPX",
      "name": "Virpax Pharmaceuticals Inc"
    },
    {
      "symbol": "VRRM",
      "name": "Verra Mobility Corp - Class A"
    },
    {
      "symbol": "VRSK",
      "name": "Verisk Analytics Inc"
    },
    {
      "symbol": "VRSN",
      "name": "Verisign Inc"
    },
    {
      "symbol": "VRT",
      "name": "Vertiv Holdings Co - Class A"
    },
    {
      "symbol": "VRTS",
      "name": "Virtus Investment Partners Inc"
    },
    {
      "symbol": "VRTX",
      "name": "Vertex Pharmaceuticals Inc"
    },
    {
      "symbol": "VS",
      "name": "Versus Systems Inc"
    },
    {
      "symbol": "VSAC",
      "name": "Vision Sensing Acquisition Corp - Class A"
    },
    {
      "symbol": "VSACU",
      "name": "Vision Sensing Acquisition Corp - Units (1 Ord Class A & 3/4 War)"
    },
    {
      "symbol": "VSACW",
      "name": "Vision Sensing Acquisition Corp - Warrants (21/10/2026)"
    },
    {
      "symbol": "VSAT",
      "name": "Viasat Inc"
    },
    {
      "symbol": "VSCO",
      "name": "Victoria`s Secret & Company"
    },
    {
      "symbol": "VSDA",
      "name": "VICTORYSHARES DIVIDEND ACCELERATOR ETF "
    },
    {
      "symbol": "VSEC",
      "name": "VSE Corp"
    },
    {
      "symbol": "VSGX",
      "name": "VANGUARD ESG INTERNATIONAL STOCK ETF ETF SHARES"
    },
    {
      "symbol": "VSH",
      "name": "Vishay Intertechnology Inc"
    },
    {
      "symbol": "VSHY",
      "name": "Virtus Newfleet High Yield Bond ETF"
    },
    {
      "symbol": "VSLU",
      "name": "APPLIED FINANCE VALUATION LARGE CAP ETF "
    },
    {
      "symbol": "VSME",
      "name": "Vs Media Holdings Ltd - Class A"
    },
    {
      "symbol": "VSMV",
      "name": "VICTORYSHARES US MULTI-FACTOR MINIMUM VOLATILITY ETF "
    },
    {
      "symbol": "VSS",
      "name": "VANGUARD FTSE ALL-WORLD EX-US SMALL-CAP INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VSSYW",
      "name": "Versus Systems Inc - Warrants- Unit A (17/12/2025)"
    },
    {
      "symbol": "VST",
      "name": "Vistra Corp"
    },
    {
      "symbol": "VSTA",
      "name": "Vasta Platform Ltd Class A"
    },
    {
      "symbol": "VSTE",
      "name": "Vast Renewables Ltd"
    },
    {
      "symbol": "VSTEW",
      "name": "Vast Renewables Ltd - Warrants (01/07/2028)"
    },
    {
      "symbol": "VSTM",
      "name": "Verastem Inc"
    },
    {
      "symbol": "VSTO",
      "name": "Vista Outdoor Inc"
    },
    {
      "symbol": "VSTS",
      "name": "Vestis Corporation"
    },
    {
      "symbol": "VSTS-W",
      "name": "Vestis Corporation WhenIssued"
    },
    {
      "symbol": "VT",
      "name": "VANGUARD TOTAL WORLD STOCK INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTA",
      "name": "Invesco Dynamic Credit Opportu"
    },
    {
      "symbol": "VTAK",
      "name": "Catheter Precision Inc"
    },
    {
      "symbol": "VTC",
      "name": "VANGUARD TOTAL CORPORATE BOND ETF ETF SHARES"
    },
    {
      "symbol": "VTEB",
      "name": "VANGUARD TAX-EXEMPT BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTEC",
      "name": "Vanguard California Tax-Exempt Bond ETF"
    },
    {
      "symbol": "VTEI",
      "name": "Vanguard Intermediate-Term Tax-Exempt Bond ETF"
    },
    {
      "symbol": "VTES",
      "name": "VANGUARD SHORT-TERM TAX-EXEMPT BOND ETF ETF SHARES"
    },
    {
      "symbol": "VTEX",
      "name": "Vtex - Class A"
    },
    {
      "symbol": "VTGN",
      "name": "VistaGen Therapeutics Inc"
    },
    {
      "symbol": "VTHR",
      "name": "VANGUARD RUSSELL 3000 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTI",
      "name": "VANGUARD TOTAL STOCK MARKET INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTIP",
      "name": "VANGUARD SHORT-TERM INFLATION-PROTECTED SECURITIES INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTLE",
      "name": "Vital Energy Inc"
    },
    {
      "symbol": "VTMX",
      "name": "Corporacion Inmobiliaria Vesta Sab"
    },
    {
      "symbol": "VTN",
      "name": "Invesco Trust For Investment Grade New York Municipals"
    },
    {
      "symbol": "VTNR",
      "name": "Vertex Energy Inc"
    },
    {
      "symbol": "VTOL",
      "name": "Bristow Group Inc"
    },
    {
      "symbol": "VTR",
      "name": "Ventas Inc"
    },
    {
      "symbol": "VTRS",
      "name": "Viatris Inc"
    },
    {
      "symbol": "VTRU",
      "name": "Vitru Ltd"
    },
    {
      "symbol": "VTS",
      "name": "Vitesse Energy Inc"
    },
    {
      "symbol": "VTS-W",
      "name": "Vitesse Energy Inc WhenIssued"
    },
    {
      "symbol": "VTSI",
      "name": "VirTra Inc"
    },
    {
      "symbol": "VTV",
      "name": "VANGUARD VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTVT",
      "name": "vTv Therapeutics Inc - Class A"
    },
    {
      "symbol": "VTWG",
      "name": "VANGUARD RUSSELL 2000 GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTWO",
      "name": "VANGUARD RUSSELL 2000 INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTWV",
      "name": "VANGUARD RUSSELL 2000 VALUE INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VTYX",
      "name": "Ventyx Biosciences Inc"
    },
    {
      "symbol": "VUG",
      "name": "VANGUARD GROWTH INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VUSB",
      "name": "VANGUARD ULTRA-SHORT BOND ETF ETF SHARES"
    },
    {
      "symbol": "VUSE",
      "name": "VIDENT U.S. EQUITY STRATEGY ETF "
    },
    {
      "symbol": "VUZI",
      "name": "Vuzix Corporation"
    },
    {
      "symbol": "VV",
      "name": "VANGUARD LARGE-CAP INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VVI",
      "name": "Viad Corp"
    },
    {
      "symbol": "VVOS",
      "name": "Vivos Therapeutics Inc"
    },
    {
      "symbol": "VVPR",
      "name": "VivoPower International PLC"
    },
    {
      "symbol": "VVR",
      "name": "Invesco Senior Income Trust"
    },
    {
      "symbol": "VVV",
      "name": "Valvoline Inc"
    },
    {
      "symbol": "VVX",
      "name": "V2X Inc"
    },
    {
      "symbol": "VWE",
      "name": "Vintage Wine Estates Inc"
    },
    {
      "symbol": "VWEWW",
      "name": "Vintage Wine Estates Inc - Warrants (16/08/2027)"
    },
    {
      "symbol": "VWI",
      "name": "Arch Indices VOI Absolute Income ETF"
    },
    {
      "symbol": "VWID",
      "name": "VIRTUS WMC INTERNATIONAL DIVIDEND ETF "
    },
    {
      "symbol": "VWO",
      "name": "VANGUARD EMERGING MARKETS STOCK INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VWOB",
      "name": "VANGUARD EMERGING MARKETS GOVERNMENT BOND INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VXF",
      "name": "VANGUARD EXTENDED MARKET INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VXRT",
      "name": "Vaxart Inc"
    },
    {
      "symbol": "VXUS",
      "name": "VANGUARD TOTAL INTERNATIONAL STOCK INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VXX",
      "name": "Barclays Bank PLC"
    },
    {
      "symbol": "VXZ",
      "name": "iPath Series B SP 500 VIX MidTerm Futures ETN"
    },
    {
      "symbol": "VYGR",
      "name": "Voyager Therapeutics Inc"
    },
    {
      "symbol": "VYM",
      "name": "VANGUARD HIGH DIVIDEND YIELD INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VYMI",
      "name": "VANGUARD INTERNATIONAL HIGH DIVIDEND YIELD INDEX FUND ETF SHARES"
    },
    {
      "symbol": "VYNE",
      "name": "VYNE Therapeutics Inc"
    },
    {
      "symbol": "VYX",
      "name": "NCR Voyix Corp"
    },
    {
      "symbol": "VYX-W",
      "name": "NCR Corporation WhenIssued"
    },
    {
      "symbol": "VZ",
      "name": "Verizon Communications Inc"
    },
    {
      "symbol": "VZIO",
      "name": "VIZIO Holding Corp - Class A"
    },
    {
      "symbol": "VZLA",
      "name": "Vizsla Silver Corp"
    },
    {
      "symbol": "W",
      "name": "Wayfair Inc - Class A"
    },
    {
      "symbol": "WAB",
      "name": "Westinghouse Air Brake Technologies Corp"
    },
    {
      "symbol": "WABC",
      "name": "Westamerica Bancorporation"
    },
    {
      "symbol": "WABF",
      "name": "Western Asset Bond ETF"
    },
    {
      "symbol": "WAFD",
      "name": "WaFd Inc"
    },
    {
      "symbol": "WAFDP",
      "name": "WaFd Inc"
    },
    {
      "symbol": "WAFU",
      "name": "Wah Fu Education Group Ltd"
    },
    {
      "symbol": "WAL",
      "name": "Western Alliance Bancorp"
    },
    {
      "symbol": "WAL-P-A",
      "name": "Western Alliance Bancorporation Depositary Shares Series A"
    },
    {
      "symbol": "WALD",
      "name": "Waldencast plc - Class A"
    },
    {
      "symbol": "WALDW",
      "name": "Waldencast plc - Warrants (27/07/2027)"
    },
    {
      "symbol": "WANT",
      "name": "DIREXION DAILY CONSUMER DISCRETIONARY BULL 3X SHARES "
    },
    {
      "symbol": "WASH",
      "name": "Washington Trust Bancorp Inc"
    },
    {
      "symbol": "WAT",
      "name": "Waters Corp"
    },
    {
      "symbol": "WATT",
      "name": "Energous Corp"
    },
    {
      "symbol": "WAVD",
      "name": "WaveDancer Inc"
    },
    {
      "symbol": "WAVE",
      "name": "Eco Wave Power Global AB"
    },
    {
      "symbol": "WAVS",
      "name": "Western Acquisition Ventures Corp"
    },
    {
      "symbol": "WAVSU",
      "name": "Western Acquisition Ventures Corp - Unit (1 Ordinary share & 1 Wrt)"
    },
    {
      "symbol": "WAVSW",
      "name": "Western Acquisition Ventures Corp - Warrants (16/12/2026)"
    },
    {
      "symbol": "WB",
      "name": "Weibo Corp"
    },
    {
      "symbol": "WBA",
      "name": "Walgreens Boots Alliance Inc"
    },
    {
      "symbol": "WBAT",
      "name": "WISDOMTREE BATTERY VALUE CHAIN AND INNOVATION FUND "
    },
    {
      "symbol": "WBD",
      "name": "Warner Bros. Discovery Inc - Class A"
    },
    {
      "symbol": "WBIF",
      "name": "WBI BULLBEAR VALUE 3000 ETF "
    },
    {
      "symbol": "WBIG",
      "name": "WBI BULLBEAR YIELD 3000 ETF "
    },
    {
      "symbol": "WBIL",
      "name": "WBI BULLBEAR QUALITY 3000 ETF "
    },
    {
      "symbol": "WBIY",
      "name": "WBI Power Factor High Dividend Shares"
    },
    {
      "symbol": "WBND",
      "name": "Western Asset Total Return ETF"
    },
    {
      "symbol": "WBS",
      "name": "Webster Financial Corp"
    },
    {
      "symbol": "WBS-P-F",
      "name": "Webster Financial Corp"
    },
    {
      "symbol": "WBS-P-G",
      "name": "Webster Financial Corp"
    },
    {
      "symbol": "WBUY",
      "name": "Webuy Global Ltd"
    },
    {
      "symbol": "WBX",
      "name": "Wallbox N.V - Class A"
    },
    {
      "symbol": "WBX-WS",
      "name": "Wallbox N.V - Warrants(01/01/9999)"
    },
    {
      "symbol": "WCBR",
      "name": "WISDOMTREE CYBERSECURITY FUND "
    },
    {
      "symbol": "WCC",
      "name": "Wesco International Inc"
    },
    {
      "symbol": "WCC-P-A",
      "name": "Wesco International Inc"
    },
    {
      "symbol": "WCEO",
      "name": "Hypatia Women CEO ETF"
    },
    {
      "symbol": "WCLD",
      "name": "WisdomTree Cloud Computing Fund"
    },
    {
      "symbol": "WCN",
      "name": "Waste Connections Inc"
    },
    {
      "symbol": "WD",
      "name": "Walker & Dunlop Inc"
    },
    {
      "symbol": "WDAY",
      "name": "Workday Inc - Class A"
    },
    {
      "symbol": "WDC",
      "name": "Western Digital Corp"
    },
    {
      "symbol": "WDFC",
      "name": "WD-40 Company"
    },
    {
      "symbol": "WDH",
      "name": "Waterdrop Inc"
    },
    {
      "symbol": "WDI",
      "name": "Western Asset Diversified Income Fund"
    },
    {
      "symbol": "WDIV",
      "name": "SPDR S&P GLOBAL DIVIDEND ETF "
    },
    {
      "symbol": "WDNA",
      "name": "WISDOMTREE BIOREVOLUTION FUND "
    },
    {
      "symbol": "WDS",
      "name": "Woodside Energy Group Ltd"
    },
    {
      "symbol": "WEA",
      "name": "Western Asset Premier Bond Fund"
    },
    {
      "symbol": "WEAT",
      "name": "Teucrium Wheat Fund"
    },
    {
      "symbol": "WEAV",
      "name": "Weave Communications Inc"
    },
    {
      "symbol": "WEBL",
      "name": "DIREXION DAILY DOW JONES INTERNET BULL 3X SHARES "
    },
    {
      "symbol": "WEBS",
      "name": "DIREXION DAILY DOW JONES INTERNET BEAR 3X SHARES "
    },
    {
      "symbol": "WEC",
      "name": "WEC Energy Group Inc"
    },
    {
      "symbol": "WEED",
      "name": "ROUNDHILL CANNABIS ETF "
    },
    {
      "symbol": "WEIX",
      "name": "Dynamic Short Short Term Volatility Futures ETF"
    },
    {
      "symbol": "WEL",
      "name": "Integrated Wellness Acquisition Corp - Class A"
    },
    {
      "symbol": "WEL-U",
      "name": "Integrated Wellness Acquisition Corp - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "WEL-WS",
      "name": "Integrated Wellness Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "WELL",
      "name": "Welltower Inc"
    },
    {
      "symbol": "WEN",
      "name": "Wendy`s Co - Class A"
    },
    {
      "symbol": "WERN",
      "name": "Werner Enterprises Inc"
    },
    {
      "symbol": "WES",
      "name": "Western Midstream Partners LP"
    },
    {
      "symbol": "WEST",
      "name": "Westrock Coffee Company"
    },
    {
      "symbol": "WESTW",
      "name": "Westrock Coffee Company - Warrants(29/08/2027)"
    },
    {
      "symbol": "WEX",
      "name": "WEX Inc"
    },
    {
      "symbol": "WEYS",
      "name": "Weyco Group Inc"
    },
    {
      "symbol": "WF",
      "name": "Woori Financial Group Inc"
    },
    {
      "symbol": "WFC",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-A",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-C",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-D",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-L",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-Y",
      "name": "Wells Fargo & Company"
    },
    {
      "symbol": "WFC-P-Z",
      "name": "Wells Fargo & Company DEP REP 1/1000TH"
    },
    {
      "symbol": "WFCF",
      "name": "Where Food Comes From Inc"
    },
    {
      "symbol": "WFG",
      "name": "West Fraser Timber Co. Ltd"
    },
    {
      "symbol": "WFH",
      "name": "DIREXION WORK FROM HOME ETF "
    },
    {
      "symbol": "WFHY",
      "name": "WisdomTree U.S. High Yield Corporate Bond Fund"
    },
    {
      "symbol": "WFIG",
      "name": "WISDOMTREE U.S. CORPORATE BOND FUND "
    },
    {
      "symbol": "WFRD",
      "name": "Weatherford International plc - New"
    },
    {
      "symbol": "WGMI",
      "name": "VALKYRIE BITCOIN MINERS ETF "
    },
    {
      "symbol": "WGO",
      "name": "Winnebago Industries Inc"
    },
    {
      "symbol": "WGS",
      "name": "GeneDx Holdings Corp - Class A"
    },
    {
      "symbol": "WGSWW",
      "name": "GeneDx Holdings Corp - Warrants (22/07/2026)"
    },
    {
      "symbol": "WH",
      "name": "Wyndham Hotels & Resorts Inc"
    },
    {
      "symbol": "WHD",
      "name": "Cactus Inc - Class A"
    },
    {
      "symbol": "WHF",
      "name": "WhiteHorse Finance Inc"
    },
    {
      "symbol": "WHFCL",
      "name": "WhiteHorse Finance Inc"
    },
    {
      "symbol": "WHG",
      "name": "Westwood Holdings Group Inc"
    },
    {
      "symbol": "WHLM",
      "name": "Wilhelmina International Inc"
    },
    {
      "symbol": "WHLR",
      "name": "Wheeler Real Estate Investment Trust Inc"
    },
    {
      "symbol": "WHLRD",
      "name": "Wheeler Real Estate Investment Trust Inc"
    },
    {
      "symbol": "WHLRL",
      "name": "Wheeler Real Estate Investment Trust Inc"
    },
    {
      "symbol": "WHLRP",
      "name": "Wheeler Real Estate Investment Trust Inc"
    },
    {
      "symbol": "WHR",
      "name": "Whirlpool Corp"
    },
    {
      "symbol": "WIA",
      "name": "Western Asset Inflation-Linked Income Fund"
    },
    {
      "symbol": "WILC",
      "name": "G. Willi-Food International Ltd"
    },
    {
      "symbol": "WIMI",
      "name": "Wimi Hologram Cloud Inc"
    },
    {
      "symbol": "WINA",
      "name": "Winmark Corporation"
    },
    {
      "symbol": "WINC",
      "name": "Western Asset Short Duration Income ETF"
    },
    {
      "symbol": "WING",
      "name": "Wingstop Inc"
    },
    {
      "symbol": "WINN",
      "name": "HARBOR LONG-TERM GROWERS ETF "
    },
    {
      "symbol": "WINT",
      "name": "Windtree Therapeutics Inc"
    },
    {
      "symbol": "WINV",
      "name": "WinVest Acquisition Corp"
    },
    {
      "symbol": "WINVR",
      "name": "WinVest Acquisition Corp"
    },
    {
      "symbol": "WINVU",
      "name": "WinVest Acquisition Corp - Units (1 1 Rights & 1 War)"
    },
    {
      "symbol": "WINVW",
      "name": "WinVest Acquisition Corp - Warrants (09/08/2026)"
    },
    {
      "symbol": "WIP",
      "name": "SPDR(R) FTSE INTERNATIONAL GOVERNMENT INFLATION-PROTECTED BOND ETF "
    },
    {
      "symbol": "WIRE",
      "name": "Encore Wire Corp"
    },
    {
      "symbol": "WISA",
      "name": "WiSA Technologies Inc"
    },
    {
      "symbol": "WISE",
      "name": "Themes Generative Artificial Intelligence ETF"
    },
    {
      "symbol": "WISH",
      "name": "ContextLogic Inc - Class A"
    },
    {
      "symbol": "WIT",
      "name": "Wipro Ltd"
    },
    {
      "symbol": "WIW",
      "name": "Western Asset Inflation-Linked Opportunities & Income Fund"
    },
    {
      "symbol": "WIX",
      "name": "Wix.com Ltd"
    },
    {
      "symbol": "WK",
      "name": "Workiva Inc - Class A"
    },
    {
      "symbol": "WKC",
      "name": "World Kinect Corp"
    },
    {
      "symbol": "WKEY",
      "name": "WISeKey International Holding Ltd"
    },
    {
      "symbol": "WKEYV",
      "name": "WISeKey International Holding Ltd Exdistribution When Issued"
    },
    {
      "symbol": "WKHS",
      "name": "Workhorse Group Inc"
    },
    {
      "symbol": "WKME",
      "name": "WalkMe Ltd"
    },
    {
      "symbol": "WKSP",
      "name": "Worksport Ltd"
    },
    {
      "symbol": "WKSPW",
      "name": "Worksport Ltd - Warrants (01/06/2026)"
    },
    {
      "symbol": "WLDN",
      "name": "Willdan Group Inc"
    },
    {
      "symbol": "WLDR",
      "name": "AFFINITY WORLD LEADERS EQUITY ETF "
    },
    {
      "symbol": "WLDS",
      "name": "Wearable Devices Ltd"
    },
    {
      "symbol": "WLDSW",
      "name": "Wearable Devices Ltd - Warrants (25/08/2027)"
    },
    {
      "symbol": "WLFC",
      "name": "Willis Lease Finance Corp"
    },
    {
      "symbol": "WLGS",
      "name": "WANG & LEE Group Inc"
    },
    {
      "symbol": "WLK",
      "name": "Westlake Corporation"
    },
    {
      "symbol": "WLKP",
      "name": "Westlake Chemical Partners LP"
    },
    {
      "symbol": "WLTG",
      "name": "WEALTHTRUST DBS LONG TERM GROWTH ETF "
    },
    {
      "symbol": "WLY",
      "name": "John Wiley & Sons Inc - Class A"
    },
    {
      "symbol": "WLYB",
      "name": "John Wiley & Sons Inc - Class B"
    },
    {
      "symbol": "WM",
      "name": "Waste Management Inc"
    },
    {
      "symbol": "WMB",
      "name": "Williams Cos Inc"
    },
    {
      "symbol": "WMG",
      "name": "Warner Music Group Corp - Class A"
    },
    {
      "symbol": "WMK",
      "name": "Weis Markets Inc"
    },
    {
      "symbol": "WMPN",
      "name": "William Penn Bancorporation"
    },
    {
      "symbol": "WMS",
      "name": "Advanced Drainage Systems Inc"
    },
    {
      "symbol": "WMT",
      "name": "Walmart Inc"
    },
    {
      "symbol": "WNC",
      "name": "Wabash National Corp"
    },
    {
      "symbol": "WNDY",
      "name": "GLOBAL X WIND ENERGY ETF "
    },
    {
      "symbol": "WNEB",
      "name": "Western New England Bancorp Inc"
    },
    {
      "symbol": "WNS",
      "name": "WNS Holdings Ltd"
    },
    {
      "symbol": "WNW",
      "name": "Meiwu Technology Company Ltd"
    },
    {
      "symbol": "WOLF",
      "name": "Wolfspeed Inc"
    },
    {
      "symbol": "WOMN",
      "name": "Impact Shares YWCA Womens Empowerment ETF"
    },
    {
      "symbol": "WOOD",
      "name": "iShares Global Timber & Forestry ETF"
    },
    {
      "symbol": "WOOF",
      "name": "Petco Health and Wellness Co Inc - Class A"
    },
    {
      "symbol": "WOR",
      "name": "Worthington Enterprises Inc"
    },
    {
      "symbol": "WOR-W",
      "name": "Worthington Industries Inc WhenIssued"
    },
    {
      "symbol": "WORX",
      "name": "SCWorx Corp"
    },
    {
      "symbol": "WOW",
      "name": "WideOpenWest Inc"
    },
    {
      "symbol": "WPC",
      "name": "W. P. Carey Inc"
    },
    {
      "symbol": "WPC-W",
      "name": "W. P. Carey Inc WhenIssued"
    },
    {
      "symbol": "WPM",
      "name": "Wheaton Precious Metals Corp"
    },
    {
      "symbol": "WPP",
      "name": "WPP Plc."
    },
    {
      "symbol": "WPRT",
      "name": "Westport Fuel Systems Inc"
    },
    {
      "symbol": "WPS",
      "name": "ISHARES INTERNATIONAL DEVELOPED PROPERTY ETF "
    },
    {
      "symbol": "WRAP",
      "name": "Wrap Technologies Inc"
    },
    {
      "symbol": "WRB",
      "name": "W.R. Berkley Corp"
    },
    {
      "symbol": "WRB-P-E",
      "name": "W.R. Berkley Corp"
    },
    {
      "symbol": "WRB-P-F",
      "name": "W.R. Berkley Corp"
    },
    {
      "symbol": "WRB-P-G",
      "name": "W.R. Berkley Corp"
    },
    {
      "symbol": "WRB-P-H",
      "name": "W.R. Berkley Corp"
    },
    {
      "symbol": "WRBY",
      "name": "Warby Parker Inc - Class A"
    },
    {
      "symbol": "WRK",
      "name": "WestRock Company"
    },
    {
      "symbol": "WRLD",
      "name": "World Acceptance Corp"
    },
    {
      "symbol": "WRN",
      "name": "Western Copper & Gold Corp"
    },
    {
      "symbol": "WRND",
      "name": "IQ Global Equity R&D Leaders ETF"
    },
    {
      "symbol": "WRNT",
      "name": "Warrantee Inc"
    },
    {
      "symbol": "WS",
      "name": "Worthington Steel Inc"
    },
    {
      "symbol": "WS-W",
      "name": "Worthington Steel Inc WhenIssued"
    },
    {
      "symbol": "WSBC",
      "name": "Wesbanco Inc"
    },
    {
      "symbol": "WSBCP",
      "name": "Wesbanco Inc"
    },
    {
      "symbol": "WSBF",
      "name": "Waterstone Financial Inc"
    },
    {
      "symbol": "WSC",
      "name": "WillScot Mobile Mini Holdings Corp"
    },
    {
      "symbol": "WSFS",
      "name": "WSFS Financial Corp"
    },
    {
      "symbol": "WSM",
      "name": "Williams-Sonoma Inc"
    },
    {
      "symbol": "WSO",
      "name": "Watsco Inc - Class A"
    },
    {
      "symbol": "WSO-B",
      "name": "Watsco Inc - Class B"
    },
    {
      "symbol": "WSR",
      "name": "Whitestone REIT"
    },
    {
      "symbol": "WST",
      "name": "West Pharmaceutical Services Inc"
    },
    {
      "symbol": "WT",
      "name": "WisdomTree Inc"
    },
    {
      "symbol": "WTAI",
      "name": "WISDOMTREE ARTIFICIAL INTELLIGENCE AND INNOVATION FUND "
    },
    {
      "symbol": "WTBA",
      "name": "West Bancorporation"
    },
    {
      "symbol": "WTBN",
      "name": "WisdomTree Bianco Fixed Income Total Return Fund"
    },
    {
      "symbol": "WTFC",
      "name": "Wintrust Financial Corp"
    },
    {
      "symbol": "WTFCM",
      "name": "Wintrust Financial Corp"
    },
    {
      "symbol": "WTFCP",
      "name": "Wintrust Financial Corp"
    },
    {
      "symbol": "WTI",
      "name": "W & T Offshore Inc"
    },
    {
      "symbol": "WTID",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "WTIU",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "WTM",
      "name": "White Mountains Insurance Group Ltd"
    },
    {
      "symbol": "WTMA",
      "name": "Welsbach Technology Metals Acquisitions Corp"
    },
    {
      "symbol": "WTMAR",
      "name": "Welsbach Technology Metals Acquisitions Corp"
    },
    {
      "symbol": "WTMAU",
      "name": "Welsbach Technology Metals Acquisitions Corp - Units (1 Ord & 1 Right)"
    },
    {
      "symbol": "WTMF",
      "name": "WISDOMTREE MANAGED FUTURES STRATEGY FUND "
    },
    {
      "symbol": "WTO",
      "name": "UTime Ltd"
    },
    {
      "symbol": "WTRE",
      "name": "WisdomTree New Economy Real Estate Fund"
    },
    {
      "symbol": "WTRG",
      "name": "Essential Utilities Inc"
    },
    {
      "symbol": "WTS",
      "name": "Watts Water Technologies Inc - Class A"
    },
    {
      "symbol": "WTTR",
      "name": "Select Water Solutions Inc - Class A"
    },
    {
      "symbol": "WTV",
      "name": "WisdomTree U.S. Value Fund"
    },
    {
      "symbol": "WTW",
      "name": "Willis Towers Watson Public Ltd Company"
    },
    {
      "symbol": "WU",
      "name": "Western Union Company"
    },
    {
      "symbol": "WUCT",
      "name": "UBS AG"
    },
    {
      "symbol": "WUGI",
      "name": "AXS ESOTERICA NEXTG ECONOMY ETF "
    },
    {
      "symbol": "WULF",
      "name": "TeraWulf Inc"
    },
    {
      "symbol": "WVE",
      "name": "Wave Life Sciences Ltd"
    },
    {
      "symbol": "WVVI",
      "name": "Willamette Valley Vineyard Inc"
    },
    {
      "symbol": "WVVIP",
      "name": "Willamette Valley Vineyard Inc"
    },
    {
      "symbol": "WW",
      "name": "WW International Inc"
    },
    {
      "symbol": "WWACU",
      "name": "Aeries Technology Inc - Units (1 Ord Class A & 1/2 War)"
    },
    {
      "symbol": "WWD",
      "name": "Woodward Inc"
    },
    {
      "symbol": "WWJD",
      "name": "INSPIRE INTERNATIONAL ETF "
    },
    {
      "symbol": "WWR",
      "name": "Westwater Resources Inc"
    },
    {
      "symbol": "WWW",
      "name": "Wolverine World Wide Inc"
    },
    {
      "symbol": "WY",
      "name": "Weyerhaeuser Company"
    },
    {
      "symbol": "WYNN",
      "name": "Wynn Resorts Ltd"
    },
    {
      "symbol": "WYY",
      "name": "Widepoint Corp"
    },
    {
      "symbol": "WZRD",
      "name": "Opportunistic Trader ETF"
    },
    {
      "symbol": "X",
      "name": "United States Steel Corp"
    },
    {
      "symbol": "XAIR",
      "name": "Beyond Air Inc"
    },
    {
      "symbol": "XAPR",
      "name": "FT Vest U.S. Equity Enhance & Moderate Buffer ETF - April"
    },
    {
      "symbol": "XAR",
      "name": "SPDR S&P Aerospace & Defense ETF"
    },
    {
      "symbol": "XAUG",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - AUGUST "
    },
    {
      "symbol": "XB",
      "name": "BONDBLOXX B RATED USD HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "XBAP",
      "name": "Innovator U.S. Equity Accelerated 9 Buffer ETF - April"
    },
    {
      "symbol": "XBB",
      "name": "BONDBLOXX BB RATED USD HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "XBI",
      "name": "SPDR Biotech ETF"
    },
    {
      "symbol": "XBIL",
      "name": "US TREASURY 6 MONTH BILL ETF "
    },
    {
      "symbol": "XBIO",
      "name": "Xenetic Biosciences Inc"
    },
    {
      "symbol": "XBIOW",
      "name": "Xenetic Biosciences Inc - Warrants (19/07/2024)"
    },
    {
      "symbol": "XBIT",
      "name": "XBiotech Inc"
    },
    {
      "symbol": "XBJA",
      "name": "Innovator U.S. Equity Accelerated 9 Buffer ETF - January"
    },
    {
      "symbol": "XBJL",
      "name": "Innovator U.S. Equity Accelerated 9 Buffer ETF - July"
    },
    {
      "symbol": "XBOC",
      "name": "Innovator U.S. Equity Accelerated 9 Buffer ETF - October"
    },
    {
      "symbol": "XBP",
      "name": "XBP Europe Holdings Inc"
    },
    {
      "symbol": "XBPEW",
      "name": "XBP Europe Holdings Inc - Warrants (30/11/2028)"
    },
    {
      "symbol": "XC",
      "name": "WISDOMTREE EMERGING MARKETS EX-CHINA FUND "
    },
    {
      "symbol": "XCCC",
      "name": "BONDBLOXX CCC RATED USD HIGH YIELD CORPORATE BOND ETF "
    },
    {
      "symbol": "XCEM",
      "name": "Columbia EM Core ex-China ETF"
    },
    {
      "symbol": "XCLR",
      "name": "GLOBAL X S&P 500 COLLAR 95-110 ETF "
    },
    {
      "symbol": "XCOR",
      "name": "FUNDX ETF "
    },
    {
      "symbol": "XCUR",
      "name": "Exicure Inc"
    },
    {
      "symbol": "XDAP",
      "name": "Innovator U.S. Equity Accelerated ETF - April"
    },
    {
      "symbol": "XDAT",
      "name": "Franklin Exponential Data ETF"
    },
    {
      "symbol": "XDEC",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - DECEMBER "
    },
    {
      "symbol": "XDJA",
      "name": "Innovator U.S. Equity Accelerated ETF - January"
    },
    {
      "symbol": "XDJL",
      "name": "Innovator U.S. Equity Accelerated ETF - July"
    },
    {
      "symbol": "XDNA",
      "name": "Kelly CRISPR & Gene Editing Technology ETF"
    },
    {
      "symbol": "XDOC",
      "name": "Innovator U.S. Equity Accelerated ETF - October"
    },
    {
      "symbol": "XDQQ",
      "name": "Innovator Growth Accelerated ETF - Quarterly"
    },
    {
      "symbol": "XDSQ",
      "name": "Innovator U.S. Equity Accelerated ETF - Quarterly"
    },
    {
      "symbol": "XDTE",
      "name": "Roundhill S&P 500 0DTE Covered Call Strategy ETF"
    },
    {
      "symbol": "XEL",
      "name": "Xcel Energy Inc"
    },
    {
      "symbol": "XELA",
      "name": "Exela Technologies Inc"
    },
    {
      "symbol": "XELAP",
      "name": "Exela Technologies Inc"
    },
    {
      "symbol": "XELB",
      "name": "Xcel Brands Inc"
    },
    {
      "symbol": "XEMD",
      "name": "BONDBLOXX JP MORGAN USD EMERGING MARKETS 1-10 YEAR BOND ETF "
    },
    {
      "symbol": "XENE",
      "name": "Xenon Pharmaceuticals Inc"
    },
    {
      "symbol": "XERS",
      "name": "Xeris Biopharma Holdings Inc"
    },
    {
      "symbol": "XES",
      "name": "SPDR Oil & Gas Equipment and Services ETF"
    },
    {
      "symbol": "XFEB",
      "name": "FT Vest U.S. Equity Enhance & Moderate Buffer ETF - February"
    },
    {
      "symbol": "XFIN",
      "name": "ExcelFin Acquisition Corp - Class A"
    },
    {
      "symbol": "XFINU",
      "name": "ExcelFin Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "XFINW",
      "name": "ExcelFin Acquisition Corp - Warrants (25/10/2028)"
    },
    {
      "symbol": "XFIV",
      "name": "BONDBLOXX BLOOMBERG FIVE YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XFIX",
      "name": "F/m Opportunistic Income ETF"
    },
    {
      "symbol": "XFLT",
      "name": "XAI Octagon Floating Rate & Alternative Income Term Trust"
    },
    {
      "symbol": "XFLT-P-A",
      "name": "XAI Octagon Floating Rate & Alternative Income Term Trust"
    },
    {
      "symbol": "XFLX",
      "name": "FUNDX FLEXIBLE ETF "
    },
    {
      "symbol": "XFOR",
      "name": "X4 Pharmaceuticals Inc"
    },
    {
      "symbol": "XGN",
      "name": "Exagen Inc"
    },
    {
      "symbol": "XHB",
      "name": "SPDR Homebuilders ETF"
    },
    {
      "symbol": "XHE",
      "name": "SPDR S&P Health Care Equipment ETF"
    },
    {
      "symbol": "XHLF",
      "name": "BONDBLOXX BLOOMBERG SIX MONTH TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XHR",
      "name": "Xenia Hotels & Resorts Inc"
    },
    {
      "symbol": "XHS",
      "name": "SPDR S&P Health Care Services ETF"
    },
    {
      "symbol": "XHYC",
      "name": "BONDBLOXX USD HIGH YIELD BOND CONSUMER CYCLICALS SECTOR ETF "
    },
    {
      "symbol": "XHYD",
      "name": "BONDBLOXX USD HIGH YIELD BOND CONSUMER NON-CYCLICALS SECTOR ETF "
    },
    {
      "symbol": "XHYE",
      "name": "BONDBLOXX USD HIGH YIELD BOND ENERGY SECTOR ETF "
    },
    {
      "symbol": "XHYF",
      "name": "BONDBLOXX USD HIGH YIELD BOND FINANCIAL & REIT SECTOR ETF "
    },
    {
      "symbol": "XHYH",
      "name": "BONDBLOXX USD HIGH YIELD BOND HEALTHCARE SECTOR ETF "
    },
    {
      "symbol": "XHYI",
      "name": "BONDBLOXX USD HIGH YIELD BOND INDUSTRIAL SECTOR ETF "
    },
    {
      "symbol": "XIDE",
      "name": "FT Cboe Vest U.S. Equity Buffer & Premium Income ETF - December"
    },
    {
      "symbol": "XIMR",
      "name": "FT Vest U.S. Equity Buffer & Premium Income ETF - March"
    },
    {
      "symbol": "XIN",
      "name": "Xinyuan Real Estate Co. Ltd"
    },
    {
      "symbol": "XISE",
      "name": "FT Cboe Vest U.S. Equity Buffer & Premium Income ETF - September"
    },
    {
      "symbol": "XITK",
      "name": "SPDR FactSet Innovative Technology ETF"
    },
    {
      "symbol": "XJAN",
      "name": "FT Vest U.S. Equity Enhance & Moderate Buffer ETF - January"
    },
    {
      "symbol": "XJH",
      "name": "iShares ESG Screened S&P Mid-Cap ETF"
    },
    {
      "symbol": "XJR",
      "name": "iShares ESG Screened S&P Small-Cap ETF"
    },
    {
      "symbol": "XJUL",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - JULY "
    },
    {
      "symbol": "XJUN",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - JUNE "
    },
    {
      "symbol": "XLB",
      "name": "THE MATERIALS SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLC",
      "name": "THE COMMUNICATION SERVICES SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLE",
      "name": "THE ENERGY SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLF",
      "name": "THE FINANCIAL SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLG",
      "name": "Invesco S&P 500 Top 50 ETF"
    },
    {
      "symbol": "XLI",
      "name": "THE INDUSTRIAL SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLK",
      "name": "THE TECHNOLOGY SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLO",
      "name": "Xilio Therapeutics Inc"
    },
    {
      "symbol": "XLP",
      "name": "THE CONSUMER STAPLES SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLRE",
      "name": "THE REAL ESTATE SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLSR",
      "name": "SPDR SSGA U.S. Sector Rotation ETF"
    },
    {
      "symbol": "XLU",
      "name": "THE UTILITIES SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLV",
      "name": "THE HEALTH CARE SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLY",
      "name": "THE CONSUMER DISCRETIONARY SELECT SECTOR SPDR FUND "
    },
    {
      "symbol": "XLYO",
      "name": "Xylo Technologies Ltd"
    },
    {
      "symbol": "XM",
      "name": "Qualtrics International Inc - Class A"
    },
    {
      "symbol": "XMAR",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - MARCH "
    },
    {
      "symbol": "XME",
      "name": "SPDR Metals & Mining ETF"
    },
    {
      "symbol": "XMHQ",
      "name": "Invesco S&P MidCap Quality ETF"
    },
    {
      "symbol": "XMLV",
      "name": "INVESCO S&P MIDCAP LOW VOLATILITY ETF "
    },
    {
      "symbol": "XMMO",
      "name": "Invesco S&P MidCap Momentum ETF"
    },
    {
      "symbol": "XMPT",
      "name": "VanEck CEF Muni Income ETF"
    },
    {
      "symbol": "XMTR",
      "name": "Xometry Inc - Class A"
    },
    {
      "symbol": "XMVM",
      "name": "Invesco S&P MidCap Value with Momentum ETF"
    },
    {
      "symbol": "XNAV",
      "name": "FUNDX AGGRESSIVE ETF "
    },
    {
      "symbol": "XNCR",
      "name": "Xencor Inc"
    },
    {
      "symbol": "XNET",
      "name": "Xunlei Ltd"
    },
    {
      "symbol": "XNTK",
      "name": "SPDR NYSE Technology ETF"
    },
    {
      "symbol": "XOCT",
      "name": "FT Cboe Vest U.S. Equity Enhance & Moderate Buffer ETF - October"
    },
    {
      "symbol": "XOM",
      "name": "Exxon Mobil Corp"
    },
    {
      "symbol": "XOMA",
      "name": "XOMA Corp"
    },
    {
      "symbol": "XOMAO",
      "name": "XOMA Corp"
    },
    {
      "symbol": "XOMAP",
      "name": "XOMA Corp"
    },
    {
      "symbol": "XOMO",
      "name": "YieldMax XOM Option Income Strategy ETF"
    },
    {
      "symbol": "XONE",
      "name": "BONDBLOXX BLOOMBERG ONE YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XOP",
      "name": "SPDR Oil & Gas Exploration and Production ETF"
    },
    {
      "symbol": "XOS",
      "name": "Xos Inc"
    },
    {
      "symbol": "XOSWW",
      "name": "Xos Inc - Warrants (20/08/2026)"
    },
    {
      "symbol": "XP",
      "name": "XP Inc - Class A"
    },
    {
      "symbol": "XPDB",
      "name": "Power & Digital Infrastructure Acquisition II Corp - Class A"
    },
    {
      "symbol": "XPDBW",
      "name": "Power & Digital Infrastructure Acquisition II Corp - Warrants (09/12/2026)"
    },
    {
      "symbol": "XPEL",
      "name": "XPEL Inc - Reg S"
    },
    {
      "symbol": "XPER",
      "name": "Xperi Inc"
    },
    {
      "symbol": "XPEV",
      "name": "XPeng Inc"
    },
    {
      "symbol": "XPH",
      "name": "SPDR(R) S&P(R) PHARMACEUTICALS ETF "
    },
    {
      "symbol": "XPL",
      "name": "Solitario Resources Corp"
    },
    {
      "symbol": "XPND",
      "name": "FIRST TRUST EXPANDED TECHNOLOGY ETF "
    },
    {
      "symbol": "XPO",
      "name": "XPO Inc"
    },
    {
      "symbol": "XPOF",
      "name": "Xponential Fitness Inc - Class A"
    },
    {
      "symbol": "XPON",
      "name": "Expion360 Inc"
    },
    {
      "symbol": "XPP",
      "name": "ProShares Ultra FTSE China 50 2x Shares"
    },
    {
      "symbol": "XPRO",
      "name": "Expro Group Holdings N.V."
    },
    {
      "symbol": "XPVVV",
      "name": "XP Inc"
    },
    {
      "symbol": "XRAY",
      "name": "DENTSPLY Sirona Inc"
    },
    {
      "symbol": "XRLV",
      "name": "INVESCO S&P 500 EX-RATE SENSITIVE LOW VOLATILITY ETF "
    },
    {
      "symbol": "XRLX",
      "name": "FUNDX CONSERVATIVE ETF "
    },
    {
      "symbol": "XRMI",
      "name": "GLOBAL X S&P 500 RISK MANAGED INCOME ETF "
    },
    {
      "symbol": "XRT",
      "name": "SPDR Retail ETF"
    },
    {
      "symbol": "XRTX",
      "name": "XORTX Therapeutics Inc"
    },
    {
      "symbol": "XRX",
      "name": "Xerox Holdings Corp"
    },
    {
      "symbol": "XSD",
      "name": "SPDR Semiconductors ETF"
    },
    {
      "symbol": "XSEP",
      "name": "FT VEST U.S. EQUITY ENHANCE & MODERATE BUFFER ETF - SEPTEMBER "
    },
    {
      "symbol": "XSHD",
      "name": "INVESCO S&P SMALLCAP HIGH DIVIDEND LOW VOLATILITY ETF "
    },
    {
      "symbol": "XSHQ",
      "name": "INVESCO S&P SMALLCAP QUALITY ETF "
    },
    {
      "symbol": "XSLV",
      "name": "INVESCO S&P SMALLCAP LOW VOLATILITY ETF "
    },
    {
      "symbol": "XSMO",
      "name": "Invesco S&P SmallCap Momentum ETF"
    },
    {
      "symbol": "XSOE",
      "name": "WisdomTree Emerging Markets ex-State-Owned Enterprises Fund"
    },
    {
      "symbol": "XSVM",
      "name": "Invesco S&P SmallCap Value with Momentum ETF"
    },
    {
      "symbol": "XSVN",
      "name": "BONDBLOXX BLOOMBERG SEVEN YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XSW",
      "name": "SPDR S&P Software & Services ETF"
    },
    {
      "symbol": "XT",
      "name": "ISHARES EXPONENTIAL TECHNOLOGIES ETF "
    },
    {
      "symbol": "XTAP",
      "name": "Innovator U.S. Equity Accelerated Plus ETF - April"
    },
    {
      "symbol": "XTEN",
      "name": "BONDBLOXX BLOOMBERG TEN YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XTIA",
      "name": "XTI Aerospace Inc Common Stock"
    },
    {
      "symbol": "XTJA",
      "name": "Innovator U.S. Equity Accelerated Plus ETF - January"
    },
    {
      "symbol": "XTJL",
      "name": "Innovator U.S. Equity Accelerated Plus ETF - July"
    },
    {
      "symbol": "XTKG",
      "name": "Powerbridge Technologies Co Ltd"
    },
    {
      "symbol": "XTL",
      "name": "SPDR(R) S&P(R) TELECOM ETF "
    },
    {
      "symbol": "XTLB",
      "name": "X.T.L. Biopharmaceuticals Ltd"
    },
    {
      "symbol": "XTN",
      "name": "SPDR S&P Transportation ETF"
    },
    {
      "symbol": "XTNT",
      "name": "Xtant Medical Holdings Inc"
    },
    {
      "symbol": "XTOC",
      "name": "Innovator U.S. Equity Accelerated Plus ETF - October"
    },
    {
      "symbol": "XTR",
      "name": "GLOBAL X S&P 500 TAIL RISK ETF "
    },
    {
      "symbol": "XTRE",
      "name": "BONDBLOXX BLOOMBERG THREE YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XTWO",
      "name": "BONDBLOXX BLOOMBERG TWO YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XTWY",
      "name": "BONDBLOXX BLOOMBERG TWENTY YEAR TARGET DURATION US TREASURY ETF "
    },
    {
      "symbol": "XUSP",
      "name": "Innovator Uncapped Accelerated U.S. Equity ETF"
    },
    {
      "symbol": "XVOL",
      "name": "Acruence Active Hedge U.S. Equity ETF"
    },
    {
      "symbol": "XVV",
      "name": "iShares ESG Screened S&P 500 ETF"
    },
    {
      "symbol": "XWEL",
      "name": "XWELL Inc"
    },
    {
      "symbol": "XXCH",
      "name": "Trust Direxion Daily MSCI Emerging Markets ex China Bull 2X Shares"
    },
    {
      "symbol": "XXII",
      "name": "22nd Century Group Inc"
    },
    {
      "symbol": "XXXX",
      "name": "Bank of Montreal"
    },
    {
      "symbol": "XYF",
      "name": "X Financial"
    },
    {
      "symbol": "XYL",
      "name": "Xylem Inc"
    },
    {
      "symbol": "XYLD",
      "name": "GLOBAL X S&P 500 COVERED CALL ETF "
    },
    {
      "symbol": "XYLE",
      "name": "GLOBAL X S&P 500 ESG COVERED CALL ETF "
    },
    {
      "symbol": "XYLG",
      "name": "GLOBAL X S&P 500 COVERED CALL & GROWTH ETF "
    },
    {
      "symbol": "XYLO",
      "name": "Medigus Ltd"
    },
    {
      "symbol": "YALA",
      "name": "Yalla Group Ltd"
    },
    {
      "symbol": "YALL",
      "name": "GOD BLESS AMERICA ETF "
    },
    {
      "symbol": "YANG",
      "name": "DIREXION DAILY FTSE CHINA BEAR 3X SHARES "
    },
    {
      "symbol": "YBIT",
      "name": "YieldMax Bitcoin Option Income Strategy ETF"
    },
    {
      "symbol": "YBTC",
      "name": "Roundhill Bitcoin Covered Call Strategy ETF"
    },
    {
      "symbol": "YCBD",
      "name": "cbdMD Inc"
    },
    {
      "symbol": "YCBD-P-A",
      "name": "cbdMD Inc"
    },
    {
      "symbol": "YCL",
      "name": "ProShares Ultra Yen 2x Shares"
    },
    {
      "symbol": "YCS",
      "name": "ProShares UltraShort Yen -2x Shares"
    },
    {
      "symbol": "YDEC",
      "name": "FT VEST INTERNATIONAL EQUITY MODERATE BUFFER ETF - DECEMBER "
    },
    {
      "symbol": "YEAR",
      "name": "AB ULTRA SHORT INCOME ETF "
    },
    {
      "symbol": "YELP",
      "name": "Yelp Inc"
    },
    {
      "symbol": "YETI",
      "name": "YETI Holdings Inc"
    },
    {
      "symbol": "YEXT",
      "name": "Yext Inc"
    },
    {
      "symbol": "YGMZ",
      "name": "MingZhu Logistics Holdings Ltd"
    },
    {
      "symbol": "YHGJ",
      "name": "Yunhong Green CTI Ltd"
    },
    {
      "symbol": "YI",
      "name": "111 Inc"
    },
    {
      "symbol": "YIBO",
      "name": "Planet Image International Ltd - Class A"
    },
    {
      "symbol": "YINN",
      "name": "DIREXION DAILY FTSE CHINA BULL 3X SHARES "
    },
    {
      "symbol": "YJ",
      "name": "Yunji Inc"
    },
    {
      "symbol": "YJUN",
      "name": "FT VEST INTERNATIONAL EQUITY BUFFER ETF - JUNE "
    },
    {
      "symbol": "YLD",
      "name": "Principal Active High Yield ETF"
    },
    {
      "symbol": "YLDE",
      "name": "ClearBridge Dividend Strategy ESG ETF"
    },
    {
      "symbol": "YMAB",
      "name": "Y-Mabs Therapeutics Inc"
    },
    {
      "symbol": "YMAG",
      "name": "YieldMax Magnificent 7 Fund of Option Income ETFs"
    },
    {
      "symbol": "YMAR",
      "name": "FT VEST INTERNATIONAL EQUITY BUFFER ETF - MARCH "
    },
    {
      "symbol": "YMAX",
      "name": "YieldMax Universe Fund of Option Income ETFs"
    },
    {
      "symbol": "YMM",
      "name": "Full Truck Alliance Co Ltd"
    },
    {
      "symbol": "YNDX",
      "name": "Yandex NV - Class A"
    },
    {
      "symbol": "YOLO",
      "name": "ADVISORSHARES PURE CANNABIS ETF "
    },
    {
      "symbol": "YORW",
      "name": "York Water Company"
    },
    {
      "symbol": "YOSH",
      "name": "Yoshiharu Global Co - Class A"
    },
    {
      "symbol": "YOTA",
      "name": "Yotta Acquisition Corp"
    },
    {
      "symbol": "YOTAR",
      "name": "Yotta Acquisition Corp"
    },
    {
      "symbol": "YOTAU",
      "name": "Yotta Acquisition Corp - Units (1 Ord 1 War & 1 Right)"
    },
    {
      "symbol": "YOTAW",
      "name": "Yotta Acquisition Corp - Warrants(15/03/2027)"
    },
    {
      "symbol": "YOU",
      "name": "Clear Secure Inc Class A"
    },
    {
      "symbol": "YPF",
      "name": "YPF"
    },
    {
      "symbol": "YQ",
      "name": "17 Education & Technology Group Inc"
    },
    {
      "symbol": "YRD",
      "name": "Yiren Digital Ltd"
    },
    {
      "symbol": "YS",
      "name": "YS Biopharma Co Ltd"
    },
    {
      "symbol": "YSBPW",
      "name": "YS Biopharma Co Ltd - Warrants (15/03/2028)"
    },
    {
      "symbol": "YSEP",
      "name": "FT VEST INTERNATIONAL EQUITY BUFFER ETF - SEPTEMBER "
    },
    {
      "symbol": "YSG",
      "name": "Yatsen Holding Ltd"
    },
    {
      "symbol": "YTEN",
      "name": "Yield10 Bioscience Inc"
    },
    {
      "symbol": "YTRA",
      "name": "Yatra Online Inc"
    },
    {
      "symbol": "YUM",
      "name": "Yum Brands Inc"
    },
    {
      "symbol": "YUMC",
      "name": "Yum China Holdings Inc"
    },
    {
      "symbol": "YXI",
      "name": "PROSHARES SHORT FTSE CHINA 50 "
    },
    {
      "symbol": "YY",
      "name": "JOYY Inc"
    },
    {
      "symbol": "YYAI",
      "name": "Connexa Sports Technologies Inc"
    },
    {
      "symbol": "YYGH",
      "name": "YY Group Holding Ltd - Class A"
    },
    {
      "symbol": "YYY",
      "name": "AMPLIFY HIGH INCOME ETF "
    },
    {
      "symbol": "Z",
      "name": "Zillow Group Inc - Class C"
    },
    {
      "symbol": "ZALT",
      "name": "Innovator U.S. Equity 10 Buffer ETF - Quarterly"
    },
    {
      "symbol": "ZAPP",
      "name": "Zapp Electric Vehicles Group Ltd"
    },
    {
      "symbol": "ZAPPW",
      "name": "Zapp Electric Vehicles Group Ltd - Warrants (28/04/2028)"
    },
    {
      "symbol": "ZAZZT",
      "name": "ZAZZT"
    },
    {
      "symbol": "ZBAO",
      "name": "Zhibao Technology Inc"
    },
    {
      "symbol": "ZBH",
      "name": "Zimmer Biomet Holdings Inc"
    },
    {
      "symbol": "ZBRA",
      "name": "Zebra Technologies Corp - Class A"
    },
    {
      "symbol": "ZBZX",
      "name": "Bats Listed Test"
    },
    {
      "symbol": "ZBZZT",
      "name": "ZBZZT"
    },
    {
      "symbol": "ZCAR",
      "name": "Zoomcar Holdings Inc"
    },
    {
      "symbol": "ZCARW",
      "name": "Zoomcar Holdings Inc - Warrants (28/12/2028)"
    },
    {
      "symbol": "ZCMD",
      "name": "Zhongchao Inc - Class A"
    },
    {
      "symbol": "ZCZZT",
      "name": "Super Montage IPO X Tst Security SM IPO X 3"
    },
    {
      "symbol": "ZD",
      "name": "Ziff Davis Inc"
    },
    {
      "symbol": "ZDGE",
      "name": "Zedge Inc - Class B"
    },
    {
      "symbol": "ZECP",
      "name": "Zacks Earnings Consistent Portfolio ETF"
    },
    {
      "symbol": "ZENV",
      "name": "Zenvia Inc - Class A"
    },
    {
      "symbol": "ZEO",
      "name": "Zeo Energy Corp - Class A"
    },
    {
      "symbol": "ZEOWW",
      "name": "Zeo Energy Corp - Warrants (14/03/2029)"
    },
    {
      "symbol": "ZEPP",
      "name": "Zepp Health Corporation"
    },
    {
      "symbol": "ZETA",
      "name": "Zeta Global Holdings Corp - Class A"
    },
    {
      "symbol": "ZEUS",
      "name": "Olympic Steel Inc"
    },
    {
      "symbol": "ZEV-WS",
      "name": "Lightning eMotors Inc Wt Exp 05182025"
    },
    {
      "symbol": "ZFOX",
      "name": "ZeroFox Holdings Inc"
    },
    {
      "symbol": "ZFOXW",
      "name": "ZeroFox Holdings Inc - Warrants (02/08/2027)"
    },
    {
      "symbol": "ZG",
      "name": "Zillow Group Inc - Class A"
    },
    {
      "symbol": "ZGEN",
      "name": "The Generation Z ETF"
    },
    {
      "symbol": "ZGN",
      "name": "Ermenegildo Zegna N.V."
    },
    {
      "symbol": "ZH",
      "name": "Zhihu Inc"
    },
    {
      "symbol": "ZHDG",
      "name": "ZEGA Buy and Hedge ETF"
    },
    {
      "symbol": "ZI",
      "name": "ZoomInfo Technologies Inc"
    },
    {
      "symbol": "ZIG",
      "name": "The Acquirers Fund"
    },
    {
      "symbol": "ZIM",
      "name": "Zim Integrated Shipping Services Ltd"
    },
    {
      "symbol": "ZIMV",
      "name": "ZimVie Inc"
    },
    {
      "symbol": "ZINGU",
      "name": "FTAC Zeus Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)"
    },
    {
      "symbol": "ZION",
      "name": "Zions Bancorporation N.A"
    },
    {
      "symbol": "ZIONL",
      "name": "Zions Bancorporation"
    },
    {
      "symbol": "ZIONO",
      "name": "Zions Bancorporation N.A"
    },
    {
      "symbol": "ZIONP",
      "name": "Zions Bancorporation N.A"
    },
    {
      "symbol": "ZIP",
      "name": "ZipRecruiter Inc - Class A"
    },
    {
      "symbol": "ZIVB",
      "name": "-1x Short VIX Mid-Term Futures Strategy ETF"
    },
    {
      "symbol": "ZJYL",
      "name": "Jin Medical International Ltd"
    },
    {
      "symbol": "ZJZZT",
      "name": "NASDAQ TEST STOCK"
    },
    {
      "symbol": "ZKH",
      "name": "ZKH Group Ltd"
    },
    {
      "symbol": "ZKIN",
      "name": "ZK International Group Co Ltd"
    },
    {
      "symbol": "ZLAB",
      "name": "Zai Lab Ltd"
    },
    {
      "symbol": "ZLS",
      "name": "Zalatoris II Acquisition Corp - Class A"
    },
    {
      "symbol": "ZLSWU",
      "name": "Zalatoris II Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "ZLSWW",
      "name": "Zalatoris II Acquisition Corp - Warrants (01/01/9999)"
    },
    {
      "symbol": "ZM",
      "name": "Zoom Video Communications Inc - Class A"
    },
    {
      "symbol": "ZNTL",
      "name": "Zentalis Pharmaceuticals Inc"
    },
    {
      "symbol": "ZOM",
      "name": "Zomedica Corp"
    },
    {
      "symbol": "ZONE",
      "name": "CleanCore Solutions Inc - Class B"
    },
    {
      "symbol": "ZOOZ",
      "name": "ZOOZ Power Ltd"
    },
    {
      "symbol": "ZOOZW",
      "name": "Zooz Power Ltd - Warrants (05/04/2029)"
    },
    {
      "symbol": "ZPTA",
      "name": "Andretti Acquisition Corp"
    },
    {
      "symbol": "ZPTAW",
      "name": "Zapata Computing Holdings Inc - Warrants (15/02/2029)"
    },
    {
      "symbol": "ZROZ",
      "name": "PIMCO 25+ Year Zero Coupon U.S. Treasury Index Exchange-Traded Fund"
    },
    {
      "symbol": "ZS",
      "name": "Zscaler Inc"
    },
    {
      "symbol": "ZSB",
      "name": "USCF SUSTAINABLE BATTERY METALS STRATEGY FUND "
    },
    {
      "symbol": "ZSC",
      "name": "USCF Sustainable Commodity Strategy Fund"
    },
    {
      "symbol": "ZSL",
      "name": "ProShares UltraShort Silver -2x Shares"
    },
    {
      "symbol": "ZTAQU",
      "name": "Zimmer Energy Transition Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)"
    },
    {
      "symbol": "ZTAX",
      "name": "X-Square Municipal Income Tax Free ETF"
    },
    {
      "symbol": "ZTEK",
      "name": "Zentek Ltd"
    },
    {
      "symbol": "ZTEN",
      "name": "F/M 10-Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "ZTEST"
    },
    {
      "symbol": "ZTO",
      "name": "ZTO Express (Cayman) Inc"
    },
    {
      "symbol": "ZTR",
      "name": "Virtus Total Return Fund Inc"
    },
    {
      "symbol": "ZTRE",
      "name": "F/M 3-Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "ZTS",
      "name": "Zoetis Inc - Class A"
    },
    {
      "symbol": "ZTST"
    },
    {
      "symbol": "ZTWO",
      "name": "F/M 2-Year Investment Grade Corporate Bond ETF"
    },
    {
      "symbol": "ZUMZ",
      "name": "Zumiez Inc"
    },
    {
      "symbol": "ZUO",
      "name": "Zuora Inc - Class A"
    },
    {
      "symbol": "ZURA",
      "name": "Zura Bio Ltd - Class A"
    },
    {
      "symbol": "ZURAW",
      "name": "Zura Bio Ltd - Warrants (20/03/2028)"
    },
    {
      "symbol": "ZVIA",
      "name": "Zevia PBC - Class A"
    },
    {
      "symbol": "ZVRA",
      "name": "Zevra Therapeutics Inc"
    },
    {
      "symbol": "ZVSA",
      "name": "ZyVersa Therapeutics Inc"
    },
    {
      "symbol": "ZVV",
      "name": "LISTED TEST SYMBOL"
    },
    {
      "symbol": "ZVZZT",
      "name": "NASDAQ TEST STOCK"
    },
    {
      "symbol": "ZWS",
      "name": "Zurn Elkay Water Solutions Corp"
    },
    {
      "symbol": "ZWZZT",
      "name": "NASDAQ TEST STOCK"
    },
    {
      "symbol": "ZXYZ-A",
      "name": "NASDAQ SYMBOLOGY TEST"
    },
    {
      "symbol": "ZXZZT",
      "name": "NASDAQ TEST STOCK"
    },
    {
      "symbol": "ZYME",
      "name": "Zymeworks BC Inc"
    },
    {
      "symbol": "ZYNE",
      "name": "Zynerba Pharmaceuticals Inc"
    },
    {
      "symbol": "ZYXI",
      "name": "Zynex Inc"
    },
    {
      "symbol": "ZZK"
    },
    {
      "symbol": "ZZZ",
      "name": "TEST TICKER FOR UTP"
    }
  ]
;

export default stockOptions;