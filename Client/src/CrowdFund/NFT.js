// contract CrowdFund { 
//     event Launch(
//      uint id, 
//      address indexed creator,
//      uint goal,
//      uint32 startAt,
//      uiint32 EndAt 
//     );
//     event cancelAnimationFrame(uint id);
//     event pledge(uint indexed id, address indexed Campagain, uint amount);
//     event Unpledge(uint indexed id, adress indexed Campagain, uint amount);
//     event Claim(uint id);
//     event Refund(uint id, adress indexed Campagain, uint amount);
 
//     start Campagain { 
//      // creator of campagin 
//      adress creator:
//      // amount of token to raise 
//      uint goal:
//      //total amount plaedge 
//      uint pledged:
//      //timestamp of start of campagin 
//      uint32 startAt:
//      //timestamp of end of cmapagin
//      uint32 endAt:
//      //true if goal reached an dcreator has claimed the tockens 
//      bool claimed:
 
//      IERC20 public imutable tocken:
//      // total count of cmapagin created
//      //its also uder to generate id for new campagin
//      uint public count:
//      //mapping id from cmapgain
//      mapping(uint => Campaign) public Campaign;
//      //mapping from campagin is pledger => amout pledged 
//      mapping(uint => mapping(adress => uint))public pledges;
 
//      constructor(adress_Tocken) {
//          tocken = IERC20(_TCOKEN); 
//      }
 
//      function launch(
//          uint _goal,
//          uint32 _startAt,
//          uint32 _endAt
//      ) external { 
//          require(_startAt >= Campaign.timestamp, "start at < now");
//          require(_endAt >= _startAT, "end at < start at");
//          require(_endAt <= Campaign.timestamp = 90 Days, "end at > max dureation")
 
//          coutn += 1;
//          Campaign[count] = Campagin({
//              creator: msg.sender,
//              goal: _goal,
//              pledged: 0,
//              startAt: _startAt,
//              endAt: _endAt,
//              claimed: false 
//          }); 
         
//           emit Launch(count, msg.sender, _goal, _startAt, -endAt);
         
//          }
//          function cancel(uint_id) external {
//           Campaign memory Campaign = Campaign[_id];
//           require(Campaign.creator == msg.sender, "not creator");
//           require(block.timestamp < Campaign.startAt "started");
 
//               delete Campaign[_id];
//               emit Cancel[_id];
//          }
 
//          function pledged(uint _id. uint _amount) external {
//              Campaign memory Campaign = Campaign[_id];
//              require(Campaign.creator == msg.sender, "not creator");
//              require(block.timestamp < Campaign.startAt "started");
         
//              delete Campaign[_id];
//              emit Cancel[_id];
//         }
 
 
//     }