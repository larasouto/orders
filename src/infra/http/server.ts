import { green } from 'console-log-colors'
import { app } from './app'
import { langs } from './i18n'
import '../provider/kafka/consumers'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log('📝 Languages loaded successfully', langs)
  console.log('🚀 Server orders running at', green(`http://localhost:${PORT}`))
})
