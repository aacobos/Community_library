import cron from 'node-cron'
import moment from 'moment'
import sendEmail from './email.service'
import loanRepository from "../repositories/loan.repositories"
import userRepository from "../repositories/user.repositories"
import bookRespository from "../repositories/book.repositories"

cron.schedule("0 9 * * *", async () => {
    console.log("Running daily job to check for due dates...")
    const loans = await loanRepository.findAllLoansRepository()
    const today = moment().startOf('day')

    loans.forEach( async (loan) => {
        const dueDate = moment(loan,dueDate).startOf("day")
        const reminderDuedate = moment(dueDate).subtract(1, "days")
        const userLoan = await userRepository.findUserByIdRepository(loan.userId)
        const bookLoan = await bookRespository.findBookByIdRepository(loan.bookId)
        if(today.isSame(reminderDuedate)){
            sendEmail(userLoan.email, bookLoan.title, loan.dueDate)
        }
    })
})