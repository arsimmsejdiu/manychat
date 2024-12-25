'use server'

import { redirect } from 'next/navigation'
import { onCurrentUser } from '../user'
import { createIntegration, getIntegration } from './queries'
// import { generateTokens } from '@/lib/fetch'
import axios from 'axios'