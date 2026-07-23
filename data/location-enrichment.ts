// Location enrichment content: typed rich sections + FAQs for /service-areas/[slug].
// Adapted from locations/*.json where a matching rich source existed (bethany-ok, bricktown-ok,
// edmond-ok, midwest-city-ok, moore-ok, mustang-ok, nichols-hills-ok, norman-ok, warr-acres-ok,
// yukon-ok); authored fresh for the remaining rendered slugs (oklahoma-city-ok, paseo-district-ok,
// automobile-alley-ok, tulsa-ok, broken-arrow-ok, stillwater-ok, lawton-ok, nationwide).
// Consumed by app/service-areas/[slug]/page.tsx, rendered between the hero and the
// Community Overview section, and used to override the generic FAQ fallback.

export interface LocationRichSection {
  heading: string | null;
  html: string;
}

export interface LocationFaqItem {
  question: string;
  answer: string;
}

export interface LocationEnrichment {
  richSections: LocationRichSection[];
  faqs: LocationFaqItem[];
}

export const locationEnrichment: Record<string, LocationEnrichment> = {
  "oklahoma-city-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Oklahoma City is the hub the rest of this network radiates out from &mdash; roughly 700,000 residents in the city proper and 1.4 million across the metro. But \"Oklahoma City\" as an exchange target isn't one market, it's four submarkets that trade on almost entirely different fundamentals: Bricktown's entertainment-district retail, the Midtown and Automobile Alley creative-office corridor, the Paycom-anchored tech cluster in north OKC, and the Tinker Air Force Base industrial corridor stretching southeast into Midwest City and Del City. An exchange buyer replacing into \"Oklahoma City\" without narrowing to a submarket is really choosing between four different underwriting exercises at once.</p>",
      },
      {
        heading: "Downtown and Midtown: Bricktown, Automobile Alley, and the Innovation District",
        html: "<p>Decades of MAPS-funded redevelopment turned downtown's old rail warehouse and dealership-row buildings into the entertainment retail of Bricktown and the creative office and brewery space of Automobile Alley (each covered on its own page in this batch). Just north, the OU Health Sciences Center anchors a growing Innovation District pulling lab and medical-office tenants into a corridor that traded on parking lots and vacant lots a generation ago.</p>",
      },
      {
        heading: "North OKC's Paycom Corridor and the Broadway Extension Tech Cluster",
        html: "<p>Paycom's headquarters campus off the Broadway Extension has pulled a run of Class A office and supporting retail development into far north Oklahoma City, a submarket that leased almost entirely on suburban rooftop growth a decade ago. An exchange buyer underwriting office space here is effectively underwriting proximity to one employer's continued growth, a different risk profile than the multi-tenant medical office common in Edmond just to the north. Supporting retail along the corridor has followed the same daytime-employee-driven pattern seen near any large single-employer campus, with fast-casual and service tenants filling in around the office towers.</p>",
      },
      {
        heading: "Tinker Air Force Base and the Southeast Industrial Corridor",
        html: "<p>Tinker AFB is the largest single-site employer in Oklahoma, and the industrial and flex space ringing the base along SE 29th Street and Air Depot Boulevard leans heavily on aircraft-maintenance and defense-contractor tenants. A buyer underwriting this corridor should read a tenant's defense-contract dependency the same way they'd read anchor-tenant credit in a retail center &mdash; it's the single variable that matters most.</p>",
      },
      {
        heading: "What an Oklahoma City Identification Usually Includes",
        html: "<p>Replacement buyers targeting the metro broadly are generally underwriting one of the following:</p><ul><li>multifamily near the OU Health Sciences Center and downtown employment core</li><li>NNN retail along the I-35/I-40 interchange corridors</li><li>industrial or flex space near Will Rogers World Airport and the Tinker AFB corridor</li><li>adaptive-reuse creative office in Midtown or Automobile Alley</li></ul>",
      },
      {
        heading: "Widening the Comparable Set Across Four Submarkets",
        html: "<p>Because these submarkets trade on different fundamentals, a buyer relying on one citywide cap-rate benchmark risks overpaying in one pocket while underestimating another. Ask a broker to break comparables out by submarket, not by city, before the 45-day identification clock starts running.</p>",
      },
    ],
    faqs: [
      {
        question: "Why do Oklahoma City's submarkets trade so differently from one another?",
        answer: "Each submarket grew around a different anchor — downtown redevelopment funding, a single large employer, or a military installation — so the tenant base, deal size, and pricing in each pocket reflect that anchor rather than a single citywide trend.",
      },
      {
        question: "Is a Bricktown or Automobile Alley property treated separately from the rest of Oklahoma City for identification purposes?",
        answer: "For 1031 identification rules the address is what matters, not the submarket label, but underwriting a downtown adaptive-reuse building calls for different comparables than a suburban strip center, so brokers typically treat them as distinct pools when building a property list.",
      },
      {
        question: "How dependent is the Tinker AFB corridor on defense spending?",
        answer: "Heavily. Much of the industrial and flex space near the base leases to aircraft-maintenance and defense-contractor tenants, so a buyer should review a tenant's contract history with Tinker before assuming standard commercial lease renewal patterns apply.",
      },
      {
        question: "What does Paycom's presence mean for buyers considering north Oklahoma City office?",
        answer: "It means underwriting that submarket is partly underwriting one employer's continued expansion. That concentration can work in a buyer's favor during growth years but is worth stress-testing against a scenario where that growth slows.",
      },
      {
        question: "Should I underwrite Oklahoma City as one market or as four separate ones?",
        answer: "As four. A single citywide average cap rate will mislead you in both directions — it understates what downtown adaptive-reuse space commands and overstates what a suburban Tinker-corridor flex building will support.",
      },
    ],
  },
  "edmond-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Edmond carries the highest household incomes in the Oklahoma City metro, and its commercial stock reflects that: more medical and professional office, less heavy industrial, and retail that leans toward daily-needs and specialty tenants rather than big-box discount chains. An exchange buyer replacing into Edmond is generally paying a premium relative to the rest of the metro for that tenant quality and lower turnover.</p>",
      },
      {
        heading: "Medical and Professional Office Along Kelly and I-35",
        html: "<p>Physician groups, dental practices, and financial-services tenants fill a steady run of low-rise office product along Kelly Avenue and the I-35 frontage, much of it built for owner-occupants who later leased space to a second or third tenant rather than for pure investment from day one. That history matters at the identification stage, since a building's original layout can carry quirks, an oversized reception area or an underbuilt server room, that a straight comparable-sales approach won't flag.</p><p>University of Central Oklahoma's presence in the city center also supports a smaller cluster of tutoring, testing, and student-services office tenants that behave more like standard commercial office than like the university-driven housing cycle you'd see in Norman.</p>",
      },
      {
        heading: "Retail Built for Daily Trips, Not Destination Shopping",
        html: "<p>Edmond's retail corridors, concentrated around Second Street and the newer development pushing north along I-35, skew toward grocery-anchored centers, specialty food, and service tenants rather than the entertainment and big-box anchors that dominate closer to downtown Oklahoma City. Vacancy in these centers tends to move slowly in either direction, since a grocery-anchored center with strong daily traffic rarely loses its anchor and rarely needs to replace one.</p><p>Smaller shop-space tenants around these anchors, dry cleaners, nail salons, insurance agencies, tend to sign shorter leases with modest annual bumps, and turnover in that shop space is a normal part of owning a grocery-anchored center rather than a sign of trouble, as long as the anchor lease itself stays intact.</p>",
      },
      {
        heading: "Fewer Comparable Trades Than the Core Metro",
        html: "<p>Because Edmond's commercial stock trades less frequently than industrial product along I-40 or I-35 nearer the airport, exchange buyers here often need to widen their comparable set to recent sales metro-wide rather than relying only on within-Edmond trades. That's worth planning for before the 45-day identification clock starts, not after.</p><p>Brokers who specialize in the Edmond office and medical market can often speak to pending sales that haven't closed yet, and that off-market intelligence is worth pursuing early, since a buyer relying only on closed, recorded transactions may be working from data that's already several months stale by the time it's usable.</p>",
      },
      {
        heading: "What an Edmond Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>medical or dental office buildings along the Kelly Avenue and I-35 corridors</li><li>owner-occupant-turned-investment office buildings near the city center</li><li>grocery-anchored or specialty retail centers along Second Street</li><li>small multi-tenant professional office parks serving UCO-adjacent tenants</li></ul>",
      },
      {
        heading: "Coordinating a Medical Office Handoff Without Disrupting Patient Days",
        html: "<p>Talking manager to manager, a medical tenant cannot absorb the kind of downtime a retail tenant might shrug off, so get the HVAC service history for exam-room zoning, the last inspection record on any specialized plumbing or gas lines, and a clear answer on which build-out elements belong to the tenant before your contingency period closes. Ask the outgoing manager whether any tenant has requested after-hours access changes, since that can signal an unresolved security or parking issue you'd otherwise inherit blind.</p><p>Schedule your walkthrough around the practice's patient schedule, not your own calendar, and confirm who's holding keys and codes before closing day so you're not locked out of your own building on day one.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does Edmond office and medical product trade at a premium to the rest of the Oklahoma City metro?",
        answer: "Edmond has the metro's highest household incomes, which supports steadier tenant demand and lower turnover in office and medical space. Buyers are generally paying for that stability rather than for higher rent growth.",
      },
      {
        question: "Can I use the 200% rule if I can't find enough directly comparable Edmond properties within 45 days?",
        answer: "Yes. If you can't limit your list to three properties, you can identify more as long as their combined fair market value doesn't exceed 200% of what you sold, and that combined list can include properties outside Edmond.",
      },
      {
        question: "What's the risk of buying an Edmond office building that was originally built for an owner-occupant?",
        answer: "Owner-built layouts sometimes have quirks, uneven space allocation or specialized build-outs, that don't match standard multi-tenant office norms. Get a space-utilization walkthrough before you finalize your identification, not after closing.",
      },
      {
        question: "Does a qualified intermediary need to be involved before I sell my relinquished Edmond property?",
        answer: "Yes. Your QI needs to be in place and holding the exchange documentation before your relinquished property closes, or you risk constructive receipt of the sale proceeds, which disqualifies the exchange.",
      },
      {
        question: "How does the 180-day exchange period interact with a slower-trading market like Edmond office?",
        answer: "The 180-day clock runs regardless of how quickly comparable properties come to market, so in a submarket with fewer trades, start your search and lender conversations as early in the window as possible rather than waiting on new listings.",
      },
    ],
  },
  "norman-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Norman's exchange market runs on the University of Oklahoma calendar more than any other submarket in the metro. A buyer looking at student housing here is underwriting an occupancy pattern tied to fall move-in and spring graduation, and that cycle behaves nothing like the medical office and research-park product sitting a few miles away on the same tax roll.</p>",
      },
      {
        heading: "Student Housing Runs on a Different Clock",
        html: "<p>Purpose-built student housing and older off-campus apartment stock near Lindsey Street and the Campus Corner area lease up hard every August and go quiet every May, and a rent roll pulled mid-semester tells a buyer very little about the property's true annual performance. Pre-leasing percentage going into summer matters more here than trailing twelve-month collections, and an exchange buyer should ask for at least two full leasing cycles of turnover data before treating any single semester as representative.</p><p>Parking ratio and bedroom count per unit also move value more than they would in a standard multifamily deal, since a four-bedroom unit near campus commands a materially different rent per bed than a comparable one-bedroom a mile out.</p>",
      },
      {
        heading: "Medical Office Growth Tied to Norman Regional",
        html: "<p>Norman Regional Health System's presence has built out a medical office corridor along Tecumseh Road and near the Porter Avenue campus, and that stock trades on longer, more stable lease terms than the student housing market a short drive away. Physician-group tenants here tend to renew rather than relocate, since build-out costs for exam rooms and imaging suites are expensive to replicate, and that stickiness is part of what a replacement buyer is paying for.</p><p>A second wave of smaller specialty practices, physical therapy, imaging, and outpatient surgery groups, has filled in around the main hospital campus over the past several years, drawn by referral proximity rather than by any particular incentive package. Buyers evaluating this stock should ask how much of a practice's patient volume depends on hospital referrals versus a standalone patient base, since that mix affects how portable the tenant would be if the hospital relationship ever changed.</p>",
      },
      {
        heading: "The Research Park's Slower, Steadier Tenant Base",
        html: "<p>The research and technology park tied to the university's federal and atmospheric-science partnerships draws a tenant base of research contractors and technology firms that sign longer terms than a typical office tenant, in part because specialized lab and data infrastructure is costly to move. This stock rarely comes up for sale, so when it does, exchange buyers should expect fewer directly comparable trades to lean on than they would find pricing a Main Street retail building.</p><p>Because several of these tenants hold multi-year federal or university contracts rather than standard commercial leases, a buyer should ask for the underlying contract term and renewal history rather than treating the lease abstract alone as the full picture of tenant durability.</p>",
      },
      {
        heading: "What a Norman Identification Usually Draws From",
        html: "<p>A realistic Norman replacement list mixes assets across these categories:</p><ul><li>student-oriented apartment buildings near Campus Corner and Lindsey Street</li><li>medical office space along the Tecumseh Road and Porter Avenue corridor</li><li>research-park office and light-lab buildings tied to university partnerships</li><li>retail storefronts along Main Street and Alameda Street</li></ul>",
      },
      {
        heading: "What the Outgoing Housing Manager Should Hand Over",
        html: "<p>Manager to manager, a student housing property carries turnover math that a generic multifamily rent roll won't show you: unit-by-unit pre-lease percentage for the coming fall, the last two years of August move-in complaints, and whatever the current manager has flagged for summer make-ready work before the next lease cycle starts. Ask specifically whether any units carry parental guarantees, since that changes collections risk in a way a straight income statement won't reveal.</p><p>If you're replacing into medical office instead, get the build-out inventory for each suite and confirm which improvements belong to the tenant versus the landlord before your inspection contingency runs out, since exam-room and imaging build-outs are expensive enough that ownership of them affects both your underwriting and your insurance.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does pre-leasing percentage matter more than trailing rent collections for a Norman student housing purchase?",
        answer: "Because occupancy resets every August, a single semester of collections can look strong even while pre-leasing for the coming fall is weak. Ask for at least two leasing cycles of data and the current pre-lease percentage before you rely on any one period.",
      },
      {
        question: "Can I identify a Norman medical office building alongside a student housing property on the same 45-day list?",
        answer: "Yes. The 45-day identification window and the three-property or 200% rule apply to the value and count of properties named, not the asset class, so a mixed list works as long as you meet the identification requirements your qualified intermediary lays out.",
      },
      {
        question: "How does Norman's research park differ from a standard office building for underwriting purposes?",
        answer: "Research-park tenants often have lab or data infrastructure that's costly to relocate, which tends to produce longer holds and fewer comparable sales. Expect to lean more on income approach and less on a thin set of recent trades.",
      },
      {
        question: "What boot exposure should I expect moving out of a Norman rental house into a larger apartment building?",
        answer: "If the mortgage on your new property is smaller than the one you're paying off, or if you pull cash out at closing, that difference is generally treated as boot. Confirm the exact number with your CPA before you finalize the purchase price.",
      },
      {
        question: "Does OU's enrollment trend affect how lenders underwrite Norman student housing?",
        answer: "Lenders typically want at least a few years of enrollment and pre-lease history for the specific property, beyond university-wide enrollment figures alone, since building-level leasing performance can vary even when overall enrollment is stable.",
      },
    ],
  },
  "moore-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Moore sits directly on I-35 between Oklahoma City and Norman, and its commercial base reflects that pass-through position: retail and service tenants drawing from both directions of daily traffic, plus a growing distribution footprint that trades on highway access rather than proximity to any single employer.</p>",
      },
      {
        heading: "The S. 19th Street Retail Corridor",
        html: "<p>South 19th Street carries most of Moore's retail density, grocery-anchored centers, quick-service restaurants, and service tenants that draw from the residential rooftops filling in on both sides of I-35. A large chunk of this retail stock was rebuilt or substantially renovated after the May 2013 tornado, which means a meaningful share of Moore's commercial buildings are newer than their peers in older, unaffected Oklahoma City neighborhoods, and that shows up in lower near-term capital expenditure needs for an exchange buyer.</p><p>National tenants that returned to the corridor after the rebuild have generally stayed, which gives a buyer a longer occupancy track record to evaluate than a brand-new corridor would offer, and that history is worth requesting directly from the current landlord rather than assuming a newer building has no operating history at all.</p>",
      },
      {
        heading: "Distribution and Flex Space Along the I-35 Frontage",
        html: "<p>Warehouse and flex buildings along the interstate frontage have picked up tenants that need central access to both Oklahoma City and Norman without paying core-metro land prices, and several buildings originally built for light manufacturing have converted to logistics and last-mile use over the past several years. Dock-high product here trades less often than the retail stock, so buyers should expect to compare against sales elsewhere in the I-35 corridor rather than assuming a deep pool of within-Moore comparables.</p>",
      },
      {
        heading: "Rebuilt Stock Changes the Diligence Checklist",
        html: "<p>Because so much of Moore's commercial inventory postdates 2013, a buyer evaluating an older, unrebuilt building here should treat its age as a real diligence flag rather than an incidental detail, confirming roof condition, storm-shelter or safe-room provisions, and whether the structure meets current wind-resistance code rather than the code in place when it was originally built.</p><p>Insurance underwriters serving this corridor have also grown more familiar with Moore's post-2013 construction standards, and a building that documents compliance with those standards can sometimes carry a more favorable premium than an older building of similar size and use, a detail worth factoring into net operating income projections.</p>",
      },
      {
        heading: "What a Moore Identification Usually Draws From",
        html: "<p>Replacement candidates in Moore generally fall into these categories:</p><ul><li>grocery-anchored or quick-service retail along South 19th Street</li><li>dock-high warehouse and distribution buildings on the I-35 frontage</li><li>converted light-manufacturing buildings now leased to logistics tenants</li><li>smaller strip retail serving residential growth east and west of the interstate</li></ul>",
      },
      {
        heading: "What the Property Manager Should Confirm Before You Close",
        html: "<p>Manager to manager, ask the outgoing team for the building's post-2013 construction or renovation records if the property was rebuilt, along with the current roof warranty and the last wind-event inspection, since that documentation is often the deciding factor in how a lender or insurer prices the deal. If you're buying dock-high distribution space, get the loading-dock equipment maintenance log and confirm whether the current tenant has flagged any recurring downtime tied to power or drainage.</p><p>Coordinate the ownership handoff around the tenant's delivery schedule where the lease allows it, and get a direct answer from the outgoing manager on whether any tenant complaints are still open, rather than relying solely on the estoppel certificate.</p>",
      },
    ],
    faqs: [
      {
        question: "Does buying a rebuilt post-2013 Moore property change how a lender underwrites the deal?",
        answer: "Often favorably. Newer construction and current wind-resistance code compliance can reduce a lender's perceived risk and near-term capital expenditure assumptions compared with an older, unrebuilt building nearby.",
      },
      {
        question: "Can I identify a Moore retail building and an I-35 warehouse on the same replacement list?",
        answer: "Yes. The three-property rule and 200% rule govern the count and value of properties you name, not the asset class, so a mixed retail-and-industrial list is workable as long as your qualified intermediary confirms the identification meets the requirements.",
      },
      {
        question: "What's the boot risk if I roll a fully paid-off Moore rental into a leveraged warehouse purchase?",
        answer: "Taking on new debt doesn't create boot by itself, but pulling cash out at closing or under-leveraging relative to your relinquished property's value can. Work through the exact numbers with your CPA before you sign a purchase agreement.",
      },
      {
        question: "How far in advance should I request storm-shelter and roof documentation on an older Moore building?",
        answer: "Request it as soon as you go under contract. Older buildings sometimes lack complete records, and tracking down a wind-resistance retrofit history can take longer than a standard inspection period allows.",
      },
      {
        question: "Do I need a qualified intermediary even if I'm exchanging within the same Moore submarket?",
        answer: "Yes. The QI requirement applies regardless of geography. Selling and buying in the same corridor doesn't remove the need for a qualified intermediary to hold proceeds and prepare exchange documentation.",
      },
    ],
  },
  "yukon-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Yukon sits on I-40 west of Oklahoma City, and its exchange market splits between fast-growing retail along the highway frontage and older agricultural land at the city's edge that's slowly converting to development. A buyer here should be clear about which side of that split a property sits on before assuming it behaves like the other.</p>",
      },
      {
        heading: "Retail Growth Along Garth Brooks Boulevard and I-40",
        html: "<p>Yukon's main commercial spine, renamed Garth Brooks Boulevard for the city's best-known native son, has drawn new grocery-anchored and quick-service retail development that leases to national and regional tenants serving the residential growth filling in on both sides of the highway. This corridor trades more actively than the older downtown Yukon core, and pricing here tends to track the pace of nearby rooftop construction more than any single anchor tenant.</p>",
      },
      {
        heading: "Warehouse and Distribution Along the I-40 Frontage",
        html: "<p>Distribution and light-industrial buildings along the interstate frontage draw tenants looking for lower land costs than closer-in Oklahoma City industrial submarkets, with highway access to both Oklahoma City and points west toward Amarillo. Several buildings here serve regional trucking and last-mile tenants rather than large single-user distribution centers, which means lease terms tend to run shorter and turnover a bit more often than a big-box warehouse deal.</p><p>Because tenant turnover runs a bit higher in this stock, a buyer should weigh a slightly elevated vacancy assumption against the lower entry price relative to industrial land closer to the airport, and confirm what re-tenanting costs, dock door additions, trailer parking striping, have historically run for the specific building.</p>",
      },
      {
        heading: "The Grain Elevator and Yukon's Agricultural Edge",
        html: "<p>The historic grain elevator along the rail line near downtown, still visible from I-40 with its landmark painted sign, is a reminder that Yukon's economy started in wheat milling, and land at the city's western and southern edges remains in agricultural use even as residential subdivisions push outward. Exchange buyers eyeing this edge land should confirm current zoning and any pending annexation plans, since a parcel's investment case can change quickly once it's inside the city's growth boundary.</p><p>A parcel still under a working farm lease generates modest, steady income in the meantime, and that income can be a reasonable holding strategy for a buyer waiting on development timing rather than a drag to be tolerated, provided the farm lease terms and any required notice period are clearly documented.</p>",
      },
      {
        heading: "What a Yukon Identification Usually Draws From",
        html: "<p>Replacement candidates in Yukon typically fall into these categories:</p><ul><li>grocery-anchored or quick-service retail along Garth Brooks Boulevard</li><li>distribution and light-industrial buildings on the I-40 frontage</li><li>agricultural or transitional land at the city's western and southern edges</li><li>small strip retail serving newer residential subdivisions</li></ul>",
      },
      {
        heading: "What the Warehouse Manager Needs to Flag Before Closing",
        html: "<p>Manager to manager, get the loading-dock maintenance record and any history of drainage or flooding issues at the site before your inspection period runs out, since I-40 frontage land here sits lower than it looks on a topo map in a few spots. Ask the outgoing manager whether the tenant has raised any complaints about truck queuing or highway access during peak hours, and confirm the current gate and badge-access setup before you take over.</p><p>If you're buying agricultural-edge land instead, ask whoever manages the current use, whether that's a tenant farmer or a caretaker, about irrigation rights, fencing condition, and any existing lease terms that would carry over to a new owner.</p>",
      },
    ],
    faqs: [
      {
        question: "Does raw agricultural land at Yukon's edge qualify as like-kind replacement property for a 1031 exchange?",
        answer: "Generally yes, as long as it's held for investment or business use rather than personal use, since like-kind treatment for real property is broad. Confirm the intended holding purpose with your tax advisor before you finalize the purchase.",
      },
      {
        question: "How does pending annexation affect a Yukon land purchase during the 45-day identification window?",
        answer: "Annexation status can change a parcel's zoning and development timeline quickly, so confirm current status with the city before you commit to it on your identification list, not after the window has already closed.",
      },
      {
        question: "Can I identify a Yukon warehouse and a piece of agricultural land on the same replacement list?",
        answer: "Yes. The three-property and 200% identification rules govern the count or aggregate value of what you name, not the asset type, so mixing warehouse and land is workable if your qualified intermediary confirms the identification is valid.",
      },
      {
        question: "What's the boot exposure if I exchange a fully leveraged Yukon retail building into unleveraged land?",
        answer: "Reducing your debt load without adding offsetting cash generally creates boot equal to that debt reduction. Run the exact calculation with your CPA before you sign a contract on the replacement property.",
      },
      {
        question: "How quickly does Yukon retail turn over compared to Oklahoma City's core industrial submarkets?",
        answer: "Yukon's growth-corridor retail tends to trade more actively than older core-metro industrial product, since new rooftops are still filling in around it, while established industrial buildings closer to the airport often change hands less frequently.",
      },
    ],
  },
  "midwest-city-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Midwest City's commercial base is shaped almost entirely by one neighbor: Tinker Air Force Base, the state's largest employer and a major aerospace maintenance depot. An exchange buyer here is generally underwriting exposure to that single anchor, whether directly through a defense contractor tenant or indirectly through the retail and service businesses that serve the base's workforce.</p>",
      },
      {
        heading: "Contractor Flex Space Tied to Depot Contracts",
        html: "<p>Flex and light-industrial buildings near the base perimeter lease to aerospace maintenance subcontractors, parts suppliers, and logistics firms whose lease terms often track the length of a specific depot contract rather than a standard market lease. A buyer replacing into this stock should ask what happens to the space if the underlying contract isn't renewed, since a single-tenant building configured around one contractor's shop-floor layout may need real reconfiguration to serve a different tenant.</p><p>Security and access requirements tied to proximity to the base can also affect a building's marketability to non-defense tenants, and that's worth pricing into the deal rather than assuming the current use is easily replaceable. Buyers should also confirm whether any of the tenant's improvements, cranes, compressed-air lines, or specialty ventilation, were installed under a government contract that restricts their transfer or removal.</p>",
      },
      {
        heading: "Rose State College and the SE 15th/Air Depot Retail Base",
        html: "<p>Rose State College supports a steady base of student-serving retail and service tenants, while the SE 15th Street and Air Depot Boulevard corridors carry older strip retail that leases primarily to the base's workforce and surrounding residential population. This retail stock tends to be smaller-footprint and lower rent than comparable centers in Edmond or Moore, which is part of the value case for buyers looking for entry-level commercial product in the metro.</p>",
      },
      {
        heading: "Office Space Tied to Defense-Adjacent Services",
        html: "<p>Smaller office buildings around the base serve engineering firms, staffing agencies, and logistics coordinators working the depot's supply chain, and lease terms here often run shorter than a standard downtown Oklahoma City office lease because tenant headcount can move with contract cycles. A buyer should confirm tenant contract exposure alongside the usual lease abstract review.</p><p>Because several of these tenants scale staffing up or down with active contract awards, occupancy in this office stock can look uneven compared with a stable downtown professional-services building, and that variability should be reflected in how conservatively a buyer underwrites future income.</p>",
      },
      {
        heading: "What a Midwest City Identification Usually Includes",
        html: "<p>Replacement buyers here are typically underwriting one of the following:</p><ul><li>flex or light-industrial buildings leased to Tinker supply-chain contractors</li><li>strip retail and service centers along SE 15th Street and Air Depot Boulevard</li><li>small office buildings serving defense-adjacent engineering and staffing tenants</li><li>student-serving retail near Rose State College</li></ul>",
      },
      {
        heading: "Talking Manager to Manager on a Tinker-Adjacent Building",
        html: "<p>Get the outgoing manager's read on the tenant's contract renewal timeline before you're past your inspection contingency, since a depot subcontractor losing a contract can leave a purpose-built shop space vacant longer than a generic flex building would sit. Ask directly about any security-clearance-related access restrictions tied to the building's proximity to the base perimeter, and confirm who controls badge access if that applies.</p><p>If the tenant runs shift work tied to depot schedules, coordinate your ownership transition and any planned capital work around those shift changes rather than around your own closing date, and get the maintenance log on any specialized power or compressed-air systems before you close.</p>",
      },
    ],
    faqs: [
      {
        question: "How much risk does a Tinker Air Force Base contractor lease carry compared to a standard industrial lease?",
        answer: "It depends on the length and renewal history of the underlying depot contract. A tenant with a long, repeatedly renewed contract history carries less risk than one on a shorter or newly awarded contract, so ask for that history during diligence.",
      },
      {
        question: "Can I identify a Midwest City flex building alongside a retail center on the same 45-day list?",
        answer: "Yes. The 45-day identification rules govern the count or value of properties named, not the asset class mix, so combining flex and retail on one list is workable if your qualified intermediary confirms it meets the rule you're using.",
      },
      {
        question: "What happens to a purpose-built defense contractor space if the tenant's contract isn't renewed?",
        answer: "It may need reconfiguration to attract a new tenant, since shop-floor layouts and specialized power or security features built for one contractor don't always suit another. Price potential re-tenanting costs into your underwriting.",
      },
      {
        question: "Does the 95% rule ever make sense for a Midwest City exchange with a short list of properties?",
        answer: "The 95% rule requires you to actually acquire 95% of the value of everything you identify, regardless of count, so it's typically used only when a buyer is confident it can close on nearly everything named, which is a higher bar than the three-property or 200% rule.",
      },
      {
        question: "How does constructive receipt risk apply if a Midwest City tenant pays rent directly to me during a sale?",
        answer: "If exchange proceeds or rent tied to the relinquished property pass through your control instead of your qualified intermediary's, that can trigger constructive receipt and disqualify the exchange, so route all such funds through your QI.",
      },
    ],
  },
  "bethany-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Bethany is one of the smallest and oldest incorporated cities in the metro, bounded tightly enough that its commercial stock rarely changes much year to year. An exchange buyer here is generally trading in small-footprint retail and office buildings rather than the larger warehouse or big-box product found along the metro's highway corridors.</p>",
      },
      {
        heading: "Southern Nazarene University's Small Commercial Footprint",
        html: "<p>Southern Nazarene University anchors a modest cluster of student-serving retail and service tenants near campus, quick-service restaurants, tutoring services, and small office users, that leases at lower rents than comparable space in Norman near the much larger University of Oklahoma. Turnover here tracks more with individual tenant business decisions than with a defined academic leasing cycle, since most of this stock isn't purpose-built student housing.</p><p>Because the university's enrollment is modest relative to OU, a buyer shouldn't expect the same kind of seasonal leasing swings that define the Norman market, and a rent roll pulled at any point in the year is generally a fair representation of the property's performance.</p>",
      },
      {
        heading: "Older Strip Commercial Along NW 39th and Council Road",
        html: "<p>The commercial strips along NW 39th Expressway and Council Road carry a mix of independent retailers and service businesses in buildings that have changed little in decades, small floor plates, street parking, and limited loading access compared with newer suburban centers. That format suits certain tenant types well, particularly service businesses that don't need large parking fields, but it narrows the pool of national retail tenants who could realistically occupy the space.</p>",
      },
      {
        heading: "Limited New Supply Keeps Existing Buildings in Demand",
        html: "<p>Because Bethany's small land area leaves little room for new commercial construction, existing buildings tend to stay leased longer than in faster-growing suburbs, and a vacant unit here can be harder to backfill only in the sense that there's less spillover competition from brand-new product undercutting it on rent.</p><p>That stability cuts both ways for an exchange buyer: fewer surprises from new competing supply, but also fewer opportunities to acquire a building at a distressed price, since owners here rarely face the kind of oversupply pressure that forces a quick sale elsewhere in the metro.</p>",
      },
      {
        heading: "What a Bethany Identification Usually Includes",
        html: "<p>Replacement candidates in Bethany generally fall into these categories:</p><ul><li>small retail and service buildings along NW 39th Expressway and Council Road</li><li>student-serving retail and office space near Southern Nazarene University</li><li>independent-tenant commercial buildings with limited on-site parking</li><li>small mixed-use buildings combining ground-floor retail with office above</li></ul>",
      },
      {
        heading: "What the Small-Building Manager Can Tell You That a Rent Roll Can't",
        html: "<p>Manager to manager, ask about parking arrangements first, since a lot of Bethany's older commercial stock relies on informal or shared parking rather than a dedicated lot, and that detail rarely shows up clearly in a lease abstract. Get the honest answer on which tenants have month-to-month arrangements versus signed leases, since smaller independent tenants here sometimes operate on handshake terms that need to be formalized before closing.</p><p>Confirm whether any recent roof or HVAC work was done building-wide or unit by unit, since older strip buildings in Bethany are often owned and maintained piecemeal rather than under one consistent capital plan.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does Bethany commercial real estate trade less often than other Oklahoma City suburbs?",
        answer: "Bethany's small land area limits new construction, so existing owners tend to hold longer and there are fewer available properties at any given time. Expect a thinner set of recent comparable sales when pricing a deal here.",
      },
      {
        question: "Can I formalize a month-to-month Bethany tenant's lease as part of my 1031 exchange due diligence?",
        answer: "You can request it before closing, but keep in mind that changing lease terms shortly before a sale can affect how a lender or your qualified intermediary views the property's stabilized income, so document any changes clearly.",
      },
      {
        question: "Does the three-property rule work for a small Bethany deal with a low sale price?",
        answer: "Yes, the three-property rule isn't tied to deal size. You can identify up to three properties of any value as long as you intend to acquire at least one, regardless of how small the relinquished property was.",
      },
      {
        question: "What diligence should I do on shared or informal parking arrangements before buying in Bethany?",
        answer: "Get any shared-parking agreement in writing and confirm it survives a change in ownership. An informal arrangement with a neighboring property owner can lapse at sale if it was never documented.",
      },
      {
        question: "How does constructive receipt risk apply if a Bethany tenant pays rent directly to me during closing?",
        answer: "Rent collected before closing generally belongs to the seller and isn't part of the exchange proceeds, but any sale proceeds must route through your qualified intermediary, not through you directly, to avoid constructive receipt.",
      },
    ],
  },
  "mustang-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Mustang is one of the fastest-growing residential suburbs in the metro, and its commercial base is still catching up to that rooftop growth rather than leading it. An exchange buyer here is generally underwriting newer construction with limited operating history, not a stabilized asset with years of trailing data.</p>",
      },
      {
        heading: "Retail Following Rooftops Along Mustang Road",
        html: "<p>New grocery-anchored centers, quick-service restaurants, and neighborhood service tenants have filled in along Mustang Road and SH-152 as home construction has pushed the population up over the past several years, and much of this retail stock is recent enough that it hasn't been through a full lease-renewal cycle yet. Buyers should treat opening-year leasing numbers cautiously and ask what percentage of tenants have already renewed at least once, since first-generation leases sometimes carry concessions that won't repeat at renewal.</p>",
      },
      {
        heading: "A Thin Bench of Older Commercial Stock",
        html: "<p>Unlike Bethany or Del City, Mustang has relatively little older commercial building stock to fall back on, which means value-add opportunities here look different: less about renovating a dated building and more about stabilizing a newer one that hasn't yet reached full lease-up or has a below-market anchor lease signed during the early growth phase.</p><p>A buyer pursuing this kind of stabilization play should model out the timeline to full occupancy carefully rather than assuming the last empty suite will lease at the same rate the first several did, since the easiest, most visible spaces in a new center typically lease first, leaving the harder-to-market units for later in the cycle.</p>",
      },
      {
        heading: "Limited Industrial and Office Product",
        html: "<p>Mustang has not developed much industrial or office inventory relative to its residential growth, so exchange buyers looking for those asset classes here should expect a narrow selection and may need to widen their search to Yukon or the broader I-40 corridor to find comparable product.</p>",
      },
      {
        heading: "What a Mustang Identification Usually Draws From",
        html: "<p>Replacement candidates in Mustang generally fall into these categories:</p><ul><li>newer grocery-anchored or quick-service retail along Mustang Road and SH-152</li><li>neighborhood service centers built within the last several years</li><li>small strip retail still working through initial lease-up</li><li>limited office or flex space serving the local business base</li></ul>",
      },
      {
        heading: "Coordinating a Retail Handoff During a Growth Cycle",
        html: "<p>Manager to manager, ask for the full leasing history on every suite, going back further than the current rent roll, since a newer Mustang center may still carry first-generation concessions that will disappear at renewal and change the building's real income going forward. Confirm which tenants signed personal guarantees versus corporate guarantees, since a lot of early-growth-phase tenants here are single-location operators rather than national credit tenants.</p><p>If construction is still active nearby, ask the outgoing manager whether ongoing road work or utility upgrades have caused any access disruptions tenants have complained about, since that kind of temporary downtime is common in a fast-growing corridor and worth knowing before you take over. Ask, too, whether any anchor tenant negotiated a co-tenancy clause tied to the center reaching a minimum occupancy level, since a vacancy elsewhere in a young shopping center can trigger rent relief for that anchor if the clause isn't tracked closely.</p>",
      },
    ],
    faqs: [
      {
        question: "Should I discount opening-year rent numbers on a newer Mustang retail center?",
        answer: "Generally yes. First-generation leases often include concessions or below-market starting rent to drive initial lease-up, so ask what percentage of tenants have already renewed at market terms before relying on year-one income.",
      },
      {
        question: "Can I use the 200% rule if Mustang doesn't have enough comparable properties to name three?",
        answer: "Yes. The 200% rule lets you identify more than three properties as long as their combined value doesn't exceed twice what you sold, which is useful in a submarket with a thin bench of similar buildings.",
      },
      {
        question: "Where should I look for industrial or office replacement property if Mustang doesn't have enough inventory?",
        answer: "Nearby Yukon and the broader I-40 corridor typically carry more industrial and office product, and identifying property outside Mustang's city limits is allowed as long as it otherwise meets the like-kind and identification requirements.",
      },
      {
        question: "What boot exposure should I expect financing a newer, more expensive Mustang property with a larger loan?",
        answer: "Taking on more debt than your relinquished property carried doesn't create boot by itself, but under-leveraging or pulling out cash can. Confirm the specific calculation with your CPA before you close.",
      },
      {
        question: "Does a fast-growing suburb like Mustang change how long the 45-day identification window feels in practice?",
        answer: "New listings can come to market quickly in a growth corridor, but a strong sale environment can also mean competing buyers move fast, so start your search the day your relinquished property goes under contract, not after closing.",
      },
    ],
  },
  "warr-acres-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Warr Acres is landlocked by Oklahoma City on every side, an older inner-ring suburb where the map hasn't moved in decades, and it trades almost entirely on redevelopment and infill rather than new construction. An exchanger looking here is buying an existing building and an existing tenant base, not a growth story, and the underwriting should reflect that from the start rather than treating an older strip center like a development play in disguise.</p>",
      },
      {
        heading: "A Built-Out Inner-Ring Market",
        html: "<p>Warr Acres sits along the NW 39th Street and MacArthur Boulevard corridor as a small, fully incorporated city surrounded on every side by Oklahoma City proper, and there's essentially no vacant land left for greenfield development. Its commercial stock dates mostly to the 1960s and 1970s, older strip centers and small office buildings built for a retail pattern that's shifted since. An exchanger should approach Warr Acres expecting an occupied, aging building rather than new construction, and should underwrite the deal on the existing tenant base rather than speculative redevelopment potential unless redevelopment is the specific strategy.</p><p>Being landlocked by a much larger city cuts both ways here: Warr Acres benefits from being close to established neighborhoods and Lake Hefner-area demand, but it also means any future growth has to come from redeveloping existing parcels rather than from new rooftops arriving nearby.</p>",
      },
      {
        heading: "What Trades: Infill and Redevelopment Candidates",
        html: "<p>Older retail strip centers, small office and medical conversions, and occasional redevelopment or value-add opportunities make up most of what's available in Warr Acres. Some buildings carry functional obsolescence: layouts built for a retail model that's since moved to bigger-format centers elsewhere in the metro, or parking configurations that no longer meet current code without a variance. An exchanger pursuing a value-add strategy here should confirm the building still qualifies as like-kind real property under the planned renovation scope, since gutting a structure down to its foundation can raise questions worth discussing with a tax advisor.</p><p>A buyer weighing a lighter-touch reposition instead, such as re-tenanting a partially vacant strip center rather than a full teardown, generally has an easier underwriting path here since the existing structure and most of its systems stay intact through the transition.</p>",
      },
      {
        heading: "Warr Acres Diligence for Older Buildings",
        html: "<p>A Warr Acres diligence file for an older strip center or office building should specifically confirm:</p><ul><li>Roof and HVAC age on 1960s and 1970s-era construction</li><li>ADA compliance gaps in older storefronts and restrooms</li><li>Parking ratio compliance under current city code versus the building's original approval</li><li>Environmental screening for any prior automotive or fuel-related use</li><li>Easements left over from decades of small-lot subdivision</li><li>Code enforcement history with the city</li></ul><p>Pulling the city's code enforcement file directly, rather than relying on the seller's representations, is a simple step that often surfaces open violations an owner has been managing informally for years without ever actually resolving.</p>",
      },
      {
        heading: "Managing Downtime in a Building That's Never Fully Vacant",
        html: "<p>Most Warr Acres strip centers stay at least partially occupied through an ownership change, which means any capital work an incoming owner plans has to work around tenants who are already open for business. A facilities team should walk the property before closing to identify which repairs are truly urgent versus which can wait, and should talk to each small-business tenant directly about how much notice they need before any work that affects their storefront access, since a surprise closure during business hours can cost a small tenant real revenue and goodwill.</p>",
      },
      {
        heading: "Working the 45-Day Window Against a Small, Built-Out Footprint",
        html: "<p>Because there's no vacant land left to speak of, identification in Warr Acres almost always centers on existing improved buildings rather than land plays, which actually simplifies underwriting somewhat since there's a real operating history to review instead of a pro forma. An exchanger should still identify a backup candidate under the three-property rule, since the small footprint of this submarket means only a handful of genuinely comparable buildings come up for sale in a given year.</p><p>Because inventory is thin, an exchanger who spots a Warr Acres candidate before it formally hits the market, through a direct relationship with a local broker or property manager, gains real advantage over waiting for the identification window to force a rushed search through whatever happens to be listed.</p>",
      },
    ],
    faqs: [
      {
        question: "Is there any vacant land left to develop in Warr Acres?",
        answer: "Essentially none. Warr Acres is fully built out and surrounded by Oklahoma City on every side, so replacement property here almost always means an existing improved building rather than a land play.",
      },
      {
        question: "Does a major renovation affect like-kind status?",
        answer: "Real property generally remains like-kind after renovation, but a renovation extensive enough to effectively create a new structure is worth discussing with a tax advisor before relying on the original property's like-kind status.",
      },
      {
        question: "What should I check on Warr Acres' older buildings?",
        answer: "Roof and HVAC age, ADA compliance in older storefronts, and current parking ratio compliance versus the building's original approval are all worth close review given the age of the construction.",
      },
      {
        question: "How should I manage tenants during an ownership change here?",
        answer: "Talk to each tenant directly about notice requirements for any work affecting storefront access, since most Warr Acres buildings stay partially occupied through closing and a surprise closure can cost a small tenant real business.",
      },
      {
        question: "Should I identify a backup property in Warr Acres?",
        answer: "Yes, the small, built-out footprint means only a handful of genuinely comparable buildings trade in a given year, so a backup candidate under the three-property rule is worth naming.",
      },
    ],
  },
  "nichols-hills-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Nichols Hills is a small, affluent enclave city entirely surrounded by Oklahoma City, and its commercial market is correspondingly tiny: a few blocks of boutique retail and professional office rather than the corridors of national-tenant retail or industrial product found elsewhere in the metro. Scarcity, not scale, drives value here.</p>",
      },
      {
        heading: "Nichols Hills Plaza and the Western Avenue Corridor",
        html: "<p>Nichols Hills Plaza at Western Avenue and Wilshire has anchored boutique and specialty retail in the city for decades, drawing independent apparel, home goods, and specialty food tenants rather than the national chains that fill big-box centers elsewhere in the metro. Rents here run higher per square foot than most Oklahoma City suburbs, reflecting both the affluent surrounding population and the genuinely limited amount of retail space available to lease.</p><p>Tenant mix here shifts more slowly than in a typical shopping center, since a departing boutique retailer is often replaced by a similar independent operator rather than a national chain looking to enter the market, which keeps the center's character consistent across ownership changes.</p>",
      },
      {
        heading: "Professional Office in a Residential-First City",
        html: "<p>Small professional office buildings, largely serving wealth management, legal, and boutique medical tenants, occupy the handful of commercial-zoned parcels scattered through an otherwise almost entirely residential city. Because so little land here is zoned for commercial use, a vacant suite tends to attract multiple interested tenants quickly, which keeps turnover costs low for ownership even though the pool of available space is small.</p><p>Buyers should still confirm parking allocation carefully, since several of these buildings share lots with neighboring parcels under decades-old informal arrangements rather than dedicated recorded easements, and that detail can matter more here than in a purpose-built suburban office park.</p>",
      },
      {
        heading: "A Market Defined by What It Doesn't Have",
        html: "<p>Nichols Hills has essentially no industrial or warehouse stock and very little land available for new commercial construction, so exchange buyers should treat this submarket as a niche play for boutique retail or small office rather than a place to source volume. Comparable sales here are genuinely scarce, and pricing often leans on income approach and nearby Western Avenue corridor data outside the city limits.</p>",
      },
      {
        heading: "What a Nichols Hills Identification Usually Includes",
        html: "<p>Replacement candidates in Nichols Hills generally fall into these categories:</p><ul><li>boutique retail space at or near Nichols Hills Plaza</li><li>small professional office suites serving wealth management and legal tenants</li><li>specialty medical office in low-rise buildings</li><li>ground-floor retail with office space above along Western Avenue</li></ul>",
      },
      {
        heading: "What the Boutique Retail Manager Knows About Turnover",
        html: "<p>Manager to manager, ask the outgoing manager how quickly the last vacancy filled and who the interested tenants were, since a genuinely tight market like this one often has a waiting list that a standard vacancy-rate figure won't capture. Confirm whether the current tenant's build-out includes anything unusual, custom fixtures or specialty lighting common in boutique retail, and who owns that build-out at lease end.</p><p>Get the honest maintenance history on the building's exterior and shared common areas, since a small, older commercial building here can carry deferred cosmetic issues that matter more to an image-conscious retail tenant than they would in a big-box format.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does Nichols Hills retail command higher rent per square foot than most Oklahoma City suburbs?",
        answer: "The city has very little commercial-zoned land and an affluent surrounding population, so demand for the small amount of available retail space consistently outpaces supply, which supports premium rents.",
      },
      {
        question: "Can I satisfy the three-property rule using Nichols Hills properties alone given how few are available?",
        answer: "It's possible but often impractical given the scarcity of listings. Many buyers pair a Nichols Hills identification with candidates from the broader Western Avenue corridor or nearby submarkets to have realistic options.",
      },
      {
        question: "What's the like-kind status of a small Nichols Hills office suite relative to a larger relinquished property?",
        answer: "Like-kind treatment for real property doesn't depend on size or asset class match, so a small office suite qualifies as replacement property for a larger relinquished property as long as both are held for investment or business use.",
      },
      {
        question: "How should I price a Nichols Hills property when there are almost no recent comparable sales?",
        answer: "Lean on income approach using actual and market rent for the specific suite, and supplement with data from the broader Western Avenue corridor just outside the city limits rather than relying only on within-city trades.",
      },
      {
        question: "Do I still need a qualified intermediary for a small-dollar Nichols Hills office purchase?",
        answer: "Yes. The qualified intermediary requirement doesn't scale with deal size, and skipping it puts the exchange at risk regardless of how modest the purchase price is.",
      },
    ],
  },
  "bricktown-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Bricktown isn't a suburb at all. It's downtown Oklahoma City's own former warehouse district, rebuilt block by block since the original MAPS redevelopment effort, and the properties trading here look nothing like the rest of this batch: adaptive-reuse retail, hospitality-adjacent space, and boutique office inside converted brick buildings rather than suburban pads or ag land. An exchanger coming from a suburban or rural submarket elsewhere in this batch should expect a genuinely different underwriting exercise here.</p>",
      },
      {
        heading: "From Rail Warehouses to Entertainment District",
        html: "<p>The brick warehouses that once served rail freight along the Rock Island line now house restaurants, entertainment venues, and small offices, redeveloped over the years alongside public investment in the Bricktown Canal and the Chickasaw Bricktown Ballpark. That public-private redevelopment pattern is what makes Bricktown genuinely different from every other location in this batch: value here reflects decades of adaptive reuse and downtown foot traffic, not rooftop growth or industrial freight access.</p><p>An exchanger evaluating a Bricktown building should ask how much of its current draw comes from the district's own entertainment gravity versus the individual building's lease terms, since a strong district reputation can mask a weak underlying rent roll if the tenant mix hasn't been reviewed directly.</p>",
      },
      {
        heading: "What Trades: Adaptive-Reuse Retail, Hospitality, and Boutique Office",
        html: "<p>Restaurant and entertainment retail space inside converted brick warehouses makes up the core of what trades in Bricktown, alongside boutique office space and some hospitality-adjacent product tied to the district's entertainment draw. Pricing here runs well above the ag-land and small-town product found elsewhere in this batch, reflecting downtown land values and the cost of maintaining historic structures. An exchanger moving significant exchange proceeds into Bricktown should expect fewer, larger-dollar opportunities rather than the small deal sizes common in Harrah or Blanchard.</p><p>A single well-leased Bricktown building can absorb exchange proceeds that would otherwise have to be split across several smaller properties in a rural submarket, which is worth weighing against the higher per-square-foot basis before deciding this district fits the exchange strategy.</p>",
      },
      {
        heading: "Bricktown Diligence for Adaptive-Reuse Buildings",
        html: "<p>A Bricktown diligence file for a converted warehouse building should specifically confirm:</p><ul><li>Structural assessment of the original brick and timber construction</li><li>Waterproofing and flood review for any building near the Bricktown Canal</li><li>Parking and access easements tied to event-driven traffic near the ballpark</li><li>Zoning and licensing requirements specific to the entertainment district overlay</li><li>Elevator and ADA retrofit status in multi-story converted buildings</li><li>Game-day traffic and access impact on tenant deliveries and customer parking</li></ul><p>A structural engineer who has specifically worked on adaptive-reuse brick and timber buildings, rather than a generalist inspector, is worth the added expense given how differently these older structures behave under load compared to modern steel-frame construction.</p>",
      },
      {
        heading: "Tenant Downtime Runs on Ballpark and Event Calendars",
        html: "<p>A restaurant or entertainment tenant in Bricktown does the bulk of its business around game days, concerts, and weekend foot traffic, so any capital work planned during an ownership transition needs to avoid those peak nights rather than following a generic weekday maintenance schedule. A facilities team should pull the ballpark and event calendar before scheduling any repair or inspection work that could restrict tenant access, since closing off a storefront during a sold-out game night costs a tenant real revenue in a way that doesn't happen with a suburban strip center.</p>",
      },
      {
        heading: "Squeezing a Downtown Close Into 45/180",
        html: "<p>Older downtown buildings can carry more complicated chains of title and more easements, from rail-era right-of-way remnants to shared-wall agreements with neighboring converted buildings, than a suburban parcel typically does. An exchanger should flag any title complexity to the qualified intermediary well before the 45-day identification deadline, and should confirm early whether any mixed-use or condo-style ownership structure in the building affects what actually qualifies as the identified replacement property.</p><p>A title company with real downtown Oklahoma City closing experience, rather than one used only to straightforward suburban parcels, is worth seeking out specifically for a Bricktown transaction, since the historic chain-of-title issues here take a different kind of review than a standard suburban title search.</p>",
      },
    ],
    faqs: [
      {
        question: "How is Bricktown different from the rest of this batch?",
        answer: "Bricktown is downtown Oklahoma City's own redeveloped warehouse district, trading on adaptive-reuse retail and hospitality-adjacent demand rather than rooftop growth or agricultural land, so pricing and deal size run well above the suburban and small-town product found elsewhere in this batch of locations.",
      },
      {
        question: "What structural issues come up in converted Bricktown warehouses?",
        answer: "Original brick and timber construction needs a real structural assessment, and buildings near the canal should get a specific waterproofing and flood review given their close proximity to the water and the district's older drainage infrastructure.",
      },
      {
        question: "Why does the event calendar matter for Bricktown tenants?",
        answer: "Restaurant and entertainment tenants do much of their business around game days and weekend events, so any capital work should be scheduled around that calendar rather than a generic weekday maintenance window.",
      },
      {
        question: "Does mixed-use or condo ownership affect identification here?",
        answer: "It can. Confirm early whether the building's ownership structure affects what actually qualifies as the identified replacement property, since this varies by building in a way it doesn't in a single-owner suburban property.",
      },
      {
        question: "Should I expect a more complicated title in Bricktown?",
        answer: "Often yes, given rail-era right-of-way history and shared-wall agreements common among converted downtown buildings, so flag any complexity to your qualified intermediary well before the 45-day deadline runs out.",
      },
    ],
  },
  "paseo-district-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Paseo District is Oklahoma City's original arts colony &mdash; a cluster of 1920s Spanish Revival bungalows and studio buildings along Paseo Drive, just north of downtown, converted decades ago into more than eighty working artist studios, small galleries, and a handful of restaurants and boutique retail. It's the smallest-deal-size submarket in this entire batch, and an exchanger used to standard strip-center or office underwriting should expect a genuinely different exercise here, one closer to underwriting a small commercial condo than a conventional retail center.</p>",
      },
      {
        heading: "A Historic Arts Colony, Not a Modern Retail Center",
        html: "<p>The district's National Register listing and its long-running First Friday art walk tradition draw steady foot traffic, but individual buildings are small &mdash; rarely more than a few thousand square feet. Exchange proceeds from a larger relinquished property often can't be fully absorbed into a single Paseo building without leaving cash on the table, so buyers here frequently pair a Paseo acquisition with a second, larger replacement property elsewhere in the metro to satisfy the full exchange value. The district's own merchants association has kept redevelopment pressure relatively low compared to nearby Uptown 23rd, which has helped preserve the small-building character that defines Paseo.</p>",
      },
      {
        heading: "What Trades: Studio, Gallery, and Small Mixed-Use Buildings",
        html: "<p>The typical Paseo building pairs ground-floor gallery or studio space with a small residential or office component above, alongside a scattering of restaurant and boutique retail along the Paseo Drive spine. Tenants skew toward independent artists and small operators rather than credit tenants, so underwriting here leans more on the district's foot-traffic draw than on any single tenant's balance sheet.</p>",
      },
      {
        heading: "Proximity to the OU Health Sciences District Adds a Second Draw",
        html: "<p>Paseo sits close enough to the OU Health Sciences Center and St. Anthony Hospital campus that daytime medical-district workers supplement the gallery district's evening and weekend foot traffic, giving restaurant and retail tenants here two distinct customer bases rather than one. That daytime traffic has become more valuable to Paseo's restaurant tenants as the medical district itself has continued expanding over the past several years.</p>",
      },
      {
        heading: "What a Paseo District Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>converted bungalow studio or gallery buildings</li><li>small mixed-use buildings with ground-floor retail</li><li>standalone restaurant space along the Paseo Drive spine</li><li>occasionally, a larger multi-tenant building at the district's edge nearer NW 30th Street</li></ul>",
      },
      {
        heading: "Historic-Building Diligence Before the 45-Day Clock Runs",
        html: "<p>Because most Paseo buildings predate 1930, confirm whether any prior historic-tax-credit restrictions apply before assuming a full remodel is possible, and get a foundation and electrical-system assessment given the age of the housing stock. A generalist inspector without bungalow-era experience can miss issues a specialist would catch immediately.</p>",
      },
    ],
    faqs: [
      {
        question: "Why are Paseo District deal sizes so much smaller than the rest of the Oklahoma City batch?",
        answer: "The district's building stock is made up of small, individually owned 1920s bungalows and studio spaces rather than modern multi-tenant construction, so per-property values run well below a typical suburban retail center or office building.",
      },
      {
        question: "Does a historic designation restrict what I can do with a Paseo building after I buy it?",
        answer: "It can, particularly if the prior owner used historic tax credits on the building. Confirm any restrictions with the city's historic preservation office before finalizing your identification, not after closing.",
      },
      {
        question: "What's the tenant risk profile in an arts-district retail building compared to a standard strip center?",
        answer: "Higher on a single-tenant basis, since independent artists and small operators carry less financial cushion than a national credit tenant, but the district's foot-traffic draw supports steadier overall occupancy than the tenant mix alone would suggest.",
      },
      {
        question: "Can I pair a Paseo acquisition with a second property to use up my full exchange value?",
        answer: "Yes. Given the small size of most Paseo buildings, many exchangers identify a Paseo property alongside a larger replacement property elsewhere in the metro under the same 45-day identification list.",
      },
      {
        question: "How does OU Health Sciences Center traffic affect Paseo retail vacancy?",
        answer: "It adds a daytime customer base to a district that otherwise relies heavily on evening and weekend art-walk traffic, which tends to smooth out vacancy in the restaurant and retail spaces closer to the district's southern edge.",
      },
    ],
  },
  "automobile-alley-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Automobile Alley runs along Broadway Avenue between downtown and Midtown &mdash; a stretch of early-1900s auto dealership showrooms, the buildings that gave Oklahoma City its first car culture, now converted to creative office, craft breweries, and boutique retail. The showroom-era bones set this corridor apart from a standard converted warehouse district, and the name itself dates to a stretch of Broadway that once housed more than fifty dealerships in a few compact blocks.</p>",
      },
      {
        heading: "From Dealership Showrooms to Creative Office",
        html: "<p>Large storefront windows and open showroom floor plates built for displaying automobiles translated surprisingly well into loft-style office and brewery space decades later, which is why Automobile Alley's building stock reads differently from Bricktown's warehouse conversions: taller ceilings, more glass, fewer structural columns interrupting the floor plate. Many of these buildings kept their original brick facades through redevelopment, a detail the corridor's business district actively preserves through its own design guidelines.</p>",
      },
      {
        heading: "What Trades: Creative Office, Breweries, and Boutique Retail",
        html: "<p>The tenant mix skews toward marketing agencies, tech startups, and hospitality tenants rather than traditional corporate office, plus a run of small breweries and restaurants drawing on the corridor's growing evening foot traffic. Deal sizes here run larger than in Paseo but smaller than a typical suburban office park, given the building-by-building nature of the redevelopment. A single showroom building might house three or four smaller tenants rather than one anchor, which changes how a buyer should model lease rollover risk against a comparable single-tenant suburban building.</p>",
      },
      {
        heading: "Proximity to the Innovation District and Health Sciences Center",
        html: "<p>Automobile Alley sits directly between downtown's Innovation District and the OU Health Sciences Center campus, which has pulled a run of biotech-adjacent office tenants into the corridor's northern blocks over the past several years &mdash; a tenant base distinct from the hospitality and creative-agency mix further south along Broadway. That split gives the corridor two somewhat independent demand drivers, so a vacancy in the northern blocks doesn't necessarily signal weakness in the retail and brewery space closer to downtown.</p>",
      },
      {
        heading: "What an Automobile Alley Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>converted showroom buildings leased to creative office or brewery tenants</li><li>boutique retail storefronts along Broadway Avenue</li><li>small multi-tenant office buildings nearer the Health Sciences Center</li><li>ground-floor restaurant space with second-floor office above</li></ul>",
      },
      {
        heading: "Diligence on Century-Old Showroom Buildings",
        html: "<p>Confirm the structural condition of original showroom-era steel-sash windows and skylights, since bringing these up to modern energy code can be a meaningful capital item a standard inspection may undercount. Verify that any brewery or restaurant tenant's grease-trap and ventilation permitting predates your ownership transition rather than becoming your responsibility to correct.</p>",
      },
    ],
    faqs: [
      {
        question: "What made Automobile Alley's dealership-era buildings well suited to office conversion?",
        answer: "Showroom floor plates were built with wide-open spans, tall ceilings, and large storefront windows to display cars, and those same qualities happen to work well for open-plan creative office and brewery tenants today.",
      },
      {
        question: "How is the tenant mix here different from Bricktown's?",
        answer: "Automobile Alley leans more toward creative office, agencies, and breweries, while Bricktown's tenant base skews toward restaurants and entertainment venues tied to the ballpark and canal. Both are adaptive-reuse districts, but the underlying demand driver differs.",
      },
      {
        question: "Why has biotech-adjacent office demand grown in the corridor's northern blocks?",
        answer: "Automobile Alley's northern end sits closest to the OU Health Sciences Center, and lab-support and medical-office tenants have expanded into that stretch as the broader Innovation District has grown.",
      },
      {
        question: "What capital items should I budget for in a converted showroom building?",
        answer: "Original steel-sash windows and skylights are common in these buildings and often need upgrading to meet current energy code, which can be a larger line item than a standard building inspection captures.",
      },
      {
        question: "Are brewery and restaurant tenants here riskier than standard retail tenants?",
        answer: "They carry more operational complexity — grease traps, ventilation, and liquor licensing all need verification — but the corridor's steady foot traffic has historically supported longer tenancies than a typical suburban restaurant pad.",
      },
    ],
  },
  "tulsa-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Tulsa sits roughly 100 miles northeast of Oklahoma City and, unlike every suburb in this batch, is its own separate metro with its own economy &mdash; built on a century of oil-and-gas headquarters presence rather than OKC's blend of government, aerospace, and healthcare employment. An exchanger working with an Oklahoma City-based firm on a Tulsa replacement property should expect the same nationwide-sourcing approach used for out-of-state properties, just applied within Oklahoma's own borders, since local broker relationships in Tulsa are a genuinely separate network from those in OKC.</p>",
      },
      {
        heading: "Downtown Tulsa and the Legacy of Oil-and-Gas Headquarters",
        html: "<p>Art Deco-era office towers built during the 1920s oil boom, later repositioned as the major producers moved their headquarters to Houston, mean Tulsa's downtown office product often carries a lower basis than comparable downtown OKC product, but also a longer runway to full lease-up given the smaller downtown employment base left behind. Some of these towers have since been converted in whole or in part to residential and hotel use, which has slowly reshaped downtown's daytime population and, with it, ground-floor retail demand.</p>",
      },
      {
        heading: "Cherry Street and Brookside: Tulsa's Walkable Retail Corridors",
        html: "<p>Independent restaurant and boutique retail along these two corridors will look familiar to a buyer who knows Paseo or Uptown 23rd in Oklahoma City &mdash; walkable, small-footprint, tenant-driven rather than anchor-driven. The Gathering Place riverfront park has lifted foot traffic and retail rents considerably along the nearby river corridor since it opened, and that lift has extended outward into Brookside's older commercial strip over the years that followed.</p>",
      },
      {
        heading: "Industrial Along the Port of Catoosa and BNSF Rail Corridor",
        html: "<p>The Port of Catoosa, one of the furthest-inland ports connected to the U.S. waterway system, anchors a distribution and industrial submarket that behaves more like a logistics hub than anything in the OKC metro &mdash; worth a look for exchange buyers specifically seeking industrial replacement product with barge, rail, and interstate access in one location. Tenants here tend to sign longer leases than a typical last-mile distribution building, since relocating around barge and rail infrastructure carries real switching costs.</p>",
      },
      {
        heading: "What a Tulsa Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>repositioned Art Deco office buildings downtown</li><li>independent retail along Cherry Street or Brookside</li><li>industrial or distribution space near the Port of Catoosa or BNSF rail lines</li><li>multifamily serving the University of Tulsa and downtown workforce</li></ul>",
      },
      {
        heading: "Widening the Search Beyond the OKC Broker Network",
        html: "<p>A qualified intermediary or broker used exclusively to Oklahoma City transactions may not have deep Tulsa relationships, so ask specifically about recent Tulsa closings before relying on someone's general Oklahoma experience. The two markets share a state but not a brokerage community, and treating them as interchangeable is a common mistake for first-time Tulsa buyers.</p>",
      },
    ],
    faqs: [
      {
        question: "Is Tulsa part of the Oklahoma City metro for exchange purposes?",
        answer: "No. Tulsa is a separate metropolitan statistical area with its own employment base and property fundamentals, roughly 100 miles from Oklahoma City, so a Tulsa identification should be underwritten against Tulsa comparables, not OKC ones.",
      },
      {
        question: "Why does Tulsa downtown office often carry a lower basis than OKC downtown office?",
        answer: "Many of Tulsa's downtown towers were built during the 1920s oil boom for companies that later relocated headquarters elsewhere, leaving a larger inventory of older office stock relative to current downtown employment demand, which tends to hold pricing down.",
      },
      {
        question: "What makes the Port of Catoosa submarket different from OKC industrial product?",
        answer: "It's one of the few inland locations with combined barge, rail, and interstate access, which draws a distribution and logistics tenant base that doesn't have a direct equivalent anywhere in the Oklahoma City metro.",
      },
      {
        question: "How has the Gathering Place affected nearby retail rents?",
        answer: "The riverfront park has significantly increased foot traffic to the corridors near it, and retail rents in those areas have risen accordingly since the park opened.",
      },
      {
        question: "Can an Oklahoma City-based qualified intermediary coordinate a Tulsa closing the same way as an out-of-state one?",
        answer: "Yes, generally the coordination looks similar since Tulsa operates as its own market with its own brokers and title companies, even though both cities are in Oklahoma.",
      },
    ],
  },
  "broken-arrow-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Broken Arrow sits southeast of Tulsa, roughly 120 miles from Oklahoma City, and functions as Tulsa's fastest-growing suburb the way Moore or Yukon functions for the OKC side of the state. Rose District revitalization and a strong regional school district have driven the rooftop growth behind most of the commercial development here, and the city has grown from a small farming community into one of the state's largest suburbs over the past three decades.</p>",
      },
      {
        heading: "The Rose District's Entertainment-Driven Retail",
        html: "<p>Downtown Broken Arrow's Rose District, built around a rebuilt performing arts venue and a run of newer restaurant and retail development, has become the suburb's answer to Bricktown on a smaller scale, though both deal sizes and rents run below their Oklahoma City-metro counterpart. The city's own investment in streetscape and public space around the district has been a meaningful factor in drawing private retail development to the immediate area.</p>",
      },
      {
        heading: "Warehouse and Distribution Along US-64 and OK-51",
        html: "<p>Broken Arrow's industrial base has grown alongside Tulsa's broader logistics sector, with flex and distribution space along the US-64 and OK-51 corridors serving both local contractors and regional distribution tenants pulling from the wider Tulsa metro. Newer construction here tends to run larger clear-height buildings than the older stock closer to central Tulsa, reflecting more recent industrial demand, and truck-court depth on newer sites is generally deeper as well, built to accommodate larger regional carriers rather than local delivery fleets alone.</p>",
      },
      {
        heading: "Union Public Schools and Rooftop-Driven Retail Demand",
        html: "<p>The district's reputation has pulled sustained residential growth into Broken Arrow over the past two decades, and retail development has followed rooftops the same way it has in Moore or Yukon on the OKC side &mdash; grocery-anchored centers first, specialty retail following once population density supports it. That sequencing matters for an exchange buyer timing an acquisition against a still-developing corridor rather than an already mature one.</p>",
      },
      {
        heading: "What a Broken Arrow Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>grocery-anchored retail centers following residential growth corridors</li><li>Rose District restaurant and entertainment retail</li><li>light-industrial or flex space along US-64 and OK-51</li><li>garden-style multifamily serving Union School District families</li></ul>",
      },
      {
        heading: "Confirming Which Growth Corridor a Property Actually Sits On",
        html: "<p>Broken Arrow's residential expansion has moved in phases over the years, and a retail center built for an early phase of rooftop growth can end up bypassed once development shifts to a newer corridor further out. Ask for a recent traffic count and a map of platted subdivisions near any retail property under consideration rather than relying on population figures for the city as a whole, and check whether any competing centers are already under construction nearby before assuming current traffic patterns will hold.</p>",
      },
    ],
    faqs: [
      {
        question: "How does the Rose District compare to Bricktown for exchange investors?",
        answer: "It's a smaller-scale version of the same idea — entertainment-anchored downtown redevelopment — but deal sizes and achievable rents both run below what a comparable Bricktown property would command.",
      },
      {
        question: "What's driving Broken Arrow's industrial growth along US-64?",
        answer: "Growth in Tulsa's broader logistics and distribution sector has spilled into Broken Arrow, where flex and distribution space along US-64 and OK-51 serves both local contractors and regional tenants pulling from the wider metro.",
      },
      {
        question: "Does Union Public Schools' reputation affect commercial property values here?",
        answer: "Indirectly, yes. The district's reputation has driven two decades of sustained residential growth, and retail and multifamily development has followed that rooftop growth closely.",
      },
      {
        question: "Is Broken Arrow retail development following the same rooftop-first pattern as OKC suburbs like Moore?",
        answer: "Yes, grocery-anchored centers arrive first as population density builds, with specialty and shop-space retail following once the rooftop base can support it, the same sequence seen in Moore or Yukon.",
      },
      {
        question: "How far is Broken Arrow from Oklahoma City for closing logistics?",
        answer: "About 120 miles, roughly a two-hour drive, which is generally not an obstacle for a standard closing but worth planning for if in-person walkthroughs are needed close to the closing date.",
      },
    ],
  },
  "stillwater-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Stillwater sits about 65 miles northeast of Oklahoma City and runs on a fundamentally different clock than any OKC-metro suburb in this batch: Oklahoma State University's academic calendar, not job growth or rooftop counts, drives leasing activity here. With roughly 25,000 students enrolled, OSU is the single largest force shaping demand across nearly every commercial property type in town.</p>",
      },
      {
        heading: "Student Housing Runs on an August Lease-Up Cycle",
        html: "<p>Unlike OKC multifamily, which leases up gradually throughout the year, Stillwater student housing turns over almost entirely each August around the OSU academic calendar. A buyer closing mid-year inherits a building's occupancy as-is rather than being able to smooth out vacancy through normal leasing activity the way a standard apartment owner would, so a summer closing often means underwriting against a pre-leasing report rather than actual signed occupancy.</p>",
      },
      {
        heading: "Main Street Retail and the OSU Campus Corridor",
        html: "<p>Downtown Stillwater's Main Street corridor mixes locally owned restaurants and retail serving both students and the permanent Payne County population &mdash; a tenant base more insulated from national retail trends than a typical OKC-metro strip center, but also more exposed to swings in OSU enrollment. Football weekends in particular bring a surge in revenue for restaurant and hospitality tenants along this corridor that a standard trailing-twelve-month sales report can understate if it doesn't isolate game-day performance.</p>",
      },
      {
        heading: "OSU Research Park and Steadier Office Demand",
        html: "<p>Away from the student-housing cycle, the OSU Research Park has drawn agricultural-technology and veterinary-adjacent tenants into a smaller, steadier office and flex submarket that behaves much more like standard suburban office than anything else in Stillwater. Lease terms here tend to run longer than the standard academic-year rhythm found elsewhere in town, since research and technology tenants generally sign multi-year commitments rather than year-to-year arrangements.</p>",
      },
      {
        heading: "What a Stillwater Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>purpose-built student housing near campus</li><li>Main Street retail and restaurant space</li><li>office or flex space in the OSU Research Park</li><li>occasionally, agricultural-service flex space serving the surrounding Payne County farm economy</li></ul><p>Each of these behaves on its own timeline, so a single Stillwater identification list often mixes an academic-calendar asset with a steadier, non-seasonal one to balance overall risk.</p>",
      },
      {
        heading: "Underwriting Enrollment Risk Before the 45-Day Clock",
        html: "<p>Because student housing occupancy tracks OSU enrollment directly, pull the university's most recent enrollment trend before finalizing an identification. A multi-year enrollment decline changes a student housing building's risk profile in a way a standard occupancy history won't fully capture, and it's worth asking the seller directly what share of current leases are renewals versus new students, since a heavy renewal share can mask a softening freshman class.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does Stillwater student housing lease up differently than standard multifamily?",
        answer: "Occupancy turns over almost entirely each August around the OSU academic calendar rather than spreading gradually across the year, so lease-up timing and vacancy patterns follow the school year, not standard seasonal apartment trends.",
      },
      {
        question: "What happens if I close on a student housing property mid-academic-year?",
        answer: "You inherit the building's occupancy essentially as-is, since new leasing activity is minimal outside the August turnover window. Plan your closing timeline around the academic calendar if occupancy at closing matters to your underwriting.",
      },
      {
        question: "How exposed is Main Street retail to swings in OSU enrollment?",
        answer: "More than a typical OKC-metro strip center, since a meaningful share of Main Street's customer base is students. A stable or growing enrollment trend supports steadier retail demand than a declining one.",
      },
      {
        question: "What kind of tenants fill the OSU Research Park?",
        answer: "Agricultural-technology and veterinary-adjacent tenants make up much of the base, drawing on OSU's research strengths in those fields, and this submarket behaves more like standard suburban office than the student-housing-driven parts of Stillwater.",
      },
      {
        question: "Should I review OSU enrollment trends before identifying a Stillwater property?",
        answer: "Yes, especially for student housing. Enrollment trend data is publicly available and directly informs the occupancy risk you're underwriting, so it's worth pulling before your 45-day identification deadline rather than after.",
      },
    ],
  },
  "lawton-ok": {
    richSections: [
      {
        heading: null,
        html: "<p>Lawton sits about 85 miles southwest of Oklahoma City and is built around Fort Sill, the Army's field artillery training center, in a way no other market in this batch is built around a single institution. Military presence, not suburban rooftop growth, drives commercial demand here, and Fort Sill's continued role as the Army's primary field artillery school gives that demand a longer institutional runway than a typical single-employer town would have.</p>",
      },
      {
        heading: "Fort Sill and the PCS-Driven Housing Cycle",
        html: "<p>Soldiers and families rotating through Fort Sill on permanent-change-of-station orders create a housing demand cycle tied to Army assignment schedules rather than local job growth. Multifamily and single-family rental buyers here should underwrite against Basic Allowance for Housing rates for the relevant ranks rather than relying on standard market-rent comparables alone, since BAH effectively sets a ceiling on what a large share of the tenant base can pay regardless of what the broader market might otherwise support.</p>",
      },
      {
        heading: "Cache Road: Lawton's Primary Retail Corridor",
        html: "<p>The bulk of Lawton's retail trades along Cache Road, a corridor built to serve both the permanent Lawton population and the rotating Fort Sill community, with national retailers occupying the anchor positions and independent restaurants filling in the smaller pad sites around them. Vacancy along Cache Road tends to track base personnel levels more closely than it tracks the kind of population or income data a standard retail underwriting model would typically lead with.</p>",
      },
      {
        heading: "Cameron University's Smaller, Steadier Tenant Base",
        html: "<p>Away from the base-driven cycle, Cameron University supports a smaller run of student-services and tutoring office tenants that behave more like standard small-town commercial office than the PCS-driven multifamily market surrounding Fort Sill. This pocket of demand is modest relative to the base's overall footprint on the local economy, but it gives a buyer diversifying away from military-tenant concentration a real, if smaller, alternative inside the same city.</p>",
      },
      {
        heading: "What a Lawton Identification Usually Includes",
        html: "<p>Replacement buyers here are generally underwriting one of the following:</p><ul><li>garden-style multifamily near Fort Sill's gates</li><li>retail centers along Cache Road</li><li>small office serving the Cameron University area</li><li>occasionally, flex or industrial space tied to defense contractors</li></ul>",
      },
      {
        heading: "Reading a Fort Sill-Adjacent Rent Roll Correctly",
        html: "<p>Before finalizing an identification, ask the current owner or manager how much of the building's occupancy ties to a single Army unit's rotation schedule. A building leased heavily to one unit can see a wave of turnover if that unit deploys or relocates, a concentration risk that doesn't show up in a standard trailing-twelve-month rent roll, and it is worth requesting a tenant-by-unit breakdown rather than accepting an aggregate occupancy percentage at face value.</p>",
      },
    ],
    faqs: [
      {
        question: "How does Fort Sill's PCS cycle affect Lawton multifamily occupancy?",
        answer: "Occupancy shifts follow Army assignment and deployment schedules rather than local job growth, so vacancy can move in waves tied to specific unit rotations rather than the gradual seasonal patterns seen in a typical civilian-driven market.",
      },
      {
        question: "What is BAH and why does it matter for underwriting Lawton rentals?",
        answer: "Basic Allowance for Housing is the Army's monthly housing stipend, which varies by rank and directly caps what a large share of Lawton's rental tenant base can afford to pay, making it a more reliable rent benchmark than standard market comparables alone.",
      },
      {
        question: "What's the risk of a rent roll concentrated in one Army unit?",
        answer: "If that unit deploys or is reassigned, a building can lose a large share of its tenant base at once, a concentration risk worth asking about directly since it won't show up in a standard trailing rent roll.",
      },
      {
        question: "Is Cache Road retail exposed to the same base-driven demand as multifamily?",
        answer: "Somewhat, since a portion of its customer base is Fort Sill-connected, but Cache Road also serves the permanent Lawton population, which cushions it more than the PCS-driven multifamily market near the base's gates.",
      },
      {
        question: "How far is Lawton from Oklahoma City for closing coordination?",
        answer: "About 85 miles, roughly ninety minutes by car, which generally poses no obstacle to a standard closing timeline.",
      },
    ],
  },
  "nationwide": {
    richSections: [
      {
        heading: null,
        html: "<p>Not every Oklahoma City-based exchanger wants to replace into Oklahoma. Selling a relinquished property in the OKC metro doesn't require reinvesting locally &mdash; the replacement property can sit anywhere in the United States, and this page covers what changes when identification and closing move outside the state, whether that's a single out-of-state asset or a portfolio spread across several markets.</p>",
      },
      {
        heading: "Why an OKC-Based Exchanger Looks Outside Oklahoma",
        html: "<p>Common reasons include seeking cap rates or asset classes not available locally, following a family relocation, consolidating scattered holdings into fewer larger assets, or simply diversifying away from a single regional economy after years of concentrated Oklahoma ownership. Some exchangers are also chasing population or job growth trends that Oklahoma's steadier, slower-growth economy doesn't offer to the same degree as faster-growing Sun Belt metros.</p>",
      },
      {
        heading: "Coordinating Identification Across State Lines",
        html: "<p>The 45-day identification deadline and 200% rule apply identically regardless of state, but sourcing comparables and broker relationships in an unfamiliar market takes longer to establish. Out-of-state identifications benefit from starting broker conversations before the relinquished property even closes, rather than after the clock starts, since a cold start on both the market research and the broker relationship at the same time leaves very little margin inside the 45 days.</p>",
      },
      {
        heading: "Local Transfer Taxes and Closing Costs Vary Significantly by State",
        html: "<p>Transfer tax, title insurance, and recording costs differ meaningfully from Oklahoma's relatively low closing-cost structure. A buyer moving proceeds into a high-transfer-tax state should rebudget closing costs before finalizing an identification rather than assuming Oklahoma's cost structure travels with the money, since a state with a percentage-based transfer tax can add a substantial line item that a flat-fee state like Oklahoma never requires.</p>",
      },
      {
        heading: "What Out-of-State Identifications Usually Look Like",
        html: "<p>Replacement buyers going outside Oklahoma are generally underwriting one of the following:</p><ul><li>NNN retail in states with no state income tax</li><li>multifamily in growth markets with stronger population trends than Oklahoma</li><li>industrial product in major logistics-hub metros</li><li>a single larger asset consolidating proceeds from several smaller Oklahoma properties</li></ul><p>Whichever path an exchanger chooses, the underwriting still has to happen sight-unseen or on a compressed travel schedule far more often than it does for a local Oklahoma City acquisition.</p>",
      },
      {
        heading: "Working With a Qualified Intermediary on an Out-of-State Closing",
        html: "<p>Confirm your qualified intermediary is licensed and equipped to handle a closing in the target state before you finalize an identification, since not every QI has the same multi-state closing infrastructure. A mismatch discovered late in the 180-day window can jeopardize the timeline, so raise the question in your very first conversation with the intermediary rather than assuming multi-state capability by default.</p>",
      },
    ],
    faqs: [
      {
        question: "Do I have to replace Oklahoma property with Oklahoma property?",
        answer: "No. 1031 exchange rules require like-kind real property held for investment, not property in the same state, so a relinquished Oklahoma property can be replaced with property anywhere in the United States.",
      },
      {
        question: "Does the 45-day identification deadline change for out-of-state properties?",
        answer: "No, the deadline is identical, but out-of-state identifications typically take longer to source comparables and broker relationships for, so starting that process earlier is worth the added lead time.",
      },
      {
        question: "Why do closing costs vary so much between states?",
        answer: "Transfer tax rates, title insurance requirements, and recording fees are set at the state and sometimes county level, and several states charge meaningfully more than Oklahoma's relatively low closing-cost structure.",
      },
      {
        question: "What kinds of out-of-state replacement properties are most common for OKC sellers?",
        answer: "NNN retail in no-income-tax states and multifamily in higher-growth metros are the two most common paths, followed by consolidating several smaller Oklahoma properties into one larger out-of-state asset.",
      },
      {
        question: "Does my qualified intermediary need special licensing to close in another state?",
        answer: "Not licensing in the legal sense, but confirm your QI actually has closing infrastructure and experience in the target state before finalizing your identification, since not every intermediary operates the same way across state lines.",
      },
    ],
  },
};
