document.getElementById('rollButton').addEventListener('click', function() {
  const diceCount = parseInt(document.getElementById('diceCount').value); // 입력된 주사위 개수
  const diceContainer = document.getElementById('diceContainer');
  diceContainer.innerHTML = ''; // 이전 주사위 결과 초기화
  
  let totalSum = 0; // 모든 주사위의 합
  let diceResults = []; // 주사위 결과 저장

  // 주사위 애니메이션을 먼저 보여준 뒤 결과 계산
  for (let i = 0; i < diceCount; i++) {
    const diceElement = document.createElement('div');
    diceElement.classList.add('dice');
    
    // 회전 애니메이션을 주사위에 적용
    diceElement.style.animation = `roll 1s ease-in-out`;  // 애니메이션 효과 적용

    diceContainer.appendChild(diceElement);
  }

  // 애니메이션이 끝난 후, 주사위 결과를 계산하여 표시
  setTimeout(() => {
    diceContainer.innerHTML = ''; // 애니메이션 끝나면 주사위 이미지 리셋

    for (let i = 0; i < diceCount; i++) {
      const diceRoll = Math.floor(Math.random() * 6) + 1; // 1부터 6까지 랜덤 숫자
      totalSum += diceRoll;
      diceResults.push(diceRoll);

      const diceEmoji = getDiceEmoji(diceRoll);
      const diceElement = document.createElement('div');
      diceElement.classList.add('dice');
      diceElement.textContent = diceEmoji; // 주사위 이모지 표시
      diceContainer.appendChild(diceElement);
    }

    // 결과 표시
    document.getElementById('result').textContent = `주사위 결과: ${diceResults.join(', ')}\n합: ${totalSum}`;
  }, 1000); // 애니메이션 시간(1초) 후에 결과 표시
});

function getDiceEmoji(roll) {
  const diceEmojis = {
    1: '⚀',
    2: '⚁',
    3: '⚂',
    4: '⚃',
    5: '⚄',
    6: '⚅'
  };
  return diceEmojis[roll];
}
