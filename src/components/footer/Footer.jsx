import React from 'react';
import FooterNavbar from "./FooterNavbar";
import styles from './styles/Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__tm_nav}>
                <p className={styles.trademark_info}>
                    ® The Empower name and logos are trademarks and service marks (collectively, the “Empower Trademarks”)
                    owned by Empower Finance, Inc.
                    You do not acquire a license or any ownership rights to any trademarks, service marks,
                    or trade names through your access or use of the Empower app or platform product or service.
                </p>
                <FooterNavbar/>
            </div>
            <div className={styles.additional__info}>
                <p>
                    Empower is a financial technology company, not a bank. Banking services provided by nbkc bank, Member FDIC.
                    Empower Thrive provided by FinWise Bank, Member FDIC.
                    Empower charges an auto-recurring monthly subscription fee of $8 (a) after the 14-day free trial
                    concludes for first-time customers, and (b) immediately for customers returning for a second or subsequent subscription.
                </p>

                <p>
                    * Eligibility requirements apply. Opening an Empower Thrive line of credit restricts access to Empower C
                    ash Advance, with access restricted until the Empower Thrive line of credit is closed and you meet
                    the eligibility requirements for Empower Cash Advance.
                </p>

                <p>
                    ^ For Empower Cash Advance, free instant delivery is available for eligible Empower Card customers with an activated debit card.
                    For the Empower Thrive line of credit, there is a 5% fee if you choose instant delivery.
                </p>

                <p>
                    † The Annual Percentage Rate is subject to change. An Empower Thrive line of credit is subject to credit approval.
                    There are no costs to open an Empower Thrive line of credit. If you choose to pay your draw in full on
                    your next paycheck date, your rate will be 0% APR; if you miss your payment, you will accrue interest
                    at 35.99% APR and may incur late fees. If you choose to pay your draw on a date other than your next
                    paycheck date, your rate will be 35.99% APR or as otherwise required by state law.
                </p>

                <p>
                    ‡ We report your payments to the credit bureaus. Pay on time and keep utilization low for the best
                    potential benefit. Many factors impact your credit score, and while making on-time payments and keeping
                    utilization low may improve your score, there is no guarantee this will improve your score.
                </p>

                <p>
                    ** Early access to paycheck deposit funds depends on the timing of the employer’s submission of deposits.
                    We generally post such deposits on the day they are received which may be up to 2 days earlier than
                    the employer’s scheduled payment date.
                </p>

                <p>
                    ^^ Cashback deals on Empower Card purchases, including categories, merchants, and percentages, will
                    vary and must be selected in the app. Cashback will be applied automatically when the final transaction
                    posts, which may be up to a week after the qualifying purchase
                </p>

                <p>
                    Empower Cash Advance is not a payday loan or personal loan. Empower Cash Advance charges no interest
                    or late fees. It's just your money coming to you before payday.
                </p>

                <p>
                    Any balances you hold with nbkc bank, including but not limited to those balances held in Empower
                    accounts are added together and are insured up to $250,000 per depositor through nbkc bank, Member FDIC.
                    nbkc bank utilizes a deposit network service, which means that at any given time, all, none, or a portion
                    of the funds in your Empower accounts may be placed into and held beneficially in your name at other
                    depository institutions which are insured by the Federal Deposit Insurance Corporation (FDIC).
                    For a complete list of other depository institutions where funds may be placed, please visit
                    https://www.cambr.com/bank-list.
                </p>

                <p>
                    Balances moved to network banks are eligible for FDIC insurance once the funds arrive at a network bank.
                    To learn more about pass-through deposit insurance applicable to your account, please see the Account Documentation.
                    Additional information on FDIC insurance can be found at
                </p>
            </div>
        </footer>
    );
};

export default Footer;