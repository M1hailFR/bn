<script setup>
import { ref, onMounted, nextTick } from 'vue'

const questions = [
  {
    text: 'Пожалуйста, задайте ваш вопрос',
    placeholder: 'Ваш вопрос...',
    validate: (answer) => answer.length >= 10,
    error: 'Вопрос должен содержать минимум 10 символов',
  },
  {
    text: 'Укажите ваш номер телефона для связи',
    placeholder: '+7 (XXX) XXX-XX-XX',
    inputType: 'tel',
    validate: (answer) => /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(answer),
    error: 'Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX',
  },
  {
    text: 'Укажите вашу электронную почту',
    placeholder: 'email@domain.com',
    inputType: 'email',
    validate: (answer) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer),
    error: 'Введите корректный email адрес',
  },
]

const currentQuestionIndex = ref(0)
const currentQuestion = ref(questions[0])
const messages = ref([
  {
    text: questions[0].text,
    isUser: false,
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  },
])
const newMessage = ref('')
const messageContainer = ref(null)
const userAnswers = ref({})

const scrollToBottom = async () => {
  await nextTick()
  messageContainer.value.scrollTop = messageContainer.value.scrollHeight
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  const answer = newMessage.value.trim()

  // Проверяем валидность ответа
  if (!currentQuestion.value.validate(answer)) {
    messages.value.push({
      text: currentQuestion.value.error,
      isUser: false,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    })
    await scrollToBottom()
    return
  }

  // Сохраняем ответ пользователя
  userAnswers.value[currentQuestionIndex.value] = answer

  // Добавляем сообщение пользователя в чат
  messages.value.push({
    text: answer,
    isUser: true,
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  })

  newMessage.value = ''
  await scrollToBottom()

  // Если это был последний вопрос
  if (currentQuestionIndex.value === questions.length - 1) {
    messages.value.push({
      text: 'Спасибо за ваши ответы! Мы свяжемся с вами в ближайшее время.',
      isUser: false,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    })
    // Здесь можно добавить отправку данных на сервер
    console.log('Ответы пользователя:', userAnswers.value)
  } else {
    // Переходим к следующему вопросу
    currentQuestionIndex.value++
    currentQuestion.value = questions[currentQuestionIndex.value]

    // Задаем следующий вопрос
    setTimeout(() => {
      messages.value.push({
        text: currentQuestion.value.text,
        isUser: false,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      })
      scrollToBottom()
    }, 500)
  }
}

onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <div class="flex flex-col h-[500px] mt-4 lg:w-[350px] bg-white rounded-lg shadow-lg">
    <!-- Шапка чата -->
    <div class="flex items-center p-4 border-b">
      <div
        class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center bg-gray-500 rounded-full">
        <span class="text-white text-xl"></span>
      </div>
      <div class="ml-3">
        <h3 class="font-semibold">Консультант</h3>
        <p class="text-sm text-gray-500">Онлайн</p>
      </div>
    </div>

    <!-- Область сообщений -->
    <div
      class="flex-1 p-4 overflow-y-auto"
      ref="messageContainer">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="text-black text-sm"
        :class="['mb-4', message.isUser ? 'flex justify-end ' : '']">
        <div
          :class="[
            'max-w-[80%] rounded-lg p-3',
            message.isUser ? 'bg-blue-500 ' : 'bg-gray-100',
          ]">
          {{ message.text }}
          <!-- <div
						class="text-xs mt-1"
						:class="[message.isUser ? 'text-primary' : 'text-gray-500']">
						{{ message.time }}
					</div> -->
        </div>
      </div>
    </div>

    <!-- Форма отправки -->
    <div class="p-4 border-t">
      <form
        @submit.prevent="sendMessage"
        class="flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          :placeholder="currentQuestion.placeholder"
          class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          :type="currentQuestion.inputType || 'text'" />
        <!-- <button
					type="submit"
					class="px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition">

				</button> -->
      </form>
    </div>
  </div>
</template>
