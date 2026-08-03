'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  UserPlus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';

// ---- Types ----

interface MemberRow {
  id: string;
  memberId: string;
  initials: string;
  fullName: string;
  phone: string;
  membershipType: string;
  joiningDate: string;
  expiryDate: string;
  status: 'active' | 'expiring' | 'expired';
  batch: string;
}

// ---- Sample Data ----

const MEMBERS: MemberRow[] = [
  { id: '1', memberId: 'UF-247', initials: 'AR', fullName: 'Arjun Reddy', phone: '98765 43210', membershipType: 'Annual', joiningDate: '01 Jan 2025', expiryDate: '31 Dec 2025', status: 'active', batch: 'Morning' },
  { id: '2', memberId: 'UF-246', initials: 'PS', fullName: 'Priya Sharma', phone: '87654 32109', membershipType: 'Quarterly', joiningDate: '15 Jan 2025', expiryDate: '14 Apr 2025', status: 'active', batch: 'Evening' },
  { id: '3', memberId: 'UF-245', initials: 'MF', fullName: 'Mohammed Farouk', phone: '76543 21098', membershipType: 'Monthly', joiningDate: '20 Jan 2025', expiryDate: '19 Feb 2025', status: 'expiring', batch: 'Morning' },
  { id: '4', memberId: 'UF-244', initials: 'SK', fullName: 'Sunita Kulkarni', phone: '65432 10987', membershipType: 'Half-Yearly', joiningDate: '10 Aug 2024', expiryDate: '09 Feb 2025', status: 'expiring', batch: 'Evening' },
  { id: '5', memberId: 'UF-243', initials: 'KP', fullName: 'Kiran Patil', phone: '54321 09876', membershipType: 'PT Package', joiningDate: '05 Nov 2024', expiryDate: '04 Feb 2025', status: 'expired', batch: 'Morning' },
  { id: '6', memberId: 'UF-242', initials: 'RD', fullName: 'Rajesh Deshmukh', phone: '43210 98765', membershipType: 'Annual', joiningDate: '01 Dec 2024', expiryDate: '30 Nov 2025', status: 'active', batch: 'Morning' },
  { id: '7', memberId: 'UF-241', initials: 'AB', fullName: 'Aisha Begum', phone: '32109 87654', membershipType: 'Monthly', joiningDate: '10 Jan 2025', expiryDate: '09 Feb 2025', status: 'expiring', batch: 'Evening' },
  { id: '8', memberId: 'UF-240', initials: 'DC', fullName: 'Deepak Chavan', phone: '21098 76543', membershipType: 'Quarterly', joiningDate: '01 Nov 2024', expiryDate: '31 Jan 2025', status: 'expired', batch: 'Morning' },
  { id: '9', memberId: 'UF-239', initials: 'VB', fullName: 'Vinayak Bhosale', phone: '10987 65432', membershipType: 'Annual', joiningDate: '15 Jun 2024', expiryDate: '14 Jun 2025', status: 'active', batch: 'Morning' },
  { id: '10', memberId: 'UF-238', initials: 'SR', fullName: 'Shweta Rao', phone: '09876 54321', membershipType: 'Half-Yearly', joiningDate: '01 Oct 2024', expiryDate: '31 Mar 2025', status: 'active', batch: 'Evening' },
];

const STATUS_BADGE = {
  active: { label: 'Active', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#10B981' },
  expiring: { label: 'Expiring Soon', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', text: '#F59E0B' },
  expired: { label: 'Expired', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)', text: '#EF4444' },
};

export default function MembersPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [batchFilter, setBatchFilter] = useState('all');
  const [page, setPage] = useState(1);
  const PER_PAGE = 7;

  const filtered = MEMBERS.filter((m) => {
    const matchSearch =
      m.fullName.toLowerCase().includes(search.toLowerCase()) ||
      m.memberId.toLowerCase().includes(search.toLowerCase()) ||
      m.phone.includes(search);
    const matchStatus = statusFilter === 'all' || m.status === statusFilter;
    const matchType = typeFilter === 'all' || m.membershipType === typeFilter;
    const matchBatch = batchFilter === 'all' || m.batch === batchFilter;
    return matchSearch && matchStatus && matchType && matchBatch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function exportCSV() {
    const headers = ['Member ID', 'Name', 'Phone', 'Type', 'Joining Date', 'Expiry Date', 'Status', 'Batch'];
    const rows = MEMBERS.map((m) => [m.memberId, m.fullName, m.phone, m.membershipType, m.joiningDate, m.expiryDate, m.status, m.batch]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'members.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-bold text-2xl">Members</h1>
          <p className="text-white/40 text-sm">{MEMBERS.length} total members</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
          >
            <Download size={15} />
            Export CSV
          </button>
          <Link
            href="/admin/members/add"
            className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
          >
            <UserPlus size={15} />
            Add Member
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div
        className="p-4 rounded-2xl flex flex-wrap gap-3"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, ID or phone..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-white/5 border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <Filter size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="bg-white/5 border border-white/8 rounded-xl pl-8 pr-8 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer transition-colors"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expiring">Expiring</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        {/* Type filter */}
        <select
          value={typeFilter}
          onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}
          className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer transition-colors"
        >
          <option value="all">All Types</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Half-Yearly">Half-Yearly</option>
          <option value="Annual">Annual</option>
          <option value="PT Package">PT Package</option>
        </select>

        {/* Batch filter */}
        <select
          value={batchFilter}
          onChange={(e) => { setBatchFilter(e.target.value); setPage(1); }}
          className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer transition-colors"
        >
          <option value="all">All Batches</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
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
                {['Member', 'Contact', 'Type & Batch', 'Joined', 'Expires', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-white/40 text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {paginated.map((m) => {
                const badge = STATUS_BADGE[m.status];
                return (
                  <tr key={m.id} className="hover:bg-white/2 transition-colors">
                    {/* Member */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 flex items-center justify-center shrink-0">
                          <span className="text-[#C9A84C] text-xs font-bold">{m.initials}</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium whitespace-nowrap">{m.fullName}</p>
                          <p className="text-white/30 text-xs">{m.memberId}</p>
                        </div>
                      </div>
                    </td>
                    {/* Contact */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 text-white/60 text-sm">
                        <Phone size={13} className="text-white/30" />
                        {m.phone}
                      </div>
                    </td>
                    {/* Type */}
                    <td className="px-5 py-3.5">
                      <p className="text-white text-sm whitespace-nowrap">{m.membershipType}</p>
                      <p className="text-white/30 text-xs">{m.batch}</p>
                    </td>
                    {/* Joined */}
                    <td className="px-5 py-3.5 text-white/60 text-sm whitespace-nowrap">{m.joiningDate}</td>
                    {/* Expires */}
                    <td className="px-5 py-3.5 text-white/60 text-sm whitespace-nowrap">{m.expiryDate}</td>
                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap"
                        style={{ background: badge.bg, borderColor: badge.border, color: badge.text }}
                      >
                        {badge.label}
                      </span>
                    </td>
                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          title="View"
                          className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 text-white/50 hover:text-white rounded-lg transition-all"
                        >
                          <Eye size={14} />
                        </button>
                        <Link
                          href={`/admin/members/${m.id}/edit`}
                          title="Edit"
                          className="p-1.5 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/15 hover:border-[#C9A84C]/30 text-[#C9A84C] rounded-lg transition-all"
                        >
                          <Edit size={14} />
                        </Link>
                        <a
                          href={`https://wa.me/91${m.phone.replace(/\s/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="WhatsApp"
                          className="p-1.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/15 hover:border-green-500/30 text-green-400 rounded-lg transition-all"
                        >
                          <MessageCircle size={14} />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-white/30 text-sm">
                    No members found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-white/30 text-xs">
              Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} members
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-7 h-7 rounded-lg text-xs font-medium transition-all ${
                    n === page
                      ? 'bg-[#C9A84C] text-black'
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
