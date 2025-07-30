    const chatBox = document.getElementById('chatBox');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    let userMessageCount = 0;

    const answers = [
        "Hi, how can I help you?",
        "I understand. Could you give me more details?",
        "Thank you for your message. I'm processing it..."
    ];

    const defaultAnswer = "Default response";

    function addMessage(message, type = 'user') {
        const div = document.createElement('div');
        div.className = type === 'user'
          ? 'text-right'
          : 'text-left';

        div.innerHTML = `<span class="inline-block px-4 py-2 rounded-lg text-sm ${
          type === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }">${message}</span>`;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = chatInput.value.trim();
        if (!message) return;

        addMessage(message, 'user');
        chatInput.value = '';
        userMessageCount++;

        setTimeout(() => {
          const answer =
            userMessageCount <= 3
              ? answers[userMessageCount - 1]
              : defaultAnswer;

          addMessage(answer, 'bot');
        }, 500);
    });
