'use client';

import { useState } from 'react';
import {
  Plus,
  Search,
  Calendar,
  Download,
  Eye,
  IndianRupee,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  Printer,
} from 'lucide-react';

interface Payment {
  id: string;
  receiptNo: string;
  memberId: string;
  memberName: string;
  date: string;
  amount: number;
  amountPaid: number;
  method: string;
  status: 'paid' | 'pending' | 'partial';
  membershipType: string;
  period: string;
}

const PAYMENTS: Payment[] = [
  { id: '1', receiptNo: 'UF-RCP-001', memberId: 'UF-247', memberName: 'Arjun Reddy', date: '01 Jan 2025', amount: 9999, amountPaid: 9999, method: 'UPI', status: 'paid', membershipType: 'Annual', period: 'Jan 2025 – Dec 2025' },
  { id: '2', receiptNo: 'UF-RCP-002', memberId: 'UF-246', memberName: 'Priya Sharma', date: '15 Jan 2025', amount: 3200, amountPaid: 3200, method: 'Cash', status: 'paid', membershipType: 'Quarterly', period: 'Jan 2025 – Mar 2025' },
  { id: '3', receiptNo: 'UF-RCP-003', memberId: 'UF-245', memberName: 'Mohammed Farouk', date: '20 Jan 2025', amount: 1200, amountPaid: 600, method: 'Cash', status: 'partial', membershipType: 'Monthly', period: 'Jan 2025 – Feb 2025' },
  { id: '4', receiptNo: 'UF-RCP-004', memberId: 'UF-244', memberName: 'Sunita Kulkarni', date: '10 Jan 2025', amount: 5800, amountPaid: 0, method: '—', status: 'pending', membershipType: 'Half-Yearly', period: 'Jan 2025 – Jun 2025' },
  { id: '5', receiptNo: 'UF-RCP-005', memberId: 'UF-243', memberName: 'Kiran Patil', date: '05 Jan 2025', amount: 7000, amountPaid: 7000, method: 'Card', status: 'paid', membershipType: 'PT Package', period: 'Jan 2025 – Feb 2025' },
  { id: '6', receiptNo: 'UF-RCP-006', memberId: 'UF-242', memberName: 'Rajesh Deshmukh', date: '01 Jan 2025', amount: 9999, amountPaid: 9999, method: 'Bank Transfer', status: 'paid', membershipType: 'Annual', period: 'Jan 2025 – Dec 2025' },
  { id: '7', receiptNo: 'UF-RCP-007', memberId: 'UF-241', memberName: 'Aisha Begum', date: '10 Jan 2025', amount: 1200, amountPaid: 1200, method: 'UPI', status: 'paid', membershipType: 'Monthly', period: 'Jan 2025 – Feb 2025' },
];

const STATUS_BADGE = {
  paid: { label: 'Paid', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10B981', icon: CheckCircle },
  pending: { label: 'Pending', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)', text: '#EF4444', icon: AlertCircle },
  partial: { label: 'Partial', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#F59E0B', icon: Clock },
};

interface ReceiptModalProps {
  payment: Payment;
  onClose: () => void;
}

function ReceiptModal({ payment, onClose }: ReceiptModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden z-10"
        style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.2)' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(201,168,76,0.05)' }}
        >
          <div className="flex items-center gap-2">
            <IndianRupee size={16} className="text-[#C9A84C]" />
            <span className="text-white font-semibold text-sm">Payment Receipt</span>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Receipt content */}
        <div className="p-6 space-y-4">
          <div className="text-center pb-4 border-b border-white/6">
            <p className="font-bebas text-2xl text-[#C9A84C] tracking-widest">UGRAMM FITNESS</p>
            <p className="text-white/40 text-xs">Bidar, Karnataka</p>
          </div>

          <div className="space-y-2.5">
            {[
              { label: 'Receipt No', value: payment.receiptNo },
              { label: 'Member', value: payment.memberName },
              { label: 'Member ID', value: payment.memberId },
              { label: 'Date', value: payment.date },
              { label: 'Membership', value: payment.membershipType },
              { label: 'Period', value: payment.period },
              { label: 'Payment Method', value: payment.method },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-white/40">{label}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div
            className="pt-3 border-t border-white/10 space-y-1.5"
          >
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Total Amount</span>
              <span className="text-white">₹{payment.amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Amount Paid</span>
              <span className="text-green-400 font-semibold">₹{payment.amountPaid.toLocaleString('en-IN')}</span>
            </div>
            {payment.amount - payment.amountPaid > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Balance Due</span>
                <span className="text-red-400 font-semibold">₹{(payment.amount - payment.amountPaid).toLocaleString('en-IN')}</span>
              </div>
            )}
          </div>

          <div
            className="text-center py-2 rounded-xl border"
            style={{ background: STATUS_BADGE[payment.status].bg, borderColor: STATUS_BADGE[payment.status].border }}
          >
            <span className="text-sm font-bold" style={{ color: STATUS_BADGE[payment.status].text }}>
              {STATUS_BADGE[payment.status].label.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5">
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold py-3 rounded-xl text-sm transition-colors"
          >
            <Printer size={15} />
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Page ----

export default function PaymentsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const filtered = PAYMENTS.filter((p) => {
    const matchSearch =
      p.memberName.toLowerCase().includes(search.toLowerCase()) ||
      p.receiptNo.toLowerCase().includes(search.toLowerCase()) ||
      p.memberId.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalRevenue = PAYMENTS.filter((p) => p.status !== 'pending').reduce((sum, p) => sum + p.amountPaid, 0);
  const pendingAmount = PAYMENTS.filter((p) => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0);
  const partialDue = PAYMENTS.filter((p) => p.status === 'partial').reduce((sum, p) => sum + (p.amount - p.amountPaid), 0);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-bold text-2xl">Payments</h1>
          <p className="text-white/40 text-sm">January 2025</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
          <Plus size={15} />
          Record Payment
        </button>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Monthly Revenue</p>
          <p className="font-bebas text-3xl text-green-400">₹{totalRevenue.toLocaleString('en-IN')}</p>
          <p className="text-white/30 text-xs mt-1">Collected payments</p>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Partial Due</p>
          <p className="font-bebas text-3xl text-yellow-400">₹{partialDue.toLocaleString('en-IN')}</p>
          <p className="text-white/30 text-xs mt-1">Outstanding balances</p>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Unpaid</p>
          <p className="font-bebas text-3xl text-red-400">₹{pendingAmount.toLocaleString('en-IN')}</p>
          <p className="text-white/30 text-xs mt-1">Pending payments</p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="p-4 rounded-2xl flex flex-wrap gap-3"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          <input
            type="text"
            placeholder="Search member, receipt..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>
        <div className="relative flex items-center gap-2">
          <Calendar size={14} className="text-white/30" />
          <input
            type="month"
            defaultValue="2025-01"
            className="bg-white/5 border border-white/8 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer transition-colors"
        >
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="partial">Partial</option>
        </select>
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all">
          <Download size={14} />
          Export
        </button>
      </div>

      {/* Table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Receipt No', 'Member', 'Date', 'Amount', 'Paid', 'Method', 'Status', 'Action'].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-white/40 text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((p) => {
                const badge = STATUS_BADGE[p.status];
                const StatusIcon = badge.icon;
                return (
                  <tr key={p.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-5 py-3.5">
                      <p className="text-[#C9A84C] font-mono text-xs">{p.receiptNo}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="text-white text-sm font-medium whitespace-nowrap">{p.memberName}</p>
                      <p className="text-white/30 text-xs">{p.memberId}</p>
                    </td>
                    <td className="px-5 py-3.5 text-white/60 text-sm whitespace-nowrap">{p.date}</td>
                    <td className="px-5 py-3.5 text-white text-sm font-medium whitespace-nowrap">
                      ₹{p.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-green-400 text-sm font-medium whitespace-nowrap">
                      ₹{p.amountPaid.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-white/60 text-sm whitespace-nowrap">{p.method}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit whitespace-nowrap"
                        style={{ background: badge.bg, borderColor: badge.border, color: badge.text }}
                      >
                        <StatusIcon size={10} />
                        {badge.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => setSelectedPayment(p)}
                        className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 px-3 py-1.5 rounded-lg transition-all"
                      >
                        <Eye size={13} />
                        Receipt
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-white/30 text-sm">
                    No payments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Receipt Modal */}
      {selectedPayment && (
        <ReceiptModal payment={selectedPayment} onClose={() => setSelectedPayment(null)} />
      )}
    </div>
  );
}
