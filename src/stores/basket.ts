import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', () => {
  const basket = ref<{ id: string; amount: number}[]>([])

  const addToBasket = (productId: string, amount: number) => {

    const existingItem = basket.value.find(item => item.id === productId);

    if (existingItem) {
      existingItem.amount += amount;
    } else {
      basket.value.push({ id: productId, amount})
    }
  }

  const removeFromBasket = (productId: string) => {
    basket.value = basket.value.filter(item => item.id !== productId)
  }

  const totalItems = () => basket.value.reduce((sum, item) => sum + item.amount, 0)

  return { basket, addToBasket, removeFromBasket, totalItems }
})
