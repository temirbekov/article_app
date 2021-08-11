import { createAsyncThunk, createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../store'
import { IArticle } from './types'

export interface ArticleState {
  items: Array<IArticle>
}

type TFetchArticlesPayload = Array<string>

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async () => {
    const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    return response.data
  }
)

const initialState: ArticleState = {
  items: []
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<TFetchArticlesPayload>) => {
      action.payload.forEach(text => {
        state.items.push({ id: nanoid(), text })
      })
    })
  }
})

// export const { } = articleSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArticles = (state: RootState) => state.article.items

export const selectArticleByID = (state: RootState, ID: string) => state.article.items.filter(item => item.id === ID)[0]

export default articleSlice.reducer
