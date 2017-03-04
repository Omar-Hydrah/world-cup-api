var React = require("react");

var Round = React.createClass({



	render: function(){
		var round = this.props.round;
		// Properly transforms the round variable, to access the json data.
		var currentRound; 

		// The currentRound will store the round
		// which will be used to access the data.rounds object
		switch(round){
			case "/matches/first-round":
				currentRound = "firstRound";
				break;
			case "/matches/second-round":
				currentRound = "secondRound";
				break;
			case "/matches/third-round":
				currentRound = "thirdRound";
				break;
			case "/matches/fourth-round":
				currentRound = "fourthRound";
				break;
			case "/matches/final-round":
				currentRound = "finalRound";
				break;
			default:
				currentRound = "firstRound";
				break;
		}

		// Returning the matches based on the selceted round
		var matches = this.props.data.rounds[currentRound].map(function(match, index){
			return (
				<tr key={index}>
					{/* Default Bootstrap border-top is causing trouble when displaying data */}
					<td style={{borderTop: "0"}}>{match.teams[0]}</td>
					<td style={{borderTop: "0"}}>{match.result}</td>
					<td style={{borderTop: "0"}} className="pull-right" >{match.teams[1]}</td>
				</tr>
			);
		});

		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2 col-sm-12">
					<table className="table table-striped">
						<thead>
							<tr>

								<th></th>
								<th>Vs</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{matches}
						</tbody>
					</table>
				</div>
			</div>
		);
	}, // render
});

module.exports = Round;