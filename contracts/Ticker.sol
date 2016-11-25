pragma solidity ^0.4.3;

contract Ticker {
	uint public val;
	function tick() {
		val += 1;
	}
}